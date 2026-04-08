export default function QuotePreviewModal({ quote, onClose }) {
    if (!quote) return null;

    return (
        <div className="quote-preview-backdrop" onClick={onClose}>
            <article className="quote-preview-modal" onClick={(e) => e.stopPropagation()}>
                <div className="quote-preview-label">Pełna opinia</div>
                <p className="quote-preview-text">{quote.text}</p>
                <div className="quote-preview-meta">— {quote.gender}, {quote.age} lat</div>
            </article>
        </div>
    );
}
