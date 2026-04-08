import { useState } from "react";
import { QUOTES } from "../../data/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import QuotePreviewModal from "../QuotePreviewModal";

// Najdłuższy cytat trafia jako featured
const featured = QUOTES.reduce((a, b) => (a.text.length >= b.text.length ? a : b));
const rest = QUOTES.filter(q => q !== featured);

export default function Quotes() {
    const [activeQuotePreview, setActiveQuotePreview] = useState(null);
    const isMobile = useIsMobile();
    const marqueeQuotes = isMobile ? rest : [...rest, ...rest];

    return (
        <>
            <section id="cytaty" className="section">
                <div className="container">
                    <div className="eyebrow">Głosy respondentów</div>
                    <h2 className="section-title">
                        Co <em>mówią</em> ludzie
                    </h2>
                    <p className="lede">
                        Odpowiedzi na pytanie otwarte: <em>„Jak Twoim zdaniem AI zmieni życie ludzi w przyszłości?"</em>
                    </p>

                    <figure
                        className="feature-quote"
                        onClick={() => setActiveQuotePreview(featured)}
                        style={{ cursor: "pointer" }}
                    >
                        <blockquote className="feature-quote__text">
                            {featured.text.length > 180
                                ? featured.text.slice(0, 180).trim() + "…"
                                : featured.text}
                        </blockquote>
                        <figcaption className="feature-quote__meta">
                            — {featured.gender}, {featured.age} lat · kliknij, aby przeczytać całość
                        </figcaption>
                    </figure>
                </div>

                <div className="quote-marquee">
                    <div
                        className="quote-track"
                        style={isMobile ? {
                            animation: "none",
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            touchAction: "pan-x",
                            width: "100%",
                            maxWidth: "100vw",
                        } : {}}
                    >
                        {marqueeQuotes.map((quote, i) => (
                            <article
                                key={`${quote.age}-${quote.gender}-${i}`}
                                className="quote-card"
                                onClick={() => setActiveQuotePreview(quote)}
                            >
                                <div>
                                    <div className="quote-card__num">№ {String((i % rest.length) + 1).padStart(2, "0")}</div>
                                    <p className="quote-card__text">{quote.text}</p>
                                </div>
                                <div className="quote-card__meta">— {quote.gender}, {quote.age} lat</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <QuotePreviewModal quote={activeQuotePreview} onClose={() => setActiveQuotePreview(null)} />
        </>
    );
}
