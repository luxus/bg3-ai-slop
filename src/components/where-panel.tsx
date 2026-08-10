import { useMemo, useState } from "react";
import { ROUTE, ROUTE_AREAS } from "@/lib/data/route";
import { useProgress, countProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { RouteStepRow } from "@/components/route-step-row";

/**
 * Area filter over the SAME ROUTE steps (same ids, same text, same checks).
 * Not a second walkthrough.
 */
export function WherePanel() {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const [areaId, setAreaId] = useState(ROUTE_AREAS[0]?.id ?? "crash");

  const area = ROUTE_AREAS.find((a) => a.id === areaId) ?? ROUTE_AREAS[0];

  const steps = useMemo(
    () => ROUTE.filter((s) => s.area === areaId),
    [areaId],
  );

  const stats = countProgress(
    steps.map((s) => s.id),
    walk,
    walkSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Where am I?</h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
            Same Route steps, filtered by area. Check once — updates Route too.
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
      </header>

      <div className="flex flex-wrap gap-2">
        {ROUTE_AREAS.map((a) => (
          <Button
            key={a.id}
            size="sm"
            variant={areaId === a.id ? "default" : "secondary"}
            onClick={() => setAreaId(a.id)}
          >
            A{a.act}: {a.name}
          </Button>
        ))}
      </div>

      <p className="text-sm text-[var(--color-muted)]">
        {area?.name} · {stats.doneN}/{stats.total} done
      </p>

      <div className="space-y-2">
        {steps.map((s) => {
          const n = ROUTE.findIndex((x) => x.id === s.id) + 1;
          return <RouteStepRow key={s.id} step={s} index={n} />;
        })}
      </div>
    </div>
  );
}
