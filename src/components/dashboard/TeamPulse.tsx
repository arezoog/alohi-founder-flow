import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "active" | "meeting" | "focus" | "away";
  currentTask?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Head of Product",
    avatar: "SC",
    status: "active",
    currentTask: "Sign.Plus v4.2 review",
  },
  {
    id: "2",
    name: "Marcus Weber",
    role: "Lead Engineer",
    avatar: "MW",
    status: "focus",
    currentTask: "AI model optimization",
  },
  {
    id: "3",
    name: "Emma Laurent",
    role: "Head of Sales",
    avatar: "EL",
    status: "meeting",
    currentTask: "Enterprise client call",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Security Lead",
    avatar: "DK",
    status: "active",
    currentTask: "SOC 2 audit prep",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success";
    case "meeting":
      return "bg-info";
    case "focus":
      return "bg-warning";
    case "away":
      return "bg-muted-foreground";
    default:
      return "bg-muted-foreground";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "active":
      return "Active";
    case "meeting":
      return "In meeting";
    case "focus":
      return "Focus mode";
    case "away":
      return "Away";
    default:
      return status;
  }
};

export function TeamPulse() {
  const activeCount = teamMembers.filter((m) => m.status === "active").length;

  return (
    <div className="rounded-xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Team Pulse
          </h2>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            {activeCount} active now
          </span>
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm">
                {member.avatar}
              </div>
              <span
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card",
                  getStatusColor(member.status)
                )}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground">{member.name}</p>
                <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                  {getStatusLabel(member.status)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {member.currentTask || member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border bg-muted/30">
        <p className="text-xs text-center text-muted-foreground">
          View all 37 team members →
        </p>
      </div>
    </div>
  );
}
