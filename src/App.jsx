import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";

const LANGUAGE_STORAGE_KEY = "preferred-language";
const sectionImports = [
    () => import("./components/sections/ProjectGoals"),
    () => import("./components/sections/SurveyInfo"),
    () => import("./components/sections/Results"),
    () => import("./components/sections/Quotes"),
    () => import("./components/sections/Research"),
    () => import("./components/sections/Conclusions"),
    () => import("./components/sections/Team"),
];

const [
    ProjectGoals,
    SurveyInfo,
    Results,
    Quotes,
    Research,
    Conclusions,
    Team,
] = sectionImports.map((loadSection) => lazy(loadSection));

export default function App() {
    const [language, setLanguage] = useState(() => {
        if (typeof window === "undefined") return "pl";
        const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
        return savedLanguage === "en" ? "en" : "pl";
    });

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    useEffect(() => {
        const scheduleIdle = window.requestIdleCallback ?? ((callback) => window.setTimeout(callback, 1200));
        const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
        const idleId = scheduleIdle(() => sectionImports.forEach((loadSection) => loadSection()), { timeout: 2500 });

        return () => cancelIdle(idleId);
    }, []);

    return (
        <>
            <Navbar language={language} onLanguageChange={setLanguage} />
            <main>
                <Hero language={language} />
                <Suspense fallback={null}>
                    <ProjectGoals language={language} />
                    <SurveyInfo language={language} />
                    <Results language={language} />
                    <Quotes language={language} />
                    <Research language={language} />
                    <Conclusions language={language} />
                    <Team language={language} />
                </Suspense>
            </main>
            <Footer language={language} />
        </>
    );
}
