import { useInView } from "../hooks/useInView";

export default function Bar({ label, value, max }) {
    const pct = Math.round((value / max) * 100);
    const [ref, inView] = useInView({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            className={`bar${inView ? " is-visible" : ""}`}
            style={{ "--pct": `${pct}%` }}
        >
            <div className="bar__label">{label}</div>
            <div className="bar__value">
                <strong>{pct}%</strong> · {value}
            </div>
            <div className="bar__track">
                <div className="bar__fill" />
            </div>
        </div>
    );
}
