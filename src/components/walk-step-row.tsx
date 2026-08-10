import type { WalkStep, StepType } from "@/lib/data/walkthrough";
import { useProgress, getStatus } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { NoteField } from "@/components/note-field";
import { ExternalLink } from "lucide-react";

const TYPE_LABEL: Record<StepType, string> = {
  quest: "Quest",
  item: "Item",
  respec: "Respec",
  order: "Order",
  story: "Story",
};

const TYPE_VARIANT: Record<
  StepType,
  "danger" | "warn" | "success" | "secondary" | "outline"
> = {
  quest: "danger",
  item: "warn",
  respec: "success",
  order: "secondary",
  story: "outline",
};

/** Shared row for Walk + Where — same id, same text, same progress. */
export function WalkStepRow({ step }: { step: WalkStep }) {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const toggleWalk = useProgress((s) => s.toggleWalk);
  const skipWalk = useProgress((s) => s.skipWalk);

  return (
    <CheckRow
      id={`walk-${step.id}`}
      status={getStatus(walk, walkSkip, step.id)}
      onToggle={() => toggleWalk(step.id)}
      onSkip={() => skipWalk(step.id)}
      title={step.title}
      subtitle={step.detail}
      badges={[
        {
          label: TYPE_LABEL[step.type],
          variant: TYPE_VARIANT[step.type],
        },
        {
          label: step.confidence === "verified" ? "Verified" : "Soft",
          variant: step.confidence === "verified" ? "success" : "secondary",
        },
        ...(step.who
          ? [{ label: step.who, variant: "outline" as const }]
          : []),
      ]}
    >
      {step.darkNote ? (
        <p className="mt-2 text-sm rounded-[var(--radius-sm)] px-3 py-2 bg-[var(--color-accent-soft)] border border-[var(--color-border)]">
          <span className="text-[var(--color-primary)] font-medium">Dark: </span>
          {step.darkNote}
        </p>
      ) : null}
      <a
        href={step.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
        onClick={(e) => e.stopPropagation()}
      >
        {step.source}
        <ExternalLink className="h-3 w-3" />
      </a>
      <NoteField id={`note-walk-${step.id}`} />
    </CheckRow>
  );
}
