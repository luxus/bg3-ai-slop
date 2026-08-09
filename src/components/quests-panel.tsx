import { QUESTS, ACT_LABELS } from "@/lib/data/quests";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const PRIORITY_VARIANT = {
  critical: "danger" as const,
  important: "warn" as const,
  optional: "secondary" as const,
};

export function QuestsPanel() {
  const {
    quests,
    questsSkip,
    toggleQuest,
    skipQuest,
    actFilter,
    setActFilter,
  } = useProgress();

  const filtered =
    actFilter === 0 ? QUESTS : QUESTS.filter((q) => q.act === actFilter);

  const stats = countProgress(
    filtered.map((q) => q.id),
    quests,
    questsSkip,
  );

  const byAct = ([1, 2, 3] as const).map((act) => ({
    act,
    items: filtered.filter((q) => q.act === act),
  }));

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Important quests
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Story path for a dark run. Skip if you don't care — amber on
              the bar.
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} done · {stats.skipN} skip · {stats.total}
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

      <div className="space-y-8">
        {byAct.map(
          ({ act, items }) =>
            items.length > 0 && (
              <section key={act} className="space-y-3">
                <h3 className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide">
                  {ACT_LABELS[act]}
                </h3>
                <div className="space-y-2">
                  {items.map((q) => (
                    <CheckRow
                      key={q.id}
                      id={`quest-${q.id}`}
                      status={getStatus(quests, questsSkip, q.id)}
                      onToggle={() => toggleQuest(q.id)}
                      onSkip={() => skipQuest(q.id)}
                      title={q.title}
                      subtitle={q.why}
                      badges={[
                        {
                          label: q.priority,
                          variant: PRIORITY_VARIANT[q.priority],
                        },
                      ]}
                    >
                      {q.darkChoice ? (
                        <p
                          className={cn(
                            "mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2",
                            "bg-[var(--color-accent-soft)] text-[var(--color-fg)] border border-[var(--color-border)]",
                          )}
                        >
                          <span className="text-[var(--color-primary)] font-medium">
                            Dark choice:{" "}
                          </span>
                          {q.darkChoice}
                        </p>
                      ) : null}
                      {q.tip ? (
                        <p className="mt-1.5 text-xs text-[var(--color-subtle)]">
                          Tip: {q.tip}
                        </p>
                      ) : null}
                    </CheckRow>
                  ))}
                </div>
              </section>
            ),
        )}
      </div>
    </div>
  );
}
