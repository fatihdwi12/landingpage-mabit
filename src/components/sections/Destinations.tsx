"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { destinations } from "@/data/destinations";
import { imageReveal, viewportOnce } from "@/lib/motion";

/**
 * Local image paths. Place the actual files in:
 *   public/images/destinations/madinah.jpg
 *   public/images/destinations/makkah.jpg
 *
 * Recommended: high-resolution (min. 1600px wide), landscape orientation,
 * JPG or WebP. Next.js will automatically optimize/serve AVIF/WebP at runtime.
 */
const images: Record<string, string> = {
  Madinah: "/images/destinations/madinah.jpg",
  Makkah: "/images/destinations/makkah.jpg",
};

export default function Destinations() {
  return (
    <section id="destinasi" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.city}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={imageReveal}
            className="relative flex min-h-[70vh] items-end overflow-hidden">
            <Image
              src={images[dest.city]}
              alt={dest.imageAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />

            <Container className="relative z-10 py-10">
              <span className="text-label uppercase tracking-widest text-accent font-semibold">
                {dest.city}
              </span>
              <h3 className="mt-2 text-heading-lg font-heading text-text-inverse">
                {dest.headline}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {dest.highlights.map((h) => (
                  <li key={h} className="text-body-md text-text-inverse/85">
                    {h}
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
