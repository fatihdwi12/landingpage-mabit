/**
 * Central site configuration.
 * WhatsApp number and business info live here ONLY.
 * Never hardcode the WhatsApp number anywhere else in the app.
 */

export const siteConfig = {
  name: "Mabit Tour", // TODO: replace with real business name
  description:
    "Perjalanan Umrah yang dipersiapkan dengan penuh kepercayaan, kenyamanan, dan pendampingan penuh dari keberangkatan hingga kembali ke tanah air.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://umrah-travel-example.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  locale: "id_ID",
  keywords: [
    "Travel Umrah",
    "Paket Umrah",
    "Paket Umrah 2026",
    "Travel Umrah Medan",
    "Umrah Indonesia",
    "Umrah plus",
  ],
  social: {
    instagram: "https://www.instagram.com/mabittour.pusat/", // TODO: replace with real handle
    facebook: "https://web.facebook.com/mabit.iman?_rdc=1&_rdr",
    tiktok: "https://www.tiktok.com/@mabit.media",
  },
} as const;
