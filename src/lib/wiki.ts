/**
 * Wiki helpers — resolve chips via TERMS database (name, icon, link).
 */

import { lookupTerm, type Term } from "@/lib/data/terms";

export function extractWikiName(raw: string): string | null {
  const t = lookupTerm(raw);
  return t?.name ?? null;
}

export function wikiPageUrl(name: string): string {
  const t = lookupTerm(name);
  if (t) return t.link;
  const slug = name.trim().replace(/\s+/g, "_");
  return `https://bg3.wiki/wiki/${encodeURIComponent(slug)}`;
}

export function resolveIcon(nameOrRaw: string): string | null {
  return lookupTerm(nameOrRaw)?.icon ?? null;
}

export type WikiRef = {
  label: string;
  href: string;
  icon: string | null;
  linkable: boolean;
  term: Term | null;
};

export function toWikiRef(raw: string): WikiRef {
  const term = lookupTerm(raw);
  if (!term) {
    return { label: raw, href: "", icon: null, linkable: false, term: null };
  }
  return {
    label: raw,
    href: term.link,
    icon: term.icon,
    linkable: true,
    term,
  };
}
