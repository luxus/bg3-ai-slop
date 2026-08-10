import { useMemo, useState } from "react";
import {
  FIGHTS,
  WHO_SHORT,
  type ActionChip,
  type FightScript,
} from "@/lib/data/fights";
import { Badge } from "@/components/ui/badge";
import { WikiChip, RichWikiText } from "@/components/wiki-chip";
import { Target } from "lucide-react";

const WHO_COLOR: Record<ActionChip["who"], string> = {
  tav: "border-[#c45c4a]/40 bg-[#5c2a2a]/40 text-[#f0b4a8]",
  shadowheart: "border-[#8a8ad4]/40 bg-[#2a2a4a]/50 text-[#c4c0f0]",
  astarion: "border-[#c48ab0]/40 bg-[#3a2a3a]/50 text-[#e8c0d8]",
  minthara: "border-[#6b9b7a]/40 bg-[#2a3a2a]/50 text-[#b8e0b8]",
  laezel: "border-[#c4a35a]/40 bg-[#3a3a2a]/50 text-[#e0d8a8]",
  any: "border-[var(--color-border)] bg-[var(--color-elevated)] text-[var(--color-muted)]",
};

function ActionChipView({ chip }: { chip: ActionChip }) {
  return (
    <div
      className={`flex items-start gap-2 rounded-[var(--radius-md)] border px-2.5 py-2 ${WHO_COLOR[chip.who]}`}
      title={chip.note}
    >
      <div className="min-w-0 space-y-1">
        <p className="text-[10px] uppercase tracking-wide opacity-80">
          {WHO_SHORT[chip.who]}
        </p>
        <WikiChip text={chip.label} size="md" />
        {chip.note ? (
          <p className="text-[11px] opacity-75 leading-snug">
            <RichWikiText text={chip.note} />
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FightCard({ f }: { f: FightScript }) {
  const [open, setOpen] = useState(f.kind === "level-band");

  return (
    <article className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-[var(--color-elevated)] transition-colors"
      >
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge
              variant={
                f.kind === "boss"
                  ? "danger"
                  : f.kind === "hard"
                    ? "warn"
                    : "secondary"
              }
            >
              {f.kind === "level-band" ? "levels" : f.kind}
            </Badge>
            <Badge variant="outline">Act {f.act}</Badge>
            {f.optional ? <Badge variant="outline">optional</Badge> : null}
          </div>
          <h3 className="font-semibold text-[var(--color-fg)]">{f.title}</h3>
          <p className="text-xs text-[var(--color-subtle)]">{f.when}</p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            {f.goal}
          </p>
        </div>
        <Target
          className={`h-4 w-4 shrink-0 mt-1 text-[var(--color-muted)] transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {open ? (
        <div className="space-y-4 border-t border-[var(--color-border)] px-4 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)] mb-2">
              Opener — cast / use in order
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {f.opener.map((c, i) => (
                <ActionChipView key={`${c.who}-${c.label}-${i}`} chip={c} />
              ))}
            </div>
          </div>
          {f.mid.length ? (
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)] mb-2">
                Mid fight
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {f.mid.map((c, i) => (
                  <ActionChipView key={`${c.who}-${c.label}-m${i}`} chip={c} />
                ))}
              </div>
            </div>
          ) : null}
          {f.finish ? (
            <p className="text-sm text-[var(--color-fg)] leading-relaxed rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)] px-3 py-2">
              <span className="text-[var(--color-primary)] font-medium">
                Finish:{" "}
              </span>
              <RichWikiText text={f.finish} />
            </p>
          ) : null}
          {f.gear?.length ? (
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)] mb-1">
                Gear that helps
              </p>
              <div className="flex flex-wrap gap-1.5">
                {f.gear.map((g) => (
                  <WikiChip key={g} text={g} size="sm" />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function FightsPanel() {
  const [act, setAct] = useState<0 | 1 | 2 | 3>(0);
  const [kind, setKind] = useState<"all" | "boss" | "hard" | "level-band">(
    "all",
  );

  const list = useMemo(
    () =>
      FIGHTS.filter((f) => {
        if (act !== 0 && f.act !== act) return false;
        if (kind !== "all" && f.kind !== kind) return false;
        return true;
      }),
    [act, kind],
  );

  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">Fights</h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          Boss / hard fights with party openers. Spell names use wiki icons +
          links.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(
          [
            [0, "All acts"],
            [1, "Act 1"],
            [2, "Act 2"],
            [3, "Act 3"],
          ] as const
        ).map(([a, label]) => (
          <button
            key={a}
            type="button"
            onClick={() => setAct(a)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              act === a
                ? "bg-[var(--color-primary)] text-[var(--color-primary-fg)]"
                : "bg-[var(--color-elevated)] text-[var(--color-muted)] border border-[var(--color-border)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["all", "All"],
            ["boss", "Boss"],
            ["hard", "Hard"],
            ["level-band", "Level bands"],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              kind === k
                ? "bg-[var(--color-primary)] text-[var(--color-primary-fg)]"
                : "bg-[var(--color-elevated)] text-[var(--color-muted)] border border-[var(--color-border)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((f) => (
          <FightCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
}
