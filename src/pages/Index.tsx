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
        
        <main className="flex-1 bg-background overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-7 py-6">
            {/* Greeting */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-[22px] font-normal tracking-tight text-foreground">
                  Good morning, <strong className="font-semibold">John</strong>
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Friday, February 28 · 3 tasks due today
                </p>
              </div>
              {/* Goal Ring */}
              <div className="text-center">
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                    <circle cx="28" cy="28" r="24" fill="none" stroke="hsl(var(--success))" strokeWidth="3" strokeDasharray={`${0.68 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-medium text-foreground">68%</span>
                </div>
                <p className="text-[9px] text-muted-foreground mt-1">Daily Goal</p>
              </div>
            </div>

            {/* KPIs */}
            <div className="mb-5">
              <DashboardKPIs />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 mb-4">
              {/* Main column */}
              <div className="space-y-4">
                <RecentTransactions />
                <QuickActions />
              </div>

              {/* Side column */}
              <div className="space-y-3">
                <TaskList />
                <UpcomingEvents />
              </div>
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <RecentActivity />
              <div className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Performance</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg border border-success/10">
                    <div>
                      <p className="text-xs text-muted-foreground">Avg. Close Time</p>
                      <p className="text-xl font-semibold font-mono text-foreground">32 days</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-success font-medium">-5 days</p>
                      <p className="text-[10px] text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-info/5 rounded-lg border border-info/10">
                    <div>
                      <p className="text-xs text-muted-foreground">Close Rate</p>
                      <p className="text-xl font-semibold font-mono text-foreground">78%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-info font-medium">+8%</p>
                      <p className="text-[10px] text-muted-foreground">vs last month</p>
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