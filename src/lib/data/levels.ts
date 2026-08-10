/**
 * Full level / respec guides for the dark Absolute party.
 * Soft optimized for Balanced — sources: bg3.wiki class tables + common
 * Death Cleric / Hexblade / Thief / Oathbreaker patterns (Patch 8 era).
 */

export type LevelPick = {
  id: string;
  member: "tav" | "shadowheart" | "astarion" | "minthara" | "laezel";
  level: number;
  title: string;
  /** Class level taken this step */
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
      job: "Ranged DPS + skills. Dual hand crossbows, Sharpshooter, Fast Hands hide/shoot. Locks, traps, pickpocket. Ascension later multiplies him. Default stats are fine — no respec required.",
    },
    {
      who: "Minthara (Oathbreaker)",
      job: "Permanent frontline. Smites on Held targets. Replaces Lae’zel. Respec after recruit.",
    },
    {
      who: "Lae’zel (temp Fighter)",
      job: "Act 1 only. Everburn + Action Surge until Minthara. Bench after.",
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

export const LEVEL_PICKS: LevelPick[] = [
  // ═══════════════════════════════════════
  // DARK URGE — Hexblade Warlock 1–12 (pure)
  // ═══════════════════════════════════════
  {
    id: "lv-tav-1",
    member: "tav",
    level: 1,
    title: "Hexblade (create)",
    classLevel: "Warlock 1 (Hexblade)",
    stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17 (soft point-buy target)",
    cantrips: ["Eldritch Blast", "Booming Blade"],
    spells: ["Hex", "Shield"],
    features: [
      "Hex Warrior: medium armour, shields, martial weapons",
      "Bind Hexed Weapon → attack with CHA",
      "Hexblade’s Curse (short rest)",
    ],
    skills: [
      "Deception",
      "Arcana",
      "Medicine (Haunted One)",
      "Intimidation (Haunted One)",
    ],
    picks: [
      "Origin: Dark Urge · Race: Lolth-Sworn Drow · Background: Haunted One (locked)",
      "Bind a one-handed weapon you like; dump STR",
    ],
    note: "Exactly 2 cantrips + 2 spells at L1 (wiki). Shield is Hexblade expanded list.",
  },
  {
    id: "lv-tav-2",
    member: "tav",
    level: 2,
    title: "Spell + 2 Invocations",
    classLevel: "Warlock 2",
    spells: ["+1 spell: Armour of Agathys (soft) or Hellish Rebuke"],
    invocations: [
      "Agonising Blast (spelling with S — on INVOCATIONS screen, not spells)",
      "Devil’s Sight",
    ],
    picks: [
      "STEP A: pick +1 spell from the spell list",
      "STEP B: Eldritch Invocations — Agonising Blast + Devil’s Sight",
      "Alt face: Beguiling Influence instead of Devil’s Sight",
    ],
    note: "2 Pact slots. Short-rest economy starts here.",
  },
  {
    id: "lv-tav-3",
    member: "tav",
    level: 3,
    title: "Pact of the Blade",
    classLevel: "Warlock 3",
    features: ["Pact of the Blade (needed for Extra Attack at 5)"],
    spells: ["Optional: hold Hold Person for later swap; Shadow Blade when available"],
    picks: [
      "Pact Boon: Pact of the Blade",
      "2nd-level slots (still short rest)",
    ],
  },
  {
    id: "lv-tav-4",
    member: "tav",
    level: 4,
    title: "ASI + 3rd cantrip",
    classLevel: "Warlock 4",
    cantrips: ["+ Mage Hand (or Minor Illusion)"],
    feat: "ASI +2 CHA (17→19) — or +1 CHA +1 DEX if odd",
    picks: ["Push CHA hard", "Keep Bind Hexed Weapon / Pact weapon up every fight"],
  },
  {
    id: "lv-tav-5",
    member: "tav",
    level: 5,
    title: "Extra Attack spike",
    classLevel: "Warlock 5",
    features: ["Deepened Pact → Extra Attack with pact/hexed weapon"],
    spells: ["Hunger of Hadar (soft AOE control) or Counterspell when available"],
    invocations: ["Optional later swap/add: Repelling Blast at next invocation slot"],
    picks: ["This is your big power spike — Extra Attack + Agonising EB"],
  },
  {
    id: "lv-tav-6",
    member: "tav",
    level: 6,
    title: "Accursed Spectre",
    classLevel: "Warlock 6 (Hexblade)",
    features: ["Accursed Spectre (soft utility on kills with curse)"],
    picks: ["Keep short-resting after hard fights"],
  },
  {
    id: "lv-tav-7",
    member: "tav",
    level: 7,
    title: "4th-level slots",
    classLevel: "Warlock 7",
    spells: ["4th-level options when offered (soft: Dimension Door utility)"],
    picks: ["Bigger Hunger / control"],
  },
  {
    id: "lv-tav-8",
    member: "tav",
    level: 8,
    title: "CHA 20",
    classLevel: "Warlock 8",
    feat: "ASI +1 CHA (19→20) or +2 if still 18",
    picks: ["Cap CHA", "Alert soft if you lose initiative a lot"],
  },
  {
    id: "lv-tav-9",
    member: "tav",
    level: 9,
    title: "5th-level slots",
    classLevel: "Warlock 9",
    spells: ["5th-level soft: Hold Monster / Banishing / party favourites"],
    picks: ["Nova is huge on short rest"],
  },
  {
    id: "lv-tav-10",
    member: "tav",
    level: 10,
    title: "Armour of Hexes",
    classLevel: "Warlock 10 (Hexblade)",
    features: ["Armour of Hexes"],
    picks: ["Defensive spike vs cursed target"],
  },
  {
    id: "lv-tav-11",
    member: "tav",
    level: 11,
    title: "Mystic Arcanum",
    classLevel: "Warlock 11",
    features: ["Mystic Arcanum (6th) soft pick"],
    picks: ["Big once-per-day spell"],
  },
  {
    id: "lv-tav-12",
    member: "tav",
    level: 12,
    title: "Last feat",
    classLevel: "Warlock 12",
    feat: "Alert / War Caster soft / ASI leftover",
    picks: [
      "Soft endgame alt respec: 10 Hexblade / 2 Paladin for smites — only if you want",
    ],
    note: "Pure Hexblade 12 is fine and simple for first dark run.",
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
    stats:
      "Soft target: STR 10 · DEX 14 · CON 16 · INT 8 · WIS 17 · CHA 8 (dump face stats — you’re the face)",
    cantrips: [
      "Toll the Dead (Reaper cantrip — primary damage)",
      "Guidance (out of combat forever)",
      "Sacred Flame (backup save damage)",
      "Produce Flame or Thaumaturgy (utility)",
    ],
    prepare: ["Bless", "Healing Word", "Command", "optional: Shield of Faith"],
    features: ["Reaper", "Death Domain spells"],
    picks: [
      "MUST respec: Class Cleric → Subclass Death Domain",
      "Rewrite ability scores (WIS + CON first)",
    ],
    note: "Most important respec of the run. Astarion does NOT need this treatment.",
  },
  {
    id: "lv-sh-2",
    member: "shadowheart",
    level: 2,
    title: "Channel Divinity",
    classLevel: "Cleric 2",
    features: [
      "Channel Divinity: Turn Undead",
      "Touch of Death (extra necrotic on melee hit — Channel)",
    ],
    prepare: ["Hold Person not yet — keep Bless + Healing Word + Command"],
    picks: ["Channel uses short rest — spend them"],
  },
  {
    id: "lv-sh-3",
    member: "shadowheart",
    level: 3,
    title: "2nd-level prepares",
    classLevel: "Cleric 3",
    prepare: ["Hold Person", "Spiritual Weapon soft", "Aid soft"],
    picks: ["Hold Person is party synergy core"],
  },
  {
    id: "lv-sh-4",
    member: "shadowheart",
    level: 4,
    title: "War Caster",
    classLevel: "Cleric 4",
    feat: "War Caster (keep Spirit Guardians later)",
    cantrips: ["+1 utility if offered"],
    picks: ["War Caster before ASI — concentration is everything"],
  },
  {
    id: "lv-sh-5",
    member: "shadowheart",
    level: 5,
    title: "Spirit Guardians",
    classLevel: "Cleric 5",
    prepare: ["Spirit Guardians (necrotic)", "Mass Healing Word soft", "Revivify"],
    features: ["Destroy Undead soft"],
    picks: ["Walk SG through packs — this is her job forever"],
  },
  {
    id: "lv-sh-6",
    member: "shadowheart",
    level: 6,
    title: "Inescapable Destruction",
    classLevel: "Cleric 6 (Death)",
    features: ["Inescapable Destruction — ignore necrotic resistance"],
    picks: ["SG necrotic stays good vs resists"],
  },
  {
    id: "lv-sh-7",
    member: "shadowheart",
    level: 7,
    title: "4th-level",
    classLevel: "Cleric 7",
    prepare: ["Guardian of Faith soft", "Freedom of Movement soft", "Banishment soft"],
    picks: ["Keep SG + Hold as anchors"],
  },
  {
    id: "lv-sh-8",
    member: "shadowheart",
    level: 8,
    title: "WIS ASI or Alert",
    classLevel: "Cleric 8",
    feat: "ASI +2 WIS (or Alert)",
    features: ["Divine Strike (Death)"],
    picks: ["Push WIS for save DCs"],
  },
  {
    id: "lv-sh-9",
    member: "shadowheart",
    level: 9,
    title: "5th-level",
    classLevel: "Cleric 9",
    prepare: ["Insect Plague soft", "Greater Restoration", "Mass Cure Wounds soft"],
    picks: ["Control stays priority over raw heal"],
  },
  {
    id: "lv-sh-10",
    member: "shadowheart",
    level: 10,
    title: "Divine Intervention",
    classLevel: "Cleric 10",
    features: ["Divine Intervention"],
    cantrips: ["+1 if offered"],
    picks: ["Emergency button"],
  },
  {
    id: "lv-sh-11",
    member: "shadowheart",
    level: 11,
    title: "6th-level",
    classLevel: "Cleric 11",
    prepare: ["Heroes’ Feast soft", "Planar Ally soft", "Blade Barrier soft"],
    picks: ["Big day spells"],
  },
  {
    id: "lv-sh-12",
    member: "shadowheart",
    level: 12,
    title: "Last feat",
    classLevel: "Cleric 12",
    feat: "Alert / ASI leftover / Resilient CON soft",
    picks: ["Shar gear from Act 2 carries her"],
  },

  // ═══════════════════════════════════════
  // ASTARION — Thief dual hand crossbow
  // NO respec required — just level him
  // ═══════════════════════════════════════
  {
    id: "lv-ast-1",
    member: "astarion",
    level: 1,
    title: "Keep defaults — no respec",
    classLevel: "Rogue 1 (keep defaults)",
    features: ["Sneak Attack 1d6", "Default skills/expertise are fine"],
    picks: [
      "Do NOT pay Withers for Astarion at level 1",
      "Just accept him and level up when prompted",
      "Equip hand crossbows when you find them (dual wield ranged)",
    ],
    note: "Stats line below is ONLY if you later want a perfect min-max respec. Default Astarion DEX is already good enough for Balanced.",
    stats:
      "OPTIONAL respec only: DEX primary · CON secondary · dump STR — skip this for a smooth run",
  },
  {
    id: "lv-ast-2",
    member: "astarion",
    level: 2,
    title: "Cunning Action",
    classLevel: "Rogue 2",
    features: ["Cunning Action: Dash / Disengage / Hide (bonus)"],
    picks: [
      "On level-up: just confirm Rogue 2 — no subclass yet",
      "In combat: Hide → shoot pattern starts",
    ],
  },
  {
    id: "lv-ast-3",
    member: "astarion",
    level: 3,
    title: "Pick Thief (only important choice)",
    classLevel: "Rogue 3 (Thief)",
    features: [
      "Fast Hands: EXTRA bonus action (hide + shoot + item)",
      "Second-Story Work",
    ],
    picks: [
      "Subclass screen: Thief (not Assassin, not Arcane Trickster)",
      "Soft alt only: Swashbuckler if you insist on melee — not this route",
    ],
    note: "This is the one Astarion choice that matters early. Still no full respec required.",
  },
  {
    id: "lv-ast-4",
    member: "astarion",
    level: 4,
    title: "Sharpshooter feat",
    classLevel: "Rogue 4",
    feat: "Sharpshooter (hand crossbows / bows)",
    picks: [
      "Feat screen: Sharpshooter",
      "Toggle Sharpshooter on when advantage / high hit chance",
      "Alt: ASI +2 DEX only if you miss constantly",
    ],
  },
  {
    id: "lv-ast-5",
    member: "astarion",
    level: 5,
    title: "Uncanny Dodge",
    classLevel: "Rogue 5",
    features: ["Uncanny Dodge", "Sneak Attack 3d6"],
    picks: ["Keep dual hand crossbows + Knife of Undermountain when bought"],
  },
  {
    id: "lv-ast-6",
    member: "astarion",
    level: 6,
    title: "More Expertise",
    classLevel: "Rogue 6",
    skills: ["Pick two more Expertise if the UI offers (Perception / Deception soft)"],
    picks: ["Skill monkey complete"],
  },
  {
    id: "lv-ast-7",
    member: "astarion",
    level: 7,
    title: "Evasion",
    classLevel: "Rogue 7",
    features: ["Evasion"],
    picks: ["Fireball bait — he often takes 0"],
  },
  {
    id: "lv-ast-8",
    member: "astarion",
    level: 8,
    title: "DEX ASI or Alert",
    classLevel: "Rogue 8",
    feat: "ASI +2 DEX (or Alert)",
    picks: ["Push DEX; Sharpshooter loves it"],
  },
  {
    id: "lv-ast-9",
    member: "astarion",
    level: 9,
    title: "Supreme Sneak",
    classLevel: "Rogue 9 (Thief)",
    features: ["Supreme Sneak"],
    picks: ["Invisibility-adjacent utility"],
  },
  {
    id: "lv-ast-10",
    member: "astarion",
    level: 10,
    title: "Feat",
    classLevel: "Rogue 10",
    feat: "Alert or Crossbow Expert (ignore close range) or ASI leftover",
    picks: ["Crossbow Expert soft if enemies stick to him"],
  },
  {
    id: "lv-ast-11",
    member: "astarion",
    level: 11,
    title: "Reliable Talent",
    classLevel: "Rogue 11",
    features: ["Reliable Talent — never roll <10 on proficient skills"],
    picks: ["Locks become trivial"],
  },
  {
    id: "lv-ast-12",
    member: "astarion",
    level: 12,
    title: "Last feat",
    classLevel: "Rogue 12",
    feat: "Alert / ASI / Savage Attacker soft",
    picks: ["Ascension (Act 3) multiplies everything — do the ritual for dark run"],
  },

  // ═══════════════════════════════════════
  // MINTHARA — Oathbreaker Paladin (dark frontline)
  // ═══════════════════════════════════════
  {
    id: "lv-min-1",
    member: "minthara",
    level: 1,
    title: "Oathbreaker respec",
    classLevel: "Paladin 1 (Oathbreaker)",
    stats: "STR primary · CHA secondary · CON next",
    picks: [
      "Withers after she joins camp: Paladin → Oathbreaker",
      "If not already Oathbreaker, break oath via cruel choices or respec into Oathbreaker if UI allows",
      "Soft alt whole build: Giant Barbarian + Tavern Brawler throws",
    ],
    note: "Unlike Astarion — Minthara IS worth a Withers respec when she joins.",
  },
  {
    id: "lv-min-2",
    member: "minthara",
    level: 2,
    title: "Fighting Style + Smites",
    classLevel: "Paladin 2",
    features: ["Divine Smite", "Fighting Style: Great Weapon Fighting or Defence"],
    picks: ["Smite on Held targets from Shadowheart"],
  },
  {
    id: "lv-min-3",
    member: "minthara",
    level: 3,
    title: "Oathbreaker features",
    classLevel: "Paladin 3 (Oathbreaker)",
    features: ["Control Undead soft", "Spiteful Suffering soft"],
    picks: ["Keep smiting"],
  },
  {
    id: "lv-min-4",
    member: "minthara",
    level: 4,
    title: "GWM or STR ASI",
    classLevel: "Paladin 4",
    feat: "Great Weapon Master or ASI +2 STR",
    picks: ["GWM if you have advantage often / high STR"],
  },
  {
    id: "lv-min-5",
    member: "minthara",
    level: 5,
    title: "Extra Attack",
    classLevel: "Paladin 5",
    features: ["Extra Attack"],
    picks: ["Big spike — same timing as everyone else"],
  },
  {
    id: "lv-min-6",
    member: "minthara",
    level: 6,
    title: "Aura of Protection",
    classLevel: "Paladin 6",
    features: ["Aura of Protection (CHA to saves)"],
    picks: ["Stand near casters"],
  },
  {
    id: "lv-min-7",
    member: "minthara",
    level: 7,
    title: "Aura of Hate",
    classLevel: "Paladin 7 (Oathbreaker)",
    features: ["Aura of Hate — party melee damage"],
    picks: ["Melee friends love this"],
  },
  {
    id: "lv-min-8",
    member: "minthara",
    level: 8,
    title: "Feat",
    classLevel: "Paladin 8",
    feat: "ASI STR/CHA or Alert / Savage Attacker soft",
    picks: ["Cap STR if not 20"],
  },
  {
    id: "lv-min-9",
    member: "minthara",
    level: 9,
    title: "3rd-level smites",
    classLevel: "Paladin 9",
    picks: ["Bigger smite slots"],
  },
  {
    id: "lv-min-10",
    member: "minthara",
    level: 10,
    title: "Aura of Courage",
    classLevel: "Paladin 10",
    features: ["Aura of Courage"],
    picks: ["Fear immunity aura"],
  },
  {
    id: "lv-min-11",
    member: "minthara",
    level: 11,
    title: "Improved Divine Smite",
    classLevel: "Paladin 11",
    features: ["Improved Divine Smite"],
    picks: ["Free extra smite dice"],
  },
  {
    id: "lv-min-12",
    member: "minthara",
    level: 12,
    title: "Last feat",
    classLevel: "Paladin 12",
    feat: "Alert / ASI leftover",
    picks: ["Bhaalist Armour Act 3 is her BiS shell"],
  },

  // ═══════════════════════════════════════
  // LAE’ZEL — temp Fighter Act 1
  // ═══════════════════════════════════════
  {
    id: "lv-lae-1",
    member: "laezel",
    level: 1,
    title: "Keep defaults — no respec",
    classLevel: "Fighter 1",
    picks: [
      "Give her Everburn Blade",
      "Optional later: Battlemaster respec if you want maneuvers",
    ],
    note: "Temp only until Minthara. Don’t over-invest gold in her respec.",
  },
  {
    id: "lv-lae-2",
    member: "laezel",
    level: 2,
    title: "Action Surge",
    classLevel: "Fighter 2",
    features: ["Action Surge"],
    picks: ["Boss button"],
  },
  {
    id: "lv-lae-3",
    member: "laezel",
    level: 3,
    title: "Battlemaster soft",
    classLevel: "Fighter 3",
    picks: ["Battlemaster: Trip / Menacing / Pushing soft", "Or leave default subclass if already set"],
  },
  {
    id: "lv-lae-4",
    member: "laezel",
    level: 4,
    title: "GWM or STR",
    classLevel: "Fighter 4",
    feat: "Great Weapon Master or ASI STR",
    picks: ["Still worth taking while she’s active"],
  },
  {
    id: "lv-lae-5",
    member: "laezel",
    level: 5,
    title: "Extra Attack",
    classLevel: "Fighter 5",
    features: ["Extra Attack"],
    picks: ["Peak temp value — then bench when Minthara joins"],
    note: "Move Adamantine / big weapons to Minthara when you swap.",
  },
];
