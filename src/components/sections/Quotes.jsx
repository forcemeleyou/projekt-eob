import { useState } from "react";
import { QUOTES } from "../../data/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import QuotePreviewModal from "../QuotePreviewModal";

export default function Quotes() {
    const [activeQuotePreview, setActiveQuotePreview] = useState(null);
    const isMobile = useIsMobile();
    // Na mobile NIE powielamy cytatów, na desktopie powielamy dla efektu karuzeli
    const marqueeQuotes = isMobile ? QUOTES : [...QUOTES, ...QUOTES];

    return (
        <>
            <section id="cytaty" className="section" style={{ background: "#0d1117" }}>
                <div className="container">
                    <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Głosy respondentów</h2>
                    <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 40, marginTop: 50 }}>
                        Wybrane odpowiedzi na pytanie otwarte: "Jak Twoim zdaniem AI zmieni życie ludzi w przyszłości?"
                    </p>
                    <div className="quote-marquee">
                        <div
                            className="quote-track"
                            style={isMobile ? {
                                overflowX: "auto",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                animation: "none",
                                touchAction: "pan-x",
                                display: "flex",
                                gap: 32,
                                minWidth: "100%",
                                maxWidth: "100vw",
                                paddingBottom: 8,
                            } : {}}
                            onTouchStart={isMobile ? e => e.stopPropagation() : undefined}
                        >
                            {marqueeQuotes.map((quote, i) => (
                                <article
                                    key={`${quote.age}-${quote.gender}-${i}`}
                                    className="quote-marquee-card"
                                    onClick={() => setActiveQuotePreview(quote)}
                                >
                                    <p className="quote-text">{quote.text}</p>
                                    <div className="quote-meta">
                                        — {quote.gender}, {quote.age} lat
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <QuotePreviewModal quote={activeQuotePreview} onClose={() => setActiveQuotePreview(null)} />
        </>
    );
}
