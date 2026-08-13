/**
 * Fight scripts for the dark Absolute party.
 * Icons are lucide names used by the UI chip mapper.
 */

export type ActionChip = {
  /** Display label */
  label: string;
  /** Who does it */
  who: "tav" | "shadowheart" | "astarion" | "minthara" | "laezel" | "any";
  /** Icon key for UI */
  icon:
    | "curse"
    | "hex"
    | "blast"
    | "blade"
    | "shield"
    | "hold"
    | "spirit"
    | "bless"
    | "heal"
    | "sneak"
    | "shot"
    | "smite"
    | "rage"
    | "shove"
    | "darkness"
    | "surge"
    | "buff"
    | "rest"
    | "item";
  note?: string;
};

export type FightScript = {
  id: string;
  act: 1 | 2 | 3;
  title: string;
  kind: "boss" | "hard" | "level-band";
  /** When this matters */
  when: string;
  /** Soft recommended party level (Balanced) */
  recommendedLevel: string;
  /** One-line goal */
  goal: string;
  /** Ordered opener chips */
  opener: ActionChip[];
  /** Mid-fight reminders */
  mid: ActionChip[];
  /** Kill / finish notes */
  finish?: string;
  /** Gear that spikes this fight */
  gear?: string[];
  optional?: boolean;
};

export const WHO_SHORT: Record<ActionChip["who"], string> = {
  tav: "You",
  shadowheart: "SH",
  astarion: "Ast",
  minthara: "Min",
  laezel: "Lae",
  any: "Any",
};

