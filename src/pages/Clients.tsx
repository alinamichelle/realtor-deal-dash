import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone,
  MoreHorizontal,
  Plus,
  Upload,
  Search,
  ArrowUpDown,
  Filter
} from "lucide-react";
import { useState } from "react";

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const filters = ["All", "Active", "Recent", "Past Clients", "Buyer", "Seller", "Investor"];

  const clients = [
    {
      id: 1,
      name: "Rachael Hyde",
      initials: "RH",
      avatarColor: "bg-purple-500",
      role: "Buyer",
      email: "ailinrhyde@gmail.com",
      phone: "(512) 740-6879",
      source: "Other",
      agent: "Matt Cordova",
      transactions: 1,
      lastActivity: "Jun 25, 2022",
      status: "Active",
      isPastClient: true
    },
    {
      id: 2,
      name: "Vil Singh",
      initials: "VS",
      avatarColor: "bg-indigo-500",
      role: "Buyer",
      email: "alvilsingh@gmail.com",
      phone: "(217) 390-1382",
      source: "Referral",
      agent: "Anthony Gibson",
      transactions: 0,
      lastActivity: "Dec 6, 2023",
      status: "New",
      isPastClient: false
    },
    {
      id: 3,
      name: "Grant Bouldin",
      initials: "GB",
      avatarColor: "bg-violet-500",
      role: "Seller",
      email: "grant@sangatx.com",
      phone: "(949) 698-3498",
      source: "Open House",
      transactions: 0,
      lastActivity: "Sep 15, 2025",
      status: "New",
      isPastClient: false
    },
    {
      id: 4,
      name: "Sarah Martinez",
      initials: "SM",
      avatarColor: "bg-pink-500",
      role: "Buyer",
      email: "sarah.m@email.com",
      phone: "(512) 555-0199",
      source: "Referral",
      agent: "Matt Cordova",
      transactions: 2,
      lastActivity: "Jan 10, 2025",
      status: "Active",
      isPastClient: true
    },
    {
      id: 5,
      name: "Michael Chen",
      initials: "MC",
      avatarColor: "bg-blue-500",
      role: "Seller",
      email: "mchen@tech.com",
      phone: "(415) 555-0234",
      source: "Website",
      agent: "Anthony Gibson",
      transactions: 1,
      lastActivity: "Feb 3, 2025",
      status: "Active",
      isPastClient: false
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 bg-white">
          {/* Header */}
          <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-[hsl(var(--charcoal))] mb-1">
                    Clients
                  </h1>
                  <p className="text-[13px] text-gray-500 tracking-[-0.01em]">
                    Manage and track your client relationships
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-9 text-[13px] font-medium">
                    <Upload className="w-3.5 h-3.5 mr-2" />
                    Import
                  </Button>
                  <Button size="sm" className="h-9 text-[13px] font-medium bg-[hsl(var(--charcoal))] hover:bg-[hsl(var(--charcoal))]/90">
                    <Plus className="w-3.5 h-3.5 mr-2" />
                    New Client
                  </Button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, or phone..."
                    className="pl-9 h-9 text-[13px] border-gray-200 focus:border-gray-300 bg-white/50 transition-all"
                  />
                </div>
                
                <div className="flex gap-1.5">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                        activeFilter === filter
                          ? 'bg-[hsl(var(--charcoal))] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="h-6 w-px bg-gray-200" />

                <Button variant="outline" size="sm" className="h-9 text-[12px] font-medium">
                  <Filter className="w-3.5 h-3.5 mr-1.5" />
                  More filters
                </Button>
              </div>
            </div>
          </header>

          {/* Client List */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6">
            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50/50 border-b border-gray-200">
                <div className="col-span-3 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Client</div>
                <div className="col-span-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Contact</div>
                <div className="col-span-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Source</div>
                <div className="col-span-1 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Deals</div>
                <div className="col-span-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Last Active</div>
                <div className="col-span-1 text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Status</div>
                <div className="col-span-1"></div>
              </div>

              {/* Client Rows */}
              <div>
                {clients.map((client, index) => (
                  <div
                    key={client.id}
                    onMouseEnter={() => setHoveredClient(client.id)}
                    onMouseLeave={() => setHoveredClient(null)}
                    className={`group relative grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50/80 transition-all duration-200 cursor-pointer ${
                      index !== clients.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    {/* Client Info */}
                    <div className="col-span-3 flex items-center min-w-0">
                      <div className="min-w-0 flex-1">
                        <div className="text-[15px] font-semibold tracking-[-0.01em] text-[hsl(var(--charcoal))] group-hover:text-[hsl(var(--coral))] transition-colors duration-200 truncate">
                          {client.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase ${
                            client.role === 'Buyer' 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                              : 'bg-pink-50 text-pink-700 border border-pink-200'
                          }`}>
                            {client.role}
                          </span>
                          {client.isPastClient && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-gray-50 text-gray-600 border border-gray-200">
                              Past Client
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 flex flex-col justify-center min-w-0">
                      <div className="text-[13px] text-gray-900 font-medium truncate tracking-[-0.01em]">{client.email}</div>
                      <div className="text-[13px] text-gray-500 font-mono tracking-tight mt-0.5">{client.phone}</div>
                    </div>

                    {/* Source */}
                    <div className="col-span-2 flex flex-col justify-center">
                      <div className="text-[13px] text-gray-900 font-semibold tracking-[-0.01em]">{client.source}</div>
                      {client.agent && (
                        <div className="text-[12px] text-gray-500 mt-0.5">
                          <span className="text-gray-400">via</span> {client.agent}
                        </div>
                      )}
                    </div>

                    {/* Transactions */}
                    <div className="col-span-1 flex items-center">
                      <div className={`text-[18px] font-bold tabular-nums tracking-tight ${
                        client.transactions > 0 ? 'text-[hsl(var(--charcoal))]' : 'text-gray-300'
                      }`}>
                        {client.transactions}
                      </div>
                    </div>

                    {/* Last Activity */}
                    <div className="col-span-2 flex items-center">
                      <div className="text-[13px] text-gray-700 font-medium tabular-nums tracking-[-0.01em]">{client.lastActivity}</div>
                    </div>

                    {/* Status */}
                    <div className="col-span-1 flex items-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide transition-all ${
                        client.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          client.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse' : 'bg-gray-400'
                        }`} />
                        {client.status}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="col-span-1 flex items-center justify-end">
                      <div className={`flex items-center gap-0.5 transition-all duration-200 ${
                        hoveredClient === client.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                      }`}>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-150 active:scale-95">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-150 active:scale-95">
                          <Phone className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-150 active:scale-95">
                          <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Left edge indicator */}
                    <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[hsl(var(--coral))] to-[hsl(var(--rust))] transition-all duration-200 ${
                      hoveredClient === client.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Empty state */}
            {clients.length === 0 && (
              <div className="text-center py-20">
                <div className="text-[15px] text-gray-400 mb-3 tracking-[-0.01em]">No clients found</div>
                <Button size="sm" variant="outline" className="h-9">
                  <Plus className="w-3.5 h-3.5 mr-2" />
                  Add your first client
                </Button>
              </div>
            )}
          </div>

          {/* Footer stats */}
          <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white/90 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-3 flex items-center justify-between text-[12px] text-gray-500 tracking-[-0.01em]">
              <div className="flex items-center gap-6">
                <span className="font-medium text-gray-700">{clients.length} <span className="text-gray-500 font-normal">clients</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-emerald-700">{clients.filter(c => c.status === 'Active').length} <span className="text-gray-500 font-normal">active</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-gray-700">{clients.filter(c => c.isPastClient).length} <span className="text-gray-500 font-normal">past</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-gray-700">{clients.reduce((sum, c) => sum + c.transactions, 0)} <span className="text-gray-500 font-normal">transactions</span></span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Updated just now</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Clients;
