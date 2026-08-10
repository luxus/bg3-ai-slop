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
import { LevelsPanel } from "@/components/levels-panel";
import { MissablesPanel } from "@/components/missables-panel";
import { WherePanel } from "@/components/where-panel";
import { ApprovalPanel } from "@/components/approval-panel";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { IllithidPanel } from "@/components/illithid-panel";
import { SyncPanel } from "@/components/sync-panel";
import { SearchPanel } from "@/components/search-panel";
import { CampPanel } from "@/components/camp-panel";
import { VendorsPanel } from "@/components/vendors-panel";
import { SidequestsPanel } from "@/components/sidequests-panel";
import { RoutePanel } from "@/components/route-panel";
import { SessionBar } from "@/components/session-bar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [tab, setTab] = useState("route");

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-[calc(var(--grok-banner-h,0px)+1rem)] sm:px-6">
        <header className="mb-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Baldur's Gate 3 · Dark Absolute
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Do this next
            </h1>
            <p className="text-sm text-[var(--color-muted)]">
              Main path only. Other tabs = reference if stuck.
            </p>
          </div>
          <SessionBar />
        </header>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="sticky top-[var(--grok-banner-h,0px)] z-10 backdrop-blur-sm bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)] max-h-none h-auto flex-wrap">
            <TabsTrigger value="route">Route</TabsTrigger>
            <TabsTrigger value="overview">Home</TabsTrigger>
            <TabsTrigger value="levels">Levels</TabsTrigger>
            <TabsTrigger value="vendors">Buy</TabsTrigger>
            <TabsTrigger value="party">Party</TabsTrigger>
            <TabsTrigger value="camp">Camp</TabsTrigger>
            <TabsTrigger value="side">Sides</TabsTrigger>
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="where">Where</TabsTrigger>
            <TabsTrigger value="walk">Walk+</TabsTrigger>
            <TabsTrigger value="missables">Miss</TabsTrigger>
            <TabsTrigger value="tricks">Tricks</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="loadouts">Gear</TabsTrigger>
            <TabsTrigger value="approval">Approve</TabsTrigger>
            <TabsTrigger value="illithid">Tadpole</TabsTrigger>
            <TabsTrigger value="quests">Quests</TabsTrigger>
            <TabsTrigger value="combat">Combat</TabsTrigger>
            <TabsTrigger value="sync">Sync</TabsTrigger>
            <TabsTrigger value="proof">Proof</TabsTrigger>
          </TabsList>

          <TabsContent value="route">
            <RoutePanel />
          </TabsContent>
          <TabsContent value="overview">
            <OverviewPanel onNavigate={setTab} />
          </TabsContent>
          <TabsContent value="search">
            <SearchPanel onNavigate={setTab} />
          </TabsContent>
          <TabsContent value="where">
            <WherePanel />
          </TabsContent>
          <TabsContent value="camp">
            <CampPanel />
          </TabsContent>
          <TabsContent value="walk">
            <WalkthroughPanel />
          </TabsContent>
          <TabsContent value="side">
            <SidequestsPanel />
          </TabsContent>
          <TabsContent value="vendors">
            <VendorsPanel />
          </TabsContent>
          <TabsContent value="missables">
            <MissablesPanel />
          </TabsContent>
          <TabsContent value="levels">
            <LevelsPanel />
          </TabsContent>
          <TabsContent value="tricks">
            <TricksPanel />
          </TabsContent>
          <TabsContent value="items">
            <ItemsPanel />
          </TabsContent>
          <TabsContent value="loadouts">
            <LoadoutsPanel />
          </TabsContent>
          <TabsContent value="party">
            <PartyPanel />
          </TabsContent>
          <TabsContent value="approval">
            <ApprovalPanel />
          </TabsContent>
          <TabsContent value="illithid">
            <IllithidPanel />
          </TabsContent>
          <TabsContent value="quests">
            <QuestsPanel />
          </TabsContent>
          <TabsContent value="combat">
            <CombatPanel />
          </TabsContent>
          <TabsContent value="sync">
            <SyncPanel />
          </TabsContent>
          <TabsContent value="proof">
            <ProofPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
