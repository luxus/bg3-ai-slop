import { CREATE_CHARACTER } from "@/lib/data/party";
import { Badge } from "@/components/ui/badge";

const statEntries = Object.entries(CREATE_CHARACTER.stats) as [
  string,
  number,
][];

export function CreateCharacter() {
  const c = CREATE_CHARACTER;

  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/40 bg-[var(--color-surface)] p-5 space-y-5">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="danger">Character create</Badge>
          <Badge variant="success">Wiki-checked hard rules</Badge>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-fg)]">
          Exact picks
        </h2>
        <p className="text-sm text-[var(--color-muted)]">
          Hard rules match bg3.wiki. Soft tips are labelled. If the game UI
          disagrees, trust the game and tell me.
        </p>
      </div>

      <ol className="space-y-3">
        {[
          { label: "Origin", value: c.origin },
          { label: "Race", value: c.race },
          { label: "Subrace", value: c.subrace },
          { label: "Class", value: c.class },
          { label: "Subclass", value: c.subclass },
          { label: "Background", value: c.background },
        ].map((row, i) => (
          <li
            key={row.label}
            className="flex gap-3 items-start border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-primary)] tabular">
              {i + 1}
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)]">
                {row.label}
              </p>
              <p className="font-medium text-[var(--color-fg)]">{row.value}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)] p-3 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
          Background
        </p>
        <p className="text-sm text-[var(--color-fg)] leading-relaxed">
          {c.backgroundNote}
        </p>
      </div>

      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-3 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-subtle)]">
          Why this race
        </p>
        <p className="text-sm text-[var(--color-fg)] leading-relaxed">
          {c.whyRace}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
          Ability targets (soft)
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {statEntries.map(([key, val]) => (
            <div
              key={key}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-2 py-2 text-center"
            >
              <p className="text-[10px] uppercase text-[var(--color-subtle)]">
                {key}
              </p>
              <p className="text-lg font-semibold tabular text-[var(--color-fg)]">
                {val}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
          {c.statsNote}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 text-sm">
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1">
            Cantrips — pick 2
          </p>
          <p className="text-[var(--color-fg)]">{c.cantrips.join(" · ")}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            {c.cantripsNote}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1">
            Spells — pick 2
          </p>
          <p className="text-[var(--color-fg)]">{c.spells.join(" · ")}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            {c.spellsNote}
          </p>
        </div>
        <div className="sm:col-span-2">
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1">
            Skills
          </p>
          <p className="text-[var(--color-muted)]">{c.skills}</p>
        </div>
        <div className="sm:col-span-2 space-y-1">
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)]">
            Level notes
          </p>
          <p className="text-[var(--color-muted)]">{c.level1Note}</p>
          <p className="text-[var(--color-muted)]">{c.level2Note}</p>
          <p className="text-[var(--color-muted)]">{c.level3Note}</p>
          <p className="text-[var(--color-muted)]">{c.level5Note}</p>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
          Race alternatives (soft)
        </p>
        <ul className="space-y-2">
          {c.alternatives.map((a) => (
            <li
              key={a.subrace}
              className="text-sm text-[var(--color-muted)] leading-relaxed"
            >
              <span className="font-medium text-[var(--color-fg)]">
                {a.race} — {a.subrace}:{" "}
              </span>
              {a.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
