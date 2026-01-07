import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
  gradient?: string;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconColor = "text-accent",
  gradient,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1",
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-70",
        gradient || "bg-gradient-to-br from-transparent to-muted/30"
      )} />
      
      <div className="relative flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-display font-bold tracking-tight text-foreground">
            {value}
          </p>
          {change && (
            <p
              className={cn(
                "text-sm font-medium flex items-center gap-1",
                changeType === "positive" && "text-success",
                changeType === "negative" && "text-destructive",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {changeType === "positive" && "↑"}
              {changeType === "negative" && "↓"}
              {change}
            </p>
          )}
        </div>
        <div
          className={cn(
            "rounded-xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
            iconColor.includes("sign") && "bg-sign/10",
            iconColor.includes("fax") && "bg-fax/10",
            iconColor.includes("scan") && "bg-scan/10",
            iconColor.includes("ocean") && "bg-ocean/10",
            !iconColor.includes("sign") && !iconColor.includes("fax") && !iconColor.includes("scan") && !iconColor.includes("ocean") && "bg-accent/10"
          )}
        >
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>
      </div>
      
      {/* Decorative wave for ocean cards */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-current to-transparent opacity-5 rounded-full group-hover:scale-110 transition-transform duration-500" />
    </div>
  );
}
