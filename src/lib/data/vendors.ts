/**
 * Must-buy / high-value vendor stock for the dark Absolute party.
 * Soft priority: critical > strong > nice. Checked against common
 * Patch 8 shopping lists + items already in this guide.
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
  // ── Act 1 ──
  {
    id: "v-a1-caustic",
    act: 1,
    title: "Caustic Band",
    vendor: "Derryth Bonecloak",
    where: "Underdark — Myconid Colony",
    who: "Astarion (or any attacker)",
    why: "+2 Acid on weapon attacks. Cheap permanent DPS — wear all game.",
    priority: "critical",
    costNote: "Pricey for early Underdark — sell junk / gold before visit.",
    sourceUrl: "https://bg3.wiki/wiki/Caustic_Band",
  },
  {
    id: "v-a1-boots-genial",
    act: 1,
    title: "Boots of Genial Striding",
    vendor: "Derryth Bonecloak",
    where: "Underdark — Myconid Colony",
    who: "Whoever walks difficult terrain (SH SG walker soft)",
    why: "Ignore difficult terrain. Nice QoL, not mandatory.",
    priority: "nice",
    sourceUrl: "https://bg3.wiki/wiki/Boots_of_Genial_Striding",
  },
  {
    id: "v-a1-knife",
    act: 1,
    title: "Knife of the Undermountain King",
    vendor: "A’jak’nir Jeera",
    where: "Githyanki Crèche Y’llek",
    who: "Astarion (crit floor) / dual-wield offhand",
    why: "Reduces number needed to crit. Core crit-stack piece for the run.",
    priority: "critical",
    costNote: "Very expensive — empty inventory into gold first.",
    beforeMiss: "Buy before you anger the whole Creche / leave forever.",
    sourceUrl: "https://bg3.wiki/wiki/Knife_of_the_Undermountain_King",
  },
  {
    id: "v-a1-gloves-dex",
    act: 1,
    title: "Gloves of Dexterity",
    vendor: "A’jak’nir Jeera",
    where: "Githyanki Crèche Y’llek",
    who: "Astarion (or any DEX hungrier than you)",
    why: "Sets DEX to 18. Fixes Astarion attack/AC/skills in one slot.",
    priority: "critical",
    costNote: "Also expensive — prioritize with the Knife.",
    beforeMiss: "Same Jeera stock — shop before hostilities.",
    sourceUrl: "https://bg3.wiki/wiki/Gloves_of_Dexterity",
  },
  {
    id: "v-a1-graceful",
    act: 1,
    title: "The Graceful Cloth",
    vendor: "Lady Esther",
    where: "Rosymorn Monastery Trail (Mountain Pass)",
    who: "Astarion",
    why: "+2 DEX + Cat’s Grace. Strong Act 1 body for rogue (don’t stack mental model with Gloves of Dex as both ‘solve DEX’).",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/The_Graceful_Cloth",
  },
  {
    id: "v-a1-titanstring",
    act: 1,
    title: "Titanstring Bow",
    vendor: "Brem (Zhentarim) after Find the Missing Shipment",
    where: "Zhentarim Hideout (or later Lann Tarv Moonrise)",
    who: "STR archer soft — optional if someone uses bows with STR",
    why: "Adds STR to bow damage. Skip if pure hand-crossbow Astarion.",
    priority: "nice",
    sourceUrl: "https://bg3.wiki/wiki/Titanstring_Bow",
  },
  {
    id: "v-a1-handxb",
    act: 1,
    title: "Hand Crossbow +1 (any)",
    vendor: "Various (Dammon / traders / loot)",
    where: "Grove Dammon, goblin traders, Underdark, etc.",
    who: "Astarion",
    why: "Dual hand crossbows are his engine — buy/loot two +1 as early as possible.",
    priority: "strong",
    beforeMiss: "Shop Grove BEFORE Absolute raid (Dammon leaves / dies path).",
    sourceUrl: "https://bg3.wiki/wiki/Hand_Crossbow_%2B1",
  },
  {
    id: "v-a1-grove-stock",
    act: 1,
    title: "Grove stock dump (potions, dyes, +1 gear)",
    vendor: "Arron, Dammon, Auntie Ethel (before swamp fight)",
    where: "Emerald Grove",
    who: "Party",
    why: "Raid ends or relocates many traders. Buy scrolls (Misty Step, Revivify), health potions, any +1 weapons you still need.",
    priority: "critical",
    beforeMiss: "Before Raid the Emerald Grove.",
    sourceUrl: "https://bg3.wiki/wiki/Emerald_Grove",
  },
  {
    id: "v-a1-omeluum",
    act: 1,
    title: "Ring of Mind-Shielding / Omeluum stock",
    vendor: "Omeluum (after his quest)",
    where: "Myconid Colony",
    who: "Face / anyone",
    why: "Nice psychic defence / utility. Soft.",
    priority: "nice",
    sourceUrl: "https://bg3.wiki/wiki/Omeluum",
  },
  {
    id: "v-a1-spellsparkler",
    act: 1,
    title: "The Spellsparkler (quest reward, not pure shop)",
    vendor: "Counsellor Florrick (reward)",
    where: "Waukeen’s Rest fire rescue",
    who: "Dark Urge (lightning charge staff)",
    why: "Best early caster staff — pick staff reward if offered.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/The_Spellsparkler",
  },

  // ── Act 2 ──
  {
    id: "v-a2-risky",
    act: 2,
    title: "Risky Ring",
    vendor: "Araj Oblodra",
    where: "Moonrise Towers (also reappears Act 3 if missed)",
    who: "Astarion or Tav (attack builds)",
    why: "Advantage on Attack Rolls (disadvantage on saves). Core DPS ring.",
    priority: "critical",
    sourceUrl: "https://bg3.wiki/wiki/Risky_Ring",
  },
  {
    id: "v-a2-last-light",
    act: 2,
    title: "Last Light shopping pass",
    vendor: "Dammon, Quartermaster Talli, Barcus, etc.",
    where: "Last Light Inn",
    who: "Party",
    why: "On dark path you may collapse the Inn (Isobel). Buy Infernal Iron upgrades, arrows, potions, armour FIRST.",
    priority: "critical",
    beforeMiss: "Before killing/capturing Isobel or ending Inn protection.",
    sourceUrl: "https://bg3.wiki/wiki/Last_Light_Inn",
  },
  {
    id: "v-a2-talli",
    act: 2,
    title: "Hat of Fire Acuity / Talli specials (stock varies)",
    vendor: "Quartermaster Talli",
    where: "Last Light Inn",
    who: "Casters soft",
    why: "Check her full stock every level-up restock. Soft high-value mid-act pieces.",
    priority: "nice",
    sourceUrl: "https://bg3.wiki/wiki/Quartermaster_Talli",
  },
  {
    id: "v-a2-lann",
    act: 2,
    title: "Lann Tarv / Roah Moonrise Absolute shops",
    vendor: "Lann Tarv, Roah Moonglow",
    where: "Moonrise Towers",
    who: "Party (Absolute-friendly stock)",
    why: "On Absolute path these vendors stay friendly — potions, arrows, sometimes Titanstring / strong gear.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Lann_Tarv",
  },

  // ── Act 3 ──
  {
    id: "v-a3-bhaalist",
    act: 3,
    title: "Bhaalist Armour",
    vendor: "Echo of Abazigal (Unholy Assassin vendor)",
    where: "Murder Tribunal — after becoming Unholy Assassin",
    who: "Minthara (Aura of Murder for piercing party)",
    why: "Nearby foes vulnerable to piercing — insane with Astarion + piercers.",
    priority: "critical",
    beforeMiss: "Must complete Murder Tribunal / Unholy Assassin path.",
    sourceUrl: "https://bg3.wiki/wiki/Bhaalist_Armour",
  },
  {
    id: "v-a3-sorcerous",
    act: 3,
    title: "Sorcerous Sundries (Rolan / Lorroakan tower shops)",
    vendor: "Tolna Tome-Monger / tower",
    where: "Lower City — Sorcerous Sundries",
    who: "Casters",
    why: "Scrolls, rare gear access, Markoheshkir path is tower loot not pure buy — still shop here.",
    priority: "strong",
    sourceUrl: "https://bg3.wiki/wiki/Sorcerous_Sundries",
  },
  {
    id: "v-a3-dammon",
    act: 3,
    title: "Dammon (if alive in city)",
    vendor: "Dammon",
    where: "Forge of the Nine / Rivington path if he survived",
    who: "Party",
    why: "Infernal iron gear chain. On Absolute raid he may be dead — soft if present.",
    priority: "nice",
    sourceUrl: "https://bg3.wiki/wiki/Dammon",
  },
];

export const VENDOR_TIPS = [
  "Long rest can refresh some trader inventories — recheck after levels.",
  "Level up before big shops (Jeera, Araj) so stock can upgrade.",
  "Steal with Astarion if gold is tight (save first).",
  "Absolute raid / Isobel / Tribunal choices permanently remove some shops — buy first.",
];
