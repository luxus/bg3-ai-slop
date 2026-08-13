/**
 * Full level / respec guides for the dark Absolute party.
 * Soft optimized for Balanced — Patch 8 era.
 * Warlock spell progression verified against bg3.wiki/Warlock (2026-08).
 */

export type LevelPick = {
  id: string;
  member: "tav" | "shadowheart" | "astarion" | "minthara" | "laezel";
  level: number;
  title: string;
  classLevel: string;
  stats?: string;
  cantrips?: string[];
  spells?: string[];
  prepare?: string[];
  features?: string[];
  feat?: string;
  invocations?: string[];
  skills?: string[];
  picks: string[];
  note?: string;
};

export const MEMBER_LABEL: Record<LevelPick["member"], string> = {
  tav: "Dark Urge",
  shadowheart: "Shadowheart",
  astarion: "Astarion",
  minthara: "Minthara",
  laezel: "Lae’zel (temp)",
};

export const PARTY_SYNERGY = {
  title: "How this party fights together",
  roles: [
    {
      who: "Dark Urge (Hexblade)",
      job: "Face + short-rest nova. Curse boss → Booming Blade / Shadow Blade attacks. Darkness + Devil’s Sight cheese. Eldritch Blast when kiting.",
    },
    {
      who: "Shadowheart (Death Cleric)",
      job: "Control hub. Spirit Guardians (necrotic) walk, Hold Person for party crits/smites, Bless early, heals when needed. Reaper cantrips hit 2 targets.",
    },
    {
      who: "Astarion (Thief)",
      job: "Ranged DPS + locks. Dual hand crossbows, Sharpshooter, Fast Hands hide/shoot. Optional respec: DEX 17 CON 16 WIS 14. Expertise Stealth + Sleight. Ascension later.",
    },
    {
      who: "Minthara (Oathbreaker)",
      job: "Permanent frontline. Smites on Held targets. Respec STR/CHA Oathbreaker day-of-recruit. Replaces Lae’zel.",
    },
    {
      who: "Lae’zel (temp Fighter)",
      job: "Act 1 only. Everburn + Action Surge until Minthara. Bench after — don’t sink endgame gear.",
    },
  ],
  openers: [
    "SH: Spirit Guardians (or Hold Person on boss) — concentration first",
    "Tav: Hexblade’s Curse + Hex (if lasting) on priority target",
    "Phalar Aluve: Shriek if someone holds it / nearby",
    "Astarion: high ground / hide → Sharpshooter shots",
    "Minthara/Lae’zel: walk into SG safe-ish and smash / smite",
  ],
  itemPriority: [
    "SH concentration gear / War Caster first",
    "Tav: Diadem of Arcane Synergy, Deathstalker, Risky Ring later",
    "Astarion: Smuggler’s Ring, Knife (crit), Gloves of Dex, hand crossbows",
    "Frontline: Adamantine armour, Bhaalist later on Minthara",
  ],
  restRule:
    "Short rest after every hard fight (Warlock slots). Full long rest for camp scenes / Withers / DURGE mantle — don’t only partial-rest forever.",
};

/**
 * Hexblade pure 1–12 spell roadmap (recommended picks).
 * Warlocks always cast their slots at the highest unlocked level —
 * they do NOT get separate 1st/2nd/3rd slot pools like Clerics.
 *
 * Slot power: L1 = 1st · L3 = always 2nd · L5 = always 3rd · L7 = always 4th · L9 = always 5th
 * Spells known: +1 almost every level (2→13 by L12)
 * 4th-LEVEL SPELLS unlock at Warlock 7, not 4.
 */
