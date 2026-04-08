import { RESEARCH_CARDS } from "../../data/constants";

export default function Research() {
    return (
        <section id="kontekst" className="section">
            <div className="container">
                <div className="eyebrow">Kontekst / źródła</div>
                <h2 className="section-title">
                    Inne <em>badania</em>
                </h2>
                <p className="lede">
                    Nasze wyniki w szerszym kontekście — wybrane raporty publikowane w Polsce i UE w ostatnich latach.
                </p>

                <div className="research-grid">
                    {RESEARCH_CARDS.map(card => (
                        <article key={card.source} className="research-card">
                            <div className="research-card__source">{card.source}</div>
                            <ul className="research-card__list">
                                {card.facts.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
