export type ApprovalNote = {
  id: string;
  companion: "astarion" | "shadowheart" | "minthara" | "party";
  title: string;
  effect: string;
  tip: string;
  tone: "up" | "down" | "neutral";
};

export const APPROVAL: ApprovalNote[] = [
  {
    id: "ap-ast-cruel",
    companion: "astarion",
    title: "Cruel / selfish choices",
    effect: "Astarion likes ruthlessness and freedom",
    tip: "Let him drink (with consent later), mock weak NPCs carefully, support autonomy.",
    tone: "up",
  },
  {
    id: "ap-ast-ascend",
    companion: "astarion",
    title: "Support Ascension",
    effect: "Major dark power + story for him",
    tip: "In Cazador ritual, let him complete Ascension for this run’s plan.",
    tone: "up",
  },
  {
    id: "ap-ast-good",
    companion: "astarion",
    title: "Heroic self-sacrifice lectures",
    effect: "Can annoy him early",
    tip: "You’re dark — don’t preach. Still can be loyal to the party.",
    tone: "down",
  },
  {
    id: "ap-sh-shar",
    companion: "shadowheart",
    title: "Respect Shar / secrets",
    effect: "Approves privacy and Shar loyalty early",
    tip: "Don’t force her artifact secrets; support kill Nightsong for Dark Justiciar.",
    tone: "up",
  },
  {
    id: "ap-sh-selune",
    companion: "shadowheart",
    title: "Push Selûne / save Nightsong hard",
    effect: "Conflicts with dark SH path",
    tip: "Skip if you want spear + Justiciar story.",
    tone: "down",
  },
  {
    id: "ap-min-absolute",
    companion: "minthara",
    title: "Absolute strength & ambition",
    effect: "Loves dominance, Absolute, power",
    tip: "Raid Grove, free her at Moonrise, lean Absolute / Bhaal power fantasy.",
    tone: "up",
  },
  {
    id: "ap-min-mercy",
    companion: "minthara",
    title: "Mercy to weak enemies",
    effect: "Dislikes soft choices",
    tip: "You’re on Absolute path — stay decisive.",
    tone: "down",
  },
  {
    id: "ap-party-urge",
    companion: "party",
    title: "Dark Urge scenes",
    effect: "Varies — resist vs embrace",
    tip: "Embrace for dark run climax; some kills upset soft companions (you already lose Wyll/Karlach).",
    tone: "neutral",
  },
  {
    id: "ap-party-camp",
    companion: "party",
    title: "Long rest for romance / scenes",
    effect: "Approval and story gates need rests",
    tip: "Don’t only partial-rest forever — trigger camp scenes for mantle, romance, Minthara.",
    tone: "neutral",
  },
];

export const COMPANION_LABEL: Record<ApprovalNote["companion"], string> = {
  astarion: "Astarion",
  shadowheart: "Shadowheart",
  minthara: "Minthara",
  party: "Party / Urge",
};