export const FIGHTS: FightScript[] = [
  // ── Level bands ──
  {
    id: "f-lv1-3",
    act: 1,
    title: "Levels 1–3 — learning curve",
    kind: "level-band",
    when: "Nautiloid → Grove / early wilderness",
    recommendedLevel: "1–3",
    goal: "Survive with short rests. No Spirit Guardians yet.",
    opener: [
      { who: "shadowheart", label: "Bless", icon: "bless" },
      { who: "shadowheart", label: "Command / Hold", icon: "hold", note: "If prepared" },
      { who: "tav", label: "Hexblade’s Curse", icon: "curse" },
      { who: "tav", label: "Hex", icon: "hex" },
      { who: "laezel", label: "Everburn swing", icon: "blade" },
      { who: "astarion", label: "Sneak attack", icon: "sneak" },
    ],
    mid: [
      { who: "tav", label: "Eldritch Blast", icon: "blast" },
      { who: "shadowheart", label: "Healing Word", icon: "heal" },
      { who: "any", label: "Short rest after hard fight", icon: "rest" },
    ],
    finish: "Don’t long-rest spam — short rest for Warlock slots.",
  },
  {
    id: "f-lv5-spike",
    act: 1,
    title: "Level 5 spike — party comes online",
    kind: "level-band",
    when: "After Extra Attack / Spirit Guardians",
    recommendedLevel: "5+",
    goal: "Default script for the rest of the run.",
    opener: [
      { who: "shadowheart", label: "Spirit Guardians", icon: "spirit", note: "Necrotic" },
      { who: "shadowheart", label: "Hold Person", icon: "hold", note: "Boss / caster" },
      { who: "tav", label: "Hexblade’s Curse", icon: "curse" },
      { who: "tav", label: "Booming Blade", icon: "blade" },
      { who: "astarion", label: "Sharpshooter shot", icon: "shot" },
      { who: "minthara", label: "Smite / smash", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Phalar Shriek", icon: "buff", note: "If equipped" },
      { who: "tav", label: "Darkness + Devil’s Sight", icon: "darkness" },
      { who: "shadowheart", label: "Maintain SG (War Caster)", icon: "spirit" },
    ],
    finish: "Dump remaining Pact slots → short rest.",
    gear: ["War Caster on SH", "Risky Ring later", "Hand crossbows on Ast"],
  },

  // ── Act 1 bosses ──
  {
    id: "f-zhalk",
    act: 1,
    title: "Commander Zhalk",
    kind: "boss",
    when: "Nautiloid helm",
    recommendedLevel: "1",
    goal: "Loot Everburn Blade before timer / escape.",
    opener: [
      { who: "shadowheart", label: "Command: Drop (optional)", icon: "hold" },
      { who: "any", label: "Focus Zhalk, not mind flayer", icon: "blade" },
    ],
    mid: [
      { who: "any", label: "Loot greatsword immediately", icon: "item" },
      { who: "any", label: "Run to transponder", icon: "surge" },
    ],
    finish: "Blade → Lae’zel later.",
  },
  {
    id: "f-ethel",
    act: 1,
    title: "Auntie Ethel",
    kind: "boss",
    when: "Teahouse / Wetlands lair",
    recommendedLevel: "4–5",
    goal: "Force bargain → +1 CHA hair. Don’t kill her too early.",
    opener: [
      { who: "shadowheart", label: "Bless / Hold", icon: "hold" },
      { who: "tav", label: "Curse + hits", icon: "curse" },
      { who: "any", label: "Burn illusions / real Ethel", icon: "blast" },
    ],
    mid: [
      { who: "any", label: "Stop at bargain dialogue", icon: "item", note: "Take hair" },
    ],
    finish: "+1 CHA on Dark Urge. Permanent.",
    gear: ["Antidotes / poison cleanse if needed"],
  },
  {
    id: "f-grym",
    act: 1,
    title: "Grym (Adamantine Forge)",
    kind: "boss",
    when: "Grymforge lava",
    recommendedLevel: "5–6",
    goal: "Superheat → hammer → craft gear. Don’t stand in lava.",
    opener: [
      { who: "any", label: "Lava valve / heat Grym", icon: "buff" },
      { who: "any", label: "Lure under forge hammer", icon: "shove" },
    ],
    mid: [
      { who: "any", label: "Hit only when superheated", icon: "blade" },
      { who: "shadowheart", label: "Heals / Sanctuary soft", icon: "heal" },
    ],
    finish: "Craft Scale Mail + Shield (soft).",
  },
  {
    id: "f-inquisitor",
    act: 1,
    title: "Inquisitor W’wargaz",
    kind: "hard",
    when: "Creche — after shopping Jeera",
    recommendedLevel: "5–6",
    goal: "Diadem of Arcane Synergy + loot. Shop first.",
    opener: [
      { who: "shadowheart", label: "Hold / SG if 5+", icon: "spirit" },
      { who: "tav", label: "Curse + Extra Attack", icon: "blade" },
      { who: "laezel", label: "Action Surge", icon: "surge" },
      { who: "astarion", label: "Sharpshooter", icon: "shot" },
    ],
    mid: [{ who: "any", label: "Loot Diadem + Strange Conduit", icon: "item" }],
    finish: "Leave Creche when done — don’t overstay if weakened.",
    gear: ["Buy Knife + Gloves of Dex BEFORE fight"],
  },
  {
    id: "f-raid",
    act: 1,
    title: "Grove raid (Absolute)",
    kind: "hard",
    when: "After power route + tell Minthara",
    recommendedLevel: "5–6",
    goal: "Clear Grove. Loot Kagha. Accept companion exits.",
    opener: [
      { who: "shadowheart", label: "Spirit Guardians walk", icon: "spirit" },
      { who: "tav", label: "EB / Darkness cheese packs", icon: "darkness" },
      { who: "laezel", label: "Frontline packs", icon: "blade" },
    ],
    mid: [
      { who: "any", label: "Loot Kagha → Broodmother’s Revenge", icon: "item" },
    ],
    finish: "Celebration camp. Wyll/Karlach leave — expected.",
  },

  // ── Act 2 ──
  {
    id: "f-minthara-free",
    act: 2,
    title: "Free Minthara (Moonrise prison)",
    kind: "hard",
    when: "First Moonrise visit",
    recommendedLevel: "6–7",
    goal: "Get her out alive. Escort on foot.",
    opener: [
      { who: "tav", label: "Bluff / Intimidate gnomes", icon: "buff" },
      { who: "any", label: "Or kill inquisitors", icon: "blade" },
    ],
    mid: [
      { who: "any", label: "Walk her outside tower borders", icon: "shove" },
      { who: "any", label: "Send to camp", icon: "rest" },
    ],
    finish: "Respec Oathbreaker. Bench Lae’zel.",
  },
  {
    id: "f-thorms",
    act: 2,
    title: "Reithwin Thorms (Thisobald / Gerringothe / Malus)",
    kind: "hard",
    when: "Before or around Gauntlet",
    recommendedLevel: "6–8",
    goal: "XP + Surgeon’s Subjugation Amulet from Malus.",
    opener: [
      { who: "tav", label: "Dialogue cheese when offered", icon: "buff" },
      { who: "shadowheart", label: "Hold / SG if fighting", icon: "spirit" },
      { who: "minthara", label: "Smite bosses", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Malus: turn nurses or fight", icon: "hold" },
      { who: "any", label: "Loot Surgeon amulet", icon: "item" },
    ],
    finish: "Pairs with Killer’s Sweetheart later.",
  },
  {
    id: "f-yurgir",
    act: 2,
    title: "Yurgir (Gauntlet)",
    kind: "boss",
    when: "Gauntlet of Shar",
    recommendedLevel: "7–8",
    goal: "Hellfire Hand Crossbow for Astarion.",
    opener: [
      { who: "shadowheart", label: "Hold / debuff", icon: "hold" },
      { who: "tav", label: "Curse + Extra Attack", icon: "curse" },
      { who: "astarion", label: "Sharpshooter openers", icon: "shot" },
      { who: "minthara", label: "Smites", icon: "smite" },
    ],
    mid: [{ who: "any", label: "Clear merregons if they pile", icon: "blast" }],
    finish: "Crossbow → Astarion dual HX.",
  },
  {
    id: "f-nightsong",
    act: 2,
    title: "Nightsong (Shadowfell) — dark choice",
    kind: "boss",
    when: "End of Gauntlet",
    recommendedLevel: "7–8",
    goal: "Shadowheart kills Aylin. Spear of Evening.",
    opener: [
      { who: "shadowheart", label: "Dialogue: kill Nightsong", icon: "spirit" },
    ],
    mid: [
      { who: "any", label: "No combat if she commits", icon: "buff" },
    ],
    finish: "Shar path locked. Towers go hostile soon.",
  },
  {
    id: "f-ketheric",
    act: 2,
    title: "Ketheric Thorm (+ colony)",
    kind: "boss",
    when: "After Nightsong — Moonrise assault",
    recommendedLevel: "8–9",
    goal: "Multi-phase. Short rest between phases.",
    opener: [
      { who: "shadowheart", label: "Spirit Guardians", icon: "spirit" },
      { who: "shadowheart", label: "Hold key adds", icon: "hold" },
      { who: "tav", label: "Hexblade’s Curse on Ketheric", icon: "curse" },
      { who: "astarion", label: "Sharpshooter", icon: "shot" },
      { who: "minthara", label: "Smites on Held", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Short rest before colony final", icon: "rest" },
      { who: "any", label: "Loot colony between phases", icon: "item" },
    ],
    finish: "Netherstone secured → Act 3.",
    gear: ["Callous Glow", "Risky Ring", "Adamantine frontline"],
  },

  // ── Act 3 ──
  {
    id: "f-cazador",
    act: 3,
    title: "Cazador (ascension)",
    kind: "boss",
    when: "Szarr Palace — bring Astarion",
    recommendedLevel: "10–11",
    goal: "Ascend Astarion + Rhapsody.",
    opener: [
      { who: "shadowheart", label: "SG + daylight plan", icon: "spirit" },
      { who: "tav", label: "Curse Cazador", icon: "curse" },
      { who: "astarion", label: "Ritual dialogue → ascend", icon: "buff" },
      { who: "minthara", label: "Smash spawns", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Interrupt ritual only if NOT ascending", icon: "hold" },
    ],
    finish: "Loot Rhapsody. Astarion is a monster after.",
  },
  {
    id: "f-raphael",
    act: 3,
    title: "Raphael (House of Hope)",
    kind: "boss",
    when: "After looting Hope house",
    recommendedLevel: "10–12",
    goal: "Helldusk Armour. Hardest single fight on the route.",
    opener: [
      { who: "any", label: "Elixir + Freedom of Movement", icon: "buff" },
      { who: "shadowheart", label: "SG + Hold if lands", icon: "spirit" },
      { who: "tav", label: "Curse Raphael / focus pillars plan", icon: "curse" },
      { who: "astarion", label: "Sharpshooter / Rhapsody stacks", icon: "shot" },
      { who: "minthara", label: "Smites", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Hope’s spells if freed", icon: "heal" },
      { who: "any", label: "Break concentration / soul pillars as needed", icon: "blast" },
    ],
    finish: "Loot Helldusk Armour.",
    gear: ["Amulet of Greater Health before fight", "Short rest ready"],
  },
  {
    id: "f-gortash",
    act: 3,
    title: "Gortash",
    kind: "boss",
    when: "After Steel Watch disabled",
    recommendedLevel: "10–12",
    goal: "Netherstone. Watchers offline = much easier.",
    opener: [
      { who: "shadowheart", label: "SG / control", icon: "spirit" },
      { who: "tav", label: "Curse + Extra Attack", icon: "curse" },
      { who: "astarion", label: "Ranged focus", icon: "shot" },
      { who: "minthara", label: "Smites", icon: "smite" },
    ],
    mid: [{ who: "any", label: "Clear traps / bombs if active", icon: "item" }],
    finish: "Netherstone 2.",
  },
  {
    id: "f-orin",
    act: 3,
    title: "Orin the Red (Durge climax)",
    kind: "boss",
    when: "Temple of Bhaal after Tribunal",
    recommendedLevel: "11–12",
    goal: "Netherstone + Bloodthirst / Crimson Mischief. Durge story peak.",
    opener: [
      { who: "tav", label: "Durge face dialogue", icon: "curse" },
      { who: "shadowheart", label: "Hold / SG", icon: "hold" },
      { who: "astarion", label: "Ascended nova", icon: "shot" },
      { who: "minthara", label: "Bhaalist aura + smites", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Save kidnapped companion", icon: "heal" },
    ],
    finish: "Embrace or resist Bhaal for ending flavour.",
    gear: ["Bhaalist Armour on Minthara"],
  },
  {
    id: "f-brain",
    act: 3,
    title: "Netherbrain finale",
    kind: "boss",
    when: "All three stones",
    recommendedLevel: "12",
    goal: "End the run. Dump everything.",
    opener: [
      { who: "any", label: "Gather allies buffs", icon: "buff" },
      { who: "shadowheart", label: "SG / mass control", icon: "spirit" },
      { who: "tav", label: "Curse + full nova", icon: "curse" },
      { who: "astarion", label: "Sharpshooter dump", icon: "shot" },
      { who: "minthara", label: "Smites", icon: "smite" },
    ],
    mid: [
      { who: "any", label: "Use remaining short rests", icon: "rest" },
    ],
    finish: "Kill the brain. Credits.",
  },
];
