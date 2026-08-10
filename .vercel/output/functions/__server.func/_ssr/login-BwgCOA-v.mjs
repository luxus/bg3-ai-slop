import { o as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn } from "./client-I2crl4SF.mjs";
import { t as GROK_PROVIDERS } from "./server-DiULw8zH.mjs";
import { t as Button } from "./button-LLqxmOwm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BwgCOA-v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	async function onSignIn(providerId) {
		setBusy(providerId);
		setError(null);
		try {
			await signIn(providerId, {
				callbackURL: "/",
				errorCallbackURL: "/login"
			});
		} catch (e) {
			setError(e instanceof Error ? e.message : "Sign-in failed");
			setBusy(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)] grid place-items-center p-6 pt-[calc(var(--grok-banner-h,0px)+1.5rem)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm space-y-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-[var(--color-primary)]",
							children: "Dark Run Companion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-semibold",
							children: "Sign in to sync"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--color-muted)]",
							children: "Google or X — private cloud save of your checklist."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						variant: "secondary",
						disabled: busy !== null,
						onClick: () => void onSignIn(p.providerId),
						children: busy === p.providerId ? "Opening…" : `Continue with ${p.label}`
					}, p.providerId))
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-danger)]",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "block text-center text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]",
					children: "Back to companion"
				})
			]
		})
	});
}
//#endregion
export { Login as component };
