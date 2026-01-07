import { cn } from "@/lib/utils";

export function BackgroundWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/[0.02] via-transparent to-powder/30" />
      
      {/* Wave 1 - Bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-64 text-ocean/[0.04]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
      
      {/* Wave 2 - Middle */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-48 text-ocean/[0.03]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,234.7C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
      
      {/* Mountain silhouette - top right */}
      <svg
        className="absolute top-0 right-0 w-1/2 h-96 text-alpine/[0.06]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path
          fill="currentColor"
          d="M800,0 L800,400 L400,400 L500,280 L450,300 L550,180 L520,200 L620,80 L580,120 L700,0 Z"
        />
        <path
          fill="currentColor"
          opacity="0.5"
          d="M800,0 L800,400 L600,400 L650,320 L620,340 L720,200 L680,240 L780,100 L750,130 L800,0 Z"
        />
      </svg>
      
      {/* Snowflakes - subtle dots */}
      <div className="absolute top-20 right-40 w-1 h-1 rounded-full bg-alpine/20 animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-60 w-1.5 h-1.5 rounded-full bg-alpine/15 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-16 right-80 w-1 h-1 rounded-full bg-alpine/20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-32 w-1 h-1 rounded-full bg-alpine/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-24 right-96 w-1.5 h-1.5 rounded-full bg-alpine/15 animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}
