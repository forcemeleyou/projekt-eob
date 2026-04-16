# Google Forms import

This project includes a Python script that downloads Google Forms responses and writes them to JSON.

## Files

- `scripts/fetch_google_forms.py` - downloads the form schema and responses
- `scripts/google_forms_mapping.example.json` - example field mapping
- `src/data/survey_data.json` - normalized output used directly by the frontend
- `data/google_forms_schema.json` - detected form schema created by the script
- `data/google_forms_raw_responses.json` - raw Google API output created by the script

## 1. Install Python packages

```bash
pip install google-api-python-client google-auth google-auth-httplib2 google-auth-oauthlib
```

## 2. Create Google Cloud credentials

1. Enable `Google Forms API` in your Google Cloud project.
2. Create an OAuth client for a desktop application.
3. Download the credentials file and save it as `credentials.json` in the project root.

Official docs:

- https://developers.google.com/workspace/forms/api/quickstart/python
- https://developers.google.com/workspace/forms/api/guides/retrieve-forms-responses

## 3. Add your form ID

Example form URL:

`https://docs.google.com/forms/d/FORM_ID_HERE/edit`

The `FORM_ID_HERE` part is the form ID.

## 4. Optional mapping

If you want output keys like `age` and `futureImpact` instead of full question titles:

1. Copy `scripts/google_forms_mapping.example.json`
2. Save it as `scripts/google_forms_mapping.json`
3. Adjust the keys to your real question titles or question IDs

## 5. Run the script

```bash
python scripts/fetch_google_forms.py --form-id YOUR_FORM_ID
```

Or with an environment variable:

```bash
$env:GOOGLE_FORM_ID="YOUR_FORM_ID"
python scripts/fetch_google_forms.py
```

## What the script does

- authenticates with OAuth
- downloads the form definition
- downloads all responses
- writes normalized responses to `src/data/survey_data.json`
- writes question metadata to `data/google_forms_schema.json`
- writes raw API responses to `data/google_forms_raw_responses.json`

## Auto-update mode

If you want the site data file to refresh automatically while you work locally:

```bash
python scripts/fetch_google_forms.py --form-id YOUR_FORM_ID --watch --interval 30
```

This checks for new responses every 30 seconds and overwrites `src/data/survey_data.json`.
If the Vite dev server is running, the page should refresh with the new data automatically.

## Notes

- On the first run Google will open a browser window to authorize access.
- The generated `token.json` is reused on later runs.
- If `scripts/google_forms_mapping.json` does not exist, the script uses question titles as JSON keys.
- For a deployed static site, changing the local JSON file is not enough by itself. You still need a running sync process plus a redeploy, or a real backend/API.
