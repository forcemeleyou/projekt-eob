import { useEffect } from "react";
import { UI_COPY } from "../data/constants";
import StarBorder from "./StarBorder";
import "../style/Modal.css";
import "../style/QuotePreviewModal.css";

export default function QuotePreviewModal({
    language,
    quote,
    quoteKey,
    currentIndex,
    totalQuotes,
    transitionDirection = 1,
    onClose,
    onPrevious,
    onNext,
}) {
    const copy = UI_COPY[language].quoteModal;
    const quoteSectionCopy = UI_COPY[language].quotes;

    useEffect(() => {
        if (!quote) return;
        const handler = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft" && onPrevious) onPrevious();
            if (e.key === "ArrowRight" && onNext) onNext();
        };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [quote, onClose]);

    if (!quote) return null;

    return (
        <div className="quote-modal__backdrop" onClick={onClose}>
            <div className="quote-modal__shell" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className="quote-modal__arrow quote-modal__arrow--prev"
                    onClick={onPrevious}
                    aria-label={quoteSectionCopy.previousQuote}
                >
                    &larr;
                </button>
                <button
                    type="button"
                    className="quote-modal__arrow quote-modal__arrow--next"
                    onClick={onNext}
                    aria-label={quoteSectionCopy.nextQuote}
                >
                    &rarr;
                </button>
                <div className="quote-modal__stack">
                    <StarBorder
                        as="article"
                        className="quote-modal star-modal"
                        color="var(--accent)"
                        speed="6s"
                        thickness={2}
                    >
                        <div
                            key={quoteKey}
                            className={`quote-modal__content quote-modal__content--${transitionDirection > 0 ? "next" : "prev"}`}
                        >
                            <button type="button" className="quote-modal__close" onClick={onClose} aria-label={copy.close}>x</button>
                            <div className="quote-modal__label">{copy.label}</div>
                            <p className="quote-modal__text">"{quote.text}"</p>
                            <div className="quote-modal__meta">- {quote.gender}, {quote.age} {quoteSectionCopy.yearsSuffix}</div>
                        </div>
                    </StarBorder>
                    <div className="quote-modal__count">
                        {String((currentIndex ?? 0) + 1).padStart(2, "0")} / {String(totalQuotes ?? 0).padStart(2, "0")}
                    </div>
                </div>
            </div>
        </div>
    );
}
