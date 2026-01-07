import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconBg?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconBg = "bg-ocean/10 text-ocean",
}: MetricCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", iconBg)}>
          <Icon className="h-5 w-5" />
        </div>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              changeType === "positive" && "bg-success/10 text-success",
              changeType === "negative" && "bg-destructive/10 text-destructive",
              changeType === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {changeType === "positive" && "↑ "}
            {changeType === "negative" && "↓ "}
            {change}
          </span>
        )}
      </div>
      
      <p className="text-3xl font-display font-bold text-foreground mb-1">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
