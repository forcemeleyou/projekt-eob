import { useEffect } from "react";

export default function QuotePreviewModal({ quote, onClose }) {
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
            <article className="quote-modal" onClick={(e) => e.stopPropagation()}>
                <button className="quote-modal__close" onClick={onClose} aria-label="Zamknij">×</button>
                <div className="quote-modal__label">Pełna opinia</div>
                <p className="quote-modal__text">„{quote.text}"</p>
                <div className="quote-modal__meta">— {quote.gender}, {quote.age} lat</div>
            </article>
        </div>
    );
}
