import { CAMP_NOTES } from "@/lib/data/camp";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function CampPanel() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Camp unlocks</h2>
        <p className="text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Withers, long rests, spare companions (Gale), DURGE camp gifts —
          the early QoL stuff the walk used to under-explain.
        </p>
      </header>

      <div className="space-y-3">
        {CAMP_NOTES.map((n) => (
          <article
            key={n.id}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-medium text-[var(--color-fg)]">{n.title}</h3>
              <Badge
                variant={n.confidence === "verified" ? "success" : "secondary"}
              >
                {n.confidence === "verified" ? "Verified" : "Soft"}
              </Badge>
            </div>
            <p className="text-xs text-[var(--color-primary)]">{n.when}</p>
            <div className="text-sm text-[var(--color-muted)] leading-relaxed space-y-2">
              {n.detail.split("\n").map((line, i) => (
                <p key={i} className="whitespace-pre-wrap">
                  {line}
                </p>
              ))}
            </div>
            {n.sourceUrl ? (
              <a
                href={n.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
              >
                Source
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
