import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function FinalCTASection() {
  return (
    <section className="section lg:py-32 relative border-b border-border overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main headline with dramatic emphasis */}
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight space-y-4">
              <span className="block lg:text-5xl">
                Your{" "}
                <span className="bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent">
                  audience
                </span>{" "}
                is waiting.
              </span>
              <span className="block lg:text-6xl">
                Your{" "}
                <span className="bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent">
                  authority
                </span>{" "}
                is waiting.
              </span>
              <span className="block lg:text-7xl">
                Your{" "}
                <span className="bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent">
                  content machine
                </span>{" "}
                is waiting.
              </span>
            </h2>
          </div>

          {/* CTA with maximum emphasis */}
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              {/* Glowing effect behind button */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-2xl opacity-50 animate-pulse pointer-events-none" />

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
                <ArrowRightIcon size={28} weight="bold" className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
