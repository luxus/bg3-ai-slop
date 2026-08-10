import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { z } from "zod";

/**
 * Cloud progress is stored as a JSON string so TanStack Start's serializable
 * return type stays happy (arbitrary Record is not considered serializable).
 */
export type CloudProgressResult = {
  /** Stringified ProgressSnapshot, or null if none. */
  payloadJson: string | null;
  updatedAt: string | null;
};

export const loadCloudProgress = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<CloudProgressResult> => {
    const sql = await getSql();
    const rows = await sql<{ payload: unknown; updated_at: string }>`
      select payload, updated_at::text as updated_at
      from user_progress
      where user_id = ${context.userId}
      limit 1
    `;
    const row = rows[0];
    if (!row) return { payloadJson: null, updatedAt: null };
    const payloadJson =
      typeof row.payload === "string"
        ? row.payload
        : JSON.stringify(row.payload ?? {});
    return {
      payloadJson,
      updatedAt: row.updated_at ?? null,
    };
  });

export const saveCloudProgress = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) =>
    z.object({ payloadJson: z.string().min(2).max(2_000_000) }).parse(input),
  )
  .handler(async ({ context, data }): Promise<{ updatedAt: string }> => {
    // Validate it's real JSON before storing
    JSON.parse(data.payloadJson);
    const sql = await getSql();
    const rows = await sql<{ updated_at: string }>`
      insert into user_progress (user_id, payload, updated_at)
      values (${context.userId}, ${data.payloadJson}::jsonb, now())
      on conflict (user_id) do update
        set payload = excluded.payload,
            updated_at = now()
      returning updated_at::text as updated_at
    `;
    return { updatedAt: rows[0]?.updated_at ?? new Date().toISOString() };
  });
