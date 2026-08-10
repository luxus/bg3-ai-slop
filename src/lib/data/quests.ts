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
    id: "a1-withers",
    act: 1,
    title: "Unlock Withers (Dank Crypt → long rest → camp)",
    why: "Respec Shadowheart to Death Domain, hirelings, revives.",
    tip: "Wake him in the crypt, then Long Rest. If you skip the crypt, he often auto-joins camp later (~level 3 / early Act 1 — soft).",
    priority: "critical",
  },
  {
    id: "a1-gale",
    act: 1,
    title: "Gale (optional camp wizard)",
    why: "Story + backup caster. Not core dark four.",
    tip: "Divination subclass soft. Park at camp after a level or two.",
    priority: "optional",
  },
  {
    id: "a1-grove-raid",
    act: 1,
    title: "Side with Minthara — raid the Emerald Grove",
    why: "Unlocks Minthara and locks in Absolute / dark path.",
    darkChoice:
      "Tell Minthara the Grove location, then assault it. Karlach/Wyll/Halsin paths close.",
    tip: "Loot everything before the raid. Some traders die.",
    priority: "critical",
  },
  {
    id: "a1-minthara",
    act: 1,
    title: "Recruit Minthara after the raid / Moonrise free",
    why: "Fourth party member for dark run.",
    priority: "critical",
  },
  {
    id: "a1-ethel",
    act: 1,
    title: "Auntie Ethel — deal or kill",
    why: "Hair for +1 ability, powerful early fight, unique gear.",
    darkChoice:
      "Take the power deal if it fits your character; or kill her for loot.",
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
  {
    id: "a2-last-light",
    act: 2,
    title: "Last Light Inn (shop before collapse)",
    why: "Gear/vendors; dark path often ends the Inn.",
    darkChoice: "Shop first if you plan to take Isobel / end protection.",
    priority: "important",
  },
  {
    id: "a2-minthara-fate",
    act: 2,
    title: "Free Minthara at Moonrise",
    why: "Full recruit if not locked earlier.",
    priority: "critical",
  },
  {
    id: "a2-nightsong",
    act: 2,
    title: "Kill the Nightsong (Shar path)",
    why: "Dark Justiciar Shadowheart + legendary spear.",
    darkChoice: "Have Shadowheart kill Aylin.",
    priority: "critical",
  },
  {
    id: "a2-ketheric",
    act: 2,
    title: "Defeat Ketheric Thorm",
    why: "Netherstone + Act 2 end.",
    priority: "critical",
  },
  {
    id: "a3-ascend",
    act: 3,
    title: "Ascend Astarion",
    why: "Max dark companion power + Rhapsody loot.",
    darkChoice: "Let him complete the ritual.",
    priority: "critical",
  },
  {
    id: "a3-bhaal",
    act: 3,
    title: "Murder Tribunal / Bhaal path",
    why: "Unholy Assassin + Bhaalist gear.",
    priority: "important",
  },
  {
    id: "a3-hope",
    act: 3,
    title: "House of Hope — Raphael",
    why: "Helldusk Armour and major loot.",
    priority: "important",
  },
  {
    id: "a3-brain",
    act: 3,
    title: "Netherbrain ending",
    why: "Finale.",
    priority: "critical",
  },
];

export const ACT_LABELS: Record<1 | 2 | 3, string> = {
  1: "Act 1",
  2: "Act 2",
  3: "Act 3",
};
