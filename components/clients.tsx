import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Building2, ShoppingCart, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Fast-growing companies building their first remote teams",
  },
  {
    icon: Building2,
    title: "Agencies & Consultancies",
    description: "Professional services firms scaling their delivery capacity",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & SaaS Companies",
    description: "Tech companies optimizing operations and support",
  },
  {
    icon: Briefcase,
    title: "Founders & Small Businesses",
    description: "Entrepreneurs building lean, efficient teams",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground">
            If you need reliable people you can trust—without
            micromanaging—we&apos;re for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow text-center"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <client.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">
                  {client.title}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
