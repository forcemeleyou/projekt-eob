import { n, negativeImpact, limitsYes, oftenUsers } from "../../data/stats";

export default function Hero() {
    return (
        <section id="hero" className="section hero">
            <div className="container">
                <div className="hero__meta">
                    <div><span>Raport</span>№ 01 / 2026</div>
                    <div><span>Zakres</span>Rzeszów · 7 IV 2026</div>
                    <div><span>Próba</span>{n} respondentów</div>
                    <div><span>Temat</span>AI a społeczeństwo</div>
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-line"><span>Sztuczna&nbsp;</span></span>
                    <span className="hero__title-line"><span>inteligencja</span></span>
                    <span className="hero__title-line"><span><em>a człowiek.</em></span></span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <div className="hero__stat-num">{Math.round((oftenUsers / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">korzysta z AI często</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-num accent">{Math.round((negativeImpact / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">widzi negatywny wpływ na przyszłość</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-num">{Math.round((limitsYes / n) * 100)}<small style={{ fontSize: "0.5em" }}>%</small></div>
                            <div className="hero__stat-label">uważa, że AI ogranicza myślenie</div>
                        </div>
                    </div>
                    <div className="hero__byline">
                        Edukacja Obywatelska<br />
                        rok szk. 2025/2026
                    </div>
                </div>
            </div>
        </section>
    );
}
