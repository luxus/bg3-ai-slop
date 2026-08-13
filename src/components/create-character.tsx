import { useState } from "react";
import { CREATE_CHARACTER } from "@/lib/data/party";
import { Badge } from "@/components/ui/badge";
import { WikiChip } from "@/components/wiki-chip";
import { ChevronDown, ChevronUp } from "lucide-react";

const statEntries = Object.entries(CREATE_CHARACTER.stats) as [
  string,
  number,
][];

const CREATE_SKILLS = [
  "Deception",
  "Arcana",
  "Medicine",
  "Intimidation",
];

/** Collapsed by default so it never owns the Party page. */
export function CreateCharacter({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const c = CREATE_CHARACTER;

  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[var(--color-surface)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-[var(--color-elevated)] transition-colors"
      >
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <Badge variant="danger">Create</Badge>
          <span className="font-medium text-[var(--color-fg)] truncate">
            Character create — exact picks
          </span>
          <span className="text-xs text-[var(--color-subtle)] hidden sm:inline">
            {c.subrace} · Hexblade · Haunted One
          </span>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[var(--color-muted)]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[var(--color-muted)]" />
        )}
      </button>

      {open ? (
        <div className="space-y-5 border-t border-[var(--color-border)] p-4 sm:p-5">
          <p className="text-sm text-[var(--color-muted)]">
            Hard rules match bg3.wiki. Soft tips labelled. Icons link to wiki.
          </p>

          <ol className="space-y-3">
            {[
              { label: "Origin", value: c.origin, chip: false },
              { label: "Race", value: c.race, chip: true },
              { label: "Subrace", value: c.subrace, chip: true },
              { label: "Class", value: c.class, chip: true },
              { label: "Subclass", value: c.subclass, chip: true },
              { label: "Background", value: c.background, chip: true },
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
                  {row.chip ? (
                    <div className="mt-1">
                      <WikiChip text={row.value} size="sm" />
                    </div>
                  ) : (
                    <p className="font-medium text-[var(--color-fg)]">
                      {row.value}
                    </p>
                  )}
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
              <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
                Cantrips — pick 2
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.cantrips.map((t) => (
                  <WikiChip key={t} text={t} size="md" />
                ))}
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">
                {c.cantripsNote}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
                Spells — pick 2
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.spells.map((t) => (
                  <WikiChip key={t} text={t} size="md" />
                ))}
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">
                {c.spellsNote}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CREATE_SKILLS.map((s) => (
                  <WikiChip key={s} text={s} size="sm" />
                ))}
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">
                Warlock picks Deception + Arcana. Medicine + Intimidation come
                from Haunted One. Persuasion needs Beguiling Influence later.
              </p>
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)]">
                Level notes (warlock is weird)
              </p>
              <p className="text-[var(--color-muted)]">{c.level1Note}</p>
              <p className="text-[var(--color-muted)]">{c.level2Note}</p>
              <p className="text-[var(--color-muted)]">{c.level3Note}</p>
              <p className="text-[var(--color-fg)] font-medium">{c.level4Note}</p>
              <p className="text-[var(--color-muted)]">{c.level5Note}</p>
              <p className="text-[var(--color-muted)]">{c.level7Note}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
