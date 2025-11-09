import { useState } from "react";
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
import { Plus, TrendingUp, TrendingDown, DollarSign, Award, Users, Minus } from "lucide-react";
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
    isDraft: true,
    missingDrive: true,
    noIntake: true
  },
  {
    id: 2295,
    type: "Purchase",
    status: "Closed",
    address: "321 Maple Drive",
    primaryAgent: "Anthony Gibson",
    closedPrice: 1225000.00,
    closedDate: "10/31/2025",
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
          <h1 className="text-3xl font-bold">Transactions</h1>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-5 gap-4">
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-slate-200">
            <div className="text-sm text-muted-foreground mb-2">Total</div>
            <div className="text-4xl font-bold text-slate-700 dark:text-slate-200">{kpiData.total}</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
            <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">Active</div>
            <div className="text-4xl font-bold text-blue-700 dark:text-blue-300">{kpiData.active}</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200">
            <div className="text-sm text-amber-700 dark:text-amber-300 mb-2">Under Contract</div>
            <div className="text-4xl font-bold text-amber-700 dark:text-amber-300">{kpiData.underContract}</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
            <div className="text-sm text-green-700 dark:text-green-300 mb-2">Closed</div>
            <div className="text-4xl font-bold text-green-700 dark:text-green-300">{kpiData.closed}</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200">
            <div className="text-sm text-red-700 dark:text-red-300 mb-2">Cancelled</div>
            <div className="text-4xl font-bold text-red-700 dark:text-red-300">{kpiData.cancelled}</div>
          </Card>
        </div>

        {/* Compact Analytics - Robinhood Style */}
        <div className="grid grid-cols-5 gap-4">
          {/* Mini Volume Chart */}
          <Card className="col-span-3 p-4">
            <div className="flex items-baseline justify-between mb-3">
              <div>
                <div className="text-2xl font-bold">$22.8M</div>
                <div className="text-xs text-muted-foreground">Total Volume YTD</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-success">
                <TrendingUp className="h-3 w-3" />
                +18.5%
              </div>
            </div>
            <div className="h-16 flex items-end justify-between gap-1.5">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col justify-end items-center gap-1">
                  <div 
                    className="w-full bg-foreground/80 hover:bg-foreground rounded-t transition-all min-h-[4px]"
                    style={{ height: `${(data.volume / maxVolume) * 100}%` }}
                  />
                  <span className="text-[9px] text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Agent Mini Card */}
          <Card className="col-span-2 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Top Agent</div>
                <div className="text-sm font-semibold">{topAgents[0].name}</div>
              </div>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Volume</span>
                <span className="font-semibold">{formatCurrency(topAgents[0].volume)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Deals</span>
                <span className="font-semibold">{topAgents[0].deals}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Avg</span>
                <span className="font-semibold">$425K</span>
              </div>
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
                    switch (status) {
                      case "Active":
                        return <div className="h-2 w-2 rounded-full bg-info animate-pulse" />;
                      case "Under Contract":
                        return <div className="h-2 w-2 rounded-full bg-purple-500" />;
                      case "Closed":
                        return <div className="h-2 w-2 rounded-full bg-success" />;
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
                          {transaction.closedPrice && (
                            <>
                              <div className="text-lg font-bold text-success">
                                {formatCurrency(transaction.closedPrice)}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Closed: {transaction.closedDate}
                              </div>
                            </>
                          )}
                          {transaction.listPrice && (
                            <>
                              <div className="text-lg font-bold">
                                {formatCurrency(transaction.listPrice)}
                              </div>
                              {transaction.isDraft && (
                                <div className="text-xs text-muted-foreground">Draft</div>
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
      </div>
    </div>
  );
}
