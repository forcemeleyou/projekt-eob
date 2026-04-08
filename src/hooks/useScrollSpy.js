import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/constants";

export function useScrollSpy() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handler = () => {
            const sections = NAV_ITEMS
                .map(i => document.getElementById(i.id))
                .filter(Boolean);
            let current = "hero";
            for (const s of sections) {
                if (s.getBoundingClientRect().top <= 80) current = s.id;
            }
            setActive(current);
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return active;
}
