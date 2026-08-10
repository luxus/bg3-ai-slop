/**
 * Hard facts we have re-checked against bg3.wiki (2026-08-09).
 * Soft recommendations are labelled separately in the UI.
 */

export type VerifiedFact = {
  id: string;
  topic: string;
  /** Alias used by Proof panel */
  claim: string;
  fact: string;
  source: string;
  sourceUrl: string;
  checked: string;
  status: "verified" | "corrected" | "soft";
  note?: string;
};

export const PROOF_PROCESS = [
  {
    step: 1,
    title: "Check the class table",
    body: "Cantrips known, spells known, slots, and level features come from bg3.wiki class tables — not memory.",
  },
  {
    step: 2,
    title: "Match in-game spelling",
    body: "e.g. Agonising Blast (with S). Invocations ≠ spells — separate level-up screens.",
  },
  {
    step: 3,
    title: "Label soft advice",
    body: "Build preferences (race, feats, companion subclasses) are soft unless the wiki hard-locks them (Haunted One on Dark Urge).",
  },
  {
    step: 4,
    title: "Correct when you report UI",
    body: "If the create/level screen differs, we update data and mark the fact corrected.",
  },
];

export const VERIFIED_FACTS: VerifiedFact[] = [
  {
    id: "v-warlock-cantrips",
    topic: "Warlock cantrips known",
    fact: "Warlock knows 2 cantrips at levels 1–3, and 3 cantrips at level 4+.",
    claim: "Warlock knows 2 cantrips at levels 1–3, and 3 cantrips at level 4+.",
    source: "bg3.wiki — Warlock class table",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    checked: "2026-08-09",
    status: "corrected",
    note: "Earlier error: “3 cantrips at create”. Third cantrip comes at Warlock 4.",
  },
  {
    id: "v-warlock-spells-l1",
    topic: "Warlock spells known level 1",
    fact: "Warlock knows 2 spells at level 1 (and has 1 Pact Magic slot).",
    claim: "Warlock knows 2 spells at level 1 (and has 1 Pact Magic slot).",
    source: "bg3.wiki — Warlock class table",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    checked: "2026-08-09",
    status: "verified",
  },
  {
    id: "v-warlock-l2-steps",
    topic: "Warlock level 2 steps",
    fact: "At level 2: Spells Known becomes 3 (pick +1 spell), then choose 2 Eldritch Invocations on a separate screen.",
    claim:
      "At level 2: Spells Known becomes 3 (pick +1 spell), then choose 2 Eldritch Invocations on a separate screen.",
    source: "bg3.wiki — Warlock / Eldritch Invocation",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    checked: "2026-08-09",
    status: "verified",
    note: "Agonising Blast is an Invocation, not a spell — it never appears on the spell list.",
  },
  {
    id: "v-agonising",
    topic: "Agonising Blast spelling",
    fact: "In-game / wiki spelling is Agonising Blast (British S), available as Invocation at Warlock 2+.",
    claim:
      "In-game / wiki spelling is Agonising Blast (British S), available as Invocation at Warlock 2+.",
    source: "bg3.wiki — Agonising Blast",
    sourceUrl: "https://bg3.wiki/wiki/Agonising_Blast",
    checked: "2026-08-09",
    status: "verified",
  },
  {
    id: "v-hexblade-shield",
    topic: "Hexblade expanded spells",
    fact: "Hexblade expanded list includes Shield, Wrathful Smite, Blindness, Branding Smite, Blink, Elemental Weapon.",
    claim:
      "Hexblade expanded list includes Shield, Wrathful Smite, Blindness, Branding Smite, Blink, Elemental Weapon.",
    source: "bg3.wiki — The Hexblade",
    sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
    checked: "2026-08-09",
    status: "verified",
    note: "Shield is only available because of Hexblade — not on base Warlock list.",
  },
  {
    id: "v-hexblade-l1",
    topic: "Hexblade features at 1",
    fact: "Hexblade Warrior (Bind Hexed Weapon, medium armour, shields, martial weapons) and Hexblade’s Curse at level 1.",
    claim:
      "Hexblade Warrior (Bind Hexed Weapon, medium armour, shields, martial weapons) and Hexblade’s Curse at level 1.",
    source: "bg3.wiki — The Hexblade",
    sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
    checked: "2026-08-09",
    status: "verified",
  },
  {
    id: "v-warlock-skills",
    topic: "Warlock skill list",
    fact: "Warlock may choose skills from: Arcana, Deception, History, Intimidation, Investigation, Religion only.",
    claim:
      "Warlock may choose skills from: Arcana, Deception, History, Intimidation, Investigation, Religion only.",
    source: "bg3.wiki — Warlock",
    sourceUrl: "https://bg3.wiki/wiki/Warlock",
    checked: "2026-08-09",
    status: "corrected",
    note: "Earlier error: listing Persuasion as a Warlock skill. Use Beguiling Influence for Persuasion.",
  },
  {
    id: "v-haunted-one",
    topic: "Haunted One background",
    fact: "Haunted One grants Medicine and Intimidation. Dark Urge origin locks this background.",
    claim:
      "Haunted One grants Medicine and Intimidation. Dark Urge origin locks this background.",
    source: "bg3.wiki — Haunted One / The Dark Urge",
    sourceUrl: "https://bg3.wiki/wiki/Haunted_One",
    checked: "2026-08-09",
    status: "verified",
  },
  {
    id: "v-drow",
    topic: "Lolth-Sworn Drow",
    fact: "Drow get Superior Darkvision, Drow Weapon Training, Perception proficiency, and Drow Magic.",
    claim:
      "Drow get Superior Darkvision, Drow Weapon Training, Perception proficiency, and Drow Magic.",
    source: "bg3.wiki — Drow / Lolth-Sworn Drow",
    sourceUrl: "https://bg3.wiki/wiki/Drow",
    checked: "2026-08-09",
    status: "verified",
  },
  {
    id: "v-pact-blade",
    topic: "Pact of the Blade",
    fact: "Pact Boon chosen at Warlock 3. Pact of the Blade is the melee pact; Deepened Pact Extra Attack at 5.",
    claim:
      "Pact Boon chosen at Warlock 3. Pact of the Blade is the melee pact; Deepened Pact Extra Attack at 5.",
    source: "bg3.wiki — Pact of the Blade / Warlock",
    sourceUrl: "https://bg3.wiki/wiki/Pact_of_the_Blade",
    checked: "2026-08-09",
    status: "verified",
  },
];

/** Soft recommendations (not hard rules) — labelled in UI. */
export const SOFT_RECS = [
  {
    id: "s-race",
    topic: "Race pick",
    note: "Lolth-Sworn Drow is recommended for darkvision + Darkness + dark RP. Alternatives (Drow Half-Elf, Dragonborn) are fine if you prefer looks.",
  },
  {
    id: "s-stats",
    topic: "Ability scores",
    note: "Target CHA primary, DEX/CON secondary, dump STR. Exact point-buy numbers depend on racial bonuses in the UI.",
  },
  {
    id: "s-invocations",
    topic: "Invocation picks",
    note: "Recommended: Agonising Blast + Devil’s Sight (or Beguiling Influence for Persuasion/Deception). Separate from the +1 spell at level 2.",
  },
  {
    id: "s-party",
    topic: "Companion subclasses",
    note: "Death Domain SH, Swashbuckler Astarion, Giant Barb/Oathbreaker Minthara are build preferences for Balanced dark run — not the only viable options.",
  },
];
