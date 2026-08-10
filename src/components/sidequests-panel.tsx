import { SIDEQUESTS, SIDEQUEST_TIPS } from "@/lib/data/sidequests";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { NoteField } from "@/components/note-field";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const PRIO = {
  critical: { label: "Must", variant: "danger" as const },
  strong: { label: "Strong", variant: "warn" as const },
  story: { label: "Story", variant: "secondary" as const },
  "skip-ok": { label: "Skip-ok", variant: "outline" as const },
};

const TIME = {
  short: "~15–30m",
  medium: "~30–60m",
  long: "1h+",
};

export function SidequestsPanel() {
  const { quests, questsSkip, toggleQuest, skipQuest } = useProgress();
  const [act, setAct] = useState<0 | 1 | 2 | 3>(1);

  const filtered =
    act === 0 ? SIDEQUESTS : SIDEQUESTS.filter((q) => q.act === act);

  const stats = countProgress(
    filtered.map((q) => q.id),
    quests,
    questsSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Sidequests (power + dark story)
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
            Not every quest — the ones that matter for gear, companions, and a
            smooth Absolute / Durge run. Steps + rewards inlined.
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          {([0, 1, 2, 3] as const).map((a) => (
            <Button
              key={a}
              size="sm"
              variant={act === a ? "default" : "secondary"}
              onClick={() => setAct(a)}
            >
              {a === 0 ? "All" : `Act ${a}`}
            </Button>
          ))}
        </div>
      </header>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-1.5 text-sm text-[var(--color-muted)]">
        {SIDEQUEST_TIPS.map((t) => (
          <p key={t}>• {t}</p>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((q) => {
          const p = PRIO[q.priority];
          return (
            <CheckRow
              key={q.id}
              id={`sidequest-${q.id}`}
              status={getStatus(quests, questsSkip, q.id)}
              onToggle={() => toggleQuest(q.id)}
              onSkip={() => skipQuest(q.id)}
              title={q.title}
              subtitle={`${q.region} · ${TIME[q.timeSink]}\nReward: ${q.reward}`}
              badges={[
                { label: p.label, variant: p.variant },
                { label: `Act ${q.act}`, variant: "outline" },
                ...(q.bring
                  ? [{ label: q.bring, variant: "secondary" as const }]
                  : []),
              ]}
            >
              <ol className="mt-2 list-decimal list-inside space-y-1 text-sm text-[var(--color-muted)]">
                {q.how.map((step) => (
                  <li key={step} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
              {q.darkNote ? (
                <p className="mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2 bg-[var(--color-accent-soft)] border border-[var(--color-border)]">
                  <span className="text-[var(--color-primary)] font-medium">
                    Dark:{" "}
                  </span>
                  {q.darkNote}
                </p>
              ) : null}
              <a
                href={q.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                onClick={(e) => e.stopPropagation()}
              >
                Wiki
                <ExternalLink className="h-3 w-3" />
              </a>
              <NoteField id={`note-sq-${q.id}`} placeholder="Quest note…" />
            </CheckRow>
          );
        })}
      </div>
    </div>
  );
}
