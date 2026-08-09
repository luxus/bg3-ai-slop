/**
 * Authoritative references used to proof this guide.
 * Prefer bg3.wiki over videos / memory. If the game UI disagrees with a video, trust the game + wiki.
 */
export const SOURCES = [
  {
    id: "warlock",
    title: "Warlock class (cantrips, spells, levels)",
    url: "https://bg3.wiki/wiki/Warlock",
    proves: [
      "Level 1: 2 cantrips known, 2 spells known, subclass at level 1",
      "Level 2: 2 Eldritch Invocations",
      "Level 3: Pact Boon (Blade / Chain / Tome)",
      "Level 4: 3rd cantrip + feat/ASI",
      "Level 5: Deepened Pact (Blade = Extra Attack)",
    ],
  },
  {
    id: "hexblade",
    title: "The Hexblade subclass",
    url: "https://bg3.wiki/wiki/The_Hexblade",
    proves: [
      "Chosen at Warlock level 1",
      "Hex Warrior: medium armour, shields, martial weapons",
      "Bind Hexed Weapon + Hexblade’s Curse at level 1",
      "Expanded 1st-level list includes Shield + Wrathful Smite",
    ],
  },
  {
    id: "hex-warrior",
    title: "Hex Warrior / Bind Hexed Weapon",
    url: "https://bg3.wiki/wiki/Hex_Warrior",
    proves: [
      "CHA can replace STR/DEX for attacks with the bound weapon",
      "Does not replace the need for Pact of the Blade if you want Extra Attack at 5",
    ],
  },
  {
    id: "haunted",
    title: "Haunted One background",
    url: "https://bg3.wiki/wiki/Haunted_One",
    proves: [
      "Exclusive to The Dark Urge",
      "Skills: Medicine + Intimidation",
    ],
  },
  {
    id: "dark-urge",
    title: "The Dark Urge origin",
    url: "https://bg3.wiki/wiki/The_Dark_Urge",
    proves: ["Origin-locked story; background is Haunted One"],
  },
  {
    id: "drow",
    title: "Drow race",
    url: "https://bg3.wiki/wiki/Drow",
    proves: [
      "Lolth-Sworn vs Seldarine: same combat traits, different dialogue/deity flavour",
      "Free cantrip Dancing Lights at level 1 (racial — not a Warlock cantrip slot)",
      "Faerie Fire at 3, Darkness at 5 (long rest)",
    ],
  },
] as const;

export const PROOF_RULES = [
  "Primary source: bg3.wiki pages linked in Sources (not YouTube memory).",
  "Secondary: what the character-create screen actually shows you.",
  "If app text ≠ game UI, trust the game and report it — we fix the app.",
  "Spell/cantrip counts always come from the class table, not subclass vibes.",
  "Racial free cantrips (e.g. Dancing Lights) do not use Warlock cantrip slots.",
];
