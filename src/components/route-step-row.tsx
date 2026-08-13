import type { RouteStep } from "@/lib/data/route";
import { useProgress, getStatus } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { ExternalLink } from "lucide-react";

/** Shared row — Route + Where only. One progress id. */
export function RouteStepRow({
  step,
  index,
}: {
  step: RouteStep;
  index: number;
}) {
  const walk = useProgress((s) => s.walk);
  const walkSkip = useProgress((s) => s.walkSkip);
  const toggleWalk = useProgress((s) => s.toggleWalk);
  const skipWalk = useProgress((s) => s.skipWalk);

  const subtitleParts = [step.detail];
  if (step.why) subtitleParts.push(`Why: ${step.why}`);
  if (step.gearFor) subtitleParts.push(`Equip on: ${step.gearFor}`);

  return (
    <CheckRow
      id={`route-${step.id}`}
      status={getStatus(walk, walkSkip, step.id)}
      onToggle={() => toggleWalk(step.id)}
      onSkip={() => skipWalk(step.id)}
      title={`${index}. ${step.do}`}
      subtitle={subtitleParts.join("\n")}
      badges={[
        step.optional
          ? { label: "Optional", variant: "secondary" as const }
          : { label: "Do it", variant: "danger" as const },
        { label: `Act ${step.act}`, variant: "outline" as const },
      ]}
    >
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
    </CheckRow>
  );
}
