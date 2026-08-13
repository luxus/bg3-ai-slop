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
  type SessionLap,
  type SavedSession,
} from "@/lib/session-stats";
import {
  ChevronDown,
  ChevronUp,
  Flag,
  Pause,
  Play,
  Square,
  Timer,
  Trash2,
  Pencil,
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

function InlineName({
  value,
  onSave,
  className = "",
  placeholder = "Name…",
}: {
  value: string;
  onSave: (v: string) => void;
  className?: string;
  placeholder?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  if (!editing) {
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className={`inline-flex items-center gap-1 text-left hover:text-[var(--color-primary)] group min-w-0 ${className}`}
        title="Click to rename"
      >
        <span className="truncate font-medium text-[var(--color-fg)]">
          {value || placeholder}
        </span>
        <Pencil className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-60" />
      </button>
    );
  }

  return (
    <input
      autoFocus
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        onSave(draft);
        setEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSave(draft);
          setEditing(false);
        }
        if (e.key === "Escape") {
          setDraft(value);
          setEditing(false);
        }
      }}
      placeholder={placeholder}
      className={`min-w-0 max-w-[14rem] rounded border border-[var(--color-primary)]/50 bg-[var(--color-bg)] px-1.5 py-0.5 text-[var(--color-fg)] outline-none ${className}`}
    />
  );
}

