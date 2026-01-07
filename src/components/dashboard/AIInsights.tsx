import { cn } from "@/lib/utils";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";

interface Insight {
  id: string;
  title: string;
  description: string;
  action?: string;
}

const insights: Insight[] = [
  {
    id: "1",
    title: "Pipeline up 34%",
    description: "3 Fortune 500 prospects showing high engagement",
    action: "View",
  },
  {
    id: "2",
    title: "Best work window",
    description: "Your productivity peaks 10am-12pm. Focus block scheduled.",
  },
];

export function AIInsights() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-ocean" />
          <h2 className="font-display text-lg font-semibold text-foreground">
            Insights
          </h2>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="group p-4 rounded-xl bg-powder/50 border border-ocean-light/50 hover:border-ocean-light transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-medium text-foreground mb-1">{insight.title}</p>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
              {insight.action && (
                <button className="flex items-center gap-1 text-sm font-medium text-ocean opacity-0 group-hover:opacity-100 transition-opacity">
                  {insight.action}
                  <ArrowRight className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
