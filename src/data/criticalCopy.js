export const NAV_IDS = ["hero", "ankieta", "wyniki", "kontekst", "wnioski"];

export const NAV_ITEMS = {
    pl: [
        { id: "hero", label: "Start" },
        { id: "ankieta", label: "Ankieta" },
        { id: "wyniki", label: "Wyniki" },
        { id: "kontekst", label: "Badania naukowe" },
        { id: "wnioski", label: "Wnioski" },
    ],
    en: [
        { id: "hero", label: "Home" },
        { id: "ankieta", label: "Survey" },
        { id: "wyniki", label: "Results" },
        { id: "kontekst", label: "Research" },
        { id: "wnioski", label: "Conclusions" },
    ],
};

export const CRITICAL_COPY = {
    pl: {
        languageLabel: "Język",
        navbar: {
            openMenu: "Otwórz menu",
            closeMenu: "Zamknij menu",
            contents: "Spis treści",
        },
        hero: {
            meta: {
                placeTime: "Miejsce i czas",
                respondents: "Ankietowani",
                project: "Projekt",
                type: "Rodzaj",
                projectValue: "Edukacja Obywatelska",
                typeValue: "projekt badawczy",
                respondentsSuffix: "respondentów",
            },
            title: ["Wpływ sztucznej", "inteligencji", "na rozwój człowieka."],
            stats: [
                "korzysta z AI często",
                "widzi negatywny wpływ na przyszłość",
                "uważa, że AI ogranicza myślenie",
            ],
        },
        footer: {
            byline: [
                "2026",
                "Raport No. 01 / Edukacja Obywatelska",
                "Wszystkie prawa zastrzeżone",
            ],
        },
    },
    en: {
        languageLabel: "Language",
        navbar: {
            openMenu: "Open menu",
            closeMenu: "Close menu",
            contents: "Contents",
        },
        hero: {
            meta: {
                placeTime: "When & Where",
                respondents: "Respondents",
                project: "Project",
                type: "Type",
                projectValue: "Civics",
                typeValue: "research project",
                respondentsSuffix: "respondents",
            },
            title: ["AI's impact", "on human", "development."],
            stats: [
                "use AI frequently",
                "expect AI to negatively impact the future",
                "believe AI restricts independent thinking",
            ],
        },
        footer: {
            byline: [
                "2026",
                "Report No. 01 / Civics",
                "All rights reserved",
            ],
        },
    },
};
