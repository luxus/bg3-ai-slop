export type Missable = {
  id: string;
  act: 1 | 2 | 3;
  title: string;
  before: string;
  detail: string;
  severity: "hard" | "soft";
};

export const MISSABLES: Missable[] = [
  {
    id: "m-everburn",
    act: 1,
    title: "Everburn Blade (Zhalk)",
    before: "Leave the Nautiloid",
    detail: "Only available in the prologue helm fight.",
    severity: "hard",
  },
  {
    id: "m-withers",
    act: 1,
    title: "Withers at camp",
    before: "You need respec / hirelings",
    detail:
      "Best: Dank Crypt → wake him → Long Rest → camp. Soft: if skipped, he often auto-joins around level 3 / early Act 1 progress.",
    severity: "soft",
  },
  {
    id: "m-deathstalker",
    act: 1,
    title: "Deathstalker Mantle",
    before: "Skip early Dark Urge camp events",
    detail: "Sceleritas gift at camp — talk through early Urge scenes + long rests.",
    severity: "hard",
  },
  {
    id: "m-ethel-hair",
    act: 1,
    title: "Auntie Ethel’s Hair (+1 ability)",
    before: "Kill Ethel without the bargain / leave lair",
    detail: "Must fight in the lair and take the hair deal at low HP.",
    severity: "hard",
  },
  {
    id: "m-shovel",
    act: 1,
    title: "Shovel permanent familiar",
    before: "Ignore apothecary cellar scroll",
    detail: "Cast scroll as Warlock and finish dialogue.",
    severity: "soft",
  },
  {
    id: "m-florrick",
    act: 1,
    title: "Spellsparkler (Florrick)",
    before: "Waukeen’s Rest burns out / leave area too long",
    detail: "Rescue Florrick from the fire for staff reward.",
    severity: "hard",
  },
  {
    id: "m-grove-vendors",
    act: 1,
    title: "Grove vendors & Dammon stock",
    before: "Raid the Emerald Grove",
    detail: "Shop first — many NPCs die or leave after Absolute raid.",
    severity: "hard",
  },
  {
    id: "m-minthara-raid",
    act: 1,
    title: "Minthara via raid path",
    before: "Kill Minthara / side with tieflings fully",
    detail: "Tell her Grove location and complete raid (or non-lethal alt).",
    severity: "hard",
  },
  {
    id: "m-wyll-karl",
    act: 1,
    title: "Wyll / Karlach leave permanently",
    before: "Raid Grove (if you wanted them)",
    detail: "Dark run expects this — they leave after Absolute raid.",
    severity: "soft",
  },
  {
    id: "m-adamantine",
    act: 1,
    title: "Adamantine Forge crafts (only 2)",
    before: "Leave Grymforge forever",
    detail: "Two mithral ores max crafts. Plan moulds.",
    severity: "hard",
  },
  {
    id: "m-creche",
    act: 1,
    title: "Creche gear (Diadem, Knife, Gloves)",
    before: "Blow up monastery / skip Mountain Pass",
    detail: "Do Creche before or after raid, but don’t soft-lock yourself out.",
    severity: "soft",
  },
  {
    id: "m-last-light",
    act: 2,
    title: "Last Light shopping",
    before: "Kill / capture Isobel (Inn falls)",
    detail: "Trade with Dammon / quartermaster first on dark path.",
    severity: "hard",
  },
  {
    id: "m-nightsong",
    act: 2,
    title: "Shar’s Spear (kill Nightsong)",
    before: "Free Aylin if you want spear path",
    detail: "Dark Justiciar needs Shadowheart to kill Nightsong.",
    severity: "hard",
  },
  {
    id: "m-sweetheart",
    act: 2,
    title: "Killer’s Sweetheart",
    before: "Skip / cheese Self-Same Trial wrong",
    detail: "Loot where your shadow dies.",
    severity: "soft",
  },
  {
    id: "m-risky",
    act: 2,
    title: "Risky Ring",
    before: "Miss Araj in Moonrise (buyable Act 3 too)",
    detail: "Moonrise Araj — still sold in Act 3 if missed.",
    severity: "soft",
  },
  {
    id: "m-ascend",
    act: 3,
    title: "Astarion Ascension",
    before: "Kill Cazador without ritual choice",
    detail: "Let him ascend for max dark power (your plan).",
    severity: "hard",
  },
  {
    id: "m-bhaal",
    act: 3,
    title: "Bhaalist Armour / Unholy Assassin",
    before: "Fail Murder Tribunal path",
    detail: "Become Unholy Assassin for vendor access.",
    severity: "soft",
  },
];
