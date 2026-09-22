"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { formatIDR } from "@/lib/utils";
import { openWhatsApp } from "@/lib/whatsapp";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Packages() {
  return (
    <section id="paket-umrah" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Paket Umrah"
          title="Pilihan Paket Umrah"
          subtitle="Setiap paket dirancang untuk memberikan kenyamanan dan kejelasan sejak awal perjalanan."
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.slug}
              variants={staggerItem}
              className="min-w-[280px] snap-start md:min-w-0 ">
              <Card
                hoverLift
                className={
                  pkg.isFeatured
                    ? "relative border-2 border-blue-100 flex h-full flex-col"
                    : "relative border border-blue-100 flex h-full flex-col"
                }>
                {pkg.isFeatured && (
                  <Badge className="absolute -top-3 right-6">
                    Paling Diminati
                  </Badge>
                )}

                <span className="text-label uppercase tracking-widest border-blue-100 font-semibold">
                  {pkg.label}
                </span>
                <h3 className="mt-2 text-heading-md font-heading text-primary">
                  {pkg.name}
                </h3>
                <span className="mt-1 text-body-sm text-text/60">
                  {pkg.duration}
                </span>

                <div className="mt-4">
                  <span className="text-body-sm text-text/60">Mulai dari</span>
                  <p className="text-heading-md font-heading font-semibold text-primary">
                    {formatIDR(pkg.price)}
                  </p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {pkg.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-body-sm text-text/80">
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="secondary"
                  className="mt-8 w-full border-blue-200"
                  onClick={() =>
                    openWhatsApp({
                      packageName: pkg.name,
                      duration: pkg.duration,
                    })
                  }>
                  Lihat Detail
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-body-sm text-text/50">
          *Harga dan fasilitas bersifat ilustratif untuk keperluan konsep, akan
          disesuaikan dengan data resmi travel.
        </p>
      </Container>
    </section>
  );
}
