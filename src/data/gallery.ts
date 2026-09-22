export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  isPlaceholder: true;
}

/**
 * PLACEHOLDER GALLERY DATA — for concept/demo purposes only.
 *
 * These entries represent the STRUCTURE of a real documentation gallery,
 * not actual completed trips. Before commercial use:
 *   1. Replace every "src" with a real photo from an actual departure,
 *      taken with explicit consent from the pilgrims shown.
 *   2. Replace every "caption" with the real departure batch/date/location.
 *   3. Never present stock photography as if it documents a real trip —
 *      this misleads potential customers and violates the project's
 *      content authenticity rules.
 *
 * Place real image files in: public/images/gallery/
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/gallery/doc1 (1).jpg",
    alt: "Contoh dokumentasi jamaah di Masjidil Haram",
    caption: "Jamaah Keberangkatan — Masjidil Haram",
    isPlaceholder: true,
  },
  {
    src: "/images/gallery/doc1 (4).jpg",
    alt: "Contoh dokumentasi jamaah di Masjid Nabawi",
    caption: "Jamaah Keberangkatan — Masjid Nabawi",
    isPlaceholder: true,
  },
  {
    src: "/images/gallery/doc1 (5).jpg",
    alt: "Contoh dokumentasi kegiatan ziarah",
    caption: "Ziarah Rombongan — Madinah",
    isPlaceholder: true,
  },
  {
    src: "/images/gallery/gallery (1).jpg",
    alt: "Contoh dokumentasi kegiatan manasik",
    caption: "Sesi Manasik Sebelum Keberangkatan",
    isPlaceholder: true,
  },
  {
    src: "/images/gallery/gallery (2).jpg",
    alt: "Contoh dokumentasi suasana hotel jamaah",
    caption: "Suasana Akomodasi Jamaah",
    isPlaceholder: true,
  },
  {
    src: "/images/gallery/gallery (3).jpg",
    alt: "Contoh dokumentasi keberangkatan jamaah",
    caption: "Momen Keberangkatan Jamaah",
    isPlaceholder: true,
  },
];
