import { useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import scenicAlps from "@/assets/scenic-alps.jpg";
import scenicOcean from "@/assets/scenic-ocean.jpg";

interface ScenicView {
  id: string;
  location: string;
  country: string;
  image: string;
  type: "mountain" | "ocean";
}

const views: ScenicView[] = [
  {
    id: "1",
    location: "Zermatt",
    country: "Switzerland",
    image: scenicAlps,
    type: "mountain",
  },
  {
    id: "2",
    location: "Uluwatu",
    country: "Bali",
    image: scenicOcean,
    type: "ocean",
  },
];

export function ScenicWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const current = views[currentIndex];
  
  const next = () => setCurrentIndex((i) => (i + 1) % views.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + views.length) % views.length);

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="relative h-48 sm:h-56 lg:h-64">
        <img
          src={current.image}
          alt={current.location}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Location badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-medium">{current.location}</span>
          <span className="text-white/70">· {current.country}</span>
        </div>
        
        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <Heart className={cn("h-3.5 w-3.5", liked ? "fill-red-500 text-red-500" : "text-white")} />
        </button>
        
        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-3 right-3 flex gap-1">
          {views.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                i === currentIndex ? "bg-white" : "bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
