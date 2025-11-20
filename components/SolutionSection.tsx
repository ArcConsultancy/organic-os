import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  VideoIcon,
  PencilIcon,
  CalendarIcon,
  ChartBarIcon,
  SparkleIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function SolutionSection() {
  const features = [
    {
      icon: ChartBarIcon,
      title: "We plan your content",
      subtitle: "(based on strategy, not vibes)",
    },
    {
      icon: VideoIcon,
      title: "We record you",
      subtitle: "(you talk — we extract brilliance)",
    },
    {
      icon: PencilIcon,
      title: "We edit everything",
      subtitle: "(no Canva disasters, no shaky phone videos)",
    },
    {
      icon: CalendarIcon,
      title: "We post consistently",
      subtitle: "(across IG, YouTube, Linkedin & TikTok — like clockwork)",
    },
    {
      icon: ChartBarIcon,
      title: "We optimize weekly",
      subtitle: "(because guesswork isn't a strategy)",
    },
    {
      icon: SparkleIcon,
      title: "You stay in your genius zone",
      subtitle: "(while your brand grows)",
    },
  ];

  const shortFlow = [
    {
      text: "You talk",
      badgeClass: "border-primary/30 bg-primary/10 text-primary",
    },
    {
      text: "We do everything",
      badgeClass:
        "border-secondary/30 bg-secondary/10 text-secondary-foreground",
    },
    {
      text: "Your content machine runs & generates leads on autopilot.",
      badgeClass: "border-primary/30 bg-primary/10 text-foreground",
    },
  ];

  return (
    <section className="section bg-linear-to-b from-muted/20 via-background to-background relative overflow-hidden border-b-primary border-b-2">
      {/* Top-left corner triangle */}
      <div
        className="absolute top-0 left-0 w-0 h-0 border-l-50 md:border-l-100 2xl:border-l-200 border-l-primary border-b-50 md:border-b-100 2xl:border-b-200 border-b-transparent"
        aria-hidden="true"
      />

      {/* Top-right corner triangle */}
      <div
        className="absolute top-0 right-0 w-0 h-0 border-r-50 md:border-r-100 2xl:border-r-200 border-r-primary border-b-50 md:border-b-100 2xl:border-b-200 border-b-transparent"
        aria-hidden="true"
      />

      {/* Bottom-left corner triangle - smaller */}
      <div
        className="absolute bottom-0 left-0 w-0 h-0 border-l-50 md:border-l-100 2xl:border-l-150 border-l-primary border-t-50 md:border-t-100 2xl:border-t-150 border-t-transparent"
        aria-hidden="true"
      />

      {/* Bottom-right corner triangle - smaller */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0 border-r-50 md:border-r-100 2xl:border-r-150 border-r-primary border-t-50 md:border-t-100 2xl:border-t-150 border-t-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              Here's what <span className="text-primary">OrganicOS</span>{" "}
              actually does{" "}
              <span className="text-muted-foreground">(in plain English):</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-primary/20 bg-card backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <feature.icon
                        weight="duotone"
                        className="size-12 text-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-base text-muted-foreground font-medium">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <Card className="border-primary/15 bg-card shadow-xl backdrop-blur">
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.25em] text-primary">
                  In short
                </h3>
              </div>

              <div className="flex flex-col items-center gap-4 text-center text-base md:flex-row md:justify-center md:text-lg">
                {shortFlow.map((step, index) => (
                  <div key={step.text} className="flex items-center gap-4">
                    <span
                      className={`rounded-full border px-5 py-3 font-semibold leading-tight ${step.badgeClass}`}
                    >
                      {step.text}
                    </span>
                    {index < shortFlow.length - 1 && (
                      <span
                        aria-hidden
                        className="text-2xl text-muted-foreground"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center w-fit mx-auto space-y-6">
            <Button size="lg" className="hidden sm:flex group">
              BOOK YOUR FREE 30 MINUTE STRATEGY SESSION
              <ArrowRightIcon
                size={28}
                weight="bold"
                className="ml-3 transition-transform group-hover:translate-x-2"
              />
            </Button>
            <Button size="sm" className="sm:hidden group">
              BOOK YOUR STRATEGY SESSION
              <ArrowRightIcon
                size={28}
                weight="bold"
                className="ml-1 transition-transform group-hover:translate-x-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
