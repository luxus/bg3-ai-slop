export type CombatTip = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export const COMBAT_TIPS: CombatTip[] = [
  {
    id: "c-init",
    title: "Win initiative, win the fight",
    body: "Alert feat or high-DEX + initiative gear on at least Shadowheart and Astarion. First round Hold Person / Command turns bosses into loot pinatas.",
    tags: ["setup"],
  },
  {
    id: "c-hold",
    title: "Hold Person / Hold Monster core",
    body: "Shadowheart holds. Everyone piles crits. Killer’s Sweetheart + Craterflesh + smites/hex make single targets vanish in one turn.",
    tags: ["control", "nova"],
  },
  {
    id: "c-sg",
    title: "Spirit Guardians is your AoE",
    body: "Cast necrotic SG, walk through packs. Death Domain ignores necrotic resist at 6. No need for fancy Fireball setups on this party.",
    tags: ["aoe"],
  },
  {
    id: "c-elixirs",
    title: "Pre-buff with elixirs",
    body: "Elixir of Bloodlust (extra action on kill), Cloud Giant / Hill Giant strength for Minthara, Peerless Focus for concentration. Drink after long rest.",
    tags: ["prep"],
  },
  {
    id: "c-surprise",
    title: "Surprise when possible",
    body: "Group with invis / hide. Surprise round deletes half the encounter before they act. Dark Urge stealth + Astarion is enough.",
    tags: ["prep"],
  },
  {
    id: "c-height",
    title: "High ground + special arrows",
    body: "Astarion opens with Arrow of Many Targets or slaying arrows on priority. Height advantage is free damage.",
    tags: ["ranged"],
  },
  {
    id: "c-throw",
    title: "Chasms are free kills",
    body: "Giant Barb / shove / Eldritch Blast Repelling (if taken) — yeet enemies off maps. Instant, no HP check.",
    tags: ["cheese"],
  },
  {
    id: "c-darkness",
    title: "Darkness cheese (optional)",
    body: "If you took Devil’s Sight on Hexblade: cast Darkness on the party. Enemies miss; you don’t. Combine with Shar spear path.",
    tags: ["cheese"],
  },
  {
    id: "c-focus",
    title: "Focus fire, don’t spread",
    body: "Kill order: enemy casters → legendary actions → multiattack brutes → trash. Dead enemies deal zero damage.",
    tags: ["basics"],
  },
  {
    id: "c-rest",
    title: "Rest discipline",
    body: "Long rest after major story fights. Short rest to top Astarion/Minthara. Don’t hoard potions — use Speed potions on bosses.",
    tags: ["basics"],
  },
];

export const OPENER_ROTATION = [
  {
    step: 1,
    actor: "Shadowheart",
    action: "Spirit Guardians (necrotic) or Hold Person on boss",
  },
  {
    step: 2,
    actor: "Dark Urge",
    action: "Hexblade’s Curse + weapon nova / EB on same target",
  },
  {
    step: 3,
    actor: "Astarion",
    action: "Sneak Attack / special arrow into held or cursed target",
  },
  {
    step: 4,
    actor: "Minthara",
    action: "Rage/smite and delete whatever is still standing",
  },
];
