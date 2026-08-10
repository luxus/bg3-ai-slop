import { ROUTE } from "@/lib/data/route";
import { LEVEL_PICKS, MEMBER_LABEL } from "@/lib/data/levels";
import { FIGHTS } from "@/lib/data/fights";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Hit = {
  id: string;
  title: string;
  subtitle: string;
  tab: string;
};

type Props = {
  onNavigate?: (tab: string) => void;
};

export function SearchPanel({ onNavigate }: Props) {
  const [q, setQ] = useState("");

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [] as Hit[];

    const out: Hit[] = [];

    for (const s of ROUTE) {
      const hay = `${s.do} ${s.detail} ${s.chapter}`.toLowerCase();
      if (hay.includes(needle)) {
        out.push({
          id: s.id,
          title: s.do,
          subtitle: s.chapter,
          tab: "route",
        });
      }
    }

    for (const l of LEVEL_PICKS) {
      const hay = `${l.title} ${l.picks.join(" ")} ${l.note ?? ""} ${MEMBER_LABEL[l.member]}`.toLowerCase();
      if (hay.includes(needle)) {
        out.push({
          id: l.id,
          title: `L${l.level} · ${l.title}`,
          subtitle: MEMBER_LABEL[l.member],
          tab: "party",
        });
      }
    }

    for (const f of FIGHTS) {
      const hay = `${f.title} ${f.goal} ${f.when}`.toLowerCase();
      if (hay.includes(needle)) {
        out.push({
          id: f.id,
          title: f.title,
          subtitle: `Act ${f.act} · ${f.kind}`,
          tab: "fights",
        });
      }
    }

    return out.slice(0, 40);
  }, [q]);

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search route, levels, fights…"
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 py-2 text-sm text-[var(--color-fg)]"
      />
      <p className="text-xs text-[var(--color-subtle)]">
        Route, party level-ups, fights.
      </p>
      <ul className="space-y-2">
        {hits.map((h) => (
          <li key={h.id}>
            <Button
              variant="secondary"
              className="w-full justify-start h-auto py-2"
              onClick={() => onNavigate?.(h.tab)}
            >
              <span className="text-left">
                <span className="block font-medium">{h.title}</span>
                <span className="block text-xs text-[var(--color-muted)]">
                  {h.subtitle} · {h.tab}
                </span>
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
