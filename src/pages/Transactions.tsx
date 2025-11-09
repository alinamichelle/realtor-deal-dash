import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, TrendingUp, TrendingDown, DollarSign, Award, Users, Minus, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

// Mock data
const kpiData = {
  total: 2041,
  active: 36,
  underContract: 3,
  closed: 1913,
  cancelled: 1
};

const transactions = [
  {
    id: 2294,
    type: "Purchase",
    status: "Closed",
    address: "123 Street Blvd",
    primaryAgent: "Erica Barrientez",
    closedPrice: 369881.00,
    closedDate: "11/03/2025",
    missingDrive: true,
    noIntake: true
  },
  {
    id: 2299,
    type: "Sale",
    status: "Active",
    address: "456 Oak Avenue",
    primaryAgent: "John May",
    listPrice: 990000.00,
    adom: 12,
    isDraft: true,
    missingDrive: true,
    noIntake: true
  },
  {
    id: 2297,
    type: "Sale",
    status: "Active",
    address: "789 Pine Street",
    primaryAgent: "Jared Fader",
    listPrice: 825000.00,
    adom: 8,
    isDraft: true,
    missingDrive: true,
    noIntake: true
  },
  {
    id: 2295,
    type: "Purchase",
    status: "Under Contract",
    address: "321 Maple Drive",
    primaryAgent: "Anthony Gibson",
    contractPrice: 1225000.00,
    expectedCloseDate: "12/15/2025",
    missingDrive: true,
    noIntake: false
  }
];

const topAgents = [
  { name: "Erica Barrientez", volume: 12500000, deals: 28, trend: "up" },
  { name: "Anthony Gibson", volume: 9800000, deals: 24, trend: "up" },
  { name: "John May", volume: 8200000, deals: 19, trend: "same" },
  { name: "Jared Fader", volume: 7100000, deals: 17, trend: "down" },
  { name: "Kyle Eden", volume: 6500000, deals: 15, trend: "up" }
];

const monthlyData = [
  { month: "Jan", volume: 2100000, deals: 12 },
  { month: "Feb", volume: 2800000, deals: 15 },
  { month: "Mar", volume: 3200000, deals: 18 },
  { month: "Apr", volume: 2900000, deals: 16 },
  { month: "May", volume: 3800000, deals: 21 },
  { month: "Jun", volume: 4200000, deals: 24 }
];

