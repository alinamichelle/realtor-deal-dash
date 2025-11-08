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

          {/* Client Cards */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {clients.map((client) => (
                <div
                  key={client.id}
                  onMouseEnter={() => setHoveredClient(client.id)}
                  onMouseLeave={() => setHoveredClient(null)}
                  className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                >
                  {/* Top Row - Name and Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[hsl(var(--charcoal))] group-hover:text-[hsl(var(--coral))] transition-colors duration-200 truncate">
                        {client.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide ${
                          client.role === 'Buyer' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-pink-50 text-pink-700 border border-pink-200'
                        }`}>
                          {client.role}
                        </span>
                        {client.isPastClient && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide bg-gray-50 text-gray-600 border border-gray-200">
                            Past Client
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                      client.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-50 text-gray-600 border border-gray-200'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                        client.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse' : 'bg-gray-400'
                      }`} />
                      {client.status}
                    </span>
                  </div>

                  {/* Contact Info Grid */}
                  <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">Email</div>
                        <div className="text-[13px] text-gray-900 font-medium truncate">{client.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">Phone</div>
                        <div className="text-[13px] text-gray-900 font-medium font-mono tracking-tight">{client.phone}</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Source</div>
                      <div className="text-[13px] font-semibold text-gray-900">{client.source}</div>
                      {client.agent && (
                        <div className="text-[11px] text-gray-500 mt-0.5">{client.agent}</div>
                      )}
                    </div>
                    
                    <div>
                      <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Transactions</div>
                      <div className={`text-[20px] font-bold tabular-nums ${
                        client.transactions > 0 ? 'text-[hsl(var(--charcoal))]' : 'text-gray-300'
                      }`}>
                        {client.transactions}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Last Active</div>
                      <div className="text-[13px] font-semibold text-gray-900 tabular-nums">{client.lastActivity}</div>
                    </div>
                  </div>

                  {/* Quick Actions - Appears on hover */}
                  <div className={`absolute top-3 right-3 flex items-center gap-1 transition-all duration-200 ${
                    hoveredClient === client.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                  }`}>
                    <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 active:scale-95 shadow-sm">
                      <Mail className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 active:scale-95 shadow-sm">
                      <Phone className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 active:scale-95 shadow-sm">
                      <MoreHorizontal className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[hsl(var(--coral))] to-[hsl(var(--rust))] rounded-l-xl transition-all duration-300 ${
                    hoveredClient === client.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`} />
                </div>
              ))}
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
