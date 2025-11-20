import {
  ClockIcon,
  LockKeyIcon,
  WarningIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function ScarcitySection() {
  const reasons = [
    {
      text: "Because quality takes time.",
      icon: ClockIcon,
    },
    {
      text: "Because consistency requires structure.",
      icon: LockKeyIcon,
    },
    {
      text: "Because attention is a finite resource — and we protect it fiercely.",
      icon: WarningIcon,
    },
  ];

  const closingStatements = [
    "Slots fill fast.",
    "If all spots are taken, you'll join the waitlist.",
    "Simple.",
  ];

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              We only onboard a{" "}
              <span className="text-primary">
                limited number of clients per month.
              </span>
            </h2>
          </div>

          {/* Unified Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
            {/* Left Panel: Reasoning */}
            <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
              <h3 className="text-2xl font-bold text-destructive mb-8">Why?</h3>
              <div className="space-y-8">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div key={index} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="w-6 h-6 text-primary"
                          weight="duotone"
                        />
                      </div>
                      <p className="text-lg text-foreground leading-relaxed pt-2">
                        {reason.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Outcome */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-muted/10 flex flex-col justify-center">
              <div className="space-y-8">
                {closingStatements.map((statement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <p className="text-xl font-medium text-foreground">
                      {statement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
