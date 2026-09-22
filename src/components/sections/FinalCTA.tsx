"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="cta-akhir" className="relative overflow-hidden bg-primary/90">
      <div className="absolute inset-0 opacity-[0.15]">
        <img
          src="/images/destinations/makkah2.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-center gap-6 py-24 text-center md:py-32">
          <h2 className="max-w-2xl text-heading-lg font-heading text-text-inverse">
            Siap Memulai Perjalanan Menuju Tanah Suci?
          </h2>
          <p className="max-w-xl text-body-lg text-text-inverse/80">
            Konsultasikan kebutuhan perjalanan Umrah Anda bersama tim kami.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-accent border-accent text-primary hover:bg-accent/90 hover:border-accent/90"
            onClick={() => openWhatsApp()}>
            Konsultasi Sekarang
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
