import { 
  LayoutDashboard, 
  FileText, 
  Receipt, 
  Users, 
  Building2, 
  Home, 
  UserPlus, 
  UsersRound,
  Settings
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Today", url: "/", icon: LayoutDashboard },
  { title: "Intake Forms", url: "/intake-forms", icon: FileText },
  { title: "Transactions", url: "/transactions", icon: Receipt },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Properties", url: "/properties", icon: Building2 },
  { title: "Listings", url: "/listings", icon: Home },
  { title: "Leads", url: "/leads", icon: UserPlus },
  { title: "Team", url: "/team", icon: UsersRound },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-sidebar-border">
      <SidebarContent className="pt-4">
        {/* Wordmark */}
        <div className="px-4 mb-2">
          {open ? (
            <div className="flex items-center gap-1 px-2 py-2">
              <span className="text-[15px] font-light tracking-wide text-sidebar-accent-foreground">
                L
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-amber-glow shadow-[0_0_8px_hsl(36_70%_58%/0.4)] inline-block" />
              <span className="text-[15px] font-light tracking-wide text-sidebar-accent-foreground">
                te
              </span>
              <span className="text-[15px] font-semibold tracking-wide text-sidebar-accent-foreground">
                Haus
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center py-2">
              <span className="w-[6px] h-[6px] rounded-full bg-amber-glow shadow-[0_0_10px_hsl(36_70%_58%/0.5)]" />
            </div>
          )}
        </div>

        {/* Section label */}
        <SidebarGroup>
          {open && (
            <SidebarGroupLabel className="text-[9px] uppercase tracking-[0.1em] text-sidebar-foreground/60 font-semibold px-4 mb-1">
              Main
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink 
                        to={item.url} 
                        className={`relative flex items-center gap-3 px-3 py-2 rounded-[7px] transition-all min-h-[36px] text-[13px] ${
                          active 
                            ? 'bg-sidebar-primary/[0.06] text-sidebar-accent-foreground font-semibold' 
                            : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground/70'
                        }`}
                      >
                        {/* Amber active indicator bar */}
                        {active && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-sm bg-amber-glow shadow-[0_0_8px_hsl(36_70%_58%/0.3)]" />
                        )}
                        <item.icon className="h-[18px] w-[18px] shrink-0" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin */}
        <div className="mt-auto pt-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={location.pathname === "/admin"}>
                    <NavLink 
                      to="/admin" 
                      className={`flex items-center gap-3 px-3 py-2 rounded-[7px] transition-all min-h-[36px] text-[13px] ${
                        location.pathname === "/admin"
                          ? 'bg-sidebar-primary/[0.06] text-sidebar-accent-foreground font-semibold'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground/70'
                      }`}
                    >
                      <Settings className="h-[18px] w-[18px] shrink-0" />
                      {open && <span>Settings</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Agent footer */}
        {open && (
          <div className="px-3 py-3 border-t border-sidebar-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sidebar-accent flex items-center justify-center text-[11px] font-bold text-sidebar-accent-foreground">
              JS
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium text-sidebar-accent-foreground truncate">John Smith</p>
              <p className="text-[10px] text-sidebar-foreground truncate">Agent</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}