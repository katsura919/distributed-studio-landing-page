import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            Build Your Team.{" "}
            <span className="text-primary drop-shadow-lg">Anywhere.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Connect with vetted global talent who work seamlessly as an
            extension of your business—without the overhead of traditional
            staffing agencies.
          </p>

          {/* Supporting Text */}
          <p className="text-base md:text-lg text-white/80 mb-10 font-medium drop-shadow-md">
            Scale fast or optimize operations. We make distributed hiring simple
            and reliable.
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

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
