import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PartyPanel } from "@/components/party-panel";
import { FightsPanel } from "@/components/fights-panel";
import { ItemsPanel } from "@/components/items-panel";
import { WherePanel } from "@/components/where-panel";
import { SyncPanel } from "@/components/sync-panel";
import { CampPanel } from "@/components/camp-panel";
import { VendorsPanel } from "@/components/vendors-panel";
import { RoutePanel } from "@/components/route-panel";
import { SessionBar } from "@/components/session-bar";

export const Route = createFileRoute("/")({
  component: Home,
});

/**
 * Slim nav:
 * - Route / Where = walkthrough
 * - Party = builds + level-ups
 * - Fights = boss scripts
 * - Buy / Camp / Loot = reference
 * - Sync = cloud + reset
 */
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
          </div>
          <SessionBar />
        </header>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="sticky top-[var(--grok-banner-h,0px)] z-10 backdrop-blur-sm bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)] max-h-none h-auto flex-wrap">
            <TabsTrigger value="route">Route</TabsTrigger>
            <TabsTrigger value="where">Where</TabsTrigger>
            <TabsTrigger value="party">Party</TabsTrigger>
            <TabsTrigger value="fights">Fights</TabsTrigger>
            <TabsTrigger value="vendors">Buy</TabsTrigger>
            <TabsTrigger value="camp">Camp</TabsTrigger>
            <TabsTrigger value="items">Loot</TabsTrigger>
            <TabsTrigger value="sync">Sync</TabsTrigger>
          </TabsList>

          <TabsContent value="route">
            <RoutePanel />
          </TabsContent>
          <TabsContent value="where">
            <WherePanel />
          </TabsContent>
          <TabsContent value="party">
            <PartyPanel />
          </TabsContent>
          <TabsContent value="fights">
            <FightsPanel />
          </TabsContent>
          <TabsContent value="vendors">
            <VendorsPanel />
          </TabsContent>
          <TabsContent value="camp">
            <CampPanel />
          </TabsContent>
          <TabsContent value="items">
            <ItemsPanel />
          </TabsContent>
          <TabsContent value="sync">
            <SyncPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
