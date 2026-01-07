import { cn } from "@/lib/utils";
import { Calendar, Video, Users, MapPin, RefreshCw } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "video" | "in-person" | "focus";
  attendees?: number;
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Leadership Sync",
    time: "10:00",
    duration: "30m",
    type: "video",
    attendees: 5,
  },
  {
    id: "2",
    title: "Deep Work Block",
    time: "11:00",
    duration: "2h",
    type: "focus",
  },
  {
    id: "3",
    title: "Enterprise Sales",
    time: "14:00",
    duration: "1h",
    type: "video",
    attendees: 8,
  },
  {
    id: "4",
    title: "Product Review",
    time: "16:00",
    duration: "45m",
    type: "in-person",
    attendees: 4,
  },
];

const getEventStyle = (type: string) => {
  switch (type) {
    case "video":
      return { icon: Video, color: "text-fax", bg: "bg-fax/10", border: "border-l-fax" };
    case "in-person":
      return { icon: MapPin, color: "text-sign", bg: "bg-sign/10", border: "border-l-sign" };
    case "focus":
      return { icon: Calendar, color: "text-ocean", bg: "bg-ocean/10", border: "border-l-ocean" };
    default:
      return { icon: Calendar, color: "text-muted-foreground", bg: "bg-muted", border: "border-l-muted-foreground" };
  }
};

export function CalendarWidget() {
  const now = new Date();
  const currentHour = now.getHours();
  
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-ocean/10">
              <Calendar className="h-4 w-4 text-ocean" />
            </div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Calendar
            </h2>
          </div>
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-ocean transition-colors">
            <RefreshCw className="h-3 w-3" />
            Sync GCal
          </button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </p>
      </div>
      
      <div className="p-4 space-y-2">
        {events.map((event) => {
          const style = getEventStyle(event.type);
          const Icon = style.icon;
          const eventHour = parseInt(event.time.split(':')[0]);
          const isPast = eventHour < currentHour;
          const isCurrent = eventHour === currentHour;
          
          return (
            <div
              key={event.id}
              className={cn(
                "relative flex items-center gap-3 p-3 rounded-xl border-l-2 transition-all",
                style.border,
                isCurrent ? "bg-ocean/5 border border-ocean/20" : "hover:bg-muted/30",
                isPast && "opacity-50"
              )}
            >
              <div className="flex-shrink-0 w-12 text-right">
                <p className={cn("text-sm font-medium", isCurrent ? "text-ocean" : "text-foreground")}>
                  {event.time}
                </p>
                <p className="text-xs text-muted-foreground">{event.duration}</p>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={cn("font-medium text-sm truncate", isPast && "line-through")}>
                  {event.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Icon className={cn("h-3 w-3", style.color)} />
                  {event.attendees && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {event.attendees}
                    </span>
                  )}
                </div>
              </div>
              
              {isCurrent && (
                <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-ocean text-white text-xs font-medium">
                  Now
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
