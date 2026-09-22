import type { UmrahPackage } from "@/types";

/**
 * PLACEHOLDER DATA — for concept/demo purposes only.
 * Prices, inclusions, and departure info are illustrative and MUST be
 * replaced with verified data from the real travel agency before commercial use.
 */
export const packages: UmrahPackage[] = [
  {
    slug: "umrah-reguler-12-hari",
    label: "Paket Reguler",
    name: "Paket Umrah Reguler",
    duration: "12 Hari",
    price: 32500000,
    departureDate: "Tersedia beberapa pilihan keberangkatan",
    inclusions: [
      "Tiket pesawat",
      "Visa Umrah",
      "Hotel",
      "Transportasi",
      "Konsumsi",
      "Muthawwif",
      "Perlengkapan Umrah",
      "Manasik",
    ],
    isPlaceholder: true,
  },
  {
    slug: "umrah-premium-12-hari",
    label: "Paket Premium",
    name: "Paket Umrah Premium",
    duration: "12 Hari",
    price: 39500000,
    departureDate: "Tersedia beberapa pilihan keberangkatan",
    inclusions: [
      "Tiket pesawat",
      "Visa Umrah",
      "Hotel bintang 5 dekat Masjid",
      "Transportasi",
      "Konsumsi full board",
      "Muthawwif",
      "Perlengkapan Umrah premium",
      "Manasik",
    ],
    highlightFeature: "Akomodasi lebih dekat dengan Masjidil Haram & Masjid Nabawi",
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    slug: "umrah-plus-turki-14-hari",
    label: "Paket Plus",
    name: "Paket Umrah Plus Turki",
    duration: "14 Hari",
    price: 45000000,
    departureDate: "Tersedia beberapa pilihan keberangkatan",
    inclusions: [
      "Tiket pesawat",
      "Visa Umrah",
      "Hotel",
      "Transportasi",
      "Konsumsi",
      "Muthawwif",
      "Tur tambahan ke Turki",
      "Manasik",
    ],
    isPlaceholder: true,
  },
];
