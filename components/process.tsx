"use client";

import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Users, CheckCircle, Headset } from "lucide-react";

const processData = [
  {
    title: "Discovery Call",
    content: (
      <Card className="border-border bg-white">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
              <PhoneCall className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Understanding Your Needs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We start with a free discovery call to understand your business
                goals, team culture, and specific talent requirements. No
                pressure, just a conversation about how we can help you scale.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Talent Matching",
    content: (
      <Card className="border-border bg-white">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Curated Candidates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Within days, we present you with a shortlist of pre-vetted
                candidates who match your technical requirements and cultural
                fit. Every candidate goes through rigorous screening and skills
                assessment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Interview & Selection",
    content: (
      <Card className="border-border bg-white">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
              <CheckCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                You Make the Final Choice
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Interview the candidates and select who fits best with your
                team. We facilitate the process but you have complete control
                over hiring decisions. Your success is our priority.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Onboarding & Support",
    content: (
      <Card className="border-border bg-white">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
              <Headset className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Continuous Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From day one, we assist with seamless onboarding and provide
                ongoing support. Whether it's managing payroll, ensuring
                compliance, or addressing any challenges—we're with you every
                step of the way.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple. Efficient. Human.
          </p>
        </div>

        <Timeline data={processData} />
      </div>
    </section>
  );
}