function LapRow({
  lap,
  onRename,
  onDelete,
}: {
  lap: SessionLap;
  onRename: (name: string) => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="shrink-0 text-[var(--color-subtle)] tabular">
          #{lap.index}
        </span>
        <InlineName value={lap.name} onSave={onRename} />
        <span className="shrink-0 tabular text-[var(--color-muted)]">
          {formatElapsed(lap.durationMs)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Gains g={lap.gained} />
        <button
          type="button"
          onClick={onDelete}
          className="rounded p-1 text-[var(--color-subtle)] hover:bg-[var(--color-elevated)] hover:text-[var(--color-danger, #e07070)]"
          title="Delete segment"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function SavedSessionCard({
  ses,
  onRename,
  onDelete,
  onRenameLap,
  onDeleteLap,
}: {
  ses: SavedSession;
  onRename: (name: string) => void;
  onDelete: () => void;
  onRenameLap: (lapId: string, name: string) => void;
  onDeleteLap: (lapId: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-2 space-y-1.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <InlineName value={ses.name} onSave={onRename} />
          <span className="shrink-0 tabular text-[var(--color-muted)]">
            {formatElapsed(ses.durationMs)}
            {ses.laps.length > 0 ? ` · ${ses.laps.length} seg` : ""}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {ses.laps.length > 0 ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="rounded px-1.5 py-0.5 text-[var(--color-subtle)] hover:text-[var(--color-fg)]"
            >
              {expanded ? "Hide" : "Segments"}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onDelete}
            className="rounded p-1 text-[var(--color-subtle)] hover:bg-[var(--color-elevated)] hover:text-[var(--color-danger,#e07070)]"
            title="Delete session"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <Gains g={ses.gained} />
      {expanded && ses.laps.length > 0 ? (
        <div className="space-y-1 pt-1 border-t border-[var(--color-border)]">
          {ses.laps.map((lap) => (
            <LapRow
              key={lap.id}
              lap={lap}
              onRename={(n) => onRenameLap(lap.id, n)}
              onDelete={() => onDeleteLap(lap.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
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
  const renameActiveSession = useProgress((s) => s.renameActiveSession);
  const setCurrentLapName = useProgress((s) => s.setCurrentLapName);
  const renameActiveLap = useProgress((s) => s.renameActiveLap);
  const deleteActiveLap = useProgress((s) => s.deleteActiveLap);
  const renameSavedSession = useProgress((s) => s.renameSavedSession);
  const deleteSavedSession = useProgress((s) => s.deleteSavedSession);
  const renameSavedLap = useProgress((s) => s.renameSavedLap);
  const deleteSavedLap = useProgress((s) => s.deleteSavedLap);
  const { user, isPending } = useCurrentUserState();

  const [now, setNow] = useState(Date.now());
  const [open, setOpen] = useState(false);
  const [lapPrompt, setLapPrompt] = useState(false);
  const [lapDraft, setLapDraft] = useState("");

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
  const usingSegments = Boolean(activeSession && activeSession.laps.length > 0);

  function handleLapClick() {
    if (!activeSession) return;
    setLapDraft(activeSession.currentLapName || "");
    setLapPrompt(true);
  }

  function confirmLap() {
    lapSession(lapDraft.trim() || undefined);
    setLapPrompt(false);
    setLapDraft("");
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-elevated)] overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 text-xs">
        <span className="text-[var(--color-muted)]">
          <strong className="text-[var(--color-fg)]">{accountLabel}</strong>
        </span>
        <span className="text-[var(--color-border-strong)]">|</span>

        <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)] min-w-0">
          <Timer className="h-3.5 w-3.5 shrink-0" />
          {activeSession ? (
            <>
              <InlineName
                value={activeSession.name}
                onSave={renameActiveSession}
                className="text-sm"
              />
              <strong
                className={`tabular text-sm shrink-0 ${paused ? "text-[var(--color-warn)]" : "text-[var(--color-fg)]"}`}
              >
                {elapsed}
              </strong>
              {paused ? (
                <span className="text-[var(--color-warn)] shrink-0">paused</span>
              ) : null}
              {usingSegments || lapPrompt ? (
                <span className="text-[var(--color-subtle)] shrink-0">
                  · seg {lapElapsed}
                </span>
              ) : null}
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
            onClick={() => startSession()}
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
              onClick={handleLapClick}
              title="Optional: name a map/quest segment"
            >
              <Flag className="h-3 w-3" /> Segment
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

      {/* Name segment prompt */}
      {lapPrompt && activeSession ? (
        <div className="border-t border-[var(--color-border)] px-3 py-2 flex flex-wrap items-center gap-2 text-xs bg-[var(--color-accent-soft)]">
          <span className="text-[var(--color-muted)]">Name this segment:</span>
          <input
            autoFocus
            value={lapDraft}
            onChange={(e) => setLapDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") confirmLap();
              if (e.key === "Escape") setLapPrompt(false);
            }}
            placeholder="e.g. Grove, Goblin camp…"
            className="min-w-[10rem] flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-1 text-[var(--color-fg)]"
          />
          <Button size="sm" className="h-7 text-xs" onClick={confirmLap}>
            Save segment
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-7 text-xs"
            onClick={() => setLapPrompt(false)}
          >
            Cancel
          </Button>
        </div>
      ) : null}

      {activeSession && sessionGains ? (
        <div className="border-t border-[var(--color-border)] px-3 py-1.5 text-[11px] flex flex-wrap gap-x-4 gap-y-1">
          <span>
            <span className="text-[var(--color-subtle)]">Session </span>
            <Gains g={sessionGains} />
          </span>
          {usingSegments && lapGains ? (
            <span>
              <span className="text-[var(--color-subtle)]">
                Open segment{" "}
              </span>
              <Gains g={lapGains} />
            </span>
          ) : null}
        </div>
      ) : null}

      {open ? (
        <div className="border-t border-[var(--color-border)] px-3 py-3 space-y-3 text-xs">
          <p className="text-[var(--color-muted)] leading-relaxed">
            <strong className="text-[var(--color-fg)]">Session</strong> = one
            play block (rename anytime — click the name).{" "}
            <strong className="text-[var(--color-fg)]">Segment</strong> is
            optional: only use it to split a long session (e.g. Grove / Creche).
            Click names to edit; trash to delete.
          </p>

          {activeSession ? (
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                Live session
              </p>
              <div className="rounded-[var(--radius-md)] border border-[var(--color-primary)]/30 bg-[var(--color-surface)] px-2.5 py-2 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <InlineName
                    value={activeSession.name}
                    onSave={renameActiveSession}
                  />
                  <span className="tabular text-[var(--color-muted)]">
                    {elapsed}
                    {paused ? " · paused" : ""}
                  </span>
                </div>
                {sessionGains ? <Gains g={sessionGains} /> : null}
                {usingSegments ? (
                  <div className="pt-1 flex flex-wrap items-center gap-2 text-[var(--color-muted)]">
                    <span className="text-[var(--color-subtle)]">
                      Next segment name:
                    </span>
                    <InlineName
                      value={activeSession.currentLapName}
                      onSave={setCurrentLapName}
                      placeholder="Segment name…"
                    />
                  </div>
                ) : null}
              </div>

              {activeSession.laps.length > 0 ? (
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wide text-[var(--color-subtle)]">
                    Segments this session
                  </p>
                  {activeSession.laps.map((lap) => (
                    <LapRow
                      key={lap.id}
                      lap={lap}
                      onRename={(n) => renameActiveLap(lap.id, n)}
                      onDelete={() => deleteActiveLap(lap.id)}
                    />
                  ))}
                </div>
              ) : null}
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
                  onClick={() => {
                    if (confirm("Clear all saved sessions?")) {
                      clearSessionHistory();
                    }
                  }}
                >
                  Clear all
                </button>
              </div>
              {sessionHistory.map((ses) => (
                <SavedSessionCard
                  key={ses.id}
                  ses={ses}
                  onRename={(n) => renameSavedSession(ses.id, n)}
                  onDelete={() => {
                    if (confirm(`Delete “${ses.name}”?`)) {
                      deleteSavedSession(ses.id);
                    }
                  }}
                  onRenameLap={(lapId, n) =>
                    renameSavedLap(ses.id, lapId, n)
                  }
                  onDeleteLap={(lapId) => deleteSavedLap(ses.id, lapId)}
                />
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
