import { useState } from "react";
import { cn } from "@/lib/utils";
import { Heart, Plus, Mountain, Coffee, Users, Flower2, Calendar, Check } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  type: "ski" | "cafe" | "giving" | "surprise" | "date";
  completed: boolean;
  date?: string;
}

const initialActivities: Activity[] = [
  {
    id: "1",
    title: "Weekend ski trip to Verbier",
    type: "ski",
    completed: false,
    date: "This Saturday",
  },
  {
    id: "2",
    title: "Try the new café in Carouge",
    type: "cafe",
    completed: false,
  },
  {
    id: "3",
    title: "Visit Terre des Hommes together",
    type: "giving",
    completed: false,
    date: "Next week",
  },
];

const suggestions = [
  { icon: Flower2, text: "Get Parinaz flowers today 💐", type: "surprise" },
  { icon: Coffee, text: "Surprise coffee date", type: "cafe" },
  { icon: Mountain, text: "Plan a surf trip together", type: "date" },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "ski": return Mountain;
    case "cafe": return Coffee;
    case "giving": return Users;
    case "surprise": return Flower2;
    default: return Heart;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "ski": return "text-ocean bg-ocean/10";
    case "cafe": return "text-amber-600 bg-amber-50";
    case "giving": return "text-sign bg-sign/10";
    case "surprise": return "text-pink-500 bg-pink-50";
    default: return "text-ocean bg-ocean/10";
  }
};

export function TogetherWidget() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [showSuggestion, setShowSuggestion] = useState(true);
  
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  const SuggestionIcon = randomSuggestion.icon;

  const toggleActivity = (id: string) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a))
    );
  };

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      {/* Header with gradient */}
      <div className="p-6 border-b border-border bg-gradient-to-r from-pink-50 to-ocean-light/30">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-pink-100">
            <Heart className="h-4 w-4 text-pink-500" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Ali & Parinaz
            </h2>
            <p className="text-sm text-muted-foreground">Things to do together</p>
          </div>
        </div>
      </div>
      
      {/* Suggestion banner */}
      {showSuggestion && (
        <div className="mx-4 mt-4 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-pink-100/50 border border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SuggestionIcon className="h-4 w-4 text-pink-500" />
            <p className="text-sm font-medium text-pink-700">{randomSuggestion.text}</p>
          </div>
          <button
            onClick={() => setShowSuggestion(false)}
            className="text-xs text-pink-500 hover:text-pink-600"
          >
            ✓
          </button>
        </div>
      )}
      
      {/* Activities */}
      <div className="p-4 space-y-2">
        {activities.map((activity) => {
          const Icon = getTypeIcon(activity.type);
          const colorClass = getTypeColor(activity.type);
          
          return (
            <div
              key={activity.id}
              className={cn(
                "group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer",
                activity.completed && "opacity-50"
              )}
              onClick={() => toggleActivity(activity.id)}
            >
              <button className="flex-shrink-0">
                {activity.completed ? (
                  <div className="h-5 w-5 rounded-full bg-success flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                ) : (
                  <div className={cn("h-5 w-5 rounded-full flex items-center justify-center", colorClass)}>
                    <Icon className="h-3 w-3" />
                  </div>
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "text-sm font-medium",
                  activity.completed && "line-through text-muted-foreground"
                )}>
                  {activity.title}
                </p>
                {activity.date && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Calendar className="h-3 w-3" />
                    {activity.date}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        
        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-border hover:border-pink-300 hover:bg-pink-50/50 transition-colors text-muted-foreground hover:text-pink-500">
          <Plus className="h-4 w-4" />
          <span className="text-sm">Add activity</span>
        </button>
      </div>
    </div>
  );
}
