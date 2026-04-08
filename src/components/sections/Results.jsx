import Bar from "../Bar";
import {
    n,
    usageFreq,
    futureImpact,
    limitsThinking,
    areasCounts,
    negativeImpact,
    limitsYes,
    oftenUsers,
} from "../../data/stats";

export default function Results() {
    return (
        <section id="wyniki" className="section" style={{ background: "#161b22" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Wyniki ankiety</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 32 }}>

                    <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Jak często korzystasz z AI?</h3>
                        <Bar label="Tak, często" value={usageFreq["tak, często"]} max={n} color="#7ee8a2" />
                        <Bar label="Czasami" value={usageFreq["czasami"]} max={n} color="#58a6ff" />
                        <Bar label="Rzadko" value={usageFreq["rzadko"]} max={n} color="#d2a8ff" />
                        <Bar label="Nie korzystam" value={usageFreq["nie"]} max={n} color="#f78166" />
                    </div>

                    <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Wpływ AI na przyszłość społeczeństwa</h3>
                        <Bar label="Bardzo pozytywny" value={futureImpact["bardzo pozytywny"]} max={n} color="#7ee8a2" />
                        <Bar label="Raczej pozytywny" value={futureImpact["raczej pozytywny"]} max={n} color="#a8f0c0" />
                        <Bar label="Neutralny" value={futureImpact["neutralny"]} max={n} color="#8b949e" />
                        <Bar label="Raczej negatywny" value={futureImpact["raczej negatywny"]} max={n} color="#ffa657" />
                        <Bar label="Bardzo negatywny" value={futureImpact["bardzo negatywny"]} max={n} color="#f78166" />
                    </div>

                    <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Czy AI ogranicza samodzielne myślenie?</h3>
                        <Bar label="Tak" value={limitsThinking["tak"]} max={n} color="#f78166" />
                        <Bar label="Trudno powiedzieć" value={limitsThinking["trudno powiedzieć"]} max={n} color="#ffa657" />
                        <Bar label="Nie" value={limitsThinking["nie"]} max={n} color="#7ee8a2" />
                    </div>

                    <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Obszary zastosowań AI (top 5)</h3>
                        {areasCounts.slice(0, 5).map(a => (
                            <Bar key={a.name} label={a.name} value={a.count} max={n} color="#d2a8ff" />
                        ))}
                    </div>

                </div>

                <div style={{
                    marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap",
                    padding: 24, background: "rgba(126,232,162,0.05)", border: "1px solid rgba(126,232,162,0.15)", borderRadius: 16,
                }}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ fontSize: 32, fontWeight: 700, color: "#7ee8a2" }}>{Math.round((oftenUsers / n) * 100)}%</div>
                        <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>ankietowanych korzysta z AI często lub bardzo często</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ fontSize: 32, fontWeight: 700, color: "#f78166" }}>{Math.round((negativeImpact / n) * 100)}%</div>
                        <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>ocenia przyszły wpływ AI jako negatywny lub bardzo negatywny</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ fontSize: 32, fontWeight: 700, color: "#ffa657" }}>{Math.round((limitsYes / n) * 100)}%</div>
                        <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>uważa, że AI ogranicza samodzielne myślenie</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
