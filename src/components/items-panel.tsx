import { ITEMS, WHO_LABELS } from "@/lib/data/items";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { Button } from "@/components/ui/button";
import { DualProgress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";

const PRI = {
  must: "danger" as const,
  strong: "warn" as const,
  nice: "secondary" as const,
};

export function ItemsPanel() {
  const {
    items,
    itemsSkip,
    toggleItem,
    skipItem,
    actFilter,
    setActFilter,
  } = useProgress();

  const filtered =
    actFilter === 0 ? ITEMS : ITEMS.filter((i) => i.act === actFilter);

  const stats = countProgress(
    filtered.map((i) => i.id),
    items,
    itemsSkip,
  );

  const byAct = ([1, 2, 3] as const).map((act) => ({
    act,
    list: filtered.filter((i) => i.act === act),
  }));

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Best items</h2>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Done (red) or Skip (amber). Both clear the list.
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
      </header>

      <div className="space-y-8">
        {byAct.map(
          ({ act, list }) =>
            list.length > 0 && (
              <section key={act} className="space-y-3">
                <h3 className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide">
                  Act {act}
                </h3>
                <div className="space-y-2">
                  {list.map((item) => (
                    <CheckRow
                      key={item.id}
                      id={`item-${item.id}`}
                      status={getStatus(items, itemsSkip, item.id)}
                      onToggle={() => toggleItem(item.id)}
                      onSkip={() => skipItem(item.id)}
                      title={item.name}
                      subtitle={`${item.where} — ${item.why}`}
                      badges={[
                        { label: item.priority, variant: PRI[item.priority] },
                        { label: item.slot, variant: "outline" },
                        ...item.who.map((w) => ({
                          label: WHO_LABELS[w] ?? w,
                          variant: "secondary" as const,
                        })),
                      ]}
                    >
                      {item.sourceUrl ? (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          bg3.wiki
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : null}
                    </CheckRow>
                  ))}
                </div>
              </section>
            ),
        )}
      </div>
    </div>
  );
}
