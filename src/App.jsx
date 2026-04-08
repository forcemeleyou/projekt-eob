import { useState, useEffect } from "react";
import { HelpCircle, ClipboardList, TrendingDown, TrendingUp } from "lucide-react";

import SURVEY_DATA from "./survey_data.json";
import QUESTIONS from "./question.json";
import { GLOBAL_CSS, COLORS, heroTitleStyle, /* ... */ } from "./styles";

const n = SURVEY_DATA.length;

function count(arr, key, val) {
  return arr.filter(r => r[key] === val).length;
}
function countArr(arr, key, val) {
  return arr.filter(r => r[key] && r[key].includes(val)).length;
}

const usageFreq = {
  "tak, często": count(SURVEY_DATA, "usesAI", "tak, często"),
  "czasami": count(SURVEY_DATA, "usesAI", "czasami"),
  "rzadko": count(SURVEY_DATA, "usesAI", "rzadko"),
  "nie": count(SURVEY_DATA, "usesAI", "nie"),
};

const futureImpact = {
  "bardzo pozytywny": count(SURVEY_DATA, "futureImpact", "bardzo pozytywny"),
  "raczej pozytywny": count(SURVEY_DATA, "futureImpact", "raczej pozytywny"),
  "neutralny": count(SURVEY_DATA, "futureImpact", "neutralny"),
  "raczej negatywny": count(SURVEY_DATA, "futureImpact", "raczej negatywny"),
  "bardzo negatywny": count(SURVEY_DATA, "futureImpact", "bardzo negatywny"),
};

const limitsThinking = {
  "tak": count(SURVEY_DATA, "limitsThinking", "tak"),
  "nie": count(SURVEY_DATA, "limitsThinking", "nie"),
  "trudno powiedzieć": count(SURVEY_DATA, "limitsThinking", "trudno powiedzieć"),
};

const areas = ["Nauka i szkoła", "Codzienne życie", "Technologia i praca", "Rozrywka i kreatywność", "Medycyna", "Biznes i ekonomia", "Transport"];
const areasCounts = areas.map(a => ({ name: a, count: countArr(SURVEY_DATA, "areas", a) })).sort((a,b) => b.count - a.count);

const QUOTES = [
  { text: "Ludzie będą zawsze wybierać proste rozwiązania — nie będą nawet próbowali samodzielnie myśleć.", age: "15–18", gender: "kobieta" },
  { text: "Zatrze się umiejętność mózgu odróżniania fikcji od realu.", age: "40+", gender: "kobieta" },
  { text: "Pogłębi różnice w społeczeństwie — ludzie wykształceni będą się jeszcze szybciej rozwijać, a mniej wykształceni staną się materiałem do sterowania.", age: "40+", gender: "kobieta" },
  { text: "Można korzystać z niej odpowiedzialnie, ale jest używana do robienia za ludzi podstawowych procesów myślowych — i to się raczej nie zmieni.", age: "19–25", gender: "mężczyzna" },
  { text: "Myślę, że ludzie zrobią się leniwi.", age: "15–18", gender: "kobieta" },
  { text: "Mogą wyręczyć informatyków.", age: "15–18", gender: "kobieta" },
  {text:"pogłębi różnice w społeczeństwie.. ludzie wykształceni inteligentni będą jeszcze bardziej szybciej się rozwijać dzięki łatwiejszemu dostępowi do wiedzy, a zdecydowana większość społeczeństwa, ta mniej wykształcona, inteligentna inaczej, za to przeświadczona o swojej mądrości będzie doskonałym materiałem do sterowania .. będzie wybierać zgodnie z założeniami programu, będzie żyła w mega iluzji świadomego, wolnego wyboru doskonale zarządzana przez system.. współczesne niewolnictwo.. stworzyć tłumowi takie środowisko życia, doskonałą iluzję, w której będzie miał poczucie wolności, wolnego wyboru i pełnego wpływu na swoje życie a będzie tylko doskonale sterowaną marionetką...", age: "15–18", gender: "kobieta" }
];

const NAV_ITEMS = [
  { id: "hero", label: "Start" },
  { id: "ankieta", label: "Ankieta" },
  { id: "wyniki", label: "Wyniki" },
  { id: "kontekst", label: "Badania naukowe" },
  { id: "wnioski", label: "Wnioski" },
];

function useScrollSpy() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const handler = () => {
      const sections = NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);
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

function Bar({ label, value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4, color: "#c9d1d9" }}>
        <span>{label}</span>
        <span style={{ fontWeight: 600 }}>{value} ({pct}%)</span>
      </div>
      <div style={{ height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 5, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 5, transition: "width 1s ease" }} />
      </div>
    </div>
  );
}

