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

export const SURVEY_QUESTIONS = {
    pl: [
        { q: "Czy korzystasz z AI?", hint: "cz\u0119stotliwo\u015b\u0107" },
        { q: "Czy AI pomaga w rozwoju cz\u0142owieka?", hint: "ocena og\u00f3lna" },
        { q: "W jakich obszarach AI jest pomocna?", hint: "wielokrotny wyb\u00f3r" },
        { q: "Czy AI ogranicza samodzielne my\u015blenie?", hint: "kluczowe pytanie" },
        { q: "Czy obawiasz si\u0119 AI?", hint: "emocje" },
        { q: "Czy AI mo\u017ce zast\u0105pi\u0107 ludzi w pracy?", hint: "rynek pracy" },
        { q: "Jak oceniasz wp\u0142yw AI na przysz\u0142o\u015b\u0107?", hint: "prognoza" },
        { q: "Jak AI zmieni \u017cycie w przysz\u0142o\u015bci?", hint: "pytanie otwarte" },
    ],
    en: [
        { q: "Do you use AI?", hint: "frequency" },
        { q: "Does AI support human development?", hint: "overall evaluation" },
        { q: "In which areas is AI helpful?", hint: "multiple choice" },
        { q: "Does AI limit independent thinking?", hint: "key question" },
        { q: "Are you afraid of AI?", hint: "emotions" },
        { q: "Can AI replace people at work?", hint: "job market" },
        { q: "How do you assess AI's impact on the future?", hint: "forecast" },
        { q: "How will AI change human life in the future?", hint: "open question" },
    ],
};

