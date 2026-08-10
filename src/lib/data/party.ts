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
    "Warlock 2 has TWO steps: (A) +1 SPELL from the spell list, then (B) Eldritch INVOCATIONS — pick Agonising Blast (spelling with S) + Devil’s Sight. Invocations are not spells.",
  level3Note: "Pact Boon: Pact of the Blade.",
  level5Note: "Deepened Pact → Extra Attack with pact / hexed weapon.",
};

export const PARTY_NOTES = {
  rest: "Warlock Pact slots refill on short rest — nova often, then short rest. Don’t long-rest hoard like a wizard.",
  backup:
    "Early Act 1 active four: You + Shadowheart + Astarion + Lae’zel (temp). When Minthara is ready, bench Lae’zel. Gale stays camp. Hireling only if you drop Lae’zel early.",
  face: "You’re the CHA face. Astarion covers locks/stealth; Shadowheart covers religion/insight soft spots.",
};

/** Final / planned permanent party */
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
      {
        level: "1",
        note: "Hexblade. 2 cantrips: EB + Booming Blade. 2 spells: Hex + Shield. Bind Hexed Weapon.",
      },
      {
        level: "2",
        note: "Spell step: +1 spell. Then Invocations: Agonising Blast + Devil’s Sight.",
      },
      { level: "3", note: "Pact of the Blade." },
      { level: "4", note: "ASI → CHA. 3rd cantrip (Mage Hand)." },
      { level: "5", note: "Deepened Pact Extra Attack. Big spike." },
      {
        level: "8+",
        note: "Finish CHA 20. Optional later: 2 Paladin for smites (respec).",
      },
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
    classPath: "Rogue → Thief · dual hand crossbows",
    stats: "Keep his defaults — NO respec needed. Optional later min-max: DEX/CON.",
    why: "Locks, sneak, dual HX Sharpshooter. Fast Hands = two bonus actions. Ascension power spike.",
    darkPath: "Support Cazador Ascension for max power.",
    combatRole: "Hide → Sharpshooter shots · Fast Hands offhand.",
    levels: [
      {
        level: "1–2",
        note: "Just level him. No Withers. Defaults are fine.",
      },
      {
        level: "3",
        note: "Subclass: Thief (Fast Hands). Only important early pick.",
      },
      { level: "4", note: "Sharpshooter feat." },
      { level: "8", note: "DEX ASI or Alert soft." },
    ],
    openers: [
      "Hide / high ground",
      "Sharpshooter main hand",
      "Bonus: offhand shot (Fast Hands)",
    ],
  },
  {
    id: "minthara",
    name: "Minthara",
    role: "Frontline Destroyer",
    origin: "Companion — Absolute / raid path",
    race: "Lolth-Sworn Drow — fixed",
    classPath: "Paladin → Oathbreaker (Withers) · soft alt Giant Barb",
    stats: "STR primary · CHA secondary — respec when she joins",
    why: "Dark companion melee — replaces Lae’zel as permanent frontline.",
    darkPath: "Raid Grove → free at Moonrise if needed.",
    combatRole: "Smites on Held targets.",
    levels: [
      { level: "Recruit", note: "Respec after free/recruit. Bench Lae’zel." },
      { level: "5", note: "Extra Attack." },
    ],
    openers: ["Smite setup", "GWM / big weapon swing", "Shove elevation"],
  },
];

/** Temporary Act 1 bench note — not permanent party */
export const TEMP_COMPANIONS: PartyMember[] = [
  {
    id: "laezel",
    name: "Lae’zel (temporary)",
    role: "Frontline Destroyer",
    origin: "Companion — not final dark four",
    race: "Githyanki — fixed",
    classPath: "Fighter (default) · soft: Battlemaster",
    stats: "Keep defaults — optional Battlemaster later",
    why: "Best early tank/DPS until Minthara. Everburn Blade carrier. Strong at Creche.",
    darkPath:
      "She dislikes a lot of Absolute softness/evil she reads as weakness — approval may tank. Still fine to use her for power, then camp her.",
    combatRole: "Melee pressure, Action Surge, heavy hits.",
    levels: [
      { level: "Now", note: "Keep leveling while she’s active — don’t waste her." },
      {
        level: "Soft respec",
        note: "Battlemaster for Trip/Menacing attacks if you want more control.",
      },
      {
        level: "Bench",
        note: "When Minthara joins: camp Lae’zel, move Adamantine/big weapons over.",
      },
    ],
    openers: ["Action Surge on bosses", "Trip / shove", "Everburn swings"],
  },
];
