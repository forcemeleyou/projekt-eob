import Bar from "../Bar";
import "./Results.css";
import {
    n,
    usageFreq,
    futureImpact,
    limitsThinking,
    areasCounts,
} from "../../data/stats";
import { RESULTS_LABELS, UI_COPY } from "../../data/constants";

export default function Results({ language }) {
    const copy = UI_COPY[language].results;
    const labels = RESULTS_LABELS[language];

    return (
        <section id="wyniki" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">{copy.title} <em>{copy.titleEm}</em></h2>

                <div className="results-grid">
                    <div>
                        <h3 className="results-block__title">
                            {copy.blocks.usage} <small>01</small>
                        </h3>
                        {Object.entries(usageFreq).map(([key, value]) => (
                            <Bar key={key} label={labels.usageFreq[key] ?? key} value={value} max={n} />
                        ))}
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            {copy.blocks.future} <small>02</small>
                        </h3>
                        {Object.entries(futureImpact).map(([key, value]) => (
                            <Bar key={key} label={labels.futureImpact[key] ?? key} value={value} max={n} />
                        ))}
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            {copy.blocks.thinking} <small>03</small>
                        </h3>
                        {Object.entries(limitsThinking).map(([key, value]) => (
                            <Bar key={key} label={labels.limitsThinking[key] ?? key} value={value} max={n} />
                        ))}
                    </div>

                    <div>
                        <h3 className="results-block__title">
                            {copy.blocks.areas} <small>04</small>
                        </h3>
                        {areasCounts.slice(0, 5).map((area) => (
                            <Bar key={area.name} label={labels.areas[area.name] ?? area.name} value={area.count} max={n} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
