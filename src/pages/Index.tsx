import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-[hsl(var(--silver))] to-gray-100">
          <div className="max-w-[1400px] mx-auto px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[hsl(var(--charcoal))] mb-4">
                Agent Dashboard
              </h1>
              <p className="text-lg text-gray-600">
                Coming soon - Your personalized home dashboard
              </p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
