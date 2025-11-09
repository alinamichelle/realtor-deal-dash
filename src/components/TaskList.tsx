import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tasks = [
  {
    title: "Follow up with Johnson listing",
    priority: "high",
    dueDate: "Today",
    completed: false,
  },
  {
    title: "Schedule home inspection - 123 Oak St",
    priority: "high",
    dueDate: "Tomorrow",
    completed: false,
  },
  {
    title: "Review contract for Smith property",
    priority: "medium",
    dueDate: "Dec 15",
    completed: false,
  },
  {
    title: "Client meeting preparation",
    priority: "medium",
    dueDate: "Dec 16",
    completed: false,
  },
  {
    title: "Update listing photos",
    priority: "low",
    dueDate: "Dec 18",
    completed: false,
  },
];

export function TaskList() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Tasks & To-Dos</h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <button className="mt-0.5">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
              </div>
            </div>
            <Badge
              variant={
                task.priority === "high"
                  ? "destructive"
                  : task.priority === "medium"
                  ? "default"
                  : "secondary"
              }
              className="shrink-0"
            >
              {task.priority}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
