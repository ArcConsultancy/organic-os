import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
  return (
    <section className="section lg:py-32 h-screen sm:h-fit flex items-center border-b border-border bg-muted/20 relative overflow-hidden">
      {/* Top-left corner triangle */}
      <div
        className="absolute top-0 left-0 w-0 h-0 border-l-150 sm:border-l-100 lg:border-l-200 border-l-primary border-b-150 sm:border-b-100 lg:border-b-200 border-b-transparent"
        aria-hidden="true"
      />

      {/* Bottom-right corner triangle */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0 border-r-150 sm:border-r-100 lg:border-r-200 border-r-primary border-t-150 sm:border-t-100 lg:border-t-200 border-t-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main headline with gradient emphasis */}
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Ready to stop{" "}
              <span className="text-muted-foreground">posting randomly</span>{" "}
              <span className="bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">
                and start growing strategically?
              </span>
            </h2>
          </div>

          {/* CTA Button */}
          <div className="text-center w-fit mx-auto">
            <Button size="lg" className="hidden sm:flex group">
              BOOK YOUR FREE 30 MIN STRATEGY SESSION
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
    </section>
  );
}
