import { Button } from "@/components/ui/button";
import Squares from "@/components/Squares";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Icon from "@/components/Icon";
import CyclingText from "@/components/CyclingText";

export default function HeroSection() {
  return (
    <section className="section py-12 relative overflow-hidden bg-background">
      {/* Animated Squares Background */}
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={150}
          direction="diagonal"
          borderColor="#006666"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-background to-secondary/5 pointer-events-none" />

      {/* Container Layer */}
      <div className="container mx-auto px-4 relative">
        {/* Content Layer - Hero gets max-w-6xl for wide visuals */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Logo */}
          <Icon className="h-10 md:h-14 w-auto mx-auto" />

          {/* Main Headline + Subheadline */}
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            {/* Desktop header */}
            <h1 className="hidden md:block text-5xl/14 lg:text-6xl/18 font-bold tracking-tight text-foreground">
              You're Smart. You're Busy. And You Don't Have Time To Edit Reels
              <br />
              <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                — That's Why We Exist.
              </span>
            </h1>

            {/* Mobile header */}
            <h1 className="md:hidden text-4xl/12 font-bold tracking-tight text-foreground">
              Your Business Is A 10/10 — Your Content Is A 2/10.{" "}
              <br className="" />
              <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                We Fix That!
              </span>
            </h1>

            <CyclingText />
          </div>

          {/* VSL Video */}
          <div className="max-w-3xl xl:max-w-4xl mx-auto">
            {/* Micro Teaser */}
            <div className="text-center">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Watch how we turn busy founders & businesses into authority &
                lead machines.
              </p>
            </div>

            <div className="relative bg-black/90 rounded-2xl p-8 border-2 border-secondary/30 shadow-[0_20px_50px_rgba(0,102,102,0.5)] hover:shadow-[0_30px_60px_rgba(0,102,102,0.5)] mt-6 transition-shadow duration-500">
              <div className="aspect-video w-full relative overflow-hidden rounded-xl bg-linear-to-br from-primary/20 via-secondary/20 to-primary/20">
                {/* Create a fake thumbnail background */}
                <div className="absolute inset-0 bg-black/50" />
                <HeroVideoDialog
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/your-video-id"
                  thumbnailSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000000'/%3E%3C/svg%3E"
                  thumbnailAlt="Watch How It Works Video"
                  className="w-full h-full"
                  text="Watch How It Works (2:21)"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center w-fit mx-auto space-y-6">
            <Button size="lg" className="hidden sm:flex group">
              BOOK YOUR FREE 30 MINUTE STRATEGY SESSION
              <ArrowRightIcon
                weight="bold"
                className="size-6 ml-3 transition-transform group-hover:translate-x-2"
              />
            </Button>
            <Button size="sm" className="sm:hidden group">
              BOOK YOUR STRATEGY SESSION
              <ArrowRightIcon
                weight="bold"
                className="size-4 ml-1 transition-transform group-hover:translate-x-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
