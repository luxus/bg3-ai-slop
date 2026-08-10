import type { LevelPick } from "@/lib/data/levels";
import { MEMBER_LABEL } from "@/lib/data/levels";
import { useProgress, getStatus } from "@/lib/store";
import { WikiChipList, RichWikiText } from "@/components/wiki-chip";
import { NoteField } from "@/components/note-field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, SkipForward, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

/**
 * Level-up card ordered like BG3 screens.
 * Section headers are plain labels; every skill/spell is a chip with icon.
 */
export function LevelUpCard({ pick }: { pick: LevelPick }) {
  const levels = useProgress((s) => s.levels);
  const levelsSkip = useProgress((s) => s.levelsSkip);
  const toggleLevel = useProgress((s) => s.toggleLevel);
  const skipLevel = useProgress((s) => s.skipLevel);
  const status = getStatus(levels, levelsSkip, pick.id);
  const [open, setOpen] = useState(status === "open");

  const screens: { label: string; body: React.ReactNode }[] = [];

  screens.push({
    label: "Class",
    body: (
      <p className="text-sm font-medium text-[var(--color-fg)]">
        {pick.classLevel}
      </p>
    ),
  });

  if (pick.stats) {
    screens.push({
      label: "Abilities",
      body: (
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          {pick.stats}
        </p>
      ),
    });
  }

  if (pick.feat) {
    screens.push({
      label: "Feat",
      body: <WikiChipList items={[pick.feat]} />,
    });
  }

  if (pick.cantrips?.length) {
    screens.push({
      label: "Cantrips",
      body: <WikiChipList items={pick.cantrips} />,
    });
  }

  if (pick.spells?.length) {
    screens.push({
      label: "Spells",
      body: <WikiChipList items={pick.spells} />,
    });
  }

  if (pick.prepare?.length) {
    screens.push({
      label: "Prepare",
      body: <WikiChipList items={pick.prepare} />,
    });
  }

  if (pick.invocations?.length) {
    screens.push({
      label: "Invocations",
      body: <WikiChipList items={pick.invocations} />,
    });
  }

  if (pick.skills?.length) {
    screens.push({
      label: "Skills",
      body: <WikiChipList items={pick.skills} size="sm" />,
    });
  }

  if (pick.features?.length) {
    screens.push({
      label: "Features",
      body: <WikiChipList items={pick.features} />,
    });
  }

  if (pick.picks.length) {
    screens.push({
      label: "Tips",
      body: (
        <ul className="space-y-1.5">
          {pick.picks.map((p) => (
            <li
              key={p}
              className="text-sm text-[var(--color-muted)] leading-relaxed flex gap-2"
            >
              <span className="text-[var(--color-subtle)]">•</span>
              <span className="min-w-0">
                <RichWikiText text={p} />
              </span>
            </li>
          ))}
        </ul>
      ),
    });
  }

  return (
    <article
      className={`rounded-[var(--radius-xl)] border overflow-hidden transition-colors ${
        status === "done"
          ? "border-[var(--color-success)]/30 bg-[color-mix(in_oklab,var(--color-success)_6%,var(--color-surface))]"
          : status === "skipped"
            ? "border-[var(--color-warn)]/30 bg-[color-mix(in_oklab,var(--color-warn)_6%,var(--color-surface))]"
            : "border-[var(--color-border)] bg-[var(--color-surface)]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-elevated)]/60 transition-colors"
      >
        <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)]">
          <span className="text-[9px] uppercase tracking-wide text-[var(--color-subtle)]">
            Lv
          </span>
          <span className="text-lg font-semibold tabular text-[var(--color-fg)] leading-none">
            {pick.level}
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="font-semibold text-[var(--color-fg)]">
              {pick.title}
            </h3>
            {status === "done" ? (
              <Badge variant="success">Done</Badge>
            ) : status === "skipped" ? (
              <Badge variant="warn">Skip</Badge>
            ) : null}
          </div>
          <p className="text-xs text-[var(--color-subtle)] mt-0.5">
            {pick.classLevel}
            <span className="text-[var(--color-border-strong)]"> · </span>
            {MEMBER_LABEL[pick.member]}
          </p>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[var(--color-muted)]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[var(--color-muted)]" />
        )}
      </button>

      {open ? (
        <div className="border-t border-[var(--color-border)] px-4 py-4 space-y-4">
          <div className="space-y-0 rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden">
            {screens.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-3 ${
                  i > 0 ? "border-t border-[var(--color-border)]" : ""
                } bg-[var(--color-elevated)]/40`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] mb-2">
                  {s.label}
                </p>
                {s.body}
              </div>
            ))}
          </div>

          {pick.note ? (
            <p className="text-xs text-[var(--color-subtle)] leading-relaxed">
              <RichWikiText text={pick.note} />
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={status === "done" ? "default" : "secondary"}
              onClick={() => toggleLevel(pick.id)}
            >
              <Check className="h-3.5 w-3.5 mr-1" />
              {status === "done" ? "Done" : "Mark done"}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => skipLevel(pick.id)}
            >
              <SkipForward className="h-3.5 w-3.5 mr-1" />
              Skip
            </Button>
          </div>

          <NoteField id={`note-level-${pick.id}`} placeholder="Level note…" />
        </div>
      ) : null}
    </article>
  );
}
