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
            title: "Sztuczna inteligencja w Europie",
            source: "KPMG / Uniwersytet w Melbourne (2025)",
            summary: "To szeroka analiza rozwoju AI w Europie \u015arodkowo-Wschodniej, pokazuj\u0105ca, jak szybko ro\u015bnie skala jej u\u017cycia, ale te\u017c jak bardzo wiedza, kompetencje i zasady korzystania nie nad\u0105\u017caj\u0105 za tempem zmian.",
            facts: [
                "69% Polak\u00f3w korzysta z AI regularnie (\u015brednia \u015bwiatowa: 66%)",
                "41% Polak\u00f3w deklaruje zaufanie do AI (\u015bwiatowa: 46%)",
                "89% Polak\u00f3w wskazuje na ryzyko cyberzagro\u017ce\u0144 zwi\u0105zanych z AI",
                "54% zetkn\u0119\u0142o si\u0119 z dezinformacj\u0105 wygenerowan\u0105 przez AI",
            ],
            detailPoints: [
                {
                    title: "O czym jest to badanie",
                    body: "Raport analizuje, jak mieszka\u0144cy i pracownicy Europy \u015arodkowo-Wschodniej korzystaj\u0105 z AI, jaki jest poziom ich zaufania, wiedzy i kompetencji oraz jak firmy i instytucje wdra\u017caj\u0105 t\u0119 technologi\u0119.",
                },
                {
                    title: "Najwa\u017cniejszy wniosek",
                    body: "AI rozwija si\u0119 szybciej ni\u017c przygotowanie ludzi do jej odpowiedzialnego u\u017cywania. Skala korzystania ro\u015bnie bardzo szybko, ale edukacja i zasady korzystania nie nad\u0105\u017caj\u0105 za tym tempem.",
                },
                {
                    title: "Najwi\u0119kszy problem",
                    body: "Raport podkre\u015bla luk\u0119 kompetencyjn\u0105: wiele os\u00f3b u\u017cywa AI bez szkolenia, nie znaj\u0105c dobrze jej ogranicze\u0144, ryzyka b\u0142\u0119d\u00f3w, halucynacji i zasad bezpiecznego wykorzystania.",
                },
                {
                    title: "Co to oznacza dla firm",
                    body: "Organizacje wdra\u017caj\u0105 AI, ale pracownicy cz\u0119sto nie maj\u0105 ani odpowiednich umiej\u0119tno\u015bci, ani jasnych procedur. Dlatego edukacja, transparentno\u015b\u0107 i governance powinny by\u0107 strategicznym priorytetem.",
                },
                {
                    title: "Jednozdaniowe podsumowanie",
                    body: "Region ma ogromny potencja\u0142 rozwoju AI, ale bez kompetencji i dobrego zarz\u0105dzania ten rozw\u00f3j mo\u017ce by\u0107 chaotyczny i ryzykowny.",
                },
            ],
            details: "Badanie pokazuje, jak mieszka\u0144cy i pracownicy Europy \u015arodkowo-Wschodniej korzystaj\u0105 z AI, jaki jest poziom ich zaufania, wiedzy i kompetencji oraz w jaki spos\u00f3b firmy i instytucje wdra\u017caj\u0105 t\u0119 technologi\u0119. Najwa\u017cniejszy wniosek raportu jest prosty: sztuczna inteligencja rozwija si\u0119 szybciej ni\u017c przygotowanie ludzi do jej odpowiedzialnego u\u017cywania. Coraz wi\u0119cej os\u00f3b korzysta z AI regularnie, bo zwi\u0119ksza produktywno\u015b\u0107, przyspiesza prac\u0119 i u\u0142atwia dost\u0119p do wiedzy, ale jednocze\u015bnie wiele z tych os\u00f3b nie przesz\u0142o \u017cadnego szkolenia i nie zna dobrze ogranicze\u0144 tych narz\u0119dzi. Raport podkre\u015bla du\u017c\u0105 luk\u0119 kompetencyjn\u0105: organizacje wdra\u017caj\u0105 AI, lecz pracownicy cz\u0119sto nie maj\u0105 ani odpowiednich umiej\u0119tno\u015bci, ani jasnych zasad korzystania z niej w praktyce. W efekcie AI jest jednocze\u015bnie wielk\u0105 szans\u0105 i realnym ryzykiem: daje wygod\u0119, automatyzacj\u0119 i nowe mo\u017cliwo\u015bci, ale rodzi te\u017c problemy zwi\u0105zane z halucynacjami, b\u0142\u0119dami, nadmiernym zaufaniem oraz brakiem regulacji. Dlatego raport wskazuje, \u017ce edukacja, transparentno\u015b\u0107, governance i odpowiedzialne procedury powinny sta\u0107 si\u0119 strategicznym priorytetem dla firm i instytucji. W jednym zdaniu: region ma ogromny potencja\u0142 rozwoju AI, ale bez kompetencji i dobrego zarz\u0105dzania ten rozw\u00f3j mo\u017ce by\u0107 chaotyczny i ryzykowny.",
            link: "https://kpmg.com/pl/pl/wiedza/technologia/sztuczna-inteligencja-w-europie-srodkowo-wschodniej.html",
        },
        {
            title: "Polacy o sztucznej inteligencji",
            source: "Maison & Partners / ThinkTank (2024)",
            summary: "Raport pokazuje, że stosunek Polaków do AI staje się coraz bardziej ostrożny: obawy zaczynają dominować nad optymizmem, a świadomość realnego wykorzystania tej technologii nadal pozostaje ograniczona.",
            facts: [
                "42% Polak\u00f3w korzysta \u015bwiadomie z narz\u0119dzi AI",
                "W\u015br\u00f3d os\u00f3b poni\u017cej 25 lat - odsetek ten wynosi 56%",
                "Ponad po\u0142owa Polak\u00f3w (58%) twierdzi, \u017ce nigdy nie korzysta\u0142a z AI",
                "M\u0119\u017cczy\u017ani bardziej otwarci na AI ni\u017c kobiety",
            ],
            detailPoints: [
                {
                    title: "O czym jest to badanie",
                    body: "Raport analizuje stosunek Polaków do AI, poziom wiedzy o tej technologii, jej obecność w pracy oraz społeczne obawy i stereotypy związane ze sztuczną inteligencją.",
                },
                {
                    title: "Najważniejszy wniosek",
                    body: "Coraz więcej Polaków widzi w AI zagrożenia bardziej niż szanse. Raport pokazuje wyraźną zmianę nastrojów: ostrożność i niepewność zaczynają dominować nad technologicznym optymizmem.",
                },
                {
                    title: "Największy problem",
                    body: "AI jest obecna w wielu miejscach pracy, ale dla wielu osób pozostaje niewidzialna. Część pracowników nie wie nawet, czy korzysta z niej w swojej firmie, co pokazuje dużą lukę informacyjną i niski poziom świadomości.",
                },
                {
                    title: "Skąd biorą się obawy",
                    body: "Raport podkreśla, że lęki wobec AI są wzmacniane nie tylko przez realne ryzyka, ale też przez media, kulturę i schematy znane z popkultury, takie jak utrata kontroli nad technologią czy wizje buntu maszyn.",
                },
                {
                    title: "Jednozdaniowe podsumowanie",
                    body: "Polacy coraz częściej obawiają się AI bardziej, niż widzą w niej szansę, a jednocześnie nadal mają ograniczoną wiedzę o jej realnym wykorzystaniu, zwłaszcza w pracy.",
                },
            ],
            details: "To badanie dobrze pokazuje różnice pokoleniowe i społeczne. Młodsze grupy szybciej oswajają AI i częściej widzą w niej praktyczne wsparcie, podczas gdy starsi respondenci częściej deklarują dystans albo brak świadomego korzystania. Wyniki pomagają tłumaczyć, dlaczego odbiór AI jest tak nierówny między grupami.",
            link: "https://think-tank.pl/polacy-o-sztucznej-inteligencji-ad-2024/",
        },
        {
            title: "Samotność zawodowa: gdy bliskim w pracy staje się AI",
            source: "SW Research (2024)",
            summary: "Badanie pokazuje, że rozwój technologii i AI zaczyna realnie wpływać na relacje między ludźmi w pracy: samotność rośnie, a sztuczna inteligencja coraz częściej staje się zastępczym źródłem wsparcia.",
            facts: [
                "82% pracowników umysłowych w Polsce doświadcza samotności zawodowej",
                "Około 10% osób rozmawia z AI o swojej samotności",
                "AI bywa wybierana zamiast rozmowy z przełożonym lub współpracownikiem",
                "Technologia daje poczucie dostępności, bezpieczeństwa i braku oceny",
            ],
            detailPoints: [
                {
                    title: "O czym jest to badanie",
                    body: "Raport analizuje skalę samotności w pracy, wpływ technologii i AI na relacje, to czy sztuczna inteligencja zaczyna zastępować kontakt z ludźmi oraz jak pracownicy próbują radzić sobie z izolacją.",
                },
                {
                    title: "Najważniejszy wniosek",
                    body: "Samotność zawodowa stała się zjawiskiem bardzo powszechnym, a AI zaczyna pełnić rolę zastępczego wsparcia emocjonalnego i komunikacyjnego dla części pracowników.",
                },
                {
                    title: "Największy problem",
                    body: "AI nie rozwiązuje kryzysu relacji w pracy, tylko częściowo go przykrywa. Daje komfort, bo jest dostępna cały czas i nie ocenia, ale jednocześnie może pogłębiać izolację zamiast wzmacniać więzi między ludźmi.",
                },
                {
                    title: "Co to mówi o środowisku pracy",
                    body: "Raport pokazuje, że mimo komunikatorów i nowoczesnych narzędzi wielu pracownikom nadal brakuje realnego wsparcia, rozmowy i poczucia bliskości w miejscu pracy.",
                },
                {
                    title: "Jednozdaniowe podsumowanie",
                    body: "AI zaczyna zastępować relacje międzyludzkie w pracy, co pomaga części osób radzić sobie z samotnością, ale równocześnie może pogłębiać problem izolacji społecznej.",
                },
            ],
            details: "Badanie SW Research pokazuje, że w nowoczesnym środowisku pracy pojawia się poważny problem - rosnąca samotność pracowników. Mimo rozwoju technologii i komunikatorów relacje międzyludzkie nie poprawiają się, a wręcz słabną.",
            link: "https://swresearch.pl/news/technologia-lagodzi-samotnosc-w-firmach",
        },
        {
            title: "Polska na tle firm w UE",
            source: "Eurostat (2024)",
            summary: "Badanie Eurostatu pokazuje, że mimo rosnącego zainteresowania AI Polska nadal wyraźnie odstaje od średniej unijnej, a technologia ta jest wykorzystywana głównie przez większe firmy i najlepiej rozwinięte gospodarki UE.",
            facts: [
                "5,9% firm w Polsce korzysta z AI wobec 13,5% w całej UE",
                "AI nadal nie jest standardem w europejskim biznesie",
                "41% dużych firm korzysta z AI, wobec około 11% małych",
                "Liderzy UE przekraczają 27%, podczas gdy Polska pozostaje na poziomie około 5-6%",
            ],
            detailPoints: [
                {
                    title: "O czym jest to badanie",
                    body: "Raport analizuje poziom wykorzystania AI w przedsiębiorstwach Unii Europejskiej, różnice między krajami, wpływ wielkości firmy na wdrażanie technologii oraz tempo rozwoju AI w biznesie.",
                },
                {
                    title: "Najważniejszy wniosek",
                    body: "AI wciąż nie jest standardem w europejskim biznesie. Nawet na poziomie całej Unii technologia została wdrożona tylko przez niewielką część firm, więc realne wykorzystanie nadal pozostaje ograniczone.",
                },
                {
                    title: "Największy problem",
                    body: "AI nie stała się jeszcze standardem biznesowym. Z technologii korzysta niewielka część firm, a różnica między deklarowanym zainteresowaniem a faktycznym wdrożeniem pozostaje bardzo duża.",
                },
                {
                    title: "Kto wdraża AI najczęściej",
                    body: "Największe firmy wdrażają AI znacznie częściej niż małe przedsiębiorstwa, ponieważ mają większe zasoby finansowe, łatwiejszy dostęp do specjalistów i lepsze zaplecze technologiczne.",
                },
                {
                    title: "Jednozdaniowe podsumowanie",
                    body: "Mimo rosnącego zainteresowania AI Polska nadal odstaje od średniej unijnej, a sztuczna inteligencja jest dziś wykorzystywana głównie przez duże firmy i najbardziej rozwinięte gospodarki UE.",
                },
            ],
            details: "Badanie Eurostatu pokazuje, że sztuczna inteligencja stopniowo wchodzi do biznesu w Europie, ale tempo tego procesu jest nadal ograniczone. W 2024 roku tylko 13,5% przedsiębiorstw w UE korzystało z AI, co oznacza, że technologia ta nie jest jeszcze standardem w działalności firm.",
            link: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_by_individuals",
        },
    ],
    en: [
        {
            title: "Artificial Intelligence in Europe",
            source: "KPMG / University of Melbourne (2025)",
            summary: "This is a broad analysis of AI development in Central and Eastern Europe, showing how rapidly its use is growing, but also how knowledge, competences and rules of use have not kept pace with the pace of change.",
            facts: [
                "69% of Poles use AI regularly (global average: 66%)",
                "41% of Poles say they trust AI (global average: 46%)",
                "89% of Poles point to cybersecurity risks linked to AI",
                "54% have encountered AI-generated misinformation",
            ],
            detailPoints: [
                {
                    title: "What This Study Is About",
                    body: "The report examines how people and employees in Central and Eastern Europe use AI, what their level of trust, knowledge, and skills looks like, and how companies and institutions are implementing the technology.",
                },
                {
                    title: "Main Conclusion",
                    body: "AI is developing faster than people's readiness to use it responsibly. The scale of adoption is growing quickly, but education, skills, and clear rules are not keeping up with that pace.",
                },
                {
                    title: "Biggest Challenge",
                    body: "The report highlights a major skills gap: many people use AI without formal training and without fully understanding its limitations, the risk of errors, hallucinations, or safe-use principles.",
                },
                {
                    title: "What It Means for Companies",
                    body: "Organizations are introducing AI, but employees often lack both the right competencies and clear internal procedures. That is why education, transparency, and governance should become strategic priorities.",
                },
                {
                    title: "One-Sentence Takeaway",
                    body: "The region has strong AI potential, but without skills and good governance, that growth may become chaotic and risky.",
                },
            ],
            details: "The report highlights a clear paradox: strong day-to-day AI usage does not automatically translate into trust. People see AI as useful, but they also associate it with manipulation, cybersecurity threats, and unreliable automatically generated content.",
            link: "https://kpmg.com/pl/pl/wiedza/technologia/sztuczna-inteligencja-w-europie-srodkowo-wschodniej.html",
        },
        {
            title: "Poles on Artificial Intelligence",
            source: "Maison & Partners / ThinkTank (2024)",
            summary: "The report shows that public attitudes toward AI in Poland are becoming more cautious: fears are starting to outweigh optimism, while awareness of how AI is actually used remains limited.",
            facts: [
                "42% of Poles consciously use AI tools",
                "Among people under 25, that share rises to 56%",
                "More than half of Poles (58%) say they have never used AI",
                "Men are more open to AI than women",
            ],
            detailPoints: [
                {
                    title: "What This Study Is About",
                    body: "The report examines Polish attitudes toward AI, the level of public knowledge about the technology, its use in the workplace, and the fears and stereotypes linked to artificial intelligence.",
                },
                {
                    title: "Main Conclusion",
                    body: "More Poles now see AI as a threat than as an opportunity. The report points to a clear shift in mindset: caution and uncertainty are beginning to outweigh technological optimism.",
                },
                {
                    title: "Biggest Challenge",
                    body: "AI is already present in many workplaces, but for many people it remains invisible. Some employees do not even know whether they use AI in their company, which reveals a major information gap and low awareness.",
                },
                {
                    title: "Where the Fears Come From",
                    body: "The report stresses that concerns about AI are driven not only by real risks, but also by media narratives, culture, and pop-culture patterns such as loss of control over technology or machine-rebellion scenarios.",
                },
                {
                    title: "One-Sentence Takeaway",
                    body: "Poles are increasingly more afraid of AI than hopeful about it, while still having limited knowledge of how it is actually used, especially at work.",
                },
            ],
            details: "This study clearly shows generational and social differences. Younger groups adapt to AI faster and more often see it as practical support, while older respondents more often report distance or no conscious use. These results help explain why attitudes toward AI vary so strongly across groups.",
            link: "https://think-tank.pl/polacy-o-sztucznej-inteligencji-ad-2024/",
        },
        {
            title: "Professional Loneliness: When AI Becomes Your Close One at Work",
            source: "SW Research (2024)",
            summary: "The study shows that the growth of technology and AI is starting to directly affect human relationships at work: loneliness is rising, and artificial intelligence is increasingly becoming a substitute source of support.",
            facts: [
                "82% of white-collar workers in Poland experience professional loneliness",
                "Around 10% talk to AI about their loneliness",
                "AI is sometimes chosen instead of talking to a manager or coworker",
                "Technology offers availability, psychological comfort, and a sense of non-judgment",
            ],
            detailPoints: [
                {
                    title: "What This Study Is About",
                    body: "The report examines the scale of loneliness at work, the impact of technology and AI on relationships, whether artificial intelligence is beginning to replace human contact, and how employees cope with isolation.",
                },
                {
                    title: "Main Conclusion",
                    body: "Professional loneliness has become highly widespread, and AI is starting to act as a substitute form of emotional and communicative support for some employees.",
                },
                {
                    title: "Biggest Challenge",
                    body: "AI does not solve the relationship crisis at work - it only partly masks it. It offers comfort because it is always available and does not judge, but it may also deepen isolation instead of strengthening human bonds.",
                },
                {
                    title: "What It Says About Workplaces",
                    body: "The report shows that despite communicators and modern tools, many employees still lack real support, conversation, and a sense of closeness in the workplace.",
                },
                {
                    title: "One-Sentence Takeaway",
                    body: "AI is beginning to replace human relationships at work, which may help some people cope with loneliness, but at the same time it can deepen social isolation.",
                },
            ],
            details: "The SW Research study shows that a serious problem is emerging in modern work environments: growing employee loneliness. Despite the development of technology and communication tools, human relationships are not improving and may even be weakening.",
            link: "https://swresearch.pl/news/technologia-lagodzi-samotnosc-w-firmach",
        },
        {
            title: "Poland Compared with EU Businesses",
            source: "Eurostat (2024)",
            summary: "The Eurostat study shows that despite growing interest in AI, Poland still falls clearly below the EU average, while the technology is used mainly by larger companies and the most developed EU economies.",
            facts: [
                "5.9% of companies in Poland use AI compared with 13.5% across the EU",
                "AI is still not a standard across European business",
                "41% of large companies use AI, compared with around 11% of small ones",
                "EU leaders exceed 27%, while Poland remains at around 5-6%",
            ],
            detailPoints: [
                {
                    title: "What This Study Is About",
                    body: "The report examines the level of AI use in enterprises across the European Union, the differences between countries, the role of company size in implementation, and the pace of AI development in business.",
                },
                {
                    title: "Main Conclusion",
                    body: "AI is still far from being a business standard in Europe. Even across the European Union as a whole, only a relatively small share of companies has actually implemented it.",
                },
                {
                    title: "Biggest Challenge",
                    body: "AI has not yet become a business standard. Only a small share of companies actually use it, and the gap between public enthusiasm and real deployment remains substantial.",
                },
                {
                    title: "Who Adopts AI Most Often",
                    body: "Large companies implement AI much more often than small businesses because they have stronger financial resources, easier access to specialists, and better technological infrastructure.",
                },
                {
                    title: "One-Sentence Takeaway",
                    body: "Despite growing interest in AI, Poland still trails the EU average, and artificial intelligence is mainly used today by large companies and the most technologically advanced EU economies.",
                },
            ],
            details: "The Eurostat study shows that artificial intelligence is gradually entering business across Europe, but the pace of that process remains limited. In 2024, only 13.5% of EU enterprises used AI, which means the technology is still far from being a standard part of business activity.",
            link: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_by_individuals",
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
            tasks: [""],
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
                    body: "Przeprowadzili\u015bmy ankiet\u0119 online udost\u0119pnian\u0105 w formie kodu QR w\u015br\u00f3d przechodni\u00f3w w Rzeszowie (7 kwietnia 2026 r.). Zebrali\u015bmy 94 odpowiedzi od respondent\u00f3w w r\u00f3\u017cnym wieku - od os\u00f3b poni\u017cej 15 roku \u017cycia po senior\u00f3w 60+.",
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
            lede: "Wybrane badania na temat AI publikowane w Polsce i UE w ostatnich latach.",
            readMore: "Czytaj wi\u0119cej",
            sourceLabel: "\u0179r\u00f3d\u0142o badania",
            factsLabel: "Najwa\u017cniejsze dane",
            openSource: "Otw\u00f3rz pe\u0142ne badanie",
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
                    body: "We conducted an online survey shared through a QR code among passers-by in Rzeszow on April 7, 2026. We collected 94 responses from people of different ages - from respondents younger than 15 to seniors aged 60+.",
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
            lede: "Selected research on AI published in Poland and the EU in recent years.",
            readMore: "Read more",
            sourceLabel: "Study source",
            factsLabel: "Key findings",
            openSource: "Open full study",
            modalLabel: "Broader context",
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
