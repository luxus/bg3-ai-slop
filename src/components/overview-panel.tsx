import { ROUTE, ROUTE_INTRO } from "@/lib/data/route";
import { useProgress, countProgress, getStatus } from "@/lib/store";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CREATE_CHARACTER } from "@/lib/data/party";

type Props = {
  onNavigate: (tab: string) => void;
};

export function OverviewPanel({ onNavigate }: Props) {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const resetAll = useProgress((s) => s.resetAll);

  const stats = countProgress(
    ROUTE.map((s) => s.id),
    walk,
    walkSkip,
  );

  const next = ROUTE.find(
    (s) => getStatus(walk, walkSkip, s.id) === "open" && !s.optional,
  );

  return (
    <div className="space-y-6">
      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
          Smooth dark run
        </p>
        <h2 className="text-xl font-semibold tracking-tight">
          {ROUTE_INTRO.title}
        </h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          {ROUTE_INTRO.body}
        </p>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <p className="text-sm text-[var(--color-muted)] tabular">
          {stats.doneN} / {stats.total} on the main route
        </p>
        <Button className="w-full sm:w-auto" onClick={() => onNavigate("route")}>
          Open the route →
        </Button>
      </section>

      {next ? (
        <section className="rounded-[var(--radius-xl)] border-2 border-[var(--color-primary)] bg-[var(--color-accent-soft)] p-5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
            Next step
          </p>
          <h3 className="text-lg font-semibold">{next.do}</h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            {next.detail}
          </p>
          <Button size="sm" onClick={() => onNavigate("route")}>
            Continue on Route
          </Button>
        </section>
      ) : null}

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
        <p>
          <span className="font-medium text-[var(--color-fg)]">You: </span>
          {CREATE_CHARACTER.origin} · {CREATE_CHARACTER.subrace} ·{" "}
          {CREATE_CHARACTER.class} {CREATE_CHARACTER.subclass}
        </p>
        <p>
          <span className="font-medium text-[var(--color-fg)]">Party: </span>
          {ROUTE_INTRO.party}
        </p>
        <p>
          <span className="font-medium text-[var(--color-fg)]">Combat: </span>
          {ROUTE_INTRO.combat}
        </p>
      </section>

      <section className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)]">
          Only if you need them
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={() => onNavigate("levels")}>
            Level details
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onNavigate("vendors")}>
            Shop list
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onNavigate("party")}>
            Party cards
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onNavigate("side")}>
            Extra sides
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onNavigate("camp")}>
            Camp / Withers
          </Button>
        </div>
        <p className="text-xs text-[var(--color-subtle)]">
          Ignore these while following Route. They’re backup when stuck.
        </p>
      </section>

      <Button
        size="sm"
        variant="ghost"
        className="text-[var(--color-subtle)]"
        onClick={() => {
          if (confirm("Reset all progress?")) resetAll();
        }}
      >
        Reset progress
      </Button>
    </div>
  );
}
