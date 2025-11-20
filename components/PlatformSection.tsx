import {
  Instagram,
  PlaySquare,
  Video,
  Film,
  Type,
  Image as ImageIcon,
  Mic,
  TvMinimalPlay,
} from "lucide-react";

export default function PlatformSection() {
  const deliverables = [
    { name: "Instagram", icon: Instagram },
    { name: "TikTok", icon: PlaySquare },
    { name: "YouTube", icon: TvMinimalPlay },
    { name: "Shorts", icon: Video },
    { name: "Reels", icon: Film },
    { name: "Titles", icon: Type },
    { name: "Thumbnails", icon: ImageIcon },
    { name: "Hooks", icon: Mic },
  ];

  return (
    <section className="section bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* A. Large Center Headline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              One recording session ={" "}
              <span className="text-primary">Content everywhere</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We shoot, edit, post & repurpose your content intelligently (not
              lazily):
            </p>
          </div>

          {/* B. Platform Wall - Grid of Deliverables */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-6 bg-card hover:bg-card/20 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <Icon
                        className="w-9 h-9 text-primary"
                        strokeWidth={1.5}
                      />
                      <span className="text-lg font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* C. Bottom Text */}
          <div className="text-center max-w-xl mx-auto">
            <div className="text-lg md:text-xl text-foreground font-medium mb-4 space-y-3">
              <p>All aligned.</p>
              <p>All optimized.</p>
              <p>All handled by us.</p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              You won&apos;t have to think about formats, fonts, aspect ratios,
              subtitles, or algorithm updates ever again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
