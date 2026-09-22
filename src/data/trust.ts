import type { TrustIndicator } from "@/types";

/**
 * IMPORTANT: Do not invent licenses, statistics, or certification numbers.
 * Replace descriptions with verified information from the real travel agency.
 */
export const trustIndicators: TrustIndicator[] = [
  {
    title: "Travel Berizin",
    description: "Informasikan status izin resmi travel di sini.",
    icon: "ShieldCheck",
  },
  {
    title: "Pembimbing Berpengalaman",
    description: "Jamaah didampingi selama perjalanan oleh pembimbing yang berpengalaman.",
    icon: "Users",
  },
  {
    title: "Hotel Strategis",
    description: "Hotel dipilih dengan mempertimbangkan kenyamanan dan lokasi.",
    icon: "MapPin",
  },
  {
    title: "Pendampingan Penuh",
    description: "Tim mendampingi jamaah sejak persiapan hingga kepulangan.",
    icon: "HeartHandshake",
  },
];
