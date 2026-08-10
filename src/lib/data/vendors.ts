/**
 * Must-buy / high-value vendor stock for the dark Absolute party.
 */

export type VendorItem = {
  id: string;
  act: 1 | 2 | 3;
  title: string;
  vendor: string;
  where: string;
  who: string;
  why: string;
  priority: "critical" | "strong" | "nice";
  costNote?: string;
  beforeMiss?: string;
  sourceUrl: string;
};

export const VENDORS: VendorItem[] = [
  {
    id: "v-a1-caustic",
    act: 1,
    title: "Caustic Band",
    vendor: "Derryth",
    where: "Myconid Colony",
    who: "Astarion",
    why: "+2 acid on hits.",
    priority: "critical",
    sourceUrl: "https://bg3.wiki/wiki/Caustic_Band",
  },
  {
    id: "v-a1-knife",
    act: 1,
    title: "Knife of the Undermountain King",
    vendor: "Jeera",
    where: "Creche",
    who: "Astarion",
    why: "Crit floor.",
    priority: "critical",
    sourceUrl: "https://bg3.wiki/wiki/Knife_of_the_Undermountain_King",
  },
  {
    id: "v-a1-gloves-dex",
    act: 1,
    title: "Gloves of Dexterity",
    vendor: "Jeera",
    where: "Creche",
    who: "Astarion",
    why: "DEX 18.",
    priority: "critical",
    sourceUrl: "https://bg3.wiki/wiki/Gloves_of_Dexterity",
  },
  {
    id: "v-a1-grove-stock",
    act: 1,
    title: "Grove shop dump",
    vendor: "Arron / Dammon",
    where: "Emerald Grove",
    who: "Party",
    why: "Before raid.",
    priority: "critical",
    beforeMiss: "Before Absolute raid.",
    sourceUrl: "https://bg3.wiki/wiki/Emerald_Grove",
  },
  {
    id: "v-a2-last-light",
    act: 2,
    title: "Last Light shop pass",
    vendor: "Dammon / Talli",
    where: "Last Light Inn",
    who: "Party",
    why: "Before Isobel collapse.",
    priority: "critical",
    beforeMiss: "Before killing Isobel.",
    sourceUrl: "https://bg3.wiki/wiki/Last_Light_Inn",
  },
  {
    id: "v-a2-risky",
    act: 2,
    title: "Risky Ring",
    vendor: "Araj",
    where: "Moonrise",
    who: "Astarion / Tav",
    why: "Attack advantage.",
    priority: "critical",
    sourceUrl: "https://bg3.wiki/wiki/Risky_Ring",
  },
  {
    id: "v-a2-roah",
    act: 2,
    title: "Drakethroat Glaive",
    vendor: "Roah Moonglow",
    where: "Moonrise",
    who: "Minthara",
    why: "Elemental weapon buff.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Drakethroat_Glaive",
  },
  {
    id: "v-a2-neermisser",
    act: 2,
    title: "Ne’er Misser",
    vendor: "Roah Moonglow",
    where: "Moonrise",
    who: "Astarion",
    why: "Force hand crossbow.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Ne%27er_Misser",
  },
  {
    id: "v-a3-bhaalist",
    act: 3,
    title: "Bhaalist Armour",
    vendor: "Unholy Assassin vendor",
    where: "Murder Tribunal",
    who: "Minthara",
    why: "Piercing vulnerability aura.",
    priority: "critical",
    beforeMiss: "Become Unholy Assassin first.",
    sourceUrl: "https://bg3.wiki/wiki/Bhaalist_Armour",
  },
  {
    id: "v-a3-helsik",
    act: 3,
    title: "Helsik portal fee / stock",
    vendor: "Helsik",
    where: "Devil’s Fee",
    who: "Party",
    why: "Pays for House of Hope access; she also sells ritual bits.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Helsik",
  },
  {
    id: "v-a3-sorcerous",
    act: 3,
    title: "Sorcerous Sundries stock",
    vendor: "Sundries / tower",
    where: "Lower City",
    who: "Casters",
    why: "Scrolls; Markoheshkir is tower loot not pure buy.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Sorcerous_Sundries",
  },
];

export const VENDOR_TIPS = [
  "Level up, then shop.",
  "Act 3: Tribunal vendor after Unholy Assassin; Helsik before Hope.",
  "Loot bosses beat most shops (Helldusk, Rhapsody, Orin blades).",
];
