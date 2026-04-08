import { HelpCircle, ClipboardList } from "lucide-react";

const GOALS = [
    {
        num: "01 / Hipoteza",
        Icon: HelpCircle,
        title: "Punkt wyjścia",
        body: "Zakładaliśmy, że stosunek społeczeństwa do AI jest niejednoznaczny — większość dostrzega zarówno korzyści, jak i zagrożenia. Szczególny niepokój budzi kwestia ograniczania samodzielnego myślenia oraz zagrożenie dla rynku pracy.",
    },
    {
        num: "02 / Metoda",
        Icon: ClipboardList,
        title: "Jak zbieraliśmy dane",
        body: "Przeprowadziliśmy ankietę online udostępnioną w formie kodu QR wśród przechodniów w Rzeszowie (7 kwietnia 2026 r.). Zebraliśmy 91 odpowiedzi od respondentów w różnym wieku — od osób poniżej 15 roku życia po seniorów 60+.",
    },
];

export default function ProjectGoals() {
    return (
        <section id="cel" className="section">
            <div className="container">
                <div className="eyebrow">Założenia projektu</div>
                <h2 className="section-title">Hipoteza <em>i</em> metoda</h2>

                <div className="goals">
                    {GOALS.map(({ num, Icon, title, body }) => (
                        <article key={num} className="goal">
                            <Icon className="goal__icon" strokeWidth={1.5} />
                            <div className="goal__num">{num}</div>
                            <h3 className="goal__title">{title}</h3>
                            <p className="goal__body">{body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
