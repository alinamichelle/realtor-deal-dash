import { ArrowRight, Home, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
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

export function RecentTransactions() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        <Button variant="ghost" size="sm" asChild>
          <NavLink to="/transactions">
            View All
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </Button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Home className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{transaction.property}</h4>
                  <p className="text-xs text-muted-foreground">{transaction.city}</p>
                </div>
                <Badge variant="outline">{transaction.type}</Badge>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm font-bold text-primary">{transaction.price}</span>
                <Badge
                  variant={
                    transaction.status === "Under Contract"
                      ? "default"
                      : transaction.status === "Active"
                      ? "secondary"
                      : "outline"
                  }
                  className="text-xs"
                >
                  {transaction.status}
                </Badge>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>{transaction.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all"
                    style={{ width: `${transaction.progress}%` }}
                  />
                </div>
              </div>
            </div>
            <NavLink to={`/transaction/${transaction.id}`}>
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </NavLink>
          </div>
        ))}
      </div>
    </Card>
  );
}
