import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  type ActiveSession,
  type SavedSession,
  type SessionCounts,
  type SessionLap,
  countDone,
  deltaCounts,
  emptyCounts,
  sessionElapsedMs,
  uid,
} from "@/lib/session-stats";

export type CheckStatus = "open" | "done" | "skipped";

export type ProgressSnapshot = {
  version: 4;
  quests: Record<string, boolean>;
  questsSkip: Record<string, boolean>;
  items: Record<string, boolean>;
  itemsSkip: Record<string, boolean>;
  walk: Record<string, boolean>;
  walkSkip: Record<string, boolean>;
  levels: Record<string, boolean>;
  levelsSkip: Record<string, boolean>;
  missables: Record<string, boolean>;
  missablesSkip: Record<string, boolean>;
  loadouts: Record<string, boolean>;
  loadoutsSkip: Record<string, boolean>;
  illithid: Record<string, boolean>;
  illithidSkip: Record<string, boolean>;
  approval: Record<string, boolean>;
  approvalSkip: Record<string, boolean>;
  notes: Record<string, string>;
  longRests: number;
  /** @deprecated use activeSession */
  sessionStartedAt: number | null;
  /** @deprecated removed UI */
  compactMode: boolean;
  actFilter: 0 | 1 | 2 | 3;
  activeSession: ActiveSession | null;
  sessionHistory: SavedSession[];
};

type ProgressState = ProgressSnapshot & {
  toggleQuest: (id: string) => void;
  skipQuest: (id: string) => void;
  toggleItem: (id: string) => void;
  skipItem: (id: string) => void;
  toggleWalk: (id: string) => void;
  skipWalk: (id: string) => void;
  toggleLevel: (id: string) => void;
  skipLevel: (id: string) => void;
  toggleMissable: (id: string) => void;
  skipMissable: (id: string) => void;
  toggleLoadout: (id: string) => void;
  skipLoadout: (id: string) => void;
  toggleIllithid: (id: string) => void;
  skipIllithid: (id: string) => void;
  toggleApproval: (id: string) => void;
  skipApproval: (id: string) => void;
  setNote: (id: string, text: string) => void;
  incLongRest: () => void;
  decLongRest: () => void;
  startSession: () => void;
  pauseSession: () => void;
  resumeSession: () => void;
  lapSession: () => void;
  endSession: () => void;
  clearSession: () => void;
  clearSessionHistory: () => void;
  setCompactMode: (v: boolean) => void;
  resetAll: () => void;
  setActFilter: (act: 0 | 1 | 2 | 3) => void;
  exportSnapshot: () => ProgressSnapshot;
  importSnapshot: (data: Partial<ProgressSnapshot>) => void;
  /** Live counts for UI */
  currentCounts: () => SessionCounts;
};

const EMPTY: ProgressSnapshot = {
  version: 4,
  quests: {},
  questsSkip: {},
  items: {},
  itemsSkip: {},
  walk: {},
  walkSkip: {},
  levels: {},
  levelsSkip: {},
  missables: {},
  missablesSkip: {},
  loadouts: {},
  loadoutsSkip: {},
  illithid: {},
  illithidSkip: {},
  approval: {},
  approvalSkip: {},
  notes: {},
  longRests: 0,
  sessionStartedAt: null,
  compactMode: false,
  actFilter: 0,
  activeSession: null,
  sessionHistory: [],
};

function snapshotCounts(s: {
  items: Record<string, boolean>;
  walk: Record<string, boolean>;
  levels: Record<string, boolean>;
  longRests: number;
}): SessionCounts {
  return {
    items: countDone(s.items),
    walk: countDone(s.walk),
    levels: countDone(s.levels),
    longRests: s.longRests,
  };
}

function statusOf(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
): CheckStatus {
  if (done[id]) return "done";
  if (skip[id]) return "skipped";
  return "open";
}

export function getStatus(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
): CheckStatus {
  return statusOf(done, skip, id);
}

function applyToggle(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
) {
  const isDone = !!done[id];
  const nextDone = { ...done };
  const nextSkip = { ...skip };
  if (isDone) delete nextDone[id];
  else {
    nextDone[id] = true;
    delete nextSkip[id];
  }
  return { done: nextDone, skip: nextSkip };
}

