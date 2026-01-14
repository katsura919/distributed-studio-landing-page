"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Process", link: "#process" },
  { name: "Clients", link: "#clients" },
  { name: "Contact", link: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        <a
          href="#"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
          <span className="text-xl font-bold text-primary dark:text-primary">
            Distributed Studio
          </span>
        </a>

        <NavItems items={navItems} />

        <NavbarButton href="#contact" variant="dark">
          Book a Call
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
          >
            <span className="text-xl font-bold text-primary dark:text-primary">
              Distributed Studio
            </span>
          </a>

          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="#contact"
            variant="dark"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
