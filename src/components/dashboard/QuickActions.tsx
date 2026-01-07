import { cn } from "@/lib/utils";
import { 
  PenLine, 
  Send, 
  ScanLine, 
  Users
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
    bgColor: "bg-sign/5 hover:bg-sign/10 border-sign/10",
  },
  {
    id: "fax",
    label: "Send Fax",
    description: "Fax.Plus",
    icon: Send,
    color: "text-fax",
    bgColor: "bg-fax/5 hover:bg-fax/10 border-fax/10",
  },
  {
    id: "scan",
    label: "Scan Doc",
    description: "Scan.Plus",
    icon: ScanLine,
    color: "text-scan",
    bgColor: "bg-scan/5 hover:bg-scan/10 border-scan/10",
  },
  {
    id: "team",
    label: "Team",
    description: "37 members",
    icon: Users,
    color: "text-ocean",
    bgColor: "bg-ocean/5 hover:bg-ocean/10 border-ocean/10",
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
              "group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-sm",
              action.bgColor
            )}
          >
            <action.icon className={cn("h-5 w-5 flex-shrink-0", action.color)} />
            <div className="text-left flex-1">
              <p className="font-medium text-foreground text-sm">{action.label}</p>
              <p className={cn("text-xs", action.color)}>{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
