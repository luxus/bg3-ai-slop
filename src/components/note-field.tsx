import { useProgress } from "@/lib/store";

export function NoteField({ id, placeholder }: { id: string; placeholder?: string }) {
  const note = useProgress((s) => s.notes[id] ?? "");
  const setNote = useProgress((s) => s.setNote);

  return (
    <textarea
      value={note}
      onChange={(e) => setNote(id, e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={placeholder ?? "Personal note…"}
      rows={2}
      className="mt-2 w-full resize-y rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
    />
  );
}
