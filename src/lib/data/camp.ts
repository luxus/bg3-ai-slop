/**
 * Camp unlocks & early QoL — things players miss (Withers, long rests, spare companions).
 * Soft timing notes labelled where community/wiki disagree on exact triggers.
 */

export type CampNote = {
  id: string;
  title: string;
  detail: string;
  when: string;
  confidence: "verified" | "soft";
  sourceUrl?: string;
};

export const CAMP_NOTES: CampNote[] = [
  {
    id: "camp-withers-crypt",
    title: "Withers — best way (Dank Crypt)",
    when: "Right after crash beach / near Chapel / Overgrown Ruins",
    detail:
      "1) Enter Overgrown Ruins → Dank Crypt (chapel door or beach hatch).\n2) Open the hidden sarcophagus room (button / lever puzzles).\n3) Interact with Withers’ sarcophagus — answer his question (any answer is fine).\n4) Leave the crypt, then take a Long Rest.\n5) He is at camp: respec (100 gold), hirelings, revive.",
    confidence: "verified",
    sourceUrl: "https://bg3.wiki/wiki/Withers",
  },
  {
    id: "camp-withers-auto",
    title: "Withers auto-joins if you skip the crypt",
    when: "Often around level 3 / early Act 1 progress",
    detail:
      "If you never wake him in the Dank Crypt, he can still show up at camp later on his own (common reports: around level 3, or after major Act 1 gates). Soft timing. Talk to him at camp for respec either way.",
    confidence: "soft",
    sourceUrl: "https://bg3.wiki/wiki/Overgrown_Ruins",
  },
  {
    id: "camp-laezel",
    title: "Lae’zel — keep as temp frontline",
    when: "Act 1 until Minthara is free",
    detail:
      "She is NOT in the final dark four (you / Shadowheart / Astarion / Minthara). Still useful now:\n• Frontline + Everburn Blade early\n• Great for Creche / Mountain Pass content\n• Soft build if you use her: Battlemaster Fighter or keep default — STR / heavy hits\n• When Minthara joins: park Lae’zel at camp (or keep her only for Gith-specific fights)\n• Absolute / dark choices can sour her; that’s fine for this run",
    confidence: "soft",
    sourceUrl: "https://bg3.wiki/wiki/Lae%27zel",
  },
  {
    id: "camp-gale",
    title: "Gale (and other extras)",
    when: "After recruiting Gale",
    detail:
      "Not in the dark core four. Level him a bit, Wizard subclass Divination (or Evocation), park at camp. Wyll/Karlach usually leave after Absolute raid.",
    confidence: "soft",
  },
  {
    id: "camp-long-rest",
    title: "Long rest to unlock camp scenes",
    when: "Throughout Act 1",
    detail:
      "Partial rests refill resources but skip many camp scenes. Full long rests for: Withers after crypt, Deathstalker Mantle (DURGE), companion talks. Mix short rests (Warlock slots) with occasional full rests.",
    confidence: "soft",
  },
  {
    id: "camp-respec",
    title: "Respec costs & who to fix first",
    when: "After Withers is at camp",
    detail:
      "100 gold per respec. Priority: Shadowheart → Death Domain + WIS. Optional: tidy Lae’zel if you keep using her. Later: Minthara after recruit.",
    confidence: "verified",
    sourceUrl: "https://bg3.wiki/wiki/Withers",
  },
  {
    id: "camp-sceleritas",
    title: "Sceleritas / Deathstalker Mantle",
    when: "Early DURGE camp after Urge events",
    detail:
      "Talk to Sceleritas Fel at camp after early Urge beats. Deathstalker Mantle (kill → Invisible). Don’t skip camp chats after major kills.",
    confidence: "verified",
    sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle",
  },
  {
    id: "camp-hirelings",
    title: "Hirelings",
    when: "Withers available",
    detail:
      "If you drop Lae’zel early and Minthara isn’t free, pull a hireling tank from Withers.",
    confidence: "verified",
    sourceUrl: "https://bg3.wiki/wiki/Hirelings",
  },
];
