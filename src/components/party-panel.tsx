import { PARTY, PARTY_NOTES, TEMP_COMPANIONS } from "@/lib/data/party";
import { CreateCharacter } from "@/components/create-character";
import { Badge } from "@/components/ui/badge";
import { Skull, Swords, User, Sparkles } from "lucide-react";

const ROLE_ICON = {
  "Face + Nova": Sparkles,
  "Control + Support": Skull,
  "Ranged / Skills": User,
  "Frontline Destroyer": Swords,
} as const;

function MemberCard({
  m,
  temp,
}: {
  m: (typeof PARTY)[number];
  temp?: boolean;
}) {
  const Icon = ROLE_ICON[m.role as keyof typeof ROLE_ICON] ?? Sparkles;
  return (
    <article
      className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-semibold text-[var(--color-fg)]">{m.name}</h3>
              <p className="text-xs text-[var(--color-muted)]">{m.role}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {temp ? <Badge variant="warn">Temp</Badge> : null}
          <Badge variant="outline">{m.origin}</Badge>
        </div>
      </div>

      <dl className="grid gap-2 text-sm">
        <div>
          <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-wide">
            Race
          </dt>
          <dd className="text-[var(--color-fg)]">{m.race}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-wide">
            Build
          </dt>
          <dd className="text-[var(--color-fg)]">{m.classPath}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-wide">
            Stats
          </dt>
          <dd className="font-mono text-xs text-[var(--color-muted)]">{m.stats}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-wide">
            Why
          </dt>
          <dd className="text-[var(--color-muted)] leading-relaxed">{m.why}</dd>
        </div>
        <div className="rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] border border-[var(--color-border)] p-3">
          <dt className="text-[var(--color-primary)] text-xs font-medium uppercase tracking-wide mb-1">
            Dark path
          </dt>
          <dd className="text-sm text-[var(--color-fg)] leading-relaxed">
            {m.darkPath}
          </dd>
        </div>
      </dl>

      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
          Level notes
        </p>
        <ul className="space-y-2">
          {m.levels.map((l) => (
            <li
              key={l.level}
              className="flex gap-2 text-sm text-[var(--color-muted)]"
            >
              <span className="shrink-0 font-medium text-[var(--color-fg)] tabular w-20">
                {l.level}
              </span>
              <span className="leading-relaxed">{l.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)] mb-2">
          Combat openers
        </p>
        <ol className="list-decimal list-inside space-y-1 text-sm text-[var(--color-muted)]">
          {m.openers.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export function PartyPanel() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-fg)]">
          Dark party
        </h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Final four below. Early Act 1: use Lae’zel as temp frontline until
          Minthara (see temporary card).
        </p>
      </header>

      <CreateCharacter />

      <div className="grid gap-4 md:grid-cols-2">
        {PARTY.map((m) => (
          <MemberCard key={m.id} m={m} />
        ))}
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--color-muted)]">
          Temporary (Act 1)
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {TEMP_COMPANIONS.map((m) => (
            <MemberCard key={m.id} m={m} temp />
          ))}
        </div>
      </section>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
        <p>{PARTY_NOTES.rest}</p>
        <p>{PARTY_NOTES.backup}</p>
        <p>{PARTY_NOTES.face}</p>
      </div>
    </div>
  );
}
