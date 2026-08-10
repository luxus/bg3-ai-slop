import { useMemo, useState } from "react";
import { WALKTHROUGH } from "@/lib/data/walkthrough";
import { TRICKS } from "@/lib/data/tricks";
import { ITEMS } from "@/lib/data/items";
import { MISSABLES } from "@/lib/data/missables";
import { LEVEL_PICKS, MEMBER_LABEL } from "@/lib/data/levels";

type Hit = {
  id: string;
  kind: string;
  title: string;
  body: string;
  tab: string;
};

export function SearchPanel({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [q, setQ] = useState("");

  const hits = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [] as Hit[];

    const out: Hit[] = [];
    for (const s of WALKTHROUGH) {
      const blob = `${s.title} ${s.detail} ${s.chapter}`.toLowerCase();
      if (blob.includes(query))
        out.push({
          id: s.id,
          kind: "Walk",
          title: s.title,
          body: s.detail.slice(0, 160),
          tab: "walk",
        });
    }
    for (const t of TRICKS) {
      const blob = `${t.title} ${t.detail}`.toLowerCase();
      if (blob.includes(query))
        out.push({
          id: t.id,
          kind: "Trick",
          title: t.title,
          body: t.detail.slice(0, 160),
          tab: "tricks",
        });
    }
    for (const i of ITEMS) {
      const blob = `${i.name} ${i.where} ${i.why}`.toLowerCase();
      if (blob.includes(query))
        out.push({
          id: i.id,
          kind: "Item",
          title: i.name,
          body: `${i.where} — ${i.why}`,
          tab: "items",
        });
    }
    for (const m of MISSABLES) {
      const blob = `${m.title} ${m.detail} ${m.before}`.toLowerCase();
      if (blob.includes(query))
        out.push({
          id: m.id,
          kind: "Missable",
          title: m.title,
          body: m.detail,
          tab: "missables",
        });
    }
    for (const l of LEVEL_PICKS) {
      const blob = `${l.title} ${l.picks.join(" ")} ${MEMBER_LABEL[l.member]}`.toLowerCase();
      if (blob.includes(query))
        out.push({
          id: l.id,
          kind: "Level",
          title: l.title,
          body: l.picks.join(" · "),
          tab: "levels",
        });
    }
    return out.slice(0, 40);
  }, [q]);

  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-xl font-semibold tracking-tight">Search</h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Walk, tricks, items, missables, levels.
        </p>
      </header>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. Night Walkers, Command, Ethel…"
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm"
        autoFocus
      />
      <div className="space-y-2">
        {hits.map((h) => (
          <button
            key={`${h.kind}-${h.id}`}
            type="button"
            onClick={() => onNavigate(h.tab)}
            className="w-full text-left rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-border-strong)]"
          >
            <p className="text-xs uppercase tracking-wide text-[var(--color-subtle)]">
              {h.kind}
            </p>
            <p className="font-medium mt-0.5">{h.title}</p>
            <p className="text-sm text-[var(--color-muted)] mt-1 line-clamp-2">
              {h.body}
            </p>
          </button>
        ))}
        {q.trim().length >= 2 && !hits.length ? (
          <p className="text-sm text-[var(--color-muted)]">No matches.</p>
        ) : null}
      </div>
    </div>
  );
}
