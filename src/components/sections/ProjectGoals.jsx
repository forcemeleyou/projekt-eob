import { HelpCircle, ClipboardList } from "lucide-react";
import { UI_COPY } from "../../data/constants";
import "../../style/ProjectGoals.css";

const ICONS = [HelpCircle, ClipboardList];

export default function ProjectGoals({ language }) {
    const copy = UI_COPY[language].goals;

    return (
        <section id="cel" className="section">
            <div className="container">
                <div className="eyebrow">{copy.eyebrow}</div>
                <h2 className="section-title">
                    {copy.title} <em>{copy.titleEm}</em> {copy.titleAfter}
                </h2>

                <div className="goals">
                    {copy.cards.map(({ num, title, body }, index) => {
                        const Icon = ICONS[index];
                        return (
                            <article key={num} className="goal">
                                <div className="goal__top">
                                    <div className="goal__num">{num}</div>
                                    <Icon className="goal__icon" strokeWidth={1.5} />
                                </div>
                                <h3 className="goal__title">{title}</h3>
                                <p className="goal__body">{body}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