export const QUOTES = {
    pl: [
        { text: "Ludzie b\u0119d\u0105 zawsze wybiera\u0107 proste rozwi\u0105zania - nie b\u0119d\u0105 nawet pr\u00f3bowali samodzielnie my\u015ble\u0107.", age: "15-18", gender: "kobieta", genderShort: "K" },
        { text: "Zatrze si\u0119 umiej\u0119tno\u015b\u0107 m\u00f3zgu odr\u00f3\u017cniania fikcji od realu.", age: "40+", gender: "kobieta", genderShort: "K" },
        { text: "Pog\u0142\u0119bi r\u00f3\u017cnice w spo\u0142ecze\u0144stwie - ludzie wykszta\u0142ceni b\u0119d\u0105 si\u0119 jeszcze szybciej rozwija\u0107, a mniej wykszta\u0142ceni stan\u0105 si\u0119 materia\u0142em do sterowania.", age: "40+", gender: "kobieta", genderShort: "K" },
        { text: "Mo\u017cna korzysta\u0107 z niej odpowiedzialnie, ale jest u\u017cywana do robienia za ludzi podstawowych proces\u00f3w my\u015blowych - i to si\u0119 raczej nie zmieni.", age: "19-25", gender: "m\u0119\u017cczyzna", genderShort: "M" },
        { text: "My\u015bl\u0119, \u017ce ludzie zrobi\u0105 si\u0119 leniwi.", age: "15-18", gender: "kobieta", genderShort: "K" },
        { text: "Mog\u0105 wyr\u0119czy\u0107 informatyk\u00f3w.", age: "15-18", gender: "kobieta", genderShort: "K" },
        { text: "Pog\u0142\u0119bi r\u00f3\u017cnice w spo\u0142ecze\u0144stwie. Ludzie wykszta\u0142ceni i inteligentni b\u0119d\u0105 rozwija\u0107 si\u0119 jeszcze szybciej dzi\u0119ki \u0142atwiejszemu dost\u0119powi do wiedzy, a zdecydowana wi\u0119kszo\u015b\u0107 spo\u0142ecze\u0144stwa b\u0119dzie doskona\u0142ym materia\u0142em do sterowania i \u017cy\u0142a w iluzji wolnego wyboru.", age: "15-18", gender: "kobieta", genderShort: "K" },
    ],
    en: [
        { text: "People will always choose simple solutions - they will not even try to think for themselves.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "The brain will lose its ability to tell fiction from reality.", age: "40+", gender: "female", genderShort: "F" },
        { text: "It will deepen social inequalities - educated people will develop even faster, while less educated people will become easier to control.", age: "40+", gender: "female", genderShort: "F" },
        { text: "It can be used responsibly, but it is already doing basic thinking for people - and that probably will not change.", age: "19-25", gender: "male", genderShort: "M" },
        { text: "I think people will become lazy.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "It may replace IT specialists.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "It will deepen social inequalities. Educated and highly capable people will develop even faster thanks to easier access to knowledge, while the majority of society will become ideal material for control and will live in an illusion of free choice.", age: "15-18", gender: "female", genderShort: "F" },
    ],
};

export const RESEARCH_CARDS = {
    pl: [
        {
            source: "KPMG / Uniwersytet w Melbourne (2025)",
            facts: [
                "69% Polak\u00f3w korzysta z AI regularnie (\u015brednia \u015bwiatowa: 66%)",
                "41% Polak\u00f3w deklaruje zaufanie do AI (\u015bwiatowa: 46%)",
                "89% Polak\u00f3w wskazuje na ryzyko cyberzagro\u017ce\u0144 zwi\u0105zanych z AI",
                "54% zetkn\u0119\u0142o si\u0119 z dezinformacj\u0105 wygenerowan\u0105 przez AI",
            ],
        },
        {
            source: "Maison & Partners / ThinkTank (2024)",
            facts: [
                "42% Polak\u00f3w korzysta \u015bwiadomie z narz\u0119dzi AI",
                "W\u015br\u00f3d os\u00f3b poni\u017cej 25 lat - odsetek ten wynosi 56%",
                "Ponad po\u0142owa Polak\u00f3w (58%) twierdzi, \u017ce nigdy nie korzysta\u0142a z AI",
                "M\u0119\u017cczy\u017ani bardziej otwarci na AI ni\u017c kobiety",
            ],
        },
        {
            source: "SW Research (2024)",
            facts: [
                "40% uwa\u017ca, \u017ce AI negatywnie wp\u0142ynie na relacje mi\u0119dzyludzkie",
                "53% firm ocenia wp\u0142yw AI na efektywno\u015b\u0107 pracy pozytywnie",
                "36% ankietowanych obawia si\u0119 negatywnych konsekwencji AI",
                "Co czwarty Polak 20-34 lata u\u017cywa AI do poszerzania wiedzy",
            ],
        },
        {
            source: "Eurostat (2024)",
            facts: [
                "Tylko 5,9% polskich firm stosuje technologie AI",
                "\u015arednia UE to 13,5% przedsi\u0119biorstw u\u017cywaj\u0105cych AI",
                "Polska na ko\u0144cu rankingu adopcji AI w\u015br\u00f3d firm unijnych",
                "Polska planuje polityk\u0119 AI do 2030 roku",
            ],
        },
    ],
    en: [
        {
            source: "KPMG / University of Melbourne (2025)",
            facts: [
                "69% of Poles use AI regularly (global average: 66%)",
                "41% of Poles say they trust AI (global average: 46%)",
                "89% of Poles point to cybersecurity risks linked to AI",
                "54% have encountered AI-generated misinformation",
            ],
        },
        {
            source: "Maison & Partners / ThinkTank (2024)",
            facts: [
                "42% of Poles consciously use AI tools",
                "Among people under 25, that share rises to 56%",
                "More than half of Poles (58%) say they have never used AI",
                "Men are more open to AI than women",
            ],
        },
        {
            source: "SW Research (2024)",
            facts: [
                "40% believe AI will negatively affect interpersonal relationships",
                "53% of companies assess AI's impact on work efficiency positively",
                "36% of respondents fear negative consequences of AI",
                "One in four Poles aged 20-34 uses AI to expand knowledge",
            ],
        },
        {
            source: "Eurostat (2024)",
            facts: [
                "Only 5.9% of Polish companies use AI technologies",
                "The EU average is 13.5% of enterprises using AI",
                "Poland ranks near the bottom of EU business AI adoption",
                "Poland is planning an AI policy through 2030",
            ],
        },
    ],
};

export const TEAM_MEMBERS = {
    pl: [
        {
            name: "Nikodem Trojanowski",
            role: "Lider projektu",
            tasks: [
                "Zbieranie odpowiedzi w terenie (Rzesz\u00f3w)",
                "Zach\u0119canie przechodni\u00f3w do wype\u0142nienia ankiety poprzez kod QR",
            ],
        },
        {
            name: "Anna Baran",
            tasks: [
                "Przygotowanie ankiety",
                "Analiza wynik\u00f3w i podsumowanie",
                "Opracowanie strony internetowej",
            ],
        },
        {
            name: "Sara Duel Czubska",
            tasks: [
                "Zbieranie odpowiedzi w terenie (Rzesz\u00f3w)",
                "Zach\u0119canie przechodni\u00f3w do wype\u0142nienia ankiety poprzez kod QR",
            ],
        },
        {
            name: "Aleksander Kwolek",
            tasks: [""],
        },
    ],
    en: [
        {
            name: "Nikodem Trojanowski",
            role: "Project lead",
            tasks: [
                "Collecting responses in the field (Rzeszow)",
                "Encouraging passers-by to complete the survey via QR code",
            ],
        },
        {
            name: "Anna Baran",
            tasks: [
                "Survey preparation",
                "Results analysis and summary",
                "Website development",
            ],
        },
        {
            name: "Sara Duel Czubska",
            tasks: [
                "Collecting responses in the field (Rzeszow)",
                "Encouraging passers-by to complete the survey via QR code",
            ],
        },
        {
            name: "Aleksander Kwolek",
            tasks: ["Assigned tasks during project delivery"],
        },
    ],
};

export const RESULTS_LABELS = {
    pl: {
        usageFreq: {
            "tak, cz\u0119sto": "Tak, cz\u0119sto",
            "czasami": "Czasami",
            "rzadko": "Rzadko",
            "nie": "Nie korzystam",
        },
        futureImpact: {
            "bardzo pozytywny": "Bardzo pozytywny",
            "raczej pozytywny": "Raczej pozytywny",
            "neutralny": "Neutralny",
            "raczej negatywny": "Raczej negatywny",
            "bardzo negatywny": "Bardzo negatywny",
        },
        limitsThinking: {
            "tak": "Tak",
            "trudno powiedzie\u0107": "Trudno powiedzie\u0107",
            "nie": "Nie",
        },
        areas: {
            "Nauka i szko\u0142a": "Nauka i szko\u0142a",
            "Codzienne \u017cycie": "Codzienne \u017cycie",
            "Technologia i praca": "Technologia i praca",
            "Rozrywka i kreatywno\u015b\u0107": "Rozrywka i kreatywno\u015b\u0107",
            "Medycyna": "Medycyna",
            "Biznes i ekonomia": "Biznes i ekonomia",
            "Transport": "Transport",
        },
    },
    en: {
        usageFreq: {
            "tak, cz\u0119sto": "Yes, often",
            "czasami": "Sometimes",
            "rzadko": "Rarely",
            "nie": "I do not use it",
        },
        futureImpact: {
            "bardzo pozytywny": "Very positive",
            "raczej pozytywny": "Rather positive",
            "neutralny": "Neutral",
            "raczej negatywny": "Rather negative",
            "bardzo negatywny": "Very negative",
        },
        limitsThinking: {
            "tak": "Yes",
            "trudno powiedzie\u0107": "Hard to say",
            "nie": "No",
        },
        areas: {
            "Nauka i szko\u0142a": "Learning and school",
            "Codzienne \u017cycie": "Everyday life",
            "Technologia i praca": "Technology and work",
            "Rozrywka i kreatywno\u015b\u0107": "Entertainment and creativity",
            "Medycyna": "Medicine",
            "Biznes i ekonomia": "Business and economics",
            "Transport": "Transport",
        },
    },
};

export const UI_COPY = {
    pl: {
        languageLabel: "J\u0119zyk",
        navbar: {
            openMenu: "Otw\u00f3rz menu",
            closeMenu: "Zamknij menu",
            contents: "Spis tre\u015bci",
        },
        hero: {
            meta: {
                placeTime: "Miejsce i czas",
                respondents: "Ankietowani",
                project: "Projekt",
                type: "Rodzaj",
                projectValue: "Edukacja Obywatelska",
                typeValue: "projekt badawczy",
                respondentsSuffix: "respondent\u00f3w",
            },
            title: ["Wp\u0142yw sztucznej", "inteligencji", "na rozw\u00f3j cz\u0142owieka."],
            stats: [
                "korzysta z AI cz\u0119sto",
                "widzi negatywny wp\u0142yw na przysz\u0142o\u015b\u0107",
                "uwa\u017ca, \u017ce AI ogranicza my\u015blenie",
            ],
        },
        goals: {
            eyebrow: "Za\u0142o\u017cenia projektu",
            title: "Hipoteza",
            titleEm: "i",
            titleAfter: "metoda",
            cards: [
                {
                    num: "01 / Hipoteza",
                    title: "Punkt wyj\u015bcia",
                    body: "Zak\u0142adali\u015bmy, \u017ce stosunek spo\u0142ecze\u0144stwa do AI jest niejednoznaczny - wi\u0119kszo\u015b\u0107 dostrzega zar\u00f3wno korzy\u015bci, jak i zagro\u017cenia. Szczeg\u00f3lny niepok\u00f3j budzi kwestia ograniczania samodzielnego my\u015blenia oraz zagro\u017cenie dla rynku pracy.",
                },
                {
                    num: "02 / Metoda",
                    title: "Jak zbierali\u015bmy dane",
                    body: "Przeprowadzili\u015bmy ankiet\u0119 online udost\u0119pnian\u0105 w formie kodu QR w\u015br\u00f3d przechodni\u00f3w w Rzeszowie (7 kwietnia 2026 r.). Zebrali\u015bmy 91 odpowiedzi od respondent\u00f3w w r\u00f3\u017cnym wieku - od os\u00f3b poni\u017cej 15 roku \u017cycia po senior\u00f3w 60+.",
                },
            ],
        },
        survey: {
            eyebrow: "Narz\u0119dzie",
            title: "Nasza",
            titleEm: "ankieta",
            lede: "Ankieta zawiera\u0142a 10 pyta\u0144 zamkni\u0119tych i jedno otwarte. Skierowali\u015bmy j\u0105 do os\u00f3b w ka\u017cdym wieku - chcieli\u015bmy zbada\u0107 r\u00f3\u017cnice pokoleniowe w postrzeganiu AI. Pokazywali\u015bmy ludziom kod QR prowadz\u0105cy do formularza.",
            questionPrefix: "PYT.",
        },
        results: {
            eyebrow: "Dane / wyniki",
            title: "Co",
            titleEm: "zobaczyli\u015bmy",
            blocks: {
                usage: "Cz\u0119stotliwo\u015b\u0107 korzystania",
                future: "Wp\u0142yw AI na przysz\u0142o\u015b\u0107",
                thinking: "Czy AI ogranicza my\u015blenie?",
                areas: "Obszary zastosowa\u0144 - top 5",
            },
            summary: [
                "korzysta z AI cz\u0119sto lub bardzo cz\u0119sto",
                "ocenia wp\u0142yw AI jako negatywny lub bardzo negatywny",
                "uwa\u017ca, \u017ce AI ogranicza samodzielne my\u015blenie",
            ],
        },
        quotes: {
            eyebrow: "G\u0142osy respondent\u00f3w",
            title: "Co",
            titleEm: "m\u00f3wi\u0105",
            titleAfter: "ludzie",
            lede: "Odpowiedzi na pytanie otwarte:",
            question: "Jak Twoim zdaniem AI zmieni \u017cycie ludzi w przysz\u0142o\u015bci?",
            readMore: "kliknij, aby przeczyta\u0107 ca\u0142o\u015b\u0107",
            yearsSuffix: "lat",
        },
        quoteModal: {
            close: "Zamknij",
            label: "Pe\u0142na opinia",
        },
        research: {
            eyebrow: "Kontekst / \u017ar\u00f3d\u0142a",
            title: "Inne",
            titleEm: "badania",
            lede: "Nasze wyniki w szerszym kontek\u015bcie - wybrane raporty publikowane w Polsce i UE w ostatnich latach.",
        },
        conclusions: {
            eyebrow: "Synteza",
            title: "Cztery",
            titleEm: "wnioski",
            items: [
                {
                    num: "I",
                    title: "Hipoteza potwierdzona",
                    body: "Stosunek respondent\u00f3w do AI jest rzeczywi\u015bcie ambiwalentny. Wi\u0119kszo\u015b\u0107 korzysta z AI regularnie lub od czasu do czasu, jednocze\u015bnie wyra\u017caj\u0105c obawy co do jej negatywnego wp\u0142ywu na my\u015blenie i rynek pracy. Wyniki s\u0105 sp\u00f3jne z og\u00f3lnopolskimi badaniami KPMG i Maison & Partners.",
                },
                {
                    num: "II",
                    title: "Dominuje pesymizm co do przysz\u0142o\u015bci",
                    body: "{negativeImpact}% ankietowanych ocenia wp\u0142yw AI na przysz\u0142o\u015b\u0107 spo\u0142ecze\u0144stwa jako raczej lub zdecydowanie negatywny. G\u0142\u00f3wne obawy dotycz\u0105 uzale\u017cnienia od technologii, lenistwa, zaniku kreatywno\u015bci i utraty pracy.",
                },
                {
                    num: "III",
                    title: "Paradoks: u\u017cywamy, ale si\u0119 boimy",
                    body: "{oftenUsers}% respondent\u00f3w deklaruje cz\u0119ste korzystanie z AI - g\u0142\u00f3wnie w nauce i szkole - ale jednocze\u015bnie {limitsYes}% uwa\u017ca, \u017ce AI ogranicza samodzielne my\u015blenie. To paradoks typowy dla nowych technologii.",
                },
                {
                    num: "IV",
                    title: "R\u00f3\u017cnice pokoleniowe",
                    body: "Osoby 15-18 lat stanowi\u0142y wi\u0119kszo\u015b\u0107 respondent\u00f3w i cz\u0119\u015bciej korzysta\u0142y z AI ni\u017c osoby 40+. Starsze pokolenia rzadziej korzystaj\u0105 z AI, ale r\u00f3wnie cz\u0119sto (lub cz\u0119\u015bciej) wyra\u017caj\u0105 sceptycyzm i obawy - niekiedy z bardziej pog\u0142\u0119bion\u0105 refleksj\u0105.",
                },
            ],
        },
        team: {
            eyebrow: "Stopka redakcyjna",
            title: "Zesp\u00f3\u0142",
            titleEm: "projektowy",
            lede: "Edukacja Obywatelska - projekt badawczy - rok szkolny 2025/2026",
            colophon: [
                { label: "Nazwa projektu", val: "Wp\u0142yw AI na rozw\u00f3j cz\u0142owieka" },
                { label: "Rodzaj", val: "Badawczy" },
                { label: "Pr\u00f3ba", val: "{n} respondent\u00f3w" },
                { label: "Miejsce", val: "Rzesz\u00f3w, PL" },
                { label: "Data badania", val: "7 IV 2026" },
            ],
        },
        footer: {
            byline: [
                "2026",
                "Raport No. 01 / Edukacja Obywatelska",
                "Wszystkie prawa zastrze\u017cone",
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
                placeTime: "Place and time",
                respondents: "Respondents",
                project: "Project",
                type: "Type",
                projectValue: "Civic Education",
                typeValue: "research project",
                respondentsSuffix: "respondents",
            },
            title: ["The impact of", "artificial intelligence", "on human development."],
            stats: [
                "use AI often",
                "see a negative impact on the future",
                "believe AI limits thinking",
            ],
        },
        goals: {
            eyebrow: "Project framework",
            title: "Hypothesis",
            titleEm: "and",
            titleAfter: "method",
            cards: [
                {
                    num: "01 / Hypothesis",
                    title: "Starting point",
                    body: "We assumed that public attitudes toward AI are mixed - most people see both benefits and threats. Particular concern surrounds the limitation of independent thinking and possible risks to the job market.",
                },
                {
                    num: "02 / Method",
                    title: "How we collected the data",
                    body: "We conducted an online survey shared through a QR code among passers-by in Rzeszow on April 7, 2026. We collected 91 responses from people of different ages - from respondents younger than 15 to seniors aged 60+.",
                },
            ],
        },
        survey: {
            eyebrow: "Tool",
            title: "Our",
            titleEm: "survey",
            lede: "The survey included 10 closed-ended questions and one open question. We addressed it to people of all ages because we wanted to examine generational differences in how AI is perceived. We showed people a QR code leading directly to the form.",
            questionPrefix: "Q.",
        },
        results: {
            eyebrow: "Data / results",
            title: "What we",
            titleEm: "saw",
            blocks: {
                usage: "Usage frequency",
                future: "AI's impact on the future",
                thinking: "Does AI limit thinking?",
                areas: "Application areas - top 5",
            },
            summary: [
                "use AI often or very often",
                "assess AI's impact as negative or very negative",
                "believe AI limits independent thinking",
            ],
        },
        quotes: {
            eyebrow: "Respondent voices",
            title: "What",
            titleEm: "people",
            titleAfter: "say",
            lede: "Answers to the open question:",
            question: "How do you think AI will change people's lives in the future?",
            readMore: "click to read the full quote",
            yearsSuffix: "years old",
        },
        quoteModal: {
            close: "Close",
            label: "Full opinion",
        },
        research: {
            eyebrow: "Context / sources",
            title: "Other",
            titleEm: "research",
            lede: "Our results in a wider context - selected reports published in Poland and across the EU in recent years.",
        },
        conclusions: {
            eyebrow: "Synthesis",
            title: "Four",
            titleEm: "conclusions",
            items: [
                {
                    num: "I",
                    title: "Hypothesis confirmed",
                    body: "Respondents' attitudes toward AI are indeed ambivalent. Most use AI regularly or from time to time while also expressing concerns about its negative impact on thinking and the job market. The results are consistent with nationwide studies by KPMG and Maison & Partners.",
                },
                {
                    num: "II",
                    title: "Pessimism about the future dominates",
                    body: "{negativeImpact}% of respondents assess AI's impact on the future of society as rather or definitely negative. The main concerns relate to dependence on technology, laziness, loss of creativity, and job displacement.",
                },
                {
                    num: "III",
                    title: "Paradox: we use it, but we fear it",
                    body: "{oftenUsers}% of respondents say they use AI frequently - mainly for learning and school - while at the same time {limitsYes}% believe it limits independent thinking. This is a paradox typical of new technologies.",
                },
                {
                    num: "IV",
                    title: "Generational differences",
                    body: "People aged 15-18 made up the majority of respondents and used AI more often than people aged 40+. Older generations use AI less often, but they express skepticism and concern just as often - or even more often - sometimes with deeper reflection.",
                },
            ],
        },
        team: {
            eyebrow: "Colophon",
            title: "Project",
            titleEm: "team",
            lede: "Civic Education - research project - school year 2025/2026",
            colophon: [
                { label: "Project name", val: "The impact of AI on human development" },
                { label: "Type", val: "Research" },
                { label: "Sample", val: "{n} respondents" },
                { label: "Location", val: "Rzeszow, PL" },
                { label: "Survey date", val: "7 Apr 2026" },
            ],
        },
        footer: {
            byline: [
                "2026",
                "Report No. 01 / Civic Education",
                "All rights reserved",
            ],
        },
    },
};
