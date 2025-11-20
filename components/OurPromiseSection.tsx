import {
  CalendarCheckIcon,
  ScissorsIcon,
  TargetIcon,
  ChatCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

export default function OurPromiseSection() {
  const promises = [
    { name: "Consistent publishing", icon: CalendarCheckIcon },
    { name: "Professional editing", icon: ScissorsIcon },
    { name: "Strategic content", icon: TargetIcon },
    { name: "Clean communication", icon: ChatCircleIcon },
    { name: "Measurable output", icon: ChartBarIcon },
    { name: "Reliability", icon: ShieldCheckIcon },
    { name: "A long-term content engine", icon: RocketIcon },
  ];

  return (
    <section className="section bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* A. Headline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What we do <span className="text-primary">guarantee:</span>
            </h2>
          </div>

          {/* B. Promise Grid */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {promises.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-6 bg-card hover:bg-card/20 transition-colors w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <Icon weight="duotone" className="size-9 text-primary" />
                      <span className="text-lg font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* C. Bottom Statement Block */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
              No smoke.
              <br />
              No mirrors.
              <br />
              No hype.
              <br />
              <span className="text-primary">Just execution.</span>
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center w-fit mx-auto space-y-6 mt-16">
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
