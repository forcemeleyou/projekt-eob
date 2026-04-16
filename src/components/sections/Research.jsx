import { RESEARCH_CARDS, UI_COPY } from "../../data/constants";

export default function Research({ language }) {
    const copy = UI_COPY[language].research;
    const cards = RESEARCH_CARDS[language];

    return (
        <section id="kontekst" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">
                    {copy.title} <em>{copy.titleEm}</em>
                </h2>
                <p className="lede">{copy.lede}</p>

                <div className="research-grid">
                    {cards.map((card) => (
                        <article key={card.source} className="research-card">
                            <div className="research-card__source">{card.source}</div>
                            <ul className="research-card__list">
                                {card.facts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
