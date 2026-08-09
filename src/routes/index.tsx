import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewPanel } from "@/components/overview-panel";
import { PartyPanel } from "@/components/party-panel";
import { QuestsPanel } from "@/components/quests-panel";
import { ItemsPanel } from "@/components/items-panel";
import { CombatPanel } from "@/components/combat-panel";
import { ProofPanel } from "@/components/proof-panel";
import { WalkthroughPanel } from "@/components/walkthrough-panel";
import { TricksPanel } from "@/components/tricks-panel";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-[calc(var(--grok-banner-h,0px)+1rem)] sm:px-6">
        <header className="mb-6 space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Baldur's Gate 3
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dark Run Companion
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Walk · tricks · party · loot · proof
          </p>
        </header>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="sticky top-[var(--grok-banner-h,0px)] z-10 backdrop-blur-sm bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)]">
            <TabsTrigger value="overview">Home</TabsTrigger>
            <TabsTrigger value="walk">Walk</TabsTrigger>
            <TabsTrigger value="tricks">Tricks</TabsTrigger>
            <TabsTrigger value="party">Party</TabsTrigger>
            <TabsTrigger value="quests">Quests</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="combat">Combat</TabsTrigger>
            <TabsTrigger value="proof">Proof</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewPanel onNavigate={setTab} />
          </TabsContent>
          <TabsContent value="walk">
            <WalkthroughPanel />
          </TabsContent>
          <TabsContent value="tricks">
            <TricksPanel />
          </TabsContent>
          <TabsContent value="party">
            <PartyPanel />
          </TabsContent>
          <TabsContent value="quests">
            <QuestsPanel />
          </TabsContent>
          <TabsContent value="items">
            <ItemsPanel />
          </TabsContent>
          <TabsContent value="combat">
            <CombatPanel />
          </TabsContent>
          <TabsContent value="proof">
            <ProofPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