function StatCard({ number, label, sub }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: "28px 24px",
      textAlign: "center",
      flex: 1,
      minWidth: 160,
    }}>
      <div style={{ fontSize: 42, fontWeight: 700, color: "#b371e9", fontFamily: "'Merriweather', serif", lineHeight: 1 }}>{number}</div>
      <div style={{ fontSize: 14, color: "#8b949e", marginTop: 8 }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: "#6e7681", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}

export default function App() {
  const active = useScrollSpy();
  const [navOpen, setNavOpen] = useState(false);
  const [activeQuotePreview, setActiveQuotePreview] = useState(null);
  const isMobile = useIsMobile();
  // Na mobile NIE powielamy cytatów, na desktopie powielamy dla efektu karuzeli
  const marqueeQuotes = isMobile ? QUOTES : [...QUOTES, ...QUOTES];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const positiveImpact = (futureImpact["bardzo pozytywny"] + futureImpact["raczej pozytywny"]);
  const negativeImpact = (futureImpact["bardzo negatywny"] + futureImpact["raczej negatywny"]);
  const limitsYes = limitsThinking["tak"];
  const oftenUsers = usageFreq["tak, często"];

  return (
    <div style={{
      fontFamily: "'Merriweather', serif",
      background: "#0d1117",
      color: "#e6edf3",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(13,17,23,0.88)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "end",
      }}>
        <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} className={`nav-link${active === item.id ? " active" : ""}`} onClick={() => scrollTo(item.id)}
              style={{ border: "none", background: "none",fontSize:"12px" }}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="section" style={{
        background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
        }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              left: `${(i * 47 + 11) % 100}%`,
              top: `${(i * 37 + 7) % 100}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              borderRadius: "50%",
              background: "#7ee8a2",
              opacity: 0.15 + (i % 5) * 0.06,
            }} />
          ))}
        </div>
        <div className="container" style={{ textAlign: "center", animation: "fadeInUp 0.8s ease both" }}>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1,
            margin: "0 0 20px", letterSpacing: "-1.5px",
            background: "linear-gradient(135deg, #e6edf3 0%, #b37ec4 50%, #7fb1eb 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "gradMove 5s ease infinite",
          }}>
            Wpływ sztucznej inteligencji<br />na rozwój społeczeństwa
          </h1>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",marginTop:120 }}>
            <StatCard number={n} label="ankietowanych"  />
            <StatCard number={`${Math.round((negativeImpact/n)*100)}%`} label="widzi negatywny wpływ"  />
            <StatCard number={`${Math.round((limitsYes/n)*100)}%`} label="uważa, że AI ogranicza myślenie" />
          </div>
        </div>
      </section>

      {/* CEL */}
      <section id="cel" className="section" style={{ background: "#161b22" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 70, letterSpacing: "-0.8px" }}>Założenia projektu</h2>
          <div style={{ }}>
            {[
              { icon: <HelpCircle />, title: "Hipoteza badawcza", body: "Zakładaliśmy, że stosunek społeczeństwa do AI jest różny — większość dostrzega zarówno korzyści, jak i zagrożenia, a szczególnie niepokój budzi kwestia ograniczania samodzielnego myślenia i zagrożenie dla rynku pracy." },
              { icon: <ClipboardList />, title: "Metoda", body: "Przeprowadziliśmy ankietę online udostępnioną w formie kodu QR wśród przechodniów w Rzeszowie (7 kwietnia 2026 r.). Zebraliśmy 91 odpowiedzi od respondentów w różnym wieku — od osób poniżej 15 roku życia po seniorów 60+." },
            ].map(c => (
              <div key={c.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "28px 24px",margin:"30px 5px",textAlign:"left",
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: "#e6edf3" }}>{c.title}</h3>
                <p style={{ fontSize: 15, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANKIETA */}
      <section id="ankieta" className="section" style={{ background: "#0d1117" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 62, letterSpacing: "-0.8px" }}>Nasza ankieta</h2>
          <p style={{ fontSize: 16, color: "#8b949e", lineHeight: 1.8, maxWidth: 680, marginBottom: 70,margin:"auto"}} className="margin">
            Ankieta zawierała 10 pytań zamkniętych i jedno otwarte. Była skierowana do osób w każdym wieku —
            chcieliśmy zbadać różnice pokoleniowe w postrzeganiu AI. Pokazywaliśmy ludziom kod QR który prowadził do formularza google.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36 }}>
            {[
              { q: "Czy korzystasz z AI?", hint: "częstotliwość" },
              { q: "Czy AI pomaga w rozwoju człowieka?", hint: "ocena ogólna" },
              { q: "W jakich obszarach AI jest pomocna?", hint: "wielokrotny wybór" },
              { q: "Czy AI ogranicza samodzielne myślenie?", hint: "kluczowe pytanie" },
              { q: "Czy obawiasz się AI?", hint: "emocje" },
              { q: "Czy AI może zastąpić ludzi w pracy?", hint: "rynek pracy" },
              { q: "Jak oceniasz wpływ AI na przyszłość?", hint: "prognoza" },
              { q: "Jak AI zmieni życie w przyszłości?", hint: "pytanie otwarte" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(42, 77, 117, 0.05)", border: "1px solid rgba(88,166,255,0.15)",
                borderRadius: 12, padding: "26px 28px",
              }}>
                <div style={{ fontSize: 11, color: "#58a6ff", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>pyt. {i + 1} · {item.hint}</div>
                <p style={{ fontSize: 14, color: "#c9d1d9", margin: 0, lineHeight: 1.5 }}>{item.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WYNIKI */}
      <section id="wyniki" className="section" style={{ background: "#161b22" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Wyniki ankiety</h2>


          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 32 }}>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Jak często korzystasz z AI?</h3>
              <Bar label="Tak, często" value={usageFreq["tak, często"]} max={n} color="#7ee8a2" />
              <Bar label="Czasami" value={usageFreq["czasami"]} max={n} color="#58a6ff" />
              <Bar label="Rzadko" value={usageFreq["rzadko"]} max={n} color="#d2a8ff" />
              <Bar label="Nie korzystam" value={usageFreq["nie"]} max={n} color="#f78166" />
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Wpływ AI na przyszłość społeczeństwa</h3>
              <Bar label="Bardzo pozytywny" value={futureImpact["bardzo pozytywny"]} max={n} color="#7ee8a2" />
              <Bar label="Raczej pozytywny" value={futureImpact["raczej pozytywny"]} max={n} color="#a8f0c0" />
              <Bar label="Neutralny" value={futureImpact["neutralny"]} max={n} color="#8b949e" />
              <Bar label="Raczej negatywny" value={futureImpact["raczej negatywny"]} max={n} color="#ffa657" />
              <Bar label="Bardzo negatywny" value={futureImpact["bardzo negatywny"]} max={n} color="#f78166" />
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Czy AI ogranicza samodzielne myślenie?</h3>
              <Bar label="Tak" value={limitsThinking["tak"]} max={n} color="#f78166" />
              <Bar label="Trudno powiedzieć" value={limitsThinking["trudno powiedzieć"]} max={n} color="#ffa657" />
              <Bar label="Nie" value={limitsThinking["nie"]} max={n} color="#7ee8a2" />
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20, color: "#c9d1d9" }}>Obszary zastosowań AI (top 5)</h3>
              {areasCounts.slice(0, 5).map(a => (
                <Bar key={a.name} label={a.name} value={a.count} max={n} color="#d2a8ff" />
              ))}
            </div>

          </div>

          <div style={{
            marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap",
            padding: 24, background: "rgba(126,232,162,0.05)", border: "1px solid rgba(126,232,162,0.15)", borderRadius: 16,
          }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#7ee8a2" }}>{Math.round((oftenUsers / n) * 100)}%</div>
              <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>ankietowanych korzysta z AI często lub bardzo często</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#f78166" }}>{Math.round((negativeImpact / n) * 100)}%</div>
              <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>ocenia przyszły wpływ AI jako negatywny lub bardzo negatywny</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#ffa657" }}>{Math.round((limitsYes / n) * 100)}%</div>
              <div style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>uważa, że AI ogranicza samodzielne myślenie</div>
            </div>
          </div>
        </div>
      </section>

      {/* CYTATY */}
      <section id="cytaty" className="section" style={{ background: "#0d1117" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Głosy respondentów</h2>
          <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 40,marginTop:50 }}>Wybrane odpowiedzi na pytanie otwarte: "Jak Twoim zdaniem AI zmieni życie ludzi w przyszłości?"</p>
          <div className="quote-marquee">
            <div
              className="quote-track"
              style={isMobile ? {
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                animation: 'none',
                touchAction: 'pan-x',
                display: 'flex',
                gap: 32,
                minWidth: '100%',
                maxWidth: '100vw',
                paddingBottom: 8
              } : {}}
              onTouchStart={isMobile ? e => e.stopPropagation() : undefined}
            >
              {marqueeQuotes.map((quote, i) => (
                <article
                  key={`${quote.age}-${quote.gender}-${i}`}
                  className="quote-marquee-card"
                  onClick={() => setActiveQuotePreview(quote)}
                >
                  <p className="quote-text">{quote.text}</p>
                  <div className="quote-meta">
                    — {quote.gender}, {quote.age} lat
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {activeQuotePreview && (
        <div className="quote-preview-backdrop" onClick={() => setActiveQuotePreview(null)}>
          <article className="quote-preview-modal" onClick={(e) => e.stopPropagation()}>
            <div className="quote-preview-label">Pełna opinia</div>
            <p className="quote-preview-text">{activeQuotePreview.text}</p>
            <div className="quote-preview-meta">— {activeQuotePreview.gender}, {activeQuotePreview.age} lat</div>
          </article>
        </div>
      )}

      {/* KONTEKST NAUKOWY */}
      <section id="kontekst" className="section" style={{ background: "#161b22" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Kontekst badań naukowych</h2>
          <div style={{ width: 48, height: 3, background: "#58a6ff", borderRadius: 2, marginBottom: 40 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                source: "KPMG / Uniwersytet w Melbourne (2025)",
                color: "#58a6ff",
                facts: [
                  "69% Polaków korzysta z AI regularnie (średnia światowa: 66%)",
                  "41% Polaków deklaruje zaufanie do AI (światowa: 46%)",
                  "89% Polaków wskazuje na ryzyko cyberzagrożeń związanych z AI",
                  "54% zetknęło się z dezinformacją wygenerowaną przez AI",
                ],
              },
              {
                source: "Maison & Partners / ThinkTank (2024)",
                color: "#7ee8a2",
                facts: [
                  "42% Polaków korzysta świadomie z narzędzi AI",
                  "Wśród osób poniżej 25 lat — odsetek ten wynosi 56%",
                  "Ponad połowa Polaków (58%) twierdzi, że nigdy nie korzystała z AI",
                  "Mężczyźni bardziej otwarci na AI niż kobiety",
                ],
              },
              {
                source: "SW Research (2024)",
                color: "#ffa657",
                facts: [
                  "40% uważa, że AI negatywnie wpłynie na relacje międzyludzkie",
                  "53% firm ocenia wpływ AI na efektywność pracy pozytywnie",
                  "36% ankietowanych obawia się negatywnych konsekwencji AI",
                  "Co czwarty Polak 20–34 lata używa AI do poszerzania wiedzy",
                ],
              },
              {
                source: "Eurostat (2024)",
                color: "#d2a8ff",
                facts: [
                  "Tylko 5,9% polskich firm stosuje technologie AI",
                  "Średnia UE to 13,5% przedsiębiorstw używających AI",
                  "Polska na końcu rankingu adopcji AI wśród firm unijnych",
                  "Polska planuje politykę AI do 2030 roku",
                ],
              },
            ].map(card => (
              <div key={card.source} style={{
                background: "rgba(255,255,255,0.03)", border: `1px solid ${card.color}30`,
                borderRadius: 16, padding: "24px 22px", borderTop: `3px solid ${card.color}`,
              }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: card.color, marginBottom: 16 }}>{card.source}</h3>
                <ul style={{ margin: 0, padding: "0 0 0 16px", listStyle: "none" }}>
                  {card.facts.map((f, i) => (
                    <li key={i} style={{ fontSize: 14, color: "#8b949e", marginBottom: 10, lineHeight: 1.5, position: "relative", paddingLeft: 12 }}>
                      <span style={{ position: "absolute", left: 0, color: card.color }}>·</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WNIOSKI */}
      <section id="wnioski" className="section" style={{ background: "#0d1117" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Wnioski</h2>
          <div style={{ width: 48, height: 3, background: "#7ee8a2", borderRadius: 2, marginBottom: 40 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { n: "01", title: "Hipoteza potwierdzona", body: "Stosunek respondentów do AI jest rzeczywiście ambiwalentny. Większość korzysta z AI regularnie lub od czasu do czasu, jednocześnie wyrażając obawy co do jej negatywnego wpływu na myślenie i rynek pracy. Wyniki są spójne z ogólnopolskimi badaniami KPMG i Maison & Partners.", color: "#7ee8a2" },
              { n: "02", title: "Dominuje pesymizm co do przyszłości", body: `${Math.round((negativeImpact/n)*100)}% ankietowanych ocenia wpływ AI na przyszłość społeczeństwa jako raczej lub zdecydowanie negatywny. Główne obawy dotyczą uzależnienia od technologii, lenistwa, zaniku kreatywności i utraty pracy.`, color: "#ffa657" },
              { n: "03", title: "Paradoks: używamy, ale się boimy", body: `${Math.round((oftenUsers/n)*100)}% respondentów deklaruje częste korzystanie z AI — głównie w nauce i szkole — ale jednocześnie ${Math.round((limitsYes/n)*100)}% uważa, że AI ogranicza samodzielne myślenie. To paradoks typowy dla nowych technologii.`, color: "#58a6ff" },
              { n: "04", title: "Różnice pokoleniowe", body: "Osoby 15–18 lat stanowiły większość respondentów i częściej korzystały z AI niż osoby 40+. Starsze pokolenia rzadziej korzystają z AI, ale równie często (lub częściej) wyrażają sceptycyzm i obawy — jednak niekiedy z bardziej pogłębioną refleksją.", color: "#d2a8ff" },
            ].map(w => (
              <div key={w.n} style={{
                display: "flex", gap: 24, alignItems: "flex-start",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "24px 28px",
              }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: w.color, opacity: 0.3, minWidth: 40, lineHeight: 1 }}>{w.n}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: w.color }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: "#8b949e", margin: 0, lineHeight: 1.7 }}>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZESPÓŁ */}
      <section id="zespol" className="section" style={{ background: "#161b22" }}>
        <div className="container">
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.8px" }}>Zespół projektowy</h2>
          <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 40 }}>Przedmiot: Edukacja Obywatelska · Rodzaj projektu: Badawczy · Rok szkolny: 2025/2026</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 40 }}>
            {[
              { name: "Nikodem Trojanowski", role: "Lider projektu", tasks: ["Zbieranie odpowiedzi w terenie (Rzeszów)", "Zachęcanie przechodniów do wypełnienia ankiety poprzez kod QR"], color: "#58a6ff" },
              { name: "Anna Baran",  tasks: ["Przygotowanie ankiety", "Analiza wyników i podsumowanie", "Opracowanie strony internetowej", "Przygotowanie prezentacji"], color: "#7ee8a2" },
              { name: "Sara Duel Czubska", tasks: ["Zbieranie odpowiedzi w terenie (Rzeszów)", "Zachęcanie przechodniów do wypełnienia ankiety poprzez kod QR"], color: "#d2a8ff" },
              { name: "Aleksander Kwolek",  tasks: ["Przydzielone zadania w trakcie realizacji projektu"], color: "#ffa657" },
            ].map(m => (
              <div key={m.name} style={{
                background: "rgba(255,255,255,0.03)", border: `1px solid ${m.color}25`,
                borderRadius: 16, padding: "24px 22px", borderTop: `3px solid ${m.color}`, position: "relative",
              }}>
                {m.role && (
                  <div className="tag" style={{ background: `${m.color}15`, color: m.color, fontSize: 11, borderRadius: 10, position: "absolute", top: 18, right: 18 }}>
                    {m.role}
                  </div>
                )}
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: `${m.color}20`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 700, color: m.color, marginBottom: 14,
                }}>
                  {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 29 }}>{m.name}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {m.tasks.map((t, i) => (
                    <li key={i} style={{ fontSize: 13, color: "#8b949e", marginBottom: 6, position: "relative", lineHeight: 1.4 }}>
                      <span style={{ position: "absolute", left: 0, color: m.color }}>·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(126,232,162,0.04)", border: "1px solid rgba(126,232,162,0.15)",
            borderRadius: 16, padding: "24px 28px",
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: "#7ee8a2" }}>Informacje o projekcie</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "Nazwa projektu: ", val: "Wpływ sztucznej inteligencji na rozwój człowieka" },
                { label: "Rodzaj projektu", val: "Badawczy" },
                { label: "Liczba respondentów", val: `${n} osób` },
                { label: "Miejsce badania", val: "Rzeszów" },
                { label: "Data badania", val: "7 kwietnia 2026" },
              ].map(i => (
                <div key={i.label}>
                  <div style={{ fontSize: 11, color: "#6e7681", marginBottom: 2 }}>{i.label}</div>
                  <div style={{ fontSize: 14, color: "#c9d1d9", fontWeight: 500 }}>{i.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        padding: "24px", textAlign: "center", fontSize: 13,
        color: "#6e7681", borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#0d1117",
      }}>
        Made with ❤️ by forcemeleyou
      </footer>
    </div>
  );
}
