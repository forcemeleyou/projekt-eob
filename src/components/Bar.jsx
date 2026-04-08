export default function Bar({ label, value, max, color }) {
    const pct = Math.round((value / max) * 100);
    return (
        <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4, color: "#c9d1d9" }}>
                <span>{label}</span>
                <span style={{ fontWeight: 600 }}>{value} ({pct}%)</span>
            </div>
            <div style={{ height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 5, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 5, transition: "width 1s ease" }} />
            </div>
        </div>
    );
}
