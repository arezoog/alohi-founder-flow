import { cn } from "@/lib/utils";
import { 
  PenLine, 
  Send, 
  ScanLine, 
  Users, 
  BarChart3, 
  Shield,
  ArrowRight,
  Coffee,
  Mountain
} from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const actions: QuickAction[] = [
  {
    id: "sign",
    label: "New Agreement",
    description: "Sign.Plus",
    icon: PenLine,
    color: "text-sign",
    bgColor: "bg-sign/10 hover:bg-sign/20 border-sign/20",
  },
  {
    id: "fax",
    label: "Send Fax",
    description: "Fax.Plus",
    icon: Send,
    color: "text-fax",
    bgColor: "bg-fax/10 hover:bg-fax/20 border-fax/20",
  },
  {
    id: "scan",
    label: "Scan Doc",
    description: "Scan.Plus",
    icon: ScanLine,
    color: "text-scan",
    bgColor: "bg-scan/10 hover:bg-scan/20 border-scan/20",
  },
  {
    id: "team",
    label: "Team",
    description: "37 members",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/5 hover:bg-primary/10 border-primary/10",
  },
  {
    id: "coffee",
    label: "Coffee Break",
    description: "You've earned it",
    icon: Coffee,
    color: "text-coffee",
    bgColor: "bg-coffee/10 hover:bg-coffee/20 border-coffee/20",
  },
  {
    id: "weekend",
    label: "Plan Trip",
    description: "Verbier awaits",
    icon: Mountain,
    color: "text-alpine",
    bgColor: "bg-alpine/10 hover:bg-alpine/20 border-alpine/20",
  },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Quick Actions
        </h2>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-3 stagger-children">
        {actions.map((action) => (
          <button
            key={action.id}
            className={cn(
              "group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200",
              action.bgColor,
              "hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <div className={cn("rounded-lg p-2 bg-card shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3")}>
              <action.icon className={cn("h-5 w-5", action.color)} />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