export default function Transactions() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [volumeKpiIndex, setVolumeKpiIndex] = useState(0);
  const [agentKpiIndex, setAgentKpiIndex] = useState(0);

  // Auto-rotate volume KPIs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVolumeKpiIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate agent KPIs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentKpiIndex((prev) => (prev + 1) % topAgents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const volumeKpis = [
    { title: "Total Volume YTD", value: "$22.8M", change: "+18.5%", data: monthlyData },
    { title: "Avg Transaction", value: "$446K", change: "+12.3%", data: monthlyData.map(d => ({ ...d, volume: d.volume / d.deals })) },
    { title: "Commission Earned", value: "$684K", change: "+22.1%", data: monthlyData.map(d => ({ ...d, volume: d.volume * 0.03 })) }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Closed": return "bg-success/10 text-success border-success/20";
      case "Active": return "bg-info/10 text-info border-info/20";
      case "Under Contract": return "bg-caution/10 text-caution border-caution/20";
      case "Cancelled": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const maxVolume = Math.max(...monthlyData.map(d => d.volume));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold">Transactions</h1>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-6 max-w-[1600px] mx-auto">

        {/* Compact Analytics - Robinhood Style */}
        <div className="grid grid-cols-5 gap-4">
          {/* Mini Volume Chart - Rotating KPIs */}
          <Card className="col-span-3 p-4 relative overflow-hidden">
            <div 
              key={volumeKpiIndex}
              className="animate-fade-in"
            >
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <div className="text-2xl font-bold">{volumeKpis[volumeKpiIndex].value}</div>
                  <div className="text-xs text-muted-foreground">{volumeKpis[volumeKpiIndex].title}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-success">
                  <TrendingUp className="h-3 w-3" />
                  {volumeKpis[volumeKpiIndex].change}
                </div>
              </div>
              <div className="h-16 flex items-end justify-between gap-1.5">
                {volumeKpis[volumeKpiIndex].data.map((data) => {
                  const currentMax = Math.max(...volumeKpis[volumeKpiIndex].data.map(d => d.volume));
                  return (
                    <div key={data.month} className="flex-1 flex flex-col justify-end items-center gap-1">
                      <div 
                        className="w-full bg-foreground/80 hover:bg-foreground rounded-t transition-all min-h-[4px]"
                        style={{ height: `${(data.volume / currentMax) * 100}%` }}
                      />
                      <span className="text-[9px] text-muted-foreground">{data.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 flex gap-1">
              {volumeKpis.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 w-1 rounded-full transition-all ${
                    idx === volumeKpiIndex ? 'bg-foreground w-3' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </Card>

          {/* Top Agent Mini Card - Rotating Agents */}
          <Card className="col-span-2 p-4 relative overflow-hidden">
            <div
              key={agentKpiIndex}
              className="animate-fade-in"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {agentKpiIndex === 0 ? 'Top Agent' : `#${agentKpiIndex + 1} Agent`}
                  </div>
                  <div className="text-sm font-semibold">{topAgents[agentKpiIndex].name}</div>
                </div>
                {topAgents[agentKpiIndex].trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                {topAgents[agentKpiIndex].trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                {topAgents[agentKpiIndex].trend === "same" && <Minus className="h-4 w-4 text-muted-foreground" />}
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Volume</span>
                  <span className="font-semibold">{formatCurrency(topAgents[agentKpiIndex].volume)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Deals</span>
                  <span className="font-semibold">{topAgents[agentKpiIndex].deals}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Avg</span>
                  <span className="font-semibold">{formatCurrency(Math.round(topAgents[agentKpiIndex].volume / topAgents[agentKpiIndex].deals))}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 flex gap-1">
              {topAgents.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 w-1 rounded-full transition-all ${
                    idx === agentKpiIndex ? 'bg-foreground w-3' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="space-y-4">
            <Input 
              placeholder="Search transactions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-xl"
            />
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="under-contract">Under Contract</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="purchase">Purchase</SelectItem>
                  <SelectItem value="sale">Sale</SelectItem>
                  <SelectItem value="lease">Lease</SelectItem>
                </SelectContent>
              </Select>

              <Button>Filter</Button>
            </div>
          </div>
        </Card>

        {/* Tab Filters */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start bg-muted/30 p-1">
            <TabsTrigger value="all">All ({kpiData.total})</TabsTrigger>
            <TabsTrigger value="active-listings">Active Listings ({kpiData.active})</TabsTrigger>
            <TabsTrigger value="under-contract">Under Contract ({kpiData.underContract})</TabsTrigger>
            <TabsTrigger value="pending">Pending (0)</TabsTrigger>
            <TabsTrigger value="closed">Closed ({kpiData.closed})</TabsTrigger>
            <TabsTrigger value="withdrawn">Withdrawn ({kpiData.cancelled})</TabsTrigger>
            <TabsTrigger value="active-leases">Active Leases (0)</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-6">

        {/* Transactions Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-semibold text-sm">Transaction</th>
                  <th className="text-left p-4 font-semibold text-sm">Agent</th>
                  <th className="text-left p-4 font-semibold text-sm">Pricing</th>
                  <th className="text-left p-4 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => {
                  const getStatusDot = (status: string) => {
                    // No dot for closed transactions
                    if (status === "Closed") {
                      return null;
                    }
                    
                    switch (status) {
                      case "Active":
                        return <div className="h-2 w-2 rounded-full bg-info animate-pulse" />;
                      case "Under Contract":
                        return <div className="h-2 w-2 rounded-full bg-purple-500" />;
                      case "Cancelled":
                        return <div className="h-2 w-2 rounded-full bg-destructive" />;
                      default:
                        return <div className="h-2 w-2 rounded-full bg-muted-foreground" />;
                    }
                  };

                  return (
                    <tr key={transaction.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getStatusDot(transaction.status)}
                            <span className="font-semibold">{transaction.address}</span>
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                            {transaction.type}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">{transaction.primaryAgent}</div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {/* Closed transactions - show closed price */}
                          {transaction.closedPrice && (
                            <>
                              <div className="text-lg font-bold">
                                {formatCurrency(transaction.closedPrice)}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Closed: {transaction.closedDate}
                              </div>
                            </>
                          )}
                          {/* Active Sale/Listing - show list price and ADOM */}
                          {transaction.status === "Active" && transaction.type === "Sale" && transaction.listPrice && (
                            <>
                              <div className="text-lg font-bold">
                                {formatCurrency(transaction.listPrice)}
                              </div>
                              {transaction.adom !== undefined && (
                                <div className="text-xs text-muted-foreground">
                                  ADOM: {transaction.adom} days
                                </div>
                              )}
                            </>
                          )}
                          {/* Active Purchase - show list price and expected close */}
                          {transaction.status === "Active" && transaction.type === "Purchase" && transaction.listPrice && (
                            <>
                              <div className="text-lg font-bold">
                                {formatCurrency(transaction.listPrice)}
                              </div>
                              {transaction.expectedCloseDate && (
                                <div className="text-xs text-muted-foreground">
                                  Expected: {transaction.expectedCloseDate}
                                </div>
                              )}
                            </>
                          )}
                          {/* Under Contract - show contract price and expected close */}
                          {transaction.status === "Under Contract" && transaction.contractPrice && (
                            <>
                              <div className="text-lg font-bold">
                                {formatCurrency(transaction.contractPrice)}
                              </div>
                              {transaction.expectedCloseDate && (
                                <div className="text-xs text-muted-foreground">
                                  Expected: {transaction.expectedCloseDate}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                          <div className="flex gap-1">
                            {transaction.missingDrive && (
                              <span className="text-[10px] text-destructive">Missing Drive</span>
                            )}
                            {transaction.noIntake && transaction.missingDrive && (
                              <span className="text-[10px] text-muted-foreground">•</span>
                            )}
                            {transaction.noIntake && (
                              <span className="text-[10px] text-muted-foreground">No Intake</span>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
          </TabsContent>
          
          <TabsContent value="active-listings" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Active Listings will be shown here</p>
          </TabsContent>
          
          <TabsContent value="under-contract" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Under Contract transactions will be shown here</p>
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Pending transactions will be shown here</p>
          </TabsContent>
          
          <TabsContent value="closed" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Closed transactions will be shown here</p>
          </TabsContent>
          
          <TabsContent value="withdrawn" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Withdrawn transactions will be shown here</p>
          </TabsContent>
          
          <TabsContent value="active-leases" className="space-y-6 mt-6">
            <p className="text-muted-foreground">Active Leases will be shown here</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
