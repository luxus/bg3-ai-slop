/**
 * Character-create facts verified against bg3.wiki (Patch 8 era, checked 2026-08-09).
 * Soft/story advice is NOT in this list — only hard rules the game UI enforces.
 */
export type VerifiedFact = {
  id: string;
  claim: string;
  status: "verified" | "corrected" | "soft";
  source: string;
  sourceUrl: string;
  note?: string;
};

export const VERIFIED_FACTS: VerifiedFact[] = [
  {
    id: "cantrips-l1",
    claim: "Warlock level 1 knows exactly 2 cantrips (not 3).",
    status: "verified",
    source: "bg3.wiki — Warlock progression",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    note: "3rd cantrip at Warlock 4; 4th at Warlock 10.",
  },
  {
    id: "spells-l1",
    claim: "Warlock level 1 knows exactly 2 spells and has 1 Pact Magic slot.",
    status: "verified",
    source: "bg3.wiki — Warlock progression",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
  },
  {
    id: "cantrips-pick",
    claim: "Pick Eldritch Blast + Booming Blade at level 1.",
    status: "verified",
    source: "bg3.wiki — Booming Blade (Warlock cantrip list)",
    sourceUrl: "https://bg3.wiki/wiki/Booming_Blade",
    note: "Both are on the Warlock cantrip list. Build choice, not a free extra cantrip.",
  },
  {
    id: "background",
    claim: "Dark Urge background is locked to Haunted One (Medicine + Intimidation).",
    status: "verified",
    source: "bg3.wiki — Haunted One / Origins",
    sourceUrl: "https://bg3.wiki/wiki/Haunted_One",
  },
  {
    id: "hexblade-l1",
    claim:
      "Hexblade is chosen at Warlock level 1. Hex Warrior: medium armour, shields, martial weapons + Bind Hexed Weapon (CHA for bound weapon attacks).",
    status: "verified",
    source: "bg3.wiki — The Hexblade",
    sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
    note: "You do not wait until level 3 for CHA weapons — Bind Hexed Weapon is level 1. Pact of the Blade at 3 is still taken for Extra Attack at 5.",
  },
  {
    id: "shield",
    claim: "Shield is available to Hexblade via expanded spell list at level 1.",
    status: "verified",
    source: "bg3.wiki — Shield / Hexblade expanded list",
    sourceUrl: "https://bg3.wiki/wiki/Shield_(spell)",
    note: "Not on the base Warlock list for other patrons.",
  },
  {
    id: "hex",
    claim: "Hex is a base Warlock 1st-level spell.",
    status: "verified",
    source: "bg3.wiki — List of Warlock spells",
    sourceUrl: "https://bg3.wiki/wiki/List_of_Warlock_spells",
  },
  {
    id: "skills",
    claim:
      "Warlock picks 2 skills from: Arcana, Deception, History, Intimidation, Investigation, Religion. Persuasion is NOT on the Warlock list.",
    status: "verified",
    source: "bg3.wiki — Warlock / Proficiency",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    note: "Haunted One already gives Intimidation. Take Deception + Arcana (or Investigation). Persuasion later via Beguiling Influence invocation.",
  },
  {
    id: "drow",
    claim:
      "Lolth-Sworn Drow: Superior Darkvision, Perception proficiency, Drow Magic (Dancing Lights L1, Faerie Fire L3, Darkness L5 LR). Subrace is mostly dialogue/evil options.",
    status: "verified",
    source: "bg3.wiki — Drow",
    sourceUrl: "https://bg3.wiki/wiki/Drow",
  },
  {
    id: "invocations-l2",
    claim: "Warlock level 2: choose 2 Eldritch Invocations.",
    status: "verified",
    source: "bg3.wiki — Warlock",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    note: "Recommended: Agonizing Blast + Devil’s Sight (or Beguiling Influence for Persuasion/Deception).",
  },
  {
    id: "extra-attack",
    claim:
      "Extra Attack for this build: Pact of the Blade at 3 → Deepened Pact Extra Attack at Warlock 5.",
    status: "verified",
    source: "bg3.wiki — Deepened Pact / Pact of the Blade",
    sourceUrl: "https://bg3.wiki/wiki/Deepened_Pact",
  },
  {
    id: "stats",
    claim: "Target array STR 8, DEX 16, CON 14, INT 8, WIS 10, CHA 17 is a build recommendation (point-buy targets), not a hard game rule.",
    status: "soft",
    source: "Build recommendation",
    sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
    note: "Final numbers depend on racial bonuses / point-buy UI. Prioritise CHA, then DEX/CON.",
  },
  {
    id: "story-path",
    claim: "Grove raid / Shar Nightsong kill / Astarion ascend / Bhaal path are story recommendations for a dark run — not required for the build to function.",
    status: "soft",
    source: "Playstyle path",
    sourceUrl: "https://bg3.wiki/wiki/The_Dark_Urge",
  },
];

export const PROOF_PROCESS = [
  {
    step: 1,
    title: "Hard rules → wiki first",
    body: "Class tables, cantrip/spell counts, locked backgrounds, subclass features: check bg3.wiki (updated for Patch 8+).",
  },
  {
    step: 2,
    title: "Create screen is ground truth",
    body: "If the game UI disagrees with a guide, trust the game. Report the mismatch and we correct the app.",
  },
  {
    step: 3,
    title: "Label soft advice",
    body: "Quest order, “best” items, and party vibes are recommendations. They can be wrong for your run without breaking the character.",
  },
  {
    step: 4,
    title: "Correct in public",
    body: "When a mistake is found (e.g. 3 cantrips, free background), fix the app data and keep a Verified list so errors don’t creep back.",
  },
];
