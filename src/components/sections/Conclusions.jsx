import { n, negativeImpact, oftenUsers, limitsYes } from "../../data/stats";
import { UI_COPY } from "../../data/constants";

function interpolate(text, values) {
    return text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

export default function Conclusions({ language }) {
    const copy = UI_COPY[language].conclusions;
    const values = {
        negativeImpact: Math.round((negativeImpact / n) * 100),
        oftenUsers: Math.round((oftenUsers / n) * 100),
        limitsYes: Math.round((limitsYes / n) * 100),
    };

    return (
        <section id="wnioski" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">
                    {copy.title} <em>{copy.titleEm}</em>
                </h2>

                <div className="conclusions">
                    {copy.items.map((item) => (
                        <article key={item.num} className="conclusion">
                            <div className="conclusion__num">{item.num}</div>
                            <div>
                                <h3 className="conclusion__title">{item.title}</h3>
                                <p className="conclusion__body">{interpolate(item.body, values)}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
