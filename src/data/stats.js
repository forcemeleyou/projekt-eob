import SURVEY_DATA from "./survey_data.json";

function count(arr, key, val) {
    return arr.filter(r => r[key] === val).length;
}
function countArr(arr, key, val) {
    return arr.filter(r => r[key] && r[key].includes(val)).length;
}

export const n = SURVEY_DATA.length;

export const usageFreq = {
    "tak, często": count(SURVEY_DATA, "usesAI", "tak, często"),
    "czasami": count(SURVEY_DATA, "usesAI", "czasami"),
    "rzadko": count(SURVEY_DATA, "usesAI", "rzadko"),
    "nie": count(SURVEY_DATA, "usesAI", "nie"),
};

export const futureImpact = {
    "bardzo pozytywny": count(SURVEY_DATA, "futureImpact", "bardzo pozytywny"),
    "raczej pozytywny": count(SURVEY_DATA, "futureImpact", "raczej pozytywny"),
    "neutralny": count(SURVEY_DATA, "futureImpact", "neutralny"),
    "raczej negatywny": count(SURVEY_DATA, "futureImpact", "raczej negatywny"),
    "bardzo negatywny": count(SURVEY_DATA, "futureImpact", "bardzo negatywny"),
};

export const limitsThinking = {
    "tak": count(SURVEY_DATA, "limitsThinking", "tak"),
    "nie": count(SURVEY_DATA, "limitsThinking", "nie"),
    "trudno powiedzieć": count(SURVEY_DATA, "limitsThinking", "trudno powiedzieć"),
};

const AREAS = [
    "Nauka i szkoła",
    "Codzienne życie",
    "Technologia i praca",
    "Rozrywka i kreatywność",
    "Medycyna",
    "Biznes i ekonomia",
    "Transport",
];

export const areasCounts = AREAS
    .map(a => ({ name: a, count: countArr(SURVEY_DATA, "areas", a) }))
    .sort((a, b) => b.count - a.count);

export const positiveImpact = futureImpact["bardzo pozytywny"] + futureImpact["raczej pozytywny"];
export const negativeImpact = futureImpact["bardzo negatywny"] + futureImpact["raczej negatywny"];
export const limitsYes = limitsThinking["tak"];
export const oftenUsers = usageFreq["tak, często"];
