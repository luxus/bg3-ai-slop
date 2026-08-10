/**
 * "Where am I?" areas filter the walkthrough by step id.
 * One source of truth: WALKTHROUGH. Progress uses the same walk ids.
 */

export type Area = {
  id: string;
  act: 1 | 2 | 3;
  name: string;
  stepIds: string[];
  tips: string[];
};

export const AREAS: Area[] = [
  {
    id: "ar-nautiloid",
    act: 1,
    name: "Nautiloid (Prologue)",
    stepIds: ["w-a1-nautiloid-us", "w-a1-nautiloid-sh", "w-a1-everburn"],
    tips: ["Restoration pods heal between fights. Everburn → Lae’zel early."],
  },
  {
    id: "ar-crash",
    act: 1,
    name: "Crash beach / first camp",
    stepIds: [
      "w-a1-laezel",
      "w-a1-astarion",
      "w-a1-gale",
      "w-a1-withers-crypt",
      "w-a1-withers-camp",
      "w-a1-respec-sh",
      "w-a1-deathstalker",
    ],
    tips: [
      "Active four for now: You + SH + Astarion + Lae’zel (temp).",
      "See Camp tab for Lae’zel / Gale / Withers notes.",
    ],
  },
  {
    id: "ar-wilderness",
    act: 1,
    name: "Wilderness / Risen Road / Ethel",
    stepIds: [
      "w-a1-shovel",
      "w-a1-smuggler",
      "w-a1-spellsparkler",
      "w-a1-ethel",
      "w-a1-grove-shop",
    ],
    tips: ["Shop Grove before raid."],
  },
  {
    id: "ar-goblin",
    act: 1,
    name: "Goblin Camp / Shattered Sanctum",
    stepIds: [
      "w-a1-crusher",
      "w-a1-misty",
      "w-a1-warboard",
      "w-a1-minthara-plan",
    ],
    tips: ["Power detour Underdark/Creche before raid long rest."],
  },
  {
    id: "ar-underdark",
    act: 1,
    name: "Underdark / Grymforge",
    stepIds: [
      "w-a1-order-explore",
      "w-a1-phalar",
      "w-a1-caustic",
      "w-a1-adamantine",
      "w-a1-nere",
      "w-a1-thrinn",
    ],
    tips: ["Two mithral only — plan crafts."],
  },
  {
    id: "ar-creche",
    act: 1,
    name: "Mountain Pass / Creche",
    stepIds: ["w-a1-creche-gear", "w-a1-esther"],
    tips: ["Bring Lae’zel for Creche. Blood of Lathander optional."],
  },
  {
    id: "ar-raid",
    act: 1,
    name: "Emerald Grove raid",
    stepIds: ["w-a1-raid", "w-a1-goblin-party", "w-a1-bench-laezel"],
    tips: ["Bench Lae’zel when Minthara is ready."],
  },
  {
    id: "ar-shadow",
    act: 2,
    name: "Shadow-Cursed Lands / Last Light",
    stepIds: ["w-a2-enter", "w-a2-last-light-loot"],
    tips: ["Dark path often ends Inn protection."],
  },
  {
    id: "ar-moonrise",
    act: 2,
    name: "Moonrise Towers",
    stepIds: ["w-a2-minthara-fate", "w-a2-risky", "w-a2-respec-min"],
    tips: ["Minthara replaces Lae’zel as permanent frontline."],
  },
  {
    id: "ar-gauntlet",
    act: 2,
    name: "Gauntlet of Shar / Shadowfell",
    stepIds: [
      "w-a2-gauntlet",
      "w-a2-sweetheart",
      "w-a2-callous",
      "w-a2-nightsong",
      "w-a2-spear",
    ],
    tips: ["SH must be present for spear path."],
  },
  {
    id: "ar-ketheric",
    act: 2,
    name: "Ketheric finale",
    stepIds: ["w-a2-ketheric"],
    tips: ["Short-rest before multi-phase."],
  },
  {
    id: "ar-city",
    act: 3,
    name: "Baldur’s Gate — power spikes",
    stepIds: [
      "w-a3-cazador",
      "w-a3-rhapsody",
      "w-a3-tribunal",
      "w-a3-bhaalist",
      "w-a3-hope",
      "w-a3-helldusk",
      "w-a3-marko",
      "w-a3-gortash",
      "w-a3-orin",
      "w-a3-brain",
    ],
    tips: ["Foundry sabotage before heavy city fights."],
  },
];
