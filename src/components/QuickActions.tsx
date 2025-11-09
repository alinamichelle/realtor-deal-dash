import { Plus, FileText, Home, Users, Calendar, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const actions = [
  {
    label: "New Transaction",
    icon: Plus,
    href: "/transactions",
    color: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    label: "Add Client",
    icon: Users,
    href: "/clients",
    color: "bg-success text-success-foreground hover:bg-success/90",
  },
  {
    label: "New Listing",
    icon: Home,
    href: "/properties",
    color: "bg-info text-info-foreground hover:bg-info/90",
  },
  {
    label: "Intake Form",
    icon: FileText,
    href: "/intake-forms",
    color: "bg-accent text-accent-foreground hover:bg-accent/90",
  },
  {
    label: "Schedule Meeting",
    icon: Calendar,
    href: "#",
    color: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  },
  {
    label: "Send Email",
    icon: Mail,
    href: "#",
    color: "bg-muted text-foreground hover:bg-muted/80",
  },
];

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            asChild
            className={`h-auto py-4 flex-col gap-2 ${action.color}`}
          >
            <NavLink to={action.href}>
              <action.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{action.label}</span>
            </NavLink>
          </Button>
        ))}
      </div>
    </Card>
  );
}
