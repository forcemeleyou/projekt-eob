import { useEffect } from "react";
import { UI_COPY } from "../data/constants";
import StarBorder from "./StarBorder";

export default function QuotePreviewModal({ language, quote, onClose }) {
    const copy = UI_COPY[language].quoteModal;
    const quoteSectionCopy = UI_COPY[language].quotes;

    useEffect(() => {
        if (!quote) return;
        const handler = (e) => e.key === "Escape" && onClose();
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
            <StarBorder
                as="article"
                className="quote-modal star-modal"
                color="var(--accent)"
                speed="6s"
                thickness={2}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className="quote-modal__close" onClick={onClose} aria-label={copy.close}>x</button>
                <div className="quote-modal__label">{copy.label}</div>
                <p className="quote-modal__text">"{quote.text}"</p>
                <div className="quote-modal__meta">- {quote.gender}, {quote.age} {quoteSectionCopy.yearsSuffix}</div>
            </StarBorder>
        </div>
    );
}
