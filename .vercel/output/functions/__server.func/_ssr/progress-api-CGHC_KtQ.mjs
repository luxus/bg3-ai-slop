import { i as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { I as string, N as object } from "../_libs/@better-auth/core+[...].mjs";
import { r as getSql } from "./db-C-BYXuBX.mjs";
import { t as authMiddleware } from "./middleware-9Lu3hghq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-api-CGHC_KtQ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Cloud progress is stored as a JSON string so TanStack Start's serializable
* return type stays happy (arbitrary Record is not considered serializable).
*/
var loadCloudProgress_createServerFn_handler = createServerRpc({
	id: "a00be39d12134be3078604ccdc5a900b2438bd4de3e81cbb1a4c6c4922149bd4",
	name: "loadCloudProgress",
	filename: "src/lib/progress-api.ts"
}, (opts) => loadCloudProgress.__executeServer(opts));
var loadCloudProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(loadCloudProgress_createServerFn_handler, async ({ context }) => {
	const row = (await (await getSql())`
      select payload, updated_at::text as updated_at
      from user_progress
      where user_id = ${context.userId}
      limit 1
    `)[0];
	if (!row) return {
		payloadJson: null,
		updatedAt: null
	};
	return {
		payloadJson: typeof row.payload === "string" ? row.payload : JSON.stringify(row.payload ?? {}),
		updatedAt: row.updated_at ?? null
	};
});
var saveCloudProgress_createServerFn_handler = createServerRpc({
	id: "8cc59d602ce87678659eb67fe2746964c6fd04359b6b477a058e06ace2e10228",
	name: "saveCloudProgress",
	filename: "src/lib/progress-api.ts"
}, (opts) => saveCloudProgress.__executeServer(opts));
var saveCloudProgress = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => object({ payloadJson: string().min(2).max(2e6) }).parse(input)).handler(saveCloudProgress_createServerFn_handler, async ({ context, data }) => {
	JSON.parse(data.payloadJson);
	return { updatedAt: (await (await getSql())`
      insert into user_progress (user_id, payload, updated_at)
      values (${context.userId}, ${data.payloadJson}::jsonb, now())
      on conflict (user_id) do update
        set payload = excluded.payload,
            updated_at = now()
      returning updated_at::text as updated_at
    `)[0]?.updated_at ?? (/* @__PURE__ */ new Date()).toISOString() };
});
//#endregion
export { loadCloudProgress_createServerFn_handler, saveCloudProgress_createServerFn_handler };
