import StatCard from "../StatCard";
import { n, negativeImpact, limitsYes } from "../../data/stats";

export default function Hero() {
  return (
    <section id="hero" className="section" style={{
      background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i * 47 + 11) % 100}%`,
            top: `${(i * 37 + 7) % 100}%`,
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background: "#7ee8a2",
            opacity: 0.15 + (i % 5) * 0.06,
          }} />
        ))}
      </div>
      <div className="container" style={{ textAlign: "center", animation: "fadeInUp 0.8s ease both" }}>
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1,
          margin: "0 0 20px", letterSpacing: "-1.5px",
          background: "linear-gradient(135deg, #e6edf3 0%, #b37ec4 50%, #7fb1eb 100%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "gradMove 5s ease infinite",
        }}>
          Wpływ sztucznej inteligencji<br />na rozwój społeczeństwa
        </h1>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 120 }}>
          <StatCard number={n} label="ankietowanych" />
          <StatCard number={`${Math.round((negativeImpact / n) * 100)}%`} label="widzi negatywny wpływ" />
          <StatCard number={`${Math.round((limitsYes / n) * 100)}%`} label="uważa, że AI ogranicza myślenie" />
        </div>
      </div>
    </section>
  );
}
