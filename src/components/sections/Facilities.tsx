"use client";

import { motion } from "framer-motion";
import {
  Plane,
  FileCheck,
  BedDouble,
  Bus,
  UtensilsCrossed,
  UserRound,
  Backpack,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilities } from "@/data/facilities";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Plane,
  FileCheck,
  BedDouble,
  Bus,
  UtensilsCrossed,
  UserRound,
  Backpack,
  BookOpen,
};

export default function Facilities() {
  return (
    <section id="fasilitas" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Fasilitas"
          title="Fasilitas yang Kami Sediakan"
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {facilities.map((facility) => {
            const Icon = iconMap[facility.icon] ?? Plane;
            return (
              <motion.div
                key={facility.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-3 text-center">
                <Icon size={30} strokeWidth={1.5} className="text-primary" />
                <span className="text-body-sm text-text/80">
                  {facility.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
