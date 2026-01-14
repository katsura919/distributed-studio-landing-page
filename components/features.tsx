import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, RefreshCw, Handshake } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global talent, carefully vetted",
    description:
      "Access a curated pool of experienced, remote-ready professionals from around the world.",
  },
  {
    icon: Zap,
    title: "Fast placement timelines",
    description:
      "Get matched with qualified candidates in days, not months. Speed meets quality.",
  },
  {
    icon: RefreshCw,
    title: "Flexible staffing models",
    description:
      "Monthly retainers, long-term placements, or trial-to-hire. Scale up or down as needed.",
  },
  {
    icon: Handshake,
    title: "Long-term, people-first partnerships",
    description:
      "We stay involved beyond placement, ensuring lasting success for both sides.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in placing skilled remote professionals across
            operations, marketing, customer support, admin, tech, and creative
            roles. From sourcing to onboarding, we handle the heavy lifting so
            you can focus on growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
