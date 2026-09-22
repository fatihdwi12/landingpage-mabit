"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  MapPin,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustIndicators } from "@/data/trust";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Users,
  MapPin,
  HeartHandshake,
};

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding bg-blue-50">
      <Container>
        <SectionHeading
          eyebrow="Kepercayaan"
          title="Perjalanan yang Dipersiapkan dengan Penuh Kepercayaan"
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40">
                  <Icon size={28} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="text-heading-sm font-heading text-primary">
                  {item.title}
                </h3>
                <p className="text-body-sm max-w-xs text-text/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
