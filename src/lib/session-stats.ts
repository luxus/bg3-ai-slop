/** Helpers for session stopwatch / named segments. */

export type SessionCounts = {
  items: number;
  walk: number;
  levels: number;
  longRests: number;
};

/** Optional named checkpoint inside a session (map / quest chunk). */
export type SessionLap = {
  id: string;
  index: number;
  /** User label, e.g. "Grove", "Underdark" */
  name: string;
  startedAt: number;
  endedAt: number;
  durationMs: number;
  gained: SessionCounts;
};

export type ActiveSession = {
  id: string;
  /** Editable title */
  name: string;
  startedAt: number;
  pausedAt: number | null;
  pauseAccumMs: number;
  lapStartedAt: number;
  /** Name for the open segment (edited live, used when Lap is pressed) */
  currentLapName: string;
  baseline: SessionCounts;
  lapBaseline: SessionCounts;
  laps: SessionLap[];
};

export type SavedSession = {
  id: string;
  name: string;
  startedAt: number;
  endedAt: number;
  durationMs: number;
  gained: SessionCounts;
  laps: SessionLap[];
};

export function emptyCounts(): SessionCounts {
  return { items: 0, walk: 0, levels: 0, longRests: 0 };
}

export function countDone(map: Record<string, boolean>): number {
  let n = 0;
  for (const v of Object.values(map)) if (v) n += 1;
  return n;
}

export function deltaCounts(
  from: SessionCounts,
  to: SessionCounts,
): SessionCounts {
  return {
    items: Math.max(0, to.items - from.items),
    walk: Math.max(0, to.walk - from.walk),
    levels: Math.max(0, to.levels - from.levels),
    longRests: Math.max(0, to.longRests - from.longRests),
  };
}

export function formatElapsed(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export function sessionElapsedMs(session: ActiveSession, now: number): number {
  const end = session.pausedAt ?? now;
  return Math.max(0, end - session.startedAt - session.pauseAccumMs);
}

export function currentLapMs(session: ActiveSession, now: number): number {
  const end = session.pausedAt ?? now;
  return Math.max(0, end - session.lapStartedAt);
}

export function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function defaultSessionName(at = Date.now()): string {
  return new Date(at).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function defaultLapName(index: number): string {
  return `Segment ${index}`;
}
