import { Plus, FileText, Home, Users, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const actions = [
  { label: "New Deal", icon: Plus, href: "/transactions" },
  { label: "Add Lead", icon: Users, href: "/leads" },
  { label: "New Listing", icon: Home, href: "/properties" },
  { label: "Intake Form", icon: FileText, href: "/intake-forms" },
  { label: "Schedule", icon: Calendar, href: "#" },
  { label: "Email", icon: Mail, href: "#" },
];

export function QuickActions() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border-sub">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Quick Actions</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-0 divide-x divide-border-sub">
        {actions.map((action) => (
          <NavLink
            key={action.label}
            to={action.href}
            className="flex flex-col items-center gap-2 py-4 px-2 text-center transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-surface-cream">
              <action.icon className="h-4 w-4 text-foreground" />
            </div>
            <span className="text-[11px] font-medium text-foreground">{action.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}