import { TrendingUp, TrendingDown, DollarSign, Home, Users, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const kpis = [
  {
    title: "Active Transactions",
    value: "12",
    change: "+3",
    trend: "up",
    icon: FileText,
    bgColor: "bg-info/10",
    iconColor: "text-info",
  },
  {
    title: "Active Listings",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Home,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Total Clients",
    value: "34",
    change: "+5",
    trend: "up",
    icon: Users,
    bgColor: "bg-success/10",
    iconColor: "text-success",
  },
  {
    title: "YTD Revenue",
    value: "$285K",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export function DashboardKPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="p-6 hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium">{kpi.title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold text-foreground">{kpi.value}</h3>
                <span className={`text-sm font-medium flex items-center gap-1 ${kpi.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                  {kpi.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {kpi.change}
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
              <kpi.icon className={`h-6 w-6 ${kpi.iconColor}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
