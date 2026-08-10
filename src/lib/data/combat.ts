export type CombatTip = {
  id: string;
  title: string;
  body: string;
  kind?: "general" | "trash" | "boss" | "undead" | "construct";
};

export const COMBAT_TIPS: CombatTip[] = [
  {
    id: "c-init",
    title: "Win initiative",
    body: "Alert or high DEX on SH + Astarion. First round Hold Person / Command turns bosses into loot piñatas.",
    kind: "general",
  },
  {
    id: "c-short",
    title: "Short-rest economy",
    body: "Warlock slots refill on short rest. Nova every hard fight, then short rest. Don’t hoard like a wizard.",
    kind: "general",
  },
  {
    id: "c-trash",
    title: "Trash packs",
    body: "SH: Spirit Guardians + walk. Tav: EB / quick curse only if needed. Astarion: cleave weak. Minthara: throw or cleave. Save big slots.",
    kind: "trash",
  },
  {
    id: "c-boss",
    title: "Boss script",
    body: "1) SH Hold Person / hold key add. 2) Tav Hexblade’s Curse + Hex. 3) Phalar Shriek. 4) Whole party dumps damage. 5) Luck of Far Realms / Sweetheart crit.",
    kind: "boss",
  },
  {
    id: "c-undead",
    title: "Undead / necrotic",
    body: "Death SH Inescapable Destruction ignores necrotic resist. Radiant options still fine on others. Watch turn undead niches.",
    kind: "undead",
  },
  {
    id: "c-construct",
    title: "Constructs / steel",
    body: "Lightning after Wet helps. Foundry sabotage makes Act 3 constructs trivial. Force damage weapons if stuck.",
    kind: "construct",
  },
  {
    id: "c-darkness",
    title: "Darkness cheese",
    body: "Devil’s Sight + Darkness. Enemies miss; you don’t. Keep allies inside only if they can see too.",
    kind: "general",
  },
  {
    id: "c-elixir",
    title: "Elixir of the day",
    body: "One elixir at a time. Bloodlust / Vigilance / Hill Giant STR on Minthara are top. Potions stack more freely.",
    kind: "general",
  },
];

export const OPENERS = [
  {
    who: "Dark Urge",
    steps: ["Hexblade’s Curse", "Hex (if lasting fight)", "Booming Blade attack or EB"],
  },
  {
    who: "Shadowheart",
    steps: ["Spirit Guardians", "Hold Person priority target", "Dodge / warcast maintain"],
  },
  {
    who: "Astarion",
    steps: ["Hide or range high ground", "Sneak attack", "Bonus offhand / hand crossbow"],
  },
  {
    who: "Minthara",
    steps: ["Rage / smite setup", "Throw or GWM swing", "Shove off elevation if free kill"],
  },
];
