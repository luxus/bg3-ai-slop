import { COMBAT_TIPS, OPENER_ROTATION } from "@/lib/data/combat";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export function CombatPanel() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Rush combat</h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl">
          Default difficulty melts if you open with control and focus fire.
          Use this as your mental checklist before tough fights.
        </p>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
            <Zap className="h-4 w-4" />
          </span>
          <div>
            <h3 className="font-semibold">Standard opener</h3>
            <p className="text-xs text-[var(--color-muted)]">
              First round — most packs die here
            </p>
          </div>
        </div>
        <ol className="space-y-3">
          {OPENER_ROTATION.map((s) => (
            <li
              key={s.step}
              className="flex gap-3 text-sm border-b border-[var(--color-border)] last:border-0 pb-3 last:pb-0"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-elevated)] text-xs font-semibold tabular text-[var(--color-fg)]">
                {s.step}
              </span>
              <div>
                <p className="font-medium text-[var(--color-fg)]">{s.actor}</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {s.action}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        {COMBAT_TIPS.map((t) => (
          <article
            key={t.id}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-medium text-[var(--color-fg)] text-sm">
                {t.title}
              </h3>
              {t.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {t.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
