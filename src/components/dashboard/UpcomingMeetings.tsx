import { cn } from "@/lib/utils";
import { Video, Users, MapPin, ExternalLink, Coffee } from "lucide-react";

interface Meeting {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "video" | "in-person" | "coffee";
  attendees: number;
  location?: string;
}

const meetings: Meeting[] = [
  {
    id: "1",
    title: "Weekly Leadership Sync",
    time: "10:00",
    duration: "30 min",
    type: "video",
    attendees: 5,
  },
  {
    id: "2",
    title: "Coffee with design team",
    time: "10:30",
    duration: "20 min",
    type: "coffee",
    attendees: 3,
    location: "Kitchen",
  },
  {
    id: "3",
    title: "Enterprise Sales Review",
    time: "14:00",
    duration: "1 hr",
    type: "video",
    attendees: 8,
  },
];

const getMeetingStyle = (type: string) => {
  switch (type) {
    case "video":
      return { icon: Video, color: "text-ocean", bg: "bg-ocean/10" };
    case "in-person":
      return { icon: MapPin, color: "text-primary", bg: "bg-primary/10" };
    case "coffee":
      return { icon: Coffee, color: "text-coffee", bg: "bg-coffee/10" };
    default:
      return { icon: Users, color: "text-muted-foreground", bg: "bg-muted" };
  }
};

export function UpcomingMeetings() {
  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Today's Schedule
          </h2>
          <span className="text-sm text-muted-foreground">
            {meetings.length} meetings
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3 stagger-children">
        {meetings.map((meeting) => {
          const style = getMeetingStyle(meeting.type);
          const Icon = style.icon;
          
          return (
            <div
              key={meeting.id}
              className="group relative flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200 cursor-pointer"
            >
              {/* Time */}
              <div className="flex-shrink-0 text-center w-14">
                <p className="font-display font-bold text-foreground">{meeting.time}</p>
                <p className="text-[10px] text-muted-foreground uppercase">{meeting.duration}</p>
              </div>
              
              {/* Divider with dot */}
              <div className="relative flex-shrink-0 h-12 flex items-center">
                <div className="absolute w-px h-full bg-border left-1/2 -translate-x-1/2" />
                <div className={cn("relative z-10 w-3 h-3 rounded-full", style.bg)}>
                  <div className={cn("absolute inset-0.5 rounded-full", style.color.replace("text-", "bg-"))} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={cn("h-4 w-4", style.color)} />
                  <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {meeting.title}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {meeting.attendees}
                  </span>
                  {meeting.location && (
                    <span>{meeting.location}</span>
                  )}
                </div>
              </div>
              
              {/* Join button */}
              <button className="opacity-0 group-hover:opacity-100 flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
                Join
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
