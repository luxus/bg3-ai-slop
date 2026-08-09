/**
 * Cool tricks & high-value loot notes for the dark run.
 * Locations/mechanics verified on bg3.wiki where marked.
 */

export type Trick = {
  id: string;
  act: 0 | 1 | 2 | 3;
  category: "loot" | "combat" | "social" | "perm" | "exploit";
  title: string;
  detail: string;
  forParty?: string;
  source: string;
  sourceUrl: string;
  confidence: "verified" | "soft";
};

export const TRICKS: Trick[] = [
  {
    id: "t-everburn",
    act: 1,
    category: "loot",
    title: "Everburn Blade — kill OR Command Drop (details)",
    detail:
      "WHAT: Flaming greatsword on Commander Zhalk at the Nautiloid helm.\n\nMETHOD A — Kill & loot (recommended if you’re confused):\n• Free Lae’zel + Shadowheart, reach the helm.\n• Zhalk is fighting a mind flayer. Focus Zhalk down (or let the flayer help), loot Everburn Blade from his corpse.\n• Use restoration pods. Leave when the blade is in inventory — more cambions spawn if you stall.\n\nMETHOD B — Command: Drop (optional):\n• Free Shadowheart first.\n• Open her spells → prepare Command (she usually does NOT have it prepared by default — you must add it).\n• In combat: SH casts Command → choose the Drop option targeting Zhalk.\n• He often succeeds the save (high WIS). Retry or fall back to Method A.\n• Pick the sword up from the ground.\n\nYour Hexblade does not need Command. Only Shadowheart (or another caster with Command) does for Method B.",
    forParty: "Early melee / Lae’zel — STR weapon, not forever for CHA Hexblade",
    source: "bg3.wiki — Everburn Blade / Escape the Nautiloid",
    sourceUrl: "https://bg3.wiki/wiki/Everburn_Blade",
    confidence: "verified",
  },
  {
    id: "t-deathstalker",
    act: 1,
    category: "loot",
    title: "Deathstalker Mantle (Dark Urge only)",
    detail:
      "After early Urge events, Sceleritas Fel gifts this cloak at camp: kill → Invisible 2 turns (once per turn). Perfect for multi-kill fights.",
    forParty: "Dark Urge",
    source: "bg3.wiki — The Deathstalker Mantle",
    sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle",
    confidence: "verified",
  },
  {
    id: "t-smuggler",
    act: 1,
    category: "loot",
    title: "Smuggler’s Ring (hidden skeleton)",
    detail:
      "Risen Road river path near broken bridge (~X:58 Y:516) — skeleton in a bush. +2 Stealth & Sleight of Hand, −1 CHA. Astarion’s best early ring.",
    forParty: "Astarion",
    source: "bg3.wiki — Smuggler's Ring",
    sourceUrl: "https://bg3.wiki/wiki/Smuggler%27s_Ring",
    confidence: "verified",
  },
  {
    id: "t-misty-amulet",
    act: 1,
    category: "loot",
    title: "Amulet of Misty Step (Gut’s room)",
    detail:
      "Defiled Temple behind Polma in Priestess Gut’s chambers — gilded chest. Misty Step per short rest. Only one copy in the game (Omeluum also sells if you skip this).",
    forParty: "Anyone who needs reposition",
    source: "bg3.wiki — Amulet of Misty Step",
    sourceUrl: "https://bg3.wiki/wiki/Amulet_of_Misty_Step",
    confidence: "verified",
  },
  {
    id: "t-night-walkers",
    act: 1,
    category: "loot",
    title: "Disintegrating Night Walkers (Nere)",
    detail:
      "Grymforge — loot Nere after free/kill him. Free Misty Step + immune to grease/web/ensnare/ice surfaces. Best Act 1 boots.",
    forParty: "Dark Urge / Astarion",
    source: "bg3.wiki — Disintegrating Night Walkers",
    sourceUrl: "https://bg3.wiki/wiki/Disintegrating_Night_Walkers",
    confidence: "verified",
  },
  {
    id: "t-diadem",
    act: 1,
    category: "loot",
    title: "Diadem of Arcane Synergy (Creche)",
    detail:
      "Inquisitor’s Chamber — Ardent Jhe’rezath. Inflict a condition → Arcane Synergy → weapon attacks add spellcasting mod damage. Insane on Hexblade + Booming Blade.",
    forParty: "Dark Urge Hexblade",
    source: "bg3.wiki — Diadem of Arcane Synergy",
    sourceUrl: "https://bg3.wiki/wiki/Diadem_of_Arcane_Synergy",
    confidence: "verified",
  },
  {
    id: "t-strange-conduit",
    act: 1,
    category: "loot",
    title: "Strange Conduit Ring (Creche)",
    detail:
      "Elegant chest in Inquisitor’s Chamber. While concentrating, weapon attacks deal +1d4 Psychic. Stack with Hex concentration.",
    forParty: "Dark Urge / Astarion",
    source: "bg3.wiki — Strange Conduit Ring",
    sourceUrl: "https://bg3.wiki/wiki/Strange_Conduit_Ring",
    confidence: "verified",
  },
  {
    id: "t-gloves-dex",
    act: 1,
    category: "loot",
    title: "Gloves of Dexterity (Creche vendor)",
    detail:
      "A’jak’nir Jeera sells Gloves of Dexterity (set DEX to 18). Huge for Astarion. Expensive — sell junk.",
    forParty: "Astarion",
    source: "bg3.wiki — Gloves of Dexterity",
    sourceUrl: "https://bg3.wiki/wiki/Gloves_of_Dexterity",
    confidence: "verified",
  },
  {
    id: "t-graceful",
    act: 1,
    category: "loot",
    title: "Graceful Cloth (+2 DEX clothing)",
    detail:
      "Lady Esther on Rosymorn Monastery Trail. +2 DEX + Cat’s Grace. Don’t stack expectation with Gloves of Dexterity.",
    forParty: "Astarion",
    source: "bg3.wiki — The Graceful Cloth",
    sourceUrl: "https://bg3.wiki/wiki/The_Graceful_Cloth",
    confidence: "verified",
  },
  {
    id: "t-broodmother",
    act: 1,
    category: "loot",
    title: "Broodmother’s Revenge (Kagha)",
    detail:
      "Loot Kagha (raid or after shadow druids). When healed, weapon gains +1d6 poison. Pair with Healing Word / potion sips.",
    forParty: "Minthara / Dark Urge",
    source: "bg3.wiki — Broodmother's Revenge",
    sourceUrl: "https://bg3.wiki/wiki/Broodmother%27s_Revenge",
    confidence: "verified",
  },
  {
    id: "t-absolute-gear",
    act: 1,
    category: "loot",
    title: "Absolute-brand gear (your path)",
    detail:
      "Absolute’s Warboard on True Soul Gut; Ring of Absolute Force on Sergeant Thrinn (Grymforge). Extra power if branded by the Absolute.",
    forParty: "Branded party members",
    source: "bg3.wiki — Absolute's Warboard / Ring of Absolute Force",
    sourceUrl: "https://bg3.wiki/wiki/Absolute%27s_Warboard",
    confidence: "verified",
  },
  {
    id: "t-luminous",
    act: 1,
    category: "loot",
    title: "Luminous Armour (Selûnite Outpost)",
    detail:
      "Underdark Selûnite Outpost — trapped chest behind hidden wall (~X:176 Y:-247). Radiant damage → shockwave. Optional for Death SH.",
    forParty: "Optional radiant builds",
    source: "bg3.wiki — Luminous Armour",
    sourceUrl: "https://bg3.wiki/wiki/Luminous_Armour",
    confidence: "verified",
  },
  {
    id: "t-titanstring",
    act: 1,
    category: "loot",
    title: "Titanstring Bow (Zhentarim)",
    detail:
      "Complete Find the Missing Shipment → Brem sells Titanstring (STR to bow damage). Or Lann Tarv in Moonrise if you skip Brem.",
    forParty: "Minthara (STR)",
    source: "bg3.wiki — Titanstring Bow",
    sourceUrl: "https://bg3.wiki/wiki/Titanstring_Bow",
    confidence: "verified",
  },
  {
    id: "t-blood-lathander",
    act: 1,
    category: "loot",
    title: "Blood of Lathander (Creche secret)",
    detail:
      "Secret Chamber under Rosymorn / Creche. Legendary mace. Watch the trap if you take it without ceremonial weapons.",
    forParty: "Backup radiant weapon",
    source: "bg3.wiki — The Blood of Lathander",
    sourceUrl: "https://bg3.wiki/wiki/The_Blood_of_Lathander",
    confidence: "verified",
  },
  {
    id: "t-mourning-frost",
    act: 1,
    category: "loot",
    title: "Mourning Frost (combine 3 parts)",
    detail:
      "Three Underdark drow mages: Icy Crystal (Filro), Icy Helve (Dhourn), Icy Metal (Xargrim). Combine → cold staff.",
    forParty: "Optional",
    source: "bg3.wiki — Mourning Frost",
    sourceUrl: "https://bg3.wiki/wiki/Mourning_Frost",
    confidence: "verified",
  },
  {
    id: "t-ethel-hair",
    act: 1,
    category: "perm",
    title: "Auntie Ethel’s Hair — permanent +1 ability",
    detail:
      "Fight Ethel in her lair (not teahouse). At low HP she bargains. Take the hair → permanent +1 to any ability (can go above 20). Put on CHA for Dark Urge.",
    forParty: "Dark Urge CHA (or Astarion DEX)",
    source: "bg3.wiki — Auntie Ethel's Hair",
    sourceUrl: "https://bg3.wiki/wiki/Auntie_Ethel%27s_Hair",
    confidence: "verified",
  },
  {
    id: "t-shovel",
    act: 1,
    category: "perm",
    title: "Shovel the quasit — permanent familiar",
    detail:
      "Apothecary cellar (Blighted Village) — Scroll of Summon Quasit. Cast with Warlock (you). Talk: keep name Shovel → learn Find Familiar: Cheeky Quasit (once/short rest).",
    forParty: "Dark Urge Warlock",
    source: "bg3.wiki — Shovel (familiar)",
    sourceUrl: "https://bg3.wiki/wiki/Shovel_(familiar)",
    confidence: "verified",
  },
  {
    id: "t-darkness",
    act: 0,
    category: "combat",
    title: "Darkness + Devil’s Sight cheese",
    detail:
      "Warlock invocation Devil’s Sight sees in magical darkness. Drop Darkness on a pack; party with sight deletes enemies who can’t see. Your Drow also gets Darkness at level 5.",
    forParty: "Dark Urge + melee allies careful placement",
    source: "bg3.wiki — Devil's Sight / Darkness",
    sourceUrl: "https://bg3.wiki/wiki/Devil%27s_Sight",
    confidence: "verified",
  },
  {
    id: "t-phalar-shriek",
    act: 0,
    category: "combat",
    title: "Phalar Aluve: Shriek every hard fight",
    detail:
      "Activate Shriek (short rest). Nearby enemies take extra thunder and get debuffed. Free party amp — don’t save it forever.",
    forParty: "Whole party",
    source: "bg3.wiki — Phalar Aluve: Shriek",
    sourceUrl: "https://bg3.wiki/wiki/Phalar_Aluve",
    confidence: "verified",
  },
  {
    id: "t-spirit-guardians",
    act: 0,
    category: "combat",
    title: "Death SH: Spirit Guardians walk",
    detail:
      "Cast necrotic Spirit Guardians, walk through packs. At Death 6, Inescapable Destruction ignores necrotic resistance. Hold Person for party crits.",
    forParty: "Shadowheart",
    source: "bg3.wiki — Spirit Guardians / Death Domain",
    sourceUrl: "https://bg3.wiki/wiki/Spirit_Guardians",
    confidence: "verified",
  },
  {
    id: "t-wet-lightning",
    act: 0,
    category: "combat",
    title: "Wet + lightning = double damage",
    detail:
      "Create Water / throw water → Wet. Lightning (and cold) deals double. Spellsparkler charges love this.",
    forParty: "Anyone with lightning",
    source: "bg3.wiki — Wet",
    sourceUrl: "https://bg3.wiki/wiki/Wet_(Condition)",
    confidence: "verified",
  },
  {
    id: "t-height",
    act: 0,
    category: "combat",
    title: "High ground + shove / throw off cliffs",
    detail:
      "Advantage from high ground on ranged. Giant Barb throws: yeet into chasms (no loot from void — soft tradeoff).",
    forParty: "Minthara Giant Barb, Astarion range",
    source: "bg3.wiki — Elevation / Throw",
    sourceUrl: "https://bg3.wiki/wiki/Throw",
    confidence: "soft",
  },
  {
    id: "t-barrels",
    act: 0,
    category: "combat",
    title: "Smokepowder / oil barrels (barrelmancy)",
    detail:
      "Carry barrels in camp. Stack oil + fire or smokepowder near bosses before initiative. Soft cheese on Balanced.",
    forParty: "Optional cheese",
    source: "bg3.wiki — Smokepowder Bomb / explosives",
    sourceUrl: "https://bg3.wiki/wiki/Smokepowder_Bomb",
    confidence: "soft",
  },
  {
    id: "t-hex-curse",
    act: 0,
    category: "combat",
    title: "Hexblade’s Curse + Hex stacking focus",
    detail:
      "Curse for crit floor + PB damage; Hex for 1d6 necrotic per hit. Save for elites. Short rest recharges curse HP refund on kill.",
    forParty: "Dark Urge",
    source: "bg3.wiki — Hexblade's Curse / Hex",
    sourceUrl: "https://bg3.wiki/wiki/Hexblade%27s_Curse",
    confidence: "verified",
  },
  {
    id: "t-animals",
    act: 1,
    category: "social",
    title: "Potion of Animal Speaking always",
    detail:
      "Talk to Scratch, birds, rats — extra quests and loot. Buy potions early; lasts until long rest.",
    forParty: "Exploration",
    source: "bg3.wiki — Speak with Animals / Scratch",
    sourceUrl: "https://bg3.wiki/wiki/Scratch",
    confidence: "verified",
  },
  {
    id: "t-nonlethal-min",
    act: 1,
    category: "social",
    title: "Alternate Minthara: non-lethal KO",
    detail:
      "If you don’t raid the Grove, toggle non-lethal and KO Minthara, free her at Moonrise later. Dark run prefers full raid — this is backup.",
    forParty: "Minthara",
    source: "bg3.wiki — Minthara / Decide Minthara's Fate",
    sourceUrl: "https://bg3.wiki/wiki/Minthara",
    confidence: "verified",
  },
  {
    id: "t-voss-sword",
    act: 1,
    category: "exploit",
    title: "Early Voss’ Silver Sword (hard cheese)",
    detail:
      "Kith’rak Voss on the mountain bridge can be disarmed (Command Drop / Fear / etc.) for a silver greatsword early. High save DC — optional advanced cheese. Same idea as Zhalk: need Command prepared on someone.",
    forParty: "Optional min-max",
    source: "bg3.wiki — Guide:Early Silver Sword",
    sourceUrl: "https://bg3.wiki/wiki/Guide:Early_Silver_Sword",
    confidence: "soft",
  },
  {
    id: "t-elixirs",
    act: 0,
    category: "combat",
    title: "Elixir rules (don’t waste)",
    detail:
      "Only one elixir active — new replaces old. Bloodlust / Hill Giant STR / Vigilance are top picks. Potions stack more freely than elixirs.",
    forParty: "Whole party",
    source: "bg3.wiki — Elixirs",
    sourceUrl: "https://bg3.wiki/wiki/Elixirs",
    confidence: "soft",
  },
  {
    id: "t-short-rest-wl",
    act: 0,
    category: "combat",
    title: "Warlock is short-rest nova",
    detail:
      "All Pact slots back on short rest. Blow slots every fight that matters; rest after. Don’t long-rest hoard like a wizard.",
    forParty: "Dark Urge",
    source: "bg3.wiki — Pact Magic",
    sourceUrl: "https://bg3.wiki/wiki/Pact_Magic",
    confidence: "verified",
  },
];

export const TRICK_CATEGORIES = [
  { id: "loot", label: "Hidden / high-value loot" },
  { id: "perm", label: "Permanent power" },
  { id: "combat", label: "Combat tricks" },
  { id: "social", label: "Path / social" },
  { id: "exploit", label: "Optional cheese" },
] as const;
