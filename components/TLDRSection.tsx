import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function TLDRSection() {
  const noItems = [
    "No editing.",
    "No guessing.",
    'No last-minute "what should I post today?"',
    "No content guilt.",
    "No inconsistency.",
  ];

  return (
    <section className="section border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Left Bracket */}
          <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-primary/80 hidden sm:block">
            <div className="absolute top-0 left-0 w-8 md:w-12 h-1 md:h-1.5 bg-primary/80"></div>
            <div className="absolute bottom-0 left-0 w-8 md:w-12 h-1 md:h-1.5 bg-primary/80"></div>
          </div>

          {/* Right Bracket */}
          <div className="absolute right-0 top-0 bottom-0 w-1 md:w-1.5 bg-primary/80 hidden sm:block">
            <div className="absolute top-0 right-0 w-8 md:w-12 h-1 md:h-1.5 bg-primary/80"></div>
            <div className="absolute bottom-0 right-0 w-8 md:w-12 h-1 md:h-1.5 bg-primary/80"></div>
          </div>

          {/* Content with padding for brackets */}
          <div className="sm:px-16 md:px-20">
            {/* Headline */}
            <div className="text-center mb-16">
              {/* TL;DR with tilted highlight */}
              <div className="mb-12 inline-block">
                <span className="inline-block bg-primary/80 px-6 py-2 transform -rotate-2 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  TL;DR:
                </span>
              </div>

              {/* Main statements with dividers */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  We record <span className="text-primary">you.</span>
                </h2>

                <div className="w-32 h-px bg-border/40 mx-auto"></div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  We do <span className="text-primary">everything.</span>
                </h2>

                <div className="w-32 h-px bg-border/40 mx-auto"></div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Your brand <span className="text-primary">grows.</span>
                </h2>
              </div>
            </div>

            {/* No Items - Vertical List */}
            <div className="space-y-6 mb-12 text-center">
              {noItems.map((item, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl text-muted-foreground"
                >
                  {item}
                </p>
              ))}
              <p className="text-lg md:text-xl font-semibold text-foreground pt-4">
                Just a system that works.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center w-fit mx-auto">
              <Button size="lg" className="hidden sm:flex group">
                BOOK YOUR STRATEGY SESSION
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
      </div>
    </section>
  );
}
