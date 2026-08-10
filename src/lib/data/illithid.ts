export type IllithidPower = {
  id: string;
  name: string;
  tier: "take" | "situational" | "skip";
  detail: string;
};

/** Soft advice for a dark rush party — not a full tree map. */
export const ILLITHID: IllithidPower[] = [
  {
    id: "il-favourable",
    name: "Favourable Beginnings",
    tier: "take",
    detail: "Attack/check bonus on first roll vs a target — always useful.",
  },
  {
    id: "il-force-tunnel",
    name: "Force Tunnel",
    tier: "take",
    detail: "Reposition + knockback without a spell slot.",
  },
  {
    id: "il-concentrated",
    name: "Concentrated Blast",
    tier: "take",
    detail: "Bonus damage button; great with your short-rest nova style.",
  },
  {
    id: "il-cull",
    name: "Cull the Weak",
    tier: "take",
    detail: "Execute low HP → chain kills. Strong with Deathstalker invis.",
  },
  {
    id: "il-luck",
    name: "Luck of the Far Realms",
    tier: "take",
    detail: "Convert a hit to crit — boss opener gold.",
  },
  {
    id: "il-blackhole",
    name: "Black Hole",
    tier: "take",
    detail: "Best crowd clump in the game for SG / AOE.",
  },
  {
    id: "il-freecast",
    name: "Freecast",
    tier: "situational",
    detail: "Strong but later tree — take when you can afford the path.",
  },
  {
    id: "il-mind-sanctuary",
    name: "Mind Sanctuary",
    tier: "situational",
    detail: "Action/bonus flexibility in the zone — good for melee stack.",
  },
  {
    id: "il-displace",
    name: "Displace",
    tier: "situational",
    detail: "Push tech; fine, not mandatory.",
  },
  {
    id: "il-psionic",
    name: "Psionic Dominance / Overwhelming",
    tier: "situational",
    detail: "Save tech — nice vs casters.",
  },
  {
    id: "il-absorb",
    name: "Ability Drain / Absorb Intellect lines",
    tier: "skip",
    detail: "Slow payoff for rush dark run — skip unless RP.",
  },
  {
    id: "il-charm",
    name: "Endless Rage / niche dialogue powers",
    tier: "skip",
    detail: "Prefer combat staples above.",
  },
];
