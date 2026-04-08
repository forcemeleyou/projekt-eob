import { TEAM_MEMBERS } from "../../data/constants";
import { n } from "../../data/stats";

export default function Team() {
    const projectInfo = [
        { label: "Nazwa projektu: ", val: "Wpływ sztucznej inteligencji na rozwój człowieka" },
        { label: "Rodzaj projektu", val: "Badawczy" },
        { label: "Liczba respondentów", val: `${n} osób` },
        { label: "Miejsce badania", val: "Rzeszów" },
        { label: "Data badania", val: "7 kwietnia 2026" },
    ];

    return (
        <section id="zespol" className="section" style={{ background: "#161b22" }}>
            <div className="container">
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Zespół projektowy</h2>
                <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 40 }}>
                    Przedmiot: Edukacja Obywatelska · Rodzaj projektu: Badawczy · Rok szkolny: 2025/2026
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 40 }}>
                    {TEAM_MEMBERS.map(m => (
                        <div key={m.name} style={{
                            background: "rgba(255,255,255,0.03)", border: `1px solid ${m.color}25`,
                            borderRadius: 16, padding: "24px 22px", borderTop: `3px solid ${m.color}`, position: "relative",
                        }}>
                            {m.role && (
                                <div className="tag" style={{ background: `${m.color}15`, color: m.color, fontSize: 11, borderRadius: 10, position: "absolute", top: 18, right: 18 }}>
                                    {m.role}
                                </div>
                            )}
                            <div style={{
                                width: 48, height: 48, borderRadius: "50%",
                                background: `${m.color}20`, display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 20, fontWeight: 700, color: m.color, marginBottom: 14,
                            }}>
                                {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                            </div>
                            <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 29 }}>{m.name}</h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                {m.tasks.map((t, i) => (
                                    <li key={i} style={{ fontSize: 13, color: "#8b949e", marginBottom: 6, position: "relative", lineHeight: 1.4 }}>
                                        <span style={{ position: "absolute", left: 0, color: m.color }}>·</span>{t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    background: "rgba(126,232,162,0.04)", border: "1px solid rgba(126,232,162,0.15)",
                    borderRadius: 16, padding: "24px 28px",
                }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: "#7ee8a2" }}>Informacje o projekcie</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                        {projectInfo.map(i => (
                            <div key={i.label}>
                                <div style={{ fontSize: 11, color: "#6e7681", marginBottom: 2 }}>{i.label}</div>
                                <div style={{ fontSize: 14, color: "#c9d1d9", fontWeight: 500 }}>{i.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
