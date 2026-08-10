import { useMemo, useState } from "react";
import { AREAS } from "@/lib/data/areas";
import { WALKTHROUGH } from "@/lib/data/walkthrough";
import { useProgress, countProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DualProgress } from "@/components/ui/progress";
import { NoteField } from "@/components/note-field";
import { WalkStepRow } from "@/components/walk-step-row";

const byId = new Map(WALKTHROUGH.map((s) => [s.id, s]));

export function WherePanel() {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const [areaId, setAreaId] = useState(AREAS[0]?.id ?? "");

  const area = AREAS.find((a) => a.id === areaId) ?? AREAS[0];

  const steps = useMemo(() => {
    if (!area) return [];
    return area.stepIds
      .map((id) => byId.get(id))
      .filter((s): s is NonNullable<typeof s> => Boolean(s));
  }, [area]);

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
            Same steps as{" "}
            <strong className="text-[var(--color-fg)] font-medium">Walk</strong>
            — filtered by area. Check once; it counts everywhere.
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
      </header>

      <div className="flex flex-wrap gap-2">
        {AREAS.map((a) => (
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

      {area ? (
        <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{area.name}</h3>
            <Badge variant="outline">Act {area.act}</Badge>
            <span className="text-xs text-[var(--color-muted)] tabular">
              {stats.doneN} done · {stats.skipN} skip · {stats.total} steps
            </span>
          </div>
          {area.tips.map((t) => (
            <p key={t} className="text-xs text-[var(--color-subtle)]">
              Tip: {t}
            </p>
          ))}
          <NoteField
            id={`note-area-${area.id}`}
            placeholder="Where I left off…"
          />
        </section>
      ) : null}

      <div className="space-y-2">
        {steps.map((s) => (
          <WalkStepRow key={s.id} step={s} />
        ))}
        {!steps.length ? (
          <p className="text-sm text-[var(--color-muted)]">
            No steps linked for this area.
          </p>
        ) : null}
      </div>
    </div>
  );
}
