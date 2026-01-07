import { cn } from "@/lib/utils";
import { Coffee, MapPin, Star } from "lucide-react";

interface CoffeeSpot {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
}

const coffeeSpots: CoffeeSpot[] = [
  {
    id: "1",
    name: "Café Cépage",
    location: "Geneva",
    specialty: "Ethiopian Yirgacheffe",
    rating: 5,
  },
  {
    id: "2",
    name: "Boréal Coffee",
    location: "Plan-les-Ouates",
    specialty: "Colombian single origin",
    rating: 4,
  },
];

export function CoffeeWidget() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-amber-600" />
          <h2 className="font-display text-lg font-semibold text-foreground">
            Coffee Spots
          </h2>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {coffeeSpots.map((spot) => (
          <div
            key={spot.id}
            className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 hover:border-amber-200 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-foreground">{spot.name}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3" />
                  {spot.location}
                </div>
                <p className="text-sm text-amber-700 mt-2">{spot.specialty}</p>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: spot.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          + Add a spot
        </button>
      </div>
    </div>
  );
}
