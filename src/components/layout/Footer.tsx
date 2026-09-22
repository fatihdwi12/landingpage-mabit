import Container from "@/components/ui/Container";
import MapEmbed from "@/components/ui/MapEmbed";
import { siteConfig } from "@/lib/site-config";
import { Instagram, Facebook, Music2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Paket Umrah", href: "#paket-umrah" },
  { label: "Perjalanan", href: "#perjalanan" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

// TODO: replace with the real, verified business address before commercial use.
const BUSINESS_ADDRESS = "Jalan Eka Surya 7 Marubun Lokkung North Sumatra";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-inverse">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4 md:py-24">
          <div className="flex flex-col gap-3">
            <span className="text-heading-sm font-heading font-semibold">
              {siteConfig.name}
            </span>
            <p className="text-body-sm text-text-inverse/70 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-label uppercase tracking-widest text-accent font-semibold">
              Navigasi
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-md text-text-inverse/80 hover:text-accent transition-colors duration-400">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-label uppercase tracking-widest text-accent font-semibold">
              Kontak
            </span>
            <p className="text-body-md text-text-inverse/80">
              {BUSINESS_ADDRESS}
            </p>
            <p className="text-body-md text-text-inverse/80">
              info@umrahtravel-example.com
            </p>

            <MapEmbed address={BUSINESS_ADDRESS} className="mt-2" />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-label uppercase tracking-widest text-accent font-semibold">
              Legal
            </span>
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-md text-text-inverse/80 hover:text-accent transition-colors duration-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-text-inverse/15 py-6 md:flex-row">
          <p className="text-body-sm text-text-inverse/60">
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="text-text-inverse/70 hover:text-accent">
              <Instagram size={20} strokeWidth={1.75} />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="text-text-inverse/70 hover:text-accent">
              <Facebook size={20} strokeWidth={1.75} />
            </a>
            <a
              href={siteConfig.social.tiktok}
              aria-label="TikTok"
              className="text-text-inverse/70 hover:text-accent">
              <Music2 size={20} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
