import { CRITICAL_COPY } from "../data/criticalCopy";
import "../style/Footer.css";

export default function Footer({ language }) {
    const copy = CRITICAL_COPY[language].footer;

    return (
        <footer className="footer">
            <div className="footer__mark">forcemeleyou </div>
            <div className="footer__byline">
                {copy.byline[0]}<br />
                {copy.byline[1]}<br />
                {copy.byline[2]}
            </div>
        </footer>
    );
}
