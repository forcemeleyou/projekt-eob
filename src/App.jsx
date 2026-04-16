import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import ProjectGoals from "./components/sections/ProjectGoals";
import SurveyInfo from "./components/sections/SurveyInfo";
import Results from "./components/sections/Results";
import Quotes from "./components/sections/Quotes";
import Research from "./components/sections/Research";
import Conclusions from "./components/sections/Conclusions";
import Team from "./components/sections/Team";

const LANGUAGE_STORAGE_KEY = "preferred-language";

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

    return (
        <>
            <Navbar language={language} onLanguageChange={setLanguage} />
            <main>
                <Hero language={language} />
                <ProjectGoals language={language} />
                <SurveyInfo language={language} />
                <Results language={language} />
                <Quotes language={language} />
                <Research language={language} />
                <Conclusions language={language} />
                <Team language={language} />
            </main>
            <Footer language={language} />
        </>
    );
}
