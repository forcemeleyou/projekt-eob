export const n = 94;

export const usageFreq = {
    "tak, często": 42,
    "czasami": 28,
    "rzadko": 14,
    "nie": 10,
};

export const futureImpact = {
    "bardzo pozytywny": 2,
    "raczej pozytywny": 18,
    "neutralny": 32,
    "raczej negatywny": 30,
    "bardzo negatywny": 12,
};

export const limitsThinking = {
    "tak": 72,
    "nie": 11,
    "trudno powiedzieć": 11,
};

export const areasCounts = [
    { name: "Nauka i szkoła", count: 68 },
    { name: "Technologia i praca", count: 40 },
    { name: "Codzienne życie", count: 35 },
    { name: "Rozrywka i kreatywność", count: 31 },
    { name: "Biznes i ekonomia", count: 25 },
    { name: "Medycyna", count: 15 },
    { name: "Transport", count: 13 },
];

export const positiveImpact = futureImpact["bardzo pozytywny"] + futureImpact["raczej pozytywny"];
export const negativeImpact = futureImpact["bardzo negatywny"] + futureImpact["raczej negatywny"];
export const limitsYes = limitsThinking["tak"];
export const oftenUsers = usageFreq["tak, często"];
