import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

/** Single-fill progress (done only). */
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-elevated)]",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--color-primary)] transition-transform duration-300 ease-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

type DualProps = {
  /** 0–100 share of bar for completed (crimson) */
  donePct: number;
  /** 0–100 share of bar for skipped (amber) */
  skipPct: number;
  className?: string;
  showLegend?: boolean;
};

/** Stacked bar: done (primary) + skipped (warn) over empty track. */
export function DualProgress({
  donePct,
  skipPct,
  className,
  showLegend = true,
}: DualProps) {
  const d = Math.max(0, Math.min(100, donePct));
  const s = Math.max(0, Math.min(100 - d, skipPct));

  return (
    <div className={cn("space-y-1.5", className)}>
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-elevated)]"
        role="progressbar"
        aria-valuenow={d + s}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="absolute inset-0 flex">
          <div
            className="h-full bg-[var(--color-primary)] transition-[width] duration-300 ease-out"
            style={{ width: `${d}%` }}
          />
          <div
            className="h-full bg-[var(--color-warn)] transition-[width] duration-300 ease-out"
            style={{ width: `${s}%` }}
          />
        </div>
      </div>
      {showLegend ? (
        <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
            Done
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-warn)]" />
            Skipped
          </span>
        </div>
      ) : null}
    </div>
  );
}
