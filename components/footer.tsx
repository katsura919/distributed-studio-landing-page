import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">
              Distributed Studio
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building high-performing remote teams for growing companies.
              Remote talent. Real results. Zero borders.
            </p>
            <a
              href="mailto:hello@distributedstudio.co"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              hello@distributedstudio.co
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Who We Work With
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Talent Sourcing</li>
              <li className="text-muted-foreground">Remote Staffing</li>
              <li className="text-muted-foreground">Team Building</li>
              <li className="text-muted-foreground">Ongoing Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Distributed Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
