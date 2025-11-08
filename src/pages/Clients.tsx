import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone,
  Eye,
  Plus,
  Upload,
  Search
} from "lucide-react";
import { useState } from "react";

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Active", 
    "Recent",
    "Past Clients",
    "Buyer Client",
    "Seller Client",
    "Investor Client"
  ];

  // Mock client data
  const clients = [
    {
      id: 1,
      name: "Rachael (Ai Lin) Hyde",
      initials: "R",
      avatarColor: "bg-purple-500",
      type: "Client",
      role: "Buyer",
      clientSince: "September 2025",
      lastTransaction: "06/25/2022",
      email: "ailinrhyde@gmail.com",
      phone: "(512) 740-6879",
      source: "Other",
      agent: "Matt Cordova",
      transactions: 1,
      status: "New",
      statusNote: "Added contact and MS in Command. Set up o...",
      isPastClient: true
    },
    {
      id: 2,
      name: "Vil (Alvil) Singh",
      initials: "V",
      avatarColor: "bg-indigo-500",
      type: "Client",
      role: "Buyer",
      clientSince: "September 2025",
      email: "alvilsingh@gmail.com",
      phone: "(217) 390-1382",
      source: "Referral",
      agent: "Anthony Gibson",
      transactions: 0,
      status: "New",
      statusNote: "zapier: ❌ Christmas Party RSVPd: No (Dec 6,2023...",
      isPastClient: false
    },
    {
      id: 3,
      name: "Grant (Bouldin)",
      initials: "G",
      avatarColor: "bg-violet-500",
      type: "Client",
      role: "Seller",
      clientSince: "September 2025",
      email: "grant@sangatx.com",
      phone: "(949) 698-3498",
      source: "Open House",
      transactions: 0,
      status: "New",
      statusNote: "",
      isPastClient: false
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-gradient-to-b from-[hsl(var(--silver))] to-gray-100">
          {/* Header - Paco: Clean, functional header */}
          <header className="sticky top-0 z-10 bg-white border-b border-[hsl(var(--silver))] shadow-sm">
            <div className="max-w-[1400px] mx-auto px-8 py-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-[28px] font-semibold text-[hsl(var(--charcoal))] mb-1">
                    Clients
                  </h1>
                  <p className="text-sm text-gray-600">
                    Manage your client database and relationships
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="default" className="h-10">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Contacts
                  </Button>
                  <Button variant="default" size="default" className="h-10">
                    <Plus className="w-4 h-4 mr-2" />
                    New Client
                  </Button>
                </div>
              </div>

              {/* Filter tabs - Paco: Minimal, keyboard-friendly */}
              <div className="flex items-center gap-3 mb-4">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeFilter === filter
                        ? 'bg-[hsl(var(--coral))] text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="flex gap-2">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-10 h-10"
                  />
                </div>
                <Button variant="outline" size="default" className="h-10">
                  Search
                </Button>
              </div>
            </div>
          </header>

          {/* Client List */}
          <div className="max-w-[1400px] mx-auto px-8 py-6">
            <div className="space-y-4">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full ${client.avatarColor} flex items-center justify-center text-white text-lg font-semibold flex-shrink-0`}>
                      {client.initials}
                    </div>

                    {/* Main Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-[hsl(var(--charcoal))]">
                          {client.name}
                        </h3>
                        <span className="border border-blue-200 bg-blue-50/30 text-blue-700 px-2 py-0.5 rounded text-[10px] font-medium uppercase">
                          {client.type}
                        </span>
                        <span className={`border px-2 py-0.5 rounded text-[10px] font-medium uppercase ${
                          client.role === 'Buyer' 
                            ? 'border-green-200 bg-green-50/30 text-green-700'
                            : 'border-pink-200 bg-pink-50/30 text-pink-700'
                        }`}>
                          {client.role}
                        </span>
                      </div>

                      <div className="text-[13px] text-gray-600 mb-4">
                        Client since {client.clientSince}
                        {client.lastTransaction && (
                          <span className="text-gray-400"> • Last transaction: {client.lastTransaction}</span>
                        )}
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-4 gap-6 mb-4">
                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
                            Contact
                          </div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">
                            {client.email}
                          </div>
                          <div className="text-[13px] text-gray-600">
                            {client.phone}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
                            Source
                          </div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">
                            {client.source}
                          </div>
                          <div className="text-[13px] text-gray-600">
                            Agent: {client.agent}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
                            Transactions
                          </div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium">
                            {client.transactions} {client.transactions === 1 ? 'transaction' : 'transactions'}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">
                            Status
                          </div>
                          <div className="text-[13px] text-[hsl(var(--charcoal))] font-medium mb-0.5">
                            {client.status}
                          </div>
                          {client.statusNote && (
                            <div className="text-[11px] text-gray-500 truncate">
                              Note: {client.statusNote}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        {client.isPastClient && (
                          <span className="border border-green-200 bg-green-50/30 text-green-700 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                            ✓ Past Client
                          </span>
                        )}
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <Mail className="w-3 h-3 mr-1.5" />
                          Email
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <Phone className="w-3 h-3 mr-1.5" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <Eye className="w-3 h-3 mr-1.5" />
                          View Transactions
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 text-xs border-[hsl(var(--coral))]/30 text-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/5"
                        >
                          New Transaction
                        </Button>
                      </div>
                    </div>

                    {/* Actions on the right */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="default" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Clients;
