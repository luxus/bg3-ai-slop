import { WALKTHROUGH, type StepType } from "@/lib/data/walkthrough";
import { useProgress, countProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { WalkStepRow } from "@/components/walk-step-row";

const TYPE_LABEL: Record<StepType, string> = {
  quest: "Quest",
  item: "Item",
  respec: "Respec",
  order: "Order",
  story: "Story",
};

export function WalkthroughPanel() {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const actFilter = useProgress((s) => s.actFilter);
  const setActFilter = useProgress((s) => s.setActFilter);

  const filtered =
    actFilter === 0
      ? WALKTHROUGH
      : WALKTHROUGH.filter((s) => s.act === actFilter);

  const stats = countProgress(
    filtered.map((s) => s.id),
    walk,
    walkSkip,
  );
  const chapters = [...new Set(filtered.map((s) => s.chapter))];

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Dark path walkthrough
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
              Full route. Same checkboxes as{" "}
              <strong className="text-[var(--color-fg)] font-medium">Where</strong>
              — mark either place.
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
        <div className="flex flex-wrap gap-1.5 text-xs text-[var(--color-subtle)]">
          {(Object.keys(TYPE_LABEL) as StepType[]).map((t) => (
            <Badge
              key={t}
              variant={
                t === "quest"
                  ? "danger"
                  : t === "item"
                    ? "warn"
                    : t === "respec"
                      ? "success"
                      : t === "order"
                        ? "secondary"
                        : "outline"
              }
            >
              {TYPE_LABEL[t]}
            </Badge>
          ))}
        </div>
      </header>

      <div className="space-y-8">
        {chapters.map((chapter) => {
          const steps = filtered.filter((s) => s.chapter === chapter);
          if (!steps.length) return null;
          const act = steps[0]?.act;
          return (
            <section key={chapter} className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-sm font-medium text-[var(--color-fg)]">
                  {chapter}
                </h3>
                <span className="text-xs text-[var(--color-subtle)]">
                  Act {act}
                </span>
              </div>
              <div className="space-y-2">
                {steps.map((s) => (
                  <WalkStepRow key={s.id} step={s} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
