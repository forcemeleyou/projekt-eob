import { UI_COPY } from "../data/constants";
import "./Footer.css";

export default function Footer({ language }) {
    const copy = UI_COPY[language].footer;

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
