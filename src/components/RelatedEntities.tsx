import { User, Users, Building2, FileText, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const entities = [
  {
    icon: User,
    label: "Primary Agent",
    value: "Colin Beatt",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    label: "Client",
    value: "Rylee Whited",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Building2,
    label: "Property",
    value: "2644 Gwendolyn Lane",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: FileText,
    label: "Intake Form",
    value: "View original intake",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export function RelatedEntities() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Related</h3>
      </div>
      <div className="p-6 space-y-3">
        {entities.map((entity) => (
          <Card
            key={entity.label}
            className="p-4 hover:shadow-md transition-all cursor-pointer border-border hover:border-primary/30 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${entity.iconBg}`}>
                  <entity.icon className={`h-5 w-5 ${entity.iconColor}`} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {entity.label}
                  </div>
                  <div className="font-medium text-foreground">{entity.value}</div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
