import type { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CheckStatus } from "@/lib/store";

type Props = {
  id: string;
  status: CheckStatus;
  onToggle: () => void;
  onSkip: () => void;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  badges?: {
    label: string;
    variant?: "default" | "secondary" | "outline" | "success" | "warn" | "danger";
  }[];
  children?: ReactNode;
};

/** Preserve line breaks in multi-step details. */
function DetailText({ text }: { text: string }) {
  const parts = text.split("\n").filter((p) => p.length > 0);
  if (parts.length <= 1) {
    return (
      <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-wrap">
        {text}
      </p>
    );
  }
  return (
    <div className="mt-1 space-y-2 text-sm text-[var(--color-muted)] leading-relaxed">
      {parts.map((p, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {p}
        </p>
      ))}
    </div>
  );
}

export function CheckRow({
  id,
  status,
  onToggle,
  onSkip,
  title,
  subtitle,
  meta,
  badges,
  children,
}: Props) {
  const done = status === "done";
  const skipped = status === "skipped";

  return (
    <div
      className={cn(
        "flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors duration-150",
        "hover:border-[var(--color-border-strong)]",
        done && "opacity-80 bg-[var(--color-elevated)]",
        skipped &&
          "opacity-80 bg-[color-mix(in_oklab,var(--color-warn)_8%,var(--color-surface))]",
      )}
    >
      <Checkbox
        id={id}
        checked={done}
        onCheckedChange={() => onToggle()}
        className="mt-0.5"
        aria-label={done ? "Mark not done" : "Mark done"}
      />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "font-medium text-[var(--color-fg)] leading-snug",
                done && "line-through text-[var(--color-muted)]",
                skipped && "text-[var(--color-muted)]",
              )}
            >
              {title}
            </p>
            {subtitle ? <DetailText text={subtitle} /> : null}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {meta}
            <Button
              type="button"
              size="sm"
              variant={skipped ? "default" : "secondary"}
              className={cn(
                "h-7 px-2.5 text-xs",
                skipped &&
                  "bg-[var(--color-warn)] text-[var(--color-primary-fg)] hover:opacity-90",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSkip();
              }}
            >
              {skipped ? "Unskip" : "Skip"}
            </Button>
          </div>
        </div>
        {skipped ? <Badge variant="warn">Skipped</Badge> : null}
        {badges && badges.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {badges.map((b) => (
              <Badge key={b.label} variant={b.variant ?? "secondary"}>
                {b.label}
              </Badge>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
