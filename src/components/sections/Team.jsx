import { TEAM_MEMBERS, UI_COPY } from "../../data/constants";
import { n } from "../../data/stats";
import "./Team.css";

function interpolate(text, values) {
    return text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

export default function Team({ language }) {
    const copy = UI_COPY[language].team;
    const members = TEAM_MEMBERS[language];

    return (
        <section id="zespol" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">
                    {copy.title} <em>{copy.titleEm}</em>
                </h2>
                <p className="lede">{copy.lede}</p>

                <div className="team-grid">
                    {members.map((member, index) => (
                        <article key={member.name} className="team-member">
                            <div className="team-member__num">No. {String(index + 1).padStart(2, "0")}</div>
                            {member.role && <div className="team-member__role">{member.role}</div>}
                            <h3 className="team-member__name">{member.name}</h3>
                            <ul className="team-member__tasks">
                                {member.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="colophon">
                    {copy.colophon.map((item) => (
                        <div key={item.label} className="colophon__cell">
                            <span className="label">{item.label}</span>
                            <div className="value">{interpolate(item.val, { n })}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
