import { PARTY, PARTY_NOTES } from "@/lib/data/party";
import { CreateCharacter } from "@/components/create-character";
import { Badge } from "@/components/ui/badge";
import { Skull, Swords, User, Sparkles } from "lucide-react";

const ROLE_ICON = {
  "Face + Nova": Sparkles,
  "Control + Support": Skull,
  "Ranged / Skills": User,
  "Frontline Destroyer": Swords,
} as const;

export function PartyPanel() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-fg)]">
          Dark party
        </h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Create your character with the card below, then recruit and respec
          companions. Minthara needs the Absolute / Grove raid path.
        </p>
      </header>

      <CreateCharacter />

      <div className="grid gap-4 md:grid-cols-2">
        {PARTY.map((m) => {
          const Icon =
            ROLE_ICON[m.role as keyof typeof ROLE_ICON] ?? Sparkles;
          return (
            <article
              key={m.id}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--color-fg)]">
                        {m.name}
                      </h3>
                      <p className="text-xs text-[var(--color-muted)]">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </div>
                <Badge variant="outline">{m.origin}</Badge>
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
                  <dd className="font-mono text-xs text-[var(--color-muted)]">
                    {m.stats}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-wide">
                    Why
                  </dt>
                  <dd className="text-[var(--color-muted)] leading-relaxed">
                    {m.why}
                  </dd>
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
                      <span className="shrink-0 font-medium text-[var(--color-fg)] tabular w-14">
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
        })}
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] p-4 space-y-2 text-sm text-[var(--color-muted)]">
        <p>{PARTY_NOTES.rest}</p>
        <p>{PARTY_NOTES.backup}</p>
        <p>{PARTY_NOTES.face}</p>
      </div>
    </div>
  );
}
