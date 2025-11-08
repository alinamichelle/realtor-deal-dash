import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stages = [
  { id: 1, name: "Listed", completed: true },
  { id: 2, name: "Contract", completed: false },
  { id: 3, name: "Pending", completed: false },
  { id: 4, name: "Expected", completed: false },
  { id: 5, name: "Closed", completed: false },
];

export function TransactionTimeline() {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Transaction Timeline & Progress
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Track progress through the transaction lifecycle with smart milestone management
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">10%</div>
          <div className="text-xs text-muted-foreground">Complete</div>
        </div>
      </div>

      <div className="mb-6">
        <Progress value={10} className="h-2" />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  stage.completed
                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {stage.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{stage.id}</span>
                )}
              </div>
              <div className="mt-3 text-center">
                <div
                  className={`text-sm font-medium ${
                    stage.completed ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {stage.name}
                </div>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div
                className={`absolute top-6 left-[60%] w-full h-0.5 -z-10 ${
                  stage.completed ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
