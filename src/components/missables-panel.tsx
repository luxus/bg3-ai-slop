import { MISSABLES } from "@/lib/data/missables";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { NoteField } from "@/components/note-field";

export function MissablesPanel() {
  const {
    missables,
    missablesSkip,
    toggleMissable,
    skipMissable,
    actFilter,
    setActFilter,
  } = useProgress();

  const filtered =
    actFilter === 0 ? MISSABLES : MISSABLES.filter((m) => m.act === actFilter);

  const stats = countProgress(
    filtered.map((m) => m.id),
    missables,
    missablesSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Missables & timers
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Do these before the lock. Red = hard lock; soft = can often recover.
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} handled · {stats.skipN} skip
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          {([0, 1, 2, 3] as const).map((a) => (
            <Button
              key={a}
              size="sm"
              variant={actFilter === a ? "default" : "secondary"}
              onClick={() => setActFilter(a)}
            >
              {a === 0 ? "All acts" : `Act ${a}`}
            </Button>
          ))}
        </div>
      </header>

      <div className="space-y-2">
        {filtered.map((m) => (
          <CheckRow
            key={m.id}
            id={`miss-${m.id}`}
            status={getStatus(missables, missablesSkip, m.id)}
            onToggle={() => toggleMissable(m.id)}
            onSkip={() => skipMissable(m.id)}
            title={m.title}
            subtitle={`${m.detail}\nBefore: ${m.before}`}
            badges={[
              {
                label: m.severity === "hard" ? "Hard lock" : "Soft",
                variant: m.severity === "hard" ? "danger" : "secondary",
              },
              { label: `Act ${m.act}`, variant: "outline" },
            ]}
          >
            <NoteField id={`note-miss-${m.id}`} />
          </CheckRow>
        ))}
      </div>
    </div>
  );
}
