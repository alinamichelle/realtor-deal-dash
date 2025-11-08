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
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
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
      <SidebarContent className="pt-6">
        <div className="px-4 mb-6">
          <h1 className={`font-bold text-sidebar-primary transition-all ${open ? "text-2xl" : "text-xl text-center"}`}>
            {open ? "LiteHaus" : "LH"}
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={open ? "" : "sr-only"}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto pt-6">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={location.pathname === "/admin"}>
                    <NavLink 
                      to="/admin" 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent"
                    >
                      <Settings className="h-5 w-5 shrink-0" />
                      {open && <span>Admin</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
