import { Clock } from "lucide-react";

const activities = [
  { title: "Transaction created", time: "Sep 28 at 8:54 PM" },
];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border-sub">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Recent Activity</span>
      </div>
      <div className="divide-y divide-border-sub">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            <div className="p-2 bg-surface-cream rounded-lg mt-0.5 shrink-0">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground">{activity.title}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}