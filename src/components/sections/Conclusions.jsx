import { n, negativeImpact, oftenUsers, limitsYes } from "../../data/stats";

export default function Conclusions() {
    const conclusions = [
        {
            num: "I",
            title: "Hipoteza potwierdzona",
            body: "Stosunek respondentów do AI jest rzeczywiście ambiwalentny. Większość korzysta z AI regularnie lub od czasu do czasu, jednocześnie wyrażając obawy co do jej negatywnego wpływu na myślenie i rynek pracy. Wyniki są spójne z ogólnopolskimi badaniami KPMG i Maison & Partners.",
        },
        {
            num: "II",
            title: "Dominuje pesymizm co do przyszłości",
            body: `${Math.round((negativeImpact / n) * 100)}% ankietowanych ocenia wpływ AI na przyszłość społeczeństwa jako raczej lub zdecydowanie negatywny. Główne obawy dotyczą uzależnienia od technologii, lenistwa, zaniku kreatywności i utraty pracy.`,
        },
        {
            num: "III",
            title: "Paradoks: używamy, ale się boimy",
            body: `${Math.round((oftenUsers / n) * 100)}% respondentów deklaruje częste korzystanie z AI — głównie w nauce i szkole — ale jednocześnie ${Math.round((limitsYes / n) * 100)}% uważa, że AI ogranicza samodzielne myślenie. To paradoks typowy dla nowych technologii.`,
        },
        {
            num: "IV",
            title: "Różnice pokoleniowe",
            body: "Osoby 15–18 lat stanowiły większość respondentów i częściej korzystały z AI niż osoby 40+. Starsze pokolenia rzadziej korzystają z AI, ale równie często (lub częściej) wyrażają sceptycyzm i obawy — niekiedy z bardziej pogłębioną refleksją.",
        },
    ];

    return (
        <section id="wnioski" className="section">
            <div className="container">
                <div className="eyebrow">Synteza</div>
                <h2 className="section-title">
                    Cztery <em>wnioski</em>
                </h2>

                <div className="conclusions">
                    {conclusions.map(w => (
                        <article key={w.num} className="conclusion">
                            <div className="conclusion__num">{w.num}</div>
                            <div>
                                <h3 className="conclusion__title">{w.title}</h3>
                                <p className="conclusion__body">{w.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
