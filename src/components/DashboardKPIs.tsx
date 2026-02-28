import { TrendingUp, TrendingDown, DollarSign, Home, Users, FileText } from "lucide-react";

const kpis = [
  {
    title: "Active Deals",
    value: "12",
    change: "+3",
    trend: "up",
    icon: FileText,
  },
  {
    title: "Active Listings",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Home,
  },
  {
    title: "Total Clients",
    value: "34",
    change: "+5",
    trend: "up",
    icon: Users,
  },
  {
    title: "Revenue MTD",
    value: "$285K",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
  },
];

export function DashboardKPIs() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {kpis.map((kpi) => (
        <div key={kpi.title} className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{kpi.title}</span>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold font-mono text-foreground">{kpi.value}</span>
            <span className={`text-xs font-medium flex items-center gap-0.5 ${kpi.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
              {kpi.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {kpi.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}