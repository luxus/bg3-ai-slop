import { TRICKS, TRICK_CATEGORIES } from "@/lib/data/tricks";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function TricksPanel() {
  const { walk, walkSkip, toggleWalk, skipWalk } = useProgress();
  const [cat, setCat] = useState<string>("all");
  const [act, setAct] = useState<0 | 1 | 2 | 3>(0);

  const filtered = TRICKS.filter((t) => {
    if (cat !== "all" && t.category !== cat) return false;
    if (act !== 0 && t.act !== 0 && t.act !== act) return false;
    return true;
  });

  const ids = filtered.map((t) => `trick-${t.id}`);
  const stats = countProgress(ids, walk, walkSkip);

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Loot & tricks
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
              Mark done or skip. Red bar = done, amber = skipped.
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} done · {stats.skipN} skip · {stats.total}
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={cat === "all" ? "default" : "secondary"}
            onClick={() => setCat("all")}
          >
            All
          </Button>
          {TRICK_CATEGORIES.map((c) => (
            <Button
              key={c.id}
              size="sm"
              variant={cat === c.id ? "default" : "secondary"}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {([0, 1, 2, 3] as const).map((a) => (
            <Button
              key={a}
              size="sm"
              variant={act === a ? "default" : "secondary"}
              onClick={() => setAct(a)}
            >
              {a === 0 ? "Any act" : `Act ${a}`}
            </Button>
          ))}
        </div>
      </header>

      <div className="space-y-2">
        {filtered.map((t) => {
          const id = `trick-${t.id}`;
          const actLabel = t.act === 0 ? "Any act" : `Act ${t.act}`;
          return (
            <CheckRow
              key={t.id}
              id={`trick-row-${t.id}`}
              status={getStatus(walk, walkSkip, id)}
              onToggle={() => toggleWalk(id)}
              onSkip={() => skipWalk(id)}
              title={t.title}
              subtitle={t.detail}
              badges={[
                { label: t.category, variant: "outline" },
                {
                  label: t.confidence === "verified" ? "Verified" : "Soft",
                  variant:
                    t.confidence === "verified" ? "success" : "secondary",
                },
                { label: actLabel, variant: "secondary" },
              ]}
            >
              {t.forParty ? (
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  <span className="text-[var(--color-fg)] font-medium">
                    Best on:{" "}
                  </span>
                  {t.forParty}
                </p>
              ) : null}
              <a
                href={t.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                onClick={(e) => e.stopPropagation()}
              >
                {t.source}
                <ExternalLink className="h-3 w-3" />
              </a>
            </CheckRow>
          );
        })}
      </div>

      {!filtered.length ? (
        <p className="text-sm text-[var(--color-muted)]">No tricks in filter.</p>
      ) : null}
    </div>
  );
}
