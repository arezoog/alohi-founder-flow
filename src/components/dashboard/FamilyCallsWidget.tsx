import { Phone, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  frequency: string;
  lastCall?: string;
  needsCall: boolean;
}

const familyMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Arezoo Jooni",
    relation: "Little Sister",
    frequency: "Often",
    lastCall: "2 days ago",
    needsCall: true,
  },
  {
    id: "2",
    name: "Maman & Baba",
    relation: "Parents",
    frequency: "Regularly",
    lastCall: "Yesterday",
    needsCall: false,
  },
  {
    id: "3",
    name: "Hossein",
    relation: "Family",
    frequency: "Weekly",
    lastCall: "5 days ago",
    needsCall: true,
  },
];

export function FamilyCallsWidget() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-4 sm:p-5 border-b border-border flex items-center gap-3">
        <div className="p-2 rounded-xl bg-rose-500/10">
          <Heart className="h-4 w-4 text-rose-500" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">
            Family Calls
          </h3>
          <p className="text-xs text-muted-foreground">Stay connected</p>
        </div>
      </div>

      <div className="divide-y divide-border">
        {familyMembers.map((member) => (
          <div
            key={member.id}
            className={cn(
              "p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors hover:bg-muted/30",
              member.needsCall && "bg-rose-500/5"
            )}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground text-sm sm:text-base truncate">
                  {member.name}
                </p>
                {member.needsCall && (
                  <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 font-medium">
                    Call soon
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">
                  {member.relation}
                </span>
                <span className="text-muted-foreground/50">•</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {member.lastCall}
                </span>
              </div>
            </div>
            
            <button className="flex-shrink-0 p-2.5 rounded-xl bg-ocean/10 text-ocean hover:bg-ocean/20 transition-colors">
              <Phone className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
