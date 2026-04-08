import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/constants";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
    const active = useScrollSpy();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const handler = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [open]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar__brand">
                    <span className="navbar__brand-bullet" />
                    <span className="navbar__brand-text">
                        Raport <strong>№ 01</strong> · AI / Społeczeństwo
                    </span>
                    <span className="navbar__brand-text navbar__brand-text--short">
                        Raport <strong>№ 01</strong>
                    </span>
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

                <button
                    className={`navbar__burger${open ? " is-open" : ""}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label={open ? "Zamknij menu" : "Otwórz menu"}
                    aria-expanded={open}
                >
                    <span /><span /><span />
                </button>
            </nav>

            <div
                className={`drawer${open ? " is-open" : ""}`}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            >
                <div className="drawer__panel" onClick={(e) => e.stopPropagation()}>
                    <div className="drawer__label">Spis treści</div>
                    <ul className="drawer__list">
                        {NAV_ITEMS.map((item, i) => (
                            <li key={item.id}>
                                <button
                                    className={`drawer__link${active === item.id ? " active" : ""}`}
                                    onClick={() => scrollTo(item.id)}
                                >
                                    <span className="drawer__num">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="drawer__text">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="drawer__footer">Raport № 01 / 2026</div>
                </div>
            </div>
        </>
    );
}
