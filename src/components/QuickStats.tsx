import { TrendingUp } from "lucide-react";

export function QuickStats() {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-6">Quick Stats</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Days on Market</div>
            <div className="text-3xl font-bold text-foreground">—</div>
          </div>
          <div className="p-3 bg-blue-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Transaction Age</div>
            <div className="text-3xl font-bold text-success">41</div>
            <div className="text-xs text-muted-foreground mt-1">days</div>
          </div>
          <div className="p-3 bg-success/20 rounded-lg">
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
        </div>
      </div>
    </div>
  );
}
