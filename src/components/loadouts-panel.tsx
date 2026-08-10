import { LOADOUTS } from "@/lib/data/loadouts";
import { MEMBER_LABEL } from "@/lib/data/levels";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function LoadoutsPanel() {
  const {
    loadouts,
    loadoutsSkip,
    toggleLoadout,
    skipLoadout,
    actFilter,
    setActFilter,
  } = useProgress();

  const filtered =
    actFilter === 0 ? LOADOUTS : LOADOUTS.filter((l) => l.act === actFilter);

  const stats = countProgress(
    filtered.map((l) => l.id),
    loadouts,
    loadoutsSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Gear loadouts
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Target kits by act. Soft — swap as you loot.
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
        {filtered.map((l) => (
          <CheckRow
            key={l.id}
            id={`lo-${l.id}`}
            status={getStatus(loadouts, loadoutsSkip, l.id)}
            onToggle={() => toggleLoadout(l.id)}
            onSkip={() => skipLoadout(l.id)}
            title={`${MEMBER_LABEL[l.member]} — ${l.title}`}
            subtitle={l.slots.map((s) => `${s.slot}: ${s.item}`).join("\n")}
            badges={[
              { label: `Act ${l.act}`, variant: "outline" },
              { label: MEMBER_LABEL[l.member], variant: "secondary" },
            ]}
          >
            {l.note ? (
              <p className="mt-2 text-xs text-[var(--color-subtle)]">{l.note}</p>
            ) : null}
          </CheckRow>
        ))}
      </div>
    </div>
  );
}
