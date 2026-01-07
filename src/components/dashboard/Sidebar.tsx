import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PenLine, 
  Send, 
  ScanLine, 
  Users, 
  BarChart3, 
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Sparkles,
  Mountain,
  Waves
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
  { icon: PenLine, label: "Sign.Plus", href: "/sign", badge: "12" },
  { icon: Send, label: "Fax.Plus", href: "/fax" },
  { icon: ScanLine, label: "Scan.Plus", href: "/scan", badge: "New" },
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
        "fixed left-0 top-0 z-50 h-screen bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-ocean via-primary to-alpine flex items-center justify-center text-white font-display font-bold text-lg overflow-hidden">
            A
            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white/20 to-transparent animate-wave" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-display font-bold text-lg text-sidebar-foreground">Alohi</h1>
              <p className="text-xs text-sidebar-foreground/50 flex items-center gap-1">
                <span>Command Center</span>
                <Waves className="h-3 w-3 animate-wave" />
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors",
            collapsed && "absolute -right-3 top-7 bg-sidebar border border-sidebar-border shadow-lg"
          )}
        >
          <ChevronLeft className={cn("h-4 w-4 text-sidebar-foreground/60 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="mb-4">
          {!collapsed && (
            <p className="px-3 mb-2 text-xs font-medium text-sidebar-foreground/40 uppercase tracking-wider">
              Products
            </p>
          )}
          {mainNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                item.active
                  ? "bg-gradient-to-r from-sidebar-primary to-sunset text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/20"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                collapsed && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 font-medium">{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium",
                      item.active ? "bg-white/20" : "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </a>
          ))}
        </div>

        <div className="pt-4 border-t border-sidebar-border">
          {!collapsed && (
            <p className="px-3 mb-2 text-xs font-medium text-sidebar-foreground/40 uppercase tracking-wider">
              Workspace
            </p>
          )}
          {secondaryNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                collapsed && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </a>
          ))}
        </div>
      </nav>

      {/* Weekend indicator */}
      {!collapsed && (
        <div className="mx-3 mb-3 p-4 rounded-xl bg-gradient-to-br from-ocean/20 to-alpine/20 border border-ocean/20">
          <div className="flex items-center gap-2 mb-2">
            <Mountain className="h-4 w-4 text-alpine" />
            <span className="text-xs font-medium text-sidebar-foreground/80">Weekend Forecast</span>
          </div>
          <p className="text-xs text-sidebar-foreground/60">Fresh powder in Verbier ⛷️</p>
        </div>
      )}

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <a
          href="/help"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
            "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
            collapsed && "justify-center"
          )}
        >
          <HelpCircle className="h-5 w-5" />
          {!collapsed && <span className="font-medium">Help & Support</span>}
        </a>
        <button
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
            "text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="font-medium">Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
