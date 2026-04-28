import { useState } from "react";
import { QUOTES, UI_COPY } from "../../data/constants";
import { SURVEY_QUOTES } from "../../data/surveyQuotes";
import { useIsMobile } from "../../hooks/useIsMobile";
import QuotePreviewModal from "../QuotePreviewModal";
import "../../style/Quotes.css";

const previewText = (text, length = 180) =>
    text.length > length ? `${text.slice(0, length).trim()}...` : text;

function translateGender(gender, language) {
    if (language === "en") {
        if (gender === "kobieta") return "female";
        if (gender === "mężczyzna") return "male";
        if (gender === "wolę nie podawać") return "prefer not to say";
    }

    return gender;
}

function buildQuotes(language) {
    const dynamicQuotes = SURVEY_QUOTES.map((quote) => ({
        ...quote,
        gender: translateGender(quote.gender, language),
    }));

    return dynamicQuotes.length > 0 ? dynamicQuotes : QUOTES[language];
}

export default function Quotes({ language }) {
    const [activeQuoteIndex, setActiveQuoteIndex] = useState(null);
    const [previewDirection, setPreviewDirection] = useState(1);
    const [mobileQuoteIndex, setMobileQuoteIndex] = useState(0);
    const [mobileQuoteDirection, setMobileQuoteDirection] = useState(1);
    const isMobile = useIsMobile();
    const quotes = buildQuotes(language);
    const copy = UI_COPY[language].quotes;
    const featured = quotes.reduce((longest, current) =>
        longest.text.length >= current.text.length ? longest : current,
    );
    const rest = quotes.filter((quote) => quote !== featured);
    const marqueeQuotes = isMobile
        ? [rest[mobileQuoteIndex % rest.length]]
        : [...rest, ...rest, ...rest];
    const activeQuotePreview = activeQuoteIndex === null ? null : quotes[activeQuoteIndex];

    const moveMobileCarousel = (direction) => {
        setMobileQuoteDirection(direction);
        setMobileQuoteIndex((index) => (index + direction + rest.length) % rest.length);
    };

    return (
        <>
            <section id="cytaty" className="section">
                <div className="container">
                    <div className="eyebrow">{copy.eyebrow}</div>
                    <h2 className="section-title">
                        {copy.title} <em>{copy.titleEm}</em> {copy.titleAfter}
                    </h2>
                    <p className="lede">
                        {copy.lede} <em>"{copy.question}"</em>
                    </p>

                    <figure
                        className="feature-quote"
                        onClick={() => setActiveQuoteIndex(quotes.indexOf(featured))}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="feature-quote__label">{copy.featuredTitle}</div>
                        <blockquote className="feature-quote__text">
                            {previewText(featured.text)}
                        </blockquote>
                        <figcaption className="feature-quote__meta">
                            - {featured.gender}, {featured.age} {copy.yearsSuffix} - {copy.readMore}
                        </figcaption>
                    </figure>
                </div>

                <div
                    className={`quote-marquee${isMobile ? " is-mobile" : ""}`}
                    onTouchMove={isMobile ? (event) => event.preventDefault() : undefined}
                >
                    <div className="quote-marquee__viewport">
                        <div
                            className="quote-track"
                            style={isMobile ? {
                                animation: "none",
                                overflowX: "hidden",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                touchAction: "none",
                                width: "100%",
                                maxWidth: "100vw",
                            } : {}}
                        >
                            {marqueeQuotes.map((quote, index) => (
                                <article
                                    key={`${quote.age}-${quote.genderShort}-${index}`}
                                    className={`quote-card${isMobile ? ` quote-card--mobile is-moving-${mobileQuoteDirection > 0 ? "next" : "prev"}` : " quote-card--desktop"}`}
                                    onClick={() => setActiveQuoteIndex(quotes.indexOf(quote))}
                                >
                                    <div>
                                        <div className="quote-card__num">
                                            No. {String(((isMobile ? mobileQuoteIndex : index) % rest.length) + 1).padStart(2, "0")}
                                        </div>
                                        <p className="quote-card__text">{previewText(quote.text, 150)}</p>
                                    </div>
                                    <div className="quote-card__meta">- {quote.gender}, {quote.age} {copy.yearsSuffix}</div>
                                </article>
                            ))}
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="quote-controls" aria-label={copy.carouselLabel}>
                            <button
                                type="button"
                                className="quote-controls__button"
                                onClick={() => moveMobileCarousel(-1)}
                                aria-label={copy.previousQuote}
                            >
                                &larr;
                            </button>
                            <div className="quote-controls__count">
                                {String((mobileQuoteIndex % rest.length) + 1).padStart(2, "0")} / {String(rest.length).padStart(2, "0")}
                            </div>
                            <button
                                type="button"
                                className="quote-controls__button"
                                onClick={() => moveMobileCarousel(1)}
                                aria-label={copy.nextQuote}
                            >
                                &rarr;
                            </button>
                        </div>
                    ) : null}
                </div>
            </section>
            <QuotePreviewModal
                language={language}
                quote={activeQuotePreview}
                quoteKey={activeQuoteIndex}
                currentIndex={activeQuoteIndex}
                totalQuotes={quotes.length}
                transitionDirection={previewDirection}
                onClose={() => setActiveQuoteIndex(null)}
                onPrevious={activeQuoteIndex === null ? undefined : () => {
                    setPreviewDirection(-1);
                    setActiveQuoteIndex((activeQuoteIndex - 1 + quotes.length) % quotes.length);
                }}
                onNext={activeQuoteIndex === null ? undefined : () => {
                    setPreviewDirection(1);
                    setActiveQuoteIndex((activeQuoteIndex + 1) % quotes.length);
                }}
            />
        </>
    );
}
