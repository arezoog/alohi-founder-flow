import { cn } from "@/lib/utils";
import { Mountain, Waves, Thermometer } from "lucide-react";

interface Condition {
  id: string;
  location: string;
  type: "ski" | "surf";
  status: string;
  temp: string;
  detail: string;
  emoji: string;
}

const conditions: Condition[] = [
  {
    id: "1",
    location: "Verbier",
    type: "ski",
    status: "Fresh powder",
    temp: "-8°C",
    detail: "45cm new snow",
    emoji: "⛷️",
  },
  {
    id: "2",
    location: "Biarritz",
    type: "surf",
    status: "Clean waves",
    temp: "18°C",
    detail: "1.2m offshore",
    emoji: "🏄",
  },
];

export function ConditionsWidget() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Conditions
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">Weekend forecast</p>
      </div>
      
      <div className="p-4 space-y-3">
        {conditions.map((condition) => (
          <div
            key={condition.id}
            className={cn(
              "p-4 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer",
              condition.type === "ski" 
                ? "bg-powder border border-ocean-light" 
                : "bg-ocean-light/30 border border-ocean-light"
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2.5 rounded-xl",
                  condition.type === "ski" ? "bg-white/80" : "bg-white/60"
                )}>
                  {condition.type === "ski" ? (
                    <Mountain className="h-5 w-5 text-ocean" />
                  ) : (
                    <Waves className="h-5 w-5 text-ocean" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{condition.location}</p>
                    <span>{condition.emoji}</span>
                  </div>
                  <p className="text-sm text-ocean font-medium">{condition.status}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                  <Thermometer className="h-3.5 w-3.5 text-muted-foreground" />
                  {condition.temp}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{condition.detail}</p>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-full py-2 text-sm text-muted-foreground hover:text-ocean transition-colors">
          + Add a spot
        </button>
      </div>
    </div>
  );
}
