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
          {/* Header - Linear-inspired: Minimal, functional */}
          <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="px-8 py-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h1 className="text-2xl font-semibold text-[hsl(var(--charcoal))] mb-0.5">
                    Clients
                  </h1>
                  <p className="text-sm text-gray-500">
                    {clients.length} total clients
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-9">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                  <Button size="sm" className="h-9">
                    <Plus className="w-4 h-4 mr-2" />
                    New Client
                  </Button>
                </div>
              </div>

              {/* Filters and Search - Rauno: Smooth, minimal */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-9 h-9 border-gray-200 focus:border-gray-300 transition-colors"
                  />
                </div>
                
                <div className="flex gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        activeFilter === filter
                          ? 'bg-[hsl(var(--charcoal))] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>
          </header>

          {/* Client List - Linear-inspired table with hover interactions */}
          <div className="px-8 py-4">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-2 text-[11px] font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <div className="col-span-3">Client</div>
              <div className="col-span-2">Contact</div>
              <div className="col-span-2">Source</div>
              <div className="col-span-1">Transactions</div>
              <div className="col-span-2">Last Activity</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1"></div>
            </div>

            {/* Client Rows */}
            <div className="divide-y divide-gray-100">
              {clients.map((client) => (
                <div
                  key={client.id}
                  onMouseEnter={() => setHoveredClient(client.id)}
                  onMouseLeave={() => setHoveredClient(null)}
                  className="group relative grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-all cursor-pointer border-l-2 border-transparent hover:border-[hsl(var(--coral))]"
                >
                  {/* Client Info */}
                  <div className="col-span-3 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${client.avatarColor} flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 transition-transform group-hover:scale-105`}>
                      {client.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-[hsl(var(--charcoal))] text-sm truncate group-hover:text-[hsl(var(--coral))] transition-colors">
                        {client.name}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`text-[11px] font-medium ${
                          client.role === 'Buyer' ? 'text-green-600' : 'text-pink-600'
                        }`}>
                          {client.role}
                        </span>
                        {client.isPastClient && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="text-[11px] text-gray-500">Past Client</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="col-span-2 flex flex-col justify-center min-w-0">
                    <div className="text-[13px] text-gray-900 truncate">{client.email}</div>
                    <div className="text-[12px] text-gray-500">{client.phone}</div>
                  </div>

                  {/* Source */}
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="text-[13px] text-gray-900">{client.source}</div>
                    <div className="text-[12px] text-gray-500">Agent: {client.agent}</div>
                  </div>

                  {/* Transactions */}
                  <div className="col-span-1 flex items-center">
                    <div className={`text-sm font-medium ${
                      client.transactions > 0 ? 'text-[hsl(var(--charcoal))]' : 'text-gray-400'
                    }`}>
                      {client.transactions}
                    </div>
                  </div>

                  {/* Last Activity */}
                  <div className="col-span-2 flex items-center">
                    <div className="text-[13px] text-gray-600">{client.lastActivity}</div>
                  </div>

                  {/* Status */}
                  <div className="col-span-1 flex items-center">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium ${
                      client.status === 'Active'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-gray-50 text-gray-600 border border-gray-200'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        client.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                      {client.status}
                    </span>
                  </div>

                  {/* Quick Actions - Emil: Perfect hover interactions */}
                  <div className="col-span-1 flex items-center justify-end">
                    <div className={`flex items-center gap-1 transition-all ${
                      hoveredClient === client.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}>
                      <button className="p-1.5 rounded-md hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all">
                        <Mail className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all">
                        <Phone className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all">
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Hover indicator - Rauno: Subtle animation */}
                  <div className={`absolute left-0 top-0 w-0.5 h-full bg-[hsl(var(--coral))] transition-all ${
                    hoveredClient === client.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              ))}
            </div>

            {/* Empty state hint - Paco: Minimal but helpful */}
            {clients.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-2">No clients found</div>
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add your first client
                </Button>
              </div>
            )}
          </div>

          {/* Footer stats - Shu: Clean data presentation */}
          <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-8 py-3 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-6">
                <span>{clients.length} clients</span>
                <span>{clients.filter(c => c.status === 'Active').length} active</span>
                <span>{clients.filter(c => c.isPastClient).length} past clients</span>
                <span>{clients.reduce((sum, c) => sum + c.transactions, 0)} total transactions</span>
              </div>
              <div className="flex items-center gap-4">
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
