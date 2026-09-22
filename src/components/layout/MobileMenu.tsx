"use client";

import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-primary px-6 py-6 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-between">
        <span className="text-heading-sm font-heading text-text-inverse">Menu</span>
        <button
          onClick={onClose}
          aria-label="Tutup menu"
          className="text-text-inverse p-2 -mr-2"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-6 mt-12">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-heading-md font-heading text-text-inverse hover:text-accent transition-colors duration-400"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <Button
          variant="whatsapp"
          size="lg"
          className="w-full bg-text-inverse text-primary border-text-inverse hover:bg-accent hover:border-accent hover:text-primary"
          onClick={() => {
            onClose();
            openWhatsApp();
          }}
        >
          Konsultasi Sekarang
        </Button>
      </div>
    </div>
  );
}
