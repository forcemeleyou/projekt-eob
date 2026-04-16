import argparse
import json
import os
import time
from pathlib import Path
from typing import Any

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build


SCOPES = [
    "https://www.googleapis.com/auth/forms.body.readonly",
    "https://www.googleapis.com/auth/forms.responses.readonly",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download responses from Google Forms and save them to JSON files.",
    )
    parser.add_argument(
        "--form-id",
        default=os.getenv("GOOGLE_FORM_ID"),
        help="Google Form ID. Can also be provided via the GOOGLE_FORM_ID environment variable.",
    )
    parser.add_argument(
        "--credentials",
        default="credentials.json",
        help="Path to the OAuth client credentials JSON downloaded from Google Cloud.",
    )
    parser.add_argument(
        "--token",
        default="token.json",
        help="Path where the OAuth token should be stored.",
    )
    parser.add_argument(
        "--output",
        default="src/data/survey_data.json",
        help="Path for the normalized output JSON used by the frontend.",
    )
    parser.add_argument(
        "--schema-output",
        default="data/google_forms_schema.json",
        help="Path for the detected form schema JSON.",
    )
    parser.add_argument(
        "--raw-output",
        default="data/google_forms_raw_responses.json",
        help="Path for the raw API responses JSON.",
    )
    parser.add_argument(
        "--mapping",
        default="scripts/google_forms_mapping.json",
        help="Optional mapping file. If missing, question titles are used as output keys.",
    )
    parser.add_argument(
        "--watch",
        action="store_true",
        help="Keep syncing responses in a loop and update the output file when new data appears.",
    )
    parser.add_argument(
        "--interval",
        type=int,
        default=30,
        help="Polling interval in seconds for --watch mode.",
    )
    return parser.parse_args()


def get_credentials(credentials_path: Path, token_path: Path) -> Credentials:
    creds = None

    if token_path.exists():
        creds = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(credentials_path), SCOPES)
            creds = flow.run_local_server(port=0)

        token_path.parent.mkdir(parents=True, exist_ok=True)
        token_path.write_text(creds.to_json(), encoding="utf-8")

    return creds


def fetch_form(service: Any, form_id: str) -> dict[str, Any]:
    return service.forms().get(formId=form_id).execute()


def fetch_all_responses(service: Any, form_id: str) -> list[dict[str, Any]]:
    responses: list[dict[str, Any]] = []
    page_token = None

    while True:
        request = service.forms().responses().list(formId=form_id, pageToken=page_token)
        payload = request.execute()
        responses.extend(payload.get("responses", []))
        page_token = payload.get("nextPageToken")
        if not page_token:
            break

    return responses


def load_mapping(path: Path) -> dict[str, dict[str, str]]:
    if not path.exists():
        return {"question_ids": {}, "question_titles": {}}

    data = json.loads(path.read_text(encoding="utf-8"))
    return {
        "question_ids": data.get("question_ids", {}),
        "question_titles": data.get("question_titles", {}),
    }


def build_question_map(form: dict[str, Any]) -> dict[str, dict[str, str]]:
    questions: dict[str, dict[str, str]] = {}

    for item in form.get("items", []):
        title = item.get("title", "").strip()

        question_item = item.get("questionItem")
        if question_item and question_item.get("question"):
            question = question_item["question"]
            question_id = question.get("questionId")
            if question_id:
                questions[question_id] = {
                    "questionId": question_id,
                    "title": title or question_id,
                    "type": "questionItem",
                }

        group_item = item.get("questionGroupItem")
        if group_item:
            for question in group_item.get("questions", []):
                question_id = question.get("questionId")
                row_title = (
                    question.get("rowQuestion", {}).get("title")
                    or question.get("title")
                    or question_id
                )
                if question_id:
                    questions[question_id] = {
                        "questionId": question_id,
                        "title": f"{title} - {row_title}".strip(" -"),
                        "type": "questionGroupItem",
                    }

    return questions


