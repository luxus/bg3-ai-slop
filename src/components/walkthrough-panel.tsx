import { WALKTHROUGH, type StepType } from "@/lib/data/walkthrough";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const TYPE_LABEL: Record<StepType, string> = {
  quest: "Quest",
  item: "Item",
  respec: "Respec",
  order: "Order",
  story: "Story",
};

const TYPE_VARIANT: Record<
  StepType,
  "danger" | "warn" | "success" | "secondary" | "outline"
> = {
  quest: "danger",
  item: "warn",
  respec: "success",
  order: "secondary",
  story: "outline",
};

export function WalkthroughPanel() {
  const {
    walk,
    walkSkip,
    toggleWalk,
    skipWalk,
    actFilter,
    setActFilter,
  } = useProgress();

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
              Tick done or Skip. Red = done, amber = skipped. Both fill the bar.
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} done · {stats.skipN} skip · {stats.total} total
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
          <Badge variant="danger">Quest</Badge>
          <Badge variant="warn">Item</Badge>
          <Badge variant="success">Respec</Badge>
          <Badge variant="secondary">Order (soft)</Badge>
          <Badge variant="outline">Story</Badge>
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
                  <CheckRow
                    key={s.id}
                    id={`walk-${s.id}`}
                    status={getStatus(walk, walkSkip, s.id)}
                    onToggle={() => toggleWalk(s.id)}
                    onSkip={() => skipWalk(s.id)}
                    title={s.title}
                    subtitle={s.detail}
                    badges={[
                      {
                        label: TYPE_LABEL[s.type],
                        variant: TYPE_VARIANT[s.type],
                      },
                      {
                        label:
                          s.confidence === "verified" ? "Verified" : "Soft",
                        variant:
                          s.confidence === "verified" ? "success" : "secondary",
                      },
                      ...(s.who
                        ? [{ label: s.who, variant: "outline" as const }]
                        : []),
                    ]}
                  >
                    {s.darkNote ? (
                      <p className="mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2 bg-[var(--color-accent-soft)] border border-[var(--color-border)] text-[var(--color-fg)]">
                        <span className="text-[var(--color-primary)] font-medium">
                          Dark:{" "}
                        </span>
                        {s.darkNote}
                      </p>
                    ) : null}
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {s.source}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CheckRow>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
