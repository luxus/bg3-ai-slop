import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-primary)] text-[var(--color-primary-fg)]",
        secondary:
          "border-[var(--color-border)] bg-[var(--color-elevated)] text-[var(--color-muted)]",
        outline: "border-[var(--color-border-strong)] text-[var(--color-fg)]",
        success:
          "border-transparent bg-[color-mix(in_oklab,var(--color-success)_20%,transparent)] text-[var(--color-success)]",
        warn: "border-transparent bg-[color-mix(in_oklab,var(--color-warn)_20%,transparent)] text-[var(--color-warn)]",
        danger:
          "border-transparent bg-[color-mix(in_oklab,var(--color-danger)_20%,transparent)] text-[var(--color-danger)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
