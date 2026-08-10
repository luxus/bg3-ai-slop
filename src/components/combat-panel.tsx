import { COMBAT_TIPS, OPENERS } from "@/lib/data/combat";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CombatPanel() {
  const [kind, setKind] = useState<string>("all");
  const tips =
    kind === "all"
      ? COMBAT_TIPS
      : COMBAT_TIPS.filter((t) => t.kind === kind || t.kind === "general");

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Combat rush</h2>
        <p className="text-sm text-[var(--color-muted)]">
          Openers + fight-type scripts. Soft playstyle tips.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["all", "trash", "boss", "undead", "construct"].map((k) => (
            <Button
              key={k}
              size="sm"
              variant={kind === k ? "default" : "secondary"}
              onClick={() => setKind(k)}
            >
              {k}
            </Button>
          ))}
        </div>
      </header>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide">
          Party openers
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {OPENERS.map((o) => (
            <div
              key={o.who}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <p className="font-medium text-[var(--color-fg)]">{o.who}</p>
              <ol className="mt-2 list-decimal list-inside text-sm text-[var(--color-muted)] space-y-1">
                {o.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        {tips.map((t) => (
          <div
            key={t.id}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">{t.title}</p>
              {t.kind ? (
                <Badge variant="outline">{t.kind}</Badge>
              ) : null}
            </div>
            <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed">
              {t.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
