import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TransactionHeader } from "@/components/TransactionHeader";
import { TransactionTimeline } from "@/components/TransactionTimeline";
import { QuickInfoCards } from "@/components/QuickInfoCards";
import { QuickStats } from "@/components/QuickStats";
import { TransactionDetails } from "@/components/TransactionDetails";
import { RelatedEntities } from "@/components/RelatedEntities";
import { ActionButtons } from "@/components/ActionButtons";
import { RecentActivity } from "@/components/RecentActivity";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b border-border bg-card flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger />
          </header>

          <main className="flex-1">
            <TransactionHeader />
            
            <div className="px-8 py-6 space-y-6">
              <TransactionTimeline />
              
              <QuickInfoCards />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <TransactionDetails />
                </div>
                
                <div className="space-y-6">
                  <QuickStats />
                  <RelatedEntities />
                  <ActionButtons />
                  <RecentActivity />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
