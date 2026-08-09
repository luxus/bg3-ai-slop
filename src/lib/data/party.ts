export type PartyMember = {
  id: string;
  name: string;
  role: string;
  origin: string;
  race: string;
  classPath: string;
  stats: string;
  why: string;
  darkPath: string;
  combatRole: string;
  levels: { level: string; note: string }[];
  openers: string[];
};

/**
 * Character create — hard numbers verified on bg3.wiki (2026-08-09).
 * See VERIFIED_FACTS in verified.ts for sources.
 */
export const CREATE_CHARACTER = {
  origin: "The Dark Urge",
  race: "Drow",
  subrace: "Lolth-Sworn Drow",
  whyRace:
    "Superior Darkvision, Perception proficiency, Drow Magic (Dancing Lights / Faerie Fire / Darkness). Lolth-Sworn unlocks extra evil dialogue. Build-friendly + dark story fit.",
  alternatives: [
    {
      race: "Half-Elf",
      subrace: "Drow Half-Elf",
      note: "Similar Drow Magic package, different body type. Soft preference only.",
    },
    {
      race: "Dragonborn",
      subrace: "Black or Red",
      note: "Look/flavour only. No Drow Magic. Soft preference only.",
    },
  ],
  class: "Warlock",
  subclass: "The Hexblade (level 1 patron)",
  cantrips: ["Eldritch Blast", "Booming Blade"],
  cantripsNote:
    "Exactly 2 cantrips at Warlock 1 (wiki table). 3rd cantrip at Warlock 4 (e.g. Mage Hand).",
  spells: ["Hex", "Shield"],
  spellsNote:
    "Exactly 2 spells known at level 1. Hex = base Warlock list. Shield = Hexblade expanded list only.",
  background: "Haunted One (locked)",
  backgroundNote:
    "Dark Urge cannot choose another background. Skills from background: Medicine + Intimidation.",
  skills:
    "Warlock: choose 2 from Arcana, Deception, History, Intimidation, Investigation, Religion. Recommended: Deception + Arcana (Intimidation already from Haunted One). Persuasion is NOT a Warlock skill — take Beguiling Influence later if you want it.",
  stats: {
    STR: 8,
    DEX: 16,
    CON: 14,
    INT: 8,
    WIS: 10,
    CHA: 17,
  },
  statsNote:
    "Soft target array (prioritise CHA → DEX/CON). Exact numbers depend on racial + point-buy UI. Dump STR; Hexblade Bind Hexed Weapon uses CHA for the bound weapon from level 1.",
  level1Note:
    "Subclass at Warlock 1. Hex Warrior already gives medium armour, shields, martial weapons + Bind Hexed Weapon (CHA attacks). Pact of the Blade still at level 3 for Extra Attack at 5.",
  level2Note:
    "2 Eldritch Invocations. Recommended: Agonizing Blast + Devil’s Sight (or Beguiling Influence for face skills).",
  level3Note: "Pact Boon: Pact of the Blade.",
  level5Note: "Deepened Pact → Extra Attack with pact / hexed weapon.",
};

export const PARTY: PartyMember[] = [
  {
    id: "tav",
    name: "You (Dark Urge)",
    role: "Face + Nova",
    origin: "The Dark Urge",
    race: "Lolth-Sworn Drow (recommended)",
    classPath: "Warlock → Hexblade · Pact of the Blade @3",
    stats: "Target: STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17",
    why: "CHA face + melee via Bind Hexed Weapon from level 1. Eldritch Blast + Booming Blade. Haunted One locked.",
    darkPath: "Lean into the Urge. Absolute early, Murder Tribunal later.",
    combatRole: "Curse → weapon nova / EB. Short-rest slots.",
    levels: [
      { level: "1", note: "Hexblade. 2 cantrips: EB + Booming Blade. 2 spells: Hex + Shield. Bind Hexed Weapon." },
      { level: "2", note: "2 invocations: Agonizing Blast + Devil’s Sight (or Beguiling Influence)." },
      { level: "3", note: "Pact of the Blade." },
      { level: "4", note: "ASI → CHA. 3rd cantrip (Mage Hand)." },
      { level: "5", note: "Deepened Pact Extra Attack. Big spike." },
      { level: "8+", note: "Finish CHA 20. Optional later: 2 Paladin for smites (respec)." },
    ],
    openers: [
      "Hexblade’s Curse / Hex on boss",
      "Booming Blade attack",
      "Eldritch Blast for range / finishers",
    ],
  },
  {
    id: "shadowheart",
    name: "Shadowheart",
    role: "Control + Support",
    origin: "Companion (race fixed)",
    race: "High Half-Elf — fixed",
    classPath: "Cleric → Death Domain (Withers respec)",
    stats: "WIS primary · CON secondary (soft)",
    why: "Spirit Guardians + control. Shar path for dark run.",
    darkPath: "Shar loyalty → kill Nightsong → Dark Justiciar.",
    combatRole: "SG + Hold Person + Bless.",
    levels: [
      { level: "Respec", note: "Withers → Cleric → Death Domain." },
      { level: "4", note: "War Caster." },
      { level: "5", note: "Spirit Guardians (necrotic)." },
      { level: "6", note: "Inescapable Destruction." },
    ],
    openers: ["Spirit Guardians", "Hold Person key threats", "Bless if needed"],
  },
  {
    id: "astarion",
    name: "Astarion",
    role: "Ranged / Skills",
    origin: "Companion (race fixed)",
    race: "High Elf — fixed",
    classPath: "Rogue → Swashbuckler (or Thief)",
    stats: "DEX primary (soft)",
    why: "Locks, sneak, later Ascended damage.",
    darkPath: "Ascend at Cazador.",
    combatRole: "Sneak Attack every turn.",
    levels: [
      { level: "3", note: "Swashbuckler." },
      { level: "4", note: "Sharpshooter or DEX ASI." },
      { level: "Act 3", note: "Ascend + Rhapsody." },
    ],
    openers: ["Sneak Attack", "Special arrows on groups"],
  },
  {
    id: "minthara",
    name: "Minthara",
    role: "Frontline Destroyer",
    origin: "Companion — Grove raid / Absolute path",
    race: "Drow — fixed",
    classPath: "Respec: Giant Barbarian or Oathbreaker",
    stats: "STR primary (soft)",
    why: "Dark-themed frontliner after Absolute path.",
    darkPath: "Raid Grove → recruit → keep Absolute-aligned.",
    combatRole: "Rage/smite and delete melee threats.",
    levels: [
      { level: "Recruit", note: "After Grove raid path." },
      { level: "Respec", note: "Giant Barb (throws) or Oathbreaker (smites)." },
      { level: "5", note: "Extra Attack." },
    ],
    openers: ["Rage or smite setup", "Focus fire with the party"],
  },
];

export const PARTY_NOTES = {
  rest: "Warlock slots return on short rest — use them. Cleric is long-rest heavy.",
  backup: "No Minthara → Lae’zel Battlemaster or Giant Barb.",
  face: "Haunted One + Deception; Persuasion via Beguiling Influence if needed.",
};
