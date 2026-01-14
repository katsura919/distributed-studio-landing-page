import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Users, CheckCircle, Headset } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We understand your needs and goals",
  },
  {
    number: "02",
    icon: Users,
    title: "Talent Matching",
    description: "Shortlisted candidates within days",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Interview & Selection",
    description: "You choose who fits best",
  },
  {
    number: "04",
    icon: Headset,
    title: "Onboarding & Support",
    description: "We assist every step of the way",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-primary font-semibold mb-2">
            Simple. Efficient. Human.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <Card className="border-border hover:shadow-lg transition-shadow mb-4 bg-card">
                    <CardContent className="pt-6 pb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="text-4xl font-bold text-primary/20 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <Card className="flex-1 border-border">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary/20 mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
