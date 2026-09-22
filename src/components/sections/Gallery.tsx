"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryPhotos } from "@/data/gallery";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

/**
 * Gallery / documentation section.
 *
 * IMPORTANT: All photos and captions here are placeholder content
 * (see src/data/gallery.ts). This section is clearly labeled as demo
 * content until replaced with real, consented departure documentation.
 */
export default function Gallery() {
  return (
    <section id="galeri" className="section-padding bg-blue-100">
      <Container>
        <SectionHeading
          eyebrow="Dokumentasi"
          title="Momen dari Perjalanan yang Telah Terlaksana"
          subtitle="Sebagian dokumentasi dari perjalanan jamaah yang telah kami dampingi."
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <motion.figure
              key={photo.src}
              variants={staggerItem}
              className="group relative aspect-square overflow-hidden rounded-md">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-body-sm text-text-inverse opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-body-sm text-text/50">
          *Foto pada bagian ini adalah placeholder untuk keperluan demo. Akan
          diganti dengan dokumentasi asli dari perjalanan jamaah yang telah
          terlaksana, dengan persetujuan yang bersangkutan.
        </p>
      </Container>
    </section>
  );
}
