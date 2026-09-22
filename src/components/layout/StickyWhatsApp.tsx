"use client";

import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function StickyWhatsApp() {
  return (
    <button
      onClick={() => openWhatsApp()}
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full bg-primary text-text-inverse shadow-lift w-14 h-14 hover:bg-primary-hover transition-colors duration-400 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={1.75} />
    </button>
  );
}
