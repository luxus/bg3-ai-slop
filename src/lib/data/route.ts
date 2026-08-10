/**
 * ONE opinionated path for: Dark Urge Hexblade · Death SH · Thief Astarion ·
 * Lae’zel temp → Minthara · Absolute / dark · Balanced difficulty.
 * Do top → bottom. No forks unless labelled OPTIONAL (safe to skip).
 */

export type RouteStep = {
  id: string;
  /** Chapter for grouping only */
  chapter: string;
  act: 1 | 2 | 3;
  /** Short imperative title */
  do: string;
  /** Exactly what to click / who to talk to */
  detail: string;
  /** OPTIONAL steps can be skipped without breaking the run */
  optional?: boolean;
};

export const ROUTE: RouteStep[] = [
  // ── Prologue ──
  {
    id: "r-01",
    act: 1,
    chapter: "Prologue — Nautiloid",
    do: "Free Shadowheart from the pod",
    detail: "She’s locked in a pod mid-ship. Free her. Keep her in the party.",
  },
  {
    id: "r-02",
    act: 1,
    chapter: "Prologue — Nautiloid",
    do: "Prepare Command on Shadowheart",
    detail:
      "Open her spellbook → prepare Command. (Only needed if you try Drop; if you just kill Zhalk you can skip this.)",
    optional: true,
  },
  {
    id: "r-03",
    act: 1,
    chapter: "Prologue — Nautiloid",
    do: "Get Everburn Blade from Commander Zhalk",
    detail:
      "At the helm: kill the cambion with the flaming sword (or Command: Drop). Loot Everburn Blade. Give it to Lae’zel later.",
  },
  {
    id: "r-04",
    act: 1,
    chapter: "Prologue — Nautiloid",
    do: "Reach the transponder and escape",
    detail: "End the prologue. Don’t over-loot if the timer/cambions pressure you.",
  },

  // ── Crash morning ──
  {
    id: "r-05",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Recruit Astarion on the beach",
    detail: "Hostile start → talk him down. He stays for the whole run.",
  },
  {
    id: "r-06",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Recruit Shadowheart if you didn’t on the ship",
    detail: "She’s near the crash / crypt door if you missed the pod.",
  },
  {
    id: "r-07",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Recruit Lae’zel (temp frontline)",
    detail:
      "Cage or later recruit. She is temporary until Minthara. Give her Everburn.",
  },
  {
    id: "r-08",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Active party now: You + Shadowheart + Astarion + Lae’zel",
    detail: "Park everyone else at camp. Gale is fine to recruit then leave at camp.",
  },
  {
    id: "r-09",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Wake Withers in the Dank Crypt",
    detail:
      "Overgrown Ruins / chapel → crypt → hidden room → open his sarcophagus → answer anything.",
  },
  {
    id: "r-10",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Long rest → talk to Withers at camp",
    detail: "Full long rest (not only partial). Withers appears. Respec unlocked.",
  },
  {
    id: "r-11",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Respec Shadowheart → Death Domain",
    detail:
      "Withers → Cleric → Death. Stats: WIS high, CON next, DEX okay. Cantrips: Toll the Dead, Guidance, Sacred Flame. Prepare: Bless, Healing Word, Command. Cost 100g.",
  },
  {
    id: "r-12",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Long rest until Deathstalker Mantle",
    detail:
      "Do full long rests after fights. Sceleritas / Durge scenes → equip Deathstalker Mantle on you.",
  },
  {
    id: "r-13",
    act: 1,
    chapter: "Act 1 — Beach & camp",
    do: "Level 2 on you: Agonising Blast + Devil’s Sight",
    detail:
      "Level-up has two menus: (1) pick any spell e.g. Armour of Agathys (2) Invocations screen → Agonising Blast + Devil’s Sight. Not on the spell list.",
  },

  // ── Power before raid ──
  {
    id: "r-14",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Grove: shop Arron + Dammon, get Mol’s Ring of Protection",
    detail:
      "Buy potions/scrolls. Steal/return idol path for Mol’s ring. Do NOT raid yet.",
  },
  {
    id: "r-15",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Blighted Village: Shovel scroll + Necromancy book path",
    detail:
      "Apothecary cellar → cast Summon Quasit as Warlock (name Shovel). Optional: Whispering Depths amethyst for the Thay book.",
  },
  {
    id: "r-16",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Waukeen’s Rest: save Florrick → take Spellsparkler",
    detail: "Building on fire. Free Florrick. Choose the staff.",
  },
  {
    id: "r-17",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Risen Road: Smuggler’s Ring (bush skeleton)",
    detail: "Near broken bridge river path — skeleton in bush. Put on Astarion.",
  },
  {
    id: "r-18",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Auntie Ethel: fight lair → take +1 CHA hair",
    detail:
      "Wetlands teahouse → lair. Beat her down → accept hair for +1 Charisma on you.",
  },
  {
    id: "r-19",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Underdark: buy Caustic Band from Derryth",
    detail: "Myconid Colony vendor. On Astarion (or your attacker).",
  },
  {
    id: "r-20",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Underdark: Phalar Aluve (sword in stone)",
    detail: "Pull the sword. Someone casts Shriek in hard fights.",
  },
  {
    id: "r-21",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Grymforge: Nere → Night Walkers boots",
    detail: "Free or kill Nere. Boots go on you or Astarion.",
  },
  {
    id: "r-22",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Adamantine Forge: craft Scale + Shield",
    detail: "Two crafts only. Soft pick: medium armour + shield for frontline.",
  },
  {
    id: "r-23",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Creche: buy Knife + Gloves of Dex from Jeera",
    detail:
      "Bring Lae’zel. Buy BEFORE loud fights. Knife + Gloves of Dexterity for Astarion.",
  },
  {
    id: "r-24",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Creche: Esther Graceful Cloth + Inquisitor loot",
    detail:
      "Trail vendor Graceful Cloth. Kill/loot Inquisitor for Diadem of Arcane Synergy + Strange Conduit Ring (you).",
  },
  {
    id: "r-25",
    act: 1,
    chapter: "Act 1 — Power route (do BEFORE Grove raid)",
    do: "Level check: aim ~5 before raid",
    detail:
      "You: Pact of the Blade at 3, Extra Attack at 5. SH: War Caster at 4, Spirit Guardians at 5. Astarion: Thief at 3, Sharpshooter at 4.",
  },

  // ── Raid lock-in ──
  {
    id: "r-26",
    act: 1,
    chapter: "Act 1 — Absolute lock-in",
    do: "Goblin Camp: get Brand of the Absolute (Gut)",
    detail: "Let Gut brand you. Loot her rooms (Misty Step amulet, Absolute’s Warboard).",
  },
  {
    id: "r-27",
    act: 1,
    chapter: "Act 1 — Absolute lock-in",
    do: "Tell Minthara the Grove location",
    detail: "This starts the raid path. Save first if nervous.",
  },
  {
    id: "r-28",
    act: 1,
    chapter: "Act 1 — Absolute lock-in",
    do: "Raid the Grove — loot Kagha",
    detail:
      "Assault with Absolute. Loot Broodmother’s Revenge from Kagha. Wyll/Karlach leave — expected.",
  },
  {
    id: "r-29",
    act: 1,
    chapter: "Act 1 — Absolute lock-in",
    do: "Goblin celebration at camp",
    detail: "Party scene. Rest. You’re locked dark for this run — good.",
  },

  // ── Act 2 ──
  {
    id: "r-30",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Enter Act 2 with a Moonlantern plan",
    detail:
      "Take Mountain Pass or Underdark exit. Get Kar’niss lantern on Absolute path (or any Moonlantern).",
  },
  {
    id: "r-31",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Last Light: shop everything first",
    detail: "Dammon, Talli, potions, arrows. Buy before any Isobel violence.",
  },
  {
    id: "r-32",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Moonrise: free Minthara",
    detail: "Complete Decide Minthara’s Fate. She joins camp.",
  },
  {
    id: "r-33",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Respec Minthara → Oathbreaker Paladin",
    detail:
      "Withers. STR + CHA. Fighting Style Great Weapon or Defence. She replaces Lae’zel — move big gear to her.",
  },
  {
    id: "r-34",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Party is now permanent: You + SH + Astarion + Minthara",
    detail: "Lae’zel to camp. Done.",
  },
  {
    id: "r-35",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Buy Risky Ring from Araj (Moonrise)",
    detail: "On Astarion or you. Advantage on attacks.",
  },
  {
    id: "r-36",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Gauntlet of Shar with Shadowheart",
    detail:
      "Trials → library Spear of Night → kill Yurgir for Hellfire Hand Crossbow → Self-Same for Killer’s Sweetheart.",
  },
  {
    id: "r-37",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Shadowfell: Shadowheart kills the Nightsong",
    detail: "Let her kill Aylin. Get Shar’s Spear of Evening. Dark Justiciar path.",
  },
  {
    id: "r-38",
    act: 2,
    chapter: "Act 2 — Shadow-Cursed Lands",
    do: "Assault Moonrise → defeat Ketheric",
    detail: "Multi-phase. Short rest between. Take Netherstone. Enter Act 3.",
  },

  // ── Act 3 ──
  {
    id: "r-39",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "Disable Steel Watch Foundry first",
    detail: "Makes the city safer before Gortash.",
  },
  {
    id: "r-40",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "Cazador: ascend Astarion + loot Rhapsody",
    detail: "Szarr Palace ritual — let him ascend. Equip Rhapsody.",
  },
  {
    id: "r-41",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "Murder Tribunal → Unholy Assassin → Bhaalist Armour",
    detail: "Investigate murders → Tribunal → buy Bhaalist Armour for Minthara.",
  },
  {
    id: "r-42",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "House of Hope → kill Raphael → Helldusk Armour",
    detail: "Steal, free Hope, fight Raphael. Helldusk on you or Minthara.",
  },
  {
    id: "r-43",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "Get Gortash + Orin Netherstones",
    detail: "Foundry already down. Orin is Durge climax — lean dark if you want.",
  },
  {
    id: "r-44",
    act: 3,
    chapter: "Act 3 — Baldur’s Gate",
    do: "Final: Netherbrain",
    detail: "Assemble stones, end the game. You did the dark power path.",
  },
];

export const ROUTE_INTRO = {
  title: "Just play top to bottom",
  body: "This is the only list you need. One dark Absolute path. No branching. Mark done when finished. OPTIONAL rows are safe to skip.",
  party:
    "Early: You + Shadowheart + Astarion + Lae’zel → later swap Lae’zel for Minthara.",
  combat:
    "Fight loop forever: SH Spirit Guardians / Hold Person → you Curse + hit → Astarion Sharpshooter → Lae’zel/Minthara smash. Short rest after hard fights.",
};
