import surveyData from "./survey_data.json";

const USAGE_ORDER = ["tak, często", "czasami", "rzadko", "nie"];
const FUTURE_IMPACT_ORDER = [
    "bardzo pozytywny",
    "raczej pozytywny",
    "neutralny",
    "raczej negatywny",
    "bardzo negatywny",
];
const LIMITS_ORDER = ["tak", "nie", "trudno powiedzieć"];
const AREA_ORDER = [
    "Nauka i szkoła",
    "Technologia i praca",
    "Codzienne życie",
    "Rozrywka i kreatywność",
    "Biznes i ekonomia",
    "Medycyna",
    "Transport",
];

function createCounter(keys) {
    return Object.fromEntries(keys.map((key) => [key, 0]));
}

function increment(counter, key) {
    if (!(key in counter)) {
        counter[key] = 0;
    }

    counter[key] += 1;
}

export const n = surveyData.length;

export const usageFreq = surveyData.reduce((counter, response) => {
    const value = response.usesAI;
    if (value) increment(counter, value);
    return counter;
}, createCounter(USAGE_ORDER));

export const futureImpact = surveyData.reduce((counter, response) => {
    const value = response.futureImpact;
    if (value) increment(counter, value);
    return counter;
}, createCounter(FUTURE_IMPACT_ORDER));

export const limitsThinking = surveyData.reduce((counter, response) => {
    const value = response.limitsThinking;
    if (value) increment(counter, value);
    return counter;
}, createCounter(LIMITS_ORDER));

const areaCounter = surveyData.reduce((counter, response) => {
    const values = Array.isArray(response.areas) ? response.areas : [response.areas];

    values
        .filter((value) => value && value !== "Nie wiem")
        .forEach((value) => increment(counter, value));

    return counter;
}, createCounter(AREA_ORDER));

export const areasCounts = Object.entries(areaCounter)
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count);

export const positiveImpact = futureImpact["bardzo pozytywny"] + futureImpact["raczej pozytywny"];
export const negativeImpact = futureImpact["bardzo negatywny"] + futureImpact["raczej negatywny"];
export const limitsYes = limitsThinking.tak;
export const oftenUsers = usageFreq["tak, często"];
