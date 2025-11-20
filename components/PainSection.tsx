import { Card, CardContent } from "@/components/ui/card";
import {
  HourglassIcon,
  ClockIcon,
  TrendDownIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function PainAgitationSolutionSection() {
  return (
    <section className="section bg-linear-to-b from-background via-muted/20 to-background relative overflow-hidden border-b-primary border-b-2">
      <div className="container max-sm:max-w-full mx-auto px-4">
        <div className="space-y-16">
          <div className="space-y-8 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              If you're like most founders & businesses… your content is a
              rollercoaster.
            </h2>
            <div className="mx-auto h-px w-24 bg-linear-to-r from-transparent via-destructive to-transparent" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute inset-0 -z-10 rounded-[40px] bg-linear-to-br from-primary/5 via-background to-destructive/5 blur-3xl"
              aria-hidden
            />

            <Card className="relative overflow-hidden rounded-4xl border-2 border-muted bg-card shadow-xl">
              <div
                className="hidden sm:block absolute inset-y-0 left-8 w-[3px] bg-linear-to-b from-destructive via-destructive/30 to-transparent rounded-full"
                aria-hidden
              />
              <div
                className="absolute top-8 right-8 size-10 sm:size-12 lg:size-16 rounded-full border-2 border-destructive/60 flex items-center justify-center text-destructive rotate-3"
                aria-hidden
              >
                <TrendDownIcon
                  weight="duotone"
                  className="size-4 sm:size-6 lg:size-7"
                />
              </div>
              <div className="absolute -top-6 left-14 flex gap-3" aria-hidden>
                <div className="h-5 w-5 rounded-full border-2 border-muted bg-background" />
                <div className="h-5 w-5 rounded-full border-2 border-muted bg-background" />
              </div>
              <CardContent className="relative py-14 sm:px-16 md:py-16">
                <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-foreground/95">
                  <p>One week you're posting daily.</p>

                  <p>
                    Next week you vanish like an uninterested employee on annual
                    leave.
                  </p>

                  <p>Then you try to "force yourself to get back on track"</p>

                  <p>...aaaand it lasts 48 hours.</p>

                  <p>Sound familiar?</p>

                  <p>
                    Be honest — you don't need{" "}
                    <span className="italic font-medium text-foreground">
                      more ideas
                    </span>
                    .
                  </p>

                  <p>
                    You need a{" "}
                    <span className="italic font-medium text-foreground">
                      system
                    </span>{" "}
                    that runs even when you're tired, busy, travelling, or
                    knee-deep in meetings.
                  </p>

                  <p>Content shouldn't drain you.</p>

                  <p>
                    It should{" "}
                    <span className="italic font-medium text-foreground">
                      duplicate
                    </span>{" "}
                    you.
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex items-center justify-center rounded-full border-2 border-muted p-4 text-destructive bg-background shadow-lg">
                    <HourglassIcon className="size-6" weight="duotone" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-muted/80 to-transparent" />
                    <div className="flex gap-3 text-muted-foreground">
                      <ClockIcon className="size-5" weight="duotone" />
                      <TrendDownIcon className="size-5" weight="duotone" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
