import { Bell, Search, Settings } from "lucide-react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { MobileMenuButton } from "./Sidebar";

const GENEVA_TIMEZONE = "Europe/Zurich";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const now = new Date();
  const genevaTime = toZonedTime(now, GENEVA_TIMEZONE);
  const hour = genevaTime.getHours();
  
  const getGreeting = () => {
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };
  
  const formattedDate = format(genevaTime, "EEEE, MMM d");
  const formattedTime = format(genevaTime, "h:mm a");

  const getMotivation = () => {
    if (hour < 10) return "Early bird catches the wave 🌊";
    if (hour < 14) return "Flow state activated ✨";
    if (hour < 18) return "Making work flow 🚀";
    return "Wrapping up strong 💪";
  };

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <MobileMenuButton onClick={onMenuClick || (() => {})} />
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground">
              {getGreeting()}, Ali
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-0.5 lg:mt-1">
              <p className="text-xs sm:text-sm text-muted-foreground">{formattedDate} · {formattedTime}</p>
              <span className="hidden sm:inline text-xs sm:text-sm text-ocean">{getMotivation()}</span>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-muted-foreground text-sm">
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search...</span>
          </button>
          
          <button className="sm:hidden p-2 rounded-xl hover:bg-muted transition-colors">
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <button className="relative p-2 sm:p-2.5 rounded-xl hover:bg-muted transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 h-2 w-2 rounded-full bg-ocean" />
          </button>
          
          <button className="hidden sm:block p-2.5 rounded-xl hover:bg-muted transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="ml-1 sm:ml-2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-ocean to-primary flex items-center justify-center text-white font-display font-semibold text-xs sm:text-sm">
            AG
          </div>
        </div>
      </div>
    </header>
  );
}