def extract_answer_value(answer: dict[str, Any]) -> Any:
    text_answers = answer.get("textAnswers", {}).get("answers", [])
    if text_answers:
        values = [item.get("value", "") for item in text_answers]
        return values[0] if len(values) == 1 else values

    file_answers = answer.get("fileUploadAnswers", {}).get("answers", [])
    if file_answers:
        uploads = []
        for item in file_answers:
            uploads.append(
                {
                    "fileId": item.get("fileId"),
                    "fileName": item.get("fileName"),
                    "mimeType": item.get("mimeType"),
                }
            )
        return uploads

    return None


def normalize_responses(
    responses: list[dict[str, Any]],
    question_map: dict[str, dict[str, str]],
    mapping: dict[str, dict[str, str]],
) -> list[dict[str, Any]]:
    normalized: list[dict[str, Any]] = []

    for response in responses:
        row: dict[str, Any] = {}

        for question_id, answer in response.get("answers", {}).items():
            question = question_map.get(question_id, {})
            title = question.get("title", question_id)
            field_name = (
                mapping["question_ids"].get(question_id)
                or mapping["question_titles"].get(title)
                or title
            )
            row[field_name] = extract_answer_value(answer)

        normalized.append(row)

    return sorted(
        normalized,
        key=lambda item: (
            item.get("_lastSubmittedTime", ""),
            item.get("_createTime", ""),
        ),
    )


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")


def sync_once(
    service: Any,
    form_id: str,
    output_path: Path,
    schema_output_path: Path,
    raw_output_path: Path,
    mapping_path: Path,
) -> int:
    form = fetch_form(service, form_id)
    responses = fetch_all_responses(service, form_id)
    question_map = build_question_map(form)
    mapping = load_mapping(mapping_path)
    normalized = normalize_responses(responses, question_map, mapping)

    schema_payload = {
        "formId": form_id,
        "info": form.get("info", {}),
        "questions": list(question_map.values()),
    }

    write_json(output_path, normalized)
    write_json(schema_output_path, schema_payload)
    write_json(raw_output_path, responses)

    print(f"Saved {len(normalized)} responses to {output_path}")
    print(f"Saved form schema to {schema_output_path}")
    print(f"Saved raw API responses to {raw_output_path}")
    if not mapping_path.exists():
        print(
            f"Mapping file not found at {mapping_path}. "
            "Question titles were used as output keys."
        )

    return len(normalized)


def main() -> None:
    args = parse_args()

    if not args.form_id:
        raise SystemExit("Missing form ID. Use --form-id or set GOOGLE_FORM_ID.")

    credentials_path = Path(args.credentials)
    token_path = Path(args.token)
    output_path = Path(args.output)
    schema_output_path = Path(args.schema_output)
    raw_output_path = Path(args.raw_output)
    mapping_path = Path(args.mapping)

    if not credentials_path.exists():
        raise SystemExit(
            f"Credentials file not found: {credentials_path}. Download credentials.json from Google Cloud first."
        )

    creds = get_credentials(credentials_path, token_path)
    service = build("forms", "v1", credentials=creds)

    if args.watch:
        print(
            f"Watching Google Form {args.form_id} every {args.interval}s "
            f"and updating {output_path}."
        )
        last_count = -1
        while True:
            try:
                current_count = sync_once(
                    service,
                    args.form_id,
                    output_path,
                    schema_output_path,
                    raw_output_path,
                    mapping_path,
                )
                if current_count != last_count:
                    print(f"Response count changed: {last_count} -> {current_count}")
                    last_count = current_count
            except KeyboardInterrupt:
                print("Stopped watching.")
                break
            except Exception as exc:  # noqa: BLE001
                print(f"Sync failed: {exc}")

            time.sleep(args.interval)
    else:
        sync_once(
            service,
            args.form_id,
            output_path,
            schema_output_path,
            raw_output_path,
            mapping_path,
        )


if __name__ == "__main__":
    main()
#  npm run sync:survey:watch -- --form-id 1wXGs-zFt05q9mztvE8jfaajq6kYDBVmN0SJSMShSLNE --interval 30