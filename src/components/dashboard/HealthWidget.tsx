import { cn } from "@/lib/utils";
import { Activity, Moon, Flame, Heart, TrendingUp, RefreshCw } from "lucide-react";

interface HealthMetric {
  label: string;
  value: string;
  unit: string;
  icon: React.ElementType;
  trend: "up" | "down" | "stable";
  color: string;
}

const metrics: HealthMetric[] = [
  {
    label: "Readiness",
    value: "87",
    unit: "",
    icon: Activity,
    trend: "up",
    color: "text-success",
  },
  {
    label: "Sleep",
    value: "7h 42m",
    unit: "",
    icon: Moon,
    trend: "stable",
    color: "text-fax",
  },
  {
    label: "Activity",
    value: "520",
    unit: "cal",
    icon: Flame,
    trend: "up",
    color: "text-sign",
  },
  {
    label: "HRV",
    value: "48",
    unit: "ms",
    icon: Heart,
    trend: "up",
    color: "text-ocean",
  },
];

export function HealthWidget() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-success/10">
              <Activity className="h-4 w-4 text-success" />
            </div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Health
            </h2>
          </div>
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-ocean transition-colors">
            <RefreshCw className="h-3 w-3" />
            Sync Oura
          </button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Today's vitals</p>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="p-3 rounded-xl bg-muted/50 border border-border"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={cn("h-4 w-4", metric.color)} />
                {metric.trend === "up" && (
                  <TrendingUp className="h-3 w-3 text-success" />
                )}
              </div>
              <p className="text-xl font-display font-bold text-foreground">
                {metric.value}
                <span className="text-sm font-normal text-muted-foreground ml-0.5">
                  {metric.unit}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          );
        })}
      </div>
      
      <div className="px-4 pb-4">
        <div className="p-3 rounded-xl bg-ocean/5 border border-ocean/10">
          <p className="text-sm text-ocean font-medium">Great recovery! 💪</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Perfect day for a morning surf or ski session
          </p>
        </div>
      </div>
    </div>
  );
}
