import Image from "next/image";
import Squares from "@/components/Squares";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function SocialProofSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#006666"
          squareSize={100}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/80 to-transparent" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
            Client wins worth{" "}
            <span className="text-primary">bragging about</span>
          </h2>

          {/* Social Proof Images */}
          <div className="space-y-16 sm:space-y-28">
            <div className="relative w-full">
              <Image
                src="/images/social-proof-1.png"
                alt="Client testimonial 1"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full">
              <Image
                src="/images/social-proof-2.png"
                alt="Client testimonial 2"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center w-fit mx-auto mt-16">
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
    </section>
  );
}
