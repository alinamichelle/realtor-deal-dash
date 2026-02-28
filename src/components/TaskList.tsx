import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tasks = [
  { title: "Follow up with Johnson listing", priority: "high", dueDate: "Today", completed: false },
  { title: "Schedule home inspection - 123 Oak St", priority: "high", dueDate: "Tomorrow", completed: false },
  { title: "Review contract for Smith property", priority: "medium", dueDate: "Dec 15", completed: false },
  { title: "Client meeting preparation", priority: "medium", dueDate: "Dec 16", completed: false },
  { title: "Update listing photos", priority: "low", dueDate: "Dec 18", completed: false },
];

const priorityDot = (p: string) => {
  if (p === "high") return "bg-destructive";
  if (p === "medium") return "bg-caution";
  return "bg-muted-foreground/40";
};

export function TaskList() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-sub">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Tasks</span>
        <span className="text-[10px] text-muted-foreground">View All</span>
      </div>
      <div className="divide-y divide-border-sub">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3 cursor-pointer">
            <button className="mt-0.5 shrink-0">
              {task.completed ? (
                <CheckCircle2 className="h-4 w-4 text-success" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground/40" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-[13px] font-medium leading-tight ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground">{task.dueDate}</span>
              </div>
            </div>
            <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${priorityDot(task.priority)}`} />
          </div>
        ))}
      </div>
    </div>
  );
}