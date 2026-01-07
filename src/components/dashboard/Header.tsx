import { Bell, Search, Settings } from "lucide-react";

export function Header() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  
  const getGreeting = () => {
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };
  
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-10 py-6">
        {/* Greeting */}
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            {getGreeting()}, Ali
          </h1>
          <p className="text-sm text-muted-foreground mt-1">{formattedDate}</p>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-muted-foreground text-sm">
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search...</span>
            <kbd className="hidden md:inline-flex h-5 px-1.5 rounded border border-border bg-card text-[10px] font-mono text-muted-foreground items-center">
              ⌘K
            </kbd>
          </button>
          
          <button className="relative p-2.5 rounded-xl hover:bg-muted transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-ocean" />
          </button>
          
          <button className="p-2.5 rounded-xl hover:bg-muted transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="ml-2 h-9 w-9 rounded-full bg-gradient-to-br from-ocean to-primary flex items-center justify-center text-white font-display font-semibold text-sm">
            AG
          </div>
        </div>
      </div>
    </header>
  );
}
