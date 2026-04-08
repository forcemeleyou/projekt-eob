import { n, negativeImpact, oftenUsers, limitsYes } from "../../data/stats";

export default function Conclusions() {
    const conclusions = [
        {
            n: "01",
            title: "Hipoteza potwierdzona",
            body: "Stosunek respondentów do AI jest rzeczywiście ambiwalentny. Większość korzysta z AI regularnie lub od czasu do czasu, jednocześnie wyrażając obawy co do jej negatywnego wpływu na myślenie i rynek pracy. Wyniki są spójne z ogólnopolskimi badaniami KPMG i Maison & Partners.",
            color: "#7ee8a2",
        },
        {
            n: "02",
            title: "Dominuje pesymizm co do przyszłości",
            body: `${Math.round((negativeImpact / n) * 100)}% ankietowanych ocenia wpływ AI na przyszłość społeczeństwa jako raczej lub zdecydowanie negatywny. Główne obawy dotyczą uzależnienia od technologii, lenistwa, zaniku kreatywności i utraty pracy.`,
            color: "#ffa657",
        },
        {
            n: "03",
            title: "Paradoks: używamy, ale się boimy",
            body: `${Math.round((oftenUsers / n) * 100)}% respondentów deklaruje częste korzystanie z AI — głównie w nauce i szkole — ale jednocześnie ${Math.round((limitsYes / n) * 100)}% uważa, że AI ogranicza samodzielne myślenie. To paradoks typowy dla nowych technologii.`,
            color: "#58a6ff",
        },
        {
            n: "04",
            title: "Różnice pokoleniowe",
            body: "Osoby 15–18 lat stanowiły większość respondentów i częściej korzystały z AI niż osoby 40+. Starsze pokolenia rzadziej korzystają z AI, ale równie często (lub częściej) wyrażają sceptycyzm i obawy — jednak niekiedy z bardziej pogłębioną refleksją.",
            color: "#d2a8ff",
        },
    ];

    return (
        <section id="wnioski" className="section" style={{ background: "#0d1117" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Wnioski</h2>
                <div style={{ width: 48, height: 3, background: "#7ee8a2", borderRadius: 2, marginBottom: 40 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {conclusions.map(w => (
                        <div key={w.n} style={{
                            display: "flex", gap: 24, alignItems: "flex-start",
                            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: 16, padding: "24px 28px",
                        }}>
                            <div style={{ fontSize: 32, fontWeight: 800, color: w.color, opacity: 0.3, minWidth: 40, lineHeight: 1 }}>{w.n}</div>
                            <div>
                                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: w.color }}>{w.title}</h3>
                                <p style={{ fontSize: 15, color: "#8b949e", margin: 0, lineHeight: 1.7 }}>{w.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
