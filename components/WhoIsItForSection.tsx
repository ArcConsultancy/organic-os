import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WhoIsItForSection() {
  const forYouItems = [
    "want consistency",
    "want authority",
    "want quality content",
    "want structure",
    "want to be the thought leader of your field",
    "want content that actually generates leads",
    "have high standards for your business",
  ];

  const notForItems = [
    "people who hate being on camera",
    "people who refuse to commit",
    "people who want cheap unreliable services",
    "people who want instant fame",
    "people who think the algorithm is out to get them",
    "anyone searching for a magic pill",
  ];

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* A. Full-width Headline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              OrganicOS is <span className="text-primary">NOT</span> for
              everyone.
            </h2>
          </div>

          {/* B. Two Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Left Column - This is for you */}
            <Card className="p-8 md:p-10 border-2 border-primary/20 bg-card hover:border-primary/40 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
                This is for you ONLY if you:
              </h3>
              <div className="space-y-5">
                {forYouItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-4 h-4 text-primary"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-lg text-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Right Column - Not for */}
            <Card className="p-8 md:p-10 border-2 border-destructive/20 bg-card hover:border-destructive/40 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
                Not for:
              </h3>
              <div className="space-y-5">
                {notForItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X
                        className="w-4 h-4 text-destructive"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-lg text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* C. Bottom Centered Line */}
          <div className="text-center">
            <p className="text-sm md:text-lg text-muted-foreground">
              (we don&apos;t sell magic, we sell systems)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
