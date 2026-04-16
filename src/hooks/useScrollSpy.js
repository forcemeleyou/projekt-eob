import { useState, useEffect } from "react";
import { NAV_IDS } from "../data/constants";

export function useScrollSpy() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handler = () => {
            const sections = NAV_IDS
                .map((id) => document.getElementById(id))
                .filter(Boolean);
            let current = "hero";
            for (const section of sections) {
                if (section.getBoundingClientRect().top <= 80) current = section.id;
            }
            setActive(current);
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return active;
}
