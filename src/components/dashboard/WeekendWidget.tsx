import { cn } from "@/lib/utils";
import { Mountain, Waves, Coffee, Sun, CloudSnow, Thermometer } from "lucide-react";

interface Condition {
  location: string;
  type: "ski" | "surf" | "coffee";
  status: string;
  detail: string;
  icon: React.ElementType;
  temp?: string;
  quality: "excellent" | "good" | "fair";
}

const conditions: Condition[] = [
  {
    location: "Verbier",
    type: "ski",
    status: "Fresh powder",
    detail: "45cm new snow overnight",
    icon: CloudSnow,
    temp: "-8°C",
    quality: "excellent",
  },
  {
    location: "Biarritz",
    type: "surf",
    status: "Clean waves",
    detail: "1.2m swell, offshore wind",
    icon: Waves,
    temp: "18°C",
    quality: "good",
  },
  {
    location: "Café Cépage",
    type: "coffee",
    status: "New beans",
    detail: "Ethiopian Yirgacheffe arrived",
    icon: Coffee,
    temp: "",
    quality: "excellent",
  },
];

const getQualityColor = (quality: string) => {
  switch (quality) {
    case "excellent":
      return "bg-success/20 text-success";
    case "good":
      return "bg-ocean/20 text-ocean";
    case "fair":
      return "bg-warning/20 text-warning";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getTypeGradient = (type: string) => {
  switch (type) {
    case "ski":
      return "from-alpine/20 to-primary/10";
    case "surf":
      return "from-ocean/20 to-primary/10";
    case "coffee":
      return "from-coffee/20 to-sunset/10";
    default:
      return "from-muted to-muted";
  }
};

export function WeekendWidget() {
  const today = new Date();
  const daysUntilWeekend = (6 - today.getDay() + 7) % 7 || 7;

  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 via-ocean/5 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-ocean to-alpine">
              <Mountain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Weekend Vibes
              </h2>
              <p className="text-sm text-muted-foreground">
                {daysUntilWeekend === 1 ? "Tomorrow!" : `${daysUntilWeekend} days to go`}
              </p>
            </div>
          </div>
          <Sun className="h-5 w-5 text-sunset animate-pulse-soft" />
        </div>
      </div>
      
      <div className="p-4 space-y-3 stagger-children">
        {conditions.map((condition) => {
          const Icon = condition.icon;
          
          return (
            <div
              key={condition.location}
              className={cn(
                "group relative p-4 rounded-xl bg-gradient-to-r transition-all duration-300 hover:shadow-md cursor-pointer",
                getTypeGradient(condition.type)
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-card/80 shadow-sm">
                  <Icon className={cn(
                    "h-5 w-5",
                    condition.type === "ski" && "text-alpine",
                    condition.type === "surf" && "text-ocean",
                    condition.type === "coffee" && "text-coffee"
                  )} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{condition.location}</p>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium capitalize",
                      getQualityColor(condition.quality)
                    )}>
                      {condition.quality}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">{condition.status}</p>
                  <p className="text-xs text-muted-foreground">{condition.detail}</p>
                </div>
                
                {condition.temp && (
                  <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                    <Thermometer className="h-4 w-4 text-muted-foreground" />
                    {condition.temp}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
