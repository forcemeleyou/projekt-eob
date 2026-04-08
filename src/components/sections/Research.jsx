import { RESEARCH_CARDS } from "../../data/constants";

export default function Research() {
    return (
        <section id="kontekst" className="section" style={{ background: "#161b22" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Kontekst badań naukowych</h2>
                <div style={{ width: 48, height: 3, background: "#58a6ff", borderRadius: 2, marginBottom: 40 }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                    {RESEARCH_CARDS.map(card => (
                        <div key={card.source} style={{
                            background: "rgba(255,255,255,0.03)", border: `1px solid ${card.color}30`,
                            borderRadius: 16, padding: "24px 22px", borderTop: `3px solid ${card.color}`,
                        }}>
                            <h3 style={{ fontSize: 14, fontWeight: 600, color: card.color, marginBottom: 16 }}>{card.source}</h3>
                            <ul style={{ margin: 0, padding: "0 0 0 16px", listStyle: "none" }}>
                                {card.facts.map((f, i) => (
                                    <li key={i} style={{ fontSize: 14, color: "#8b949e", marginBottom: 10, lineHeight: 1.5, position: "relative", paddingLeft: 12 }}>
                                        <span style={{ position: "absolute", left: 0, color: card.color }}>·</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
