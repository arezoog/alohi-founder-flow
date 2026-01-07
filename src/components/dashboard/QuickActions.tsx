import { cn } from "@/lib/utils";
import { 
  PenLine, 
  Send, 
  ScanLine, 
  Users, 
  ArrowRight
} from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const actions: QuickAction[] = [
  {
    id: "sign",
    label: "New Agreement",
    description: "Sign.Plus",
    icon: PenLine,
    color: "bg-sign/10 text-sign hover:bg-sign/20",
  },
  {
    id: "fax",
    label: "Send Fax",
    description: "Fax.Plus",
    icon: Send,
    color: "bg-fax/10 text-fax hover:bg-fax/20",
  },
  {
    id: "scan",
    label: "Scan Doc",
    description: "Scan.Plus",
    icon: ScanLine,
    color: "bg-scan/10 text-scan hover:bg-scan/20",
  },
  {
    id: "team",
    label: "Team",
    description: "37 members",
    icon: Users,
    color: "bg-ocean/10 text-ocean hover:bg-ocean/20",
  },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Quick Actions
        </h2>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            className={cn(
              "group flex items-center gap-3 p-4 rounded-xl transition-all duration-200",
              action.color
            )}
          >
            <action.icon className="h-5 w-5 flex-shrink-0" />
            <div className="text-left flex-1">
              <p className="font-medium text-foreground text-sm">{action.label}</p>
              <p className="text-xs opacity-70">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
