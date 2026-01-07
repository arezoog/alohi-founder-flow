import { Bell, Search, Settings, Coffee, Waves, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  
  const getGreeting = () => {
    if (hour < 6) return { text: "Night owl mode", icon: null, emoji: "🌙" };
    if (hour < 10) return { text: "Good morning", icon: Coffee, emoji: "☕" };
    if (hour < 12) return { text: "Flow state", icon: null, emoji: "✨" };
    if (hour < 14) return { text: "Lunch break", icon: null, emoji: "🍜" };
    if (hour < 17) return { text: "Crushing it", icon: null, emoji: "🚀" };
    if (hour < 20) return { text: "Wind down", icon: Waves, emoji: "🌊" };
    return { text: "Good evening", icon: Mountain, emoji: "⛷️" };
  };
  
  const greeting = getGreeting();
  
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  // Check if it's a good snow day (just for fun dynamic content)
  const isWeekend = currentTime.getDay() === 0 || currentTime.getDay() === 6;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Left side - Greeting */}
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-display font-bold text-foreground">
                {greeting.text}, Ali
              </h1>
              <span className="text-2xl">{greeting.emoji}</span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm text-muted-foreground">{formattedDate}</p>
              {isWeekend && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-ocean/10 text-ocean text-xs font-medium">
                  <Mountain className="h-3 w-3" />
                  Weekend mode
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/60 hover:bg-muted transition-all duration-200 text-muted-foreground text-sm group">
            <Search className="h-4 w-4 group-hover:text-foreground transition-colors" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded-md border border-border bg-card px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          
          {/* Coffee break indicator */}
          <button className={cn(
            "relative p-2.5 rounded-xl transition-all duration-200",
            hour >= 10 && hour <= 11
              ? "bg-coffee/10 text-coffee hover:bg-coffee/20"
              : "bg-muted/60 hover:bg-muted text-muted-foreground"
          )}>
            <Coffee className="h-5 w-5" />
            {hour >= 10 && hour <= 11 && (
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-coffee animate-pulse-soft" />
            )}
          </button>
          
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl bg-muted/60 hover:bg-muted transition-all duration-200">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent animate-pulse" />
          </button>
          
          {/* Settings */}
          <button className="p-2.5 rounded-xl bg-muted/60 hover:bg-muted transition-all duration-200">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          
          {/* Profile */}
          <button className="flex items-center gap-3 pl-4 pr-3 py-2 rounded-xl bg-gradient-to-r from-primary to-ocean text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <span className="font-medium text-sm">Ali</span>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-sm backdrop-blur-sm">
              AG
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
