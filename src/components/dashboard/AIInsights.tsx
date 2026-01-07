import { cn } from "@/lib/utils";
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, ArrowRight, Waves, Mountain } from "lucide-react";

interface Insight {
  id: string;
  type: "opportunity" | "alert" | "suggestion" | "lifestyle";
  title: string;
  description: string;
  action?: string;
}

const insights: Insight[] = [
  {
    id: "1",
    type: "opportunity",
    title: "Enterprise pipeline up 34%",
    description: "3 Fortune 500 prospects showing high engagement. Consider prioritizing outreach today.",
    action: "View prospects",
  },
  {
    id: "2",
    type: "lifestyle",
    title: "Perfect surf window tomorrow",
    description: "Biarritz showing clean 1.5m swell at dawn. Block 6-9am for an early session?",
    action: "Block calendar",
  },
  {
    id: "3",
    type: "suggestion",
    title: "Peak productivity detected",
    description: "Your best work happens 10am-12pm. Next 2-hour design block scheduled tomorrow.",
  },
];

const getInsightStyle = (type: string) => {
  switch (type) {
    case "opportunity":
      return {
        icon: TrendingUp,
        bg: "bg-success/10",
        iconColor: "text-success",
        border: "border-success/20",
      };
    case "alert":
      return {
        icon: AlertTriangle,
        bg: "bg-warning/10",
        iconColor: "text-warning",
        border: "border-warning/20",
      };
    case "suggestion":
      return {
        icon: Lightbulb,
        bg: "bg-primary/10",
        iconColor: "text-primary",
        border: "border-primary/20",
      };
    case "lifestyle":
      return {
        icon: Waves,
        bg: "bg-ocean/10",
        iconColor: "text-ocean",
        border: "border-ocean/20",
      };
    default:
      return {
        icon: Sparkles,
        bg: "bg-accent/10",
        iconColor: "text-accent",
        border: "border-accent/20",
      };
  }
};

export function AIInsights() {
  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border bg-gradient-to-r from-accent/5 via-sunset/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent to-sunset shadow-lg shadow-accent/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              AI Insights
            </h2>
            <p className="text-sm text-muted-foreground">
              Personalized for your flow
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-3 stagger-children">
        {insights.map((insight) => {
          const style = getInsightStyle(insight.type);
          const Icon = style.icon;
          
          return (
            <div
              key={insight.id}
              className={cn(
                "group p-4 rounded-xl border transition-all duration-200 hover:shadow-md cursor-pointer",
                style.bg,
                style.border
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("p-2 rounded-lg bg-card shadow-sm")}>
                  <Icon className={cn("h-5 w-5", style.iconColor)} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground mb-1">{insight.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                  {insight.action && (
                    <button className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                      {insight.action}
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
