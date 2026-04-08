import { SURVEY_QUESTIONS } from "../../data/constants";

export default function SurveyInfo() {
    return (
        <section id="ankieta" className="section">
            <div className="container">
                <div className="eyebrow">Narzędzie</div>
                <h2 className="section-title">Nasza <em>ankieta</em></h2>
                <p className="lede">
                    Ankieta zawierała 10 pytań zamkniętych i jedno otwarte. Skierowaliśmy ją do osób w każdym wieku —
                    chcieliśmy zbadać różnice pokoleniowe w postrzeganiu AI. Pokazywaliśmy ludziom kod QR prowadzący do formularza.
                </p>

                <div className="questions">
                    {SURVEY_QUESTIONS.map((item, i) => (
                        <div key={i} className="question-row">
                            <div className="question-row__num">PYT. {String(i + 1).padStart(2, "0")}</div>
                            <div className="question-row__text">{item.q}</div>
                            <div className="question-row__hint">{item.hint}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
