import { useState } from "react";
import { lookupTerm, TERMS } from "@/lib/data/terms";
import { ExternalLink } from "lucide-react";

type Props = {
  text: string;
  size?: "sm" | "md";
  /** Show only matched term name (no suffix notes) */
  short?: boolean;
};

const SORTED_NAMES = [...TERMS]
  .map((t) => t.name)
  .sort((a, b) => b.length - a.length);

/**
 * Icon + name + wiki link from TERMS db.
 * "Hex Warrior: medium armour…" → [icon] Hex Warrior · medium armour…
 */
export function WikiChip({ text, size = "sm", short = false }: Props) {
  const term = lookupTerm(text);
  const [imgOk, setImgOk] = useState(true);

  const iconSize = size === "md" ? 28 : 22;
  const box = size === "md" ? "h-7 w-7" : "h-[22px] w-[22px]";

  let main = text;
  let suffix = "";
  if (term) {
    main = term.name;
    if (!short) {
      const lower = text.toLowerCase();
      const idx = lower.indexOf(term.name.toLowerCase());
      if (idx >= 0) {
        const after = text
          .slice(idx + term.name.length)
          .replace(/^[\s:·\-–—→>]+/, "")
          .trim();
        if (after) suffix = after;
      }
    }
  }

  const iconEl =
    term?.icon && imgOk ? (
      <img
        src={term.icon}
        alt=""
        width={iconSize}
        height={iconSize}
        className={`shrink-0 rounded-[4px] object-contain bg-black/40 ${box}`}
        loading="lazy"
        onError={() => setImgOk(false)}
      />
    ) : (
      <span
        className={`shrink-0 rounded-[4px] bg-[var(--color-elevated)] border border-[var(--color-border)] ${box}`}
        aria-hidden
      />
    );

  const label = (
    <span className="min-w-0 leading-snug">
      <span className={term ? "text-[var(--color-fg)]" : "text-[var(--color-muted)]"}>
        {main}
      </span>
      {suffix ? (
        <span className="text-[var(--color-subtle)]"> · {suffix}</span>
      ) : null}
    </span>
  );

  const cls =
    size === "md"
      ? "inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-2.5 py-1.5 text-sm hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-accent-soft)] transition-colors max-w-full"
      : "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-elevated)] px-2 py-0.5 text-[12px] hover:border-[var(--color-border-strong)] transition-colors max-w-full";

  if (!term) {
    return (
      <span className={cls}>
        {iconEl}
        {label}
      </span>
    );
  }

  return (
    <a
      href={term.link}
      target="_blank"
      rel="noreferrer"
      className={cls}
      title={`${term.name} · ${term.kind} · bg3.wiki`}
      onClick={(e) => e.stopPropagation()}
    >
      {iconEl}
      {label}
      <ExternalLink
        className={`shrink-0 opacity-50 ${size === "md" ? "h-3.5 w-3.5" : "h-3 w-3"}`}
      />
    </a>
  );
}

export function WikiChipList({
  items,
  size = "md",
}: {
  items: string[];
  size?: "sm" | "md";
}) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <WikiChip key={t} text={t} size={size} />
      ))}
    </div>
  );
}

/** Free text with known terms as inline chips. */
export function RichWikiText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = splitByTerms(text);
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-1 gap-y-1 ${className}`}>
      {parts.map((p, i) =>
        p.kind === "term" ? (
          <WikiChip key={`${p.value}-${i}`} text={p.value} size="sm" short />
        ) : (
          <span key={`${i}-${p.value.slice(0, 16)}`} className="whitespace-pre-wrap">
            {p.value}
          </span>
        ),
      )}
    </span>
  );
}

function splitByTerms(
  text: string,
): { kind: "text" | "term"; value: string }[] {
  if (!SORTED_NAMES.length) return [{ kind: "text", value: text }];

  const lower = text.toLowerCase();
  const out: { kind: "text" | "term"; value: string }[] = [];
  let i = 0;
  while (i < text.length) {
    let hit: { len: number } | null = null;
    for (const name of SORTED_NAMES) {
      if (lower.startsWith(name.toLowerCase(), i)) {
        const beforeOk = i === 0 || /[\s([/,:]/.test(text[i - 1] ?? "");
        const after = text[i + name.length];
        const afterOk =
          after === undefined || /[\s)\]/,.:;!?'"·\-–—→]/.test(after);
        if (beforeOk && afterOk) {
          hit = { len: name.length };
          break;
        }
      }
    }
    if (hit) {
      out.push({ kind: "term", value: text.slice(i, i + hit.len) });
      i += hit.len;
    } else {
      let j = i + 1;
      while (j < text.length) {
        let any = false;
        for (const name of SORTED_NAMES) {
          if (lower.startsWith(name.toLowerCase(), j)) {
            const beforeOk = /[\s([/,:]/.test(text[j - 1] ?? " ");
            if (beforeOk) {
              any = true;
              break;
            }
          }
        }
        if (any) break;
        j += 1;
      }
      out.push({ kind: "text", value: text.slice(i, j) });
      i = j;
    }
  }
  return out;
}
