import { o as __toESM } from "../_runtime.mjs";
import { c as Slot, f as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-LLqxmOwm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-dim)]",
			secondary: "bg-[var(--color-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-border)]",
			ghost: "text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-elevated)]",
			outline: "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-elevated)]",
			danger: "bg-[var(--color-danger)] text-[var(--color-primary-fg)] hover:opacity-90"
		},
		size: {
			default: "h-10 px-4 py-2 min-h-11",
			sm: "h-9 px-3 text-xs min-h-9",
			lg: "h-12 px-6 text-base min-h-12",
			icon: "h-10 w-10 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { cn as n, Button as t };
