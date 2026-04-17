import { useEffect, useState } from "react";
import { RESEARCH_CARDS, UI_COPY } from "../../data/constants";

export default function Research({ language }) {
    const [activeResearch, setActiveResearch] = useState(null);
    const copy = UI_COPY[language].research;
    const modalCopy = UI_COPY[language].quoteModal;
    const cards = RESEARCH_CARDS[language];

    useEffect(() => {
        if (!activeResearch) return undefined;

        const handler = (event) => {
            if (event.key === "Escape") {
                setActiveResearch(null);
            }
        };

        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [activeResearch]);

    return (
        <>
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
                                <div className="research-card__header">
                                    <div>
                                        <div className="research-card__source">{card.source}</div>
                                        <h3 className="research-card__title">{card.title}</h3>
                                    </div>
                                    <button
                                        type="button"
                                        className="research-card__button"
                                        onClick={() => setActiveResearch(card)}
                                    >
                                        {copy.readMore}
                                    </button>
                                </div>

                                <p className="research-card__summary">{card.summary}</p>

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

            {activeResearch ? (
                <div className="quote-modal__backdrop" onClick={() => setActiveResearch(null)}>
                    <article className="quote-modal research-modal" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="quote-modal__close"
                            onClick={() => setActiveResearch(null)}
                            aria-label={modalCopy.close}
                        >
                            x
                        </button>

                        <div className="research-modal__source-label">{copy.sourceLabel}</div>
                        <div className="research-modal__source">{activeResearch.source}</div>
                        <h3 className="research-modal__title">{activeResearch.title}</h3>
                        {activeResearch.detailPoints?.length ? (
                            <div className="research-modal__points">
                                {activeResearch.detailPoints.map((point) => (
                                    <div key={point.title} className="research-modal__point">
                                        <div className="research-modal__point-title">{point.title}</div>
                                        <p className="research-modal__point-body">{point.body}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="research-modal__text">{activeResearch.details}</p>
                        )}


                        <a
                            href={activeResearch.link}
                            target="_blank"
                            rel="noreferrer"
                            className="research-modal__link"
                        >
                            {copy.openSource}
                        </a>
                    </article>
                </div>
            ) : null}
        </>
    );
}
