import { useEffect, useState } from "react";
import { useProgress } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  fetchGithubUser,
  getStoredGistId,
  getStoredToken,
  gistUrl,
  pullGist,
  pushGist,
  setStoredGistId,
  setStoredToken,
} from "@/lib/github-gist";
import { loadCloudProgress, saveCloudProgress } from "@/lib/progress-api";
import {
  authEnabled,
  GROK_PROVIDERS,
  signIn,
  signOut,
} from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  Cloud,
  Download,
  Upload,
  LogOut,
  ExternalLink,
  Loader2,
} from "lucide-react";

export function SyncPanel() {
  const exportSnapshot = useProgress((s) => s.exportSnapshot);
  const importSnapshot = useProgress((s) => s.importSnapshot);
  const resetAll = useProgress((s) => s.resetAll);
  const { user, isPending } = useCurrentUserState();

  const [tokenInput, setTokenInput] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [login, setLogin] = useState<string | null>(null);
  const [gistId, setGistId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [importText, setImportText] = useState("");
  const [cloudUpdatedAt, setCloudUpdatedAt] = useState<string | null>(null);
  const [signInBusy, setSignInBusy] = useState<string | null>(null);

  useEffect(() => {
    const t = getStoredToken();
    const g = getStoredGistId();
    setToken(t);
    setGistId(g);
    if (t) {
      fetchGithubUser(t)
        .then((u) => setLogin(u.login))
        .catch(() =>
          setStatus("Saved GitHub token invalid — paste a new one."),
        );
    }
  }, []);

  useEffect(() => {
    if (!user || user.isDevFallback) return;
    let cancelled = false;
    loadCloudProgress()
      .then((r) => {
        if (cancelled) return;
        setCloudUpdatedAt(r.updatedAt);
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  async function doCloudPush() {
    setBusy(true);
    setStatus("");
    try {
      const payloadJson = JSON.stringify(exportSnapshot());
      const r = await saveCloudProgress({ data: { payloadJson } });
      setCloudUpdatedAt(r.updatedAt);
      setStatus(`Saved to your account (${r.updatedAt}).`);
    } catch (e) {
      setStatus(
        e instanceof Error
          ? e.message
          : "Cloud save failed — sign in with Google or X first.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function doCloudPull() {
    setBusy(true);
    setStatus("");
    try {
      const r = await loadCloudProgress();
      if (!r.payloadJson) {
        setStatus("No cloud save yet — Push from this device first.");
        setCloudUpdatedAt(null);
        return;
      }
      const data = JSON.parse(r.payloadJson);
      importSnapshot(data);
      setCloudUpdatedAt(r.updatedAt);
      setStatus(`Loaded cloud save (${r.updatedAt ?? "ok"}).`);
    } catch (e) {
      setStatus(
        e instanceof Error
          ? e.message
          : "Cloud load failed — sign in with Google or X first.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleSignIn(providerId: string) {
    setSignInBusy(providerId);
    setStatus("");
    try {
      await signIn(providerId, { callbackURL: "/", errorCallbackURL: "/" });
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Sign-in failed");
    } finally {
      setSignInBusy(null);
    }
  }

  async function connectGithub() {
    setBusy(true);
    setStatus("");
    try {
      const t = tokenInput.trim();
      if (!t) throw new Error("Paste a GitHub token first.");
      const u = await fetchGithubUser(t);
      setStoredToken(t);
      setToken(t);
      setLogin(u.login);
      setTokenInput("");
      setStatus(`GitHub connected as @${u.login}`);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Connect failed");
    } finally {
      setBusy(false);
    }
  }

  function disconnectGithub() {
    setStoredToken(null);
    setStoredGistId(null);
    setToken(null);
    setLogin(null);
    setGistId(null);
    setStatus("GitHub disconnected. Local + account progress kept.");
  }

  async function doGistPush() {
    if (!token) return;
    setBusy(true);
    setStatus("");
    try {
      const payload = {
        version: 4,
        exportedAt: new Date().toISOString(),
        data: exportSnapshot() as unknown as Record<string, unknown>,
      };
      const id = await pushGist(token, payload);
      setGistId(id);
      setStatus(`Pushed to private gist ${id.slice(0, 8)}…`);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Push failed");
    } finally {
      setBusy(false);
    }
  }

  async function doGistPull() {
    if (!token) return;
    setBusy(true);
    setStatus("");
    try {
      const payload = await pullGist(token);
      if (!payload?.data) {
        setStatus("No gist found yet — Push first to create one.");
        return;
      }
      importSnapshot(payload.data as Parameters<typeof importSnapshot>[0]);
      setGistId(getStoredGistId());
      setStatus(`Pulled save from gist (${payload.exportedAt ?? "ok"})`);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Pull failed");
    } finally {
      setBusy(false);
    }
  }

  function downloadJson() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 4,
            exportedAt: new Date().toISOString(),
            data: exportSnapshot(),
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `bg3-dark-run-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function applyImport() {
    try {
      const parsed = JSON.parse(importText);
      const data = parsed.data ?? parsed;
      importSnapshot(data);
      setStatus("Imported JSON into local progress.");
      setImportText("");
    } catch {
      setStatus("Invalid JSON.");
    }
  }

  const signedIn = Boolean(user && !user.isDevFallback);
  const showAuth = authEnabled;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Sync & backup</h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-2xl">
          Progress saves in this browser.{" "}
          <strong className="text-[var(--color-fg)] font-medium">
            Sign in with Google or X
          </strong>{" "}
          to store it on your account. Optional GitHub Gist still available.
        </p>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[var(--color-surface)] p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-[var(--color-primary)]" />
          <h3 className="font-medium">Account cloud (Google / X)</h3>
          <Badge variant="success">Recommended</Badge>
        </div>

        {isPending ? (
          <p className="text-sm text-[var(--color-muted)] flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Checking session…
          </p>
        ) : signedIn ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              {user?.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent-soft)] text-sm font-medium">
                  {(user?.displayName ?? user?.primaryEmail ?? "?").charAt(0)}
                </span>
              )}
              <div>
                <p className="font-medium text-sm">
                  {user?.displayName ?? "Signed in"}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {user?.primaryEmail ?? "Account linked"}
                  {cloudUpdatedAt
                    ? ` · cloud: ${cloudUpdatedAt.slice(0, 19)}`
                    : " · no cloud save yet"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={doCloudPush} disabled={busy}>
                <Upload className="h-4 w-4" />
                Push to account
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={doCloudPull}
                disabled={busy}
              >
                <Download className="h-4 w-4" />
                Pull from account
              </Button>
              {showAuth ? (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => void signOut("/")}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              ) : null}
            </div>
            <p className="text-xs text-[var(--color-subtle)]">
              Push overwrites cloud with this device. Pull overwrites this
              device with cloud.
            </p>
          </div>
        ) : showAuth ? (
          <div className="space-y-3">
            <p className="text-sm text-[var(--color-muted)]">
              Sign in once — checklist is private to your account.
            </p>
            <div className="flex flex-wrap gap-2">
              {GROK_PROVIDERS.map((p) => (
                <Button
                  key={p.providerId}
                  size="sm"
                  variant="secondary"
                  disabled={signInBusy !== null}
                  onClick={() => void handleSignIn(p.providerId)}
                >
                  {signInBusy === p.providerId ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  Continue with {p.label}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-[var(--color-muted)]">
            Auth is disabled in this environment — use JSON or Gist below.
          </p>
        )}
      </section>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">GitHub Gist (optional)</h3>
          <Badge variant="secondary">Token</Badge>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
          Extra backup if you prefer a gist. Not required when using Google/X.
        </p>

        {login ? (
          <div className="space-y-3">
            <p className="text-sm">
              Connected as <span className="font-medium">@{login}</span>
              {gistId ? (
                <>
                  {" "}
                  ·{" "}
                  <a
                    href={gistUrl(gistId)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--color-primary)]"
                  >
                    open gist <ExternalLink className="h-3 w-3" />
                  </a>
                </>
              ) : null}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={doGistPush} disabled={busy}>
                <Upload className="h-4 w-4" />
                Push to Gist
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={doGistPull}
                disabled={busy}
              >
                <Download className="h-4 w-4" />
                Pull from Gist
              </Button>
              <Button size="sm" variant="secondary" onClick={disconnectGithub}>
                <LogOut className="h-4 w-4" />
                Disconnect
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <a
              href="https://github.com/settings/tokens/new?scopes=gist&description=BG3%20Dark%20Run%20Companion"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm text-[var(--color-primary)] items-center gap-1"
            >
              Create classic token (gist scope)
              <ExternalLink className="h-3 w-3" />
            </a>
            <input
              type="password"
              autoComplete="off"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              placeholder="ghp_… or github_pat_…"
              className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm"
            />
            <Button size="sm" onClick={connectGithub} disabled={busy}>
              Connect GitHub
            </Button>
          </div>
        )}
      </section>

      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-3">
        <h3 className="font-medium">Export / import JSON</h3>
        <p className="text-sm text-[var(--color-muted)]">
          Offline file backup — no login needed.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={downloadJson}>
            Download JSON
          </Button>
        </div>
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Paste exported JSON here…"
          rows={4}
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-xs font-mono"
        />
        <Button size="sm" variant="secondary" onClick={applyImport}>
          Import JSON
        </Button>
      </section>


      <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-3">
        <h3 className="font-medium">Reset progress</h3>
        <p className="text-sm text-[var(--color-muted)]">
          Clears checklist marks. Session history is kept.
        </p>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            if (confirm("Reset all checklist progress?")) {
              resetAll();
              setStatus("Progress reset.");
            }
          }}
        >
          Reset all progress
        </Button>
      </section>

      {status ? (
        <p className="text-sm text-[var(--color-muted)] whitespace-pre-wrap rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 py-2">
          {status}
        </p>
      ) : null}
    </div>
  );
}
