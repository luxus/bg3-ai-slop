import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CheckStatus = "open" | "done" | "skipped";

type ProgressState = {
  quests: Record<string, boolean>;
  questsSkip: Record<string, boolean>;
  items: Record<string, boolean>;
  itemsSkip: Record<string, boolean>;
  walk: Record<string, boolean>;
  walkSkip: Record<string, boolean>;
  toggleQuest: (id: string) => void;
  skipQuest: (id: string) => void;
  toggleItem: (id: string) => void;
  skipItem: (id: string) => void;
  toggleWalk: (id: string) => void;
  skipWalk: (id: string) => void;
  resetAll: () => void;
  setActFilter: (act: 0 | 1 | 2 | 3) => void;
  actFilter: 0 | 1 | 2 | 3;
};

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

/** Toggle done: open→done, done→open, skipped→done */
function applyToggle(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
) {
  const isDone = !!done[id];
  const nextDone = { ...done };
  const nextSkip = { ...skip };
  if (isDone) {
    delete nextDone[id];
  } else {
    nextDone[id] = true;
    delete nextSkip[id];
  }
  return { done: nextDone, skip: nextSkip };
}

/** Toggle skip: open→skipped, skipped→open, done→skipped */
function applySkip(
  done: Record<string, boolean>,
  skip: Record<string, boolean>,
  id: string,
) {
  const isSkipped = !!skip[id];
  const nextDone = { ...done };
  const nextSkip = { ...skip };
  if (isSkipped) {
    delete nextSkip[id];
  } else {
    nextSkip[id] = true;
    delete nextDone[id];
  }
  return { done: nextDone, skip: nextSkip };
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      quests: {},
      questsSkip: {},
      items: {},
      itemsSkip: {},
      walk: {},
      walkSkip: {},
      actFilter: 0,
      toggleQuest: (id) =>
        set((s) => {
          const { done, skip } = applyToggle(s.quests, s.questsSkip, id);
          return { quests: done, questsSkip: skip };
        }),
      skipQuest: (id) =>
        set((s) => {
          const { done, skip } = applySkip(s.quests, s.questsSkip, id);
          return { quests: done, questsSkip: skip };
        }),
      toggleItem: (id) =>
        set((s) => {
          const { done, skip } = applyToggle(s.items, s.itemsSkip, id);
          return { items: done, itemsSkip: skip };
        }),
      skipItem: (id) =>
        set((s) => {
          const { done, skip } = applySkip(s.items, s.itemsSkip, id);
          return { items: done, itemsSkip: skip };
        }),
      toggleWalk: (id) =>
        set((s) => {
          const { done, skip } = applyToggle(s.walk, s.walkSkip, id);
          return { walk: done, walkSkip: skip };
        }),
      skipWalk: (id) =>
        set((s) => {
          const { done, skip } = applySkip(s.walk, s.walkSkip, id);
          return { walk: done, walkSkip: skip };
        }),
      resetAll: () =>
        set({
          quests: {},
          questsSkip: {},
          items: {},
          itemsSkip: {},
          walk: {},
          walkSkip: {},
        }),
      setActFilter: (act) => set({ actFilter: act }),
    }),
    { name: "bg3-dark-run-progress", version: 2 },
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
