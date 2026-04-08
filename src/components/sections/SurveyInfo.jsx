import { SURVEY_QUESTIONS } from "../../data/constants";

export default function SurveyInfo() {
    return (
        <section id="ankieta" className="section" style={{ background: "#0d1117" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 62, letterSpacing: "-0.8px" }}>Nasza ankieta</h2>
                <p
                    className="margin"
                    style={{ fontSize: 16, color: "#8b949e", lineHeight: 1.8, maxWidth: 680, marginBottom: 70, margin: "auto" }}
                >
                    Ankieta zawierała 10 pytań zamkniętych i jedno otwarte. Była skierowana do osób w każdym wieku —
                    chcieliśmy zbadać różnice pokoleniowe w postrzeganiu AI. Pokazywaliśmy ludziom kod QR który prowadził do formularza google.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36 }}>
                    {SURVEY_QUESTIONS.map((item, i) => (
                        <div key={i} style={{
                            background: "rgba(42, 77, 117, 0.05)", border: "1px solid rgba(88,166,255,0.15)",
                            borderRadius: 12, padding: "26px 28px",
                        }}>
                            <div style={{ fontSize: 11, color: "#58a6ff", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>
                                pyt. {i + 1} · {item.hint}
                            </div>
                            <p style={{ fontSize: 14, color: "#c9d1d9", margin: 0, lineHeight: 1.5 }}>{item.q}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
