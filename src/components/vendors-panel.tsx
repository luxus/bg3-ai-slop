import { VENDORS, VENDOR_TIPS } from "@/lib/data/vendors";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const PRIO = {
  critical: { label: "Must buy", variant: "danger" as const },
  strong: { label: "Strong", variant: "warn" as const },
  nice: { label: "Nice", variant: "secondary" as const },
};

export function VendorsPanel() {
  const { items, itemsSkip, toggleItem, skipItem } = useProgress();
  const [act, setAct] = useState<0 | 1 | 2 | 3>(0);

  const filtered =
    act === 0 ? VENDORS : VENDORS.filter((v) => v.act === act);

  const stats = countProgress(
    filtered.map((v) => v.id),
    items,
    itemsSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Vendor buys</h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
            Gold sinks that matter for this dark party. Check when purchased
            (shared with Items progress where ids match — vendor ids are
            separate, so tick here when you buy).
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          {([0, 1, 2, 3] as const).map((a) => (
            <Button
              key={a}
              size="sm"
              variant={act === a ? "default" : "secondary"}
              onClick={() => setAct(a)}
            >
              {a === 0 ? "All acts" : `Act ${a}`}
            </Button>
          ))}
        </div>
      </header>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-1.5 text-sm text-[var(--color-muted)]">
        {VENDOR_TIPS.map((t) => (
          <p key={t}>• {t}</p>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((v) => {
          const p = PRIO[v.priority];
          return (
            <CheckRow
              key={v.id}
              id={`vendor-${v.id}`}
              status={getStatus(items, itemsSkip, v.id)}
              onToggle={() => toggleItem(v.id)}
              onSkip={() => skipItem(v.id)}
              title={v.title}
              subtitle={`${v.vendor} — ${v.where}\n${v.why}${
                v.costNote ? `\nGold: ${v.costNote}` : ""
              }${v.beforeMiss ? `\nBefore: ${v.beforeMiss}` : ""}`}
              badges={[
                { label: p.label, variant: p.variant },
                { label: `Act ${v.act}`, variant: "outline" },
                { label: v.who, variant: "secondary" },
              ]}
            >
              <a
                href={v.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                onClick={(e) => e.stopPropagation()}
              >
                Wiki
                <ExternalLink className="h-3 w-3" />
              </a>
            </CheckRow>
          );
        })}
      </div>

      <p className="text-xs text-[var(--color-subtle)]">
        Not every good item is bought — Everburn, Phalar, Adamantine, Night
        Walkers, Diadem are loot/quest. See Walk / Items for those.
      </p>
    </div>
  );
}
