import { siteConfig } from "./site-config";

interface WhatsAppMessageOptions {
  packageName?: string;
  duration?: string;
}

/**
 * Builds a pre-filled WhatsApp inquiry message.
 * If package context is provided, message references the specific package.
 * Otherwise, falls back to a generic inquiry message.
 */
export function buildWhatsAppMessage(options?: WhatsAppMessageOptions): string {
  if (options?.packageName) {
    const duration = options.duration ? ` ${options.duration}` : "";
    return `Assalamu'alaikum, saya tertarik dengan ${options.packageName}${duration}. Saya ingin mendapatkan informasi mengenai harga, jadwal keberangkatan, dan fasilitas yang tersedia.`;
  }

  return "Assalamu'alaikum, saya tertarik dengan layanan Umrah dari travel Anda. Saya ingin mendapatkan informasi lebih lanjut.";
}

/**
 * Returns a fully-formed wa.me deep link with the message pre-filled and encoded.
 */
export function getWhatsAppLink(options?: WhatsAppMessageOptions): string {
  const message = buildWhatsAppMessage(options);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Opens the WhatsApp deep link in a new tab.
 * Use inside onClick handlers of CTA buttons.
 */
export function openWhatsApp(options?: WhatsAppMessageOptions): void {
  if (typeof window === "undefined") return;
  window.open(getWhatsAppLink(options), "_blank", "noopener,noreferrer");
}
