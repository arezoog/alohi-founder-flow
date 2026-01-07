import { Phone, Heart, Clock, Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  frequency: string;
  called: boolean;
}

const initialMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Arezoo Jooni",
    relation: "Little Sister",
    frequency: "Often",
    called: false,
  },
  {
    id: "2",
    name: "Maman & Baba",
    relation: "Parents",
    frequency: "Regularly",
    called: false,
  },
  {
    id: "3",
    name: "Hossein",
    relation: "Family",
    frequency: "Weekly",
    called: false,
  },
];

export function FamilyCallsWidget() {
  const [members, setMembers] = useState<FamilyMember[]>(initialMembers);

  const toggleCalled = (id: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, called: !m.called } : m))
    );
  };

  const resetAll = () => {
    setMembers((prev) => prev.map((m) => ({ ...m, called: false })));
  };

  const calledCount = members.filter((m) => m.called).length;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-rose-500/10">
            <Heart className="h-4 w-4 text-rose-500" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">
              Family Calls
            </h3>
            <p className="text-xs text-muted-foreground">
              {calledCount}/{members.length} today
            </p>
          </div>
        </div>
        {calledCount > 0 && (
          <button
            onClick={resetAll}
            className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
            title="Reset all"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="divide-y divide-border">
        {members.map((member) => (
          <div
            key={member.id}
            className={cn(
              "p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors",
              member.called ? "opacity-50" : "bg-rose-500/5"
            )}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={cn(
                  "font-medium text-foreground text-sm sm:text-base truncate",
                  member.called && "line-through text-muted-foreground"
                )}>
                  {member.name}
                </p>
                {!member.called && (
                  <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 font-medium">
                    Call today
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
                  {member.frequency}
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleCalled(member.id)}
              className={cn(
                "flex-shrink-0 p-2.5 rounded-xl transition-colors",
                member.called
                  ? "bg-success/10 text-success"
                  : "bg-ocean/10 text-ocean hover:bg-ocean/20"
              )}
            >
              {member.called ? (
                <Check className="h-4 w-4" />
              ) : (
                <Phone className="h-4 w-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
