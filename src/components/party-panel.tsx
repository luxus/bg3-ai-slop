import { useMemo, useState } from "react";
import { PARTY, PARTY_NOTES, TEMP_COMPANIONS } from "@/lib/data/party";
import {
  LEVEL_PICKS,
  PARTY_SYNERGY,
  type LevelPick,
} from "@/lib/data/levels";
import { useProgress, countProgress } from "@/lib/store";
import { CreateCharacter } from "@/components/create-character";
import { LevelUpCard } from "@/components/level-up-card";
import { DualProgress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { WikiChip, RichWikiText } from "@/components/wiki-chip";
import {
  Sparkles,
  Skull,
  Crosshair,
  Swords,
  Shield,
  type LucideIcon,
} from "lucide-react";

type MemberKey = LevelPick["member"];

const CHAR_META: Record<
  MemberKey,
  {
    label: string;
    short: string;
    Icon: LucideIcon;
    color: string;
    temp?: boolean;
    member?: (typeof PARTY)[number] | (typeof TEMP_COMPANIONS)[number];
  }
> = {
  tav: {
    label: "Dark Urge",
    short: "DU",
    Icon: Sparkles,
    color: "bg-[#5c2a2a] text-[#f0b4a8]",
    member: PARTY.find((m) => m.id === "tav"),
  },
  shadowheart: {
    label: "Shadowheart",
    short: "SH",
    Icon: Skull,
    color: "bg-[#2a2a4a] text-[#c4c0f0]",
    member: PARTY.find((m) => m.id === "shadowheart"),
  },
  astarion: {
    label: "Astarion",
    short: "AS",
    Icon: Crosshair,
    color: "bg-[#3a2a3a] text-[#e8c0d8]",
    member: PARTY.find((m) => m.id === "astarion"),
  },
  minthara: {
    label: "Minthara",
    short: "MI",
    Icon: Swords,
    color: "bg-[#2a3a2a] text-[#b8e0b8]",
    member: PARTY.find((m) => m.id === "minthara"),
  },
  laezel: {
    label: "Lae’zel",
    short: "LZ",
    Icon: Shield,
    color: "bg-[#3a3a2a] text-[#e0d8a8]",
    temp: true,
    member: TEMP_COMPANIONS.find((m) => m.id === "laezel"),
  },
};

const ORDER: MemberKey[] = [
  "tav",
  "shadowheart",
  "astarion",
  "minthara",
  "laezel",
];

export function PartyPanel() {
  const levels = useProgress((s) => s.levels);
  const levelsSkip = useProgress((s) => s.levelsSkip);
  const [sel, setSel] = useState<MemberKey>("tav");
  const [tab, setTab] = useState<"build" | "levels" | "synergy">("build");

  const meta = CHAR_META[sel];
  const m = meta.member;

  const filtered = useMemo(
    () => LEVEL_PICKS.filter((l) => l.member === sel),
    [sel],
  );

  const stats = countProgress(
    filtered.map((l) => l.id),
    levels,
    levelsSkip,
  );

  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-fg)]">
          Party
        </h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          Pick a character. Skills / spells use wiki icons + links.
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {ORDER.map((id) => {
          const c = CHAR_META[id];
          const active = sel === id;
          const Icon = c.Icon;
          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                setSel(id);
                setTab("build");
              }}
              className={`flex min-w-[4.5rem] flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border px-2 py-2.5 transition-colors ${
                active
                  ? "border-[var(--color-primary)] bg-[var(--color-accent-soft)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${c.color} ring-2 ${
                  active ? "ring-[var(--color-primary)]" : "ring-transparent"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-medium text-[var(--color-fg)] text-center leading-tight">
                {c.short}
              </span>
              {c.temp ? (
                <span className="text-[9px] uppercase tracking-wide text-[var(--color-warn)]">
                  temp
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-[var(--color-fg)]">
              {meta.label}
            </h3>
            {meta.temp ? <Badge variant="warn">Act 1 temp</Badge> : null}
            {m ? <Badge variant="outline">{m.role}</Badge> : null}
          </div>
          {m ? (
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              <RichWikiText text={m.classPath} />
            </p>
          ) : null}
        </div>
        {tab === "levels" ? (
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} done · {stats.skipN} skip
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["build", "Build"],
            ["levels", "Level-ups"],
            ["synergy", "Team"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === id
                ? "bg-[var(--color-primary)] text-[var(--color-primary-fg)]"
                : "bg-[var(--color-elevated)] text-[var(--color-muted)] border border-[var(--color-border)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "build" && m ? (
        <div className="space-y-4">
          {sel === "tav" ? <CreateCharacter /> : null}

          <dl className="grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
              <dt className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                Origin / race
              </dt>
              <dd className="mt-1 text-[var(--color-fg)]">
                {m.origin}
                <br />
                <span className="text-[var(--color-muted)]">{m.race}</span>
              </dd>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
              <dt className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                Stats
              </dt>
              <dd className="mt-1 font-mono text-xs text-[var(--color-muted)]">
                {m.stats}
              </dd>
            </div>
            <div className="sm:col-span-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
              <dt className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                Why
              </dt>
              <dd className="mt-1 text-[var(--color-muted)] leading-relaxed">
                <RichWikiText text={m.why} />
              </dd>
            </div>
            <div className="sm:col-span-2 rounded-[var(--radius-lg)] border border-[var(--color-primary)]/30 bg-[var(--color-accent-soft)] p-3">
              <dt className="text-[10px] uppercase tracking-wide text-[var(--color-primary)]">
                Dark path
              </dt>
              <dd className="mt-1 text-sm text-[var(--color-fg)] leading-relaxed">
                {m.darkPath}
              </dd>
            </div>
          </dl>

          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
              Combat openers
            </p>
            <div className="flex flex-wrap gap-1.5">
              {m.openers.map((o) => (
                <WikiChip key={o} text={o} size="sm" />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
              Quick level notes
            </p>
            <ul className="space-y-1.5">
              {m.levels.map((l) => (
                <li
                  key={l.level}
                  className="flex gap-2 text-sm text-[var(--color-muted)]"
                >
                  <span className="shrink-0 font-medium text-[var(--color-fg)] tabular w-16">
                    {l.level}
                  </span>
                  <span className="leading-relaxed min-w-0">
                    <RichWikiText text={l.note} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-[var(--color-subtle)]">
              Full in-game order picks → Level-ups.
            </p>
          </div>

          {sel === "shadowheart" ? (
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 text-sm text-[var(--color-muted)]">
              <p className="font-medium text-[var(--color-fg)] mb-2">
                Withers respec checklist
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Class → Cleric</li>
                <li className="flex flex-wrap items-center gap-1">
                  Subclass → <WikiChip text="Death Domain" size="sm" />
                </li>
                <li>WIS + CON first</li>
                <li className="flex flex-wrap items-center gap-1">
                  Cantrips: <WikiChip text="Toll the Dead" size="sm" />
                  <WikiChip text="Guidance" size="sm" />
                  <WikiChip text="Sacred Flame" size="sm" />
                </li>
                <li className="flex flex-wrap items-center gap-1">
                  Prepare: <WikiChip text="Bless" size="sm" />
                  <WikiChip text="Healing Word" size="sm" />
                  <WikiChip text="Command" size="sm" />
                </li>
              </ol>
            </div>
          ) : null}
        </div>
      ) : null}

      {tab === "levels" ? (
        <div className="space-y-3">
          <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
          <p className="text-xs text-[var(--color-subtle)]">
            Section titles (Cantrips / Spells / …) are labels only. Icons sit
            next to each skill name and open bg3.wiki.
          </p>
          <div className="space-y-2">
            {filtered.map((l) => (
              <LevelUpCard key={l.id} pick={l} />
            ))}
          </div>
        </div>
      ) : null}

      {tab === "synergy" ? (
        <div className="space-y-4">
          <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-3">
            <h3 className="font-semibold">{PARTY_SYNERGY.title}</h3>
            {PARTY_SYNERGY.roles.map((r) => (
              <div key={r.who} className="text-sm">
                <p className="font-medium text-[var(--color-fg)]">{r.who}</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  <RichWikiText text={r.job} />
                </p>
              </div>
            ))}
          </section>
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
              Default fight opener
            </p>
            <ol className="list-decimal list-inside text-sm text-[var(--color-muted)] space-y-1">
              {PARTY_SYNERGY.openers.map((o) => (
                <li key={o}>
                  <RichWikiText text={o} />
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
            <p>{PARTY_SYNERGY.restRule}</p>
            <p>{PARTY_NOTES.rest}</p>
            <p>{PARTY_NOTES.backup}</p>
            <p>{PARTY_NOTES.face}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
