import { HelpCircle, ClipboardList } from "lucide-react";

const GOALS = [
    {
        icon: <HelpCircle />,
        title: "Hipoteza badawcza",
        body: "Zakładaliśmy, że stosunek społeczeństwa do AI jest różny — większość dostrzega zarówno korzyści, jak i zagrożenia, a szczególnie niepokój budzi kwestia ograniczania samodzielnego myślenia i zagrożenie dla rynku pracy.",
    },
    {
        icon: <ClipboardList />,
        title: "Metoda",
        body: "Przeprowadziliśmy ankietę online udostępnioną w formie kodu QR wśród przechodniów w Rzeszowie (7 kwietnia 2026 r.). Zebraliśmy 91 odpowiedzi od respondentów w różnym wieku — od osób poniżej 15 roku życia po seniorów 60+.",
    },
];

export default function ProjectGoals() {
    return (
        <section id="cel" className="section" style={{ background: "#161b22" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 70, letterSpacing: "-0.8px" }}>Założenia projektu</h2>
                <div>
                    {GOALS.map(c => (
                        <div key={c.title} style={{
                            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: 16, padding: "28px 24px", margin: "30px 5px", textAlign: "left",
                        }}>
                            <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: "#e6edf3" }}>{c.title}</h3>
                            <p style={{ fontSize: 15, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>{c.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
