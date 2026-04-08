export default function StatCard({ number, label, sub }) {
    return (
        <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "28px 24px",
            textAlign: "center",
            flex: 1,
            minWidth: 160,
        }}>
            <div style={{ fontSize: 42, fontWeight: 700, color: "#b371e9", fontFamily: "'Merriweather', serif", lineHeight: 1 }}>{number}</div>
            <div style={{ fontSize: 14, color: "#8b949e", marginTop: 8 }}>{label}</div>
            {sub && <div style={{ fontSize: 12, color: "#6e7681", marginTop: 4 }}>{sub}</div>}
        </div>
    );
}
