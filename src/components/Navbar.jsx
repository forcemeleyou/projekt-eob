import { useEffect, useState } from "react";
import { CRITICAL_COPY, NAV_ITEMS } from "../data/criticalCopy";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "../style/Navbar.css";

export default function Navbar({ language, onLanguageChange }) {
    const active = useScrollSpy();
    const [open, setOpen] = useState(false);
    const navItems = NAV_ITEMS[language];
    const copy = CRITICAL_COPY[language];

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

    const renderLanguageToggle = () => (
        <div className="navbar__language" aria-label={copy.languageLabel}>
            <button
                type="button"
                className={`navbar__language-btn${language === "pl" ? " is-active" : ""}`}
                onClick={() => onLanguageChange("pl")}
                aria-pressed={language === "pl"}
            >
                PL
            </button>
            <span className="navbar__language-separator">/</span>
            <button
                type="button"
                className={`navbar__language-btn${language === "en" ? " is-active" : ""}`}
                onClick={() => onLanguageChange("en")}
                aria-pressed={language === "en"}
            >
                EN
            </button>
        </div>
    );

    return (
        <>
            <nav className="navbar">
                {renderLanguageToggle()}

                <div className="navbar__nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`nav-link${active === item.id ? " active" : ""}`}
                            onClick={() => scrollTo(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    className={`navbar__burger${open ? " is-open" : ""}`}
                    onClick={() => setOpen((value) => !value)}
                    aria-label={open ? copy.navbar.closeMenu : copy.navbar.openMenu}
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
                    <div className="drawer__header">
                        {renderLanguageToggle()}
                        <div className="drawer__label">{copy.navbar.contents}</div>
                    </div>
                    <ul className="drawer__list">
                        {navItems.map((item, index) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={`drawer__link${active === item.id ? " active" : ""}`}
                                    onClick={() => scrollTo(item.id)}
                                >
                                    <span className="drawer__num">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="drawer__text">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
