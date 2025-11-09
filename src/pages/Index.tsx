import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardKPIs } from "@/components/DashboardKPIs";
import { TaskList } from "@/components/TaskList";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { QuickActions } from "@/components/QuickActions";
import { RecentTransactions } from "@/components/RecentTransactions";
import { RecentActivity } from "@/components/RecentActivity";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-silver to-muted/30">
          <div className="max-w-[1600px] mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome Back! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your business today
              </p>
            </div>

            {/* KPIs */}
            <div className="mb-8">
              <DashboardKPIs />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Left Column - Takes 2/3 */}
              <div className="lg:col-span-2 space-y-6">
                <RecentTransactions />
                <QuickActions />
              </div>

              {/* Right Column - Takes 1/3 */}
              <div className="space-y-6">
                <TaskList />
                <UpcomingEvents />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <div className="bg-card rounded-xl border border-border shadow-sm p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Performance Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Close Time</p>
                      <p className="text-2xl font-bold text-success">32 days</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-success font-medium">-5 days</p>
                      <p className="text-xs text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Close Rate</p>
                      <p className="text-2xl font-bold text-primary">78%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">+8%</p>
                      <p className="text-xs text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
