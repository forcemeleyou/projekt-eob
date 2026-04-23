import { useEffect, useState } from "react";

const SECTION_TO_NAV = {
    hero: "hero",
    cel: "ankieta",
    ankieta: "ankieta",
    wyniki: "wyniki",
    cytaty: "wyniki",
    kontekst: "kontekst",
    wnioski: "wnioski",
    zespol: "wnioski",
};

const SECTION_IDS = Object.keys(SECTION_TO_NAV);

const getSections = () =>
    SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

const getFallbackActive = () => {
    let activeSection = "hero";

    for (const section of getSections()) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.42) {
            activeSection = section.id;
        }
    }

    return SECTION_TO_NAV[activeSection] ?? "hero";
};

export function useScrollSpy() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        let observer;
        let frame = 0;
        const visibleSections = new Map();

        const setNextActive = (next) => {
            setActive((current) => (current === next ? current : next));
        };

        const updateFallback = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => setNextActive(getFallbackActive()));
        };

        const attachObserver = () => {
            observer?.disconnect();
            visibleSections.clear();

            const sections = getSections();
            if (!sections.length || !("IntersectionObserver" in window)) {
                updateFallback();
                return;
            }

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            visibleSections.set(entry.target.id, entry.boundingClientRect.top);
                        } else {
                            visibleSections.delete(entry.target.id);
                        }
                    });

                    const nextSection = [...visibleSections.entries()]
                        .sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0]?.[0];

                    if (nextSection) setNextActive(SECTION_TO_NAV[nextSection] ?? "hero");
                },
                {
                    rootMargin: "-28% 0px -45% 0px",
                    threshold: [0, 0.1, 0.3, 0.6],
                },
            );

            sections.forEach((section) => observer.observe(section));
            updateFallback();
        };

        const mutationObserver = new MutationObserver(attachObserver);

        attachObserver();
        mutationObserver.observe(document.body, { childList: true, subtree: true });
        window.addEventListener("scroll", updateFallback, { passive: true });
        window.addEventListener("resize", attachObserver);

        return () => {
            cancelAnimationFrame(frame);
            observer?.disconnect();
            mutationObserver.disconnect();
            window.removeEventListener("scroll", updateFallback);
            window.removeEventListener("resize", attachObserver);
        };
    }, []);

    return active;
}
