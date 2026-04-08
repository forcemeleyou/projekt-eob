import { NAV_ITEMS } from "../data/constants";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
    const active = useScrollSpy();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: "rgba(13,17,23,0.88)", backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "end",
        }}>
            <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        className={`nav-link${active === item.id ? " active" : ""}`}
                        onClick={() => scrollTo(item.id)}
                        style={{ border: "none", background: "none", fontSize: "12px" }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
