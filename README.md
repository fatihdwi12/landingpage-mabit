# Premium Umrah Travel Landing Page

Landing page konsep premium untuk agen travel Umrah, dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Framer Motion. Bergaya **Modern Islamic Luxury**: elegan, minimal, tenang, dan berorientasi konversi lewat WhatsApp.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

```bash
npm install
cp .env.example .env.local
# isi NEXT_PUBLIC_WHATSAPP_NUMBER dengan nomor WhatsApp bisnis
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Folder

```
src/
├── app/                  # App Router pages, layout, metadata
├── components/
│   ├── layout/           # Navbar, Footer, MobileMenu, StickyWhatsApp
│   ├── sections/         # Section-section landing page (Phase 2+)
│   └── ui/               # Reusable UI primitives (Button, Card, Badge, dll.)
├── data/                 # Placeholder content, terpisah dari komponen UI
├── lib/                  # Utilities (WhatsApp link builder, motion tokens, dll.)
└── types/                # Shared TypeScript interfaces
```

## Konfigurasi Penting

- **Nomor WhatsApp**: hanya disimpan di `.env.local` sebagai `NEXT_PUBLIC_WHATSAPP_NUMBER`, diakses lewat `src/lib/site-config.ts`. Jangan hardcode nomor di komponen manapun.
- **Pesan WhatsApp**: dibangun otomatis lewat `src/lib/whatsapp.ts` (`buildWhatsAppMessage`, `getWhatsAppLink`, `openWhatsApp`). Mendukung konteks nama paket.

## Status Konten

Seluruh data di `src/data/*.ts` (paket, hotel, testimoni, pembimbing, trust indicators) adalah **placeholder** untuk keperluan demo/konsep. Data ini harus diganti dengan informasi terverifikasi dari agen travel asli sebelum digunakan secara komersial. Jangan menyajikan data placeholder sebagai fakta bisnis nyata.

## Development Phases

1. **Foundation** (selesai) — setup Next.js, TypeScript, Tailwind, font, layout dasar, data layer, WhatsApp utility.
2. **Core Landing Page** — Navbar, Hero, Trust, Packages, Destinations, Facilities, Final CTA, Footer.
3. **Experience** — Journey timeline, Hotels, Guides, Testimonials, FAQ.
4. **Conversion** — WhatsApp integration lanjutan, package-specific inquiry, sticky mobile CTA.
5. **Optimization** — SEO, metadata, image optimization, accessibility, Lighthouse tuning.
6. **Future** — CMS (Strapi), admin dashboard, lead management, analytics.
