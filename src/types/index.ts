export interface UmrahPackage {
  slug: string;
  label: string; // e.g. "PAKET REGULER"
  name: string; // e.g. "Paket Umrah Reguler"
  duration: string; // e.g. "12 Hari"
  price: number; // in IDR, e.g. 32500000
  departureDate?: string; // e.g. "Tersedia beberapa keberangkatan"
  hotelInfo?: string;
  inclusions: string[];
  highlightFeature?: string;
  isFeatured?: boolean; // "Paling Diminati"
  isPlaceholder: true; // enforce placeholder labeling per content rules
}

export interface Hotel {
  city: "Makkah" | "Madinah";
  name: string;
  starRating: number;
  distanceInfo: string;
  imageAlt: string;
  isPlaceholder: true;
}

export interface Destination {
  city: "Makkah" | "Madinah";
  headline: string;
  highlights: string[];
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  isPlaceholder: true;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Facility {
  label: string;
  icon: string; // lucide-react icon name
}

export interface JourneyStage {
  day: string; // e.g. "Hari 01"
  title: string; // e.g. "Jakarta → Madinah"
}

export interface Guide {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
  isPlaceholder: true;
}

export interface TrustIndicator {
  title: string;
  description: string;
  icon: string;
}
