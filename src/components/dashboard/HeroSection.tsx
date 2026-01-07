import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { MapPin, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import snowboardAction from "@/assets/snowboard-action.jpg";
import surfAction from "@/assets/surf-action.jpg";

const GENEVA_TIMEZONE = "Europe/Zurich";

interface ScenicView {
  id: string;
  location: string;
  country: string;
  image: string;
}

const views: ScenicView[] = [
  {
    id: "1",
    location: "Powder Day",
    country: "Backcountry",
    image: snowboardAction,
  },
  {
    id: "2",
    location: "Barrel Wave",
    country: "Pipeline",
    image: surfAction,
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const current = views[currentIndex];
  
  const next = () => setCurrentIndex((i) => (i + 1) % views.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + views.length) % views.length);

  const now = new Date();
  const genevaTime = toZonedTime(now, GENEVA_TIMEZONE);
  const hour = genevaTime.getHours();
  
  const getGreeting = () => {
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };
  
  const formattedDate = format(genevaTime, "EEEE, MMMM d");
  const formattedTime = format(genevaTime, "h:mm a");

  return (
    <div className="relative rounded-2xl overflow-hidden mb-6">
      {/* Background Image */}
      <div className="relative h-56 sm:h-64 lg:h-72">
        <img
          src={current.image}
          alt={current.location}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
          {/* Top row: Time + Like */}
          <div className="flex items-start justify-between">
            <div className="text-white/80 text-sm font-medium">
              {formattedTime}
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Heart className={cn("h-4 w-4", liked ? "fill-red-500 text-red-500" : "text-white")} />
            </button>
          </div>
          
          {/* Bottom: Greeting + Navigation */}
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                {getGreeting()}, Ali
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                {formattedDate}
              </p>
              <div className="flex items-center gap-2 text-white/60 text-xs mt-2">
                <MapPin className="h-3 w-3" />
                <span>{current.location}</span>
                <span>· {current.country}</span>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
              <div className="flex gap-1.5">
                {views.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      i === currentIndex ? "bg-white" : "bg-white/40"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