export const LEVEL_PICKS: LevelPick[] = [
  // ═══════════════════════════════════════
  // DARK URGE — Hexblade Warlock 1–12
  // ═══════════════════════════════════════
  {
    id: "lv-tav-1",
    member: "tav",
    level: 1,
    title: "Hexblade (create)",
    classLevel: "Warlock 1 (Hexblade)",
    stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17",
    cantrips: ["Eldritch Blast", "Booming Blade"],
    spells: ["Hex", "Shield"],
    features: [
      "Hex Warrior: medium armour, shields, martial weapons",
      "Bind Hexed Weapon → attack with CHA",
      "Hexblade’s Curse (short rest)",
    ],
    skills: ["Deception", "Arcana", "Medicine", "Intimidation"],
    picks: [
      "Origin: Dark Urge · Race: Lolth-Sworn Drow · Background: Haunted One (locked)",
      "Warlock skill picks: Deception + Arcana (Medicine + Intimidation from background)",
      "Cantrips: Eldritch Blast + Booming Blade (exactly 2)",
      "Spells known (2): Hex + Shield — Shield is Hexblade expanded list",
      "After create: Bind Hexed Weapon on your melee weapon",
    ],
    note: "1 Pact slot (1st). Spells known: 2. Cantrips: 2.",
  },
  {
    id: "lv-tav-2",
    member: "tav",
    level: 2,
    title: "Invocations + 3rd spell",
    classLevel: "Warlock 2",
    spells: ["Armour of Agathys"],
    invocations: ["Agonising Blast", "Devil’s Sight"],
    picks: [
      "Screen A — learn ONE spell (spells known → 3): Armour of Agathys (soft alt: Hellish Rebuke)",
      "Screen B — TWO invocations: Agonising Blast (spelling with S) + Devil’s Sight",
      "Soft alt invocation: Beguiling Influence instead of Devil’s Sight if you want face skills early",
    ],
    note: "2× 1st-level Pact slots. Invocations are a separate screen from spells.",
  },
  {
    id: "lv-tav-3",
    member: "tav",
    level: 3,
    title: "Pact of the Blade + 2nd-level spells",
    classLevel: "Warlock 3",
    features: ["Pact of the Blade"],
    spells: ["Misty Step"],
    picks: [
      "Pact Boon: Pact of the Blade (required for Extra Attack at 5)",
      "Learn ONE spell up to 2nd level (spells known → 4): Misty Step",
      "Soft alts: Shadow Blade · Mirror Image · Darkness · Hold Person",
      "All Pact spells now always cast at 2nd level",
      "Re-bind weapon after long rest if needed",
    ],
    note: "2× slots always cast at 2nd. You unlock 2nd-level spell picks here — still not 4th-level spells.",
  },
  {
    id: "lv-tav-4",
    member: "tav",
    level: 4,
    title: "Feat + cantrip + spell",
    classLevel: "Warlock 4",
    feat: "ASI +2 CHA (17→19)",
    cantrips: ["Mage Hand"],
    spells: ["Shadow Blade"],
    picks: [
      "THREE things at Warlock 4 (easy to miss):",
      "1) Feat: Ability Improvement → +2 Charisma (17→19)",
      "2) Cantrip (3rd): Mage Hand (soft: Friends / Bone Chill)",
      "3) Spell known → 5: pick ONE 1st or 2nd level — Shadow Blade (melee nova) or Mirror Image / Hold Person / Darkness",
      "You do NOT get 4th-level spells here — those unlock at Warlock 7",
    ],
    note: "Still 2× slots always at 2nd. Spells known: 5. Cantrips: 3. Feat: yes.",
  },
  {
    id: "lv-tav-5",
    member: "tav",
    level: 5,
    title: "Extra Attack + 3rd-level spells",
    classLevel: "Warlock 5",
    features: ["Deepened Pact → Extra Attack with pact weapon"],
    spells: ["Hunger of Hadar"],
    invocations: ["Repelling Blast"],
    picks: [
      "Deepened Pact: Extra Attack with pact / hexed weapon — big spike",
      "Learn ONE spell up to 3rd (spells known → 6): Hunger of Hadar",
      "Soft alts: Counterspell · Hypnotic Pattern · Fear",
      "3rd invocation: Repelling Blast (or keep Devil’s Sight + Agonising; swap only if UI offers replace)",
      "All Pact spells now always cast at 3rd level",
    ],
    note: "2× slots always at 3rd. Invocations known: 3.",
  },
  {
    id: "lv-tav-6",
    member: "tav",
    level: 6,
    title: "Accursed Spectre + spell",
    classLevel: "Warlock 6 (Hexblade)",
    features: ["Accursed Spectre"],
    spells: ["Counterspell"],
    picks: [
      "Hexblade feature: Accursed Spectre (kill cursed target → free spectre)",
      "Learn ONE spell up to 3rd (spells known → 7): Counterspell",
      "Soft alt if you already took Counterspell at 5: Hypnotic Pattern / Fear",
    ],
    note: "Still 2× slots at 3rd. Spells known: 7.",
  },
  {
    id: "lv-tav-7",
    member: "tav",
    level: 7,
    title: "4th-level spell list unlocks",
    classLevel: "Warlock 7",
    spells: ["Banishment"],
    invocations: ["Book of Ancient Secrets soft / keep core three + 4th pick"],
    picks: [
      "THIS is when 4th-level warlock spells unlock (not level 4)",
      "All Pact spells now always cast at 4th level",
      "Learn ONE spell up to 4th (spells known → 8): Banishment",
      "Soft alts: Dimension Door · Blight · Greater Invisibility",
      "4th invocation pick (if offered): keep Agonising + Devil’s Sight + Repelling; add utility",
    ],
    note: "2× slots always at 4th. First time you can learn true 4th-level spells.",
  },
  {
    id: "lv-tav-8",
    member: "tav",
    level: 8,
    title: "CHA to 20 + spell",
    classLevel: "Warlock 8",
    feat: "ASI +1 CHA (to 20) +1 CON soft, or Alert, or War Caster",
    spells: ["Dimension Door"],
    picks: [
      "Feat: finish CHA 20 if still 19 (or Alert / War Caster)",
      "Learn ONE spell up to 4th (spells known → 9): Dimension Door (or Blight / whatever you skipped at 7)",
    ],
    note: "Still 2× slots at 4th. Spells known: 9.",
  },
  {
    id: "lv-tav-9",
    member: "tav",
    level: 9,
    title: "5th-level spell list unlocks",
    classLevel: "Warlock 9",
    spells: ["Hold Monster"],
    invocations: ["+1 invocation (5 total)"],
    picks: [
      "All Pact spells now always cast at 5th level",
      "Learn ONE spell up to 5th (spells known → 10): Hold Monster",
      "Soft alts: Cone of Cold · Telekinesis",
      "5th invocation — keep damage/utility staples",
    ],
    note: "2× slots always at 5th. Spells known: 10.",
  },
  {
    id: "lv-tav-10",
    member: "tav",
    level: 10,
    title: "Armour of Hexes + spell + cantrip",
    classLevel: "Warlock 10 (Hexblade)",
    features: ["Armour of Hexes"],
    cantrips: ["Friends or Bone Chill"],
    spells: ["Cone of Cold"],
    picks: [
      "Hexblade feature: Armour of Hexes (50% miss from cursed attacker)",
      "4th cantrip if offered",
      "Learn ONE spell up to 5th (spells known → 11): Cone of Cold or Telekinesis",
    ],
    note: "Still 2× slots at 5th. Cantrips: 4. Spells known: 11.",
  },
  {
    id: "lv-tav-11",
    member: "tav",
    level: 11,
    title: "Mystic Arcanum + 3rd slot",
    classLevel: "Warlock 11",
    features: ["Mystic Arcanum (6th) — once per long rest"],
    spells: ["+1 spell known (up to 5th)"],
    picks: [
      "Mystic Arcanum: pick a 6th-level once/day (soft: Create Undead / Eyebite / Circle of Death)",
      "Learn ONE more spell up to 5th (spells known → 12)",
      "Pact slots: now 3 (still always cast at 5th)",
    ],
    note: "3× 5th-level Pact slots. Arcanum is separate from spells known.",
  },
  {
    id: "lv-tav-12",
    member: "tav",
    level: 12,
    title: "Last feat + spell + invocation",
    classLevel: "Warlock 12",
    feat: "Alert / War Caster / ASI leftover",
    spells: ["+1 spell known (up to 5th)"],
    invocations: ["Lifedrinker soft / 6th invocation"],
    picks: [
      "Feat polish: Alert or War Caster",
      "Learn final spell (spells known → 13)",
      "6th invocation: Lifedrinker if available for melee CHA damage, else utility",
      "Soft endgame alt respec only: 10 Hexblade / 2 Paladin for smites",
    ],
    note: "Pure Hexblade 12 is fine for first dark run. Spells known cap: 13.",
  },

  // ═══════════════════════════════════════
  // SHADOWHEART — Death Cleric respec 1–12
  // ═══════════════════════════════════════
  {
    id: "lv-sh-1",
    member: "shadowheart",
    level: 1,
    title: "Death Domain respec",
    classLevel: "Cleric 1 (Death Domain)",
    stats: "STR 10 · DEX 14 · CON 16 · INT 8 · WIS 17 · CHA 8",
    cantrips: [
      "Toll the Dead",
      "Guidance",
      "Sacred Flame",
      "Produce Flame",
    ],
    prepare: ["Bless", "Healing Word", "Command", "Shield of Faith"],
    features: ["Reaper", "Death Domain spells"],
    skills: ["Medicine", "Religion", "Insight", "Perception"],
    picks: [
      "Withers → Class Cleric → Subclass Death Domain (leave Trickery)",
      "Abilities: WIS 17 first, then CON 16, DEX 14 — dump CHA",
      "Skills: Medicine, Religion, Insight, Perception",
      "Cantrips: Toll the Dead + Guidance are non-negotiable",
      "Prepare after respec: Bless, Healing Word, Command",
    ],
    note: "Most important respec of the run. Do this as soon as Withers is in camp.",
  },
  {
    id: "lv-sh-2",
    member: "shadowheart",
    level: 2,
    title: "Channel Divinity",
    classLevel: "Cleric 2",
    features: [
      "Channel Divinity: Turn Undead",
      "Touch of Death",
    ],
    prepare: ["Bless", "Healing Word", "Command"],
    picks: [
      "No big choices — confirm level",
      "Channel Divinity recharges on short rest — use Touch of Death",
    ],
  },
  {
    id: "lv-sh-3",
    member: "shadowheart",
    level: 3,
    title: "Hold Person",
    classLevel: "Cleric 3",
    prepare: ["Hold Person", "Spiritual Weapon", "Aid", "Bless", "Healing Word"],
    picks: [
      "Prepare Hold Person immediately — party synergy core",
      "Keep Bless prepared until everyone has better buffs",
    ],
  },
  {
    id: "lv-sh-4",
    member: "shadowheart",
    level: 4,
    title: "War Caster",
    classLevel: "Cleric 4",
    feat: "War Caster — pick Concentration (not Opportunity Spell)",
    cantrips: ["Thaumaturgy"],
    picks: [
      "Feat: War Caster",
      "If it asks Concentration vs Opportunity Spell: take Concentration",
      "That is the one that keeps Spirit Guardians up when she gets hit",
      "Opportunity Spell (cantrip on reaction) is skippable — we don’t need it",
    ],
    note: "You already took Concentration — correct. Don’t respec this.",
  },
  {
    id: "lv-sh-5",
    member: "shadowheart",
    level: 5,
    title: "Spirit Guardians",
    classLevel: "Cleric 5",
    prepare: [
      "Spirit Guardians",
      "Hold Person",
      "Revivify",
      "Mass Healing Word",
      "Bless",
    ],
    features: ["Destroy Undead"],
    picks: [
      "Prepare Spirit Guardians — pick necrotic damage type",
      "Walk through packs; don’t stand still as a pure healer",
      "Always keep Revivify prepared from here",
    ],
  },
  {
    id: "lv-sh-6",
    member: "shadowheart",
    level: 6,
    title: "Inescapable Destruction",
    classLevel: "Cleric 6 (Death)",
    features: ["Inescapable Destruction — ignore necrotic resistance"],
    picks: ["Automatic feature — SG necrotic stays good vs resists"],
  },
  {
    id: "lv-sh-7",
    member: "shadowheart",
    level: 7,
    title: "4th-level prepares",
    classLevel: "Cleric 7",
    prepare: ["Banishment", "Freedom of Movement", "Guardian of Faith"],
    picks: ["Keep SG + Hold as anchors; add control 4ths as needed"],
  },
  {
    id: "lv-sh-8",
    member: "shadowheart",
    level: 8,
    title: "WIS ASI or Alert",
    classLevel: "Cleric 8",
    feat: "ASI +2 WIS (17→19) or Alert",
    features: ["Divine Strike (Death)"],
    picks: ["Prefer +2 WIS for Hold / SG DCs unless initiative is miserable"],
  },
  {
    id: "lv-sh-9",
    member: "shadowheart",
    level: 9,
    title: "5th-level prepares",
    classLevel: "Cleric 9",
    prepare: ["Insect Plague", "Greater Restoration", "Mass Cure Wounds"],
    picks: ["Control first, big heals second"],
  },
  {
    id: "lv-sh-10",
    member: "shadowheart",
    level: 10,
    title: "Divine Intervention",
    classLevel: "Cleric 10",
    features: ["Divine Intervention"],
    picks: ["Emergency button — save for bosses / wipes"],
  },
  {
    id: "lv-sh-11",
    member: "shadowheart",
    level: 11,
    title: "6th-level prepares",
    classLevel: "Cleric 11",
    prepare: ["Heroes’ Feast", "Planar Ally", "Blade Barrier"],
    picks: ["Heroes’ Feast before hard dungeon days"],
  },
  {
    id: "lv-sh-12",
    member: "shadowheart",
    level: 12,
    title: "Last feat",
    classLevel: "Cleric 12",
    feat: "Alert / ASI leftover / Resilient Constitution",
    picks: ["Shar Act 2 gear carries her — feat is polish"],
  },

  // ═══════════════════════════════════════
  // ASTARION — Thief dual hand crossbow
  // ═══════════════════════════════════════
  {
    id: "lv-ast-1",
    member: "astarion",
    level: 1,
    title: "Rogue 1 (optional respec)",
    classLevel: "Rogue 1",
    stats: "OPTIONAL respec: STR 8 · DEX 17 · CON 16 · INT 8 · WIS 14 · CHA 10",
    features: ["Sneak Attack 1d6"],
    skills: [
      "Stealth",
      "Sleight of Hand",
      "Perception",
      "Acrobatics",
    ],
    picks: [
      "Smooth path: do NOT respec — just accept defaults and level",
      "If you respec: set STR 8 · DEX 17 · CON 16 · INT 8 · WIS 14 · CHA 10",
      "Skills: Stealth, Sleight of Hand, Perception, Acrobatics",
      "Expertise: Stealth + Sleight of Hand (always)",
      "Equip dual hand crossbows when available",
    ],
    note: "Defaults are fine for Balanced. Respec only for clean numbers / skill cleanup.",
  },
  {
    id: "lv-ast-2",
    member: "astarion",
    level: 2,
    title: "Cunning Action",
    classLevel: "Rogue 2",
    features: ["Cunning Action: Dash / Disengage / Hide"],
    picks: [
      "Confirm Rogue 2 — no subclass yet",
      "Combat loop starts: Hide (bonus) → shoot",
    ],
  },
  {
    id: "lv-ast-3",
    member: "astarion",
    level: 3,
    title: "Thief subclass",
    classLevel: "Rogue 3 (Thief)",
    features: ["Fast Hands", "Second-Story Work"],
    picks: [
      "Subclass: Thief — not Assassin, not Arcane Trickster",
      "Fast Hands = second bonus action (hide + offhand shot + item)",
    ],
    note: "Only Astarion choice that really matters early.",
  },
  {
    id: "lv-ast-4",
    member: "astarion",
    level: 4,
    title: "Sharpshooter",
    classLevel: "Rogue 4",
    feat: "Sharpshooter — pick All In (not Low Ground)",
    picks: [
      "Feat: Sharpshooter",
      "If it asks All In vs Low Ground: take All In",
      "All In = the −5 hit / +10 damage toggle. That is the whole feat.",
      "Low Ground only removes the uphill penalty — skip it",
      "In combat: turn All In ON when you Hide / have advantage / easy AC",
      "Turn All In OFF if you keep missing (high AC, no Hide, bad dice)",
    ],
    note: "All In is a combat toggle after you pick it. Low Ground is not the damage feat.",
  },
  {
    id: "lv-ast-5",
    member: "astarion",
    level: 5,
    title: "Uncanny Dodge",
    classLevel: "Rogue 5",
    features: ["Uncanny Dodge", "Sneak Attack 3d6"],
    picks: [
      "Automatic features",
      "Buy Knife of the Undermountain King when you can (crit fishing)",
    ],
  },
  {
    id: "lv-ast-6",
    member: "astarion",
    level: 6,
    title: "More Expertise",
    classLevel: "Rogue 6",
    skills: ["Expertise: Perception", "Expertise: Acrobatics or Deception"],
    picks: [
      "Expertise screen: Perception + (Acrobatics or Deception)",
      "You are now the full skill monkey",
    ],
  },
  {
    id: "lv-ast-7",
    member: "astarion",
    level: 7,
    title: "Evasion",
    classLevel: "Rogue 7",
    features: ["Evasion"],
    picks: ["Automatic — fireball bait, he often takes 0"],
  },
  {
    id: "lv-ast-8",
    member: "astarion",
    level: 8,
    title: "DEX ASI or Alert",
    classLevel: "Rogue 8",
    feat: "ASI +2 DEX (or Alert)",
    picks: [
      "Prefer +2 DEX (17→19) for Sharpshooter accuracy",
      "Alert if you keep losing initiative",
    ],
  },
  {
    id: "lv-ast-9",
    member: "astarion",
    level: 9,
    title: "Supreme Sneak",
    classLevel: "Rogue 9 (Thief)",
    features: ["Supreme Sneak"],
    picks: ["Automatic Thief feature"],
  },
  {
    id: "lv-ast-10",
    member: "astarion",
    level: 10,
    title: "Third feat",
    classLevel: "Rogue 10",
    feat: "Alert or Crossbow Expert or ASI leftover",
    picks: [
      "Crossbow Expert if enemies stick in his face",
      "Alert if not taken at 8",
    ],
  },
  {
    id: "lv-ast-11",
    member: "astarion",
    level: 11,
    title: "Reliable Talent",
    classLevel: "Rogue 11",
    features: ["Reliable Talent"],
    picks: ["Proficient skills never roll below 10 — locks trivial"],
  },
  {
    id: "lv-ast-12",
    member: "astarion",
    level: 12,
    title: "Last feat",
    classLevel: "Rogue 12",
    feat: "ASI leftover / Alert / Sharpshooter already taken",
    picks: ["Push DEX 20 if not there; Ascension is the real spike"],
  },

  // ═══════════════════════════════════════
  // MINTHARA — Oathbreaker Paladin
  // ═══════════════════════════════════════
  {
    id: "lv-min-1",
    member: "minthara",
    level: 1,
    title: "Oathbreaker respec",
    classLevel: "Paladin 1 (Oathbreaker)",
    stats: "STR 17 · DEX 10 · CON 14 · INT 8 · WIS 10 · CHA 16",
    features: ["Divine Smite", "Lay on Hands", "Great Weapon Fighting"],
    skills: ["Athletics", "Intimidation", "Persuasion", "Religion"],
    picks: [
      "Day of recruit: Withers → Paladin → Oathbreaker",
      "If forced into another oath: pick any, break it, respec Oathbreaker",
      "Stats: STR 17 · CHA 16 · CON 14 · rest dump",
      "Skills: Athletics, Intimidation, Persuasion, Religion",
      "Fighting Style: Great Weapon Fighting",
      "Bench Lae’zel; move Everburn / Adamantine / big 2H to Minthara",
    ],
    note: "Required respec. She is permanent frontline for the dark four.",
  },
  {
    id: "lv-min-2",
    member: "minthara",
    level: 2,
    title: "Smite online",
    classLevel: "Paladin 2",
    features: ["Divine Smite (spell slot spend)", "Fighting Style locked in"],
    picks: [
      "Confirm level — start smiting big hits",
      "Save slots for bosses / Held targets",
    ],
  },
  {
    id: "lv-min-3",
    member: "minthara",
    level: 3,
    title: "Oathbreaker features",
    classLevel: "Paladin 3 (Oathbreaker)",
    features: ["Control Undead", "Dreadful Aspect soft", "Aura of Hate later path"],
    picks: ["Channel oath features — keep 2H equipped"],
  },
  {
    id: "lv-min-4",
    member: "minthara",
    level: 4,
    title: "Great Weapon Master",
    classLevel: "Paladin 4",
    feat: "Great Weapon Master",
    picks: [
      "Feat: Great Weapon Master",
      "Toggle GWM when hit chance is good / target Held",
    ],
  },
  {
    id: "lv-min-5",
    member: "minthara",
    level: 5,
    title: "Extra Attack",
    classLevel: "Paladin 5",
    features: ["Extra Attack"],
    picks: [
      "Two swings + smites = her power spike",
      "Combo with Shadowheart Hold Person",
    ],
  },
  {
    id: "lv-min-6",
    member: "minthara",
    level: 6,
    title: "Aura of Protection",
    classLevel: "Paladin 6",
    features: ["Aura of Protection (CHA to saves)"],
    picks: ["Stand near casters — huge party defensive buff"],
  },
  {
    id: "lv-min-7",
    member: "minthara",
    level: 7,
    title: "Aura of Hate",
    classLevel: "Paladin 7 (Oathbreaker)",
    features: ["Aura of Hate"],
    picks: ["Buffs her (and nearby undead/fiends) melee"],
  },
  {
    id: "lv-min-8",
    member: "minthara",
    level: 8,
    title: "STR ASI or Savage",
    classLevel: "Paladin 8",
    feat: "ASI +2 STR (or Savage Attacker)",
    picks: ["Push STR for GWM accuracy / damage"],
  },
  {
    id: "lv-min-9",
    member: "minthara",
    level: 9,
    title: "3rd-level slots",
    classLevel: "Paladin 9",
    picks: ["Bigger smites — still short-rest careful with slots"],
  },
  {
    id: "lv-min-10",
    member: "minthara",
    level: 10,
    title: "Aura of Courage",
    classLevel: "Paladin 10",
    features: ["Aura of Courage"],
    picks: ["Fear immunity aura for the pack"],
  },
  {
    id: "lv-min-11",
    member: "minthara",
    level: 11,
    title: "Improved Divine Smite",
    classLevel: "Paladin 11",
    features: ["Improved Divine Smite"],
    picks: ["Free radiant on every hit — huge"],
  },
  {
    id: "lv-min-12",
    member: "minthara",
    level: 12,
    title: "Last feat",
    classLevel: "Paladin 12",
    feat: "Alert / Savage Attacker / ASI leftover",
    picks: ["Bhaalist / endgame 2H weapons define her more than the feat"],
  },

  // ═══════════════════════════════════════
  // LAE’ZEL — temp Fighter Act 1
  // ═══════════════════════════════════════
  {
    id: "lv-lz-1",
    member: "laezel",
    level: 1,
    title: "Temp frontline",
    classLevel: "Fighter 1",
    stats: "Keep defaults — optional STR-first",
    features: ["Second Wind", "Fighting Style"],
    skills: ["Athletics", "Survival", "Acrobatics", "Intimidation"],
    picks: [
      "No full respec required",
      "Give her Everburn Blade from the Nautiloid",
      "She is temporary — don’t invest unique endgame gear",
    ],
  },
  {
    id: "lv-lz-2",
    member: "laezel",
    level: 2,
    title: "Action Surge",
    classLevel: "Fighter 2",
    features: ["Action Surge"],
    picks: ["Boss button — Action Surge every hard fight"],
  },
  {
    id: "lv-lz-3",
    member: "laezel",
    level: 3,
    title: "Battlemaster soft",
    classLevel: "Fighter 3 (Battle Master soft)",
    features: ["Battle Master maneuvers soft"],
    picks: [
      "Soft respec/subclass: Battle Master",
      "Maneuvers: Trip Attack, Menacing Attack, Riposte",
      "Skip if you never opened Withers for her",
    ],
  },
  {
    id: "lv-lz-4",
    member: "laezel",
    level: 4,
    title: "GWM or STR",
    classLevel: "Fighter 4",
    feat: "Great Weapon Master (or +2 STR)",
    picks: ["GWM if you respecced for 2H; else ASI STR"],
  },
  {
    id: "lv-lz-5",
    member: "laezel",
    level: 5,
    title: "Extra Attack",
    classLevel: "Fighter 5",
    features: ["Extra Attack"],
    picks: [
      "Peak temp power — use her hard through Creche",
      "When Minthara joins: camp Lae’zel and transfer gear",
    ],
    note: "Stop investing after Minthara is stable in the party.",
  },
];
