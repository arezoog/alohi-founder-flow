import { cn } from "@/lib/utils";
import { Video, Users, MapPin, ExternalLink } from "lucide-react";

interface Meeting {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "video" | "in-person" | "hybrid";
  attendees: number;
  location?: string;
}

const meetings: Meeting[] = [
  {
    id: "1",
    title: "Weekly Leadership Sync",
    time: "10:00 AM",
    duration: "30 min",
    type: "video",
    attendees: 5,
  },
  {
    id: "2",
    title: "Enterprise Sales Review",
    time: "2:00 PM",
    duration: "1 hr",
    type: "video",
    attendees: 8,
  },
  {
    id: "3",
    title: "Product Roadmap Planning",
    time: "4:00 PM",
    duration: "1.5 hr",
    type: "hybrid",
    attendees: 12,
    location: "Conference Room A",
  },
];

const getMeetingTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return Video;
    case "in-person":
    case "hybrid":
      return MapPin;
    default:
      return Users;
  }
};

export function UpcomingMeetings() {
  return (
    <div className="rounded-xl bg-card shadow-card overflow-hidden">
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
      
      <div className="p-4 space-y-3">
        {meetings.map((meeting, index) => {
          const TypeIcon = getMeetingTypeIcon(meeting.type);
          
          return (
            <div
              key={meeting.id}
              className={cn(
                "group relative flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 cursor-pointer"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Time indicator */}
              <div className="flex-shrink-0 text-right w-16">
                <p className="font-medium text-foreground">{meeting.time}</p>
                <p className="text-xs text-muted-foreground">{meeting.duration}</p>
              </div>
              
              {/* Vertical line */}
              <div className="relative flex-shrink-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border" />
                <div className="relative w-3 h-3 rounded-full bg-accent shadow-sm" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                  {meeting.title}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <TypeIcon className="h-3 w-3" />
                    {meeting.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {meeting.attendees}
                  </span>
                  {meeting.location && (
                    <span className="truncate">{meeting.location}</span>
                  )}
                </div>
              </div>
              
              {/* Join button */}
              <button className="opacity-0 group-hover:opacity-100 flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-medium transition-all duration-200 hover:bg-accent/90">
                Join
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-border bg-muted/30">
        <p className="text-xs text-center text-muted-foreground">
          View full calendar →
        </p>
      </div>
    </div>
  );
}
