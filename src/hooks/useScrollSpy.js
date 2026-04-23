import { useState, useEffect } from "react";
import { NAV_IDS } from "../data/criticalCopy";

export function useScrollSpy() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const sections = NAV_IDS
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length || !("IntersectionObserver" in window)) return undefined;

        const visibleSections = new Map();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.set(entry.target.id, entry.intersectionRatio);
                    } else {
                        visibleSections.delete(entry.target.id);
                    }
                });

                const nextActive = [...visibleSections.entries()]
                    .sort((a, b) => b[1] - a[1])[0]?.[0];

                if (nextActive) setActive(nextActive);
            },
            {
                rootMargin: "-18% 0px -62% 0px",
                threshold: [0.1, 0.35, 0.6],
            },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return active;
}
