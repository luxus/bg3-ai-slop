import { ROUTE, ROUTE_INTRO } from "@/lib/data/route";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RouteStepRow } from "@/components/route-step-row";
import { useMemo, useState } from "react";

export function RoutePanel() {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const toggleWalk = useProgress((s) => s.toggleWalk);
  const skipWalk = useProgress((s) => s.skipWalk);
  const [hideDone, setHideDone] = useState(true);
  const [act, setAct] = useState<0 | 1 | 2 | 3>(0);

  const base = act === 0 ? ROUTE : ROUTE.filter((s) => s.act === act);

  const visible = useMemo(() => {
    if (!hideDone) return base;
    return base.filter((s) => getStatus(walk, walkSkip, s.id) === "open");
  }, [base, hideDone, walk, walkSkip]);

  const stats = countProgress(
    base.map((s) => s.id),
    walk,
    walkSkip,
  );

  const nextOpen = base.find(
    (s) => getStatus(walk, walkSkip, s.id) === "open" && !s.optional,
  );

  const chapters = [...new Set(visible.map((s) => s.chapter))];

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            {ROUTE_INTRO.title}
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
            {ROUTE_INTRO.body}
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <p className="text-sm text-[var(--color-muted)] tabular">
          {stats.doneN} done · {stats.skipN} skip · {stats.total} steps
        </p>
      </header>

      {nextOpen ? (
        <section className="rounded-[var(--radius-xl)] border-2 border-[var(--color-primary)] bg-[var(--color-accent-soft)] p-5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
            Do this next
          </p>
          <h3 className="text-lg font-semibold text-[var(--color-fg)]">
            {nextOpen.do}
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            {nextOpen.detail}
          </p>
          <a
            href={nextOpen.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[var(--color-primary)] underline-offset-2 hover:underline"
          >
            {nextOpen.source}
          </a>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button size="sm" onClick={() => toggleWalk(nextOpen.id)}>
              Mark done
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => skipWalk(nextOpen.id)}
            >
              Skip
            </Button>
          </div>
        </section>
      ) : (
        <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-medium">All required steps done for this filter.</p>
        </section>
      )}

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
        <p>
          <span className="text-[var(--color-fg)] font-medium">Party: </span>
          {ROUTE_INTRO.party}
        </p>
        <p>
          <span className="text-[var(--color-fg)] font-medium">Combat: </span>
          {ROUTE_INTRO.combat}
        </p>
      </div>

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
        <Button
          size="sm"
          variant={hideDone ? "default" : "secondary"}
          onClick={() => setHideDone((v) => !v)}
        >
          {hideDone ? "Hiding done" : "Showing all"}
        </Button>
      </div>

      <div className="space-y-8">
        {chapters.map((chapter) => {
          const steps = visible.filter((s) => s.chapter === chapter);
          if (!steps.length) return null;
          return (
            <section key={chapter} className="space-y-2">
              <h3 className="text-sm font-medium text-[var(--color-fg)]">
                {chapter}
              </h3>
              {steps.map((s) => {
                const n = ROUTE.findIndex((x) => x.id === s.id) + 1;
                return <RouteStepRow key={s.id} step={s} index={n} />;
              })}
            </section>
          );
        })}
      </div>
    </div>
  );
}
