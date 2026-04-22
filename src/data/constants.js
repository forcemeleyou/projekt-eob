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
        { q: "Czy korzystasz z AI?", hint: "cz\u0119stotliwo\u015b\u0107", why: "To pytanie pokazuje, jak powszechna jest obecno\u015b\u0107 AI w codziennym \u017cyciu i czy respondenci oceniaj\u0105 t\u0119 technologi\u0119 z w\u0142asnego do\u015bwiadczenia." },
        { q: "Czy AI pomaga w rozwoju cz\u0142owieka?", hint: "ocena og\u00f3lna", why: "Chcieli\u015bmy sprawdzi\u0107, czy AI jest postrzegana bardziej jako wsparcie rozwoju, czy raczej jako zagro\u017cenie dla samodzielno\u015bci i kompetencji cz\u0142owieka." },
        { q: "W jakich obszarach AI jest pomocna?", hint: "wielokrotny wyb\u00f3r", why: "To pytanie pozwala zobaczy\u0107, gdzie respondenci najcz\u0119\u015bciej dostrzegaj\u0105 praktyczn\u0105 warto\u015b\u0107 AI: w nauce, pracy, codziennym \u017cyciu czy kreatywno\u015bci." },
        { q: "Czy AI ogranicza samodzielne my\u015blenie?", hint: "kluczowe pytanie", why: "To by\u0142o jedno z najwa\u017cniejszych pyta\u0144 w badaniu, bo dotyczy bezpo\u015brednio naszej hipotezy o wp\u0142ywie AI na niezale\u017cno\u015b\u0107 my\u015blenia i podejmowanie decyzji." },
        { q: "Czy obawiasz si\u0119 AI?", hint: "emocje", why: "Zale\u017ca\u0142o nam na uchwyceniu emocjonalnej reakcji na AI, bo same opinie o technologii nie pokazuj\u0105 jeszcze, czy budzi ona niepok\u00f3j, dystans czy poczucie bezpiecze\u0144stwa." },
        { q: "Czy AI mo\u017ce zast\u0105pi\u0107 ludzi w pracy?", hint: "rynek pracy", why: "To pytanie bada spo\u0142eczne obawy zwi\u0105zane z automatyzacj\u0105 i pozwala sprawdzi\u0107, czy respondenci widz\u0105 AI jako narz\u0119dzie wspieraj\u0105ce cz\u0142owieka, czy konkurencj\u0119." },
        { q: "Jak oceniasz wp\u0142yw AI na przysz\u0142o\u015b\u0107?", hint: "prognoza", why: "Chcieli\u015bmy wyj\u015b\u0107 poza tera\u017aniejszo\u015b\u0107 i zobaczy\u0107, czy badani patrz\u0105 na rozw\u00f3j AI z optymizmem, ostro\u017cno\u015bci\u0105 czy pesymizmem." },
        { q: "Jak AI zmieni \u017cycie w przysz\u0142o\u015bci?", hint: "pytanie otwarte", why: "Pytanie otwarte dawa\u0142o przestrze\u0144 na w\u0142asne refleksje respondent\u00f3w i pozwala\u0142o uchwyci\u0107 bardziej osobiste, nieoczywiste oraz emocjonalne opinie o AI." },
    ],
    en: [
        { q: "Do you use AI?", hint: "frequency", why: "This question shows how present AI already is in everyday life and whether respondents are judging it based on direct experience." },
        { q: "Does AI contribute to human development?", hint: "overall evaluation", why: "We wanted to see whether AI is perceived more as a tool for growth and support, or as a threat to human independence and competence." },
        { q: "In what areas is AI most helpful?", hint: "multiple choice", why: "This helps us identify where people see the most practical value in AI: education, work, everyday life, creativity, or other areas." },
        { q: "Does AI limit independent thinking?", hint: "key question", why: "This was one of the central questions in the study because it directly relates to our hypothesis about AI influencing independent thought and decision-making." },
        { q: "Do you have concerns about AI?", hint: "emotions", why: "We wanted to capture the emotional side of AI perception, because opinions alone do not show whether the technology creates trust, distance, or anxiety." },
        { q: "Can AI replace human workers?", hint: "job market", why: "This question explores social concerns around automation and helps us understand whether AI is seen as support for people or as direct competition." },
        { q: "How do you view AI's future impact?", hint: "forecast", why: "We wanted to go beyond the present and see whether respondents look at AI's future with optimism, caution, or pessimism." },
        { q: "How will AI change our lives in the future?", hint: "open question", why: "The open-ended format gave respondents space for personal reflections and made it possible to capture more nuanced and emotional views on AI." },
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
        { text: "People will always take the easy way out - they won't even try to think for themselves.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "Our brains will lose the ability to distinguish fiction from reality.", age: "40+", gender: "female", genderShort: "F" },
        { text: "It will widen the social divide. Educated people will advance even faster, while the less educated will become easier to manipulate.", age: "40+", gender: "female", genderShort: "F" },
        { text: "It can be used responsibly, but it's already doing the basic thinking for people - and that's unlikely to change.", age: "19-25", gender: "male", genderShort: "M" },
        { text: "I think it will make people lazy.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "It might replace IT professionals.", age: "15-18", gender: "female", genderShort: "F" },
        { text: "It will widen social inequality. Educated and highly capable people will advance even faster thanks to easier access to knowledge, while the vast majority of society will become ideal material for control and will live in an illusion of free choice.", age: "15-18", gender: "female", genderShort: "F" },
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
            summary: "A comprehensive analysis of AI development in Central and Eastern Europe. It shows how quickly adoption is growing, but also how much education, skills, and usage standards are lagging behind.",
            facts: [
                "69% of Poles use AI regularly (global average: 66%)",
                "41% of Poles say they trust AI (global average: 46%)",
                "89% of Poles point out cybersecurity risks linked to AI",
                "54% have encountered AI-generated misinformation",
            ],
            detailPoints: [
                {
                    title: "What the study is about",
                    body: "The report examines how people and workers across Central and Eastern Europe use AI, how much they trust it, and how companies are implementing the technology.",
                },
                {
                    title: "Main takeaway",
                    body: "AI is advancing faster than people's readiness to use it responsibly. The scale of use is growing very quickly, but education and usage principles are not keeping pace.",
                },
                {
                    title: "Biggest problem",
                    body: "The report highlights a major skills gap: many people use AI without training, unaware of its limitations, the risk of errors, hallucinations, and principles of safe use.",
                },
                {
                    title: "What this means for companies",
                    body: "Organizations are deploying AI, but employees often lack both the right competencies and clear procedures. Therefore, education, transparency, and governance should be a strategic priority.",
                },
                {
                    title: "In one sentence",
                    body: "The region has huge potential for AI development, but without skills and good management, this growth can be chaotic and risky.",
                },
            ],
            details: "The study shows how people and workers in Central and Eastern Europe use AI, how much they trust it, and how businesses adopt this technology. The key finding is simple: AI is advancing faster than people are prepared to use it responsibly. More people use AI regularly because it boosts productivity, speeds up work, and makes information easier to access, yet many have not received training and do not fully understand these tools' limits. The report highlights a major skills gap: organizations deploy AI, but employees often lack the right skills and clear rules for using it in practice. As a result, AI is both a great opportunity and a real risk: it offers convenience, automation, and new possibilities, but also creates problems like hallucinations, errors, overreliance, and lack of regulation. Therefore, education, transparency, governance, and responsible procedures should become strategic priorities for companies and institutions. In one sentence: the region has huge AI potential, but without skills and good governance, that growth can be chaotic and risky.",
            link: "https://kpmg.com/pl/pl/wiedza/technologia/sztuczna-inteligencja-w-europie-srodkowo-wschodniej.html",
        },
        {
            title: "Poles on Artificial Intelligence",
            source: "Maison & Partners / ThinkTank (2024)",
            summary: "The report shows that the attitude of Poles towards AI is becoming increasingly cautious: fears are starting to dominate over optimism, and awareness of the actual use of this technology remains limited.",
            facts: [
                "42% of Poles consciously use AI tools",
                "Among people under 25, this percentage is 56%",
                "Over half of Poles (58%) claim they have never used AI",
                "Men are more open to AI than women",
            ],
            detailPoints: [
                {
                    title: "What the study is about",
                    body: "The report analyzes the attitude of Poles to AI, the level of knowledge about this technology, its presence at work, and social fears and stereotypes associated with artificial intelligence.",
                },
                {
                    title: "Main takeaway",
                    body: "More and more Poles see AI as a threat rather than an opportunity. The report shows a clear change in mood: caution and uncertainty are starting to dominate over technological optimism.",
                },
                {
                    title: "Biggest problem",
                    body: "AI is present in many workplaces, but for many people it remains invisible. Some employees don't even know if they use it in their company, which shows a large information gap and a low level of awareness.",
                },
                {
                    title: "Where the fears come from",
                    body: "The report emphasizes that fears of AI are amplified not only by real risks, but also by the media, culture, and pop culture patterns, such as the loss of control over technology or visions of a machine rebellion.",
                },
                {
                    title: "In one sentence",
                    body: "Poles are increasingly afraid of AI rather than seeing it as a chance, and at the same time they still have limited knowledge of its actual use, especially at work.",
                },
            ],
            details: "This study perfectly illustrates generational and social differences. Younger groups familiarize themselves with AI faster and more often see practical support in it, while older respondents more frequently declare distance or a lack of conscious use. The results help to explain why the reception of AI is so unequal between groups.",
            link: "https://think-tank.pl/polacy-o-sztucznej-inteligencji-ad-2024/",
        },
        {
            title: "Professional loneliness: when AI becomes a stand-in colleague at work",
            source: "SW Research (2024)",
            summary: "The study shows that the development of technology and AI is starting to really affect the relationships between people at work: loneliness is growing, and artificial intelligence is increasingly becoming a substitute source of support.",
            facts: [
                "82% of white-collar workers in Poland experience professional loneliness",
                "About 10% of people talk to AI about their loneliness",
                "AI is sometimes chosen over a conversation with a manager or co-worker",
                "Technology gives a sense of availability, security, and a lack of judgment",
            ],
            detailPoints: [
                {
                    title: "What the study is about",
                    body: "The report analyzes the scale of loneliness at work, the impact of technology and AI on relationships, whether artificial intelligence is starting to replace contact with humans, and how employees try to cope with isolation.",
                },
                {
                    title: "Main takeaway",
                    body: "Professional loneliness has become a very common phenomenon, and AI is starting to act as a substitute for emotional and communication support for some employees.",
                },
                {
                    title: "Biggest problem",
                    body: "AI does not solve the relationship crisis at work, it only partially covers it up. It provides comfort because it is available all the time and does not judge, but at the same time it can deepen isolation instead of strengthening the ties between people.",
                },
                {
                    title: "What this means for workplaces",
                    body: "The report shows that despite messengers and modern tools, many employees still lack real support, conversation, and a sense of closeness in the workplace.",
                },
                {
                    title: "In one sentence",
                    body: "AI is starting to replace interpersonal relationships at work, which helps some people cope with loneliness, but at the same time it can deepen the problem of social isolation.",
                },
            ],
            details: "The SW Research study shows that a serious problem is appearing in the modern work environment - the growing loneliness of employees. Despite the development of technology and messengers, interpersonal relationships are not improving, and are even weakening.",
            link: "https://swresearch.pl/news/technologia-lagodzi-samotnosc-w-firmach",
        },
        {
            title: "Poland compared with EU businesses",
            source: "Eurostat (2024)",
            summary: "The Eurostat study shows that despite growing interest in AI, Poland still lags behind the EU average, with the technology used mainly by larger companies and the most developed economies.",
            facts: [
                "5.9% of companies in Poland use AI compared to 13.5% across the EU",
                "AI is still not a standard in European business",
                "41% of large companies use AI, compared to about 11% of small ones",
                "EU leaders exceed 27%, while Poland remains at around 5-6%",
            ],
            detailPoints: [
                {
                    title: "What the study is about",
                    body: "The report analyzes the level of AI use in European Union enterprises, differences between countries, the impact of company size on technology deployment, and the pace of AI development in business.",
                },
                {
                    title: "Main takeaway",
                    body: "AI is still not a standard in European business. Even at the level of the entire Union, the technology has been deployed by only a small fraction of companies, so actual use remains limited.",
                },
                {
                    title: "Biggest problem",
                    body: "AI has not yet become a business standard. Technology is used by a small percentage of companies, and the difference between declared interest and actual deployment remains very large.",
                },
                {
                    title: "Who deploys AI the most",
                    body: "The largest companies deploy AI much more often than small enterprises, because they have greater financial resources, easier access to specialists, and better technological facilities.",
                },
                {
                    title: "In one sentence",
                    body: "Despite the growing interest in AI, Poland is still lagging behind the EU average, and artificial intelligence is currently used mainly by large companies and the most developed EU economies.",
                },
            ],
            details: "The Eurostat study shows that artificial intelligence is gradually entering business in Europe, but the pace of this process is still limited. In 2024, only 13.5% of enterprises in the EU used AI, which means that this technology is not yet a standard in the operations of companies.",
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
                "Zach\u0119canie przechodni\u00f3w do wype\u0142nienia ankiety na tabletach",
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
                "Zach\u0119canie przechodni\u00f3w do wype\u0142nienia ankiety na tabletach",
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
            role: "Project Lead",
            tasks: [
                "Directed the research in Rzeszow",
                "Collected first-hand feedback from the public using iPads",
            ],
        },
        {
            name: "Anna Baran",
            tasks: [
                "Prepared the survey",
                "Analyzed data and summarized results",
                "Developed the project's website",
            ],
        },
        {
            name: "Sara Duell-Czubska",
            tasks: [
                "Worked on-site in Rzeszow to gather responses",
                "Encouraged passers-by to complete the survey",
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
            "tak, cz\u0119sto": "Cz\u0119sto",
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
            "tak, cz\u0119sto": "Frequently",
            "czasami": "Occasionally",
            "rzadko": "Rarely",
            "nie": "I don't use it",
        },
        futureImpact: {
            "bardzo pozytywny": "Very positive",
            "raczej pozytywny": "Somewhat positive",
            "neutralny": "Neutral",
            "raczej negatywny": "Somewhat negative",
            "bardzo negatywny": "Very negative",
        },
        limitsThinking: {
            "tak": "Yes",
            "trudno powiedzie\u0107": "Hard to say",
            "nie": "No",
        },
        areas: {
            "Nauka i szko\u0142a": "Education and school",
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
                    body: "Przeprowadzili\u015bmy ankiet\u0119 online na tabletach w\u015br\u00f3d przechodni\u00f3w w Rzeszowie (7 kwietnia 2026 r.). Zebrali\u015bmy 94 odpowiedzi od respondent\u00f3w w r\u00f3\u017cnym wieku - od os\u00f3b poni\u017cej 15 roku \u017cycia po senior\u00f3w 60+.",
                },
            ],
        },
        survey: {
            eyebrow: "Narz\u0119dzie",
            title: "Nasza",
            titleEm: "ankieta",
            lede: "Ankieta zawiera\u0142a 10 pyta\u0144 zamkni\u0119tych i jedno otwarte. Skierowali\u015bmy j\u0105 do os\u00f3b w ka\u017cdym wieku - chcieli\u015bmy zbada\u0107 r\u00f3\u017cnice pokoleniowe w postrzeganiu AI. Respondenci wype\u0142niali formularz bezpo\u015brednio na naszych tabletach.",
            questionPrefix: "PYT.",
            whyLabel: "Dlaczego o to pytaliśmy?",
            whyToggle: "Szczegóły",
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
        goals: {
            eyebrow: "Project framework",
            title: "Hypothesis",
            titleEm: "&",
            titleAfter: "method",
            cards: [
                {
                    num: "01 / Hypothesis",
                    title: "Starting point",
                    body: "We hypothesized that society's attitude towards AI is ambiguous - most people recognize both its benefits and risks. The biggest concerns surround AI limiting independent thinking and threatening jobs.",
                },
                {
                    num: "02 / Methodology",
                    title: "How we collected our data",
                    body: "We conducted an in-person survey on iPads among passers-by in Rzeszow on April 7, 2026. We gathered 94 responses from a wide range of age groups, from teenagers under 15 to seniors over 60.",
                },
            ],
        },
        survey: {
            eyebrow: "Tool",
            title: "Our",
            titleEm: "survey",
            lede: "The survey consisted of 10 closed-ended questions and one open-ended question. We targeted people of all ages to explore generational differences in AI perception. Respondents filled out the survey directly on our iPads.",
            questionPrefix: "Q.",
            whyLabel: "Why did we ask this?",
            whyToggle: "Details",
        },
        results: {
            eyebrow: "Data / results",
            title: "Our",
            titleEm: "findings",
            blocks: {
                usage: "Frequency of use",
                future: "AI's impact on the future",
                thinking: "Does AI limit independent thinking?",
                areas: "Top 5 application areas",
            },
            summary: [
                "use AI often or very often",
                "assess AI's impact as negative or very negative",
                "believe AI limits independent thinking",
            ],
        },
        quotes: {
            eyebrow: "Voices",
            title: "What",
            titleEm: "respondents",
            titleAfter: "said",
            lede: "Answers to our open-ended question:",
            question: "How do you think AI will change people's lives in the future?",
            readMore: "click to read more",
            yearsSuffix: "years old",
        },
        quoteModal: {
            close: "Close",
            label: "Full opinion",
        },
        research: {
            eyebrow: "Context & sources",
            title: "Related",
            titleEm: "research",
            lede: "Selected studies on AI published in Poland and the EU over recent years.",
            readMore: "Read more",
            sourceLabel: "Study source",
            factsLabel: "Key findings",
            openSource: "View full study",
            modalLabel: "Broader context",
        },
        conclusions: {
            eyebrow: "Synthesis",
            title: "Four",
            titleEm: "takeaways",
            items: [
                {
                    num: "I",
                    title: "Hypothesis confirmed",
                    body: "Respondents' attitudes towards AI are indeed ambivalent. The vast majority of people use AI regularly, yet simultaneously express concerns about its negative impact on independent thinking and the job market. Our findings are consistent with nationwide research conducted by KPMG and Maison & Partners.",
                },
                {
                    num: "II",
                    title: "Pessimism regarding the future is dominant",
                    body: "{negativeImpact}% of those surveyed view AI's future impact on society as rather or fully negative. Their main concerns relate to technology addiction, laziness, a decline in creativity, and job displacement.",
                },
                {
                    num: "III",
                    title: "The usage-skepticism paradox",
                    body: "{oftenUsers}% of respondents declare frequent use of AI - primarily for educational purposes - while {limitsYes}% simultaneously believe that AI restricts independent thinking. This is a paradox typical of new technologies.",
                },
                {
                    num: "IV",
                    title: "Generational differences",
                    body: "Young people aged 15-18 made up the bulk of respondents and used AI more frequently than those over 40. Older generations use AI less, yet they voice their skepticism and concerns just as frequently - sometimes providing deeper reflection.",
                },
            ],
        },
        team: {
            eyebrow: "Project team",
            title: "Meet the",
            titleEm: "team",
            lede: "Civics research project - 2025/2026 school year.",
            colophon: [
                { label: "Project name", val: "AI's impact on human development" },
                { label: "Type", val: "Research" },
                { label: "Sample size", val: "{n} respondents" },
                { label: "Location", val: "Rzeszow, PL" },
                { label: "Date", val: "April 7, 2026" },
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
