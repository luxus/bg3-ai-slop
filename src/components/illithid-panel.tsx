import { ILLITHID } from "@/lib/data/illithid";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";

const TIER = {
  take: "success" as const,
  situational: "warn" as const,
  skip: "secondary" as const,
};

export function IllithidPanel() {
  const { illithid, illithidSkip, toggleIllithid, skipIllithid } =
    useProgress();

  const stats = countProgress(
    ILLITHID.map((i) => i.id),
    illithid,
    illithidSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Illithid powers
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Soft picks for a dark rush. Take / situational / skip.
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
      </header>

      <div className="space-y-2">
        {ILLITHID.map((p) => (
          <CheckRow
            key={p.id}
            id={`il-${p.id}`}
            status={getStatus(illithid, illithidSkip, p.id)}
            onToggle={() => toggleIllithid(p.id)}
            onSkip={() => skipIllithid(p.id)}
            title={p.name}
            subtitle={p.detail}
            badges={[{ label: p.tier, variant: TIER[p.tier] }]}
          />
        ))}
      </div>
    </div>
  );
}
