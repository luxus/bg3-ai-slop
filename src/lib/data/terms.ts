/**
 * Unified term database: name + icon + wiki link.
 *
 * One row per game term used in the app (spells, skills, feats, features…).
 * lookupTerm() is the API for UI chips.
 */

export type TermKind =
  | "spell"
  | "cantrip"
  | "invocation"
  | "feat"
  | "feature"
  | "skill"
  | "subclass"
  | "class"
  | "item"
  | "other";

export type Term = {
  /** Display / match name (canonical) */
  name: string;
  /** Local icon path under /public */
  icon: string;
  /** bg3.wiki page */
  link: string;
  kind: TermKind;
  /** Extra match strings (lowercase) */
  aliases?: string[];
};

function wiki(path: string): string {
  return `https://bg3.wiki/wiki/${path}`;
}

function icon(file: string): string {
  return `/icons/${file}`;
}

/**
 * Master list — add new terms here.
 * `name` is the primary label; aliases catch variants.
 */
export const TERMS: Term[] = [
  // ── cantrips / spells ──
  { name: "Eldritch Blast", icon: icon("Eldritch_Blast.webp"), link: wiki("Eldritch_Blast"), kind: "cantrip", aliases: ["eb"] },
  { name: "Booming Blade", icon: icon("Booming_Blade.webp"), link: wiki("Booming_Blade"), kind: "cantrip" },
  { name: "Toll the Dead", icon: icon("Toll_the_Dead.webp"), link: wiki("Toll_the_Dead"), kind: "cantrip" },
  { name: "Guidance", icon: icon("Guidance.webp"), link: wiki("Guidance"), kind: "cantrip" },
  { name: "Sacred Flame", icon: icon("Sacred_Flame.webp"), link: wiki("Sacred_Flame"), kind: "cantrip" },
  { name: "Produce Flame", icon: icon("Produce_Flame.webp"), link: wiki("Produce_Flame"), kind: "cantrip" },
  { name: "Thaumaturgy", icon: icon("Thaumaturgy.webp"), link: wiki("Thaumaturgy"), kind: "cantrip" },
  { name: "Mage Hand", icon: icon("Mage_Hand.webp"), link: wiki("Mage_Hand"), kind: "cantrip" },
  { name: "Minor Illusion", icon: icon("Minor_Illusion.webp"), link: wiki("Minor_Illusion"), kind: "cantrip" },
  { name: "Friends", icon: icon("Friends.webp"), link: wiki("Friends"), kind: "cantrip" },
  { name: "Bone Chill", icon: icon("Bone_Chill.webp"), link: wiki("Bone_Chill"), kind: "cantrip" },
  { name: "Fire Bolt", icon: icon("Fire_Bolt.webp"), link: wiki("Fire_Bolt"), kind: "cantrip" },
  { name: "True Strike", icon: icon("True_Strike.webp"), link: wiki("True_Strike"), kind: "cantrip" },
  { name: "Dancing Lights", icon: icon("Dancing_Lights.webp"), link: wiki("Dancing_Lights"), kind: "cantrip" },

  { name: "Hex", icon: icon("Hex.webp"), link: wiki("Hex"), kind: "spell" },
  { name: "Shield", icon: icon("Shield.webp"), link: wiki("Shield"), kind: "spell" },
  { name: "Armour of Agathys", icon: icon("Armour_of_Agathys.webp"), link: wiki("Armour_of_Agathys"), kind: "spell", aliases: ["armor of agathys"] },
  { name: "Hellish Rebuke", icon: icon("Hellish_Rebuke.webp"), link: wiki("Hellish_Rebuke"), kind: "spell" },
  { name: "Hunger of Hadar", icon: icon("Hunger_of_Hadar.webp"), link: wiki("Hunger_of_Hadar"), kind: "spell" },
  { name: "Counterspell", icon: icon("Counterspell.webp"), link: wiki("Counterspell"), kind: "spell" },
  { name: "Shadow Blade", icon: icon("Shadow_Blade.webp"), link: wiki("Shadow_Blade"), kind: "spell" },
  { name: "Misty Step", icon: icon("Misty_Step.webp"), link: wiki("Misty_Step"), kind: "spell" },
  { name: "Mirror Image", icon: icon("Mirror_Image.webp"), link: wiki("Mirror_Image"), kind: "spell" },
  { name: "Darkness", icon: icon("Darkness.webp"), link: wiki("Darkness"), kind: "spell" },
  { name: "Faerie Fire", icon: icon("Faerie_Fire.webp"), link: wiki("Faerie_Fire"), kind: "spell" },
  { name: "Bless", icon: icon("Bless.webp"), link: wiki("Bless"), kind: "spell" },
  { name: "Healing Word", icon: icon("Healing_Word.webp"), link: wiki("Healing_Word"), kind: "spell" },
  { name: "Command", icon: icon("Command.webp"), link: wiki("Command"), kind: "spell" },
  { name: "Hold Person", icon: icon("Hold_Person.webp"), link: wiki("Hold_Person"), kind: "spell" },
  { name: "Shield of Faith", icon: icon("Shield_of_Faith.webp"), link: wiki("Shield_of_Faith"), kind: "spell" },
  { name: "Spiritual Weapon", icon: icon("Spiritual_Weapon.webp"), link: wiki("Spiritual_Weapon"), kind: "spell" },
  { name: "Aid", icon: icon("Aid.webp"), link: wiki("Aid"), kind: "spell" },
  { name: "Spirit Guardians", icon: icon("Spirit_Guardians.webp"), link: wiki("Spirit_Guardians"), kind: "spell", aliases: ["sg"] },
  { name: "Revivify", icon: icon("Revivify.webp"), link: wiki("Revivify"), kind: "spell" },
  { name: "Mass Healing Word", icon: icon("Mass_Healing_Word.webp"), link: wiki("Mass_Healing_Word"), kind: "spell" },
  { name: "Banishment", icon: icon("Banishment.webp"), link: wiki("Banishment"), kind: "spell" },
  { name: "Freedom of Movement", icon: icon("Freedom_of_Movement.webp"), link: wiki("Freedom_of_Movement"), kind: "spell" },
  { name: "Guardian of Faith", icon: icon("Guardian_of_Faith.webp"), link: wiki("Guardian_of_Faith"), kind: "spell" },
  { name: "Dimension Door", icon: icon("Dimension_Door.webp"), link: wiki("Dimension_Door"), kind: "spell" },
  { name: "Hold Monster", icon: icon("Hold_Monster.webp"), link: wiki("Hold_Monster"), kind: "spell" },
  { name: "Insect Plague", icon: icon("Insect_Plague.webp"), link: wiki("Insect_Plague"), kind: "spell" },
  { name: "Greater Restoration", icon: icon("Greater_Restoration.webp"), link: wiki("Greater_Restoration"), kind: "spell" },
  { name: "Mass Cure Wounds", icon: icon("Mass_Cure_Wounds.webp"), link: wiki("Mass_Cure_Wounds"), kind: "spell" },
  { name: "Heroes' Feast", icon: icon("Heroes_Feast.webp"), link: wiki("Heroes'_Feast"), kind: "spell", aliases: ["heroes feast"] },

  // ── invocations ──
  { name: "Agonising Blast", icon: icon("Agonising_Blast.webp"), link: wiki("Agonising_Blast"), kind: "invocation", aliases: ["agonizing blast"] },
  { name: "Devil's Sight", icon: icon("Devil_s_Sight.webp"), link: wiki("Devil's_Sight"), kind: "invocation", aliases: ["devils sight"] },
  { name: "Beguiling Influence", icon: icon("Beguiling_Influence.webp"), link: wiki("Beguiling_Influence"), kind: "invocation" },
  { name: "Repelling Blast", icon: icon("Repelling_Blast.webp"), link: wiki("Repelling_Blast"), kind: "invocation" },
  { name: "Eldritch Invocation", icon: icon("Eldritch_Invocation.webp"), link: wiki("Eldritch_Invocation"), kind: "invocation" },

  // ── feats ──
  { name: "War Caster", icon: icon("War_Caster.webp"), link: wiki("War_Caster"), kind: "feat" },
  { name: "Sharpshooter", icon: icon("Sharpshooter.webp"), link: wiki("Sharpshooter"), kind: "feat" },
  { name: "Alert", icon: icon("Alert.webp"), link: wiki("Alert"), kind: "feat" },
  { name: "Crossbow Expert", icon: icon("Crossbow_Expert.webp"), link: wiki("Crossbow_Expert"), kind: "feat" },
  { name: "Great Weapon Master", icon: icon("Great_Weapon_Master.webp"), link: wiki("Great_Weapon_Master"), kind: "feat", aliases: ["gwm"] },
  { name: "Savage Attacker", icon: icon("Savage_Attacker.webp"), link: wiki("Savage_Attacker"), kind: "feat" },
  { name: "Tavern Brawler", icon: icon("Tavern_Brawler.webp"), link: wiki("Tavern_Brawler"), kind: "feat" },
  { name: "Spell Sniper", icon: icon("Spell_Sniper.webp"), link: wiki("Spell_Sniper"), kind: "feat" },
  { name: "Magic Initiate", icon: icon("Magic_Initiate.webp"), link: wiki("Magic_Initiate"), kind: "feat" },

  // ── class features ──
  { name: "Hex Warrior", icon: icon("Hex_Warrior.webp"), link: wiki("Hex_Warrior"), kind: "feature" },
  { name: "Bind Hexed Weapon", icon: icon("Bind_Hexed_Weapon.webp"), link: wiki("Bind_Hexed_Weapon"), kind: "feature", aliases: ["bind pact weapon"] },
  { name: "Hexblade's Curse", icon: icon("Hexblade_s_Curse.webp"), link: wiki("Hexblade's_Curse"), kind: "feature", aliases: ["hexblades curse"] },
  { name: "Pact of the Blade", icon: icon("Pact_of_the_Blade.webp"), link: wiki("Pact_of_the_Blade"), kind: "feature" },
  { name: "Deepened Pact", icon: icon("Deepened_Pact.webp"), link: wiki("Deepened_Pact"), kind: "feature" },
  { name: "Extra Attack", icon: icon("Extra_Attack.webp"), link: wiki("Extra_Attack"), kind: "feature" },
  { name: "Accursed Spectre", icon: icon("Accursed_Spectre.webp"), link: wiki("Accursed_Spectre"), kind: "feature" },
  { name: "Armour of Hexes", icon: icon("Armour_of_Hexes.webp"), link: wiki("Armour_of_Hexes"), kind: "feature", aliases: ["armor of hexes"] },
  { name: "Mystic Arcanum", icon: icon("Mystic_Arcanum.png"), link: wiki("Mystic_Arcanum"), kind: "feature" },
  { name: "Reaper", icon: icon("Reaper.webp"), link: wiki("Reaper_(Death_Domain)"), kind: "feature" },
  { name: "Turn Undead", icon: icon("Turn_Undead.webp"), link: wiki("Turn_Undead"), kind: "feature" },
  { name: "Touch of Death", icon: icon("Touch_of_Death.webp"), link: wiki("Touch_of_Death"), kind: "feature" },
  { name: "Inescapable Destruction", icon: icon("Inescapable_Destruction.webp"), link: wiki("Inescapable_Destruction"), kind: "feature" },
  { name: "Divine Intervention", icon: icon("Divine_Intervention.webp"), link: wiki("Divine_Intervention"), kind: "feature" },
  { name: "Divine Strike", icon: icon("Divine_Strike.webp"), link: wiki("Divine_Strike"), kind: "feature" },
  { name: "Destroy Undead", icon: icon("Destroy_Undead.webp"), link: wiki("Destroy_Undead"), kind: "feature" },
  { name: "Channel Divinity", icon: icon("Channel_Divinity.png"), link: wiki("Channel_Divinity"), kind: "feature" },
  { name: "Fast Hands", icon: icon("Fast_Hands.webp"), link: wiki("Fast_Hands"), kind: "feature" },
  { name: "Second-Story Work", icon: icon("Second-Story_Work.webp"), link: wiki("Second-Story_Work"), kind: "feature" },
  { name: "Sneak Attack", icon: icon("Sneak_Attack.webp"), link: wiki("Sneak_Attack"), kind: "feature" },
  { name: "Cunning Action", icon: icon("Fast_Hands.webp"), link: wiki("Cunning_Action"), kind: "feature" },
  { name: "Uncanny Dodge", icon: icon("Uncanny_Dodge.webp"), link: wiki("Uncanny_Dodge"), kind: "feature" },
  { name: "Evasion", icon: icon("Evasion.webp"), link: wiki("Evasion"), kind: "feature" },
  { name: "Reliable Talent", icon: icon("Reliable_Talent.webp"), link: wiki("Reliable_Talent"), kind: "feature" },
  { name: "Supreme Sneak", icon: icon("Supreme_Sneak.webp"), link: wiki("Supreme_Sneak"), kind: "feature" },
  { name: "Action Surge", icon: icon("Action_Surge.webp"), link: wiki("Action_Surge"), kind: "feature" },
  { name: "Divine Smite", icon: icon("Divine_Smite.webp"), link: wiki("Divine_Smite"), kind: "feature" },
  { name: "Improved Divine Smite", icon: icon("Improved_Divine_Smite.webp"), link: wiki("Improved_Divine_Smite"), kind: "feature" },
  { name: "Aura of Protection", icon: icon("Aura_of_Protection.webp"), link: wiki("Aura_of_Protection"), kind: "feature" },
  { name: "Aura of Hate", icon: icon("Aura_of_Hate.webp"), link: wiki("Aura_of_Hate"), kind: "feature" },
  { name: "Aura of Courage", icon: icon("Aura_of_Courage.webp"), link: wiki("Aura_of_Courage"), kind: "feature" },
  { name: "Control Undead", icon: icon("Control_Undead.webp"), link: wiki("Control_Undead"), kind: "feature" },
  { name: "Great Weapon Fighting", icon: icon("Great_Weapon_Fighting.webp"), link: wiki("Great_Weapon_Fighting"), kind: "feature", aliases: ["fighting style"] },

  // ── classes / subclasses ──
  { name: "Warlock", icon: icon("Warlock.webp"), link: wiki("Warlock"), kind: "class" },
  { name: "Cleric", icon: icon("Cleric.webp"), link: wiki("Cleric"), kind: "class" },
  { name: "Rogue", icon: icon("Rogue.webp"), link: wiki("Rogue"), kind: "class" },
  { name: "Paladin", icon: icon("Paladin.webp"), link: wiki("Paladin"), kind: "class" },
  { name: "Fighter", icon: icon("Fighter.webp"), link: wiki("Fighter"), kind: "class" },
  { name: "Barbarian", icon: icon("Barbarian.webp"), link: wiki("Barbarian"), kind: "class" },
  { name: "The Hexblade", icon: icon("The_Hexblade.webp"), link: wiki("The_Hexblade"), kind: "subclass", aliases: ["hexblade"] },
  { name: "Death Domain", icon: icon("Death_Domain.webp"), link: wiki("Death_Domain"), kind: "subclass" },
  { name: "Thief", icon: icon("Thief.webp"), link: wiki("Thief"), kind: "subclass" },
  { name: "Oathbreaker", icon: icon("Oathbreaker.webp"), link: wiki("Oathbreaker"), kind: "subclass" },
  { name: "Battle Master", icon: icon("Battle_Master.webp"), link: wiki("Battle_Master"), kind: "subclass", aliases: ["battlemaster"] },
  { name: "Assassin", icon: icon("Assassin.webp"), link: wiki("Assassin"), kind: "subclass" },
  { name: "Swashbuckler", icon: icon("Swashbuckler.webp"), link: wiki("Swashbuckler"), kind: "subclass" },
  { name: "Arcane Trickster", icon: icon("Arcane_Trickster.webp"), link: wiki("Arcane_Trickster"), kind: "subclass" },

  // ── skills (all 18) ──
  { name: "Acrobatics", icon: icon("Acrobatics.svg"), link: wiki("Acrobatics"), kind: "skill" },
  { name: "Animal Handling", icon: icon("Animal_Handling.svg"), link: wiki("Animal_Handling"), kind: "skill" },
  { name: "Arcana", icon: icon("Arcana.svg"), link: wiki("Arcana"), kind: "skill" },
  { name: "Athletics", icon: icon("Athletics.svg"), link: wiki("Athletics"), kind: "skill" },
  { name: "Deception", icon: icon("Deception.svg"), link: wiki("Deception"), kind: "skill" },
  { name: "History", icon: icon("History.svg"), link: wiki("History"), kind: "skill" },
  { name: "Insight", icon: icon("Insight.svg"), link: wiki("Insight"), kind: "skill" },
  { name: "Intimidation", icon: icon("Intimidation.svg"), link: wiki("Intimidation"), kind: "skill" },
  { name: "Investigation", icon: icon("Investigation.svg"), link: wiki("Investigation"), kind: "skill" },
  { name: "Medicine", icon: icon("Medicine.svg"), link: wiki("Medicine"), kind: "skill" },
  { name: "Nature", icon: icon("Nature.svg"), link: wiki("Nature"), kind: "skill" },
  { name: "Perception", icon: icon("Perception.svg"), link: wiki("Perception"), kind: "skill" },
  { name: "Performance", icon: icon("Performance.svg"), link: wiki("Performance"), kind: "skill" },
  { name: "Persuasion", icon: icon("Persuasion.svg"), link: wiki("Persuasion"), kind: "skill" },
  { name: "Religion", icon: icon("Religion.svg"), link: wiki("Religion"), kind: "skill" },
  { name: "Sleight of Hand", icon: icon("Sleight_of_Hand.svg"), link: wiki("Sleight_of_Hand"), kind: "skill" },
  { name: "Stealth", icon: icon("Stealth.svg"), link: wiki("Stealth"), kind: "skill" },
  { name: "Survival", icon: icon("Survival.svg"), link: wiki("Survival"), kind: "skill" },

  // ── items / other ──
  { name: "Everburn Blade", icon: icon("Everburn_Blade.webp"), link: wiki("Everburn_Blade"), kind: "item" },
  { name: "Phalar Aluve", icon: icon("Phalar_Aluve.webp"), link: wiki("Phalar_Aluve"), kind: "item" },
  { name: "Knife of the Undermountain King", icon: icon("Knife_of_the_Undermountain_King.webp"), link: wiki("Knife_of_the_Undermountain_King"), kind: "item" },
  { name: "Drow", icon: icon("Drow.webp"), link: wiki("Drow"), kind: "other" },
  { name: "Haunted One", icon: icon("Haunted_One.webp"), link: wiki("Haunted_One"), kind: "other" },
];

