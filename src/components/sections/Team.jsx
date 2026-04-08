import { TEAM_MEMBERS } from "../../data/constants";
import { n } from "../../data/stats";

export default function Team() {
    const colophon = [
        { label: "Nazwa projektu", val: "Wpływ AI na rozwój człowieka" },
        { label: "Rodzaj", val: "Badawczy" },
        { label: "Próba", val: `${n} respondentów` },
        { label: "Miejsce", val: "Rzeszów, PL" },
        { label: "Data badania", val: "7 IV 2026" },
    ];

    return (
        <section id="zespol" className="section">
            <div className="container">
                <div className="eyebrow">Stopka redakcyjna</div>
                <h2 className="section-title">
                    Zespół <em>projektowy</em>
                </h2>
                <p className="lede">
                    Edukacja Obywatelska · projekt badawczy · rok szkolny 2025/2026
                </p>

                <div className="team-grid">
                    {TEAM_MEMBERS.map((m, i) => (
                        <article key={m.name} className="team-member">
                            <div className="team-member__num">№ {String(i + 1).padStart(2, "0")}</div>
                            {m.role && <div className="team-member__role">{m.role}</div>}
                            <h3 className="team-member__name">{m.name}</h3>
                            <ul className="team-member__tasks">
                                {m.tasks.map((t, j) => (
                                    <li key={j}>{t}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="colophon">
                    {colophon.map(c => (
                        <div key={c.label} className="colophon__cell">
                            <span className="label">{c.label}</span>
                            <div className="value">{c.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
