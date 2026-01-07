import { cn } from "@/lib/utils";
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";

interface Insight {
  id: string;
  type: "opportunity" | "alert" | "suggestion";
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
    type: "alert",
    title: "Fax.Plus API latency spike",
    description: "EU region showing 12% higher latency than baseline. Engineering team notified.",
    action: "View metrics",
  },
  {
    id: "3",
    type: "suggestion",
    title: "Optimal meeting time detected",
    description: "Your productivity peaks at 10am-12pm. Consider blocking this for deep work.",
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
        bg: "bg-info/10",
        iconColor: "text-info",
        border: "border-info/20",
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
    <div className="rounded-xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-accent/10">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            AI Insights
          </h2>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {insights.map((insight, index) => {
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
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", style.iconColor)} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground mb-1">{insight.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                  {insight.action && (
                    <button className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-accent hover:underline">
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
