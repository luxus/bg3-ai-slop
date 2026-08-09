export type Quest = {
  id: string;
  act: 1 | 2 | 3;
  title: string;
  why: string;
  darkChoice?: string;
  tip?: string;
  priority: "critical" | "important" | "optional";
};

export const QUESTS: Quest[] = [
  // Act 1
  {
    id: "a1-shadowheart",
    act: 1,
    title: "Free Shadowheart on the Nautiloid / beach",
    why: "Core companion for Death Domain control and Shar story.",
    priority: "critical",
  },
  {
    id: "a1-astarion",
    act: 1,
    title: "Recruit Astarion at the crash site",
    why: "Skills + Ascended power later. Perfect for dark runs.",
    priority: "critical",
  },
  {
    id: "a1-grove-raid",
    act: 1,
    title: "Side with Minthara — raid the Emerald Grove",
    why: "Unlocks Minthara and locks in Absolute / dark path.",
    darkChoice: "Tell Minthara the Grove location, then assault it. Karlach/Wyll/Halsin paths close.",
    tip: "Loot everything before the raid. Some traders die.",
    priority: "critical",
  },
  {
    id: "a1-minthara",
    act: 1,
    title: "Recruit Minthara after the raid",
    why: "Fourth party member for dark run.",
    priority: "critical",
  },
  {
    id: "a1-withers",
    act: 1,
    title: "Unlock Withers (respec)",
    why: "Respec Shadowheart to Death Domain and fix stats.",
    priority: "critical",
  },
  {
    id: "a1-ethel",
    act: 1,
    title: "Auntie Ethel — deal or kill",
    why: "Hair for +1 ability, powerful early fight, unique gear.",
    darkChoice: "Take the power deal if it fits your character; or kill her for loot.",
    priority: "important",
  },
  {
    id: "a1-underdark",
    act: 1,
    title: "Underdark route (Grymforge / Nere)",
    why: "Strong Act 1 gear, Adamantine forge armor/weapons.",
    tip: "Forge Adamantine Shield or Scale — huge AC spike.",
    priority: "important",
  },
  {
    id: "a1-creche",
    act: 1,
    title: "Githyanki Crèche (optional but strong)",
    why: "Great gear (Knife of the Undermountain King, etc.) and story.",
    priority: "important",
  },
  {
    id: "a1-goblin-leaders",
    act: 1,
    title: "Goblin camp leaders / Absolute artifacts",
    why: "Story + loot. On Absolute path you align instead of killing all.",
    darkChoice: "Cooperate with Absolute leadership.",
    priority: "important",
  },

  // Act 2
  {
    id: "a2-last-light",
    act: 2,
    title: "Last Light Inn — decide Isobel’s fate",
    why: "Controls Act 2 map state and many NPCs.",
    darkChoice: "Kill Isobel or let Marcus take her → Last Light falls. Darker, fewer allies, still beatable.",
    tip: "Loot traders first if you plan to collapse Last Light.",
    priority: "critical",
  },
  {
    id: "a2-moonrise",
    act: 2,
    title: "Moonrise Towers — Absolute stronghold",
    why: "Main Act 2 hub on dark path. Speak to Ketheric’s people.",
    priority: "critical",
  },
  {
    id: "a2-gauntlet",
    act: 2,
    title: "Gauntlet of Shar",
    why: "Shadowheart’s defining arc.",
    darkChoice: "Complete trials. At the end: kill the Nightsong.",
    tip: "Selfsame trial → Killer’s Sweetheart ring (auto-crit).",
    priority: "critical",
  },
  {
    id: "a2-nightsong",
    act: 2,
    title: "Kill the Nightsong (Dark Justiciar)",
    why: "Locks Shadowheart on Shar path + unique spear reward path.",
    darkChoice: "Encourage her to kill Aylin.",
    priority: "critical",
  },
  {
    id: "a2-ketheric",
    act: 2,
    title: "Defeat Ketheric Thorm",
    why: "Act 2 climax. Get the first Netherstone.",
    tip: "With Nightsong dead, fight is different — prepare for undead/Absolute power.",
    priority: "critical",
  },
  {
    id: "a2-balthazar",
    act: 2,
    title: "Balthazar / mind flayer colony approach",
    why: "Story routing into the finale of Act 2.",
    darkChoice: "Working with Absolute agents is on-theme.",
    priority: "important",
  },
  {
    id: "a2-tollhouse",
    act: 2,
    title: "Tollhouse / caravan / Rivington prep gear",
    why: "Transition loot before Act 3.",
    priority: "optional",
  },

  // Act 3
  {
    id: "a3-cazador",
    act: 3,
    title: "Cazador’s palace — Ascend Astarion",
    why: "Biggest power spike for Astarion + dark companion ending.",
    darkChoice: "Let him complete the ritual and ascend.",
    tip: "Loot Rhapsody from Cazador. Put it on Astarion or your Hexblade.",
    priority: "critical",
  },
  {
    id: "a3-orphans",
    act: 3,
    title: "Orin / Temple of Bhaal path",
    why: "Dark Urge personal quest + Bhaal power.",
    darkChoice: "Embrace Bhaal. Murder Tribunal → Unholy Assassin gear.",
    priority: "critical",
  },
  {
    id: "a3-gortash",
    act: 3,
    title: "Gortash / Steel Watch",
    why: "Netherstone + disable Steel Watch for easier city fights.",
    tip: "Disable Steel Watch Foundry before big lower city brawls.",
    priority: "critical",
  },
  {
    id: "a3-house-hope",
    act: 3,
    title: "House of Hope (Raphael)",
    why: "Best armor (Helldusk), story payoff, powerful loot.",
    tip: "Steal contract + gear, then fight Raphael prepared.",
    priority: "important",
  },
  {
    id: "a3-murder-tribunal",
    act: 3,
    title: "Murder Tribunal — become Unholy Assassin",
    why: "Bhaalist Armour (piercing vulnerability aura) + Craterflesh Gloves.",
    darkChoice: "Present the victim list, join Bhaal’s assassins.",
    priority: "important",
  },
  {
    id: "a3-netherbrain",
    act: 3,
    title: "Netherbrain finale",
    why: "End the game. Dark endings available depending on choices.",
    darkChoice: "Dominate or destroy per your Urge / Absolute stance.",
    priority: "critical",
  },
  {
    id: "a3-szares",
    act: 3,
    title: "Sorcerous Sundries / Ramazith’s Tower",
    why: "Markoheshkir, Robe of the Weave, high-end caster gear.",
    priority: "important",
  },
];

export const ACT_LABELS: Record<1 | 2 | 3, string> = {
  1: "Act 1 — Wilderness & Absolute",
  2: "Act 2 — Shadow-Cursed Lands",
  3: "Act 3 — Baldur’s Gate",
};
