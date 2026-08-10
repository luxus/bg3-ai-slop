import {
  LEVEL_PICKS,
  MEMBER_LABEL,
  PARTY_SYNERGY,
} from "@/lib/data/levels";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NoteField } from "@/components/note-field";
import { useMemo, useState } from "react";

function DetailBlock({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-2">
      <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
        {label}
      </p>
      <ul className="mt-0.5 space-y-0.5 text-sm text-[var(--color-muted)]">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}

export function LevelsPanel() {
  const { levels, levelsSkip, toggleLevel, skipLevel } = useProgress();
  const [member, setMember] =
    useState<keyof typeof MEMBER_LABEL | "all">("all");

  const filtered = useMemo(
    () =>
      member === "all"
        ? LEVEL_PICKS
        : LEVEL_PICKS.filter((l) => l.member === member),
    [member],
  );

  const stats = countProgress(
    filtered.map((l) => l.id),
    levels,
    levelsSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Level-up & respec guides
            </h2>
            <p className="text-sm text-[var(--color-muted)] mt-1 max-w-2xl leading-relaxed">
              Full picks: stats, cantrips, prepared spells, feats, invocations.
              Soft optimized so the dark four (and temp Lae’zel) cover each
              other.
            </p>
          </div>
          <p className="text-sm text-[var(--color-muted)] tabular">
            {stats.doneN} done · {stats.skipN} skip
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={member === "all" ? "default" : "secondary"}
            onClick={() => setMember("all")}
          >
            All
          </Button>
          {(Object.keys(MEMBER_LABEL) as (keyof typeof MEMBER_LABEL)[]).map(
            (m) => (
              <Button
                key={m}
                size="sm"
                variant={member === m ? "default" : "secondary"}
                onClick={() => setMember(m)}
              >
                {MEMBER_LABEL[m]}
              </Button>
            ),
          )}
        </div>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[var(--color-surface)] p-5 space-y-4">
        <h3 className="font-semibold">{PARTY_SYNERGY.title}</h3>
        <div className="space-y-2">
          {PARTY_SYNERGY.roles.map((r) => (
            <div key={r.who} className="text-sm">
              <p className="font-medium text-[var(--color-fg)]">{r.who}</p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {r.job}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1">
            Fight opener
          </p>
          <ol className="list-decimal list-inside text-sm text-[var(--color-muted)] space-y-1">
            {PARTY_SYNERGY.openers.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-1">
            Gear priority
          </p>
          <ul className="text-sm text-[var(--color-muted)] space-y-1">
            {PARTY_SYNERGY.itemPriority.map((o) => (
              <li key={o}>• {o}</li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-[var(--color-subtle)]">
          {PARTY_SYNERGY.restRule}
        </p>
      </section>

      {member === "shadowheart" || member === "all" ? (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 text-sm text-[var(--color-muted)] leading-relaxed">
          <p className="font-medium text-[var(--color-fg)] mb-1">
            Shadowheart respec checklist (open Withers)
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Class → Cleric (not keep Trickery)</li>
            <li>Subclass → Death Domain</li>
            <li>Rewrite ability scores (WIS + CON first)</li>
            <li>Cantrips: Toll the Dead, Guidance, Sacred Flame, +1 utility</li>
            <li>Prepare Bless + Healing Word + Command day one</li>
            <li>At level 4 take War Caster; at 5 prepare Spirit Guardians (necrotic)</li>
          </ol>
        </div>
      ) : null}

      <div className="space-y-2">
        {filtered.map((l) => {
          const subtitleParts = [
            l.classLevel,
            l.stats ? `Stats: ${l.stats}` : "",
            l.feat ? `Feat: ${l.feat}` : "",
            ...l.picks.map((p) => p),
          ].filter(Boolean);

          return (
            <CheckRow
              key={l.id}
              id={`level-${l.id}`}
              status={getStatus(levels, levelsSkip, l.id)}
              onToggle={() => toggleLevel(l.id)}
              onSkip={() => skipLevel(l.id)}
              title={`L${l.level} · ${l.title}`}
              subtitle={subtitleParts.join("\n")}
              badges={[
                {
                  label: MEMBER_LABEL[l.member],
                  variant: "secondary",
                },
                { label: `Lv ${l.level}`, variant: "outline" },
              ]}
            >
              <DetailBlock label="Cantrips" items={l.cantrips} />
              <DetailBlock label="Spells known / pick" items={l.spells} />
              <DetailBlock label="Prepare (Cleric)" items={l.prepare} />
              <DetailBlock label="Invocations" items={l.invocations} />
              <DetailBlock label="Features" items={l.features} />
              <DetailBlock label="Skills" items={l.skills} />
              {l.note ? (
                <p className="mt-2 text-xs text-[var(--color-subtle)] border-t border-[var(--color-border)] pt-2">
                  {l.note}
                </p>
              ) : null}
              <NoteField id={`note-level-${l.id}`} placeholder="Level note…" />
            </CheckRow>
          );
        })}
      </div>
    </div>
  );
}
