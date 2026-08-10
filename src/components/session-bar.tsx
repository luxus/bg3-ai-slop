import { useEffect, useState } from "react";
import { useProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { authEnabled } from "@/lib/auth/client";

function formatElapsed(ms: number) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${sec}s`;
}

export function SessionBar() {
  const longRests = useProgress((s) => s.longRests);
  const sessionStartedAt = useProgress((s) => s.sessionStartedAt);
  const incLongRest = useProgress((s) => s.incLongRest);
  const decLongRest = useProgress((s) => s.decLongRest);
  const startSession = useProgress((s) => s.startSession);
  const clearSession = useProgress((s) => s.clearSession);
  const compactMode = useProgress((s) => s.compactMode);
  const setCompactMode = useProgress((s) => s.setCompactMode);
  const { user, isPending } = useCurrentUserState();

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!sessionStartedAt) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [sessionStartedAt]);

  useEffect(() => {
    document.documentElement.classList.toggle("compact-mode", compactMode);
  }, [compactMode]);

  const elapsed =
    sessionStartedAt != null ? formatElapsed(now - sessionStartedAt) : null;

  const accountLabel = isPending
    ? "…"
    : user && !user.isDevFallback
      ? user.displayName ?? "Signed in"
      : authEnabled
        ? "Guest"
        : "Local";

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 py-2 text-xs">
      <span className="text-[var(--color-muted)]">
        Account:{" "}
        <strong className="text-[var(--color-fg)]">{accountLabel}</strong>
      </span>
      <span className="text-[var(--color-border-strong)]">|</span>
      <span className="text-[var(--color-muted)]">
        Session:{" "}
        <strong className="text-[var(--color-fg)]">
          {elapsed ?? "not started"}
        </strong>
      </span>
      {!sessionStartedAt ? (
        <Button
          size="sm"
          variant="secondary"
          className="h-7 text-xs"
          onClick={startSession}
        >
          Start
        </Button>
      ) : (
        <Button
          size="sm"
          variant="secondary"
          className="h-7 text-xs"
          onClick={clearSession}
        >
          Reset timer
        </Button>
      )}
      <span className="text-[var(--color-border-strong)]">|</span>
      <span className="text-[var(--color-muted)]">
        Long rests:{" "}
        <strong className="text-[var(--color-fg)] tabular">{longRests}</strong>
      </span>
      <Button
        size="sm"
        variant="secondary"
        className="h-7 px-2 text-xs"
        onClick={decLongRest}
      >
        −
      </Button>
      <Button
        size="sm"
        variant="secondary"
        className="h-7 px-2 text-xs"
        onClick={incLongRest}
      >
        +
      </Button>
      <span className="text-[var(--color-border-strong)]">|</span>
      <Button
        size="sm"
        variant={compactMode ? "default" : "secondary"}
        className="h-7 text-xs"
        onClick={() => setCompactMode(!compactMode)}
      >
        Compact
      </Button>
    </div>
  );
}