function applySkip(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
) {
  const isSkipped = !!skip[id];
  const nextDone = { ...done };
  const nextSkip = { ...skip };
  if (isSkipped) delete nextSkip[id];
  else {
    nextSkip[id] = true;
    delete nextDone[id];
  }
  return { done: nextDone, skip: nextSkip };
}

function pairToggle(
  doneKey: keyof ProgressSnapshot,
  skipKey: keyof ProgressSnapshot,
  id: string,
) {
  return (s: ProgressState) => {
    const { done, skip } = applyToggle(
      s[doneKey] as Record<string, boolean>,
      s[skipKey] as Record<string, boolean>,
      id,
    );
    return { [doneKey]: done, [skipKey]: skip } as Partial<ProgressState>;
  };
}

function pairSkip(
  doneKey: keyof ProgressSnapshot,
  skipKey: keyof ProgressSnapshot,
  id: string,
) {
  return (s: ProgressState) => {
    const { done, skip } = applySkip(
      s[doneKey] as Record<string, boolean>,
      s[skipKey] as Record<string, boolean>,
      id,
    );
    return { [doneKey]: done, [skipKey]: skip } as Partial<ProgressState>;
  };
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...EMPTY,
      currentCounts: () => snapshotCounts(get()),
      toggleQuest: (id) => set(pairToggle("quests", "questsSkip", id)),
      skipQuest: (id) => set(pairSkip("quests", "questsSkip", id)),
      toggleItem: (id) => set(pairToggle("items", "itemsSkip", id)),
      skipItem: (id) => set(pairSkip("items", "itemsSkip", id)),
      toggleWalk: (id) => set(pairToggle("walk", "walkSkip", id)),
      skipWalk: (id) => set(pairSkip("walk", "walkSkip", id)),
      toggleLevel: (id) => set(pairToggle("levels", "levelsSkip", id)),
      skipLevel: (id) => set(pairSkip("levels", "levelsSkip", id)),
      toggleMissable: (id) => set(pairToggle("missables", "missablesSkip", id)),
      skipMissable: (id) => set(pairSkip("missables", "missablesSkip", id)),
      toggleLoadout: (id) => set(pairToggle("loadouts", "loadoutsSkip", id)),
      skipLoadout: (id) => set(pairSkip("loadouts", "loadoutsSkip", id)),
      toggleIllithid: (id) => set(pairToggle("illithid", "illithidSkip", id)),
      skipIllithid: (id) => set(pairSkip("illithid", "illithidSkip", id)),
      toggleApproval: (id) => set(pairToggle("approval", "approvalSkip", id)),
      skipApproval: (id) => set(pairSkip("approval", "approvalSkip", id)),
      setNote: (id, text) =>
        set((s) => {
          const notes = { ...s.notes };
          if (!text.trim()) delete notes[id];
          else notes[id] = text;
          return { notes };
        }),
      incLongRest: () => set((s) => ({ longRests: s.longRests + 1 })),
      decLongRest: () =>
        set((s) => ({ longRests: Math.max(0, s.longRests - 1) })),

      startSession: () => {
        const s = get();
        const now = Date.now();
        const counts = snapshotCounts(s);
        const active: ActiveSession = {
          id: uid(),
          startedAt: now,
          pausedAt: null,
          pauseAccumMs: 0,
          lapStartedAt: now,
          baseline: counts,
          lapBaseline: counts,
          laps: [],
        };
        set({
          activeSession: active,
          sessionStartedAt: now,
        });
      },

      pauseSession: () =>
        set((s) => {
          if (!s.activeSession || s.activeSession.pausedAt) return s;
          return {
            activeSession: {
              ...s.activeSession,
              pausedAt: Date.now(),
            },
          };
        }),

      resumeSession: () =>
        set((s) => {
          const a = s.activeSession;
          if (!a?.pausedAt) return s;
          const pausedFor = Date.now() - a.pausedAt;
          return {
            activeSession: {
              ...a,
              pausedAt: null,
              pauseAccumMs: a.pauseAccumMs + pausedFor,
              // shift lap start so lap clock freezes during pause
              lapStartedAt: a.lapStartedAt + pausedFor,
            },
          };
        }),

      lapSession: () =>
        set((s) => {
          const a = s.activeSession;
          if (!a) return s;
          const now = Date.now();
          const counts = snapshotCounts(s);
          const lap: SessionLap = {
            id: uid(),
            index: a.laps.length + 1,
            startedAt: a.lapStartedAt,
            endedAt: now,
            durationMs: Math.max(0, (a.pausedAt ?? now) - a.lapStartedAt),
            gained: deltaCounts(a.lapBaseline, counts),
          };
          return {
            activeSession: {
              ...a,
              laps: [...a.laps, lap],
              lapStartedAt: now,
              lapBaseline: counts,
            },
          };
        }),

      endSession: () =>
        set((s) => {
          const a = s.activeSession;
          if (!a) return s;
          const now = Date.now();
          const counts = snapshotCounts(s);
          // close open lap
          const finalLap: SessionLap = {
            id: uid(),
            index: a.laps.length + 1,
            startedAt: a.lapStartedAt,
            endedAt: now,
            durationMs: Math.max(0, (a.pausedAt ?? now) - a.lapStartedAt),
            gained: deltaCounts(a.lapBaseline, counts),
          };
          const laps = [...a.laps, finalLap];
          const saved: SavedSession = {
            id: a.id,
            startedAt: a.startedAt,
            endedAt: now,
            durationMs: sessionElapsedMs(
              { ...a, pausedAt: a.pausedAt ?? now },
              now,
            ),
            gained: deltaCounts(a.baseline, counts),
            laps,
          };
          return {
            activeSession: null,
            sessionStartedAt: null,
            sessionHistory: [saved, ...s.sessionHistory].slice(0, 30),
          };
        }),

      clearSession: () =>
        set({ activeSession: null, sessionStartedAt: null }),

      clearSessionHistory: () => set({ sessionHistory: [] }),

      setCompactMode: (v) => set({ compactMode: v }),
      resetAll: () =>
        set({
          ...EMPTY,
          sessionHistory: get().sessionHistory,
        }),
      setActFilter: (act) => set({ actFilter: act }),
      exportSnapshot: () => {
        const s = get();
        return {
          version: 4,
          quests: s.quests,
          questsSkip: s.questsSkip,
          items: s.items,
          itemsSkip: s.itemsSkip,
          walk: s.walk,
          walkSkip: s.walkSkip,
          levels: s.levels,
          levelsSkip: s.levelsSkip,
          missables: s.missables,
          missablesSkip: s.missablesSkip,
          loadouts: s.loadouts,
          loadoutsSkip: s.loadoutsSkip,
          illithid: s.illithid,
          illithidSkip: s.illithidSkip,
          approval: s.approval,
          approvalSkip: s.approvalSkip,
          notes: s.notes,
          longRests: s.longRests,
          sessionStartedAt: s.sessionStartedAt,
          compactMode: s.compactMode,
          actFilter: s.actFilter,
          activeSession: s.activeSession,
          sessionHistory: s.sessionHistory,
        };
      },
      importSnapshot: (data) =>
        set((s) => ({
          ...s,
          ...EMPTY,
          ...data,
          version: 4,
          activeSession: data.activeSession ?? null,
          sessionHistory: data.sessionHistory ?? s.sessionHistory ?? [],
        })),
    }),
    {
      name: "bg3-dark-run-progress",
      version: 4,
      migrate: (persisted) => {
        const p = (persisted ?? {}) as Partial<ProgressSnapshot>;
        return {
          ...EMPTY,
          ...p,
          version: 4,
          activeSession: p.activeSession ?? null,
          sessionHistory: p.sessionHistory ?? [],
        };
      },
    },
  ),
);

export function countProgress(
  ids: string[],
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
) {
  let doneN = 0;
  let skipN = 0;
  for (const id of ids) {
    if (done[id]) doneN += 1;
    else if (skip[id]) skipN += 1;
  }
  const total = ids.length;
  const resolved = doneN + skipN;
  return {
    doneN,
    skipN,
    resolved,
    total,
    donePct: total ? Math.round((doneN / total) * 100) : 0,
    skipPct: total ? Math.round((skipN / total) * 100) : 0,
    resolvedPct: total ? Math.round((resolved / total) * 100) : 0,
  };
}
