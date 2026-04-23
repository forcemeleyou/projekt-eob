import { useState } from "react";
import SURVEY_DATA from "../../data/survey_data.json";
import { QUOTES, UI_COPY } from "../../data/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import QuotePreviewModal from "../QuotePreviewModal";
import "./Quotes.css";

const BANNED_EXACT = new Set([
    "",
    ".",
    ",",
    "-",
    "?",
    "!",
    "tak",
    "nie",
    "nwm",
    "nie wiem",
    "ok",
    "git",
    "spoko",
    "tak na minus",
    "popsuje nas",
]);

function normalizeText(text) {
    if (typeof text !== "string") return "";
    return text.replace(/\s+/g, " ").trim();
}

function normalizeForCheck(text) {
    return normalizeText(text)
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, "")
        .trim();
}

function isMeaningfulQuote(text) {
    const normalized = normalizeText(text);
    const normalizedCheck = normalizeForCheck(text);
    const words = normalizedCheck.split(/\s+/).filter(Boolean);
    const letterCount = (normalizedCheck.match(/\p{L}/gu) || []).length;

    if (!normalized) return false;
    if (BANNED_EXACT.has(normalizedCheck)) return false;
    if (letterCount < 12) return false;
    if (words.length < 3 && normalized.length < 25) return false;

    return true;
}

function translateGender(gender, language) {
    if (language === "en") {
        if (gender === "kobieta") return "female";
        if (gender === "mężczyzna") return "male";
        if (gender === "wolę nie podawać") return "prefer not to say";
    }

    return gender;
}

function buildQuotes(language) {
    const dynamicQuotes = SURVEY_DATA
        .filter((row) => isMeaningfulQuote(row.openAnswer))
        .map((row) => ({
            text: normalizeText(row.openAnswer),
            age: row.age,
            gender: translateGender(row.gender, language),
            genderShort: row.gender?.[0]?.toUpperCase() || "?",
        }));

    return dynamicQuotes.length > 0 ? dynamicQuotes : QUOTES[language];
}

export default function Quotes({ language }) {
    const [activeQuotePreview, setActiveQuotePreview] = useState(null);
    const isMobile = useIsMobile();
    const quotes = buildQuotes(language);
    const copy = UI_COPY[language].quotes;
    const featured = quotes.reduce((longest, current) =>
        longest.text.length >= current.text.length ? longest : current,
    );
    const rest = quotes.filter((quote) => quote !== featured);
    const marqueeQuotes = isMobile ? rest : [...rest, ...rest];

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
                        onClick={() => setActiveQuotePreview(featured)}
                        style={{ cursor: "pointer" }}
                    >
                        <blockquote className="feature-quote__text">
                            {featured.text.length > 180
                                ? `${featured.text.slice(0, 180).trim()}...`
                                : featured.text}
                        </blockquote>
                        <figcaption className="feature-quote__meta">
                            - {featured.gender}, {featured.age} {copy.yearsSuffix} - {copy.readMore}
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
                        {marqueeQuotes.map((quote, index) => (
                            <article
                                key={`${quote.age}-${quote.genderShort}-${index}`}
                                className="quote-card"
                                onClick={() => setActiveQuotePreview(quote)}
                            >
                                <div>
                                    <div className="quote-card__num">No. {String((index % rest.length) + 1).padStart(2, "0")}</div>
                                    <p className="quote-card__text">{quote.text}</p>
                                </div>
                                <div className="quote-card__meta">- {quote.gender}, {quote.age} {copy.yearsSuffix}</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <QuotePreviewModal language={language} quote={activeQuotePreview} onClose={() => setActiveQuotePreview(null)} />
        </>
    );
}
