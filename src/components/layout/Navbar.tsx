"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { openWhatsApp } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Paket Umrah", href: "#paket-umrah" },
  { label: "Perjalanan", href: "#perjalanan" },
  { label: "Tentang Kami", href: "#trust" },
  { label: "FAQ", href: "#faq" },
];

// Place the logo file at: public/images/logo/logo.png (or .jpg)
const LOGO_SRC = "/images/logo/logo.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-400",
          isScrolled
            ? "bg-blue-50 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent",
        )}>
        <Container>
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-400",
              isScrolled ? "h-16" : "h-20",
            )}>
            <a href="/" className="flex items-center gap-3">
              <span
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-full transition-all duration-400",
                  isScrolled ? "h-10 w-10" : "h-12 w-12",
                )}>
                <Image
                  src={LOGO_SRC}
                  alt={`Logo ${siteConfig.name}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="text-heading-sm font-heading font-semibold text-primary">
                {siteConfig.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-md text-text hover:text-primary transition-colors duration-400">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button variant="primary" onClick={() => openWhatsApp()}>
                Konsultasi
              </Button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => openWhatsApp()}
                aria-label="Konsultasi via WhatsApp"
                className="p-2 text-primary">
                <MessageCircle size={24} strokeWidth={1.75} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Buka menu"
                className="p-2 text-primary">
                <Menu size={24} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
