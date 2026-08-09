import { r as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, n as CheckboxIndicator, p as require_react, s as Slot, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as Sparkles, c as Gem, i as Swords, l as Check, n as User, o as Skull, s as ScrollText, t as Zap } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C9GAl7nr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
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
		title: "Recruit Minthara after the raid",
		why: "Fourth party member for dark run.",
		priority: "critical"
	},
	{
		id: "a1-withers",
		act: 1,
		title: "Unlock Withers (respec)",
		why: "Respec Shadowheart to Death Domain and fix stats.",
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
		title: "Last Light Inn — decide Isobel’s fate",
		why: "Controls Act 2 map state and many NPCs.",
		darkChoice: "Kill Isobel or let Marcus take her → Last Light falls. Darker, fewer allies, still beatable.",
		tip: "Loot traders first if you plan to collapse Last Light.",
		priority: "critical"
	},
	{
		id: "a2-moonrise",
		act: 2,
		title: "Moonrise Towers — Absolute stronghold",
		why: "Main Act 2 hub on dark path. Speak to Ketheric’s people.",
		priority: "critical"
	},
	{
		id: "a2-gauntlet",
		act: 2,
		title: "Gauntlet of Shar",
		why: "Shadowheart’s defining arc.",
		darkChoice: "Complete trials. At the end: kill the Nightsong.",
		tip: "Selfsame trial → Killer’s Sweetheart ring (auto-crit).",
		priority: "critical"
	},
	{
		id: "a2-nightsong",
		act: 2,
		title: "Kill the Nightsong (Dark Justiciar)",
		why: "Locks Shadowheart on Shar path + unique spear reward path.",
		darkChoice: "Encourage her to kill Aylin.",
		priority: "critical"
	},
	{
		id: "a2-ketheric",
		act: 2,
		title: "Defeat Ketheric Thorm",
		why: "Act 2 climax. Get the first Netherstone.",
		tip: "With Nightsong dead, fight is different — prepare for undead/Absolute power.",
		priority: "critical"
	},
	{
		id: "a2-balthazar",
		act: 2,
		title: "Balthazar / mind flayer colony approach",
		why: "Story routing into the finale of Act 2.",
		darkChoice: "Working with Absolute agents is on-theme.",
		priority: "important"
	},
	{
		id: "a2-tollhouse",
		act: 2,
		title: "Tollhouse / caravan / Rivington prep gear",
		why: "Transition loot before Act 3.",
		priority: "optional"
	},
	{
		id: "a3-cazador",
		act: 3,
		title: "Cazador’s palace — Ascend Astarion",
		why: "Biggest power spike for Astarion + dark companion ending.",
		darkChoice: "Let him complete the ritual and ascend.",
		tip: "Loot Rhapsody from Cazador. Put it on Astarion or your Hexblade.",
		priority: "critical"
	},
	{
		id: "a3-orphans",
		act: 3,
		title: "Orin / Temple of Bhaal path",
		why: "Dark Urge personal quest + Bhaal power.",
		darkChoice: "Embrace Bhaal. Murder Tribunal → Unholy Assassin gear.",
		priority: "critical"
	},
	{
		id: "a3-gortash",
		act: 3,
		title: "Gortash / Steel Watch",
		why: "Netherstone + disable Steel Watch for easier city fights.",
		tip: "Disable Steel Watch Foundry before big lower city brawls.",
		priority: "critical"
	},
	{
		id: "a3-house-hope",
		act: 3,
		title: "House of Hope (Raphael)",
		why: "Best armor (Helldusk), story payoff, powerful loot.",
		tip: "Steal contract + gear, then fight Raphael prepared.",
		priority: "important"
	},
	{
		id: "a3-murder-tribunal",
		act: 3,
		title: "Murder Tribunal — become Unholy Assassin",
		why: "Bhaalist Armour (piercing vulnerability aura) + Craterflesh Gloves.",
		darkChoice: "Present the victim list, join Bhaal’s assassins.",
		priority: "important"
	},
	{
		id: "a3-netherbrain",
		act: 3,
		title: "Netherbrain finale",
		why: "End the game. Dark endings available depending on choices.",
		darkChoice: "Dominate or destroy per your Urge / Absolute stance.",
		priority: "critical"
	},
	{
		id: "a3-szares",
		act: 3,
		title: "Sorcerous Sundries / Ramazith’s Tower",
		why: "Markoheshkir, Robe of the Weave, high-end caster gear.",
		priority: "important"
	}
];
var ACT_LABELS = {
	1: "Act 1 — Wilderness & Absolute",
	2: "Act 2 — Shadow-Cursed Lands",
	3: "Act 3 — Baldur’s Gate"
};
var ITEMS = [
	{
		id: "i-spellsparkler",
		act: 1,
		name: "The Spellsparkler",
		slot: "Weapon",
		who: ["tav"],
		where: "Reward for saving Counsellor Florrick at Waukeen’s Rest",
		why: "Lightning charges on spell damage — strong early Hexblade staff option.",
		priority: "strong"
	},
	{
		id: "i-phalar",
		act: 1,
		name: "Phalar Aluve",
		slot: "Weapon",
		who: ["minthara", "tav"],
		where: "Selûnite outpost / Underdark approach — blood on the stone",
		why: "Shriek debuff for the whole party. Huge damage amp.",
		priority: "must"
	},
	{
		id: "i-adamantine",
		act: 1,
		name: "Adamantine armour / shield / weapon",
		slot: "Armour",
		who: ["minthara", "shadowheart"],
		where: "Adamantine Forge, Grymforge",
		why: "Crit immunity options + solid AC. Forge before leaving Act 1.",
		priority: "must"
	},
	{
		id: "i-knife-undermountain",
		act: 1,
		name: "Knife of the Undermountain King",
		slot: "Weapon",
		who: ["astarion", "tav"],
		where: "Crèche Y’llek vendor (A’jak’nir Jeera)",
		why: "Improved crit range + advantage vs obscured. Core for Astarion.",
		priority: "must"
	},
	{
		id: "i-gloves-archery",
		act: 1,
		name: "Gloves of Archery",
		slot: "Gloves",
		who: ["astarion"],
		where: "Goblin camp trader",
		why: "+2 ranged damage. Simple and effective.",
		priority: "strong"
	},
	{
		id: "i-caustic",
		act: 1,
		name: "Caustic Band",
		slot: "Ring",
		who: ["astarion", "tav"],
		where: "Underdark — Derryth Bonecloak",
		why: "+2 acid on weapon attacks. Stacks forever.",
		priority: "strong"
	},
	{
		id: "i-crusher",
		act: 1,
		name: "Crusher’s Ring",
		slot: "Ring",
		who: ["minthara", "shadowheart"],
		where: "Goblin camp — Crusher",
		why: "+3 m movement. Melee characters need this.",
		priority: "strong"
	},
	{
		id: "i-bloodguzzler",
		act: 1,
		name: "Bloodguzzler Garb / early medium armour",
		slot: "Armour",
		who: ["minthara"],
		where: "Various Act 1 vendors / drops",
		why: "Keep frontliner AC high until Adamantine / better.",
		priority: "nice"
	},
	{
		id: "i-gandrel",
		act: 1,
		name: "Gandrel’s Inspiration",
		slot: "Ranged",
		who: ["shadowheart"],
		where: "Gandrel outside Ethel’s teahouse",
		why: "Sacred Munitions + Arrow of Many Targets vs undead later.",
		priority: "nice"
	},
	{
		id: "i-killers-sweetheart",
		act: 2,
		name: "Killer’s Sweetheart",
		slot: "Ring",
		who: [
			"tav",
			"minthara",
			"astarion"
		],
		where: "Gauntlet of Shar — Selfsame trial",
		why: "Guaranteed crit after a kill. Enables nova turns.",
		priority: "must"
	},
	{
		id: "i-shar-spear",
		act: 2,
		name: "Shar’s Spear of Evening",
		slot: "Weapon",
		who: ["shadowheart", "minthara"],
		where: "Reward for killing the Nightsong (Shar path)",
		why: "Dark path exclusive power weapon. Blind immunity + darkness synergy.",
		priority: "must"
	},
	{
		id: "i-callous-glow",
		act: 2,
		name: "Callous Glow Ring",
		slot: "Ring",
		who: ["astarion", "tav"],
		where: "Gauntlet of Shar vault",
		why: "+2 radiant vs illuminated. Multi-attack machines love it.",
		priority: "strong"
	},
	{
		id: "i-risky",
		act: 2,
		name: "Risky Ring",
		slot: "Ring",
		who: [
			"tav",
			"minthara",
			"astarion"
		],
		where: "Moonrise — Araj Oblodra",
		why: "Advantage on attacks. Offset save downside with gear/buffs.",
		priority: "must"
	},
	{
		id: "i-drakethroat",
		act: 2,
		name: "Drakethroat Glaive (buff)",
		slot: "Buff tool",
		who: ["any"],
		where: "Moonrise Towers trader",
		why: "Infuse a weapon with elemental damage. Cast on best weapon once.",
		priority: "strong"
	},
	{
		id: "i-eversight",
		act: 2,
		name: "Eversight Ring / blindness immunity",
		slot: "Ring",
		who: ["party"],
		where: "House of Healing morgue / Act 2 sources",
		why: "Safe Darkness / Hunger of Hadar strategies.",
		priority: "nice"
	},
	{
		id: "i-yuan-ti",
		act: 2,
		name: "Yuan-Ti Scale Mail",
		slot: "Armour",
		who: ["astarion", "minthara"],
		where: "Last Light Quartermaster (loot early if collapsing Inn)",
		why: "Full DEX to AC. Excellent medium armour.",
		priority: "strong"
	},
	{
		id: "i-rhapsody",
		act: 3,
		name: "Rhapsody",
		slot: "Weapon",
		who: ["astarion", "tav"],
		where: "Cazador’s corpse",
		why: "+attack/damage/DC per kill stacks. Perfect after Ascension.",
		priority: "must"
	},
	{
		id: "i-bhaalist",
		act: 3,
		name: "Bhaalist Armour",
		slot: "Armour",
		who: ["minthara", "tav"],
		where: "Murder Tribunal — echo of Abazigal",
		why: "Aura of Murder: nearby enemies vulnerable to piercing. Insane damage amp.",
		priority: "must"
	},
	{
		id: "i-craterflesh",
		act: 3,
		name: "Craterflesh Gloves",
		slot: "Gloves",
		who: [
			"tav",
			"astarion",
			"minthara"
		],
		where: "Murder Tribunal vendor",
		why: "Extra force on crits. Pair with Hold Person / Killer’s Sweetheart.",
		priority: "strong"
	},
	{
		id: "i-helldusk",
		act: 3,
		name: "Helldusk Armour",
		slot: "Armour",
		who: ["tav", "minthara"],
		where: "House of Hope — Raphael",
		why: "Best heavy-feel armour without heavy proficiency issues on some builds. Fire resist + flat DR.",
		priority: "must"
	},
	{
		id: "i-marko",
		act: 3,
		name: "Markoheshkir",
		slot: "Weapon",
		who: ["shadowheart", "tav"],
		where: "Ramazith’s Tower",
		why: "Free spell + Kereska’s favour. Caster power spike.",
		priority: "must"
	},
	{
		id: "i-hood-weave",
		act: 3,
		name: "Hood of the Weave",
		slot: "Head",
		who: ["shadowheart", "tav"],
		where: "Philgrave’s Mansion — Helsik/Sorcerous related vendors",
		why: "+2 spell save DC / attack. Control becomes reliable.",
		priority: "strong"
	},
	{
		id: "i-cloak-weave",
		act: 3,
		name: "Cloak of the Weave",
		slot: "Cloak",
		who: ["shadowheart", "tav"],
		where: "Devil’s Fee — Helsik special stock",
		why: "+1 spell DC. Stack with Hood.",
		priority: "strong"
	},
	{
		id: "i-bloodthirst",
		act: 3,
		name: "Bloodthirst",
		slot: "Weapon",
		who: ["astarion", "tav"],
		where: "Orin",
		why: "Crit range + vulnerability on hit. Dark Urge trophy weapon.",
		priority: "strong"
	}
];
var WHO_LABELS = {
	tav: "Dark Urge",
	shadowheart: "Shadowheart",
	astarion: "Astarion",
	minthara: "Minthara",
	any: "Anyone",
	party: "Party"
};
var PARTY = [
	{
		id: "tav",
		name: "You (Dark Urge)",
		role: "Face + Nova",
		origin: "The Dark Urge",
		race: "Drow / Dragonborn / Half-Elf",
		classPath: "Warlock → Hexblade (Pact of the Blade)",
		stats: "STR 8 · DEX 16 · CON 14 · INT 8 · WIS 10 · CHA 17",
		why: "Charisma face, huge single-target burst with Booming Blade + smites-style weapon scaling, Eldritch Blast as reliable range. Fits the dark narrative perfectly.",
		darkPath: "Lean into the Urge. Accept Bhaal-adjacent power. Side with Absolute early, Murder Tribunal later.",
		combatRole: "Burst priority targets, Command/Hold via gear, EB for free damage between rests.",
		levels: [
			{
				level: "1–2",
				note: "Hexblade. Booming Blade + Hex. Shield. Agonizing Blast when available."
			},
			{
				level: "3",
				note: "Pact of the Blade. Bind a finesse or versatile weapon. Devil’s Sight if you want Darkness cheese."
			},
			{
				level: "5",
				note: "Extra Attack via Pact. Deepened Pact. This is the first major power spike."
			},
			{
				level: "6–8",
				note: "ASI to CHA 19/20. Optional 1–2 Paladin dip later for smites if you want more nova (respec once)."
			},
			{
				level: "12",
				note: "Capstone CHA, Lifedrinker if available, or multiclass 2 Paladin for Divine Smite spam."
			}
		],
		openers: [
			"Hex or Hexblade’s Curse on boss",
			"Booming Blade / weapon attack + bonus action as needed",
			"Eldritch Blast to finish or snipe casters"
		]
	},
	{
		id: "shadowheart",
		name: "Shadowheart",
		role: "Control + Support",
		origin: "Companion",
		race: "Half-Elf (fixed)",
		classPath: "Cleric → Death Domain",
		stats: "STR 10 · DEX 14 · CON 14 · INT 8 · WIS 17 · CHA 8 (dump dumpable)",
		why: "Spirit Guardians + Reaper cantrips + Hold Person = fights end fast. Always-prepared necrotic tools. Perfect Shar / Dark Justiciar story.",
		darkPath: "Keep her loyal to Shar. Complete Gauntlet of Shar. Kill the Nightsong. Become Dark Justiciar.",
		combatRole: "Drop Spirit Guardians, walk into packs, Hold Person for crits, Bless when needed.",
		levels: [
			{
				level: "1",
				note: "Death Domain. Toll the Dead / Bone Chill. Guiding Bolt, Command, Bless, Inflict Wounds."
			},
			{
				level: "4",
				note: "War Caster (keep Spirit Guardians up)."
			},
			{
				level: "5",
				note: "Spirit Guardians (necrotic). Animate Dead / Vampiric Touch domain. Huge spike."
			},
			{
				level: "6",
				note: "Inescapable Destruction — necrotic ignores resistance."
			},
			{
				level: "8+",
				note: "Divine Strike necrotic. Prep Hold Person / Silence / Glyph of Warding as needed."
			}
		],
		openers: [
			"Bless if team needs hit chance",
			"Spirit Guardians (necrotic)",
			"Walk into melee packs; Hold Person key threats"
		]
	},
	{
		id: "astarion",
		name: "Astarion",
		role: "Ranged / Skills",
		origin: "Companion",
		race: "High Elf (fixed)",
		classPath: "Rogue → Swashbuckler (or Thief)",
		stats: "DEX primary, CON secondary, dump CHA if not face",
		why: "Lockpicking, pickpocket, high initiative, free sneak via Swashbuckler. Ascended Astarion adds massive necrotic to every attack.",
		darkPath: "Ascend him at Cazador. Dark Urge + Ascended Vampire is peak evil power fantasy.",
		combatRole: "Open with range crits, finish with sneak, utility out of combat.",
		levels: [
			{
				level: "1–3",
				note: "Rogue → Swashbuckler at 3 (Fancy Footwork + Rakish Audacity)."
			},
			{
				level: "4",
				note: "Sharpshooter if ranged-focused, or ASI DEX."
			},
			{
				level: "5–8",
				note: "More sneak dice. Optional Fighter 2 for Action Surge later."
			},
			{
				level: "Act 3",
				note: "Cazador ritual → Ascendant. Equip Rhapsody. Damage explodes."
			}
		],
		openers: [
			"High ground / hand crossbows or bow",
			"Sneak Attack every turn (Swashbuckler makes this easy)",
			"Use special arrows on groups when needed"
		]
	},
	{
		id: "minthara",
		name: "Minthara",
		role: "Frontline Destroyer",
		origin: "Companion (Absolute path)",
		race: "Drow (fixed)",
		classPath: "Paladin / Barbarian → Giant Barbarian or pure Oathbreaker",
		stats: "STR 17 · DEX 12 · CON 14 · INT 8 · WIS 10 · CHA 14 (or dump CHA if pure Barb)",
		why: "Themed dark companion. Giant Barb throws enemies and tanks. Oathbreaker smites for boss deletes. Recruited by raiding the Grove.",
		darkPath: "Raid the Grove. Side with Absolute. Keep her as your ruthless enforcer.",
		combatRole: "Charge first, Rage, throw or smash priority targets, soak aggro.",
		levels: [
			{
				level: "Recruit",
				note: "Available after Absolute / Grove raid path in Act 1."
			},
			{
				level: "Respec",
				note: "Giant Barbarian for throws + fun, or Oathbreaker Paladin for smites + aura."
			},
			{
				level: "5",
				note: "Extra Attack. Fights get short."
			},
			{
				level: "8+",
				note: "GWM if two-handed. Keep throwing weapons / enemies with Giant path."
			}
		],
		openers: [
			"Rage (if Barb) or smite setup (if Pala)",
			"Engage closest high-threat melee",
			"Throw enemies into chasms / off cliffs when available"
		]
	}
];
var PARTY_NOTES = {
	rest: "This party is long-rest friendly. Hexblade + Death Cleric burn slots; short rests still help Astarion and Minthara.",
	backup: "If Minthara is missing: use Lae’zel as Battlemaster or Giant Barb. Same frontline job.",
	face: "Dark Urge Hexblade handles all dialogue. Astarion handles locks and pockets."
};
var useProgress = create()(persist((set) => ({
	quests: {},
	items: {},
	actFilter: 0,
	toggleQuest: (id) => set((s) => ({ quests: {
		...s.quests,
		[id]: !s.quests[id]
	} })),
	toggleItem: (id) => set((s) => ({ items: {
		...s.items,
		[id]: !s.items[id]
	} })),
	resetAll: () => set({
		quests: {},
		items: {}
	}),
	setActFilter: (act) => set({ actFilter: act })
}), { name: "bg3-dark-run-progress" }));
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
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-dim)]",
			secondary: "bg-[var(--color-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-border)]",
			ghost: "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-elevated)]",
			outline: "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-elevated)]",
			danger: "bg-[var(--color-danger)] text-[var(--color-primary-fg)] hover:opacity-90"
		},
		size: {
			default: "h-10 px-4 py-2 min-h-11",
			sm: "h-9 px-3 text-xs min-h-9",
			lg: "h-12 px-6 text-base min-h-12",
			icon: "h-10 w-10 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function OverviewPanel({ onNavigate }) {
	const { quests, items, resetAll } = useProgress();
	const questDone = QUESTS.filter((q) => quests[q.id]).length;
	const itemDone = ITEMS.filter((i) => items[i.id]).length;
	const questPct = Math.round(questDone / QUESTS.length * 100);
	const itemPct = Math.round(itemDone / ITEMS.length * 100);
	const cards = [
		{
			tab: "party",
			title: "Party",
			desc: `${PARTY.length} dark builds ready`,
			icon: Skull,
			detail: "Hexblade · Death · Swash · Giant/Oathbreaker"
		},
		{
			tab: "quests",
			title: "Quests",
			desc: `${questDone}/${QUESTS.length} complete`,
			icon: ScrollText,
			detail: "Critical dark-path story beats",
			pct: questPct
		},
		{
			tab: "items",
			title: "Items",
			desc: `${itemDone}/${ITEMS.length} looted`,
			icon: Gem,
			detail: "Must-pick gear by act",
			pct: itemPct
		},
		{
			tab: "combat",
			title: "Combat",
			desc: "Rush openers",
			icon: Swords,
			detail: "End fights in round one"
		}
	];
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
						children: "Clear the map. Collect the power. Enjoy the evil story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed",
						children: "Companion for a new dark run: fixed party, checklist quests, best items, and combat habits so fights stay short on default difficulty. Progress saves in this browser."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: cards.map((c) => {
					const Icon = c.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onNavigate(c.tab),
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
										className: "font-semibold text-[var(--color-fg)]",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-muted)] mt-0.5",
										children: c.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[var(--color-subtle)] mt-2",
										children: c.detail
									}),
									typeof c.pct === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: c.pct,
										className: "mt-3"
									}) : null
								]
							})]
						})
					}, c.tab);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium text-[var(--color-fg)]",
						children: "Start checklist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal list-inside space-y-1.5 text-sm text-[var(--color-muted)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "New game → The Dark Urge → Hexblade Warlock" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Recruit Shadowheart + Astarion; respec SH to Death Domain" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Raid Grove → recruit Minthara" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tick quests and items as you go — filter by act" })
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
var ROLE_ICON = {
	"Face + Nova": Sparkles,
	"Control + Support": Skull,
	"Ranged / Skills": User,
	"Frontline Destroyer": Swords
};
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
					children: "Built to enjoy the evil story and end fights fast. Respec at Withers anytime. Minthara requires the Absolute / Grove raid path."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: PARTY.map((m) => {
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
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: m.origin
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-2 text-sm",
								children: [
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
										className: "shrink-0 font-medium text-[var(--color-fg)] tabular w-12",
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
					}, m.id);
				})
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
function CheckRow({ id, checked, onToggle, title, subtitle, meta, badges, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: cn("flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors duration-150 cursor-pointer", "hover:border-[var(--color-border-strong)]", checked && "opacity-70 bg-[var(--color-elevated)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			id,
			checked,
			onCheckedChange: () => onToggle(),
			className: "mt-0.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 space-y-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-medium text-[var(--color-fg)] leading-snug", checked && "line-through text-[var(--color-muted)]"),
							children: title
						}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-[var(--color-muted)] leading-normal",
							children: subtitle
						}) : null]
					}), meta]
				}),
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
	const { quests, toggleQuest, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? QUESTS : QUESTS.filter((q) => q.act === actFilter);
	const done = filtered.filter((q) => quests[q.id]).length;
	const total = filtered.length;
	const pct = total ? Math.round(done / total * 100) : 0;
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
						children: "Story + power path for a dark run. Critical = do not skip."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							done,
							"/",
							total,
							" done"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct }),
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
						checked: !!quests[q.id],
						onToggle: () => toggleQuest(q.id),
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
	const { items, toggleItem, actFilter, setActFilter } = useProgress();
	const filtered = actFilter === 0 ? ITEMS : ITEMS.filter((i) => i.act === actFilter);
	const done = filtered.filter((i) => items[i.id]).length;
	const total = filtered.length;
	const pct = total ? Math.round(done / total * 100) : 0;
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
						children: "High-value gear for this party. Must = pick up on the dark path."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-[var(--color-muted)] tabular",
						children: [
							done,
							"/",
							total,
							" looted"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct }),
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
						checked: !!items[item.id],
						onToggle: () => toggleItem(item.id),
						title: item.name,
						subtitle: item.why,
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-[var(--color-subtle)]",
							children: ["Where: ", item.where]
						})
					}, item.id))
				})]
			}, act))
		})]
	});
}
var COMBAT_TIPS = [
	{
		id: "c-init",
		title: "Win initiative, win the fight",
		body: "Alert feat or high-DEX + initiative gear on at least Shadowheart and Astarion. First round Hold Person / Command turns bosses into loot pinatas.",
		tags: ["setup"]
	},
	{
		id: "c-hold",
		title: "Hold Person / Hold Monster core",
		body: "Shadowheart holds. Everyone piles crits. Killer’s Sweetheart + Craterflesh + smites/hex make single targets vanish in one turn.",
		tags: ["control", "nova"]
	},
	{
		id: "c-sg",
		title: "Spirit Guardians is your AoE",
		body: "Cast necrotic SG, walk through packs. Death Domain ignores necrotic resist at 6. No need for fancy Fireball setups on this party.",
		tags: ["aoe"]
	},
	{
		id: "c-elixirs",
		title: "Pre-buff with elixirs",
		body: "Elixir of Bloodlust (extra action on kill), Cloud Giant / Hill Giant strength for Minthara, Peerless Focus for concentration. Drink after long rest.",
		tags: ["prep"]
	},
	{
		id: "c-surprise",
		title: "Surprise when possible",
		body: "Group with invis / hide. Surprise round deletes half the encounter before they act. Dark Urge stealth + Astarion is enough.",
		tags: ["prep"]
	},
	{
		id: "c-height",
		title: "High ground + special arrows",
		body: "Astarion opens with Arrow of Many Targets or slaying arrows on priority. Height advantage is free damage.",
		tags: ["ranged"]
	},
	{
		id: "c-throw",
		title: "Chasms are free kills",
		body: "Giant Barb / shove / Eldritch Blast Repelling (if taken) — yeet enemies off maps. Instant, no HP check.",
		tags: ["cheese"]
	},
	{
		id: "c-darkness",
		title: "Darkness cheese (optional)",
		body: "If you took Devil’s Sight on Hexblade: cast Darkness on the party. Enemies miss; you don’t. Combine with Shar spear path.",
		tags: ["cheese"]
	},
	{
		id: "c-focus",
		title: "Focus fire, don’t spread",
		body: "Kill order: enemy casters → legendary actions → multiattack brutes → trash. Dead enemies deal zero damage.",
		tags: ["basics"]
	},
	{
		id: "c-rest",
		title: "Rest discipline",
		body: "Long rest after major story fights. Short rest to top Astarion/Minthara. Don’t hoard potions — use Speed potions on bosses.",
		tags: ["basics"]
	}
];
var OPENER_ROTATION = [
	{
		step: 1,
		actor: "Shadowheart",
		action: "Spirit Guardians (necrotic) or Hold Person on boss"
	},
	{
		step: 2,
		actor: "Dark Urge",
		action: "Hexblade’s Curse + weapon nova / EB on same target"
	},
	{
		step: 3,
		actor: "Astarion",
		action: "Sneak Attack / special arrow into held or cursed target"
	},
	{
		step: 4,
		actor: "Minthara",
		action: "Rage/smite and delete whatever is still standing"
	}
];
function CombatPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Rush combat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)] max-w-2xl",
					children: "Default difficulty melts if you open with control and focus fire. Use this as your mental checklist before tough fights."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: "Standard opener"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[var(--color-muted)]",
						children: "First round — most packs die here"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3",
					children: OPENER_ROTATION.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm border-b border-[var(--color-border)] last:border-0 pb-3 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-elevated)] text-xs font-semibold tabular text-[var(--color-fg)]",
							children: s.step
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-[var(--color-fg)]",
							children: s.actor
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[var(--color-muted)] leading-relaxed",
							children: s.action
						})] })]
					}, s.step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: COMBAT_TIPS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-[var(--color-fg)] text-sm",
							children: t.title
						}), t.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: tag
						}, tag))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)] leading-relaxed",
						children: t.body
					})]
				}, t.id))
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
				className: "mb-6 space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]",
						children: "Baldur's Gate 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight sm:text-3xl",
						children: "Dark Run Companion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--color-muted)]",
						children: "Party · quests · loot · rush combat"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: tab,
				onValueChange: setTab,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "sticky top-[var(--grok-banner-h,0px)] z-10 backdrop-blur-sm bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "overview",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "party",
								children: "Party"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "quests",
								children: "Quests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "items",
								children: "Items"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "combat",
								children: "Combat"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "overview",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, { onNavigate: setTab })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "party",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "quests",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "items",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "combat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatPanel, {})
					})
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
