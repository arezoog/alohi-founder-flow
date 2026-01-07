import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PenLine, 
  Send, 
  ScanLine, 
  Users, 
  BarChart3, 
  Settings,
  Sparkles,
  ChevronLeft,
  Mountain
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
}

const mainNav: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: PenLine, label: "Sign.Plus", href: "/sign" },
  { icon: Send, label: "Fax.Plus", href: "/fax" },
  { icon: ScanLine, label: "Scan.Plus", href: "/scan" },
  { icon: Sparkles, label: "AI Assistant", href: "/ai" },
];

const secondaryNav: NavItem[] = [
  { icon: Users, label: "Team", href: "/team" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-5 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-ocean to-primary flex items-center justify-center text-white font-display font-bold text-base">
            A
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-display font-semibold text-base text-sidebar-foreground">Alohi</h1>
              <p className="text-xs text-muted-foreground">Command Center</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors text-muted-foreground hover:text-sidebar-foreground",
            collapsed && "absolute -right-3 top-6 bg-card border border-border shadow-md"
          )}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        <div>
          {!collapsed && (
            <p className="px-3 mb-3 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Products
            </p>
          )}
          <div className="space-y-1">
            {mainNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                  item.active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-[18px] w-[18px] flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            ))}
          </div>
        </div>

        <div>
          {!collapsed && (
            <p className="px-3 mb-3 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Workspace
            </p>
          )}
          <div className="space-y-1">
            {secondaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                  "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <item.icon className="h-[18px] w-[18px] flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Weekend card */}
      {!collapsed && (
        <div className="mx-4 mb-4 p-4 rounded-xl bg-powder/80 border border-ocean-light">
          <div className="flex items-center gap-2 mb-1">
            <Mountain className="h-4 w-4 text-ocean" />
            <span className="text-xs font-medium text-foreground">Weekend</span>
          </div>
          <p className="text-xs text-muted-foreground">Fresh powder in Verbier ⛷️</p>
        </div>
      )}
    </aside>
  );
}
