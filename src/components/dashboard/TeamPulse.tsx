import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "active" | "meeting" | "focus";
}

const teamMembers: TeamMember[] = [
  { id: "1", name: "Sarah Chen", role: "Product", avatar: "SC", status: "active" },
  { id: "2", name: "Marcus Weber", role: "Engineering", avatar: "MW", status: "focus" },
  { id: "3", name: "Emma Laurent", role: "Sales", avatar: "EL", status: "meeting" },
  { id: "4", name: "David Kim", role: "Security", avatar: "DK", status: "active" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "bg-success";
    case "meeting": return "bg-fax";
    case "focus": return "bg-warning";
    default: return "bg-muted-foreground";
  }
};

export function TeamPulse() {
  const activeCount = teamMembers.filter((m) => m.status === "active").length;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">Team</h2>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            {activeCount} active
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex -space-x-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative h-10 w-10 rounded-full bg-gradient-to-br from-ocean/80 to-primary flex items-center justify-center text-white text-sm font-medium ring-2 ring-card"
              title={`${member.name} - ${member.role}`}
            >
              {member.avatar}
              <span className={cn(
                "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-card",
                getStatusColor(member.status)
              )} />
            </div>
          ))}
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium ring-2 ring-card">
            +33
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          37 team members across Geneva, Paris & remote
        </p>
      </div>
    </div>
  );
}
