import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Testimonials } from "@/components/testimonials";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        {/* Background Image for Header and Hero */}
        <div className="absolute inset-0 opacity-90 dark:opacity-5">
          <Image
            src="/team-hero.jpg"
            alt="Distributed team"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/20" />
        <Hero />
      </div>
      <main>
        <Features />
        <Services />
        <Clients />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
