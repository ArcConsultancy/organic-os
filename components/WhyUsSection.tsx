import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default function WhyUsSection() {
  const wrongApproach = [
    "A little motivational quote here.",
    "A random B-roll there.",
    "A recycled Canva graphic from 2017.",
    "A reel with a sound trending for 4 minutes.",
  ];

  const rightApproach = [
    "attracts",
    "engages",
    "builds authority",
    "grows consistently",
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Why us? Because most "content agencies"{" "}
            <span className="text-primary">are doing it wrong.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: The Problem */}
          <div className="flex flex-col p-8 lg:p-10 rounded-3xl bg-muted/30 border border-border/50 h-full">
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Here's the sad truth:
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most agencies treat your content like a random buffet.
              </p>
            </div>

            <div className="flex-1 space-y-5">
              {wrongApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <XCircleIcon
                    weight="fill"
                    className="size-6 text-destructive shrink-0 mt-0.5"
                  />
                  <span className="text-base text-muted-foreground leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-border/10">
              <p className="text-lg font-semibold text-foreground italic">
                And they call that "strategy."
              </p>
            </div>
          </div>

          {/* Right Column: The Solution */}
          <div className="flex flex-col p-8 lg:p-10 rounded-3xl bg-card border-2 border-primary shadow-sm h-full">
            <div className="space-y-2 text-lg text-muted-foreground mb-8">
              <p>We don't do random.</p>
              <p>We don't do rushed.</p>
              <p>
                We don't do "let's just post something to keep the feed alive."
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="text-2xl font-bold text-foreground">
                We engineer content that:
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                {rightApproach.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon
                      weight="fill"
                      className="size-7 text-primary shrink-0"
                    />
                    <span className="text-lg font-medium text-foreground capitalize">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-col lg:flex-row gap-4 sm:items-center justify-between p-6 bg-primary/5 rounded-2xl text-center sm:text-left">
                <span className="text-lg font-bold text-primary">
                  Real strategy.
                </span>
                <span className="text-lg font-bold text-primary">
                  Real execution.
                </span>
                <span className="text-lg font-bold text-primary">
                  Real results.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
