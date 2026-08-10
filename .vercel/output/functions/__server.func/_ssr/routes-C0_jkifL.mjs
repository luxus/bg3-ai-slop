import { o as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, n as CheckboxIndicator, p as require_react, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as createServerFn, o as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { I as string, N as object } from "../_libs/@better-auth/core+[...].mjs";
import { i as signOut, r as signIn, t as authClient } from "./client-I2crl4SF.mjs";
import { t as GROK_PROVIDERS } from "./server-DiULw8zH.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-LLqxmOwm.mjs";
import { t as authMiddleware } from "./middleware-9Lu3hghq.mjs";
import { _ as Cloud, a as Sparkles, c as ScrollText, d as LogOut, f as LoaderCircle, g as Download, h as ExternalLink, i as Swords, l as Map$1, m as Gem, n as Upload, o as Skull, p as GraduationCap, r as TriangleAlert, s as Search, t as User, u as MapPin, v as Check, y as BadgeCheck } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0_jkifL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-11 w-full items-center justify-start gap-1 overflow-x-auto rounded-[var(--radius-md)] bg-[var(--color-surface)] p-1 border border-[var(--color-border)]", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex min-h-9 flex-1 items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors duration-150 data-[state=active]:bg-[var(--color-elevated)] data-[state=active]:text-[var(--color-fg)] data-[state=active]:shadow-sm hover:text-[var(--color-fg)]", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-4 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var QUESTS = [
	{
		id: "a1-shadowheart",
		act: 1,
		title: "Free Shadowheart on the Nautiloid / beach",
		why: "Core companion for Death Domain control and Shar story.",
		priority: "critical"
	},
	{
		id: "a1-astarion",
		act: 1,
		title: "Recruit Astarion at the crash site",
		why: "Skills + Ascended power later. Perfect for dark runs.",
		priority: "critical"
	},
	{
		id: "a1-withers",
		act: 1,
		title: "Unlock Withers (Dank Crypt → long rest → camp)",
		why: "Respec Shadowheart to Death Domain, hirelings, revives.",
		tip: "Wake him in the crypt, then Long Rest. If you skip the crypt, he often auto-joins camp later (~level 3 / early Act 1 — soft).",
		priority: "critical"
	},
	{
		id: "a1-gale",
		act: 1,
		title: "Gale (optional camp wizard)",
		why: "Story + backup caster. Not core dark four.",
		tip: "Divination subclass soft. Park at camp after a level or two.",
		priority: "optional"
	},
	{
		id: "a1-grove-raid",
		act: 1,
		title: "Side with Minthara — raid the Emerald Grove",
		why: "Unlocks Minthara and locks in Absolute / dark path.",
		darkChoice: "Tell Minthara the Grove location, then assault it. Karlach/Wyll/Halsin paths close.",
		tip: "Loot everything before the raid. Some traders die.",
		priority: "critical"
	},
	{
		id: "a1-minthara",
		act: 1,
		title: "Recruit Minthara after the raid / Moonrise free",
		why: "Fourth party member for dark run.",
		priority: "critical"
	},
	{
		id: "a1-ethel",
		act: 1,
		title: "Auntie Ethel — deal or kill",
		why: "Hair for +1 ability, powerful early fight, unique gear.",
		darkChoice: "Take the power deal if it fits your character; or kill her for loot.",
		priority: "important"
	},
	{
		id: "a1-underdark",
		act: 1,
		title: "Underdark route (Grymforge / Nere)",
		why: "Strong Act 1 gear, Adamantine forge armor/weapons.",
		tip: "Forge Adamantine Shield or Scale — huge AC spike.",
		priority: "important"
	},
	{
		id: "a1-creche",
		act: 1,
		title: "Githyanki Crèche (optional but strong)",
		why: "Great gear (Knife of the Undermountain King, etc.) and story.",
		priority: "important"
	},
	{
		id: "a1-goblin-leaders",
		act: 1,
		title: "Goblin camp leaders / Absolute artifacts",
		why: "Story + loot. On Absolute path you align instead of killing all.",
		darkChoice: "Cooperate with Absolute leadership.",
		priority: "important"
	},
	{
		id: "a2-last-light",
		act: 2,
		title: "Last Light Inn (shop before collapse)",
		why: "Gear/vendors; dark path often ends the Inn.",
		darkChoice: "Shop first if you plan to take Isobel / end protection.",
		priority: "important"
	},
	{
		id: "a2-minthara-fate",
		act: 2,
		title: "Free Minthara at Moonrise",
		why: "Full recruit if not locked earlier.",
		priority: "critical"
	},
	{
		id: "a2-nightsong",
		act: 2,
		title: "Kill the Nightsong (Shar path)",
		why: "Dark Justiciar Shadowheart + legendary spear.",
		darkChoice: "Have Shadowheart kill Aylin.",
		priority: "critical"
	},
	{
		id: "a2-ketheric",
		act: 2,
		title: "Defeat Ketheric Thorm",
		why: "Netherstone + Act 2 end.",
		priority: "critical"
	},
	{
		id: "a3-ascend",
		act: 3,
		title: "Ascend Astarion",
		why: "Max dark companion power + Rhapsody loot.",
		darkChoice: "Let him complete the ritual.",
		priority: "critical"
	},
	{
		id: "a3-bhaal",
		act: 3,
		title: "Murder Tribunal / Bhaal path",
		why: "Unholy Assassin + Bhaalist gear.",
		priority: "important"
	},
	{
		id: "a3-hope",
		act: 3,
		title: "House of Hope — Raphael",
		why: "Helldusk Armour and major loot.",
		priority: "important"
	},
	{
		id: "a3-brain",
		act: 3,
		title: "Netherbrain ending",
		why: "Finale.",
		priority: "critical"
	}
];
var ACT_LABELS = {
	1: "Act 1",
	2: "Act 2",
	3: "Act 3"
};
var WHO_LABELS = {
	tav: "Dark Urge",
	shadowheart: "Shadowheart",
	astarion: "Astarion",
	minthara: "Minthara"
};
var ITEMS = [
	{
		id: "i-everburn",
		act: 1,
		name: "Everburn Blade",
		slot: "Weapon",
		who: ["minthara"],
		where: "Nautiloid helm — kill Zhalk & loot (easy). Optional: SH prepare Command → Command: Drop",
		why: "First magic greatsword. Command is NOT required — kill works. If using Drop, prepare Command on Shadowheart first (not default).",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Everburn_Blade"
	},
	{
		id: "i-deathstalker",
		act: 1,
		name: "Deathstalker Mantle",
		slot: "Cloak",
		who: ["tav"],
		where: "Camp — Sceleritas Fel (Dark Urge gift)",
		why: "Kill → Invisible 2 turns. Signature DURGE cloak.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle"
	},
	{
		id: "i-smuggler",
		act: 1,
		name: "Smuggler’s Ring",
		slot: "Ring",
		who: ["astarion"],
		where: "Risen Road river bush skeleton (~X:58 Y:516)",
		why: "+2 Stealth & Sleight of Hand. Best early thief ring.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Smuggler%27s_Ring"
	},
	{
		id: "i-spellsparkler",
		act: 1,
		name: "The Spellsparkler",
		slot: "Weapon",
		who: ["tav"],
		where: "Florrick reward at Waukeen’s Rest",
		why: "Lightning charges on spell/cantrip damage.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/The_Spellsparkler"
	},
	{
		id: "i-phalar",
		act: 1,
		name: "Phalar Aluve",
		slot: "Weapon",
		who: [
			"minthara",
			"tav",
			"shadowheart"
		],
		where: "Underdark rock (~X:116 Y:-192)",
		why: "Shriek = party damage amp every hard fight.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Phalar_Aluve"
	},
	{
		id: "i-caustic",
		act: 1,
		name: "Caustic Band",
		slot: "Ring",
		who: ["astarion", "tav"],
		where: "Myconid Colony — Derryth Bonecloak",
		why: "+2 acid on weapon hits.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Caustic_Band"
	},
	{
		id: "i-misty",
		act: 1,
		name: "Amulet of Misty Step",
		slot: "Amulet",
		who: [
			"tav",
			"astarion",
			"minthara"
		],
		where: "Gut’s chambers — chest behind Polma",
		why: "Misty Step every short rest.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Amulet_of_Misty_Step"
	},
	{
		id: "i-crusher",
		act: 1,
		name: "Crusher’s Ring",
		slot: "Ring",
		who: ["minthara", "shadowheart"],
		where: "Goblin Camp — Crusher",
		why: "+3 m movement.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Crusher"
	},
	{
		id: "i-broodmother",
		act: 1,
		name: "Broodmother’s Revenge",
		slot: "Amulet",
		who: ["minthara", "tav"],
		where: "Kagha — loot on raid/kill",
		why: "Heal → +1d6 poison on weapon.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Broodmother%27s_Revenge"
	},
	{
		id: "i-adamantine",
		act: 1,
		name: "Adamantine Scale / Shield / weapon",
		slot: "Armour",
		who: ["minthara", "shadowheart"],
		where: "Adamantine Forge — 2 ores + moulds",
		why: "Crit immunity on armour. Craft 2 only.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Adamantine_Forge_(location)"
	},
	{
		id: "i-nightwalkers",
		act: 1,
		name: "Disintegrating Night Walkers",
		slot: "Boots",
		who: ["tav", "astarion"],
		where: "Grymforge — Nere",
		why: "Free Misty Step + surface immunities.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Disintegrating_Night_Walkers"
	},
	{
		id: "i-sword-screams",
		act: 1,
		name: "Sword of Screams",
		slot: "Weapon",
		who: ["tav"],
		where: "Nere",
		why: "Rapier +1d4 psychic.",
		priority: "nice",
		sourceUrl: "https://bg3.wiki/wiki/Sword_of_Screams"
	},
	{
		id: "i-knife",
		act: 1,
		name: "Knife of the Undermountain King",
		slot: "Weapon",
		who: ["astarion", "tav"],
		where: "Creche — Jeera",
		why: "Wider crit range.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Knife_of_the_Undermountain_King"
	},
	{
		id: "i-diadem",
		act: 1,
		name: "Diadem of Arcane Synergy",
		slot: "Head",
		who: ["tav"],
		where: "Creche Inquisitor — Ardent Jhe’rezath",
		why: "Condition → spell mod on weapon damage.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Diadem_of_Arcane_Synergy"
	},
	{
		id: "i-strange",
		act: 1,
		name: "Strange Conduit Ring",
		slot: "Ring",
		who: ["tav", "astarion"],
		where: "Creche Inquisitor chest",
		why: "Concentrating: +1d4 psychic on weapons.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Strange_Conduit_Ring"
	},
	{
		id: "i-gloves-dex",
		act: 1,
		name: "Gloves of Dexterity",
		slot: "Gloves",
		who: ["astarion"],
		where: "Creche — Jeera",
		why: "Sets DEX to 18.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Gloves_of_Dexterity"
	},
	{
		id: "i-graceful",
		act: 1,
		name: "The Graceful Cloth",
		slot: "Armour",
		who: ["astarion"],
		where: "Lady Esther — Rosymorn trail",
		why: "+2 DEX clothing.",
		priority: "nice",
		sourceUrl: "https://bg3.wiki/wiki/The_Graceful_Cloth"
	},
	{
		id: "i-titanstring",
		act: 1,
		name: "Titanstring Bow",
		slot: "Weapon",
		who: ["minthara"],
		where: "Zhentarim Brem or Moonrise Lann Tarv",
		why: "STR mod on bow damage.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Titanstring_Bow"
	},
	{
		id: "i-lathander",
		act: 1,
		name: "Blood of Lathander",
		slot: "Weapon",
		who: ["shadowheart", "minthara"],
		where: "Creche Secret Chamber",
		why: "Legendary mace. Watch trap.",
		priority: "nice",
		sourceUrl: "https://bg3.wiki/wiki/The_Blood_of_Lathander"
	},
	{
		id: "i-ethel-hair",
		act: 1,
		name: "Auntie Ethel’s Hair",
		slot: "Consumable",
		who: ["tav"],
		where: "Hag lair bargain",
		why: "Permanent +1 ability (CHA).",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Auntie_Ethel%27s_Hair"
	},
	{
		id: "i-risky",
		act: 2,
		name: "Risky Ring",
		slot: "Ring",
		who: [
			"tav",
			"astarion",
			"minthara"
		],
		where: "Moonrise — Araj",
		why: "Advantage on attacks.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Risky_Ring"
	},
	{
		id: "i-sweetheart",
		act: 2,
		name: "Killer’s Sweetheart",
		slot: "Ring",
		who: ["tav", "astarion"],
		where: "Gauntlet Self-Same Trial",
		why: "After kill: next attack crit (1/LR).",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Killer%27s_Sweetheart"
	},
	{
		id: "i-callous",
		act: 2,
		name: "Callous Glow Ring",
		slot: "Ring",
		who: ["astarion", "tav"],
		where: "Gauntlet Balthazar vault",
		why: "+2 radiant vs illuminated.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Callous_Glow_Ring"
	},
	{
		id: "i-spear-evening",
		act: 2,
		name: "Shar’s Spear of Evening",
		slot: "Weapon",
		who: ["shadowheart"],
		where: "Kill Nightsong",
		why: "Dark Justiciar legendary.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Shar%27s_Spear_of_Evening"
	},
	{
		id: "i-circlet-hunt",
		act: 2,
		name: "Circlet of Hunting",
		slot: "Head",
		who: ["astarion", "tav"],
		where: "Araj (Moonrise)",
		why: "+1d4 attack vs marked targets.",
		priority: "nice",
		sourceUrl: "https://bg3.wiki/wiki/Circlet_of_Hunting"
	},
	{
		id: "i-rhapsody",
		act: 3,
		name: "Rhapsody",
		slot: "Weapon",
		who: ["astarion", "tav"],
		where: "Cazador",
		why: "Kill stacks to +3 attack/damage/DC.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find"
	},
	{
		id: "i-bhaalist",
		act: 3,
		name: "Bhaalist Armour",
		slot: "Armour",
		who: ["minthara", "tav"],
		where: "Murder Tribunal vendor",
		why: "Aura of Murder — piercing vulnerability.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find"
	},
	{
		id: "i-helldusk",
		act: 3,
		name: "Helldusk Armour",
		slot: "Armour",
		who: ["tav", "minthara"],
		where: "Raphael — House of Hope",
		why: "Top armour; no heavy proficiency needed.",
		priority: "must",
		sourceUrl: "https://bg3.wiki/wiki/Helldusk_Armour"
	},
	{
		id: "i-marko",
		act: 3,
		name: "Markoheshkir",
		slot: "Weapon",
		who: ["shadowheart", "tav"],
		where: "Ramazith’s Tower",
		why: "Free cast + elemental favour.",
		priority: "strong",
		sourceUrl: "https://bg3.wiki/wiki/Markoheshkir"
	}
];
var WALKTHROUGH = [
	{
		id: "w-a1-nautiloid-us",
		act: 1,
		chapter: "Nautiloid (Prologue)",
		type: "quest",
		title: "Free Us (intellect devourer) — optional helper",
		detail: "Second room: free Us from Myrnath’s skull. Temporary ally for the ship fight.",
		source: "bg3.wiki — Us",
		sourceUrl: "https://bg3.wiki/wiki/Us",
		confidence: "verified"
	},
	{
		id: "w-a1-nautiloid-sh",
		act: 1,
		chapter: "Nautiloid (Prologue)",
		type: "quest",
		title: "Free Shadowheart — prepare Command before the helm",
		detail: "1) Free her from the pod. 2) Open her spellbook / prepared spells. 3) Prepare Command (Cleric 1st-level) — she often does NOT have it ready by default. You need this only if you want Command: Drop on Zhalk. Skip if you will just kill him for the sword.",
		who: "Shadowheart",
		source: "bg3.wiki — Escape the Nautiloid / Command",
		sourceUrl: "https://bg3.wiki/wiki/Escape_the_Nautiloid",
		confidence: "verified"
	},
	{
		id: "w-a1-everburn",
		act: 1,
		chapter: "Nautiloid (Prologue)",
		type: "item",
		title: "Everburn Blade — two ways",
		detail: "EASY (no Command): Join the helm fight, kill Commander Zhalk, loot Everburn Blade. Use restoration pods. Don’t stall — more cambions spawn.\n\nOPTIONAL (Command Drop): SH must have Command prepared. Command → Drop on Zhalk. He may save — kill works fine.\n\nGive Everburn to Lae’zel early (STR greatsword). You are CHA Hexblade — swap her off later.",
		who: "Lae’zel (temp) early",
		darkNote: "First magic weapon — worth grabbing either way.",
		source: "bg3.wiki — Everburn Blade",
		sourceUrl: "https://bg3.wiki/wiki/Everburn_Blade",
		confidence: "verified"
	},
	{
		id: "w-a1-laezel",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "order",
		title: "Lae’zel — temp frontline (not final party)",
		detail: "Keep her in the active party through early Act 1 / Creche if you want. Roles: heavy melee, Everburn, Gith gear later.\n\nFinal dark four: You (Hexblade) + Shadowheart + Astarion + Minthara.\nWhen Minthara is recruited: move Lae’zel to camp (or hireling if you dropped her early).\nSoft: Battlemaster Fighter respec if you want her stronger while she lasts. Don’t build the whole run around her.",
		who: "Lae’zel",
		darkNote: "Expected bench once Minthara is in.",
		source: "bg3.wiki — Lae'zel",
		sourceUrl: "https://bg3.wiki/wiki/Lae%27zel",
		confidence: "soft"
	},
	{
		id: "w-a1-astarion",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "quest",
		title: "Recruit Astarion",
		detail: "Crash beach. Keep for Ascension — permanent dark core.",
		who: "Astarion",
		source: "bg3.wiki — Astarion",
		sourceUrl: "https://bg3.wiki/wiki/Astarion",
		confidence: "verified"
	},
	{
		id: "w-a1-gale",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "quest",
		title: "Gale (optional) — park at camp",
		detail: "If you pick him up: level a bit, Wizard Divination (or Evocation). Not in the dark core four — camp backup only.",
		who: "Gale",
		darkNote: "Core: you / SH / Astarion / Minthara (later). Lae’zel fills the 4th slot until then.",
		source: "bg3.wiki — Gale",
		sourceUrl: "https://bg3.wiki/wiki/Gale",
		confidence: "soft"
	},
	{
		id: "w-a1-withers-crypt",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "respec",
		title: "Withers — wake him in Dank Crypt (recommended)",
		detail: "Overgrown Ruins / chapel → Dank Crypt → hidden room → Withers’ sarcophagus. Answer (any). Leave + Long Rest → he is at camp.\n\nServices: respec (100g), hirelings, revive.",
		source: "bg3.wiki — Withers / Explore the Ruins",
		sourceUrl: "https://bg3.wiki/wiki/Withers",
		confidence: "verified"
	},
	{
		id: "w-a1-withers-camp",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "story",
		title: "Withers at camp (long rest) — or auto-join later",
		detail: "After crypt: Long Rest → Withers at camp.\n\nIf you skip crypt: he can auto-join later (~level 3 / early Act 1 — soft). Respec SH after he’s there.",
		darkNote: "First job: respec Shadowheart → Death Domain.",
		source: "bg3.wiki — Withers / Overgrown Ruins",
		sourceUrl: "https://bg3.wiki/wiki/Overgrown_Ruins",
		confidence: "soft"
	},
	{
		id: "w-a1-respec-sh",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "respec",
		title: "Respec Shadowheart → Death Domain (at Withers)",
		detail: "Only after Withers is at camp. 100 gold. Cleric → Death Domain. WIS primary, CON second. War Caster at 4.",
		who: "Shadowheart",
		source: "bg3.wiki — Death Domain / Withers",
		sourceUrl: "https://bg3.wiki/wiki/Death_Domain",
		confidence: "soft"
	},
	{
		id: "w-a1-deathstalker",
		act: 1,
		chapter: "Crash & camp unlocks",
		type: "item",
		title: "Deathstalker Mantle (Dark Urge cloak)",
		detail: "Sceleritas Fel at camp after early Urge beats / long rests. Kill → Invisible 2 turns.",
		who: "Dark Urge",
		darkNote: "Unique DURGE item — don’t miss camp talks.",
		source: "bg3.wiki — The Deathstalker Mantle",
		sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle",
		confidence: "verified"
	},
	{
		id: "w-a1-shovel",
		act: 1,
		chapter: "Blighted Village",
		type: "item",
		title: "Shovel the quasit (permanent familiar)",
		detail: "Apothecary cellar → Scroll of Summon Quasit. Cast as Warlock, keep name Shovel → permanent short-rest familiar.",
		who: "Dark Urge",
		source: "bg3.wiki — Shovel",
		sourceUrl: "https://bg3.wiki/wiki/Shovel_(familiar)",
		confidence: "verified"
	},
	{
		id: "w-a1-smuggler",
		act: 1,
		chapter: "Risen Road",
		type: "item",
		title: "Smuggler’s Ring (hidden skeleton)",
		detail: "River path bush near broken bridge (~X:58 Y:516).",
		who: "Astarion",
		source: "bg3.wiki — Smuggler's Ring",
		sourceUrl: "https://bg3.wiki/wiki/Smuggler%27s_Ring",
		confidence: "verified"
	},
	{
		id: "w-a1-spellsparkler",
		act: 1,
		chapter: "Risen Road",
		type: "item",
		title: "The Spellsparkler (Florrick reward)",
		detail: "Save Florrick from burning Waukeen’s Rest — pick the staff.",
		who: "Dark Urge",
		source: "bg3.wiki — The Spellsparkler",
		sourceUrl: "https://bg3.wiki/wiki/The_Spellsparkler",
		confidence: "verified"
	},
	{
		id: "w-a1-ethel",
		act: 1,
		chapter: "Sunlit Wetlands",
		type: "item",
		title: "Auntie Ethel’s Hair — permanent +1 CHA",
		detail: "Fight in her lair. At low HP take the bargain. Permanent +1 ability (CHA for you).",
		who: "Dark Urge",
		source: "bg3.wiki — Auntie Ethel's Hair",
		sourceUrl: "https://bg3.wiki/wiki/Auntie_Ethel%27s_Hair",
		confidence: "verified"
	},
	{
		id: "w-a1-grove-shop",
		act: 1,
		chapter: "Emerald Grove (before raid)",
		type: "order",
		title: "Trade at the Grove before you raid",
		detail: "Buy supplies first — vendors die or leave after Absolute raid.",
		darkNote: "Loot first, raid second.",
		source: "bg3.wiki — Raid the Emerald Grove",
		sourceUrl: "https://bg3.wiki/wiki/Raid_the_Emerald_Grove",
		confidence: "soft"
	},
	{
		id: "w-a1-crusher",
		act: 1,
		chapter: "Goblin Camp",
		type: "item",
		title: "Crusher’s Ring",
		detail: "Steal or kill Crusher — +3 m move.",
		who: "Melee (Lae’zel / later Minthara)",
		source: "bg3.wiki — Crusher",
		sourceUrl: "https://bg3.wiki/wiki/Crusher",
		confidence: "verified"
	},
	{
		id: "w-a1-misty",
		act: 1,
		chapter: "Goblin Camp",
		type: "item",
		title: "Amulet of Misty Step (Gut’s room)",
		detail: "Defiled Temple — chest behind Polma.",
		source: "bg3.wiki — Amulet of Misty Step",
		sourceUrl: "https://bg3.wiki/wiki/Amulet_of_Misty_Step",
		confidence: "verified"
	},
	{
		id: "w-a1-warboard",
		act: 1,
		chapter: "Goblin Camp",
		type: "item",
		title: "Absolute’s Warboard (Gut)",
		detail: "Loot True Soul Gut. Extra saves if branded.",
		darkNote: "On-theme Absolute loot.",
		source: "bg3.wiki — Absolute's Warboard",
		sourceUrl: "https://bg3.wiki/wiki/Absolute%27s_Warboard",
		confidence: "verified"
	},
	{
		id: "w-a1-minthara-plan",
		act: 1,
		chapter: "Goblin Camp",
		type: "quest",
		title: "Tell Minthara the Grove location",
		detail: "Starts Raid the Emerald Grove.",
		who: "Minthara",
		darkNote: "Intended dark recruitment — Lae’zel still fills melee until Minthara is free.",
		source: "bg3.wiki — Raid the Emerald Grove",
		sourceUrl: "https://bg3.wiki/wiki/Raid_the_Emerald_Grove",
		confidence: "verified"
	},
	{
		id: "w-a1-order-explore",
		act: 1,
		chapter: "Power detour (before raid)",
		type: "order",
		title: "Do Underdark + Creche before raid long rest",
		detail: "Soft order — massive gear spike first. Lae’zel is excellent at Creche; keep her for that detour.",
		source: "bg3.wiki — Act One",
		sourceUrl: "https://bg3.wiki/wiki/Act_One",
		confidence: "soft"
	},
	{
		id: "w-a1-phalar",
		act: 1,
		chapter: "Underdark",
		type: "item",
		title: "Phalar Aluve",
		detail: "Sword in stone (~X:116 Y:-192). Shriek every hard fight.",
		source: "bg3.wiki — Phalar Aluve",
		sourceUrl: "https://bg3.wiki/wiki/Phalar_Aluve",
		confidence: "verified"
	},
	{
		id: "w-a1-caustic",
		act: 1,
		chapter: "Underdark",
		type: "item",
		title: "Caustic Band",
		detail: "Buy from Derryth in Myconid Colony.",
		who: "Astarion / Tav",
		source: "bg3.wiki — Caustic Band",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find",
		confidence: "verified"
	},
	{
		id: "w-a1-adamantine",
		act: 1,
		chapter: "Grymforge",
		type: "item",
		title: "Adamantine Forge — craft 2",
		detail: "Scale/Splint + shield or weapon. Crit immunity armour. Soft: one piece on Lae’zel while she’s frontline, then hand to Minthara.",
		source: "bg3.wiki — Adamantine Forge",
		sourceUrl: "https://bg3.wiki/wiki/Adamantine_Forge_(location)",
		confidence: "verified"
	},
	{
		id: "w-a1-nere",
		act: 1,
		chapter: "Grymforge",
		type: "item",
		title: "Nere loot — Night Walkers + Sword of Screams",
		detail: "Free or kill Nere. Boots = best Act 1 footwear; rapier has psychic damage.",
		who: "Tav / Astarion",
		source: "bg3.wiki — Disintegrating Night Walkers",
		sourceUrl: "https://bg3.wiki/wiki/Disintegrating_Night_Walkers",
		confidence: "verified"
	},
	{
		id: "w-a1-thrinn",
		act: 1,
		chapter: "Grymforge",
		type: "item",
		title: "Ring of Absolute Force (Thrinn)",
		detail: "Sergeant Thrinn — branded Thunderwave ring.",
		source: "bg3.wiki — Ring of Absolute Force",
		sourceUrl: "https://bg3.wiki/wiki/Ring_of_Absolute_Force",
		confidence: "verified"
	},
	{
		id: "w-a1-creche-gear",
		act: 1,
		chapter: "Mountain Pass / Crèche",
		type: "item",
		title: "Creche shopping + Inquisitor loot",
		detail: "Bring Lae’zel for story/gear access. Jeera: Knife of the Undermountain King, Gloves of Dexterity. Inquisitor: Diadem of Arcane Synergy, Strange Conduit Ring, Necklace of Elemental Augmentation.",
		who: "Tav / Astarion / Lae’zel (temp)",
		source: "bg3.wiki — Guide:Where To Find",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find",
		confidence: "verified"
	},
	{
		id: "w-a1-esther",
		act: 1,
		chapter: "Mountain Pass / Crèche",
		type: "item",
		title: "Graceful Cloth (Lady Esther)",
		detail: "Rosymorn trail vendor — +2 DEX clothing for Astarion.",
		who: "Astarion",
		source: "bg3.wiki — The Graceful Cloth",
		sourceUrl: "https://bg3.wiki/wiki/The_Graceful_Cloth",
		confidence: "verified"
	},
	{
		id: "w-a1-raid",
		act: 1,
		chapter: "Emerald Grove raid",
		type: "quest",
		title: "Raid the Emerald Grove with Minthara",
		detail: "Absolute path. Wyll/Karlach leave. Loot Kagha for Broodmother’s Revenge. Shop Grove first.",
		who: "Minthara",
		darkNote: "Locks dark companion path. Lae’zel stays usable until Minthara is in the party fully.",
		source: "bg3.wiki — Raid the Emerald Grove",
		sourceUrl: "https://bg3.wiki/wiki/Raid_the_Emerald_Grove",
		confidence: "verified"
	},
	{
		id: "w-a1-goblin-party",
		act: 1,
		chapter: "Emerald Grove raid",
		type: "story",
		title: "Goblin celebration",
		detail: "Camp feast after successful Absolute raid.",
		source: "bg3.wiki — Goblin Celebration",
		sourceUrl: "https://bg3.wiki/wiki/Goblin_Celebration",
		confidence: "verified"
	},
	{
		id: "w-a1-bench-laezel",
		act: 1,
		chapter: "Emerald Grove raid",
		type: "order",
		title: "Bench Lae’zel when Minthara is ready",
		detail: "Active party becomes: Dark Urge + Shadowheart + Astarion + Minthara. Lae’zel → camp. Re-equip Adamantine / big weapons onto Minthara.",
		who: "Lae’zel → camp",
		source: "bg3.wiki — Minthara",
		sourceUrl: "https://bg3.wiki/wiki/Minthara",
		confidence: "soft"
	},
	{
		id: "w-a2-enter",
		act: 2,
		chapter: "Shadow-Cursed Lands",
		type: "order",
		title: "Enter Act 2 (Pass or Underdark)",
		detail: "Plan Moonlantern / light for deep curse.",
		source: "bg3.wiki — Act Two",
		sourceUrl: "https://bg3.wiki/wiki/Act_Two",
		confidence: "soft"
	},
	{
		id: "w-a2-last-light-loot",
		act: 2,
		chapter: "Last Light Inn",
		type: "order",
		title: "Loot Last Light before collapsing it",
		detail: "If you kill/capture Isobel, protection ends — shop first.",
		darkNote: "Dark path often ends the Inn.",
		source: "bg3.wiki — Isobel",
		sourceUrl: "https://bg3.wiki/wiki/Isobel",
		confidence: "soft"
	},
	{
		id: "w-a2-minthara-fate",
		act: 2,
		chapter: "Moonrise Towers",
		type: "quest",
		title: "Free Minthara — recruit",
		detail: "Decide Minthara’s Fate → camp. Respec her. Bench Lae’zel if still in active four.",
		who: "Minthara",
		source: "bg3.wiki — Decide Minthara's Fate",
		sourceUrl: "https://bg3.wiki/wiki/Decide_Minthara%27s_Fate",
		confidence: "verified"
	},
	{
		id: "w-a2-risky",
		act: 2,
		chapter: "Moonrise Towers",
		type: "item",
		title: "Risky Ring (Araj)",
		detail: "Advantage on attacks. Core DPS ring.",
		source: "bg3.wiki — Risky Ring",
		sourceUrl: "https://bg3.wiki/wiki/Risky_Ring",
		confidence: "verified"
	},
	{
		id: "w-a2-respec-min",
		act: 2,
		chapter: "Moonrise Towers",
		type: "respec",
		title: "Respec Minthara — Giant Barb or Oathbreaker",
		detail: "After recruit, Withers at camp.",
		who: "Minthara",
		source: "bg3.wiki — Minthara",
		sourceUrl: "https://bg3.wiki/wiki/Minthara",
		confidence: "soft"
	},
	{
		id: "w-a2-gauntlet",
		act: 2,
		chapter: "Gauntlet of Shar",
		type: "quest",
		title: "Gauntlet trials + Spear of Night",
		detail: "Shadowheart in party. Library spear before Shadowfell.",
		who: "Shadowheart",
		source: "bg3.wiki — Gauntlet of Shar",
		sourceUrl: "https://bg3.wiki/wiki/Gauntlet_of_Shar",
		confidence: "verified"
	},
	{
		id: "w-a2-sweetheart",
		act: 2,
		chapter: "Gauntlet of Shar",
		type: "item",
		title: "Killer’s Sweetheart",
		detail: "Self-Same Trial — drop on your shadow’s corpse.",
		source: "bg3.wiki — Killer's Sweetheart",
		sourceUrl: "https://bg3.wiki/wiki/Killer%27s_Sweetheart",
		confidence: "verified"
	},
	{
		id: "w-a2-callous",
		act: 2,
		chapter: "Gauntlet of Shar",
		type: "item",
		title: "Callous Glow Ring",
		detail: "Balthazar vault opulent chest.",
		source: "bg3.wiki — Guide:Where To Find",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find",
		confidence: "verified"
	},
	{
		id: "w-a2-nightsong",
		act: 2,
		chapter: "Shadowfell",
		type: "quest",
		title: "Kill the Nightsong",
		detail: "Shadowheart present. Dark Justiciar path.",
		who: "Shadowheart",
		darkNote: "Core dark SH beat.",
		source: "bg3.wiki — Shar's Spear of Evening",
		sourceUrl: "https://bg3.wiki/wiki/Shar%27s_Spear_of_Evening",
		confidence: "verified"
	},
	{
		id: "w-a2-spear",
		act: 2,
		chapter: "Shadowfell",
		type: "item",
		title: "Shar’s Spear of Evening",
		detail: "Reward after Aylin dies.",
		who: "Shadowheart",
		source: "bg3.wiki — Shar's Spear of Evening",
		sourceUrl: "https://bg3.wiki/wiki/Shar%27s_Spear_of_Evening",
		confidence: "verified"
	},
	{
		id: "w-a2-ketheric",
		act: 2,
		chapter: "Moonrise finale",
		type: "quest",
		title: "Defeat Ketheric — Netherstone",
		detail: "Act 2 climax.",
		source: "bg3.wiki — Ketheric Thorm",
		sourceUrl: "https://bg3.wiki/wiki/Ketheric_Thorm",
		confidence: "verified"
	},
	{
		id: "w-a3-cazador",
		act: 3,
		chapter: "Szarr Palace",
		type: "quest",
		title: "Ascend Astarion",
		detail: "Cazador ritual — ascend for max dark power.",
		who: "Astarion",
		darkNote: "Biggest companion spike.",
		source: "bg3.wiki — Cazador Szarr",
		sourceUrl: "https://bg3.wiki/wiki/Cazador_Szarr",
		confidence: "verified"
	},
	{
		id: "w-a3-rhapsody",
		act: 3,
		chapter: "Szarr Palace",
		type: "item",
		title: "Rhapsody",
		detail: "Loot Cazador — kill stacks.",
		who: "Astarion / Tav",
		source: "bg3.wiki — Guide:Where To Find",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find",
		confidence: "verified"
	},
	{
		id: "w-a3-tribunal",
		act: 3,
		chapter: "Bhaal / Murder Tribunal",
		type: "quest",
		title: "Become Unholy Assassin",
		detail: "Murder Tribunal for Bhaal gear access.",
		darkNote: "DURGE theme.",
		source: "bg3.wiki — Investigate the Murders",
		sourceUrl: "https://bg3.wiki/wiki/Investigate_the_Murders",
		confidence: "soft"
	},
	{
		id: "w-a3-bhaalist",
		act: 3,
		chapter: "Bhaal / Murder Tribunal",
		type: "item",
		title: "Bhaalist Armour",
		detail: "Aura of Murder — piercing vulnerability.",
		who: "Minthara",
		source: "bg3.wiki — Guide:Where To Find",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Where_To_Find",
		confidence: "soft"
	},
	{
		id: "w-a3-hope",
		act: 3,
		chapter: "House of Hope",
		type: "quest",
		title: "House of Hope → fight Raphael",
		detail: "Loot house, then boss.",
		source: "bg3.wiki — House of Hope",
		sourceUrl: "https://bg3.wiki/wiki/House_of_Hope",
		confidence: "verified"
	},
	{
		id: "w-a3-helldusk",
		act: 3,
		chapter: "House of Hope",
		type: "item",
		title: "Helldusk Armour",
		detail: "Carried by Raphael.",
		source: "bg3.wiki — Helldusk Armour",
		sourceUrl: "https://bg3.wiki/wiki/Helldusk_Armour",
		confidence: "verified"
	},
	{
		id: "w-a3-marko",
		act: 3,
		chapter: "Ramazith’s Tower",
		type: "item",
		title: "Markoheshkir",
		detail: "Globe of Invulnerability room.",
		source: "bg3.wiki — Markoheshkir",
		sourceUrl: "https://bg3.wiki/wiki/Markoheshkir",
		confidence: "verified"
	},
	{
		id: "w-a3-gortash",
		act: 3,
		chapter: "Netherstones",
		type: "quest",
		title: "Gortash + Steel Watch Foundry",
		detail: "Sabotage foundry first for easier city.",
		source: "bg3.wiki — Enver Gortash",
		sourceUrl: "https://bg3.wiki/wiki/Enver_Gortash",
		confidence: "soft"
	},
	{
		id: "w-a3-orin",
		act: 3,
		chapter: "Netherstones",
		type: "quest",
		title: "Orin / Temple of Bhaal",
		detail: "Dark Urge climax — embrace or resist.",
		darkNote: "Story peak.",
		source: "bg3.wiki — Orin",
		sourceUrl: "https://bg3.wiki/wiki/Orin",
		confidence: "soft"
	},
	{
		id: "w-a3-brain",
		act: 3,
		chapter: "Finale",
		type: "quest",
		title: "Netherbrain ending",
		detail: "Stones + final assault.",
		source: "bg3.wiki — Confront the Elder Brain",
		sourceUrl: "https://bg3.wiki/wiki/Confront_the_Elder_Brain",
		confidence: "soft"
	}
];
var TRICKS = [
	{
		id: "t-everburn",
		act: 1,
		category: "loot",
		title: "Everburn Blade — kill OR Command Drop (details)",
		detail: "WHAT: Flaming greatsword on Commander Zhalk at the Nautiloid helm.\n\nMETHOD A — Kill & loot (recommended if you’re confused):\n• Free Lae’zel + Shadowheart, reach the helm.\n• Zhalk is fighting a mind flayer. Focus Zhalk down (or let the flayer help), loot Everburn Blade from his corpse.\n• Use restoration pods. Leave when the blade is in inventory — more cambions spawn if you stall.\n\nMETHOD B — Command: Drop (optional):\n• Free Shadowheart first.\n• Open her spells → prepare Command (she usually does NOT have it prepared by default — you must add it).\n• In combat: SH casts Command → choose the Drop option targeting Zhalk.\n• He often succeeds the save (high WIS). Retry or fall back to Method A.\n• Pick the sword up from the ground.\n\nYour Hexblade does not need Command. Only Shadowheart (or another caster with Command) does for Method B.",
		forParty: "Early melee / Lae’zel — STR weapon, not forever for CHA Hexblade",
		source: "bg3.wiki — Everburn Blade / Escape the Nautiloid",
		sourceUrl: "https://bg3.wiki/wiki/Everburn_Blade",
		confidence: "verified"
	},
	{
		id: "t-deathstalker",
		act: 1,
		category: "loot",
		title: "Deathstalker Mantle (Dark Urge only)",
		detail: "After early Urge events, Sceleritas Fel gifts this cloak at camp: kill → Invisible 2 turns (once per turn). Perfect for multi-kill fights.",
		forParty: "Dark Urge",
		source: "bg3.wiki — The Deathstalker Mantle",
		sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle",
		confidence: "verified"
	},
	{
		id: "t-smuggler",
		act: 1,
		category: "loot",
		title: "Smuggler’s Ring (hidden skeleton)",
		detail: "Risen Road river path near broken bridge (~X:58 Y:516) — skeleton in a bush. +2 Stealth & Sleight of Hand, −1 CHA. Astarion’s best early ring.",
		forParty: "Astarion",
		source: "bg3.wiki — Smuggler's Ring",
		sourceUrl: "https://bg3.wiki/wiki/Smuggler%27s_Ring",
		confidence: "verified"
	},
	{
		id: "t-misty-amulet",
		act: 1,
		category: "loot",
		title: "Amulet of Misty Step (Gut’s room)",
		detail: "Defiled Temple behind Polma in Priestess Gut’s chambers — gilded chest. Misty Step per short rest. Only one copy in the game (Omeluum also sells if you skip this).",
		forParty: "Anyone who needs reposition",
		source: "bg3.wiki — Amulet of Misty Step",
		sourceUrl: "https://bg3.wiki/wiki/Amulet_of_Misty_Step",
		confidence: "verified"
	},
	{
		id: "t-night-walkers",
		act: 1,
		category: "loot",
		title: "Disintegrating Night Walkers (Nere)",
		detail: "Grymforge — loot Nere after free/kill him. Free Misty Step + immune to grease/web/ensnare/ice surfaces. Best Act 1 boots.",
		forParty: "Dark Urge / Astarion",
		source: "bg3.wiki — Disintegrating Night Walkers",
		sourceUrl: "https://bg3.wiki/wiki/Disintegrating_Night_Walkers",
		confidence: "verified"
	},
	{
		id: "t-diadem",
		act: 1,
		category: "loot",
		title: "Diadem of Arcane Synergy (Creche)",
		detail: "Inquisitor’s Chamber — Ardent Jhe’rezath. Inflict a condition → Arcane Synergy → weapon attacks add spellcasting mod damage. Insane on Hexblade + Booming Blade.",
		forParty: "Dark Urge Hexblade",
		source: "bg3.wiki — Diadem of Arcane Synergy",
		sourceUrl: "https://bg3.wiki/wiki/Diadem_of_Arcane_Synergy",
		confidence: "verified"
	},
	{
		id: "t-strange-conduit",
		act: 1,
		category: "loot",
		title: "Strange Conduit Ring (Creche)",
		detail: "Elegant chest in Inquisitor’s Chamber. While concentrating, weapon attacks deal +1d4 Psychic. Stack with Hex concentration.",
		forParty: "Dark Urge / Astarion",
		source: "bg3.wiki — Strange Conduit Ring",
		sourceUrl: "https://bg3.wiki/wiki/Strange_Conduit_Ring",
		confidence: "verified"
	},
	{
		id: "t-gloves-dex",
		act: 1,
		category: "loot",
		title: "Gloves of Dexterity (Creche vendor)",
		detail: "A’jak’nir Jeera sells Gloves of Dexterity (set DEX to 18). Huge for Astarion. Expensive — sell junk.",
		forParty: "Astarion",
		source: "bg3.wiki — Gloves of Dexterity",
		sourceUrl: "https://bg3.wiki/wiki/Gloves_of_Dexterity",
		confidence: "verified"
	},
	{
		id: "t-graceful",
		act: 1,
		category: "loot",
		title: "Graceful Cloth (+2 DEX clothing)",
		detail: "Lady Esther on Rosymorn Monastery Trail. +2 DEX + Cat’s Grace. Don’t stack expectation with Gloves of Dexterity.",
		forParty: "Astarion",
		source: "bg3.wiki — The Graceful Cloth",
		sourceUrl: "https://bg3.wiki/wiki/The_Graceful_Cloth",
		confidence: "verified"
	},
	{
		id: "t-broodmother",
		act: 1,
		category: "loot",
		title: "Broodmother’s Revenge (Kagha)",
		detail: "Loot Kagha (raid or after shadow druids). When healed, weapon gains +1d6 poison. Pair with Healing Word / potion sips.",
		forParty: "Minthara / Dark Urge",
		source: "bg3.wiki — Broodmother's Revenge",
		sourceUrl: "https://bg3.wiki/wiki/Broodmother%27s_Revenge",
		confidence: "verified"
	},
	{
		id: "t-absolute-gear",
		act: 1,
		category: "loot",
		title: "Absolute-brand gear (your path)",
		detail: "Absolute’s Warboard on True Soul Gut; Ring of Absolute Force on Sergeant Thrinn (Grymforge). Extra power if branded by the Absolute.",
		forParty: "Branded party members",
		source: "bg3.wiki — Absolute's Warboard / Ring of Absolute Force",
		sourceUrl: "https://bg3.wiki/wiki/Absolute%27s_Warboard",
		confidence: "verified"
	},
	{
		id: "t-luminous",
		act: 1,
		category: "loot",
		title: "Luminous Armour (Selûnite Outpost)",
		detail: "Underdark Selûnite Outpost — trapped chest behind hidden wall (~X:176 Y:-247). Radiant damage → shockwave. Optional for Death SH.",
		forParty: "Optional radiant builds",
		source: "bg3.wiki — Luminous Armour",
		sourceUrl: "https://bg3.wiki/wiki/Luminous_Armour",
		confidence: "verified"
	},
	{
		id: "t-titanstring",
		act: 1,
		category: "loot",
		title: "Titanstring Bow (Zhentarim)",
		detail: "Complete Find the Missing Shipment → Brem sells Titanstring (STR to bow damage). Or Lann Tarv in Moonrise if you skip Brem.",
		forParty: "Minthara (STR)",
		source: "bg3.wiki — Titanstring Bow",
		sourceUrl: "https://bg3.wiki/wiki/Titanstring_Bow",
		confidence: "verified"
	},
	{
		id: "t-blood-lathander",
		act: 1,
		category: "loot",
		title: "Blood of Lathander (Creche secret)",
		detail: "Secret Chamber under Rosymorn / Creche. Legendary mace. Watch the trap if you take it without ceremonial weapons.",
		forParty: "Backup radiant weapon",
		source: "bg3.wiki — The Blood of Lathander",
		sourceUrl: "https://bg3.wiki/wiki/The_Blood_of_Lathander",
		confidence: "verified"
	},
	{
		id: "t-mourning-frost",
		act: 1,
		category: "loot",
		title: "Mourning Frost (combine 3 parts)",
		detail: "Three Underdark drow mages: Icy Crystal (Filro), Icy Helve (Dhourn), Icy Metal (Xargrim). Combine → cold staff.",
		forParty: "Optional",
		source: "bg3.wiki — Mourning Frost",
		sourceUrl: "https://bg3.wiki/wiki/Mourning_Frost",
		confidence: "verified"
	},
	{
		id: "t-ethel-hair",
		act: 1,
		category: "perm",
		title: "Auntie Ethel’s Hair — permanent +1 ability",
		detail: "Fight Ethel in her lair (not teahouse). At low HP she bargains. Take the hair → permanent +1 to any ability (can go above 20). Put on CHA for Dark Urge.",
		forParty: "Dark Urge CHA (or Astarion DEX)",
		source: "bg3.wiki — Auntie Ethel's Hair",
		sourceUrl: "https://bg3.wiki/wiki/Auntie_Ethel%27s_Hair",
		confidence: "verified"
	},
	{
		id: "t-shovel",
		act: 1,
		category: "perm",
		title: "Shovel the quasit — permanent familiar",
		detail: "Apothecary cellar (Blighted Village) — Scroll of Summon Quasit. Cast with Warlock (you). Talk: keep name Shovel → learn Find Familiar: Cheeky Quasit (once/short rest).",
		forParty: "Dark Urge Warlock",
		source: "bg3.wiki — Shovel (familiar)",
		sourceUrl: "https://bg3.wiki/wiki/Shovel_(familiar)",
		confidence: "verified"
	},
	{
		id: "t-darkness",
		act: 0,
		category: "combat",
		title: "Darkness + Devil’s Sight cheese",
		detail: "Warlock invocation Devil’s Sight sees in magical darkness. Drop Darkness on a pack; party with sight deletes enemies who can’t see. Your Drow also gets Darkness at level 5.",
		forParty: "Dark Urge + melee allies careful placement",
		source: "bg3.wiki — Devil's Sight / Darkness",
		sourceUrl: "https://bg3.wiki/wiki/Devil%27s_Sight",
		confidence: "verified"
	},
	{
		id: "t-phalar-shriek",
		act: 0,
		category: "combat",
		title: "Phalar Aluve: Shriek every hard fight",
		detail: "Activate Shriek (short rest). Nearby enemies take extra thunder and get debuffed. Free party amp — don’t save it forever.",
		forParty: "Whole party",
		source: "bg3.wiki — Phalar Aluve: Shriek",
		sourceUrl: "https://bg3.wiki/wiki/Phalar_Aluve",
		confidence: "verified"
	},
	{
		id: "t-spirit-guardians",
		act: 0,
		category: "combat",
		title: "Death SH: Spirit Guardians walk",
		detail: "Cast necrotic Spirit Guardians, walk through packs. At Death 6, Inescapable Destruction ignores necrotic resistance. Hold Person for party crits.",
		forParty: "Shadowheart",
		source: "bg3.wiki — Spirit Guardians / Death Domain",
		sourceUrl: "https://bg3.wiki/wiki/Spirit_Guardians",
		confidence: "verified"
	},
	{
		id: "t-wet-lightning",
		act: 0,
		category: "combat",
		title: "Wet + lightning = double damage",
		detail: "Create Water / throw water → Wet. Lightning (and cold) deals double. Spellsparkler charges love this.",
		forParty: "Anyone with lightning",
		source: "bg3.wiki — Wet",
		sourceUrl: "https://bg3.wiki/wiki/Wet_(Condition)",
		confidence: "verified"
	},
	{
		id: "t-height",
		act: 0,
		category: "combat",
		title: "High ground + shove / throw off cliffs",
		detail: "Advantage from high ground on ranged. Giant Barb throws: yeet into chasms (no loot from void — soft tradeoff).",
		forParty: "Minthara Giant Barb, Astarion range",
		source: "bg3.wiki — Elevation / Throw",
		sourceUrl: "https://bg3.wiki/wiki/Throw",
		confidence: "soft"
	},
	{
		id: "t-barrels",
		act: 0,
		category: "combat",
		title: "Smokepowder / oil barrels (barrelmancy)",
		detail: "Carry barrels in camp. Stack oil + fire or smokepowder near bosses before initiative. Soft cheese on Balanced.",
		forParty: "Optional cheese",
		source: "bg3.wiki — Smokepowder Bomb / explosives",
		sourceUrl: "https://bg3.wiki/wiki/Smokepowder_Bomb",
		confidence: "soft"
	},
	{
		id: "t-hex-curse",
		act: 0,
		category: "combat",
		title: "Hexblade’s Curse + Hex stacking focus",
		detail: "Curse for crit floor + PB damage; Hex for 1d6 necrotic per hit. Save for elites. Short rest recharges curse HP refund on kill.",
		forParty: "Dark Urge",
		source: "bg3.wiki — Hexblade's Curse / Hex",
		sourceUrl: "https://bg3.wiki/wiki/Hexblade%27s_Curse",
		confidence: "verified"
	},
	{
		id: "t-animals",
		act: 1,
		category: "social",
		title: "Potion of Animal Speaking always",
		detail: "Talk to Scratch, birds, rats — extra quests and loot. Buy potions early; lasts until long rest.",
		forParty: "Exploration",
		source: "bg3.wiki — Speak with Animals / Scratch",
		sourceUrl: "https://bg3.wiki/wiki/Scratch",
		confidence: "verified"
	},
	{
		id: "t-nonlethal-min",
		act: 1,
		category: "social",
		title: "Alternate Minthara: non-lethal KO",
		detail: "If you don’t raid the Grove, toggle non-lethal and KO Minthara, free her at Moonrise later. Dark run prefers full raid — this is backup.",
		forParty: "Minthara",
		source: "bg3.wiki — Minthara / Decide Minthara's Fate",
		sourceUrl: "https://bg3.wiki/wiki/Minthara",
		confidence: "verified"
	},
	{
		id: "t-voss-sword",
		act: 1,
		category: "exploit",
		title: "Early Voss’ Silver Sword (hard cheese)",
		detail: "Kith’rak Voss on the mountain bridge can be disarmed (Command Drop / Fear / etc.) for a silver greatsword early. High save DC — optional advanced cheese. Same idea as Zhalk: need Command prepared on someone.",
		forParty: "Optional min-max",
		source: "bg3.wiki — Guide:Early Silver Sword",
		sourceUrl: "https://bg3.wiki/wiki/Guide:Early_Silver_Sword",
		confidence: "soft"
	},
	{
		id: "t-elixirs",
		act: 0,
		category: "combat",
		title: "Elixir rules (don’t waste)",
		detail: "Only one elixir active — new replaces old. Bloodlust / Hill Giant STR / Vigilance are top picks. Potions stack more freely than elixirs.",
		forParty: "Whole party",
		source: "bg3.wiki — Elixirs",
		sourceUrl: "https://bg3.wiki/wiki/Elixirs",
		confidence: "soft"
	},
	{
		id: "t-short-rest-wl",
		act: 0,
		category: "combat",
		title: "Warlock is short-rest nova",
		detail: "All Pact slots back on short rest. Blow slots every fight that matters; rest after. Don’t long-rest hoard like a wizard.",
		forParty: "Dark Urge",
		source: "bg3.wiki — Pact Magic",
		sourceUrl: "https://bg3.wiki/wiki/Pact_Magic",
		confidence: "verified"
	}
];
var TRICK_CATEGORIES = [
	{
		id: "loot",
		label: "Hidden / high-value loot"
	},
	{
		id: "perm",
		label: "Permanent power"
	},
	{
		id: "combat",
		label: "Combat tricks"
	},
	{
		id: "social",
		label: "Path / social"
	},
	{
		id: "exploit",
		label: "Optional cheese"
	}
];
var MISSABLES = [
	{
		id: "m-everburn",
		act: 1,
		title: "Everburn Blade (Zhalk)",
		before: "Leave the Nautiloid",
		detail: "Only available in the prologue helm fight.",
		severity: "hard"
	},
	{
		id: "m-withers",
		act: 1,
		title: "Withers at camp",
		before: "You need respec / hirelings",
		detail: "Best: Dank Crypt → wake him → Long Rest → camp. Soft: if skipped, he often auto-joins around level 3 / early Act 1 progress.",
		severity: "soft"
	},
	{
		id: "m-deathstalker",
		act: 1,
		title: "Deathstalker Mantle",
		before: "Skip early Dark Urge camp events",
		detail: "Sceleritas gift at camp — talk through early Urge scenes + long rests.",
		severity: "hard"
	},
	{
		id: "m-ethel-hair",
		act: 1,
		title: "Auntie Ethel’s Hair (+1 ability)",
		before: "Kill Ethel without the bargain / leave lair",
		detail: "Must fight in the lair and take the hair deal at low HP.",
		severity: "hard"
	},
	{
		id: "m-shovel",
		act: 1,
		title: "Shovel permanent familiar",
		before: "Ignore apothecary cellar scroll",
		detail: "Cast scroll as Warlock and finish dialogue.",
		severity: "soft"
	},
	{
		id: "m-florrick",
		act: 1,
		title: "Spellsparkler (Florrick)",
		before: "Waukeen’s Rest burns out / leave area too long",
		detail: "Rescue Florrick from the fire for staff reward.",
		severity: "hard"
	},
	{
		id: "m-grove-vendors",
		act: 1,
		title: "Grove vendors & Dammon stock",
		before: "Raid the Emerald Grove",
		detail: "Shop first — many NPCs die or leave after Absolute raid.",
		severity: "hard"
	},
	{
		id: "m-minthara-raid",
		act: 1,
		title: "Minthara via raid path",
		before: "Kill Minthara / side with tieflings fully",
		detail: "Tell her Grove location and complete raid (or non-lethal alt).",
		severity: "hard"
	},
	{
		id: "m-wyll-karl",
		act: 1,
		title: "Wyll / Karlach leave permanently",
		before: "Raid Grove (if you wanted them)",
		detail: "Dark run expects this — they leave after Absolute raid.",
		severity: "soft"
	},
	{
		id: "m-adamantine",
		act: 1,
		title: "Adamantine Forge crafts (only 2)",
		before: "Leave Grymforge forever",
		detail: "Two mithral ores max crafts. Plan moulds.",
		severity: "hard"
	},
	{
		id: "m-creche",
		act: 1,
		title: "Creche gear (Diadem, Knife, Gloves)",
		before: "Blow up monastery / skip Mountain Pass",
		detail: "Do Creche before or after raid, but don’t soft-lock yourself out.",
		severity: "soft"
	},
	{
		id: "m-last-light",
		act: 2,
		title: "Last Light shopping",
		before: "Kill / capture Isobel (Inn falls)",
		detail: "Trade with Dammon / quartermaster first on dark path.",
		severity: "hard"
	},
	{
		id: "m-nightsong",
		act: 2,
		title: "Shar’s Spear (kill Nightsong)",
		before: "Free Aylin if you want spear path",
		detail: "Dark Justiciar needs Shadowheart to kill Nightsong.",
		severity: "hard"
	},
	{
		id: "m-sweetheart",
		act: 2,
		title: "Killer’s Sweetheart",
		before: "Skip / cheese Self-Same Trial wrong",
		detail: "Loot where your shadow dies.",
		severity: "soft"
	},
	{
		id: "m-risky",
		act: 2,
		title: "Risky Ring",
		before: "Miss Araj in Moonrise (buyable Act 3 too)",
		detail: "Moonrise Araj — still sold in Act 3 if missed.",
		severity: "soft"
	},
	{
		id: "m-ascend",
		act: 3,
		title: "Astarion Ascension",
		before: "Kill Cazador without ritual choice",
		detail: "Let him ascend for max dark power (your plan).",
		severity: "hard"
	},
	{
		id: "m-bhaal",
		act: 3,
		title: "Bhaalist Armour / Unholy Assassin",
		before: "Fail Murder Tribunal path",
		detail: "Become Unholy Assassin for vendor access.",
		severity: "soft"
	}
];
var MEMBER_LABEL = {
	tav: "Dark Urge",
	shadowheart: "Shadowheart",
	astarion: "Astarion",
	minthara: "Minthara",
	laezel: "Lae’zel (temp)"
};
var PARTY_SYNERGY = {
	title: "How this party fights together",
	roles: [
		{
			who: "Dark Urge (Hexblade)",
			job: "Face + short-rest nova. Curse boss → Booming Blade / Shadow Blade attacks. Darkness + Devil’s Sight cheese. Eldritch Blast when kiting."
		},
		{
			who: "Shadowheart (Death Cleric)",
			job: "Control hub. Spirit Guardians (necrotic) walk, Hold Person for party crits/smites, Bless early, heals when needed. Reaper cantrips hit 2 targets."
		},
		{
			who: "Astarion (Thief)",
			job: "Ranged DPS + skills. Dual hand crossbows, Sharpshooter, Fast Hands hide/shoot. Locks, traps, pickpocket. Ascension later multiplies him."
		},
		{
			who: "Minthara (Oathbreaker)",
			job: "Permanent frontline. Smites on Held targets, Aura/Control Undead tools, heavy hits. Replaces Lae’zel."
		},
		{
			who: "Lae’zel (temp Fighter)",
			job: "Act 1 only. Everburn + Action Surge until Minthara. Bench after."
		}
	],
	openers: [
		"SH: Spirit Guardians (or Hold Person on boss) — concentration first",
		"Tav: Hexblade’s Curse + Hex (if lasting) on priority target",
		"Phalar Aluve: Shriek if someone holds it / nearby",
		"Astarion: high ground / hide → Sharpshooter shots",
		"Minthara/Lae’zel: walk into SG safe-ish and smash / smite"
	],
	itemPriority: [
		"SH concentration gear / War Caster first",
		"Tav: Diadem of Arcane Synergy, Deathstalker, Risky Ring later",
		"Astarion: Smuggler’s Ring, Knife (crit), Gloves of Dex, hand crossbows",
		"Frontline: Adamantine armour, Bhaalist later on Minthara"
	],
	restRule: "Short rest after every hard fight (Warlock slots). Full long rest for camp scenes / Withers / DURGE mantle — don’t only partial-rest forever."
};
var LEVEL_PICKS = [
	{
		id: "lv-tav-1",
		member: "tav",
		level: 1,
		title: "Create / Warlock 1 — Hexblade",
		classLevel: "Warlock 1 (Hexblade)",
		stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17 (soft point-buy target)",
		cantrips: ["Eldritch Blast", "Booming Blade"],
		spells: ["Hex", "Shield"],
		features: [
			"Hex Warrior: medium armour, shields, martial weapons",
			"Bind Hexed Weapon → attack with CHA",
			"Hexblade’s Curse (short rest)"
		],
		skills: ["Deception", "Arcana (class) + Medicine/Intimidation from Haunted One"],
		picks: ["Origin: Dark Urge · Race: Lolth-Sworn Drow · Background: Haunted One (locked)", "Bind a one-handed weapon you like; dump STR"],
		note: "Exactly 2 cantrips + 2 spells at L1 (wiki). Shield is Hexblade expanded list."
	},
	{
		id: "lv-tav-2",
		member: "tav",
		level: 2,
		title: "Warlock 2 — spell + 2 Invocations",
		classLevel: "Warlock 2",
		spells: ["+1 spell: Armour of Agathys (soft) or Hellish Rebuke"],
		invocations: ["Agonising Blast (spelling with S — on INVOCATIONS screen, not spells)", "Devil’s Sight"],
		picks: [
			"STEP A: pick +1 spell from the spell list",
			"STEP B: Eldritch Invocations — Agonising Blast + Devil’s Sight",
			"Alt face: Beguiling Influence instead of Devil’s Sight"
		],
		note: "2 Pact slots. Short-rest economy starts here."
	},
	{
		id: "lv-tav-3",
		member: "tav",
		level: 3,
		title: "Warlock 3 — Pact of the Blade",
		classLevel: "Warlock 3",
		features: ["Pact of the Blade (needed for Extra Attack at 5)"],
		spells: ["Optional: hold Hold Person for later swap; Shadow Blade when available"],
		picks: ["Pact Boon: Pact of the Blade", "2nd-level slots (still short rest)"]
	},
	{
		id: "lv-tav-4",
		member: "tav",
		level: 4,
		title: "Warlock 4 — ASI + 3rd cantrip",
		classLevel: "Warlock 4",
		cantrips: ["+ Mage Hand (or Minor Illusion)"],
		feat: "ASI +2 CHA (17→19) — or +1 CHA +1 DEX if odd",
		picks: ["Push CHA hard", "Keep Bind Hexed Weapon / Pact weapon up every fight"]
	},
	{
		id: "lv-tav-5",
		member: "tav",
		level: 5,
		title: "Warlock 5 — Extra Attack spike",
		classLevel: "Warlock 5",
		features: ["Deepened Pact → Extra Attack with pact/hexed weapon"],
		spells: ["Hunger of Hadar (soft AOE control) or Counterspell when available"],
		invocations: ["Optional later swap/add: Repelling Blast at next invocation slot"],
		picks: ["Double attack with Booming Blade + Extra Attack patterns", "3rd-level Pact slots"],
		note: "Biggest early spike. Short rest after hard fights."
	},
	{
		id: "lv-tav-6",
		member: "tav",
		level: 6,
		title: "Warlock 6 — Accursed Spectre",
		classLevel: "Warlock 6",
		features: ["Accursed Spectre on cursed kills"],
		picks: ["Curse elites → kill → free spectre body"]
	},
	{
		id: "lv-tav-7",
		member: "tav",
		level: 7,
		title: "Warlock 7",
		classLevel: "Warlock 7",
		invocations: ["+1 invocation — Repelling Blast if not taken"],
		spells: ["4th-level options: soft Banishment / Dimension Door utility"],
		picks: ["Keep CHA focus", "Darkness + Devil’s Sight still online"]
	},
	{
		id: "lv-tav-8",
		member: "tav",
		level: 8,
		title: "Warlock 8 — finish CHA",
		classLevel: "Warlock 8",
		feat: "ASI +1 or +2 CHA → 20 (or Alert if initiative feels bad)",
		picks: ["CHA 20 is the damage/DC cap goal"]
	},
	{
		id: "lv-tav-9",
		member: "tav",
		level: 9,
		title: "Warlock 9 — 5th-level slots",
		classLevel: "Warlock 9",
		spells: ["Hold Monster / soft high-end picks"],
		picks: ["2× 5th-level short-rest slots = huge nova"]
	},
	{
		id: "lv-tav-10",
		member: "tav",
		level: 10,
		title: "Warlock 10 — Armour of Hexes",
		classLevel: "Warlock 10",
		features: ["Armour of Hexes: 50% nullify attack from cursed target"],
		picks: ["Curse whoever is hitting you"]
	},
	{
		id: "lv-tav-11",
		member: "tav",
		level: 11,
		title: "Warlock 11 — Mystic Arcanum",
		classLevel: "Warlock 11",
		spells: ["Mystic Arcanum 6th (soft: Create Undead / Eyebite — pick fun)"],
		picks: ["3 Pact slots at max Warlock scaling"]
	},
	{
		id: "lv-tav-12",
		member: "tav",
		level: 12,
		title: "Warlock 12 — Lifedrinker / capstone",
		classLevel: "Warlock 12",
		feat: "Alert or Great Weapon Master if using heavy; else ASI leftover",
		invocations: ["Lifedrinker if available on list"],
		picks: ["Soft endgame alt respec: 10 Hexblade / 2 Paladin for smites — only if you want"],
		note: "Pure Hexblade 12 is fine and simple for first dark run."
	},
	{
		id: "lv-sh-1",
		member: "shadowheart",
		level: 1,
		title: "FULL RESPEC at Withers → Death Cleric 1",
		classLevel: "Cleric 1 (Death Domain)",
		stats: "Soft target: STR 10 · DEX 14 · CON 16 · INT 8 · WIS 17 · CHA 8 (dump face stats — you’re the face)",
		cantrips: [
			"Toll the Dead (Reaper cantrip — primary damage)",
			"Guidance (out of combat forever)",
			"Sacred Flame (backup save damage)",
			"Produce Flame or Thaumaturgy (utility)"
		],
		prepare: [
			"ALWAYS DOMAIN (auto): False Life, Ray of Sickness + Reaper cantrip choice",
			"Bless (party accuracy — huge early)",
			"Healing Word (bonus-action revive ally HP)",
			"Shield of Faith or Sanctuary situational",
			"Command (Drop / Halt — you already used this on Nautiloid)"
		],
		features: ["Death Domain → martial weapons", "Reaper: necromancy cantrips that hit 1 target can hit a 2nd"],
		skills: ["Keep Insight / Religion / Medicine as fits; WIS skills"],
		picks: [
			"Withers → Class: Cleric → Subclass: Death Domain",
			"Deity can stay Shar (story)",
			"Do NOT leave her Trickery with default bad stats"
		],
		note: "This is the most important respec of the run. Take your time on the ability screen."
	},
	{
		id: "lv-sh-2",
		member: "shadowheart",
		level: 2,
		title: "Cleric 2 — Channel Divinity",
		classLevel: "Cleric 2",
		features: ["Channel Divinity: Turn Undead", "Touch of Death (extra necrotic on melee hit — Channel)"],
		prepare: ["Hold Person not yet — keep Bless + Healing Word + Command"],
		picks: ["Channel uses short rest — spend them"]
	},
	{
		id: "lv-sh-3",
		member: "shadowheart",
		level: 3,
		title: "Cleric 3 — 2nd-level spells",
		classLevel: "Cleric 3",
		prepare: [
			"Spiritual Weapon (bonus action DPS — soft staple)",
			"Hold Person (PARTY ENABLER — hold for Minthara/Tav crits)",
			"Aid or Prayer of Healing situational",
			"Domain: Blindness, Ray of Enfeeblement (auto)"
		],
		picks: ["Hold Person is why she enables the whole party"]
	},
	{
		id: "lv-sh-4",
		member: "shadowheart",
		level: 4,
		title: "Cleric 4 — War Caster (must)",
		classLevel: "Cleric 4",
		feat: "War Caster — do NOT skip (Spirit Guardians concentration next level)",
		cantrips: ["Optional 5th cantrip if offered"],
		picks: ["War Caster > ASI at 4 for this party (you need SG stuck on)", "If already high WIS odd score, some take +1 WIS — War Caster still preferred"],
		note: "Common mistake: ASI first. For SG walker, War Caster at 4."
	},
	{
		id: "lv-sh-5",
		member: "shadowheart",
		level: 5,
		title: "Cleric 5 — Spirit Guardians (the build)",
		classLevel: "Cleric 5",
		prepare: [
			"Spirit Guardians — pick NECROTIC damage type for Death synergy",
			"Revivify (someone will die)",
			"Glyph of Warding situational",
			"Keep Hold Person + Healing Word prepared"
		],
		features: ["Destroy Undead upgrades Turn"],
		picks: ["Combat loop: cast SG → walk through packs → bonus Healing Word / Spiritual Weapon", "Do not stand still — movement triggers SG ticks"],
		note: "This is her power spike. Everything before was setup."
	},
	{
		id: "lv-sh-6",
		member: "shadowheart",
		level: 6,
		title: "Cleric 6 — Inescapable Destruction",
		classLevel: "Cleric 6",
		features: ["Inescapable Destruction: your necrotic damage ignores Necrotic Resistance"],
		picks: ["SG necrotic + cantrips punch through resist undead/fiends better"]
	},
	{
		id: "lv-sh-7",
		member: "shadowheart",
		level: 7,
		title: "Cleric 7 — 4th-level spells",
		classLevel: "Cleric 7",
		prepare: ["Banishment / Freedom of Movement / Death Ward soft", "Domain: Blight, Death Ward (auto list)"],
		picks: ["Still cast SG every hard fight — upcast when free"]
	},
	{
		id: "lv-sh-8",
		member: "shadowheart",
		level: 8,
		title: "Cleric 8 — ASI WIS + Divine Strike",
		classLevel: "Cleric 8",
		feat: "ASI +2 WIS (toward 20)",
		features: ["Divine Strike: Necrotic (+1d8 once/turn on weapon hit)"],
		picks: ["WIS raises SG DC + cantrip DC"]
	},
	{
		id: "lv-sh-9",
		member: "shadowheart",
		level: 9,
		title: "Cleric 9 — 5th-level spells",
		classLevel: "Cleric 9",
		prepare: ["Mass Cure Wounds / Insect Plague / Flame Strike soft", "Keep SG + Hold Person always"],
		picks: ["Domain high options (Cloudkill etc.) auto"]
	},
	{
		id: "lv-sh-10",
		member: "shadowheart",
		level: 10,
		title: "Cleric 10 — Divine Intervention",
		classLevel: "Cleric 10",
		features: ["Divine Intervention (once per character — big panic button)"],
		picks: ["Save for true emergency bosses"]
	},
	{
		id: "lv-sh-11",
		member: "shadowheart",
		level: 11,
		title: "Cleric 11 — 6th-level spells",
		classLevel: "Cleric 11",
		prepare: ["Heroes’ Feast / Planar Ally / Heal soft big spells"],
		picks: ["Upcast SG still core trash clear"]
	},
	{
		id: "lv-sh-12",
		member: "shadowheart",
		level: 12,
		title: "Cleric 12 — cap WIS / Alert",
		classLevel: "Cleric 12",
		feat: "ASI finish WIS 20, or Alert (go first → SG before enemies move)",
		picks: ["Alert is excellent if initiative feels bad"]
	},
	{
		id: "lv-ast-1",
		member: "astarion",
		level: 1,
		title: "Rogue 1 — skills baseline",
		classLevel: "Rogue 1",
		stats: "DEX primary (soft 17) · CON secondary · dump STR if not dual-wield melee",
		skills: ["Expertise: Sleight of Hand + Stealth (or Perception)", "Skills: Acrobatics, Deception, etc."],
		features: ["Sneak Attack 1d6", "Sneak proficiency kit"],
		picks: ["Hand crossbows when you find them — dual wield ranged"]
	},
	{
		id: "lv-ast-2",
		member: "astarion",
		level: 2,
		title: "Rogue 2 — Cunning Action",
		classLevel: "Rogue 2",
		features: ["Cunning Action: Dash / Disengage / Hide (bonus)"],
		picks: ["Hide → shoot → Hide pattern starts"]
	},
	{
		id: "lv-ast-3",
		member: "astarion",
		level: 3,
		title: "Rogue 3 — Thief (recommended)",
		classLevel: "Rogue 3 (Thief)",
		features: ["Fast Hands: EXTRA bonus action (hide + shoot + item)", "Second-Story Work"],
		picks: ["Subclass: Thief (not Assassin for this party — Fast Hands is better every fight)", "Soft alt: Swashbuckler if you want melee Rakish Sneak — ranged Thief preferred here"],
		note: "Thief covers party ranged DPS while everyone else is mid/melee."
	},
	{
		id: "lv-ast-4",
		member: "astarion",
		level: 4,
		title: "Rogue 4 — Sharpshooter",
		classLevel: "Rogue 4",
		feat: "Sharpshooter (hand crossbows / bows)",
		picks: ["Toggle Sharpshooter on when advantage / high hit chance", "Alt: ASI +2 DEX if you miss constantly"]
	},
	{
		id: "lv-ast-5",
		member: "astarion",
		level: 5,
		title: "Rogue 5 — Uncanny Dodge",
		classLevel: "Rogue 5",
		features: ["Uncanny Dodge", "Sneak Attack 3d6"],
		picks: ["Keep dual hand crossbows + Knife of Undermountain crit floor"]
	},
	{
		id: "lv-ast-6",
		member: "astarion",
		level: 6,
		title: "Rogue 6 — more Expertise",
		classLevel: "Rogue 6",
		skills: ["Expertise on two more skills (Perception / Deception soft)"],
		picks: ["Skill monkey complete"]
	},
	{
		id: "lv-ast-7",
		member: "astarion",
		level: 7,
		title: "Rogue 7 — Evasion",
		classLevel: "Rogue 7",
		features: ["Evasion"],
		picks: ["Fireball bait — he often takes 0"]
	},
	{
		id: "lv-ast-8",
		member: "astarion",
		level: 8,
		title: "Rogue 8 — DEX 20 or Alert",
		classLevel: "Rogue 8",
		feat: "ASI +2 DEX → 20 (or Alert)",
		picks: ["DEX 20 + Sharpshooter = consistent"]
	},
	{
		id: "lv-ast-9",
		member: "astarion",
		level: 9,
		title: "Rogue 9 — Supreme Sneak",
		classLevel: "Rogue 9 (Thief)",
		features: ["Supreme Sneak"],
		picks: ["Invisibility-adjacent utility"]
	},
	{
		id: "lv-ast-10",
		member: "astarion",
		level: 10,
		title: "Rogue 10 — feat",
		classLevel: "Rogue 10",
		feat: "Alert or Crossbow Expert (ignore close range) or ASI leftover",
		picks: ["Crossbow Expert soft if enemies stick to him"]
	},
	{
		id: "lv-ast-11",
		member: "astarion",
		level: 11,
		title: "Rogue 11 — Reliable Talent",
		classLevel: "Rogue 11",
		features: ["Reliable Talent — never roll <10 on proficient skills"],
		picks: ["Locks become trivial"]
	},
	{
		id: "lv-ast-12",
		member: "astarion",
		level: 12,
		title: "Rogue 12 — last feat",
		classLevel: "Rogue 12",
		feat: "Alert / ASI / Savage Attacker soft",
		picks: ["Ascension (Act 3) multiplies everything — do the ritual for dark run"]
	},
	{
		id: "lv-min-1",
		member: "minthara",
		level: 1,
		title: "Respec after recruit → Oathbreaker path",
		classLevel: "Paladin 1 → break oath → Oathbreaker",
		stats: "STR 17 · DEX 10 · CON 14 · INT 8 · WIS 8 · CHA 16 (soft — smites use CHA)",
		features: [
			"Divine Sense",
			"Lay on Hands",
			"then become Oathbreaker for dark kit"
		],
		picks: ["Withers: Paladin. If not already Oathbreaker, break oath via cruel choices or respec into Oathbreaker if UI allows", "Soft alt whole build: Giant Barbarian + Tavern Brawler throws (easier cheese, less smite)"],
		note: "Oathbreaker fits Absolute/dark RP and smites Held targets from Shadowheart."
	},
	{
		id: "lv-min-2",
		member: "minthara",
		level: 2,
		title: "Paladin 2 — Fighting Style + Smites",
		classLevel: "Paladin 2",
		features: ["Fighting Style: Great Weapon Fighting (2H) or Defence", "Divine Smite"],
		spells: ["Prepare: Compelled Duel / Thunderous Smite soft / Shield of Faith"],
		picks: ["Save smite slots for Held / crit / bosses"]
	},
	{
		id: "lv-min-3",
		member: "minthara",
		level: 3,
		title: "Paladin 3 — Oathbreaker features",
		classLevel: "Paladin 3 (Oathbreaker)",
		features: [
			"Control Undead",
			"Dreadful Aspect",
			"Oath spells"
		],
		picks: ["Channel for fear / undead control on dark maps"]
	},
	{
		id: "lv-min-4",
		member: "minthara",
		level: 4,
		title: "Paladin 4 — GWM or ASI",
		classLevel: "Paladin 4",
		feat: "Great Weapon Master (2H) OR ASI +2 STR",
		picks: ["GWM on when advantage / high hit (SH Hold Person = free crit window)"]
	},
	{
		id: "lv-min-5",
		member: "minthara",
		level: 5,
		title: "Paladin 5 — Extra Attack",
		classLevel: "Paladin 5",
		features: ["Extra Attack"],
		spells: ["2nd-level: Magic Weapon soft"],
		picks: ["Extra Attack + smite = frontline job complete"]
	},
	{
		id: "lv-min-6",
		member: "minthara",
		level: 6,
		title: "Paladin 6 — Aura of Protection",
		classLevel: "Paladin 6",
		features: ["Aura of Protection: +CHA mod to nearby saves — HUGE for party"],
		picks: ["Stand near SH so her concentration saves get the aura"]
	},
	{
		id: "lv-min-8",
		member: "minthara",
		level: 8,
		title: "Paladin 8 — STR / GWM finish",
		classLevel: "Paladin 8",
		feat: "If GWM taken: ASI STR. If not: GWM now",
		picks: ["STR 20 goal"]
	},
	{
		id: "lv-min-9",
		member: "minthara",
		level: 9,
		title: "Paladin 9 — 3rd-level spells",
		classLevel: "Paladin 9",
		picks: ["Bigger smite dice from higher slots"]
	},
	{
		id: "lv-min-11",
		member: "minthara",
		level: 11,
		title: "Paladin 11 — Improved Divine Smite",
		classLevel: "Paladin 11",
		features: ["Improved Divine Smite: free +1d8 radiant on hits"],
		picks: ["Passive damage forever"]
	},
	{
		id: "lv-min-12",
		member: "minthara",
		level: 12,
		title: "Paladin 12 — last feat",
		classLevel: "Paladin 12",
		feat: "Alert or Savage Attacker or ASI CHA for aura/saves",
		picks: ["Bhaalist Armour in Act 3 if piercing party — soft endgame gear"]
	},
	{
		id: "lv-lz-1",
		member: "laezel",
		level: 1,
		title: "Fighter 1 (keep or light respec)",
		classLevel: "Fighter 1",
		stats: "STR max · CON second · DEX for initiative",
		features: ["Second Wind", "Fighting Style: Great Weapon Fighting"],
		picks: ["Everburn Blade early", "Don’t over-invest gear you’ll move to Minthara"]
	},
	{
		id: "lv-lz-2",
		member: "laezel",
		level: 2,
		title: "Fighter 2 — Action Surge",
		classLevel: "Fighter 2",
		features: ["Action Surge"],
		picks: ["Boss button"]
	},
	{
		id: "lv-lz-3",
		member: "laezel",
		level: 3,
		title: "Fighter 3 — Battlemaster",
		classLevel: "Fighter 3 (Battlemaster)",
		features: ["Maneuvers soft: Trip Attack, Menacing Attack, Precision Attack, Riposte"],
		picks: ["Trip → party advantage / prone"]
	},
	{
		id: "lv-lz-4",
		member: "laezel",
		level: 4,
		title: "Fighter 4 — GWM",
		classLevel: "Fighter 4",
		feat: "Great Weapon Master",
		picks: ["Use while you have her — gear transfers to Minthara later"]
	},
	{
		id: "lv-lz-5",
		member: "laezel",
		level: 5,
		title: "Fighter 5 — Extra Attack",
		classLevel: "Fighter 5",
		features: ["Extra Attack"],
		picks: ["Bench when Minthara joins — she’s done her job"],
		note: "Stop optimizing her after Minthara is permanent."
	}
];
/**
* Character create — hard numbers verified on bg3.wiki (2026-08-09).
* See VERIFIED_FACTS in verified.ts for sources.
*/
var CREATE_CHARACTER = {
	origin: "The Dark Urge",
	race: "Drow",
	subrace: "Lolth-Sworn Drow",
	whyRace: "Superior Darkvision, Perception proficiency, Drow Magic (Dancing Lights / Faerie Fire / Darkness). Lolth-Sworn unlocks extra evil dialogue. Build-friendly + dark story fit.",
	alternatives: [{
		race: "Half-Elf",
		subrace: "Drow Half-Elf",
		note: "Similar Drow Magic package, different body type. Soft preference only."
	}, {
		race: "Dragonborn",
		subrace: "Black or Red",
		note: "Look/flavour only. No Drow Magic. Soft preference only."
	}],
	class: "Warlock",
	subclass: "The Hexblade (level 1 patron)",
	cantrips: ["Eldritch Blast", "Booming Blade"],
	cantripsNote: "Exactly 2 cantrips at Warlock 1 (wiki table). 3rd cantrip at Warlock 4 (e.g. Mage Hand).",
	spells: ["Hex", "Shield"],
	spellsNote: "Exactly 2 spells known at level 1. Hex = base Warlock list. Shield = Hexblade expanded list only.",
	background: "Haunted One (locked)",
	backgroundNote: "Dark Urge cannot choose another background. Skills from background: Medicine + Intimidation.",
	skills: "Warlock: choose 2 from Arcana, Deception, History, Intimidation, Investigation, Religion. Recommended: Deception + Arcana (Intimidation already from Haunted One). Persuasion is NOT a Warlock skill — take Beguiling Influence later if you want it.",
	stats: {
		STR: 8,
		DEX: 16,
		CON: 14,
		INT: 8,
		WIS: 10,
		CHA: 17
	},
	statsNote: "Soft target array (prioritise CHA → DEX/CON). Exact numbers depend on racial + point-buy UI. Dump STR; Hexblade Bind Hexed Weapon uses CHA for the bound weapon from level 1.",
	level1Note: "Subclass at Warlock 1. Hex Warrior already gives medium armour, shields, martial weapons + Bind Hexed Weapon (CHA attacks). Pact of the Blade still at level 3 for Extra Attack at 5.",
	level2Note: "Warlock 2 has TWO steps: (A) +1 SPELL from the spell list, then (B) Eldritch INVOCATIONS — pick Agonising Blast (spelling with S) + Devil’s Sight. Invocations are not spells.",
	level3Note: "Pact Boon: Pact of the Blade.",
	level5Note: "Deepened Pact → Extra Attack with pact / hexed weapon."
};
var PARTY_NOTES = {
	rest: "Warlock Pact slots refill on short rest — nova often, then short rest. Don’t long-rest hoard like a wizard.",
	backup: "Early Act 1 active four: You + Shadowheart + Astarion + Lae’zel (temp). When Minthara is ready, bench Lae’zel. Gale stays camp. Hireling only if you drop Lae’zel early.",
	face: "You’re the CHA face. Astarion covers locks/stealth; Shadowheart covers religion/insight soft spots."
};
/** Final / planned permanent party */
var PARTY = [
	{
		id: "tav",
		name: "You (Dark Urge)",
		role: "Face + Nova",
		origin: "The Dark Urge",
		race: "Lolth-Sworn Drow (recommended)",
		classPath: "Warlock → Hexblade · Pact of the Blade @3",
		stats: "Target: STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17",
		why: "CHA face + melee via Bind Hexed Weapon from level 1. Eldritch Blast + Booming Blade. Haunted One locked.",
		darkPath: "Lean into the Urge. Absolute early, Murder Tribunal later.",
		combatRole: "Curse → weapon nova / EB. Short-rest slots.",
		levels: [
			{
				level: "1",
				note: "Hexblade. 2 cantrips: EB + Booming Blade. 2 spells: Hex + Shield. Bind Hexed Weapon."
			},
			{
				level: "2",
				note: "Spell step: +1 spell. Then Invocations: Agonising Blast + Devil’s Sight."
			},
			{
				level: "3",
				note: "Pact of the Blade."
			},
			{
				level: "4",
				note: "ASI → CHA. 3rd cantrip (Mage Hand)."
			},
			{
				level: "5",
				note: "Deepened Pact Extra Attack. Big spike."
			},
			{
				level: "8+",
				note: "Finish CHA 20. Optional later: 2 Paladin for smites (respec)."
			}
		],
		openers: [
			"Hexblade’s Curse / Hex on boss",
			"Booming Blade attack",
			"Eldritch Blast for range / finishers"
		]
	},
	{
		id: "shadowheart",
		name: "Shadowheart",
		role: "Control + Support",
		origin: "Companion (race fixed)",
		race: "High Half-Elf — fixed",
		classPath: "Cleric → Death Domain (Withers respec)",
		stats: "WIS primary · CON secondary (soft)",
		why: "Spirit Guardians + control. Shar path for dark run.",
		darkPath: "Shar loyalty → kill Nightsong → Dark Justiciar.",
		combatRole: "SG + Hold Person + Bless.",
		levels: [
			{
				level: "Respec",
				note: "Withers → Cleric → Death Domain."
			},
			{
				level: "4",
				note: "War Caster."
			},
			{
				level: "5",
				note: "Spirit Guardians (necrotic)."
			},
			{
				level: "6",
				note: "Inescapable Destruction."
			}
		],
		openers: [
			"Spirit Guardians",
			"Hold Person key threats",
			"Bless if needed"
		]
	},
	{
		id: "astarion",
		name: "Astarion",
		role: "Ranged / Skills",
		origin: "Companion (race fixed)",
		race: "High Elf — fixed",
		classPath: "Rogue → Swashbuckler (or Thief)",
		stats: "DEX primary",
		why: "Locks, sneak, Ascension power spike.",
		darkPath: "Support Cazador Ascension for max power.",
		combatRole: "Sneak attack + skills.",
		levels: [{
			level: "3",
			note: "Swashbuckler (or Thief for bonus actions)."
		}, {
			level: "4",
			note: "Sharpshooter or DEX ASI."
		}],
		openers: [
			"Hide / high ground",
			"Sneak attack",
			"Bonus offhand"
		]
	},
	{
		id: "minthara",
		name: "Minthara",
		role: "Frontline Destroyer",
		origin: "Companion — Absolute / raid path",
		race: "Lolth-Sworn Drow — fixed",
		classPath: "Giant Barb or Oathbreaker (Withers)",
		stats: "STR primary",
		why: "Dark companion melee — replaces Lae’zel as permanent frontline.",
		darkPath: "Raid Grove → free at Moonrise if needed.",
		combatRole: "Throws / smites.",
		levels: [{
			level: "Recruit",
			note: "Respec after free/recruit. Bench Lae’zel."
		}, {
			level: "5",
			note: "Extra Attack."
		}],
		openers: [
			"Rage / smite",
			"Throw or GWM",
			"Shove elevation"
		]
	}
];
/** Temporary Act 1 bench note — not permanent party */
var TEMP_COMPANIONS = [{
	id: "laezel",
	name: "Lae’zel (temporary)",
	role: "Frontline Destroyer",
	origin: "Companion — not final dark four",
	race: "Githyanki — fixed",
	classPath: "Fighter (default) · soft: Battlemaster",
	stats: "STR primary · heavy armour",
	why: "Best early tank/DPS until Minthara. Everburn Blade carrier. Strong at Creche.",
	darkPath: "She dislikes a lot of Absolute softness/evil she reads as weakness — approval may tank. Still fine to use her for power, then camp her.",
	combatRole: "Melee pressure, Action Surge, heavy hits.",
	levels: [
		{
			level: "Now",
			note: "Keep leveling while she’s active — don’t waste her."
		},
		{
			level: "Soft respec",
			note: "Battlemaster for Trip/Menacing attacks if you want more control."
		},
		{
			level: "Bench",
			note: "When Minthara joins: camp Lae’zel, move Adamantine/big weapons over."
		}
	],
	openers: [
		"Action Surge on bosses",
		"Trip / shove",
		"Everburn swings"
	]
}];
var EMPTY = {
	version: 3,
	quests: {},
	questsSkip: {},
	items: {},
	itemsSkip: {},
	walk: {},
	walkSkip: {},
	levels: {},
	levelsSkip: {},
	missables: {},
	missablesSkip: {},
	loadouts: {},
	loadoutsSkip: {},
	illithid: {},
	illithidSkip: {},
	approval: {},
	approvalSkip: {},
	notes: {},
	longRests: 0,
	sessionStartedAt: null,
	compactMode: false,
	actFilter: 0
};
function statusOf(done, skip, id) {
	if (done[id]) return "done";
	if (skip[id]) return "skipped";
	return "open";
}
function getStatus(done, skip, id) {
	return statusOf(done, skip, id);
}
function applyToggle(done, skip, id) {
	const isDone = !!done[id];
	const nextDone = { ...done };
	const nextSkip = { ...skip };
	if (isDone) delete nextDone[id];
	else {
		nextDone[id] = true;
		delete nextSkip[id];
	}
	return {
		done: nextDone,
		skip: nextSkip
	};
}
function applySkip(done, skip, id) {
	const isSkipped = !!skip[id];
	const nextDone = { ...done };
	const nextSkip = { ...skip };
	if (isSkipped) delete nextSkip[id];
	else {
		nextSkip[id] = true;
		delete nextDone[id];
	}
	return {
		done: nextDone,
		skip: nextSkip
	};
}
function pairToggle(doneKey, skipKey, id) {
	return (s) => {
		const { done, skip } = applyToggle(s[doneKey], s[skipKey], id);
		return {
			[doneKey]: done,
			[skipKey]: skip
		};
	};
}
function pairSkip(doneKey, skipKey, id) {
	return (s) => {
		const { done, skip } = applySkip(s[doneKey], s[skipKey], id);
		return {
			[doneKey]: done,
			[skipKey]: skip
		};
	};
}
var useProgress = create()(persist((set, get) => ({
	...EMPTY,
	toggleQuest: (id) => set(pairToggle("quests", "questsSkip", id)),
	skipQuest: (id) => set(pairSkip("quests", "questsSkip", id)),
	toggleItem: (id) => set(pairToggle("items", "itemsSkip", id)),
	skipItem: (id) => set(pairSkip("items", "itemsSkip", id)),
	toggleWalk: (id) => set(pairToggle("walk", "walkSkip", id)),
	skipWalk: (id) => set(pairSkip("walk", "walkSkip", id)),
	toggleLevel: (id) => set(pairToggle("levels", "levelsSkip", id)),
	skipLevel: (id) => set(pairSkip("levels", "levelsSkip", id)),
	toggleMissable: (id) => set(pairToggle("missables", "missablesSkip", id)),
	skipMissable: (id) => set(pairSkip("missables", "missablesSkip", id)),
	toggleLoadout: (id) => set(pairToggle("loadouts", "loadoutsSkip", id)),
	skipLoadout: (id) => set(pairSkip("loadouts", "loadoutsSkip", id)),
	toggleIllithid: (id) => set(pairToggle("illithid", "illithidSkip", id)),
	skipIllithid: (id) => set(pairSkip("illithid", "illithidSkip", id)),
	toggleApproval: (id) => set(pairToggle("approval", "approvalSkip", id)),
	skipApproval: (id) => set(pairSkip("approval", "approvalSkip", id)),
	setNote: (id, text) => set((s) => {
		const notes = { ...s.notes };
		if (!text.trim()) delete notes[id];
		else notes[id] = text;
		return { notes };
	}),
	incLongRest: () => set((s) => ({ longRests: s.longRests + 1 })),
	decLongRest: () => set((s) => ({ longRests: Math.max(0, s.longRests - 1) })),
	startSession: () => set({ sessionStartedAt: Date.now() }),
	clearSession: () => set({ sessionStartedAt: null }),
	setCompactMode: (v) => set({ compactMode: v }),
	resetAll: () => set({
		...EMPTY,
		compactMode: get().compactMode
	}),
	setActFilter: (act) => set({ actFilter: act }),
	exportSnapshot: () => {
		const s = get();
		return {
			version: 3,
			quests: s.quests,
			questsSkip: s.questsSkip,
			items: s.items,
			itemsSkip: s.itemsSkip,
			walk: s.walk,
			walkSkip: s.walkSkip,
			levels: s.levels,
			levelsSkip: s.levelsSkip,
			missables: s.missables,
			missablesSkip: s.missablesSkip,
			loadouts: s.loadouts,
			loadoutsSkip: s.loadoutsSkip,
			illithid: s.illithid,
			illithidSkip: s.illithidSkip,
			approval: s.approval,
			approvalSkip: s.approvalSkip,
			notes: s.notes,
			longRests: s.longRests,
			sessionStartedAt: s.sessionStartedAt,
			compactMode: s.compactMode,
			actFilter: s.actFilter
		};
	},
	importSnapshot: (data) => set((s) => ({
		...s,
		...EMPTY,
		...data,
		version: 3,
		compactMode: data.compactMode ?? s.compactMode
	}))
}), {
	name: "bg3-dark-run-progress",
	version: 3
}));
function countProgress(ids, done, skip) {
	let doneN = 0;
	let skipN = 0;
	for (const id of ids) if (done[id]) doneN += 1;
	else if (skip[id]) skipN += 1;
	const total = ids.length;
	const resolved = doneN + skipN;
	return {
		doneN,
		skipN,
		resolved,
		total,
		donePct: total ? Math.round(doneN / total * 100) : 0,
		skipPct: total ? Math.round(skipN / total * 100) : 0,
		resolvedPct: total ? Math.round(resolved / total * 100) : 0
	};
}
/** Single-fill progress (done only). */
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-elevated)]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-[var(--color-primary)] transition-transform duration-300 ease-out",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
/** Stacked bar: done (primary) + skipped (warn) over empty track. */
function DualProgress({ donePct, skipPct, className, showLegend = true }) {
	const d = Math.max(0, Math.min(100, donePct));
	const s = Math.max(0, Math.min(100 - d, skipPct));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-elevated)]",
			role: "progressbar",
			"aria-valuenow": d + s,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-[var(--color-primary)] transition-[width] duration-300 ease-out",
					style: { width: `${d}%` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-[var(--color-warn)] transition-[width] duration-300 ease-out",
					style: { width: `${s}%` }
				})]
			})
		}), showLegend ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-3 text-[10px] uppercase tracking-wide text-[var(--color-subtle)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" }), "Done"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-warn)]" }), "Skipped"]
			})]
		}) : null]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors", {
	variants: { variant: {
		default: "border-transparent bg-[var(--color-primary)] text-[var(--color-primary-fg)]",
		secondary: "border-[var(--color-border)] bg-[var(--color-elevated)] text-[var(--color-muted)]",
		outline: "border-[var(--color-border-strong)] text-[var(--color-fg)]",
		success: "border-transparent bg-[color-mix(in_oklab,var(--color-success)_20%,transparent)] text-[var(--color-success)]",
		warn: "border-transparent bg-[color-mix(in_oklab,var(--color-warn)_20%,transparent)] text-[var(--color-warn)]",
		danger: "border-transparent bg-[color-mix(in_oklab,var(--color-danger)_20%,transparent)] text-[var(--color-danger)]"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function OverviewPanel({ onNavigate }) {
	const { quests, questsSkip, items, itemsSkip, walk, walkSkip, missables, missablesSkip, levels, levelsSkip, resetAll } = useProgress();
	const walkStats = countProgress(WALKTHROUGH.map((s) => s.id), walk, walkSkip);
	const trickStats = countProgress(TRICKS.map((t) => `trick-${t.id}`), walk, walkSkip);
	const questStats = countProgress(QUESTS.map((q) => q.id), quests, questsSkip);
	const itemStats = countProgress(ITEMS.map((i) => i.id), items, itemsSkip);
	const missStats = countProgress(MISSABLES.map((m) => m.id), missables, missablesSkip);
	const levelStats = countProgress(LEVEL_PICKS.map((l) => l.id), levels, levelsSkip);
	const cards = [
		{
			tab: "where",
			title: "Where am I?",
			desc: "Area focus",
			icon: MapPin,
			detail: "Filter the route by location"
		},
		{
			tab: "walk",
			title: "Walkthrough",
			desc: `${walkStats.doneN} done · ${walkStats.skipN} skip`,
			icon: Map$1,
			detail: "Quests + items in path order",
			donePct: walkStats.donePct,
			skipPct: walkStats.skipPct
		},
		{
			tab: "missables",
			title: "Missables",
			desc: `${missStats.doneN} handled · ${missStats.skipN} skip`,
			icon: TriangleAlert,
			detail: "Do before locks",
			donePct: missStats.donePct,
			skipPct: missStats.skipPct
		},
		{
			tab: "levels",
			title: "Level-ups",
			desc: `${levelStats.doneN} done · ${levelStats.skipN} skip`,
			icon: GraduationCap,
			detail: "Per character picks",
			donePct: levelStats.donePct,
			skipPct: levelStats.skipPct
		},
		{
			tab: "tricks",
			title: "Loot & tricks",
			desc: `${trickStats.doneN} done · ${trickStats.skipN} skip`,
			icon: Sparkles,
			detail: "Hidden gear + cheese",
			donePct: trickStats.donePct,
			skipPct: trickStats.skipPct
		},
		{
			tab: "items",
			title: "Items",
			desc: `${itemStats.doneN} done · ${itemStats.skipN} skip`,
			icon: Gem,
			detail: "Must / strong loot",
			donePct: itemStats.donePct,
			skipPct: itemStats.skipPct
		},
		{
			tab: "party",
			title: "Party",
			desc: `${PARTY.length} builds`,
			icon: Skull,
			detail: "Create + builds"
		},
		{
			tab: "quests",
			title: "Quests",
			desc: `${questStats.doneN} done · ${questStats.skipN} skip`,
			icon: ScrollText,
			detail: "By act",
			donePct: questStats.donePct,
			skipPct: questStats.skipPct
		},
		{
			tab: "combat",
			title: "Combat",
			desc: "Openers",
			icon: Swords,
			detail: "Trash / boss scripts"
		},
		{
			tab: "sync",
			title: "Sync",
			desc: "GitHub Gist + JSON",
			icon: Cloud,
			detail: "Cloud save & backup"
		},
		{
			tab: "search",
			title: "Search",
			desc: "Find anything",
			icon: Search,
			detail: "Walk · tricks · items"
		},
		{
			tab: "proof",
			title: "Proof",
			desc: "Sources",
			icon: BadgeCheck,
			detail: "Verified vs soft"
		}
	];
	const c = CREATE_CHARACTER;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "danger",
						children: "Dark Urge · Absolute path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight leading-tight max-w-xl",
						children: "Full companion — walk, missables, levels, cloud sync."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed",
						children: [
							"Red = done, amber = skip. Use",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[var(--color-fg)] font-medium",
								children: "Sync"
							}),
							" ",
							"for GitHub Gist backup (token with gist scope)."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-primary)]/40 bg-[var(--color-surface)] p-5 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium text-[var(--color-primary)] uppercase tracking-wide",
						children: "Create character"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-2 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-[var(--color-subtle)]",
								children: "Origin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-medium",
								children: c.origin
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-[var(--color-subtle)]",
								children: "Race"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-medium",
								children: [
									c.race,
									" — ",
									c.subrace
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-[var(--color-subtle)]",
								children: "Class"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-medium",
								children: "Warlock — Hexblade · Haunted One"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-[var(--color-subtle)]",
								children: "Spells L1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-medium",
								children: [
									c.cantrips.join(" · "),
									" / ",
									c.spells.join(" · ")
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => onNavigate("where"),
							children: "Where am I?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => onNavigate("sync"),
							children: "GitHub sync"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: cards.map((card) => {
					const Icon = card.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onNavigate(card.tab),
						className: "text-left rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-150 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-elevated)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-muted)] mt-0.5",
										children: card.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[var(--color-subtle)] mt-2",
										children: card.detail
									}),
									typeof card.donePct === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
										donePct: card.donePct,
										skipPct: card.skipPct ?? 0,
										showLegend: false,
										className: "mt-3"
									}) : null
								]
							})]
						})
					}, card.tab);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Quick tips"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "text-sm text-[var(--color-muted)] space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Session timer + long-rest counter under the title" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Compact mode for phone-at-desk play" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Notes on levels & missables save with progress" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => resetAll(),
						children: "Reset all checklists"
					})
				]
			})
		]
	});
}
var statEntries = Object.entries(CREATE_CHARACTER.stats);
function CreateCharacter() {
	const c = CREATE_CHARACTER;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-[var(--radius-xl)] border border-[var(--color-primary)]/40 bg-[var(--color-surface)] p-5 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "danger",
							children: "Character create"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "success",
							children: "Wiki-checked hard rules"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight text-[var(--color-fg)]",
						children: "Exact picks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)]",
						children: "Hard rules match bg3.wiki. Soft tips are labelled. If the game UI disagrees, trust the game and tell me."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: [
					{
						label: "Origin",
						value: c.origin
					},
					{
						label: "Race",
						value: c.race
					},
					{
						label: "Subrace",
						value: c.subrace
					},
					{
						label: "Class",
						value: c.class
					},
					{
						label: "Subclass",
						value: c.subclass
					},
					{
						label: "Background",
						value: c.background
					}
				].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 items-start border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-primary)] tabular",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-[var(--color-subtle)]",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-[var(--color-fg)]",
						children: row.value
					})] })]
				}, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)] p-3 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]",
					children: "Background"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-fg)] leading-relaxed",
					children: c.backgroundNote
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-3 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-[var(--color-subtle)]",
					children: "Why this race"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-fg)] leading-relaxed",
					children: c.whyRace
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2",
					children: "Ability targets (soft)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
					children: statEntries.map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-2 py-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase text-[var(--color-subtle)]",
							children: key
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-semibold tabular text-[var(--color-fg)]",
							children: val
						})]
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-[var(--color-muted)] leading-relaxed",
					children: c.statsNote
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1",
							children: "Cantrips — pick 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-fg)]",
							children: c.cantrips.join(" · ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[var(--color-muted)]",
							children: c.cantripsNote
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1",
							children: "Spells — pick 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-fg)]",
							children: c.spells.join(" · ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[var(--color-muted)]",
							children: c.spellsNote
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1",
							children: "Skills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-muted)]",
							children: c.skills
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wide text-[var(--color-subtle)]",
								children: "Level notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-muted)]",
								children: c.level1Note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-muted)]",
								children: c.level2Note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-muted)]",
								children: c.level3Note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-muted)]",
								children: c.level5Note
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2",
				children: "Race alternatives (soft)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: c.alternatives.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-sm text-[var(--color-muted)] leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium text-[var(--color-fg)]",
						children: [
							a.race,
							" — ",
							a.subrace,
							":",
							" "
						]
					}), a.note]
				}, a.subrace))
			})] })
		]
	});
}
var ROLE_ICON = {
	"Face + Nova": Sparkles,
	"Control + Support": Skull,
	"Ranged / Skills": User,
	"Frontline Destroyer": Swords
};
function MemberCard({ m, temp }) {
	const Icon = ROLE_ICON[m.role] ?? Sparkles;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[var(--color-fg)]",
						children: m.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--color-muted)]",
						children: m.role
					})] })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5 justify-end",
					children: [temp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "warn",
						children: "Temp"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: m.origin
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--color-subtle)] text-xs uppercase tracking-wide",
						children: "Race"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-[var(--color-fg)]",
						children: m.race
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--color-subtle)] text-xs uppercase tracking-wide",
						children: "Build"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-[var(--color-fg)]",
						children: m.classPath
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--color-subtle)] text-xs uppercase tracking-wide",
						children: "Stats"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-mono text-xs text-[var(--color-muted)]",
						children: m.stats
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[var(--color-subtle)] text-xs uppercase tracking-wide",
						children: "Why"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-[var(--color-muted)] leading-relaxed",
						children: m.why
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)] p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[var(--color-primary)] text-xs font-medium uppercase tracking-wide mb-1",
							children: "Dark path"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm text-[var(--color-fg)] leading-relaxed",
							children: m.darkPath
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2",
				children: "Level notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: m.levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2 text-sm text-[var(--color-muted)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-medium text-[var(--color-fg)] tabular w-20",
						children: l.level
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-relaxed",
						children: l.note
					})]
				}, l.level))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2",
				children: "Combat openers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "list-decimal list-inside space-y-1 text-sm text-[var(--color-muted)]",
				children: m.openers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: o }, o))
			})] })
		]
	});
}
function PartyPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight text-[var(--color-fg)]",
					children: "Dark party"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed",
					children: "Final four below. Early Act 1: use Lae’zel as temp frontline until Minthara (see temporary card)."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCharacter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: PARTY.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { m }, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium uppercase tracking-wide text-[var(--color-muted)]",
					children: "Temporary (Act 1)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: TEMP_COMPANIONS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
						m,
						temp: true
					}, m.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PARTY_NOTES.rest }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PARTY_NOTES.backup }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PARTY_NOTES.face })
				]
			})
		]
	});
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("peer h-5 w-5 shrink-0 rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[var(--color-primary)] data-[state=checked]:bg-[var(--color-primary)] data-[state=checked]:text-[var(--color-primary-fg)]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: "flex items-center justify-center text-current",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "h-3.5 w-3.5",
			strokeWidth: 3
		})
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
/** Preserve line breaks in multi-step details. */
function DetailText({ text }) {
	const parts = text.split("\n").filter((p) => p.length > 0);
	if (parts.length <= 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-wrap",
		children: text
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 space-y-2 text-sm text-[var(--color-muted)] leading-relaxed",
		children: parts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "whitespace-pre-wrap",
			children: p
		}, i))
	});
}
function CheckRow({ id, status, onToggle, onSkip, title, subtitle, meta, badges, children }) {
	const done = status === "done";
	const skipped = status === "skipped";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors duration-150", "hover:border-[var(--color-border-strong)]", done && "opacity-80 bg-[var(--color-elevated)]", skipped && "opacity-80 bg-[color-mix(in_oklab,var(--color-warn)_8%,var(--color-surface))]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			id,
			checked: done,
			onCheckedChange: () => onToggle(),
			className: "mt-0.5",
			"aria-label": done ? "Mark not done" : "Mark done"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 space-y-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-medium text-[var(--color-fg)] leading-snug", done && "line-through text-[var(--color-muted)]", skipped && "text-[var(--color-muted)]"),
							children: title
						}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailText, { text: subtitle }) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [meta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: skipped ? "default" : "secondary",
							className: cn("h-7 px-2.5 text-xs", skipped && "bg-[var(--color-warn)] text-[var(--color-primary-fg)] hover:opacity-90"),
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								onSkip();
							},
							children: skipped ? "Unskip" : "Skip"
						})]
					})]
				}),
				skipped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "warn",
					children: "Skipped"
				}) : null,
				badges && badges.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 pt-0.5",
					children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: b.variant ?? "secondary",
						children: b.label
					}, b.label))
				}) : null,
				children
			]
		})]
	});
}
var PRIORITY_VARIANT = {
	critical: "danger",
	important: "warn",
	optional: "secondary"
};
function QuestsPanel() {
	const { quests, questsSkip, toggleQuest, skipQuest, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? QUESTS : QUESTS.filter((q) => q.act === actFilter);
	const stats = countProgress(filtered.map((q) => q.id), quests, questsSkip);
	const byAct = [
		1,
		2,
		3
	].map((act) => ({
		act,
		items: filtered.filter((q) => q.act === act)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight",
						children: "Important quests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)] mt-1",
						children: "Story path for a dark run. Skip if you don't care — amber on the bar."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							stats.doneN,
							" done · ",
							stats.skipN,
							" skip · ",
							stats.total
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						0,
						1,
						2,
						3
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: actFilter === a ? "default" : "secondary",
						onClick: () => setActFilter(a),
						children: a === 0 ? "All acts" : `Act ${a}`
					}, a))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: byAct.map(({ act, items }) => items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide",
					children: ACT_LABELS[act]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: items.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckRow, {
						id: `quest-${q.id}`,
						status: getStatus(quests, questsSkip, q.id),
						onToggle: () => toggleQuest(q.id),
						onSkip: () => skipQuest(q.id),
						title: q.title,
						subtitle: q.why,
						badges: [{
							label: q.priority,
							variant: PRIORITY_VARIANT[q.priority]
						}],
						children: [q.darkChoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2", "bg-[var(--color-accent-soft)] text-[var(--color-fg)] border border-[var(--color-border)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[var(--color-primary)] font-medium",
								children: ["Dark choice:", " "]
							}), q.darkChoice]
						}) : null, q.tip ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-xs text-[var(--color-subtle)]",
							children: ["Tip: ", q.tip]
						}) : null]
					}, q.id))
				})]
			}, act))
		})]
	});
}
var PRI = {
	must: "danger",
	strong: "warn",
	nice: "secondary"
};
function ItemsPanel() {
	const { items, itemsSkip, toggleItem, skipItem, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? ITEMS : ITEMS.filter((i) => i.act === actFilter);
	const stats = countProgress(filtered.map((i) => i.id), items, itemsSkip);
	const byAct = [
		1,
		2,
		3
	].map((act) => ({
		act,
		list: filtered.filter((i) => i.act === act)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight",
						children: "Best items"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)] mt-1",
						children: "Done (red) or Skip (amber). Both clear the list."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							stats.doneN,
							" done · ",
							stats.skipN,
							" skip · ",
							stats.total
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						0,
						1,
						2,
						3
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: actFilter === a ? "default" : "secondary",
						onClick: () => setActFilter(a),
						children: a === 0 ? "All acts" : `Act ${a}`
					}, a))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: byAct.map(({ act, list }) => list.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide",
					children: ["Act ", act]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
						id: `item-${item.id}`,
						status: getStatus(items, itemsSkip, item.id),
						onToggle: () => toggleItem(item.id),
						onSkip: () => skipItem(item.id),
						title: item.name,
						subtitle: `${item.where} — ${item.why}`,
						badges: [
							{
								label: item.priority,
								variant: PRI[item.priority]
							},
							{
								label: item.slot,
								variant: "outline"
							},
							...item.who.map((w) => ({
								label: WHO_LABELS[w] ?? w,
								variant: "secondary"
							}))
						],
						children: item.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.sourceUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]",
							onClick: (e) => e.stopPropagation(),
							children: ["bg3.wiki", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
						}) : null
					}, item.id))
				})]
			}, act))
		})]
	});
}
var COMBAT_TIPS = [
	{
		id: "c-init",
		title: "Win initiative",
		body: "Alert or high DEX on SH + Astarion. First round Hold Person / Command turns bosses into loot piñatas.",
		kind: "general"
	},
	{
		id: "c-short",
		title: "Short-rest economy",
		body: "Warlock slots refill on short rest. Nova every hard fight, then short rest. Don’t hoard like a wizard.",
		kind: "general"
	},
	{
		id: "c-trash",
		title: "Trash packs",
		body: "SH: Spirit Guardians + walk. Tav: EB / quick curse only if needed. Astarion: cleave weak. Minthara: throw or cleave. Save big slots.",
		kind: "trash"
	},
	{
		id: "c-boss",
		title: "Boss script",
		body: "1) SH Hold Person / hold key add. 2) Tav Hexblade’s Curse + Hex. 3) Phalar Shriek. 4) Whole party dumps damage. 5) Luck of Far Realms / Sweetheart crit.",
		kind: "boss"
	},
	{
		id: "c-undead",
		title: "Undead / necrotic",
		body: "Death SH Inescapable Destruction ignores necrotic resist. Radiant options still fine on others. Watch turn undead niches.",
		kind: "undead"
	},
	{
		id: "c-construct",
		title: "Constructs / steel",
		body: "Lightning after Wet helps. Foundry sabotage makes Act 3 constructs trivial. Force damage weapons if stuck.",
		kind: "construct"
	},
	{
		id: "c-darkness",
		title: "Darkness cheese",
		body: "Devil’s Sight + Darkness. Enemies miss; you don’t. Keep allies inside only if they can see too.",
		kind: "general"
	},
	{
		id: "c-elixir",
		title: "Elixir of the day",
		body: "One elixir at a time. Bloodlust / Vigilance / Hill Giant STR on Minthara are top. Potions stack more freely.",
		kind: "general"
	}
];
var OPENERS = [
	{
		who: "Dark Urge",
		steps: [
			"Hexblade’s Curse",
			"Hex (if lasting fight)",
			"Booming Blade attack or EB"
		]
	},
	{
		who: "Shadowheart",
		steps: [
			"Spirit Guardians",
			"Hold Person priority target",
			"Dodge / warcast maintain"
		]
	},
	{
		who: "Astarion",
		steps: [
			"Hide or range high ground",
			"Sneak attack",
			"Bonus offhand / hand crossbow"
		]
	},
	{
		who: "Minthara",
		steps: [
			"Rage / smite setup",
			"Throw or GWM swing",
			"Shove off elevation if free kill"
		]
	}
];
function CombatPanel() {
	const [kind, setKind] = (0, import_react.useState)("all");
	const tips = kind === "all" ? COMBAT_TIPS : COMBAT_TIPS.filter((t) => t.kind === kind || t.kind === "general");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight",
						children: "Combat rush"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)]",
						children: "Openers + fight-type scripts. Soft playstyle tips."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: [
							"all",
							"trash",
							"boss",
							"undead",
							"construct"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: kind === k ? "default" : "secondary",
							onClick: () => setKind(k),
							children: k
						}, k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide",
					children: "Party openers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: OPENERS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-[var(--color-fg)]",
							children: o.who
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-2 list-decimal list-inside text-sm text-[var(--color-muted)] space-y-1",
							children: o.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						})]
					}, o.who))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "space-y-2",
				children: tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t.title
						}), t.kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: t.kind
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed",
						children: t.body
					})]
				}, t.id))
			})
		]
	});
}
var PROOF_PROCESS = [
	{
		step: 1,
		title: "Check the class table",
		body: "Cantrips known, spells known, slots, and level features come from bg3.wiki class tables — not memory."
	},
	{
		step: 2,
		title: "Match in-game spelling",
		body: "e.g. Agonising Blast (with S). Invocations ≠ spells — separate level-up screens."
	},
	{
		step: 3,
		title: "Label soft advice",
		body: "Build preferences (race, feats, companion subclasses) are soft unless the wiki hard-locks them (Haunted One on Dark Urge)."
	},
	{
		step: 4,
		title: "Correct when you report UI",
		body: "If the create/level screen differs, we update data and mark the fact corrected."
	}
];
var VERIFIED_FACTS = [
	{
		id: "v-warlock-cantrips",
		topic: "Warlock cantrips known",
		fact: "Warlock knows 2 cantrips at levels 1–3, and 3 cantrips at level 4+.",
		claim: "Warlock knows 2 cantrips at levels 1–3, and 3 cantrips at level 4+.",
		source: "bg3.wiki — Warlock class table",
		sourceUrl: "https://bg3.wiki/wiki/Warlock",
		checked: "2026-08-09",
		status: "corrected",
		note: "Earlier error: “3 cantrips at create”. Third cantrip comes at Warlock 4."
	},
	{
		id: "v-warlock-spells-l1",
		topic: "Warlock spells known level 1",
		fact: "Warlock knows 2 spells at level 1 (and has 1 Pact Magic slot).",
		claim: "Warlock knows 2 spells at level 1 (and has 1 Pact Magic slot).",
		source: "bg3.wiki — Warlock class table",
		sourceUrl: "https://bg3.wiki/wiki/Warlock",
		checked: "2026-08-09",
		status: "verified"
	},
	{
		id: "v-warlock-l2-steps",
		topic: "Warlock level 2 steps",
		fact: "At level 2: Spells Known becomes 3 (pick +1 spell), then choose 2 Eldritch Invocations on a separate screen.",
		claim: "At level 2: Spells Known becomes 3 (pick +1 spell), then choose 2 Eldritch Invocations on a separate screen.",
		source: "bg3.wiki — Warlock / Eldritch Invocation",
		sourceUrl: "https://bg3.wiki/wiki/Warlock",
		checked: "2026-08-09",
		status: "verified",
		note: "Agonising Blast is an Invocation, not a spell — it never appears on the spell list."
	},
	{
		id: "v-agonising",
		topic: "Agonising Blast spelling",
		fact: "In-game / wiki spelling is Agonising Blast (British S), available as Invocation at Warlock 2+.",
		claim: "In-game / wiki spelling is Agonising Blast (British S), available as Invocation at Warlock 2+.",
		source: "bg3.wiki — Agonising Blast",
		sourceUrl: "https://bg3.wiki/wiki/Agonising_Blast",
		checked: "2026-08-09",
		status: "verified"
	},
	{
		id: "v-hexblade-shield",
		topic: "Hexblade expanded spells",
		fact: "Hexblade expanded list includes Shield, Wrathful Smite, Blindness, Branding Smite, Blink, Elemental Weapon.",
		claim: "Hexblade expanded list includes Shield, Wrathful Smite, Blindness, Branding Smite, Blink, Elemental Weapon.",
		source: "bg3.wiki — The Hexblade",
		sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
		checked: "2026-08-09",
		status: "verified",
		note: "Shield is only available because of Hexblade — not on base Warlock list."
	},
	{
		id: "v-hexblade-l1",
		topic: "Hexblade features at 1",
		fact: "Hexblade Warrior (Bind Hexed Weapon, medium armour, shields, martial weapons) and Hexblade’s Curse at level 1.",
		claim: "Hexblade Warrior (Bind Hexed Weapon, medium armour, shields, martial weapons) and Hexblade’s Curse at level 1.",
		source: "bg3.wiki — The Hexblade",
		sourceUrl: "https://bg3.wiki/wiki/The_Hexblade",
		checked: "2026-08-09",
		status: "verified"
	},
	{
		id: "v-warlock-skills",
		topic: "Warlock skill list",
		fact: "Warlock may choose skills from: Arcana, Deception, History, Intimidation, Investigation, Religion only.",
		claim: "Warlock may choose skills from: Arcana, Deception, History, Intimidation, Investigation, Religion only.",
		source: "bg3.wiki — Warlock",
		sourceUrl: "https://bg3.wiki/wiki/Warlock",
		checked: "2026-08-09",
		status: "corrected",
		note: "Earlier error: listing Persuasion as a Warlock skill. Use Beguiling Influence for Persuasion."
	},
	{
		id: "v-haunted-one",
		topic: "Haunted One background",
		fact: "Haunted One grants Medicine and Intimidation. Dark Urge origin locks this background.",
		claim: "Haunted One grants Medicine and Intimidation. Dark Urge origin locks this background.",
		source: "bg3.wiki — Haunted One / The Dark Urge",
		sourceUrl: "https://bg3.wiki/wiki/Haunted_One",
		checked: "2026-08-09",
		status: "verified"
	},
	{
		id: "v-drow",
		topic: "Lolth-Sworn Drow",
		fact: "Drow get Superior Darkvision, Drow Weapon Training, Perception proficiency, and Drow Magic.",
		claim: "Drow get Superior Darkvision, Drow Weapon Training, Perception proficiency, and Drow Magic.",
		source: "bg3.wiki — Drow / Lolth-Sworn Drow",
		sourceUrl: "https://bg3.wiki/wiki/Drow",
		checked: "2026-08-09",
		status: "verified"
	},
	{
		id: "v-pact-blade",
		topic: "Pact of the Blade",
		fact: "Pact Boon chosen at Warlock 3. Pact of the Blade is the melee pact; Deepened Pact Extra Attack at 5.",
		claim: "Pact Boon chosen at Warlock 3. Pact of the Blade is the melee pact; Deepened Pact Extra Attack at 5.",
		source: "bg3.wiki — Pact of the Blade / Warlock",
		sourceUrl: "https://bg3.wiki/wiki/Pact_of_the_Blade",
		checked: "2026-08-09",
		status: "verified"
	}
];
var STATUS = {
	verified: {
		label: "Verified",
		variant: "success"
	},
	corrected: {
		label: "Corrected",
		variant: "warn"
	},
	soft: {
		label: "Soft advice",
		variant: "secondary"
	}
};
function ProofPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Proof & sources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed",
					children: [
						"Earlier create-screen advice had errors (3 cantrips, free background pick, Persuasion on Warlock). Hard rules below are checked against",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://bg3.wiki",
							target: "_blank",
							rel: "noreferrer",
							className: "text-[var(--color-primary)] underline-offset-2 hover:underline",
							children: "bg3.wiki"
						}),
						". Soft advice is labelled."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-[var(--color-fg)]",
					children: "How we proof going forward"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3",
					children: PROOF_PROCESS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-elevated)] text-xs font-semibold tabular",
							children: p.step
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-[var(--color-fg)]",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-muted)] leading-relaxed",
							children: p.body
						})] })]
					}, p.step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium uppercase tracking-wide text-[var(--color-muted)]",
					children: "Fact list"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: VERIFIED_FACTS.map((f) => {
						const st = STATUS[f.status];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: st.variant,
										children: st.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: f.sourceUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]",
										children: [f.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[var(--color-fg)] leading-relaxed",
									children: f.claim
								}),
								f.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[var(--color-subtle)] leading-relaxed",
									children: f.note
								}) : null
							]
						}, f.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-[var(--color-subtle)] leading-relaxed",
				children: "In-game create screen always wins if something still mismatches. Message what you see on screen and we fix the data."
			})
		]
	});
}
function NoteField({ id, placeholder }) {
	const note = useProgress((s) => s.notes[id] ?? "");
	const setNote = useProgress((s) => s.setNote);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: note,
		onChange: (e) => setNote(id, e.target.value),
		onClick: (e) => e.stopPropagation(),
		placeholder: placeholder ?? "Personal note…",
		rows: 2,
		className: "mt-2 w-full resize-y rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
	});
}
var TYPE_LABEL$1 = {
	quest: "Quest",
	item: "Item",
	respec: "Respec",
	order: "Order",
	story: "Story"
};
var TYPE_VARIANT = {
	quest: "danger",
	item: "warn",
	respec: "success",
	order: "secondary",
	story: "outline"
};
/** Shared row for Walk + Where — same id, same text, same progress. */
function WalkStepRow({ step }) {
	const walk = useProgress((s) => s.walk);
	const walkSkip = useProgress((s) => s.walkSkip);
	const toggleWalk = useProgress((s) => s.toggleWalk);
	const skipWalk = useProgress((s) => s.skipWalk);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckRow, {
		id: `walk-${step.id}`,
		status: getStatus(walk, walkSkip, step.id),
		onToggle: () => toggleWalk(step.id),
		onSkip: () => skipWalk(step.id),
		title: step.title,
		subtitle: step.detail,
		badges: [
			{
				label: TYPE_LABEL$1[step.type],
				variant: TYPE_VARIANT[step.type]
			},
			{
				label: step.confidence === "verified" ? "Verified" : "Soft",
				variant: step.confidence === "verified" ? "success" : "secondary"
			},
			...step.who ? [{
				label: step.who,
				variant: "outline"
			}] : []
		],
		children: [
			step.darkNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2 bg-[var(--color-accent-soft)] border border-[var(--color-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[var(--color-primary)] font-medium",
					children: "Dark: "
				}), step.darkNote]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: step.sourceUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]",
				onClick: (e) => e.stopPropagation(),
				children: [step.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteField, { id: `note-walk-${step.id}` })
		]
	});
}
var TYPE_LABEL = {
	quest: "Quest",
	item: "Item",
	respec: "Respec",
	order: "Order",
	story: "Story"
};
function WalkthroughPanel() {
	const walk = useProgress((s) => s.walk);
	const walkSkip = useProgress((s) => s.walkSkip);
	const actFilter = useProgress((s) => s.actFilter);
	const setActFilter = useProgress((s) => s.setActFilter);
	const filtered = actFilter === 0 ? WALKTHROUGH : WALKTHROUGH.filter((s) => s.act === actFilter);
	const stats = countProgress(filtered.map((s) => s.id), walk, walkSkip);
	const chapters = [...new Set(filtered.map((s) => s.chapter))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight",
						children: "Dark path walkthrough"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed",
						children: [
							"Full route. Same checkboxes as",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[var(--color-fg)] font-medium",
								children: "Where"
							}),
							"— mark either place."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							stats.doneN,
							" done · ",
							stats.skipN,
							" skip · ",
							stats.total
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						0,
						1,
						2,
						3
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: actFilter === a ? "default" : "secondary",
						onClick: () => setActFilter(a),
						children: a === 0 ? "All acts" : `Act ${a}`
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 text-xs text-[var(--color-subtle)]",
					children: Object.keys(TYPE_LABEL).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: t === "quest" ? "danger" : t === "item" ? "warn" : t === "respec" ? "success" : t === "order" ? "secondary" : "outline",
						children: TYPE_LABEL[t]
					}, t))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: chapters.map((chapter) => {
				const steps = filtered.filter((s) => s.chapter === chapter);
				if (!steps.length) return null;
				const act = steps[0]?.act;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-[var(--color-fg)]",
							children: chapter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-[var(--color-subtle)]",
							children: ["Act ", act]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkStepRow, { step: s }, s.id))
					})]
				}, chapter);
			})
		})]
	});
}
function TricksPanel() {
	const { walk, walkSkip, toggleWalk, skipWalk } = useProgress();
	const [cat, setCat] = (0, import_react.useState)("all");
	const [act, setAct] = (0, import_react.useState)(0);
	const filtered = TRICKS.filter((t) => {
		if (cat !== "all" && t.category !== cat) return false;
		if (act !== 0 && t.act !== 0 && t.act !== act) return false;
		return true;
	});
	const stats = countProgress(filtered.map((t) => `trick-${t.id}`), walk, walkSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold tracking-tight",
							children: "Loot & tricks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed",
							children: "Mark done or skip. Red bar = done, amber = skipped."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[var(--color-muted)] tabular",
							children: [
								stats.doneN,
								" done · ",
								stats.skipN,
								" skip · ",
								stats.total
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
						donePct: stats.donePct,
						skipPct: stats.skipPct
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: cat === "all" ? "default" : "secondary",
							onClick: () => setCat("all"),
							children: "All"
						}), TRICK_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: cat === c.id ? "default" : "secondary",
							onClick: () => setCat(c.id),
							children: c.label
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							0,
							1,
							2,
							3
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: act === a ? "default" : "secondary",
							onClick: () => setAct(a),
							children: a === 0 ? "Any act" : `Act ${a}`
						}, a))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: filtered.map((t) => {
					const id = `trick-${t.id}`;
					const actLabel = t.act === 0 ? "Any act" : `Act ${t.act}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckRow, {
						id: `trick-row-${t.id}`,
						status: getStatus(walk, walkSkip, id),
						onToggle: () => toggleWalk(id),
						onSkip: () => skipWalk(id),
						title: t.title,
						subtitle: t.detail,
						badges: [
							{
								label: t.category,
								variant: "outline"
							},
							{
								label: t.confidence === "verified" ? "Verified" : "Soft",
								variant: t.confidence === "verified" ? "success" : "secondary"
							},
							{
								label: actLabel,
								variant: "secondary"
							}
						],
						children: [t.forParty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-[var(--color-muted)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[var(--color-fg)] font-medium",
								children: ["Best on:", " "]
							}), t.forParty]
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: t.sourceUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]",
							onClick: (e) => e.stopPropagation(),
							children: [t.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
						})]
					}, t.id);
				})
			}),
			!filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[var(--color-muted)]",
				children: "No tricks in filter."
			}) : null
		]
	});
}
function DetailBlock({ label, items }) {
	if (!items?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-wide text-[var(--color-subtle)]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-0.5 space-y-0.5 text-sm text-[var(--color-muted)]",
			children: items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", x] }, x))
		})]
	});
}
function LevelsPanel() {
	const { levels, levelsSkip, toggleLevel, skipLevel } = useProgress();
	const [member, setMember] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => member === "all" ? LEVEL_PICKS : LEVEL_PICKS.filter((l) => l.member === member), [member]);
	const stats = countProgress(filtered.map((l) => l.id), levels, levelsSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold tracking-tight",
							children: "Level-up & respec guides"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed",
							children: "Full picks: stats, cantrips, prepared spells, feats, invocations. Soft optimized so the dark four (and temp Lae’zel) cover each other."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[var(--color-muted)] tabular",
							children: [
								stats.doneN,
								" done · ",
								stats.skipN,
								" skip"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
						donePct: stats.donePct,
						skipPct: stats.skipPct
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: member === "all" ? "default" : "secondary",
							onClick: () => setMember("all"),
							children: "All"
						}), Object.keys(MEMBER_LABEL).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: member === m ? "default" : "secondary",
							onClick: () => setMember(m),
							children: MEMBER_LABEL[m]
						}, m))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[var(--color-surface)] p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: PARTY_SYNERGY.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: PARTY_SYNERGY.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-[var(--color-fg)]",
								children: r.who
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--color-muted)] leading-relaxed",
								children: r.job
							})]
						}, r.who))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1",
						children: "Fight opener"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "list-decimal list-inside text-sm text-[var(--color-muted)] space-y-1",
						children: PARTY_SYNERGY.openers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: o }, o))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1",
						children: "Gear priority"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "text-sm text-[var(--color-muted)] space-y-1",
						children: PARTY_SYNERGY.itemPriority.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", o] }, o))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--color-subtle)]",
						children: PARTY_SYNERGY.restRule
					})
				]
			}),
			member === "shadowheart" || member === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 text-sm text-[var(--color-muted)] leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-[var(--color-fg)] mb-1",
					children: "Shadowheart respec checklist (open Withers)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal list-inside space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Class → Cleric (not keep Trickery)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Subclass → Death Domain" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Rewrite ability scores (WIS + CON first)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cantrips: Toll the Dead, Guidance, Sacred Flame, +1 utility" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prepare Bless + Healing Word + Command day one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "At level 4 take War Caster; at 5 prepare Spirit Guardians (necrotic)" })
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: filtered.map((l) => {
					const subtitleParts = [
						l.classLevel,
						l.stats ? `Stats: ${l.stats}` : "",
						l.feat ? `Feat: ${l.feat}` : "",
						...l.picks.map((p) => p)
					].filter(Boolean);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckRow, {
						id: `level-${l.id}`,
						status: getStatus(levels, levelsSkip, l.id),
						onToggle: () => toggleLevel(l.id),
						onSkip: () => skipLevel(l.id),
						title: `L${l.level} · ${l.title}`,
						subtitle: subtitleParts.join("\n"),
						badges: [{
							label: MEMBER_LABEL[l.member],
							variant: "secondary"
						}, {
							label: `Lv ${l.level}`,
							variant: "outline"
						}],
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Cantrips",
								items: l.cantrips
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Spells known / pick",
								items: l.spells
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Prepare (Cleric)",
								items: l.prepare
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Invocations",
								items: l.invocations
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Features",
								items: l.features
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								label: "Skills",
								items: l.skills
							}),
							l.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-[var(--color-subtle)] border-t border-[var(--color-border)] pt-2",
								children: l.note
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteField, {
								id: `note-level-${l.id}`,
								placeholder: "Level note…"
							})
						]
					}, l.id);
				})
			})
		]
	});
}
function MissablesPanel() {
	const { missables, missablesSkip, toggleMissable, skipMissable, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? MISSABLES : MISSABLES.filter((m) => m.act === actFilter);
	const stats = countProgress(filtered.map((m) => m.id), missables, missablesSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold tracking-tight",
						children: "Missables & timers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)] mt-1",
						children: "Do these before the lock. Red = hard lock; soft = can often recover."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							stats.doneN,
							" handled · ",
							stats.skipN,
							" skip"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						0,
						1,
						2,
						3
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: actFilter === a ? "default" : "secondary",
						onClick: () => setActFilter(a),
						children: a === 0 ? "All acts" : `Act ${a}`
					}, a))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: filtered.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				id: `miss-${m.id}`,
				status: getStatus(missables, missablesSkip, m.id),
				onToggle: () => toggleMissable(m.id),
				onSkip: () => skipMissable(m.id),
				title: m.title,
				subtitle: `${m.detail}\nBefore: ${m.before}`,
				badges: [{
					label: m.severity === "hard" ? "Hard lock" : "Soft",
					variant: m.severity === "hard" ? "danger" : "secondary"
				}, {
					label: `Act ${m.act}`,
					variant: "outline"
				}],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteField, { id: `note-miss-${m.id}` })
			}, m.id))
		})]
	});
}
var AREAS = [
	{
		id: "ar-nautiloid",
		act: 1,
		name: "Nautiloid (Prologue)",
		stepIds: [
			"w-a1-nautiloid-us",
			"w-a1-nautiloid-sh",
			"w-a1-everburn"
		],
		tips: ["Restoration pods heal between fights. Everburn → Lae’zel early."]
	},
	{
		id: "ar-crash",
		act: 1,
		name: "Crash beach / first camp",
		stepIds: [
			"w-a1-laezel",
			"w-a1-astarion",
			"w-a1-gale",
			"w-a1-withers-crypt",
			"w-a1-withers-camp",
			"w-a1-respec-sh",
			"w-a1-deathstalker"
		],
		tips: ["Active four for now: You + SH + Astarion + Lae’zel (temp).", "See Camp tab for Lae’zel / Gale / Withers notes."]
	},
	{
		id: "ar-wilderness",
		act: 1,
		name: "Wilderness / Risen Road / Ethel",
		stepIds: [
			"w-a1-shovel",
			"w-a1-smuggler",
			"w-a1-spellsparkler",
			"w-a1-ethel",
			"w-a1-grove-shop"
		],
		tips: ["Shop Grove before raid."]
	},
	{
		id: "ar-goblin",
		act: 1,
		name: "Goblin Camp / Shattered Sanctum",
		stepIds: [
			"w-a1-crusher",
			"w-a1-misty",
			"w-a1-warboard",
			"w-a1-minthara-plan"
		],
		tips: ["Power detour Underdark/Creche before raid long rest."]
	},
	{
		id: "ar-underdark",
		act: 1,
		name: "Underdark / Grymforge",
		stepIds: [
			"w-a1-order-explore",
			"w-a1-phalar",
			"w-a1-caustic",
			"w-a1-adamantine",
			"w-a1-nere",
			"w-a1-thrinn"
		],
		tips: ["Two mithral only — plan crafts."]
	},
	{
		id: "ar-creche",
		act: 1,
		name: "Mountain Pass / Creche",
		stepIds: ["w-a1-creche-gear", "w-a1-esther"],
		tips: ["Bring Lae’zel for Creche. Blood of Lathander optional."]
	},
	{
		id: "ar-raid",
		act: 1,
		name: "Emerald Grove raid",
		stepIds: [
			"w-a1-raid",
			"w-a1-goblin-party",
			"w-a1-bench-laezel"
		],
		tips: ["Bench Lae’zel when Minthara is ready."]
	},
	{
		id: "ar-shadow",
		act: 2,
		name: "Shadow-Cursed Lands / Last Light",
		stepIds: ["w-a2-enter", "w-a2-last-light-loot"],
		tips: ["Dark path often ends Inn protection."]
	},
	{
		id: "ar-moonrise",
		act: 2,
		name: "Moonrise Towers",
		stepIds: [
			"w-a2-minthara-fate",
			"w-a2-risky",
			"w-a2-respec-min"
		],
		tips: ["Minthara replaces Lae’zel as permanent frontline."]
	},
	{
		id: "ar-gauntlet",
		act: 2,
		name: "Gauntlet of Shar / Shadowfell",
		stepIds: [
			"w-a2-gauntlet",
			"w-a2-sweetheart",
			"w-a2-callous",
			"w-a2-nightsong",
			"w-a2-spear"
		],
		tips: ["SH must be present for spear path."]
	},
	{
		id: "ar-ketheric",
		act: 2,
		name: "Ketheric finale",
		stepIds: ["w-a2-ketheric"],
		tips: ["Short-rest before multi-phase."]
	},
	{
		id: "ar-city",
		act: 3,
		name: "Baldur’s Gate — power spikes",
		stepIds: [
			"w-a3-cazador",
			"w-a3-rhapsody",
			"w-a3-tribunal",
			"w-a3-bhaalist",
			"w-a3-hope",
			"w-a3-helldusk",
			"w-a3-marko",
			"w-a3-gortash",
			"w-a3-orin",
			"w-a3-brain"
		],
		tips: ["Foundry sabotage before heavy city fights."]
	}
];
var byId = new Map(WALKTHROUGH.map((s) => [s.id, s]));
function WherePanel() {
	const walk = useProgress((s) => s.walk);
	const walkSkip = useProgress((s) => s.walkSkip);
	const [areaId, setAreaId] = (0, import_react.useState)(AREAS[0]?.id ?? "");
	const area = AREAS.find((a) => a.id === areaId) ?? AREAS[0];
	const steps = (0, import_react.useMemo)(() => {
		if (!area) return [];
		return area.stepIds.map((id) => byId.get(id)).filter((s) => Boolean(s));
	}, [area]);
	const stats = countProgress(steps.map((s) => s.id), walk, walkSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Where am I?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed",
					children: [
						"Same steps as",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[var(--color-fg)] font-medium",
							children: "Walk"
						}),
						"— filtered by area. Check once; it counts everywhere."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: areaId === a.id ? "default" : "secondary",
					onClick: () => setAreaId(a.id),
					children: [
						"A",
						a.act,
						": ",
						a.name
					]
				}, a.id))
			}),
			area ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: area.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								children: ["Act ", area.act]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-[var(--color-muted)] tabular",
								children: [
									stats.doneN,
									" done · ",
									stats.skipN,
									" skip · ",
									stats.total,
									" steps"
								]
							})
						]
					}),
					area.tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-[var(--color-subtle)]",
						children: ["Tip: ", t]
					}, t)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteField, {
						id: `note-area-${area.id}`,
						placeholder: "Where I left off…"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkStepRow, { step: s }, s.id)), !steps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)]",
					children: "No steps linked for this area."
				}) : null]
			})
		]
	});
}
var APPROVAL = [
	{
		id: "ap-ast-cruel",
		companion: "astarion",
		title: "Cruel / selfish choices",
		effect: "Astarion likes ruthlessness and freedom",
		tip: "Let him drink (with consent later), mock weak NPCs carefully, support autonomy.",
		tone: "up"
	},
	{
		id: "ap-ast-ascend",
		companion: "astarion",
		title: "Support Ascension",
		effect: "Major dark power + story for him",
		tip: "In Cazador ritual, let him complete Ascension for this run’s plan.",
		tone: "up"
	},
	{
		id: "ap-ast-good",
		companion: "astarion",
		title: "Heroic self-sacrifice lectures",
		effect: "Can annoy him early",
		tip: "You’re dark — don’t preach. Still can be loyal to the party.",
		tone: "down"
	},
	{
		id: "ap-sh-shar",
		companion: "shadowheart",
		title: "Respect Shar / secrets",
		effect: "Approves privacy and Shar loyalty early",
		tip: "Don’t force her artifact secrets; support kill Nightsong for Dark Justiciar.",
		tone: "up"
	},
	{
		id: "ap-sh-selune",
		companion: "shadowheart",
		title: "Push Selûne / save Nightsong hard",
		effect: "Conflicts with dark SH path",
		tip: "Skip if you want spear + Justiciar story.",
		tone: "down"
	},
	{
		id: "ap-min-absolute",
		companion: "minthara",
		title: "Absolute strength & ambition",
		effect: "Loves dominance, Absolute, power",
		tip: "Raid Grove, free her at Moonrise, lean Absolute / Bhaal power fantasy.",
		tone: "up"
	},
	{
		id: "ap-min-mercy",
		companion: "minthara",
		title: "Mercy to weak enemies",
		effect: "Dislikes soft choices",
		tip: "You’re on Absolute path — stay decisive.",
		tone: "down"
	},
	{
		id: "ap-party-urge",
		companion: "party",
		title: "Dark Urge scenes",
		effect: "Varies — resist vs embrace",
		tip: "Embrace for dark run climax; some kills upset soft companions (you already lose Wyll/Karlach).",
		tone: "neutral"
	},
	{
		id: "ap-party-camp",
		companion: "party",
		title: "Long rest for romance / scenes",
		effect: "Approval and story gates need rests",
		tip: "Don’t only partial-rest forever — trigger camp scenes for mantle, romance, Minthara.",
		tone: "neutral"
	}
];
var COMPANION_LABEL = {
	astarion: "Astarion",
	shadowheart: "Shadowheart",
	minthara: "Minthara",
	party: "Party / Urge"
};
function ApprovalPanel() {
	const { approval, approvalSkip, toggleApproval, skipApproval } = useProgress();
	const [who, setWho] = (0, import_react.useState)("all");
	const filtered = who === "all" ? APPROVAL : APPROVAL.filter((a) => a.companion === who);
	const stats = countProgress(filtered.map((a) => a.id), approval, approvalSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Companion approval"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)] mt-1",
					children: "Dark-run leanings for Astarion, Shadowheart, Minthara. Soft social guide."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: who === "all" ? "default" : "secondary",
						onClick: () => setWho("all"),
						children: "All"
					}), Object.keys(COMPANION_LABEL).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: who === c ? "default" : "secondary",
						onClick: () => setWho(c),
						children: COMPANION_LABEL[c]
					}, c))]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: filtered.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				id: `ap-${a.id}`,
				status: getStatus(approval, approvalSkip, a.id),
				onToggle: () => toggleApproval(a.id),
				onSkip: () => skipApproval(a.id),
				title: a.title,
				subtitle: `${a.effect}\n${a.tip}`,
				badges: [{
					label: COMPANION_LABEL[a.companion],
					variant: "secondary"
				}, {
					label: a.tone === "up" ? "Likes" : a.tone === "down" ? "Dislikes" : "Note",
					variant: a.tone === "up" ? "success" : a.tone === "down" ? "danger" : "outline"
				}]
			}, a.id))
		})]
	});
}
var LOADOUTS = [
	{
		id: "lo-tav-1",
		act: 1,
		member: "tav",
		title: "Act 1 spike",
		slots: [
			{
				slot: "Weapon",
				item: "Spellsparkler / Sword of Screams / bound weapon"
			},
			{
				slot: "Head",
				item: "Diadem of Arcane Synergy"
			},
			{
				slot: "Cloak",
				item: "Deathstalker Mantle"
			},
			{
				slot: "Boots",
				item: "Disintegrating Night Walkers"
			},
			{
				slot: "Ring",
				item: "Caustic Band + Strange Conduit"
			},
			{
				slot: "Amulet",
				item: "Misty Step or Broodmother"
			}
		]
	},
	{
		id: "lo-tav-2",
		act: 2,
		member: "tav",
		title: "Act 2 DPS",
		slots: [
			{
				slot: "Ring",
				item: "Risky Ring (+ keep damage ring)"
			},
			{
				slot: "Ring 2",
				item: "Killer’s Sweetheart for bosses"
			},
			{
				slot: "Cloak",
				item: "Deathstalker still great"
			}
		],
		note: "Advantage from Risky = nova turns."
	},
	{
		id: "lo-tav-3",
		act: 3,
		member: "tav",
		title: "Act 3 endgame",
		slots: [{
			slot: "Armour",
			item: "Helldusk or Bhaalist (if piercing party)"
		}, {
			slot: "Weapon",
			item: "Rhapsody offhand / best CHA blade"
		}]
	},
	{
		id: "lo-sh-1",
		act: 1,
		member: "shadowheart",
		title: "Act 1 control",
		slots: [{
			slot: "Armour",
			item: "Adamantine medium / shield"
		}, {
			slot: "Focus",
			item: "Spirit Guardians prep for 5"
		}]
	},
	{
		id: "lo-sh-2",
		act: 2,
		member: "shadowheart",
		title: "Dark Justiciar",
		slots: [{
			slot: "Weapon",
			item: "Shar’s Spear of Evening"
		}, {
			slot: "Role",
			item: "SG walk + Hold Person"
		}]
	},
	{
		id: "lo-ast-1",
		act: 1,
		member: "astarion",
		title: "Act 1 skills + damage",
		slots: [
			{
				slot: "Ring",
				item: "Smuggler’s Ring"
			},
			{
				slot: "Weapon",
				item: "Knife of the Undermountain King"
			},
			{
				slot: "Gloves",
				item: "Gloves of Dexterity"
			},
			{
				slot: "Armour",
				item: "Graceful Cloth optional"
			}
		]
	},
	{
		id: "lo-ast-3",
		act: 3,
		member: "astarion",
		title: "Ascended",
		slots: [{
			slot: "Weapon",
			item: "Rhapsody"
		}, {
			slot: "Play",
			item: "Multiattack + invis cheese"
		}]
	},
	{
		id: "lo-min-1",
		act: 1,
		member: "minthara",
		title: "Early Absolute",
		slots: [
			{
				slot: "Weapon",
				item: "Everburn / Phalar / heavy hitter"
			},
			{
				slot: "Armour",
				item: "Adamantine"
			},
			{
				slot: "Ring",
				item: "Crusher’s Ring"
			}
		]
	},
	{
		id: "lo-min-3",
		act: 3,
		member: "minthara",
		title: "Frontline murder",
		slots: [{
			slot: "Armour",
			item: "Bhaalist Armour (Aura of Murder)"
		}, {
			slot: "Bow",
			item: "Titanstring if STR"
		}]
	}
];
function LoadoutsPanel() {
	const { loadouts, loadoutsSkip, toggleLoadout, skipLoadout, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? LOADOUTS : LOADOUTS.filter((l) => l.act === actFilter);
	const stats = countProgress(filtered.map((l) => l.id), loadouts, loadoutsSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Gear loadouts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)] mt-1",
					children: "Target kits by act. Soft — swap as you loot."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
					donePct: stats.donePct,
					skipPct: stats.skipPct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						0,
						1,
						2,
						3
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: actFilter === a ? "default" : "secondary",
						onClick: () => setActFilter(a),
						children: a === 0 ? "All acts" : `Act ${a}`
					}, a))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: filtered.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				id: `lo-${l.id}`,
				status: getStatus(loadouts, loadoutsSkip, l.id),
				onToggle: () => toggleLoadout(l.id),
				onSkip: () => skipLoadout(l.id),
				title: `${MEMBER_LABEL[l.member]} — ${l.title}`,
				subtitle: l.slots.map((s) => `${s.slot}: ${s.item}`).join("\n"),
				badges: [{
					label: `Act ${l.act}`,
					variant: "outline"
				}, {
					label: MEMBER_LABEL[l.member],
					variant: "secondary"
				}],
				children: l.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-[var(--color-subtle)]",
					children: l.note
				}) : null
			}, l.id))
		})]
	});
}
/** Soft advice for a dark rush party — not a full tree map. */
var ILLITHID = [
	{
		id: "il-favourable",
		name: "Favourable Beginnings",
		tier: "take",
		detail: "Attack/check bonus on first roll vs a target — always useful."
	},
	{
		id: "il-force-tunnel",
		name: "Force Tunnel",
		tier: "take",
		detail: "Reposition + knockback without a spell slot."
	},
	{
		id: "il-concentrated",
		name: "Concentrated Blast",
		tier: "take",
		detail: "Bonus damage button; great with your short-rest nova style."
	},
	{
		id: "il-cull",
		name: "Cull the Weak",
		tier: "take",
		detail: "Execute low HP → chain kills. Strong with Deathstalker invis."
	},
	{
		id: "il-luck",
		name: "Luck of the Far Realms",
		tier: "take",
		detail: "Convert a hit to crit — boss opener gold."
	},
	{
		id: "il-blackhole",
		name: "Black Hole",
		tier: "take",
		detail: "Best crowd clump in the game for SG / AOE."
	},
	{
		id: "il-freecast",
		name: "Freecast",
		tier: "situational",
		detail: "Strong but later tree — take when you can afford the path."
	},
	{
		id: "il-mind-sanctuary",
		name: "Mind Sanctuary",
		tier: "situational",
		detail: "Action/bonus flexibility in the zone — good for melee stack."
	},
	{
		id: "il-displace",
		name: "Displace",
		tier: "situational",
		detail: "Push tech; fine, not mandatory."
	},
	{
		id: "il-psionic",
		name: "Psionic Dominance / Overwhelming",
		tier: "situational",
		detail: "Save tech — nice vs casters."
	},
	{
		id: "il-absorb",
		name: "Ability Drain / Absorb Intellect lines",
		tier: "skip",
		detail: "Slow payoff for rush dark run — skip unless RP."
	},
	{
		id: "il-charm",
		name: "Endless Rage / niche dialogue powers",
		tier: "skip",
		detail: "Prefer combat staples above."
	}
];
var TIER = {
	take: "success",
	situational: "warn",
	skip: "secondary"
};
function IllithidPanel() {
	const { illithid, illithidSkip, toggleIllithid, skipIllithid } = useProgress();
	const stats = countProgress(ILLITHID.map((i) => i.id), illithid, illithidSkip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold tracking-tight",
				children: "Illithid powers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[var(--color-muted)] mt-1",
				children: "Soft picks for a dark rush. Take / situational / skip."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualProgress, {
				donePct: stats.donePct,
				skipPct: stats.skipPct
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: ILLITHID.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				id: `il-${p.id}`,
				status: getStatus(illithid, illithidSkip, p.id),
				onToggle: () => toggleIllithid(p.id),
				onSkip: () => skipIllithid(p.id),
				title: p.name,
				subtitle: p.detail,
				badges: [{
					label: p.tier,
					variant: TIER[p.tier]
				}]
			}, p.id))
		})]
	});
}
/**
* Client-side GitHub Gist sync.
* Uses a personal access token (gist scope) — no backend OAuth required.
* Token stays in the browser (localStorage); gists are private by default.
*/
var GIST_DESC = "BG3 Dark Run Companion — progress save";
var GIST_FILE = "bg3-dark-run-progress.json";
var TOKEN_KEY = "bg3-dark-run-github-token";
var GIST_ID_KEY = "bg3-dark-run-gist-id";
function headers(token) {
	return {
		Accept: "application/vnd.github+json",
		Authorization: `Bearer ${token}`,
		"X-GitHub-Api-Version": "2022-11-28",
		"Content-Type": "application/json"
	};
}
function getStoredToken() {
	if (typeof window === "undefined") return null;
	try {
		return localStorage.getItem(TOKEN_KEY);
	} catch {
		return null;
	}
}
function setStoredToken(token) {
	if (typeof window === "undefined") return;
	try {
		if (token) localStorage.setItem(TOKEN_KEY, token.trim());
		else localStorage.removeItem(TOKEN_KEY);
	} catch {}
}
function getStoredGistId() {
	if (typeof window === "undefined") return null;
	try {
		return localStorage.getItem(GIST_ID_KEY);
	} catch {
		return null;
	}
}
function setStoredGistId(id) {
	if (typeof window === "undefined") return;
	try {
		if (id) localStorage.setItem(GIST_ID_KEY, id);
		else localStorage.removeItem(GIST_ID_KEY);
	} catch {}
}
async function fetchGithubUser(token) {
	const res = await fetch("https://api.github.com/user", { headers: headers(token) });
	if (!res.ok) {
		const t = await res.text();
		throw new Error(`GitHub auth failed (${res.status}): ${t.slice(0, 120)}`);
	}
	return res.json();
}
async function findExistingGist(token) {
	for (let page = 1; page <= 3; page++) {
		const res = await fetch(`https://api.github.com/gists?per_page=100&page=${page}`, { headers: headers(token) });
		if (!res.ok) break;
		const list = await res.json();
		if (!list.length) break;
		const hit = list.find((g) => g.description === GIST_DESC);
		if (hit) return hit.id;
	}
	return null;
}
async function ensureGist(token, payload) {
	const existing = getStoredGistId() || await findExistingGist(token);
	if (existing) {
		setStoredGistId(existing);
		return existing;
	}
	const res = await fetch("https://api.github.com/gists", {
		method: "POST",
		headers: headers(token),
		body: JSON.stringify({
			description: GIST_DESC,
			public: false,
			files: { [GIST_FILE]: { content: JSON.stringify(payload, null, 2) } }
		})
	});
	if (!res.ok) {
		const t = await res.text();
		throw new Error(`Create gist failed (${res.status}): ${t.slice(0, 160)}`);
	}
	const data = await res.json();
	setStoredGistId(data.id);
	return data.id;
}
async function pushGist(token, payload) {
	const id = await ensureGist(token, payload);
	const res = await fetch(`https://api.github.com/gists/${id}`, {
		method: "PATCH",
		headers: headers(token),
		body: JSON.stringify({
			description: GIST_DESC,
			files: { [GIST_FILE]: { content: JSON.stringify(payload, null, 2) } }
		})
	});
	if (!res.ok) {
		const t = await res.text();
		throw new Error(`Push gist failed (${res.status}): ${t.slice(0, 160)}`);
	}
	return id;
}
async function pullGist(token) {
	let id = getStoredGistId();
	if (!id) {
		id = await findExistingGist(token);
		if (id) setStoredGistId(id);
	}
	if (!id) return null;
	const res = await fetch(`https://api.github.com/gists/${id}`, { headers: headers(token) });
	if (!res.ok) {
		const t = await res.text();
		throw new Error(`Pull gist failed (${res.status}): ${t.slice(0, 160)}`);
	}
	const data = await res.json();
	const file = data.files[GIST_FILE] || Object.values(data.files)[0];
	if (!file) return null;
	let content = file.content;
	if (file.truncated && file.raw_url) content = await (await fetch(file.raw_url, { headers: headers(token) })).text();
	if (!content) return null;
	return JSON.parse(content);
}
function gistUrl(id) {
	return `https://gist.github.com/${id}`;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Cloud progress is stored as a JSON string so TanStack Start's serializable
* return type stays happy (arbitrary Record is not considered serializable).
*/
var loadCloudProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("a00be39d12134be3078604ccdc5a900b2438bd4de3e81cbb1a4c6c4922149bd4"));
var saveCloudProgress = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => object({ payloadJson: string().min(2).max(2e6) }).parse(input)).handler(createSsrRpc("8cc59d602ce87678659eb67fe2746964c6fd04359b6b477a058e06ace2e10228"));
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
function SyncPanel() {
	const exportSnapshot = useProgress((s) => s.exportSnapshot);
	const importSnapshot = useProgress((s) => s.importSnapshot);
	const { user, isPending } = useCurrentUserState();
	const [tokenInput, setTokenInput] = (0, import_react.useState)("");
	const [token, setToken] = (0, import_react.useState)(null);
	const [login, setLogin] = (0, import_react.useState)(null);
	const [gistId, setGistId] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [importText, setImportText] = (0, import_react.useState)("");
	const [cloudUpdatedAt, setCloudUpdatedAt] = (0, import_react.useState)(null);
	const [signInBusy, setSignInBusy] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const t = getStoredToken();
		const g = getStoredGistId();
		setToken(t);
		setGistId(g);
		if (t) fetchGithubUser(t).then((u) => setLogin(u.login)).catch(() => setStatus("Saved GitHub token invalid — paste a new one."));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!user || user.isDevFallback) return;
		let cancelled = false;
		loadCloudProgress().then((r) => {
			if (cancelled) return;
			setCloudUpdatedAt(r.updatedAt);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [user?.id]);
	async function doCloudPush() {
		setBusy(true);
		setStatus("");
		try {
			const r = await saveCloudProgress({ data: { payloadJson: JSON.stringify(exportSnapshot()) } });
			setCloudUpdatedAt(r.updatedAt);
			setStatus(`Saved to your account (${r.updatedAt}).`);
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Cloud save failed — sign in with Google or X first.");
		} finally {
			setBusy(false);
		}
	}
	async function doCloudPull() {
		setBusy(true);
		setStatus("");
		try {
			const r = await loadCloudProgress();
			if (!r.payloadJson) {
				setStatus("No cloud save yet — Push from this device first.");
				setCloudUpdatedAt(null);
				return;
			}
			const data = JSON.parse(r.payloadJson);
			importSnapshot(data);
			setCloudUpdatedAt(r.updatedAt);
			setStatus(`Loaded cloud save (${r.updatedAt ?? "ok"}).`);
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Cloud load failed — sign in with Google or X first.");
		} finally {
			setBusy(false);
		}
	}
	async function handleSignIn(providerId) {
		setSignInBusy(providerId);
		setStatus("");
		try {
			await signIn(providerId, {
				callbackURL: "/",
				errorCallbackURL: "/"
			});
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Sign-in failed");
		} finally {
			setSignInBusy(null);
		}
	}
	async function connectGithub() {
		setBusy(true);
		setStatus("");
		try {
			const t = tokenInput.trim();
			if (!t) throw new Error("Paste a GitHub token first.");
			const u = await fetchGithubUser(t);
			setStoredToken(t);
			setToken(t);
			setLogin(u.login);
			setTokenInput("");
			setStatus(`GitHub connected as @${u.login}`);
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Connect failed");
		} finally {
			setBusy(false);
		}
	}
	function disconnectGithub() {
		setStoredToken(null);
		setStoredGistId(null);
		setToken(null);
		setLogin(null);
		setGistId(null);
		setStatus("GitHub disconnected. Local + account progress kept.");
	}
	async function doGistPush() {
		if (!token) return;
		setBusy(true);
		setStatus("");
		try {
			const payload = {
				version: 3,
				exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
				data: exportSnapshot()
			};
			const id = await pushGist(token, payload);
			setGistId(id);
			setStatus(`Pushed to private gist ${id.slice(0, 8)}…`);
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Push failed");
		} finally {
			setBusy(false);
		}
	}
	async function doGistPull() {
		if (!token) return;
		setBusy(true);
		setStatus("");
		try {
			const payload = await pullGist(token);
			if (!payload?.data) {
				setStatus("No gist found yet — Push first to create one.");
				return;
			}
			importSnapshot(payload.data);
			setGistId(getStoredGistId());
			setStatus(`Pulled save from gist (${payload.exportedAt ?? "ok"})`);
		} catch (e) {
			setStatus(e instanceof Error ? e.message : "Pull failed");
		} finally {
			setBusy(false);
		}
	}
	function downloadJson() {
		const blob = new Blob([JSON.stringify({
			version: 3,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			data: exportSnapshot()
		}, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `bg3-dark-run-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(a.href);
	}
	function applyImport() {
		try {
			const parsed = JSON.parse(importText);
			const data = parsed.data ?? parsed;
			importSnapshot(data);
			setStatus("Imported JSON into local progress.");
			setImportText("");
		} catch {
			setStatus("Invalid JSON.");
		}
	}
	const signedIn = Boolean(user && !user.isDevFallback);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Sync & backup"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[var(--color-muted)] leading-relaxed max-w-2xl",
					children: [
						"Progress saves in this browser.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[var(--color-fg)] font-medium",
							children: "Sign in with Google or X"
						}),
						" ",
						"to store it on your account. Optional GitHub Gist still available."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[var(--color-surface)] p-5 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-5 w-5 text-[var(--color-primary)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: "Account cloud (Google / X)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "success",
							children: "Recommended"
						})
					]
				}), isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[var(--color-muted)] flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Checking session…"]
				}) : signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [user?.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: user.profileImageUrl,
								alt: "",
								className: "h-10 w-10 rounded-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent-soft)] text-sm font-medium",
								children: (user?.displayName ?? user?.primaryEmail ?? "?").charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm",
								children: user?.displayName ?? "Signed in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-[var(--color-muted)]",
								children: [user?.primaryEmail ?? "Account linked", cloudUpdatedAt ? ` · cloud: ${cloudUpdatedAt.slice(0, 19)}` : " · no cloud save yet"]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: doCloudPush,
									disabled: busy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Push to account"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: doCloudPull,
									disabled: busy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Pull from account"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => void signOut("/"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sign out"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[var(--color-subtle)]",
							children: "Push overwrites cloud with this device. Pull overwrites this device with cloud."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)]",
						children: "Sign in once — checklist is private to your account."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							disabled: signInBusy !== null,
							onClick: () => void handleSignIn(p.providerId),
							children: [
								signInBusy === p.providerId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null,
								"Continue with ",
								p.label
							]
						}, p.providerId))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: "GitHub Gist (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: "Token"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--color-muted)]",
						children: "Extra backup if you prefer a gist. Not required when using Google/X."
					}),
					login ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								"Connected as ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: ["@", login]
								}),
								gistId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									" ",
									"·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: gistUrl(gistId),
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-[var(--color-primary)]",
										children: ["open gist ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
									})
								] }) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: doGistPush,
									disabled: busy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Push to Gist"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: doGistPull,
									disabled: busy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Pull from Gist"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: disconnectGithub,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Disconnect"]
								})
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/settings/tokens/new?scopes=gist&description=BG3%20Dark%20Run%20Companion",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex text-sm text-[var(--color-primary)] items-center gap-1",
								children: ["Create classic token (gist scope)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								autoComplete: "off",
								value: tokenInput,
								onChange: (e) => setTokenInput(e.target.value),
								placeholder: "ghp_… or github_pat_…",
								className: "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: connectGithub,
								disabled: busy,
								children: "Connect GitHub"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: "Export / import JSON"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)]",
						children: "Offline file backup — no login needed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: downloadJson,
							children: "Download JSON"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: importText,
						onChange: (e) => setImportText(e.target.value),
						placeholder: "Paste exported JSON here…",
						rows: 4,
						className: "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs font-mono"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: applyImport,
						children: "Import JSON"
					})
				]
			}),
			status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[var(--color-muted)] whitespace-pre-wrap rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 py-2",
				children: status
			}) : null
		]
	});
}
function SearchPanel({ onNavigate }) {
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (query.length < 2) return [];
		const out = [];
		for (const s of WALKTHROUGH) if (`${s.title} ${s.detail} ${s.chapter}`.toLowerCase().includes(query)) out.push({
			id: s.id,
			kind: "Walk",
			title: s.title,
			body: s.detail.slice(0, 160),
			tab: "walk"
		});
		for (const t of TRICKS) if (`${t.title} ${t.detail}`.toLowerCase().includes(query)) out.push({
			id: t.id,
			kind: "Trick",
			title: t.title,
			body: t.detail.slice(0, 160),
			tab: "tricks"
		});
		for (const i of ITEMS) if (`${i.name} ${i.where} ${i.why}`.toLowerCase().includes(query)) out.push({
			id: i.id,
			kind: "Item",
			title: i.name,
			body: `${i.where} — ${i.why}`,
			tab: "items"
		});
		for (const m of MISSABLES) if (`${m.title} ${m.detail} ${m.before}`.toLowerCase().includes(query)) out.push({
			id: m.id,
			kind: "Missable",
			title: m.title,
			body: m.detail,
			tab: "missables"
		});
		for (const l of LEVEL_PICKS) if (`${l.title} ${l.picks.join(" ")} ${MEMBER_LABEL[l.member]}`.toLowerCase().includes(query)) out.push({
			id: l.id,
			kind: "Level",
			title: l.title,
			body: l.picks.join(" · "),
			tab: "levels"
		});
		return out.slice(0, 40);
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold tracking-tight",
				children: "Search"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[var(--color-muted)] mt-1",
				children: "Walk, tricks, items, missables, levels."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "e.g. Night Walkers, Command, Ethel…",
				className: "w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm",
				autoFocus: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onNavigate(h.tab),
					className: "w-full text-left rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-border-strong)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-[var(--color-subtle)]",
							children: h.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium mt-0.5",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-muted)] mt-1 line-clamp-2",
							children: h.body
						})
					]
				}, `${h.kind}-${h.id}`)), q.trim().length >= 2 && !hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)]",
					children: "No matches."
				}) : null]
			})
		]
	});
}
var CAMP_NOTES = [
	{
		id: "camp-withers-crypt",
		title: "Withers — best way (Dank Crypt)",
		when: "Right after crash beach / near Chapel / Overgrown Ruins",
		detail: "1) Enter Overgrown Ruins → Dank Crypt (chapel door or beach hatch).\n2) Open the hidden sarcophagus room (button / lever puzzles).\n3) Interact with Withers’ sarcophagus — answer his question (any answer is fine).\n4) Leave the crypt, then take a Long Rest.\n5) He is at camp: respec (100 gold), hirelings, revive.",
		confidence: "verified",
		sourceUrl: "https://bg3.wiki/wiki/Withers"
	},
	{
		id: "camp-withers-auto",
		title: "Withers auto-joins if you skip the crypt",
		when: "Often around level 3 / early Act 1 progress",
		detail: "If you never wake him in the Dank Crypt, he can still show up at camp later on his own (common reports: around level 3, or after major Act 1 gates). Soft timing. Talk to him at camp for respec either way.",
		confidence: "soft",
		sourceUrl: "https://bg3.wiki/wiki/Overgrown_Ruins"
	},
	{
		id: "camp-laezel",
		title: "Lae’zel — keep as temp frontline",
		when: "Act 1 until Minthara is free",
		detail: "She is NOT in the final dark four (you / Shadowheart / Astarion / Minthara). Still useful now:\n• Frontline + Everburn Blade early\n• Great for Creche / Mountain Pass content\n• Soft build if you use her: Battlemaster Fighter or keep default — STR / heavy hits\n• When Minthara joins: park Lae’zel at camp (or keep her only for Gith-specific fights)\n• Absolute / dark choices can sour her; that’s fine for this run",
		confidence: "soft",
		sourceUrl: "https://bg3.wiki/wiki/Lae%27zel"
	},
	{
		id: "camp-gale",
		title: "Gale (and other extras)",
		when: "After recruiting Gale",
		detail: "Not in the dark core four. Level him a bit, Wizard subclass Divination (or Evocation), park at camp. Wyll/Karlach usually leave after Absolute raid.",
		confidence: "soft"
	},
	{
		id: "camp-long-rest",
		title: "Long rest to unlock camp scenes",
		when: "Throughout Act 1",
		detail: "Partial rests refill resources but skip many camp scenes. Full long rests for: Withers after crypt, Deathstalker Mantle (DURGE), companion talks. Mix short rests (Warlock slots) with occasional full rests.",
		confidence: "soft"
	},
	{
		id: "camp-respec",
		title: "Respec costs & who to fix first",
		when: "After Withers is at camp",
		detail: "100 gold per respec. Priority: Shadowheart → Death Domain + WIS. Optional: tidy Lae’zel if you keep using her. Later: Minthara after recruit.",
		confidence: "verified",
		sourceUrl: "https://bg3.wiki/wiki/Withers"
	},
	{
		id: "camp-sceleritas",
		title: "Sceleritas / Deathstalker Mantle",
		when: "Early DURGE camp after Urge events",
		detail: "Talk to Sceleritas Fel at camp after early Urge beats. Deathstalker Mantle (kill → Invisible). Don’t skip camp chats after major kills.",
		confidence: "verified",
		sourceUrl: "https://bg3.wiki/wiki/The_Deathstalker_Mantle"
	},
	{
		id: "camp-hirelings",
		title: "Hirelings",
		when: "Withers available",
		detail: "If you drop Lae’zel early and Minthara isn’t free, pull a hireling tank from Withers.",
		confidence: "verified",
		sourceUrl: "https://bg3.wiki/wiki/Hirelings"
	}
];
function CampPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold tracking-tight",
				children: "Camp unlocks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed",
				children: "Withers, long rests, spare companions (Gale), DURGE camp gifts — the early QoL stuff the walk used to under-explain."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: CAMP_NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-[var(--color-fg)]",
							children: n.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: n.confidence === "verified" ? "success" : "secondary",
							children: n.confidence === "verified" ? "Verified" : "Soft"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--color-primary)]",
						children: n.when
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[var(--color-muted)] leading-relaxed space-y-2",
						children: n.detail.split("\n").map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-wrap",
							children: line
						}, i))
					}),
					n.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: n.sourceUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]",
						children: ["Source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
					}) : null
				]
			}, n.id))
		})]
	});
}
function formatElapsed(ms) {
	const s = Math.floor(ms / 1e3);
	const h = Math.floor(s / 3600);
	const m = Math.floor(s % 3600 / 60);
	const sec = s % 60;
	if (h > 0) return `${h}h ${m}m`;
	return `${m}m ${sec}s`;
}
function SessionBar() {
	const longRests = useProgress((s) => s.longRests);
	const sessionStartedAt = useProgress((s) => s.sessionStartedAt);
	const incLongRest = useProgress((s) => s.incLongRest);
	const decLongRest = useProgress((s) => s.decLongRest);
	const startSession = useProgress((s) => s.startSession);
	const clearSession = useProgress((s) => s.clearSession);
	const compactMode = useProgress((s) => s.compactMode);
	const setCompactMode = useProgress((s) => s.setCompactMode);
	const { user, isPending } = useCurrentUserState();
	const [now, setNow] = (0, import_react.useState)(Date.now());
	(0, import_react.useEffect)(() => {
		if (!sessionStartedAt) return;
		const t = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(t);
	}, [sessionStartedAt]);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("compact-mode", compactMode);
	}, [compactMode]);
	const elapsed = sessionStartedAt != null ? formatElapsed(now - sessionStartedAt) : null;
	const accountLabel = isPending ? "…" : user && !user.isDevFallback ? user.displayName ?? "Signed in" : "Guest";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 py-2 text-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[var(--color-muted)]",
				children: [
					"Account:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[var(--color-fg)]",
						children: accountLabel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--color-border-strong)]",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[var(--color-muted)]",
				children: [
					"Session:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[var(--color-fg)]",
						children: elapsed ?? "not started"
					})
				]
			}),
			!sessionStartedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				className: "h-7 text-xs",
				onClick: startSession,
				children: "Start"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				className: "h-7 text-xs",
				onClick: clearSession,
				children: "Reset timer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--color-border-strong)]",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[var(--color-muted)]",
				children: [
					"Long rests:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[var(--color-fg)] tabular",
						children: longRests
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				className: "h-7 px-2 text-xs",
				onClick: decLongRest,
				children: "−"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				className: "h-7 px-2 text-xs",
				onClick: incLongRest,
				children: "+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--color-border-strong)]",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: compactMode ? "default" : "secondary",
				className: "h-7 text-xs",
				onClick: () => setCompactMode(!compactMode),
				children: "Compact"
			})
		]
	});
}
function Home() {
	const [tab, setTab] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pb-16 pt-[calc(var(--grok-banner-h,0px)+1rem)] sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]",
						children: "Baldur's Gate 3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight sm:text-3xl",
						children: "Dark Run Companion"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionBar, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: tab,
				onValueChange: setTab,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "sticky top-[var(--grok-banner-h,0px)] z-10 backdrop-blur-sm bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)] max-h-none h-auto flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "overview",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "search",
								children: "Search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "where",
								children: "Where"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "camp",
								children: "Camp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "walk",
								children: "Walk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "missables",
								children: "Miss"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "levels",
								children: "Levels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "tricks",
								children: "Tricks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "items",
								children: "Items"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "loadouts",
								children: "Gear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "party",
								children: "Party"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "approval",
								children: "Approve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "illithid",
								children: "Tadpole"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "quests",
								children: "Quests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "combat",
								children: "Combat"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "sync",
								children: "Sync"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "proof",
								children: "Proof"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "overview",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, { onNavigate: setTab })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPanel, { onNavigate: setTab })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "where",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WherePanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "camp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "walk",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkthroughPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "missables",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissablesPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "levels",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "tricks",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TricksPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "items",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "loadouts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadoutsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "party",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "approval",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "illithid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IllithidPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "quests",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "combat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "sync",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SyncPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "proof",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofPanel, {})
					})
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
