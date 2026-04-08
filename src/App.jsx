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

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ProjectGoals />
                <SurveyInfo />
                <Results />
                <Quotes />
                <Research />
                <Conclusions />
                <Team />
            </main>
            <Footer />
        </>
    );
}
