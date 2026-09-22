"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden md:min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/destinations/makkah.jpg"
          alt="Kaaba di Masjidil Haram, Makkah, dikelilingi jamaah yang beribadah"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
      </div>

      <Container className="relative z-10 pb-16 pt-40 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex max-w-2xl flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="text-label uppercase tracking-widest text-accent font-semibold">
            Travel Umrah Terpercaya
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-display-xl font-heading font-semibold text-text-inverse">
            Perjalanan Ibadah yang Kami Persiapkan dengan Sepenuh Hati
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-body-lg max-w-xl text-text-inverse/85">
            Temukan perjalanan Umrah yang nyaman, terarah, dan didampingi oleh
            tim berpengalaman dari keberangkatan hingga kembali ke tanah air.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-accent border-accent text-primary hover:bg-accent/90 hover:border-accent/90"
              onClick={() => {
                document
                  .getElementById("paket-umrah")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}>
              Lihat Paket Umrah
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-text-inverse text-text-inverse hover:bg-text-inverse/10"
              onClick={() => openWhatsApp()}>
              Konsultasi via WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
