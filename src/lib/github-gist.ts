/**
 * Client-side GitHub Gist sync.
 * Uses a personal access token (gist scope) — no backend OAuth required.
 * Token stays in the browser (localStorage); gists are private by default.
 */

const GIST_DESC = "BG3 Dark Run Companion — progress save";
const GIST_FILE = "bg3-dark-run-progress.json";
const TOKEN_KEY = "bg3-dark-run-github-token";
const GIST_ID_KEY = "bg3-dark-run-gist-id";

export type GistPayload = {
  version: number;
  exportedAt: string;
  data: Record<string, unknown>;
};

function headers(token: string): HeadersInit {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token.trim());
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

export function getStoredGistId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(GIST_ID_KEY);
  } catch {
    return null;
  }
}

export function setStoredGistId(id: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (id) localStorage.setItem(GIST_ID_KEY, id);
    else localStorage.removeItem(GIST_ID_KEY);
  } catch {
    /* ignore */
  }
}

export async function fetchGithubUser(token: string): Promise<{
  login: string;
  avatar_url: string;
}> {
  const res = await fetch("https://api.github.com/user", {
    headers: headers(token),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`GitHub auth failed (${res.status}): ${t.slice(0, 120)}`);
  }
  return res.json();
}

async function findExistingGist(token: string): Promise<string | null> {
  // Scan first few pages of user gists for our description
  for (let page = 1; page <= 3; page++) {
    const res = await fetch(
      `https://api.github.com/gists?per_page=100&page=${page}`,
      { headers: headers(token) },
    );
    if (!res.ok) break;
    const list = (await res.json()) as {
      id: string;
      description: string | null;
    }[];
    if (!list.length) break;
    const hit = list.find((g) => g.description === GIST_DESC);
    if (hit) return hit.id;
  }
  return null;
}

export async function ensureGist(
  token: string,
  payload: GistPayload,
): Promise<string> {
  const existing = getStoredGistId() || (await findExistingGist(token));
  if (existing) {
    setStoredGistId(existing);
    return existing;
  }
  const res = await fetch("https://api.github.com/gists", {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify({
      description: GIST_DESC,
      public: false,
      files: {
        [GIST_FILE]: { content: JSON.stringify(payload, null, 2) },
      },
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Create gist failed (${res.status}): ${t.slice(0, 160)}`);
  }
  const data = (await res.json()) as { id: string };
  setStoredGistId(data.id);
  return data.id;
}

export async function pushGist(
  token: string,
  payload: GistPayload,
): Promise<string> {
  const id = await ensureGist(token, payload);
  const res = await fetch(`https://api.github.com/gists/${id}`, {
    method: "PATCH",
    headers: headers(token),
    body: JSON.stringify({
      description: GIST_DESC,
      files: {
        [GIST_FILE]: { content: JSON.stringify(payload, null, 2) },
      },
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Push gist failed (${res.status}): ${t.slice(0, 160)}`);
  }
  return id;
}

export async function pullGist(token: string): Promise<GistPayload | null> {
  let id = getStoredGistId();
  if (!id) {
    id = await findExistingGist(token);
    if (id) setStoredGistId(id);
  }
  if (!id) return null;

  const res = await fetch(`https://api.github.com/gists/${id}`, {
    headers: headers(token),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Pull gist failed (${res.status}): ${t.slice(0, 160)}`);
  }
  const data = (await res.json()) as {
    files: Record<string, { content?: string; truncated?: boolean; raw_url?: string }>;
  };
  const file = data.files[GIST_FILE] || Object.values(data.files)[0];
  if (!file) return null;
  let content = file.content;
  if (file.truncated && file.raw_url) {
    const raw = await fetch(file.raw_url, { headers: headers(token) });
    content = await raw.text();
  }
  if (!content) return null;
  return JSON.parse(content) as GistPayload;
}

export function gistUrl(id: string) {
  return `https://gist.github.com/${id}`;
}