// ── index for fast lookup ──

type IndexEntry = { term: Term; key: string };

function buildIndex(): IndexEntry[] {
  const out: IndexEntry[] = [];
  for (const term of TERMS) {
    out.push({ term, key: term.name.toLowerCase() });
    for (const a of term.aliases ?? []) {
      out.push({ term, key: a.toLowerCase() });
    }
  }
  // longest keys first for prefix match
  out.sort((a, b) => b.key.length - a.key.length);
  return out;
}

const INDEX = buildIndex();

function cleanQuery(raw: string): string {
  let s = raw.trim().toLowerCase();
  s = s.replace(/^\+\s*/, "");
  s = s.replace(/^\+?\d+\s+spell:\s*/i, "");
  s = s.replace(
    /^(optional|soft|alt|feat|asi|step\s*[ab]|subclass|feature|spell|cantrip|invocation)[:\s]+/i,
    "",
  );
  s = s.split(/\s+[—–]\s+/)[0] ?? s;
  s = s.split(/\s*→\s*/)[0] ?? s;
  s = s.split(/\s*->\s*/)[0] ?? s;
  if (s.includes(":")) {
    const left = s.split(":")[0]?.trim() ?? s;
    if (left.length <= 40) s = left;
  }
  s = s.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  s = (s.split(/\s+\/\s+/)[0] ?? s).split(/\s+or\s+/i)[0]?.trim() ?? s;
  s = (s.split(/\s+\+\s+/)[0] ?? s).trim();
  return s.replace(/\s+/g, " ").trim();
}

/** Find term by free-form UI text (exact, then longest prefix). */
export function lookupTerm(raw: string): Term | null {
  const cleaned = cleanQuery(raw);
  if (!cleaned) return null;

  for (const { term, key } of INDEX) {
    if (cleaned === key) return term;
  }
  for (const { term, key } of INDEX) {
    if (
      cleaned.startsWith(key + " ") ||
      cleaned.startsWith(key + ":") ||
      cleaned.startsWith(key + ",") ||
      cleaned.startsWith(key + "→") ||
      cleaned.startsWith(key + "+") ||
      cleaned.startsWith(key + "/")
    ) {
      return term;
    }
  }
  return null;
}

export function lookupIcon(name: string): string | null {
  return lookupTerm(name)?.icon ?? null;
}

export function lookupLink(name: string): string | null {
  return lookupTerm(name)?.link ?? null;
}

export const TERMS_COUNT = TERMS.length;
