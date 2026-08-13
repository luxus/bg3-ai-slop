export type RespecStep = {
  label: string;
  /** Optional wiki-chip terms */
  chips?: string[];
  detail?: string;
};

export type PartyMember = {
  id: string;
  name: string;
  role: string;
  origin: string;
  race: string;
  classPath: string;
  stats: string;
  /** Exact ability array when respeccing */
  statsArray?: Record<string, number>;
  /** Skill proficiency picks */
  skills?: string[];
  /** Expertise picks (rogue etc.) */
  expertise?: string[];
  /** Whether Withers respec is required */
  respec: "create" | "required" | "optional" | "never";
  respecTitle?: string;
  respecSteps?: RespecStep[];
  why: string;
  darkPath: string;
  combatRole: string;
  levels: { level: string; note: string }[];
  openers: string[];
  /** Short "do this in camp" blurb */
  howToPlay?: string;
};

/**
 * Character create — hard numbers verified on bg3.wiki.
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
    "Exactly 2 cantrips at Warlock 1. 3rd cantrip at Warlock 4 (e.g. Mage Hand). 4th at Warlock 10.",
  spells: ["Hex", "Shield"],
  spellsNote:
    "Exactly 2 spells known at level 1. Hex = base list. Shield = Hexblade expanded list only. You learn +1 spell at almost every warlock level after.",
  background: "Haunted One (locked)",
  backgroundNote:
    "Dark Urge cannot choose another background. Skills from background: Medicine + Intimidation.",
  skills:
    "Warlock: choose 2 from Arcana, Deception, History, Intimidation, Investigation, Religion. Recommended: Deception + Arcana (Intimidation already from Haunted One). Persuasion is NOT a Warlock skill — take Beguiling Influence later if you want it.",
  skillList: ["Deception", "Arcana", "Medicine", "Intimidation"],
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
    "Warlock 2 has TWO steps: (A) +1 SPELL (Armour of Agathys), then (B) Eldritch INVOCATIONS — Agonising Blast + Devil’s Sight. Invocations are not spells.",
  level3Note:
    "Pact Boon: Pact of the Blade. +1 spell up to 2nd level (Misty Step). Slots always cast at 2nd.",
  level4Note:
    "THREE picks: (1) ASI +2 CHA, (2) 3rd cantrip Mage Hand, (3) +1 spell 1st/2nd — Shadow Blade. NOT 4th-level spells — those unlock at Warlock 7.",
  level5Note:
    "Deepened Pact Extra Attack. +1 spell up to 3rd (Hunger of Hadar). 3rd invocation. Slots always at 3rd.",
  level7Note:
    "First 4th-level warlock spells (Banishment). Slots always cast at 4th.",
};

export const PARTY_NOTES = {
  rest: "Warlock Pact slots refill on short rest — nova often, then short rest. Don’t long-rest hoard like a wizard.",
  backup:
    "Early Act 1 active four: You + Shadowheart + Astarion + Lae’zel (temp). When Minthara is ready, bench Lae’zel. Gale stays camp. Skip Karlach and Wyll — they leave on the Grove raid.",
  face: "You’re the CHA face. Astarion covers locks/stealth; Shadowheart covers Religion / Medicine soft spots.",
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
    stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17",
    statsArray: { STR: 8, DEX: 16, CON: 14, INT: 8, WIS: 10, CHA: 17 },
    skills: ["Deception", "Arcana", "Medicine", "Intimidation"],
    expertise: [],
    respec: "create",
    respecTitle: "Character create (no Withers)",
    respecSteps: [
      { label: "Origin → The Dark Urge" },
      { label: "Race → Drow → Lolth-Sworn Drow", chips: ["Drow"] },
      { label: "Class → Warlock", chips: ["Warlock"] },
      { label: "Subclass → The Hexblade", chips: ["The Hexblade"] },
      {
        label: "Background → Haunted One (locked)",
        chips: ["Haunted One"],
        detail: "Gives Medicine + Intimidation",
      },
      {
        label: "Skills → Deception + Arcana",
        chips: ["Deception", "Arcana"],
        detail: "Warlock picks 2. Do NOT pick Persuasion here (not on list).",
      },
      {
        label: "Cantrips → Eldritch Blast + Booming Blade",
        chips: ["Eldritch Blast", "Booming Blade"],
      },
      {
        label: "Spells → Hex + Shield",
        chips: ["Hex", "Shield"],
      },
      {
        label: "Bind Hexed Weapon on your starting weapon",
        chips: ["Bind Hexed Weapon", "Hex Warrior"],
      },
    ],
    why: "CHA face + melee via Bind Hexed Weapon from level 1. Eldritch Blast + Booming Blade. Haunted One locked.",
    darkPath: "Lean into the Urge. Absolute early, Murder Tribunal later.",
    combatRole: "Curse → weapon nova / EB. Short-rest slots.",
    howToPlay:
      "Boss: Hexblade’s Curse → Hex → Booming Blade / Shadow Blade. Range: Eldritch Blast + Agonising Blast. Short rest often.",
    levels: [
      {
        level: "1",
        note: "Hex + Shield. EB + Booming Blade. Bind weapon. 1× 1st slot.",
      },
      {
        level: "2",
        note: "+Armour of Agathys. Invocations: Agonising Blast + Devil’s Sight.",
      },
      {
        level: "3",
        note: "Pact of the Blade. +Misty Step. Slots always cast at 2nd.",
      },
      {
        level: "4",
        note: "ASI +2 CHA · Mage Hand · +Shadow Blade (1st/2nd pick). NOT 4th-level spells.",
      },
      {
        level: "5",
        note: "Extra Attack. +Hunger of Hadar. Slots always at 3rd. +Repelling Blast.",
      },
      {
        level: "6",
        note: "Accursed Spectre. +Counterspell.",
      },
      {
        level: "7",
        note: "4th-level spell list unlocks. +Banishment. Slots always at 4th.",
      },
      {
        level: "8+",
        note: "CHA 20. L9 Hold Monster (5th). L11 Mystic Arcanum.",
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
    stats: "STR 10 · DEX 14 · CON 16 · INT 8 · WIS 17 · CHA 8",
    statsArray: { STR: 10, DEX: 14, CON: 16, INT: 8, WIS: 17, CHA: 8 },
    skills: ["Medicine", "Religion", "Insight", "Perception"],
    respec: "required",
    respecTitle: "Withers respec — do this ASAP after camp unlocks",
    respecSteps: [
      {
        label: "Talk to Withers → Respec → pay gold",
        detail: "He visits camp around level 2–3 if not already there.",
      },
      { label: "Class → Cleric", chips: ["Cleric"] },
      {
        label: "Subclass → Death Domain (not Trickery)",
        chips: ["Death Domain"],
      },
      {
        label: "Abilities → WIS 17 · CON 16 · DEX 14 · STR 10 · INT 8 · CHA 8",
        detail: "Dump CHA — you are the face. WIS first, then CON.",
      },
      {
        label: "Skills → Medicine, Religion, Insight, Perception",
        chips: ["Medicine", "Religion", "Insight", "Perception"],
        detail: "Keep her as party wisdom skill monkey. No face skills needed.",
      },
      {
        label: "Cantrips → Toll the Dead, Guidance, Sacred Flame, +1 utility",
        chips: ["Toll the Dead", "Guidance", "Sacred Flame"],
      },
      {
        label: "Prepare → Bless, Healing Word, Command",
        chips: ["Bless", "Healing Word", "Command"],
        detail: "Re-prepare after every long rest if needed.",
      },
    ],
    why: "Spirit Guardians + control. Shar path for dark run. Must leave Trickery Domain.",
    darkPath: "Shar loyalty → kill Nightsong → Dark Justiciar.",
    combatRole: "SG + Hold Person + Bless.",
    howToPlay:
      "Cast Spirit Guardians (necrotic) and walk. Hold Person on elites for party crits/smites. Keep concentration (War Caster at 4).",
    levels: [
      { level: "Respec", note: "Withers → Cleric → Death Domain. WIS/CON first." },
      { level: "3", note: "Prepare Hold Person." },
      { level: "4", note: "War Caster → pick Concentration (not Opportunity Spell)." },
      { level: "5", note: "Spirit Guardians (necrotic) forever." },
      { level: "6", note: "Inescapable Destruction (ignore necrotic resist)." },
      { level: "8", note: "+2 WIS or Alert." },
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
    stats: "STR 8 · DEX 17 · CON 16 · INT 8 · WIS 14 · CHA 10 (if you respec)",
    statsArray: { STR: 8, DEX: 17, CON: 16, INT: 8, WIS: 14, CHA: 10 },
    skills: ["Stealth", "Sleight of Hand", "Perception", "Acrobatics"],
    expertise: ["Stealth", "Sleight of Hand"],
    respec: "optional",
    respecTitle: "Optional Withers respec (only if you want clean min-max)",
    respecSteps: [
      {
        label: "Default Astarion is already fine — skip this if you want a smooth run",
        detail: "Only respec if you already paid Withers / want exact numbers.",
      },
      { label: "Class → Rogue (stay pure)", chips: ["Rogue"] },
      {
        label: "Abilities → STR 8 · DEX 17 · CON 16 · INT 8 · WIS 14 · CHA 10",
        detail: "You already have DEX 17 / CON 16 — dump STR, put rest in WIS.",
      },
      {
        label: "Skills → Stealth, Sleight of Hand, Perception, Acrobatics",
        chips: ["Stealth", "Sleight of Hand", "Perception", "Acrobatics"],
        detail: "Skip Athletics / Persuasion. Soft swap: Deception or Insight instead of Acrobatics.",
      },
      {
        label: "Expertise (Rogue 1) → Stealth + Sleight of Hand",
        chips: ["Stealth", "Sleight of Hand"],
      },
      {
        label: "Level 3 → Subclass Thief (not Assassin)",
        chips: ["Thief", "Fast Hands"],
      },
      {
        label: "Level 4 → Feat Sharpshooter",
        chips: ["Sharpshooter"],
      },
      {
        label: "Level 6 expertise → Perception + (Acrobatics or Deception)",
        chips: ["Perception"],
      },
      {
        label: "Gear → dual hand crossbows ASAP",
        detail: "Hide → main shot → bonus offhand (Fast Hands).",
      },
    ],
    why: "Locks, sneak, dual HX Sharpshooter. Fast Hands = two bonus actions. Ascension power spike.",
    darkPath: "Support Cazador Ascension for max power.",
    combatRole: "Hide → Sharpshooter shots · Fast Hands offhand.",
    howToPlay:
      "Stay at range. Hide (bonus) → Sharpshooter shot → second shot with Fast Hands. Pick every lock; you are the party thief.",
    levels: [
      {
        level: "1–2",
        note: "Level as Rogue. No subclass yet. Optional respec stats above.",
      },
      {
        level: "3",
        note: "Subclass: Thief only. Fast Hands is the build.",
      },
      { level: "4", note: "Sharpshooter → pick All In (not Low Ground). Toggle on when hidden." },
      {
        level: "6",
        note: "Expertise: Perception + Acrobatics/Deception.",
      },
      { level: "8", note: "+2 DEX or Alert." },
      { level: "10", note: "Crossbow Expert soft, or Alert / leftover ASI." },
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
    stats: "STR 17 · DEX 10 · CON 14 · INT 8 · WIS 10 · CHA 16",
    statsArray: { STR: 17, DEX: 10, CON: 14, INT: 8, WIS: 10, CHA: 16 },
    skills: ["Athletics", "Intimidation", "Persuasion", "Religion"],
    respec: "required",
    respecTitle: "Withers respec — same day you recruit her",
    respecSteps: [
      {
        label: "Recruit via Absolute / Grove raid path, then camp → Withers",
        detail: "Bench Lae’zel; move big weapons to Minthara.",
      },
      { label: "Class → Paladin", chips: ["Paladin"] },
      {
        label: "Subclass → Oathbreaker (break oath if needed, then pick)",
        chips: ["Oathbreaker"],
        detail: "If UI forces another oath first: pick any, break it, respec Oathbreaker.",
      },
      {
        label: "Abilities → STR 17 · CHA 16 · CON 14 · DEX 10 · WIS 10 · INT 8",
        detail: "STR for hits/GWM; CHA for smites & aura.",
      },
      {
        label: "Skills → Athletics, Intimidation, Persuasion, Religion",
        chips: ["Athletics", "Intimidation", "Persuasion", "Religion"],
      },
      {
        label: "Fighting Style → Great Weapon Fighting",
        chips: ["Great Weapon Fighting"],
      },
      {
        label: "Level 4 → Great Weapon Master (or +2 STR if missing)",
        chips: ["Great Weapon Master"],
      },
      {
        label: "Level 5 → Extra Attack (smite every swing)",
        chips: ["Extra Attack", "Divine Smite"],
      },
    ],
    why: "Dark companion melee — replaces Lae’zel as permanent frontline. Smites on Hold Person targets.",
    darkPath: "Raid Grove → free at Moonrise if needed.",
    combatRole: "Smites on Held targets.",
    howToPlay:
      "Walk into Shadowheart’s Spirit Guardians edge, smite Held bosses. Aura of Hate buffs party undead/fiend vibes later.",
    levels: [
      { level: "Recruit", note: "Respec Oathbreaker same day. Bench Lae’zel." },
      { level: "4", note: "Great Weapon Master." },
      { level: "5", note: "Extra Attack — power spike." },
      { level: "6", note: "Aura of Protection (CHA to saves)." },
      { level: "8", note: "+2 STR or Savage Attacker soft." },
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
    stats: "Keep defaults — optional STR-first Battlemaster",
    statsArray: { STR: 17, DEX: 13, CON: 15, INT: 10, WIS: 12, CHA: 8 },
    skills: ["Athletics", "Acrobatics", "Survival", "Intimidation"],
    respec: "optional",
    respecTitle: "Optional — only if you want Battlemaster early",
    respecSteps: [
      {
        label: "Skip respec if busy — defaults work for Act 1",
        detail: "She is temporary until Minthara.",
      },
      {
        label: "Soft: Class Fighter → Subclass Battlemaster at 3",
        chips: ["Fighter", "Battle Master"],
      },
      {
        label: "Soft stats → STR primary · CON secondary · dump CHA",
        detail: "STR 17 · CON 15–16 · DEX 14 soft.",
      },
      {
        label: "Skills → Athletics, Survival, Acrobatics, Intimidation",
        chips: ["Athletics", "Survival", "Acrobatics", "Intimidation"],
      },
      {
        label: "Maneuvers soft → Trip Attack, Menacing Attack, Riposte",
        detail: "Control for the party until Minthara.",
      },
      {
        label: "Give her Everburn Blade from Nautiloid",
        chips: ["Everburn Blade"],
      },
      {
        label: "When Minthara joins → camp Lae’zel, transfer gear",
      },
    ],
    why: "Best early tank/DPS until Minthara. Everburn Blade carrier. Strong at Creche.",
    darkPath:
      "She dislikes a lot of Absolute softness/evil she reads as weakness — approval may tank. Still fine to use her for power, then camp her.",
    combatRole: "Melee pressure, Action Surge, heavy hits.",
    howToPlay:
      "Rush melee, Action Surge on bosses, hold Everburn. Don’t invest late-game gear — Minthara inherits it.",
    levels: [
      { level: "Now", note: "Keep leveling while she’s active — don’t waste her." },
      {
        level: "3",
        note: "Battlemaster soft for Trip/Menacing if you respec.",
      },
      {
        level: "4",
        note: "GWM if you respecced; else ASI STR.",
      },
      {
        level: "Bench",
        note: "When Minthara joins: camp Lae’zel, move Adamantine/big weapons over.",
      },
    ],
    openers: ["Action Surge on bosses", "Trip / shove", "Everburn swings"],
  },
];
