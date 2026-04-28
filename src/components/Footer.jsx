import { CRITICAL_COPY } from "../data/criticalCopy";
import "../style/Footer.css";

const SURVEY_LINK_COPY = {
    pl: {
        eyebrow: "Ankieta",
        title: "Chcesz wziąć udział w naszym badaniu? Wypełnij naszą ankietę online.",
        link: "Przejdź do ankiety Google Forms",
    },
    en: {
        eyebrow: "Survey",
        title: "Want to take part in our study? Fill our survey online.",
        link: "Open the Google Forms survey",
    },
};

export default function Footer({ language }) {
    const copy = CRITICAL_COPY[language].footer;
    const surveyCopy = SURVEY_LINK_COPY[language];

    return (
        <>
            <section className="footer-survey">
                <div className="footer-survey__eyebrow">{surveyCopy.eyebrow}</div>
                <div className="footer-survey__content">
                    <p className="footer-survey__title">{surveyCopy.title}</p>
                    <a
                        className="footer-survey__link"
                        href="https://docs.google.com/forms/d/1wXGs-zFt05q9mztvE8jfaajq6kYDBVmN0SJSMShSLNE/edit?pli=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {surveyCopy.link}
                    </a>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__mark">forcemeleyou </div>
                <div className="footer__byline">
                    {copy.byline[0]}<br />
                    {copy.byline[1]}<br />
                    {copy.byline[2]}
                </div>
            </footer>
        </>
    );
}
