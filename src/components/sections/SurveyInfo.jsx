import { SURVEY_QUESTIONS, UI_COPY } from "../../data/constants";

export default function SurveyInfo({ language }) {
    const copy = UI_COPY[language].survey;
    const questions = SURVEY_QUESTIONS[language];

    return (
        <section id="ankieta" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">{copy.title} <em>{copy.titleEm}</em></h2>
                <p className="lede">{copy.lede}</p>

                <div className="questions">
                    {questions.map((item, index) => (
                        <div key={index} className="question-row">
                            <div className="question-row__num">{copy.questionPrefix} {String(index + 1).padStart(2, "0")}</div>
                            <div className="question-row__text">{item.q}</div>
                            <div className="question-row__hint">{item.hint}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
