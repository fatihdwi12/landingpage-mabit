import type { Hotel } from "@/types";

/**
 * PLACEHOLDER DATA — hotel names and distances are illustrative only.
 * MUST be replaced with verified information from the real travel agency.
 */
export const hotels: Hotel[] = [
  {
    city: "Makkah",
    name: "Hotel Contoh Makkah",
    starRating: 5,
    distanceInfo: "±500m dari Masjidil Haram",
    imageAlt: "Kamar hotel contoh di Makkah dengan pemandangan kota",
    isPlaceholder: true,
  },
  {
    city: "Madinah",
    name: "Hotel Contoh Madinah",
    starRating: 4,
    distanceInfo: "±300m dari Masjid Nabawi",
    imageAlt: "Kamar hotel contoh di Madinah dekat Masjid Nabawi",
    isPlaceholder: true,
  },
];
