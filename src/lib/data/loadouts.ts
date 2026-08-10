export type Loadout = {
  id: string;
  act: 1 | 2 | 3;
  member: "tav" | "shadowheart" | "astarion" | "minthara";
  title: string;
  slots: { slot: string; item: string }[];
  note?: string;
};

export const LOADOUTS: Loadout[] = [
  {
    id: "lo-tav-1",
    act: 1,
    member: "tav",
    title: "Act 1 spike",
    slots: [
      { slot: "Weapon", item: "Spellsparkler / Sword of Screams / bound weapon" },
      { slot: "Head", item: "Diadem of Arcane Synergy" },
      { slot: "Cloak", item: "Deathstalker Mantle" },
      { slot: "Boots", item: "Disintegrating Night Walkers" },
      { slot: "Ring", item: "Caustic Band + Strange Conduit" },
      { slot: "Amulet", item: "Misty Step or Broodmother" },
    ],
  },
  {
    id: "lo-tav-2",
    act: 2,
    member: "tav",
    title: "Act 2 DPS",
    slots: [
      { slot: "Ring", item: "Risky Ring (+ keep damage ring)" },
      { slot: "Ring 2", item: "Killer’s Sweetheart for bosses" },
      { slot: "Cloak", item: "Deathstalker still great" },
    ],
    note: "Advantage from Risky = nova turns.",
  },
  {
    id: "lo-tav-3",
    act: 3,
    member: "tav",
    title: "Act 3 endgame",
    slots: [
      { slot: "Armour", item: "Helldusk or Bhaalist (if piercing party)" },
      { slot: "Weapon", item: "Rhapsody offhand / best CHA blade" },
    ],
  },
  {
    id: "lo-sh-1",
    act: 1,
    member: "shadowheart",
    title: "Act 1 control",
    slots: [
      { slot: "Armour", item: "Adamantine medium / shield" },
      { slot: "Focus", item: "Spirit Guardians prep for 5" },
    ],
  },
  {
    id: "lo-sh-2",
    act: 2,
    member: "shadowheart",
    title: "Dark Justiciar",
    slots: [
      { slot: "Weapon", item: "Shar’s Spear of Evening" },
      { slot: "Role", item: "SG walk + Hold Person" },
    ],
  },
  {
    id: "lo-ast-1",
    act: 1,
    member: "astarion",
    title: "Act 1 skills + damage",
    slots: [
      { slot: "Ring", item: "Smuggler’s Ring" },
      { slot: "Weapon", item: "Knife of the Undermountain King" },
      { slot: "Gloves", item: "Gloves of Dexterity" },
      { slot: "Armour", item: "Graceful Cloth optional" },
    ],
  },
  {
    id: "lo-ast-3",
    act: 3,
    member: "astarion",
    title: "Ascended",
    slots: [
      { slot: "Weapon", item: "Rhapsody" },
      { slot: "Play", item: "Multiattack + invis cheese" },
    ],
  },
  {
    id: "lo-min-1",
    act: 1,
    member: "minthara",
    title: "Early Absolute",
    slots: [
      { slot: "Weapon", item: "Everburn / Phalar / heavy hitter" },
      { slot: "Armour", item: "Adamantine" },
      { slot: "Ring", item: "Crusher’s Ring" },
    ],
  },
  {
    id: "lo-min-3",
    act: 3,
    member: "minthara",
    title: "Frontline murder",
    slots: [
      { slot: "Armour", item: "Bhaalist Armour (Aura of Murder)" },
      { slot: "Bow", item: "Titanstring if STR" },
    ],
  },
];
