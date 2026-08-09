import { PROOF_PROCESS, VERIFIED_FACTS } from "@/lib/data/verified";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const STATUS = {
  verified: { label: "Verified", variant: "success" as const },
  corrected: { label: "Corrected", variant: "warn" as const },
  soft: { label: "Soft advice", variant: "secondary" as const },
};

export function ProofPanel() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Proof & sources</h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Earlier create-screen advice had errors (3 cantrips, free background
          pick, Persuasion on Warlock). Hard rules below are checked against{" "}
          <a
            href="https://bg3.wiki"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-primary)] underline-offset-2 hover:underline"
          >
            bg3.wiki
          </a>
          . Soft advice is labelled.
        </p>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4">
        <h3 className="font-semibold text-[var(--color-fg)]">
          How we proof going forward
        </h3>
        <ol className="space-y-3">
          {PROOF_PROCESS.map((p) => (
            <li key={p.step} className="flex gap-3 text-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-elevated)] text-xs font-semibold tabular">
                {p.step}
              </span>
              <div>
                <p className="font-medium text-[var(--color-fg)]">{p.title}</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--color-muted)]">
          Fact list
        </h3>
        <div className="space-y-2">
          {VERIFIED_FACTS.map((f) => {
            const st = STATUS[f.status];
            return (
              <article
                key={f.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={st.variant}>{st.label}</Badge>
                  <a
                    href={f.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                  >
                    {f.source}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-sm text-[var(--color-fg)] leading-relaxed">
                  {f.claim}
                </p>
                {f.note ? (
                  <p className="text-xs text-[var(--color-subtle)] leading-relaxed">
                    {f.note}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <p className="text-xs text-[var(--color-subtle)] leading-relaxed">
        In-game create screen always wins if something still mismatches. Message
        what you see on screen and we fix the data.
      </p>
    </div>
  );
}
