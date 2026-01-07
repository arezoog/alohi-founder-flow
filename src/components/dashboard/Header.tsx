import { Bell, Search, Settings, ChevronDown } from "lucide-react";

export function Header() {
  const currentTime = new Date();
  const greeting = currentTime.getHours() < 12 ? "Good morning" : currentTime.getHours() < 18 ? "Good afternoon" : "Good evening";
  
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left side - Greeting */}
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            {greeting}, Ali
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">{formattedDate}</p>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-muted-foreground text-sm">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search anything...</span>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
          </button>
          
          {/* Settings */}
          <button className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          
          {/* Profile */}
          <button className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
            <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium text-sm">
              AG
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
