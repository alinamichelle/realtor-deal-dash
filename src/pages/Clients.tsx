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
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Investor", "Builder", "Homeowner"]);

  const filters = ["All", "High Priority", "Active", "Investors", "Builders", "Homeowners"];

  const toggleGroup = (type: string) => {
    setExpandedGroups(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const clients = [
    {
      id: 1,
      name: "Rachael Hyde",
      role: "Buyer",
      email: "ailinrhyde@gmail.com",
      phone: "(512) 740-6879",
      source: "Other",
      agent: "Matt Cordova",
      transactions: 1,
      lastActivity: "Jun 25, 2022",
      status: "Active",
      clientType: "Homeowner",
      priority: "medium",
      propertyValue: "$850K",
      yearsAsClient: 3
    },
    {
      id: 2,
      name: "Vil Singh",
      role: "Investor",
      email: "alvilsingh@gmail.com",
      phone: "(217) 390-1382",
      source: "Referral",
      agent: "Anthony Gibson",
      transactions: 0,
      lastActivity: "Dec 6, 2023",
      status: "Active",
      clientType: "Investor",
      priority: "high",
      propertyValue: "$2.4M",
      yearsAsClient: 1
    },
    {
      id: 3,
      name: "Grant Bouldin",
      role: "Builder",
      email: "grant@sangatx.com",
      phone: "(949) 698-3498",
      source: "Open House",
      transactions: 5,
      lastActivity: "Sep 15, 2025",
      status: "Active",
      clientType: "Builder",
      priority: "high",
      propertyValue: "$5.2M",
      yearsAsClient: 4
    },
    {
      id: 4,
      name: "Sarah Martinez",
      role: "Buyer",
      email: "sarah.m@email.com",
      phone: "(512) 555-0199",
      source: "Referral",
      agent: "Matt Cordova",
      transactions: 2,
      lastActivity: "Jan 10, 2025",
      status: "Active",
      clientType: "Homeowner",
      priority: "high",
      propertyValue: "$1.2M",
      yearsAsClient: 2
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Investor",
      email: "mchen@tech.com",
      phone: "(415) 555-0234",
      source: "Website",
      agent: "Anthony Gibson",
      transactions: 3,
      lastActivity: "Feb 3, 2025",
      status: "Active",
      clientType: "Investor",
      priority: "high",
      propertyValue: "$3.8M",
      yearsAsClient: 2
    },
    {
      id: 6,
      name: "Jennifer Park",
      role: "Seller",
      email: "jpark@email.com",
      phone: "(310) 555-9876",
      source: "Referral",
      agent: "Matt Cordova",
      transactions: 1,
      lastActivity: "Mar 2, 2023",
      status: "Inactive",
      clientType: "Moved Away",
      priority: "low",
      propertyValue: "$675K",
      yearsAsClient: 5
    },
    {
      id: 7,
      name: "David Thompson",
      role: "Builder",
      email: "david@buildco.com",
      phone: "(512) 555-4321",
      source: "Direct",
      agent: "Anthony Gibson",
      transactions: 8,
      lastActivity: "Nov 20, 2024",
      status: "Active",
      clientType: "Builder",
      priority: "high",
      propertyValue: "$12M",
      yearsAsClient: 6
    },
    {
      id: 8,
      name: "Lisa Wong",
      role: "Buyer",
      email: "lwong@tech.com",
      phone: "(408) 555-7890",
      source: "Website",
      agent: "Matt Cordova",
      transactions: 1,
      lastActivity: "Aug 12, 2023",
      status: "Inactive",
      clientType: "Moved Away",
      priority: "low",
      propertyValue: "$920K",
      yearsAsClient: 3
    }
  ];

  // Group clients by type with priority order
  const clientGroups = [
    {
      type: "Investor",
      label: "Investors",
      description: "High-value repeat buyers",
      icon: "💎",
      color: "violet",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-700",
      clients: clients.filter(c => c.clientType === "Investor")
    },
    {
      type: "Builder",
      label: "Builders & Developers",
      description: "Bulk buyers and partners",
      icon: "🏗️",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      clients: clients.filter(c => c.clientType === "Builder")
    },
    {
      type: "Homeowner",
      label: "Homeowners",
      description: "Potential sellers and upgraders",
      icon: "🏡",
      color: "emerald",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      clients: clients.filter(c => c.clientType === "Homeowner")
    },
    {
      type: "Moved Away",
      label: "Moved Away",
      description: "Former clients, referral potential",
      icon: "✈️",
      color: "gray",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-600",
      clients: clients.filter(c => c.clientType === "Moved Away")
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

          {/* Stats Overview - Robinhood-inspired subtle visualization */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6">
            <div className="grid grid-cols-4 gap-3">
              {clientGroups.map((group) => {
                const totalValue = group.clients.reduce((sum, c) => sum + parseFloat(c.propertyValue.replace(/[$MK,]/g, '').replace('M', '000').replace('K', '')), 0);
                const totalDeals = group.clients.reduce((sum, c) => sum + c.transactions, 0);
                const percentage = clients.length > 0 ? (group.clients.length / clients.length) * 100 : 0;
                
                return (
                  <div key={group.type} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{group.icon}</span>
                      <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-wider">
                        {group.label}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Count */}
                      <div>
                        <div className="text-[28px] font-bold tracking-tight text-[hsl(var(--charcoal))] leading-none">
                          {group.clients.length}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-1">
                          {percentage.toFixed(0)}% of portfolio
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${group.bgColor.replace('50', '200')} transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        
                        {/* Stats row */}
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-gray-600 font-medium">
                            {totalDeals} deals
                          </span>
                          <span className="font-semibold text-gray-900">
                            ${(totalValue / 1000).toFixed(1)}M
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Client Groups */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6 space-y-4">
            {clientGroups.map((group) => (
              <div key={group.type} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {/* Group Header */}
                <button
                  onClick={() => toggleGroup(group.type)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{group.icon}</span>
                    <div className="text-left">
                      <div className="flex items-center gap-3">
                        <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[hsl(var(--charcoal))]">
                          {group.label}
                        </h3>
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${group.bgColor} ${group.textColor} border ${group.borderColor}`}>
                          {group.clients.length} {group.clients.length === 1 ? 'client' : 'clients'}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500 mt-0.5 tracking-[-0.01em]">{group.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {group.clients.length > 0 && (
                      <div className="text-right mr-4">
                        <div className="text-[13px] font-semibold text-gray-900">
                          {group.clients.reduce((sum, c) => sum + c.transactions, 0)} deals
                        </div>
                        <div className="text-[11px] text-gray-500">
                          ${(group.clients.reduce((sum, c) => sum + parseFloat(c.propertyValue.replace(/[$MK,]/g, '').replace('M', '000').replace('K', '')), 0) / 1000).toFixed(1)}M total
                        </div>
                      </div>
                    )}
                    <div className={`transition-transform duration-200 ${expandedGroups.includes(group.type) ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Group Content */}
                {expandedGroups.includes(group.type) && group.clients.length > 0 && (
                  <div className="border-t border-gray-200">
                    {group.clients.map((client, index) => (
                      <div
                        key={client.id}
                        onMouseEnter={() => setHoveredClient(client.id)}
                        onMouseLeave={() => setHoveredClient(null)}
                        className={`group relative grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50/80 transition-all duration-200 cursor-pointer ${
                          index !== group.clients.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        {/* Priority Indicator */}
                        <div className={`absolute left-0 top-0 w-1 h-full transition-all duration-200 ${
                          client.priority === 'high' 
                            ? 'bg-gradient-to-b from-[hsl(var(--coral))] to-[hsl(var(--rust))]' 
                            : client.priority === 'medium'
                            ? 'bg-amber-400'
                            : 'bg-gray-300'
                        } ${hoveredClient === client.id ? 'opacity-100' : 'opacity-40'}`} />

                        {/* Client Info */}
                        <div className="col-span-3 flex items-center min-w-0">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <div className="text-[15px] font-semibold tracking-[-0.01em] text-[hsl(var(--charcoal))] group-hover:text-[hsl(var(--coral))] transition-colors duration-200 truncate">
                                {client.name}
                              </div>
                              {client.priority === 'high' && (
                                <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[hsl(var(--coral))]/10 text-[hsl(var(--coral))] border border-[hsl(var(--coral))]/20">
                                  Priority
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-[11px] font-medium text-gray-500">
                                {client.yearsAsClient}yr {client.yearsAsClient === 1 ? 'client' : 'client'}
                              </span>
                              <span className="text-gray-300">•</span>
                              <span className="text-[11px] font-semibold text-gray-700">
                                {client.propertyValue} portfolio
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="col-span-2 flex flex-col justify-center min-w-0">
                          <div className="text-[13px] text-gray-900 font-medium truncate tracking-[-0.01em]">{client.email}</div>
                          <div className="text-[12px] text-gray-500 font-mono tracking-tight mt-0.5">{client.phone}</div>
                        </div>

                        {/* Source & Agent */}
                        <div className="col-span-2 flex flex-col justify-center">
                          <div className="text-[13px] text-gray-900 font-semibold tracking-[-0.01em]">{client.source}</div>
                          {client.agent && (
                            <div className="text-[11px] text-gray-500 mt-0.5">
                              {client.agent}
                            </div>
                          )}
                        </div>

                        {/* Transactions */}
                        <div className="col-span-1 flex items-center">
                          <div className="text-center">
                            <div className={`text-[20px] font-bold tabular-nums tracking-tight leading-none ${
                              client.transactions > 0 ? 'text-[hsl(var(--charcoal))]' : 'text-gray-300'
                            }`}>
                              {client.transactions}
                            </div>
                            <div className="text-[9px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">deals</div>
                          </div>
                        </div>

                        {/* Last Activity */}
                        <div className="col-span-2 flex items-center">
                          <div>
                            <div className="text-[13px] text-gray-700 font-medium tabular-nums tracking-[-0.01em]">{client.lastActivity}</div>
                            <div className="text-[11px] text-gray-500 mt-0.5">Last contact</div>
                          </div>
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
                            <button className="p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all duration-150 active:scale-95">
                              <Mail className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all duration-150 active:scale-95">
                              <Phone className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all duration-150 active:scale-95">
                              <MoreHorizontal className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty group state */}
                {expandedGroups.includes(group.type) && group.clients.length === 0 && (
                  <div className="px-6 py-8 text-center border-t border-gray-200">
                    <div className="text-[13px] text-gray-400">No {group.label.toLowerCase()} yet</div>
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Footer stats */}
          <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white/90 backdrop-blur-xl z-10">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-3 flex items-center justify-between text-[12px] text-gray-500 tracking-[-0.01em]">
              <div className="flex items-center gap-6">
                <span className="font-medium text-gray-700">{clients.length} <span className="text-gray-500 font-normal">total</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-[hsl(var(--coral))]">{clients.filter(c => c.priority === 'high').length} <span className="text-gray-500 font-normal">high priority</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-gray-700">{clients.reduce((sum, c) => sum + c.transactions, 0)} <span className="text-gray-500 font-normal">total deals</span></span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-gray-700">${(clients.reduce((sum, c) => sum + parseFloat(c.propertyValue.replace(/[$MK,]/g, '').replace('M', '000').replace('K', '')), 0) / 1000).toFixed(1)}M <span className="text-gray-500 font-normal">portfolio</span></span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live sync</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Clients;
