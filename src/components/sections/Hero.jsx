import { Suspense, lazy, useEffect, useState } from "react";
import { n, negativeImpact, limitsYes, oftenUsers } from "../../data/stats";
import { CRITICAL_COPY } from "../../data/criticalCopy";
import { useIsMobile } from "../../hooks/useIsMobile";
import "../../style/Hero.css";

const DarkVeil = lazy(() => import("../DarkVeil"));

export default function Hero({ language }) {
    const copy = CRITICAL_COPY[language].hero;
    const isMobile = useIsMobile();
    const [veilReady, setVeilReady] = useState(false);
    const showVeil = veilReady;

    useEffect(() => {
        const scheduleIdle = window.requestIdleCallback ?? ((callback) => window.setTimeout(callback, 900));
        const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
        const idleId = scheduleIdle(() => setVeilReady(true), { timeout: 1600 });

        return () => cancelIdle(idleId);
    }, []);

    return (
        <section id="hero" className="section hero">
            {showVeil && (
                <div className="hero__veil" aria-hidden="true">
                    <Suspense fallback={null}>
                        <DarkVeil
                            hueShift={-24}
                            noiseIntensity={isMobile ? 0.018 : 0.02}
                            scanlineIntensity={isMobile ? 0.035 : 0.04}
                            speed={isMobile ? 0.36 : 0.48}
                            scanlineFrequency={isMobile ? 1.2 : 1.4}
                            warpAmount={isMobile ? 0.24 : 0.28}
                            resolutionScale={isMobile ? 0.58 : 1}
                        />
                    </Suspense>
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
