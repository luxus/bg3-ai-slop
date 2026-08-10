/** Helpers for session stopwatch / lap progress deltas. */

export type SessionCounts = {
  items: number;
  walk: number;
  levels: number;
  longRests: number;
};

export type SessionLap = {
  id: string;
  index: number;
  startedAt: number;
  endedAt: number;
  durationMs: number;
  gained: SessionCounts;
};

export type ActiveSession = {
  id: string;
  startedAt: number;
  /** When pause was pressed (null if running) */
  pausedAt: number | null;
  /** Total ms spent paused */
  pauseAccumMs: number;
  /** Start of current lap */
  lapStartedAt: number;
  /** Counts when session started */
  baseline: SessionCounts;
  /** Counts when current lap started */
  lapBaseline: SessionCounts;
  laps: SessionLap[];
};

export type SavedSession = {
  id: string;
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

export function deltaCounts(from: SessionCounts, to: SessionCounts): SessionCounts {
  return {
    items: Math.max(0, to.items - from.items),
    walk: Math.max(0, to.walk - from.walk),
    levels: Math.max(0, to.levels - from.levels),
    longRests: Math.max(0, to.longRests - from.longRests),
  };
}

export function addCounts(a: SessionCounts, b: SessionCounts): SessionCounts {
  return {
    items: a.items + b.items,
    walk: a.walk + b.walk,
    levels: a.levels + b.levels,
    longRests: a.longRests + b.longRests,
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

export function sessionElapsedMs(
  session: ActiveSession,
  now: number,
): number {
  const end = session.pausedAt ?? now;
  return Math.max(0, end - session.startedAt - session.pauseAccumMs);
}

export function lapElapsedMs(session: ActiveSession, now: number): number {
  const end = session.pausedAt ?? now;
  return Math.max(0, end - session.lapStartedAt - (session.pausedAt ? 0 : 0));
  // pause: when paused, freeze at pausedAt - lapStartedAt adjusted by pauseAccum only for whole session
  // simpler: lap duration = sessionElapsed - sum(completed lap durations) when running is messy
  // use: if paused, duration = pausedAt - lapStartedAt - pauseSinceLap
}

/** Lap wall time ignoring global pause bookkeeping complexity: use lapStartedAt to now/pausedAt */
export function currentLapMs(session: ActiveSession, now: number): number {
  const end = session.pausedAt ?? now;
  return Math.max(0, end - session.lapStartedAt);
}

export function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
