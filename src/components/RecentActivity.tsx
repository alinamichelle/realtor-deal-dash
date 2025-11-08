import { Clock } from "lucide-react";

const activities = [
  {
    title: "Transaction created",
    time: "Sep 28 at 8:54 PM",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 last:pb-0 border-b border-border last:border-0">
            <div className="p-2 bg-muted rounded-lg mt-0.5">
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground">{activity.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
