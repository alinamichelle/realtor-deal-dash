import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TransactionHeader } from "@/components/TransactionHeader";
import { TransactionDetails } from "@/components/TransactionDetails";
import { TransactionTimeline } from "@/components/TransactionTimeline";
import { RelatedEntities } from "@/components/RelatedEntities";
import { RecentActivity } from "@/components/RecentActivity";
import { ActionButtons } from "@/components/ActionButtons";
import { QuickStats } from "@/components/QuickStats";
import { QuickInfoCards } from "@/components/QuickInfoCards";

export default function TransactionDetail() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1">
          <TransactionHeader />
          
          <div className="p-8 space-y-6 bg-background">
            <QuickInfoCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <TransactionTimeline />
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
        </div>
      </div>
    </SidebarProvider>
  );
}
