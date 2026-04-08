import { NAV_ITEMS } from "../data/constants";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
    const active = useScrollSpy();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <span className="navbar__brand-bullet" />
                <span>Raport <strong>№ 01</strong> · AI / Społeczeństwo</span>
            </div>
            <div className="navbar__nav">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        className={`nav-link${active === item.id ? " active" : ""}`}
                        onClick={() => scrollTo(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
