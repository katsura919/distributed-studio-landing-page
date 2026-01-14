import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserCheck,
  Target,
  Users,
  Settings,
  HeadphonesIcon,
  PaletteIcon,
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Talent Sourcing & Vetting",
    description:
      "We screen for skills, experience, communication, and cultural fit—so you only meet candidates worth hiring.",
  },
  {
    icon: Target,
    title: "Role-Based Placements",
    description:
      "Virtual Assistants, Customer Support, Social Media & Marketing, Designers, Tech & Operations Support, and custom roles.",
  },
  {
    icon: Users,
    title: "Dedicated Team Members",
    description:
      "Hire full-time or part-time remote professionals who work exclusively for your company, aligned to your timezone and workflow.",
  },
  {
    icon: Settings,
    title: "Flexible Hiring Models",
    description:
      "Monthly retainers, long-term placements, or trial-to-hire options. Scale up or down as your business evolves.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support & Management",
    description:
      "We don't disappear after placement. Our team provides continuous support to ensure performance and retention.",
  },
];

const whyUs = [
  {
    title: "Curated Talent Pool",
    description: "Only experienced, remote-ready professionals",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises",
  },
  {
    title: "Hands-On Support",
    description: "We stay involved beyond placement",
  },
  {
    title: "Scalable Solutions",
    description: "Hire one or build an entire team",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Remote Staffing Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide end-to-end remote staffing tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Distributed Studio Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Distributed Studio
            </h2>
            <p className="text-xl text-primary font-semibold mb-2">
              Not just staffing—strategic hiring.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don&apos;t believe in one-size-fits-all outsourcing. Every hire
              is aligned with your goals, culture, and workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
