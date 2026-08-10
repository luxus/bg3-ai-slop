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
      job: "Ranged DPS + skills. Dual hand crossbows, Sharpshooter, Fast Hands hide/shoot. Locks, traps, pickpocket. Ascension later multiplies him.",
    },
    {
      who: "Minthara (Oathbreaker)",
      job: "Permanent frontline. Smites on Held targets, Aura/Control Undead tools, heavy hits. Replaces Lae’zel.",
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
    title: "Create / Warlock 1 — Hexblade",
    classLevel: "Warlock 1 (Hexblade)",
    stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17 (soft point-buy target)",
    cantrips: ["Eldritch Blast", "Booming Blade"],
    spells: ["Hex", "Shield"],
    features: [
      "Hex Warrior: medium armour, shields, martial weapons",
      "Bind Hexed Weapon → attack with CHA",
      "Hexblade’s Curse (short rest)",
    ],
    skills: ["Deception", "Arcana (class) + Medicine/Intimidation from Haunted One"],
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
    title: "Warlock 2 — spell + 2 Invocations",
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
    title: "Warlock 3 — Pact of the Blade",
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
    title: "Warlock 4 — ASI + 3rd cantrip",
    classLevel: "Warlock 4",
    cantrips: ["+ Mage Hand (or Minor Illusion)"],
    feat: "ASI +2 CHA (17→19) — or +1 CHA +1 DEX if odd",
    picks: ["Push CHA hard", "Keep Bind Hexed Weapon / Pact weapon up every fight"],
  },
  {
    id: "lv-tav-5",
    member: "tav",
    level: 5,
    title: "Warlock 5 — Extra Attack spike",
    classLevel: "Warlock 5",
    features: ["Deepened Pact → Extra Attack with pact/hexed weapon"],
    spells: ["Hunger of Hadar (soft AOE control) or Counterspell when available"],
    invocations: ["Optional later swap/add: Repelling Blast at next invocation slot"],
    picks: [
      "Double attack with Booming Blade + Extra Attack patterns",
      "3rd-level Pact slots",
    ],
    note: "Biggest early spike. Short rest after hard fights.",
  },
  {
    id: "lv-tav-6",
    member: "tav",
    level: 6,
    title: "Warlock 6 — Accursed Spectre",
    classLevel: "Warlock 6",
    features: ["Accursed Spectre on cursed kills"],
    picks: ["Curse elites → kill → free spectre body"],
  },
  {
    id: "lv-tav-7",
    member: "tav",
    level: 7,
    title: "Warlock 7",
    classLevel: "Warlock 7",
    invocations: ["+1 invocation — Repelling Blast if not taken"],
    spells: ["4th-level options: soft Banishment / Dimension Door utility"],
    picks: ["Keep CHA focus", "Darkness + Devil’s Sight still online"],
  },
  {
    id: "lv-tav-8",
    member: "tav",
    level: 8,
    title: "Warlock 8 — finish CHA",
    classLevel: "Warlock 8",
    feat: "ASI +1 or +2 CHA → 20 (or Alert if initiative feels bad)",
    picks: ["CHA 20 is the damage/DC cap goal"],
  },
  {
    id: "lv-tav-9",
    member: "tav",
    level: 9,
    title: "Warlock 9 — 5th-level slots",
    classLevel: "Warlock 9",
    spells: ["Hold Monster / soft high-end picks"],
    picks: ["2× 5th-level short-rest slots = huge nova"],
  },
  {
    id: "lv-tav-10",
    member: "tav",
    level: 10,
    title: "Warlock 10 — Armour of Hexes",
    classLevel: "Warlock 10",
    features: ["Armour of Hexes: 50% nullify attack from cursed target"],
    picks: ["Curse whoever is hitting you"],
  },
  {
    id: "lv-tav-11",
    member: "tav",
    level: 11,
    title: "Warlock 11 — Mystic Arcanum",
    classLevel: "Warlock 11",
    spells: ["Mystic Arcanum 6th (soft: Create Undead / Eyebite — pick fun)"],
    picks: ["3 Pact slots at max Warlock scaling"],
  },
  {
    id: "lv-tav-12",
    member: "tav",
    level: 12,
    title: "Warlock 12 — Lifedrinker / capstone",
    classLevel: "Warlock 12",
    feat: "Alert or Great Weapon Master if using heavy; else ASI leftover",
    invocations: ["Lifedrinker if available on list"],
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
    title: "FULL RESPEC at Withers → Death Cleric 1",
    classLevel: "Cleric 1 (Death Domain)",
    stats:
      "Soft target: STR 10 · DEX 14 · CON 16 · INT 8 · WIS 17 · CHA 8 (dump face stats — you’re the face)",
    cantrips: [
      "Toll the Dead (Reaper cantrip — primary damage)",
      "Guidance (out of combat forever)",
      "Sacred Flame (backup save damage)",
      "Produce Flame or Thaumaturgy (utility)",
    ],
    prepare: [
      "ALWAYS DOMAIN (auto): False Life, Ray of Sickness + Reaper cantrip choice",
      "Bless (party accuracy — huge early)",
      "Healing Word (bonus-action revive ally HP)",
      "Shield of Faith or Sanctuary situational",
      "Command (Drop / Halt — you already used this on Nautiloid)",
    ],
    features: [
      "Death Domain → martial weapons",
      "Reaper: necromancy cantrips that hit 1 target can hit a 2nd",
    ],
    skills: ["Keep Insight / Religion / Medicine as fits; WIS skills"],
    picks: [
      "Withers → Class: Cleric → Subclass: Death Domain",
      "Deity can stay Shar (story)",
      "Do NOT leave her Trickery with default bad stats",
    ],
    note: "This is the most important respec of the run. Take your time on the ability screen.",
  },
  {
    id: "lv-sh-2",
    member: "shadowheart",
    level: 2,
    title: "Cleric 2 — Channel Divinity",
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
    title: "Cleric 3 — 2nd-level spells",
    classLevel: "Cleric 3",
    prepare: [
      "Spiritual Weapon (bonus action DPS — soft staple)",
      "Hold Person (PARTY ENABLER — hold for Minthara/Tav crits)",
      "Aid or Prayer of Healing situational",
      "Domain: Blindness, Ray of Enfeeblement (auto)",
    ],
    picks: ["Hold Person is why she enables the whole party"],
  },
  {
    id: "lv-sh-4",
    member: "shadowheart",
    level: 4,
    title: "Cleric 4 — War Caster (must)",
    classLevel: "Cleric 4",
    feat: "War Caster — do NOT skip (Spirit Guardians concentration next level)",
    cantrips: ["Optional 5th cantrip if offered"],
    picks: [
      "War Caster > ASI at 4 for this party (you need SG stuck on)",
      "If already high WIS odd score, some take +1 WIS — War Caster still preferred",
    ],
    note: "Common mistake: ASI first. For SG walker, War Caster at 4.",
  },
  {
    id: "lv-sh-5",
    member: "shadowheart",
    level: 5,
    title: "Cleric 5 — Spirit Guardians (the build)",
    classLevel: "Cleric 5",
    prepare: [
      "Spirit Guardians — pick NECROTIC damage type for Death synergy",
      "Revivify (someone will die)",
      "Glyph of Warding situational",
      "Keep Hold Person + Healing Word prepared",
    ],
    features: ["Destroy Undead upgrades Turn"],
    picks: [
      "Combat loop: cast SG → walk through packs → bonus Healing Word / Spiritual Weapon",
      "Do not stand still — movement triggers SG ticks",
    ],
    note: "This is her power spike. Everything before was setup.",
  },
  {
    id: "lv-sh-6",
    member: "shadowheart",
    level: 6,
    title: "Cleric 6 — Inescapable Destruction",
    classLevel: "Cleric 6",
    features: [
      "Inescapable Destruction: your necrotic damage ignores Necrotic Resistance",
    ],
    picks: [
      "SG necrotic + cantrips punch through resist undead/fiends better",
    ],
  },
  {
    id: "lv-sh-7",
    member: "shadowheart",
    level: 7,
    title: "Cleric 7 — 4th-level spells",
    classLevel: "Cleric 7",
    prepare: [
      "Banishment / Freedom of Movement / Death Ward soft",
      "Domain: Blight, Death Ward (auto list)",
    ],
    picks: ["Still cast SG every hard fight — upcast when free"],
  },
  {
    id: "lv-sh-8",
    member: "shadowheart",
    level: 8,
    title: "Cleric 8 — ASI WIS + Divine Strike",
    classLevel: "Cleric 8",
    feat: "ASI +2 WIS (toward 20)",
    features: ["Divine Strike: Necrotic (+1d8 once/turn on weapon hit)"],
    picks: ["WIS raises SG DC + cantrip DC"],
  },
  {
    id: "lv-sh-9",
    member: "shadowheart",
    level: 9,
    title: "Cleric 9 — 5th-level spells",
    classLevel: "Cleric 9",
    prepare: [
      "Mass Cure Wounds / Insect Plague / Flame Strike soft",
      "Keep SG + Hold Person always",
    ],
    picks: ["Domain high options (Cloudkill etc.) auto"],
  },
  {
    id: "lv-sh-10",
    member: "shadowheart",
    level: 10,
    title: "Cleric 10 — Divine Intervention",
    classLevel: "Cleric 10",
    features: ["Divine Intervention (once per character — big panic button)"],
    picks: ["Save for true emergency bosses"],
  },
  {
    id: "lv-sh-11",
    member: "shadowheart",
    level: 11,
    title: "Cleric 11 — 6th-level spells",
    classLevel: "Cleric 11",
    prepare: ["Heroes’ Feast / Planar Ally / Heal soft big spells"],
    picks: ["Upcast SG still core trash clear"],
  },
  {
    id: "lv-sh-12",
    member: "shadowheart",
    level: 12,
    title: "Cleric 12 — cap WIS / Alert",
    classLevel: "Cleric 12",
    feat: "ASI finish WIS 20, or Alert (go first → SG before enemies move)",
    picks: ["Alert is excellent if initiative feels bad"],
  },

  // ═══════════════════════════════════════
  // ASTARION — Thief dual hand crossbow
  // ═══════════════════════════════════════
  {
    id: "lv-ast-1",
    member: "astarion",
    level: 1,
    title: "Rogue 1 — skills baseline",
    classLevel: "Rogue 1",
    stats: "DEX primary (soft 17) · CON secondary · dump STR if not dual-wield melee",
    skills: [
      "Expertise: Sleight of Hand + Stealth (or Perception)",
      "Skills: Acrobatics, Deception, etc.",
    ],
    features: ["Sneak Attack 1d6", "Sneak proficiency kit"],
    picks: ["Hand crossbows when you find them — dual wield ranged"],
  },
  {
    id: "lv-ast-2",
    member: "astarion",
    level: 2,
    title: "Rogue 2 — Cunning Action",
    classLevel: "Rogue 2",
    features: ["Cunning Action: Dash / Disengage / Hide (bonus)"],
    picks: ["Hide → shoot → Hide pattern starts"],
  },
  {
    id: "lv-ast-3",
    member: "astarion",
    level: 3,
    title: "Rogue 3 — Thief (recommended)",
    classLevel: "Rogue 3 (Thief)",
    features: [
      "Fast Hands: EXTRA bonus action (hide + shoot + item)",
      "Second-Story Work",
    ],
    picks: [
      "Subclass: Thief (not Assassin for this party — Fast Hands is better every fight)",
      "Soft alt: Swashbuckler if you want melee Rakish Sneak — ranged Thief preferred here",
    ],
    note: "Thief covers party ranged DPS while everyone else is mid/melee.",
  },
  {
    id: "lv-ast-4",
    member: "astarion",
    level: 4,
    title: "Rogue 4 — Sharpshooter",
    classLevel: "Rogue 4",
    feat: "Sharpshooter (hand crossbows / bows)",
    picks: [
      "Toggle Sharpshooter on when advantage / high hit chance",
      "Alt: ASI +2 DEX if you miss constantly",
    ],
  },
  {
    id: "lv-ast-5",
    member: "astarion",
    level: 5,
    title: "Rogue 5 — Uncanny Dodge",
    classLevel: "Rogue 5",
    features: ["Uncanny Dodge", "Sneak Attack 3d6"],
    picks: ["Keep dual hand crossbows + Knife of Undermountain crit floor"],
  },
  {
    id: "lv-ast-6",
    member: "astarion",
    level: 6,
    title: "Rogue 6 — more Expertise",
    classLevel: "Rogue 6",
    skills: ["Expertise on two more skills (Perception / Deception soft)"],
    picks: ["Skill monkey complete"],
  },
  {
    id: "lv-ast-7",
    member: "astarion",
    level: 7,
    title: "Rogue 7 — Evasion",
    classLevel: "Rogue 7",
    features: ["Evasion"],
    picks: ["Fireball bait — he often takes 0"],
  },
  {
    id: "lv-ast-8",
    member: "astarion",
    level: 8,
    title: "Rogue 8 — DEX 20 or Alert",
    classLevel: "Rogue 8",
    feat: "ASI +2 DEX → 20 (or Alert)",
    picks: ["DEX 20 + Sharpshooter = consistent"],
  },
  {
    id: "lv-ast-9",
    member: "astarion",
    level: 9,
    title: "Rogue 9 — Supreme Sneak",
    classLevel: "Rogue 9 (Thief)",
    features: ["Supreme Sneak"],
    picks: ["Invisibility-adjacent utility"],
  },
  {
    id: "lv-ast-10",
    member: "astarion",
    level: 10,
    title: "Rogue 10 — feat",
    classLevel: "Rogue 10",
    feat: "Alert or Crossbow Expert (ignore close range) or ASI leftover",
    picks: ["Crossbow Expert soft if enemies stick to him"],
  },
  {
    id: "lv-ast-11",
    member: "astarion",
    level: 11,
    title: "Rogue 11 — Reliable Talent",
    classLevel: "Rogue 11",
    features: ["Reliable Talent — never roll <10 on proficient skills"],
    picks: ["Locks become trivial"],
  },
  {
    id: "lv-ast-12",
    member: "astarion",
    level: 12,
    title: "Rogue 12 — last feat",
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
    title: "Respec after recruit → Oathbreaker path",
    classLevel: "Paladin 1 → break oath → Oathbreaker",
    stats: "STR 17 · DEX 10 · CON 14 · INT 8 · WIS 8 · CHA 16 (soft — smites use CHA)",
    features: ["Divine Sense", "Lay on Hands", "then become Oathbreaker for dark kit"],
    picks: [
      "Withers: Paladin. If not already Oathbreaker, break oath via cruel choices or respec into Oathbreaker if UI allows",
      "Soft alt whole build: Giant Barbarian + Tavern Brawler throws (easier cheese, less smite)",
    ],
    note: "Oathbreaker fits Absolute/dark RP and smites Held targets from Shadowheart.",
  },
  {
    id: "lv-min-2",
    member: "minthara",
    level: 2,
    title: "Paladin 2 — Fighting Style + Smites",
    classLevel: "Paladin 2",
    features: ["Fighting Style: Great Weapon Fighting (2H) or Defence", "Divine Smite"],
    spells: ["Prepare: Compelled Duel / Thunderous Smite soft / Shield of Faith"],
    picks: ["Save smite slots for Held / crit / bosses"],
  },
  {
    id: "lv-min-3",
    member: "minthara",
    level: 3,
    title: "Paladin 3 — Oathbreaker features",
    classLevel: "Paladin 3 (Oathbreaker)",
    features: ["Control Undead", "Dreadful Aspect", "Oath spells"],
    picks: ["Channel for fear / undead control on dark maps"],
  },
  {
    id: "lv-min-4",
    member: "minthara",
    level: 4,
    title: "Paladin 4 — GWM or ASI",
    classLevel: "Paladin 4",
    feat: "Great Weapon Master (2H) OR ASI +2 STR",
    picks: ["GWM on when advantage / high hit (SH Hold Person = free crit window)"],
  },
  {
    id: "lv-min-5",
    member: "minthara",
    level: 5,
    title: "Paladin 5 — Extra Attack",
    classLevel: "Paladin 5",
    features: ["Extra Attack"],
    spells: ["2nd-level: Magic Weapon soft"],
    picks: ["Extra Attack + smite = frontline job complete"],
  },
  {
    id: "lv-min-6",
    member: "minthara",
    level: 6,
    title: "Paladin 6 — Aura of Protection",
    classLevel: "Paladin 6",
    features: ["Aura of Protection: +CHA mod to nearby saves — HUGE for party"],
    picks: ["Stand near SH so her concentration saves get the aura"],
  },
  {
    id: "lv-min-8",
    member: "minthara",
    level: 8,
    title: "Paladin 8 — STR / GWM finish",
    classLevel: "Paladin 8",
    feat: "If GWM taken: ASI STR. If not: GWM now",
    picks: ["STR 20 goal"],
  },
  {
    id: "lv-min-9",
    member: "minthara",
    level: 9,
    title: "Paladin 9 — 3rd-level spells",
    classLevel: "Paladin 9",
    picks: ["Bigger smite dice from higher slots"],
  },
  {
    id: "lv-min-11",
    member: "minthara",
    level: 11,
    title: "Paladin 11 — Improved Divine Smite",
    classLevel: "Paladin 11",
    features: ["Improved Divine Smite: free +1d8 radiant on hits"],
    picks: ["Passive damage forever"],
  },
  {
    id: "lv-min-12",
    member: "minthara",
    level: 12,
    title: "Paladin 12 — last feat",
    classLevel: "Paladin 12",
    feat: "Alert or Savage Attacker or ASI CHA for aura/saves",
    picks: ["Bhaalist Armour in Act 3 if piercing party — soft endgame gear"],
  },

  // ═══════════════════════════════════════
  // LAE’ZEL TEMP — Battlemaster while active
  // ═══════════════════════════════════════
  {
    id: "lv-lz-1",
    member: "laezel",
    level: 1,
    title: "Fighter 1 (keep or light respec)",
    classLevel: "Fighter 1",
    stats: "STR max · CON second · DEX for initiative",
    features: ["Second Wind", "Fighting Style: Great Weapon Fighting"],
    picks: ["Everburn Blade early", "Don’t over-invest gear you’ll move to Minthara"],
  },
  {
    id: "lv-lz-2",
    member: "laezel",
    level: 2,
    title: "Fighter 2 — Action Surge",
    classLevel: "Fighter 2",
    features: ["Action Surge"],
    picks: ["Boss button"],
  },
  {
    id: "lv-lz-3",
    member: "laezel",
    level: 3,
    title: "Fighter 3 — Battlemaster",
    classLevel: "Fighter 3 (Battlemaster)",
    features: [
      "Maneuvers soft: Trip Attack, Menacing Attack, Precision Attack, Riposte",
    ],
    picks: ["Trip → party advantage / prone"],
  },
  {
    id: "lv-lz-4",
    member: "laezel",
    level: 4,
    title: "Fighter 4 — GWM",
    classLevel: "Fighter 4",
    feat: "Great Weapon Master",
    picks: ["Use while you have her — gear transfers to Minthara later"],
  },
  {
    id: "lv-lz-5",
    member: "laezel",
    level: 5,
    title: "Fighter 5 — Extra Attack",
    classLevel: "Fighter 5",
    features: ["Extra Attack"],
    picks: ["Bench when Minthara joins — she’s done her job"],
    note: "Stop optimizing her after Minthara is permanent.",
  },
];
