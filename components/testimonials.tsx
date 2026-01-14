"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Working with Distributed Studio transformed our hiring process. We found exceptional developers who integrated seamlessly with our team. The quality of talent and professionalism exceeded our expectations.",
    name: "Sarah Chen",
    designation: "CTO at TechVision Inc",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    quote:
      "The team at Distributed Studio understood our needs perfectly. Within weeks, we had skilled remote workers who felt like part of our core team. It's been a game-changer for scaling our operations.",
    name: "Michael Rodriguez",
    designation: "Founder & CEO at GrowthLabs",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    quote:
      "We've tried multiple staffing agencies before, but none come close to Distributed Studio. The vetted talent pool and ongoing support make all the difference. Highly recommended for any growing company.",
    name: "Emily Thompson",
    designation: "VP of Operations at ScaleUp Co",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
  {
    quote:
      "From onboarding to daily collaboration, everything just works. Distributed Studio helped us build a remote team that delivers results consistently. The ROI has been incredible.",
    name: "David Park",
    designation: "Head of Product at InnovateTech",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from companies that have
            scaled their teams with Distributed Studio.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
