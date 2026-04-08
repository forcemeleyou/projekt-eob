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
        <section id="wyniki" className="section">
            <div className="container">
                <div className="eyebrow">Dane / wyniki</div>
                <h2 className="section-title">Co <em>zobaczyliśmy</em></h2>

                <div className="results-grid">
                    <div>
                        <h3 className="results-block__title">
                            Częstotliwość korzystania <small>01</small>
                        </h3>
                        <Bar label="Tak, często" value={usageFreq["tak, często"]} max={n} />
                        <Bar label="Czasami" value={usageFreq["czasami"]} max={n} />
                        <Bar label="Rzadko" value={usageFreq["rzadko"]} max={n} />
                        <Bar label="Nie korzystam" value={usageFreq["nie"]} max={n} />
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            Wpływ AI na przyszłość <small>02</small>
                        </h3>
                        <Bar label="Bardzo pozytywny" value={futureImpact["bardzo pozytywny"]} max={n} />
                        <Bar label="Raczej pozytywny" value={futureImpact["raczej pozytywny"]} max={n} />
                        <Bar label="Neutralny" value={futureImpact["neutralny"]} max={n} />
                        <Bar label="Raczej negatywny" value={futureImpact["raczej negatywny"]} max={n} />
                        <Bar label="Bardzo negatywny" value={futureImpact["bardzo negatywny"]} max={n} />
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            Czy AI ogranicza myślenie? <small>03</small>
                        </h3>
                        <Bar label="Tak" value={limitsThinking["tak"]} max={n} />
                        <Bar label="Trudno powiedzieć" value={limitsThinking["trudno powiedzieć"]} max={n} />
                        <Bar label="Nie" value={limitsThinking["nie"]} max={n} />
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            Obszary zastosowań · top 5 <small>04</small>
                        </h3>
                        {areasCounts.slice(0, 5).map(a => (
                            <Bar key={a.name} label={a.name} value={a.count} max={n} />
                        ))}
                    </div>
                </div>

                <div className="results-summary">
                    <div className="results-summary__cell">
                        <div className="results-summary__num">
                            {Math.round((oftenUsers / n) * 100)}<em>%</em>
                        </div>
                        <div className="results-summary__label">korzysta z AI często lub bardzo często</div>
                    </div>
                    <div className="results-summary__cell">
                        <div className="results-summary__num" style={{ color: "var(--accent)" }}>
                            {Math.round((negativeImpact / n) * 100)}<em>%</em>
                        </div>
                        <div className="results-summary__label">ocenia wpływ AI jako negatywny lub bardzo negatywny</div>
                    </div>
                    <div className="results-summary__cell">
                        <div className="results-summary__num">
                            {Math.round((limitsYes / n) * 100)}<em>%</em>
                        </div>
                        <div className="results-summary__label">uważa, że AI ogranicza samodzielne myślenie</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
