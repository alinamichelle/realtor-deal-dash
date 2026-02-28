import { ArrowRight, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const transactions = [
  {
    id: 1,
    property: "456 Maple Avenue",
    city: "Austin, TX",
    type: "Sale",
    status: "Under Contract",
    price: "$485,000",
    progress: 75,
  },
  {
    id: 2,
    property: "789 Pine Street",
    city: "Austin, TX",
    type: "Listing",
    status: "Active",
    price: "$595,000",
    progress: 45,
  },
  {
    id: 3,
    property: "321 Oak Drive",
    city: "Round Rock, TX",
    type: "Sale",
    status: "Pending",
    price: "$425,000",
    progress: 90,
  },
];

const statusColor = (s: string) => {
  if (s === "Under Contract") return "bg-caution/10 text-caution border-caution/20";
  if (s === "Active") return "bg-info/10 text-info border-info/20";
  if (s === "Pending") return "bg-success/10 text-success border-success/20";
  return "bg-muted text-muted-foreground";
};

export function RecentTransactions() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-sub">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Active Deals</span>
        <NavLink to="/transactions" className="text-[10px] text-muted-foreground flex items-center gap-1">
          View All <ArrowRight className="h-3 w-3" />
        </NavLink>
      </div>
      <div className="divide-y divide-border-sub">
        {transactions.map((t) => (
          <NavLink
            key={t.id}
            to={`/transaction/${t.id}`}
            className="flex items-center gap-4 px-4 py-3 cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-surface-cream shrink-0">
              <Home className="h-4 w-4 text-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[13px] font-semibold text-foreground truncate">{t.property}</h4>
                <Badge variant="outline" className={`text-[10px] shrink-0 border ${statusColor(t.status)}`}>
                  {t.status}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-muted-foreground">{t.city}</span>
                <span className="text-xs font-semibold font-mono text-foreground">{t.price}</span>
              </div>
              {/* Progress bar */}
              <div className="mt-2">
                <div className="w-full bg-border rounded-full h-1">
                  <div
                    className="bg-foreground h-1 rounded-full transition-all"
                    style={{ width: `${t.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}