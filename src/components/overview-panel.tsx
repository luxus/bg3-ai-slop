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
        <h2 className="text-xl font-semibold tracking-tight">How to use this app</h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          <strong className="text-[var(--color-fg)]">Route</strong> is the only
          walkthrough. <strong className="text-[var(--color-fg)]">Where</strong>{" "}
          is the same by map.{" "}
          <strong className="text-[var(--color-fg)]">Party</strong> = builds +
          level-ups (pick a face).{" "}
          <strong className="text-[var(--color-fg)]">Fights</strong> = boss
          scripts with spell chips. Buy / Camp / Loot are manuals.
        </p>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <p className="text-sm text-[var(--color-muted)] tabular">
          {stats.doneN} / {stats.total} route steps
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => onNavigate("route")}>Route →</Button>
          <Button variant="secondary" onClick={() => onNavigate("party")}>
            Party
          </Button>
          <Button variant="secondary" onClick={() => onNavigate("fights")}>
            Fights
          </Button>
        </div>
      </section>

      {next ? (
        <section className="rounded-[var(--radius-xl)] border-2 border-[var(--color-primary)] bg-[var(--color-accent-soft)] p-5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
            Next
          </p>
          <h3 className="text-lg font-semibold">{next.do}</h3>
          <p className="text-sm text-[var(--color-muted)]">{next.detail}</p>
        </section>
      ) : null}

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
        <p>
          <span className="font-medium text-[var(--color-fg)]">Build: </span>
          {CREATE_CHARACTER.origin} · {CREATE_CHARACTER.subrace} · Hexblade
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
