import { useState } from "react";
import { SURVEY_QUESTIONS, UI_COPY } from "../../data/constants";
import "../../style/SurveyInfo.css";

export default function SurveyInfo({ language }) {
    const copy = UI_COPY[language].survey;
    const questions = SURVEY_QUESTIONS[language];
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="ankieta" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">{copy.title} <em>{copy.titleEm}</em></h2>
                <p className="lede">{copy.lede}</p>

                <div className="questions">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className={`question-row${openIndex === index ? " is-open" : ""}`}
                        >
                            <div className="question-row__num">{copy.questionPrefix} {String(index + 1).padStart(2, "0")}</div>
                            <div className="question-row__text">{item.q}</div>
                            <div className="question-row__hint">
                                <div className="question-row__hint-label">{item.hint}</div>
                                <button
                                    type="button"
                                    className="question-row__toggle"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    {copy.whyToggle}
                                </button>
                            </div>
                            <div
                                className={`question-row__details${openIndex === index ? " is-open" : ""}`}
                                aria-hidden={openIndex === index ? "false" : "true"}
                            >
                                <div className="question-row__details-inner">
                                    <div className="question-row__details-label">{copy.whyLabel}</div>
                                    <p className="question-row__details-text">{item.why}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
