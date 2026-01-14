import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Build Your Team. <span className="text-primary">Anywhere.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Distributed Studio helps growing companies hire, manage, and scale
            high-performing remote teams—without the overhead of traditional
            staffing agencies. We connect you with vetted global talent who work
            seamlessly as an extension of your business.
          </p>

          {/* Supporting Text */}
          <p className="text-base md:text-lg text-foreground/70 mb-10 font-medium">
            Whether you&apos;re a startup scaling fast or an established company
            optimizing operations, we make distributed hiring simple, reliable,
            and human.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="#contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book a Free Discovery Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8"
            >
              <Link href="#process" className="flex items-center gap-2">
                Get Matched with Talent
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Tagline */}
          <p className="mt-12 text-sm md:text-base font-semibold text-primary tracking-wide">
            Remote talent. Real results. Zero borders.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
