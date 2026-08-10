import { APPROVAL, COMPANION_LABEL } from "@/lib/data/approval";
import { useProgress, getStatus, countProgress } from "@/lib/store";
import { CheckRow } from "@/components/check-row";
import { DualProgress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ApprovalPanel() {
  const { approval, approvalSkip, toggleApproval, skipApproval } =
    useProgress();
  const [who, setWho] = useState<string>("all");

  const filtered =
    who === "all" ? APPROVAL : APPROVAL.filter((a) => a.companion === who);

  const stats = countProgress(
    filtered.map((a) => a.id),
    approval,
    approvalSkip,
  );

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Companion approval
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Dark-run leanings for Astarion, Shadowheart, Minthara. Soft social
            guide.
          </p>
        </div>
        <DualProgress donePct={stats.donePct} skipPct={stats.skipPct} />
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={who === "all" ? "default" : "secondary"}
            onClick={() => setWho("all")}
          >
            All
          </Button>
          {(Object.keys(COMPANION_LABEL) as (keyof typeof COMPANION_LABEL)[]).map(
            (c) => (
              <Button
                key={c}
                size="sm"
                variant={who === c ? "default" : "secondary"}
                onClick={() => setWho(c)}
              >
                {COMPANION_LABEL[c]}
              </Button>
            ),
          )}
        </div>
      </header>

      <div className="space-y-2">
        {filtered.map((a) => (
          <CheckRow
            key={a.id}
            id={`ap-${a.id}`}
            status={getStatus(approval, approvalSkip, a.id)}
            onToggle={() => toggleApproval(a.id)}
            onSkip={() => skipApproval(a.id)}
            title={a.title}
            subtitle={`${a.effect}\n${a.tip}`}
            badges={[
              { label: COMPANION_LABEL[a.companion], variant: "secondary" },
              {
                label:
                  a.tone === "up"
                    ? "Likes"
                    : a.tone === "down"
                      ? "Dislikes"
                      : "Note",
                variant:
                  a.tone === "up"
                    ? "success"
                    : a.tone === "down"
                      ? "danger"
                      : "outline",
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
}
