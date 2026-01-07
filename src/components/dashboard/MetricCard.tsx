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
    <div className="group p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className={cn("p-2 sm:p-2.5 lg:p-3 rounded-lg lg:rounded-xl", iconBg)}>
          <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
        </div>
        {change && (
          <span
            className={cn(
              "text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full",
              changeType === "positive" && "bg-success/10 text-success",
              changeType === "negative" && "bg-destructive/10 text-destructive",
              changeType === "neutral" && "bg-muted text-muted-foreground"
            )}
          >
            {changeType === "positive" && "↑ "}
            {change}
          </span>
        )}
      </div>
      
      <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-0.5 lg:mb-1">
        {value}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
