import { n, negativeImpact, limitsYes, oftenUsers } from "../../data/stats";
import { UI_COPY } from "../../data/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import DarkVeil from "../DarkVeil";
import "./Hero.css";

export default function Hero({ language }) {
    const copy = UI_COPY[language].hero;
    const isMobile = useIsMobile();

    return (
        <section id="hero" className="section hero">
            {!isMobile && (
                <div className="hero__veil" aria-hidden="true">
                    <DarkVeil
                        hueShift={-24}
                        noiseIntensity={0.02}
                        scanlineIntensity={0.04}
                        speed={0.48}
                        scanlineFrequency={1.4}
                        warpAmount={0.28}
                        resolutionScale={1}
                    />
                </div>
            )}
            <div className="hero__overlay" aria-hidden="true" />
            <div className="container">
                <div className="hero__meta">
                    <div><span>{copy.meta.placeTime}</span>Rzeszow - 7 IV 2026</div>
                    <div><span>{copy.meta.respondents}</span>{n} {copy.meta.respondentsSuffix}</div>
                    <div><span>{copy.meta.project}</span>{copy.meta.projectValue}</div>
                    <div><span>{copy.meta.type}</span>{copy.meta.typeValue}</div>
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-line"><span>{copy.title[0]}</span></span>
                    <span className="hero__title-line"><span>{copy.title[1]}</span></span>
                    <span className="hero__title-line"><span><em>{copy.title[2]}</em></span></span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <div className="hero__stat-num">{Math.round((oftenUsers / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">{copy.stats[0]}</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-num accent">{Math.round((negativeImpact / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">{copy.stats[1]}</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-num">{Math.round((limitsYes / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">{copy.stats[2]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
