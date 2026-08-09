import { QUESTS } from "@/lib/data/quests";
import { ITEMS } from "@/lib/data/items";
import { WALKTHROUGH } from "@/lib/data/walkthrough";
import { TRICKS } from "@/lib/data/tricks";
import { PARTY, CREATE_CHARACTER } from "@/lib/data/party";
import { useProgress, countProgress } from "@/lib/store";
import { DualProgress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Skull,
  ScrollText,
  Gem,
  Swords,
  BadgeCheck,
  Map,
  Sparkles,
} from "lucide-react";

type Props = {
  onNavigate: (tab: string) => void;
};

export function OverviewPanel({ onNavigate }: Props) {
  const {
    quests,
    questsSkip,
    items,
    itemsSkip,
    walk,
    walkSkip,
    resetAll,
  } = useProgress();

  const walkStats = countProgress(
    WALKTHROUGH.map((s) => s.id),
    walk,
    walkSkip,
  );
  const trickStats = countProgress(
    TRICKS.map((t) => `trick-${t.id}`),
    walk,
    walkSkip,
  );
  const questStats = countProgress(
    QUESTS.map((q) => q.id),
    quests,
    questsSkip,
  );
  const itemStats = countProgress(
    ITEMS.map((i) => i.id),
    items,
    itemsSkip,
  );

  const cards = [
    {
      tab: "walk",
      title: "Walkthrough",
      desc: `${walkStats.doneN} done · ${walkStats.skipN} skip`,
      icon: Map,
      detail: "Quests + items in path order",
      donePct: walkStats.donePct,
      skipPct: walkStats.skipPct,
    },
    {
      tab: "tricks",
      title: "Loot & tricks",
      desc: `${trickStats.doneN} done · ${trickStats.skipN} skip`,
      icon: Sparkles,
      detail: "Hidden gear + combat cheese",
      donePct: trickStats.donePct,
      skipPct: trickStats.skipPct,
    },
    {
      tab: "party",
      title: "Party",
      desc: `${PARTY.length} builds + create card`,
      icon: Skull,
      detail: "Wiki-checked create picks",
    },
    {
      tab: "quests",
      title: "Quests",
      desc: `${questStats.doneN} done · ${questStats.skipN} skip`,
      icon: ScrollText,
      detail: "Checklist by act",
      donePct: questStats.donePct,
      skipPct: questStats.skipPct,
    },
    {
      tab: "items",
      title: "Items",
      desc: `${itemStats.doneN} done · ${itemStats.skipN} skip`,
      icon: Gem,
      detail: "Must / strong loot list",
      donePct: itemStats.donePct,
      skipPct: itemStats.skipPct,
    },
    {
      tab: "combat",
      title: "Combat",
      desc: "Rush openers",
      icon: Swords,
      detail: "Playstyle tips (soft)",
    },
    {
      tab: "proof",
      title: "Proof",
      desc: "Sources + process",
      icon: BadgeCheck,
      detail: "Verified vs soft",
    },
  ];

  const c = CREATE_CHARACTER;

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <Badge variant="danger">Dark Urge · Absolute path</Badge>
        <h2 className="text-2xl font-semibold tracking-tight leading-tight max-w-xl">
          Walk the dark path. Skip what you don't care about.
        </h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Checkbox = done (red). Skip = amber on the bar. Both count as
          cleared.
        </p>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/40 bg-[var(--color-surface)] p-5 space-y-3">
        <h3 className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wide">
          Create character (hard rules)
        </h3>
        <dl className="grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs text-[var(--color-subtle)]">Origin</dt>
            <dd className="font-medium">{c.origin}</dd>
          </div>
          <div>
            <dt className="text-xs text-[var(--color-subtle)]">Race / subrace</dt>
            <dd className="font-medium">
              {c.race} — {c.subrace}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-[var(--color-subtle)]">Class</dt>
            <dd className="font-medium">Warlock — Hexblade · Haunted One</dd>
          </div>
          <div>
            <dt className="text-xs text-[var(--color-subtle)]">Cantrips / spells</dt>
            <dd className="font-medium">
              {c.cantrips.join(" · ")} / {c.spells.join(" · ")}
            </dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={() => onNavigate("walk")}>
            Open walkthrough
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onNavigate("tricks")}
          >
            Loot & tricks
          </Button>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.tab}
              type="button"
              onClick={() => onNavigate(card.tab)}
              className="text-left rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-150 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-elevated)]"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--color-fg)]">
                    {card.title}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">
                    {card.desc}
                  </p>
                  <p className="text-xs text-[var(--color-subtle)] mt-2">
                    {card.detail}
                  </p>
                  {typeof card.donePct === "number" ? (
                    <DualProgress
                      donePct={card.donePct}
                      skipPct={card.skipPct ?? 0}
                      showLegend={false}
                      className="mt-3"
                    />
                  ) : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-3">
        <h3 className="text-sm font-medium text-[var(--color-fg)]">
          Progress colours
        </h3>
        <ul className="space-y-1.5 text-sm text-[var(--color-muted)]">
          <li>
            <span className="text-[var(--color-primary)] font-medium">
              Red
            </span>{" "}
            — done / looted
          </li>
          <li>
            <span className="text-[var(--color-warn)] font-medium">Amber</span>{" "}
            — skipped (won't do this run)
          </li>
        </ul>
        <Button variant="secondary" size="sm" onClick={() => resetAll()}>
          Reset all checklists
        </Button>
      </section>
    </div>
  );
}
