export const NAV_ITEMS = [
    { id: "hero", label: "Start" },
    { id: "ankieta", label: "Ankieta" },
    { id: "wyniki", label: "Wyniki" },
    { id: "kontekst", label: "Badania naukowe" },
    { id: "wnioski", label: "Wnioski" },
];

export const QUOTES = [
    { text: "Ludzie będą zawsze wybierać proste rozwiązania — nie będą nawet próbowali samodzielnie myśleć.", age: "15–18", gender: "kobieta" },
    { text: "Zatrze się umiejętność mózgu odróżniania fikcji od realu.", age: "40+", gender: "kobieta" },
    { text: "Pogłębi różnice w społeczeństwie — ludzie wykształceni będą się jeszcze szybciej rozwijać, a mniej wykształceni staną się materiałem do sterowania.", age: "40+", gender: "kobieta" },
    { text: "Można korzystać z niej odpowiedzialnie, ale jest używana do robienia za ludzi podstawowych procesów myślowych — i to się raczej nie zmieni.", age: "19–25", gender: "mężczyzna" },
    { text: "Myślę, że ludzie zrobią się leniwi.", age: "15–18", gender: "kobieta" },
    { text: "Mogą wyręczyć informatyków.", age: "15–18", gender: "kobieta" },
    { text: "pogłębi różnice w społeczeństwie.. ludzie wykształceni inteligentni będą jeszcze bardziej szybciej się rozwijać dzięki łatwiejszemu dostępowi do wiedzy, a zdecydowana większość społeczeństwa, ta mniej wykształcona, inteligentna inaczej, za to przeświadczona o swojej mądrości będzie doskonałym materiałem do sterowania .. będzie wybierać zgodnie z założeniami programu, będzie żyła w mega iluzji świadomego, wolnego wyboru doskonale zarządzana przez system.. współczesne niewolnictwo.. stworzyć tłumowi takie środowisko życia, doskonałą iluzję, w której będzie miał poczucie wolności, wolnego wyboru i pełnego wpływu na swoje życie a będzie tylko doskonale sterowaną marionetką...", age: "15–18", gender: "kobieta" },
];

export const SURVEY_QUESTIONS = [
    { q: "Czy korzystasz z AI?", hint: "częstotliwość" },
    { q: "Czy AI pomaga w rozwoju człowieka?", hint: "ocena ogólna" },
    { q: "W jakich obszarach AI jest pomocna?", hint: "wielokrotny wybór" },
    { q: "Czy AI ogranicza samodzielne myślenie?", hint: "kluczowe pytanie" },
    { q: "Czy obawiasz się AI?", hint: "emocje" },
    { q: "Czy AI może zastąpić ludzi w pracy?", hint: "rynek pracy" },
    { q: "Jak oceniasz wpływ AI na przyszłość?", hint: "prognoza" },
    { q: "Jak AI zmieni życie w przyszłości?", hint: "pytanie otwarte" },
];

export const RESEARCH_CARDS = [
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
];

export const TEAM_MEMBERS = [
    {
        name: "Nikodem Trojanowski",
        role: "Lider projektu",
        tasks: [
            "Zbieranie odpowiedzi w terenie (Rzeszów)",
            "Zachęcanie przechodniów do wypełnienia ankiety poprzez kod QR",
        ],
        color: "#58a6ff",
    },
    {
        name: "Anna Baran",
        tasks: [
            "Przygotowanie ankiety",
            "Analiza wyników i podsumowanie",
            "Opracowanie strony internetowej",
            "Przygotowanie prezentacji",
        ],
        color: "#7ee8a2",
    },
    {
        name: "Sara Duel Czubska",
        tasks: [
            "Zbieranie odpowiedzi w terenie (Rzeszów)",
            "Zachęcanie przechodniów do wypełnienia ankiety poprzez kod QR",
        ],
        color: "#d2a8ff",
    },
    {
        name: "Aleksander Kwolek",
        tasks: ["Przydzielone zadania w trakcie realizacji projektu"],
        color: "#ffa657",
    },
];
