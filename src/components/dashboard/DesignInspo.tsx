import { cn } from "@/lib/utils";
import { Palette, Lightbulb, ExternalLink, Heart } from "lucide-react";

interface InspoItem {
  id: string;
  title: string;
  source: string;
  category: "typography" | "ui" | "brand" | "motion";
  saved: boolean;
}

const inspoItems: InspoItem[] = [
  {
    id: "1",
    title: "Minimal Swiss Grid Systems",
    source: "Dribbble",
    category: "typography",
    saved: true,
  },
  {
    id: "2",
    title: "Fluid Glassmorphism Cards",
    source: "Awwwards",
    category: "ui",
    saved: false,
  },
  {
    id: "3",
    title: "Ocean Color Palettes",
    source: "Coolors",
    category: "brand",
    saved: true,
  },
  {
    id: "4",
    title: "Micro-interaction Patterns",
    source: "CodePen",
    category: "motion",
    saved: false,
  },
];

const getCategoryStyle = (category: string) => {
  switch (category) {
    case "typography":
      return "bg-primary/10 text-primary";
    case "ui":
      return "bg-ocean/10 text-ocean";
    case "brand":
      return "bg-sunset/10 text-sunset";
    case "motion":
      return "bg-scan/10 text-scan";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function DesignInspo() {
  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-sunset to-accent">
            <Palette className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Design Inspiration
            </h2>
            <p className="text-sm text-muted-foreground">
              Curated for your taste
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-2 stagger-children">
        {inspoItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-muted-foreground">{item.source}</span>
                <span className={cn(
                  "px-1.5 py-0.5 rounded text-[10px] font-medium capitalize",
                  getCategoryStyle(item.category)
                )}>
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                <Heart className={cn(
                  "h-4 w-4",
                  item.saved ? "fill-sunset text-sunset" : "text-muted-foreground"
                )} />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border">
        <button className="w-full py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View saved collection →
        </button>
      </div>
    </div>
  );
}
