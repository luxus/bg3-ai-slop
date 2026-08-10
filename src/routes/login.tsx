import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSignIn(providerId: string) {
    setBusy(providerId);
    setError(null);
    try {
      await signIn(providerId, { callbackURL: "/", errorCallbackURL: "/login" });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign-in failed");
      setBusy(null);
    }
  }

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)] grid place-items-center p-6 pt-[calc(var(--grok-banner-h,0px)+1.5rem)]">
      <div className="w-full max-w-sm space-y-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-[var(--color-primary)]">
            Dark Run Companion
          </p>
          <h1 className="text-xl font-semibold">Sign in to sync</h1>
          <p className="text-sm text-[var(--color-muted)]">
            Google or X — private cloud save of your checklist.
          </p>
        </div>
        {authEnabled ? (
          <div className="space-y-2">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                className="w-full"
                variant="secondary"
                disabled={busy !== null}
                onClick={() => void onSignIn(p.providerId)}
              >
                {busy === p.providerId ? "Opening…" : `Continue with ${p.label}`}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--color-muted)]">Sign-in is disabled.</p>
        )}
        {error ? (
          <p className="text-sm text-[var(--color-danger)]">{error}</p>
        ) : null}
        <Link
          to="/"
          className="block text-center text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]"
        >
          Back to companion
        </Link>
      </div>
    </div>
  );
}
