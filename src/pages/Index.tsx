import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  FileText, 
  Flag,
  CheckCircle2,
  Clock,
  Home
} from "lucide-react";

const Index = () => {
  // Mock transaction data - Dream team: Shu's data-heavy but elegant approach
  const transaction = {
    id: "2173",
    address: "123 Main Street",
    city: "Austin, TX 78701",
    status: "Active",
    price: "$450,000",
    closeDate: "12/15/2024",
    created: "09/01/2024",
    agent: {
      name: "Sarah Johnson",
      initials: "SJ",
      email: "sarah.j@realtyhaus.com"
    },
    client: {
      name: "Michael Chen",
      initials: "MC",
      email: "mchen@email.com",
      phone: "(512) 555-0123"
    },
    property: {
      beds: 3,
      baths: 2.5,
      sqft: 2150,
      type: "Single Family"
    },
    financial: {
      listingAgent: "2.5%",
      buyerAgent: "2.5%",
      estimatedCommission: "$22,500"
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-[hsl(var(--silver))]">
          {/* Header - Rauno: All key info visible, subtle gradient */}
          <header className="sticky top-0 z-10 bg-gradient-to-br from-[hsl(var(--charcoal))] to-slate-700 shadow-md">
            <div className="max-w-[1400px] mx-auto px-8 py-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[hsl(var(--coral))] flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                    {transaction.agent.initials}
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-white leading-tight">
                      {transaction.address}
                    </h1>
                    <div className="text-sm text-white/70 mt-0.5">
                      {transaction.city}
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-lg text-xs font-semibold backdrop-blur-sm">
                  {transaction.status}
                </div>
              </div>
              
              {/* Timeline bar - Paco: Clean, scannable info at a glance */}
              <div className="flex items-center gap-8 pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                    Sale Price
                  </span>
                  <span className="text-lg font-semibold text-[hsl(var(--success))]">
                    {transaction.price}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                    Est. Close
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {transaction.closeDate}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                    Created
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {transaction.created}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                    Transaction ID
                  </span>
                  <span className="text-lg font-semibold text-white">
                    #{transaction.id}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Content - Steven: Smart information architecture, clean hierarchy */}
          <div className="max-w-[1400px] mx-auto px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
              
              {/* Left Column */}
              <div className="space-y-6">
                
                {/* Transaction Parties - Shu: Clickable, data-rich cards */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  <div className="px-5 py-4 border-b border-[hsl(var(--silver))]">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Transaction Parties
                    </h2>
                  </div>
                  <div className="p-5 space-y-6">
                    {/* Agents */}
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-3 pb-2 border-b border-[hsl(var(--silver))]">
                        Agents
                      </div>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-3 bg-[hsl(var(--silver))] rounded-lg hover:bg-gray-200 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-0.5 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[hsl(var(--coral))] flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                          {transaction.agent.initials}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">
                            {transaction.agent.name}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            Primary Agent
                          </div>
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {transaction.agent.email}
                        </div>
                      </a>
                    </div>
                    
                    {/* Clients */}
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-3 pb-2 border-b border-[hsl(var(--silver))]">
                        Clients
                      </div>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 p-3 bg-[hsl(var(--silver))] rounded-lg hover:bg-gray-200 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-0.5"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[hsl(var(--info))] flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                          {transaction.client.initials}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">
                            {transaction.client.name}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            Primary Client
                          </div>
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {transaction.client.email}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Property Details - Emil: Polished, perfectly-timed animations */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  <div className="px-5 py-4 border-b border-[hsl(var(--silver))]">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Property Details
                    </h2>
                  </div>
                  <div className="p-5">
                    {/* Specs */}
                    <div className="flex gap-6 p-4 bg-[hsl(var(--silver))] rounded-lg mb-5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-semibold text-[hsl(var(--charcoal))]">
                          {transaction.property.beds}
                        </span>
                        <span className="text-xs text-gray-500">beds</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-semibold text-[hsl(var(--charcoal))]">
                          {transaction.property.baths}
                        </span>
                        <span className="text-xs text-gray-500">baths</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-semibold text-[hsl(var(--charcoal))]">
                          {transaction.property.sqft}
                        </span>
                        <span className="text-xs text-gray-500">sqft</span>
                      </div>
                    </div>
                    
                    <div className="space-y-0">
                      <div className="flex py-3 border-b border-[hsl(var(--silver))]">
                        <span className="w-[120px] text-xs text-gray-500">Property Type</span>
                        <span className="flex-1 text-sm font-medium text-[hsl(var(--charcoal))]">
                          {transaction.property.type}
                        </span>
                      </div>
                      <div className="flex py-3 border-b border-[hsl(var(--silver))]">
                        <span className="w-[120px] text-xs text-gray-500">Year Built</span>
                        <span className="flex-1 text-sm font-medium text-[hsl(var(--charcoal))]">2018</span>
                      </div>
                      <div className="flex py-3 border-b border-[hsl(var(--silver))]">
                        <span className="w-[120px] text-xs text-gray-500">Lot Size</span>
                        <span className="flex-1 text-sm font-medium text-[hsl(var(--charcoal))]">0.25 acres</span>
                      </div>
                      <div className="flex py-3">
                        <span className="w-[120px] text-xs text-gray-500">MLS #</span>
                        <span className="flex-1 text-sm font-medium text-[hsl(var(--charcoal))]">ATX-2024-9876</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Progress - Rauno: Smooth animations that guide naturally */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  <div className="px-5 py-4 border-b border-[hsl(var(--silver))]">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Transaction Timeline
                    </h2>
                  </div>
                  <div className="p-5">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--success))] flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div className="w-0.5 h-full bg-[hsl(var(--success))] mt-2"></div>
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">Listing Agreement Signed</div>
                          <div className="text-xs text-gray-500 mt-0.5">09/01/2024</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--success))] flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">Property Listed</div>
                          <div className="text-xs text-gray-500 mt-0.5">09/05/2024</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--coral))] flex items-center justify-center shadow-sm animate-pulse">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-[hsl(var(--charcoal))]">Under Contract</div>
                          <div className="text-xs text-gray-500 mt-0.5">Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Financial Details - Steven: Beautiful, usable analytics */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  <div className="px-5 py-4 border-b border-[hsl(var(--silver))]">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Financial Details
                    </h2>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="p-3 bg-[hsl(var(--silver))] rounded-lg">
                        <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                          Listing Agent
                        </div>
                        <div className="text-lg font-semibold text-[hsl(var(--charcoal))]">
                          {transaction.financial.listingAgent}
                        </div>
                      </div>
                      <div className="p-3 bg-[hsl(var(--silver))] rounded-lg">
                        <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                          Buyer's Agent
                        </div>
                        <div className="text-lg font-semibold text-[hsl(var(--charcoal))]">
                          {transaction.financial.buyerAgent}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-0">
                      <div className="flex py-3 border-b border-[hsl(var(--silver))]">
                        <span className="flex-1 text-xs text-gray-500">Est. Commission</span>
                        <span className="text-sm font-semibold text-[hsl(var(--success))]">
                          {transaction.financial.estimatedCommission}
                        </span>
                      </div>
                      <div className="flex py-3 border-b border-[hsl(var(--silver))]">
                        <span className="flex-1 text-xs text-gray-500">Earnest Money</span>
                        <span className="text-sm font-medium text-[hsl(var(--charcoal))]">$5,000</span>
                      </div>
                      <div className="flex py-3">
                        <span className="flex-1 text-xs text-gray-500">Option Period</span>
                        <span className="text-sm font-medium text-[hsl(var(--charcoal))]">10 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions - Paco: Fast, keyboard-accessible */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4 space-y-2">
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold transition-all hover:translate-y-[-1px]" variant="default">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Client
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Client
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Contract
                    </Button>
                    <Button className="w-full justify-start h-11 text-[13px] font-semibold" variant="outline">
                      <Flag className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </div>

                {/* Related Items - Emil: Perfect component feel */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                  <div className="px-5 py-4 border-b border-[hsl(var(--silver))]">
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Related
                    </h2>
                  </div>
                  <div className="p-5 space-y-3">
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[hsl(var(--silver))] transition-all duration-150">
                      <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                        <Home className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[hsl(var(--charcoal))] truncate">
                          Property Listing
                        </div>
                        <div className="text-xs text-gray-500">View on MLS</div>
                      </div>
                    </a>
                    
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-[hsl(var(--silver))] transition-all duration-150">
                      <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[hsl(var(--charcoal))] truncate">
                          Intake Form
                        </div>
                        <div className="text-xs text-gray-500">#000285</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 py-4 px-8 bg-white border-t border-[hsl(var(--silver))]">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
              <div className="flex gap-6 text-xs text-gray-500">
                <span>Created: 09/01/2024 at 10:45am</span>
                <span>Last Modified: 11/08/2024</span>
              </div>
              <Button variant="outline" size="sm" className="text-[13px] font-semibold">
                Back to Transactions
              </Button>
            </div>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
