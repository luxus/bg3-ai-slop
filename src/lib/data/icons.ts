/**
 * Back-compat re-exports.
 * Prefer `@/lib/data/terms` (name + icon + link) for new code.
 */

export {
  lookupIcon,
  lookupTerm,
  lookupLink,
  TERMS,
  TERMS_COUNT as ICON_DB_SIZE,
  type Term,
} from "@/lib/data/terms";
