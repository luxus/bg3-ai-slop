import { useEffect, useMemo, useState } from "react";
import { useProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { authEnabled } from "@/lib/auth/client";
import {
  currentLapMs,
  deltaCounts,
  formatElapsed,
  sessionElapsedMs,
  type SessionCounts,
} from "@/lib/session-stats";
import {
  ChevronDown,
  ChevronUp,
  Flag,
  Pause,
  Play,
  Square,
  Timer,
} from "lucide-react";

function Gains({ g }: { g: SessionCounts }) {
  return (
    <span className="tabular text-[var(--color-muted)]">
      <span className="text-[var(--color-fg)]">+{g.walk}</span> route ·{" "}
      <span className="text-[var(--color-fg)]">+{g.items}</span> loot ·{" "}
      <span className="text-[var(--color-fg)]">+{g.levels}</span> levels ·{" "}
      <span className="text-[var(--color-fg)]">+{g.longRests}</span> rests
    </span>
  );
}

export function SessionBar() {
  const longRests = useProgress((s) => s.longRests);
  const activeSession = useProgress((s) => s.activeSession);
  const sessionHistory = useProgress((s) => s.sessionHistory);
  const items = useProgress((s) => s.items);
  const walk = useProgress((s) => s.walk);
  const levels = useProgress((s) => s.levels);
  const incLongRest = useProgress((s) => s.incLongRest);
  const decLongRest = useProgress((s) => s.decLongRest);
  const startSession = useProgress((s) => s.startSession);
  const pauseSession = useProgress((s) => s.pauseSession);
  const resumeSession = useProgress((s) => s.resumeSession);
  const lapSession = useProgress((s) => s.lapSession);
  const endSession = useProgress((s) => s.endSession);
  const clearSessionHistory = useProgress((s) => s.clearSessionHistory);
  const { user, isPending } = useCurrentUserState();

  const [now, setNow] = useState(Date.now());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!activeSession || activeSession.pausedAt) return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [activeSession, activeSession?.pausedAt]);

  const liveCounts = useMemo(
    () => ({
      items: Object.values(items).filter(Boolean).length,
      walk: Object.values(walk).filter(Boolean).length,
      levels: Object.values(levels).filter(Boolean).length,
      longRests,
    }),
    [items, walk, levels, longRests],
  );

  const sessionGains = activeSession
    ? deltaCounts(activeSession.baseline, liveCounts)
    : null;
  const lapGains = activeSession
    ? deltaCounts(activeSession.lapBaseline, liveCounts)
    : null;

  const elapsed = activeSession
    ? formatElapsed(sessionElapsedMs(activeSession, now))
    : null;
  const lapElapsed = activeSession
    ? formatElapsed(currentLapMs(activeSession, now))
    : null;

  const accountLabel = isPending
    ? "…"
    : user && !user.isDevFallback
      ? (user.displayName ?? "Signed in")
      : authEnabled
        ? "Guest"
        : "Local";

  const paused = Boolean(activeSession?.pausedAt);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] overflow-hidden">
      {/* Top row */}
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 text-xs">
        <span className="text-[var(--color-muted)]">
          <strong className="text-[var(--color-fg)]">{accountLabel}</strong>
        </span>
        <span className="text-[var(--color-border-strong)]">|</span>

        <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
          <Timer className="h-3.5 w-3.5" />
          {activeSession ? (
            <>
              <strong
                className={`tabular text-sm ${paused ? "text-[var(--color-warn)]" : "text-[var(--color-fg)]"}`}
              >
                {elapsed}
              </strong>
              {paused ? (
                <span className="text-[var(--color-warn)]">paused</span>
              ) : null}
              <span className="text-[var(--color-subtle)]">
                · lap {activeSession.laps.length + 1} {lapElapsed}
              </span>
            </>
          ) : (
            <span>no session</span>
          )}
        </span>

        {!activeSession ? (
          <Button
            size="sm"
            variant="default"
            className="h-7 text-xs gap-1"
            onClick={startSession}
          >
            <Play className="h-3 w-3" /> Start
          </Button>
        ) : (
          <>
            {paused ? (
              <Button
                size="sm"
                variant="secondary"
                className="h-7 text-xs gap-1"
                onClick={resumeSession}
              >
                <Play className="h-3 w-3" /> Resume
              </Button>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                className="h-7 text-xs gap-1"
                onClick={pauseSession}
              >
                <Pause className="h-3 w-3" /> Pause
              </Button>
            )}
            <Button
              size="sm"
              variant="secondary"
              className="h-7 text-xs gap-1"
              onClick={lapSession}
            >
              <Flag className="h-3 w-3" /> Lap
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-7 text-xs gap-1"
              onClick={endSession}
            >
              <Square className="h-3 w-3" /> End
            </Button>
          </>
        )}

        <span className="text-[var(--color-border-strong)]">|</span>
        <span className="text-[var(--color-muted)]">
          Rests{" "}
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-fg)]"
        >
          Stats
          {open ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {/* Live gains strip */}
      {activeSession && sessionGains ? (
        <div className="border-t border-[var(--color-border)] px-3 py-1.5 text-[11px] flex flex-wrap gap-x-4 gap-y-1">
          <span>
            <span className="text-[var(--color-subtle)]">Session </span>
            <Gains g={sessionGains} />
          </span>
          {lapGains ? (
            <span>
              <span className="text-[var(--color-subtle)]">This lap </span>
              <Gains g={lapGains} />
            </span>
          ) : null}
        </div>
      ) : null}

      {open ? (
        <div className="border-t border-[var(--color-border)] px-3 py-3 space-y-3 text-xs">
          <p className="text-[var(--color-muted)] leading-relaxed">
            Stopwatch for play sessions. Mark Route / Loot / Level-ups as done
            while running — gains update live.{" "}
            <strong className="text-[var(--color-fg)]">Lap</strong> freezes a
            segment (e.g. one map).{" "}
            <strong className="text-[var(--color-fg)]">End</strong> saves the
            session.
          </p>

          {activeSession && activeSession.laps.length > 0 ? (
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                Laps this session
              </p>
              {activeSession.laps.map((lap) => (
                <div
                  key={lap.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5"
                >
                  <span className="font-medium text-[var(--color-fg)]">
                    Lap {lap.index} · {formatElapsed(lap.durationMs)}
                  </span>
                  <Gains g={lap.gained} />
                </div>
              ))}
            </div>
          ) : null}

          {sessionHistory.length > 0 ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                  Past sessions
                </p>
                <button
                  type="button"
                  className="text-[var(--color-subtle)] hover:text-[var(--color-fg)]"
                  onClick={clearSessionHistory}
                >
                  Clear history
                </button>
              </div>
              {sessionHistory.slice(0, 8).map((ses) => (
                <div
                  key={ses.id}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2 space-y-1"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <span className="font-medium text-[var(--color-fg)]">
                      {new Date(ses.startedAt).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="tabular text-[var(--color-muted)]">
                      {formatElapsed(ses.durationMs)} · {ses.laps.length} laps
                    </span>
                  </div>
                  <Gains g={ses.gained} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-subtle)]">
              No saved sessions yet — press Start when you boot the game.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
