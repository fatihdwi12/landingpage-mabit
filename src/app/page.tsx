import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import Packages from "@/components/sections/Packages";
import Destinations from "@/components/sections/Destinations";
import Facilities from "@/components/sections/Facilities";
import Gallery from "@/components/sections/Gallery";
import FinalCTA from "@/components/sections/FinalCTA";

// Remaining sections (JourneyTimeline, Hotels, Guides, Testimonials, FAQ)
// will be added in Phase 3 (Experience).
//
// Sitemap order once Phase 3 is complete:
// Hero -> Trust -> Packages -> Journey -> Destinations -> Hotels ->
// Facilities -> Guides -> Testimonials -> Gallery -> FAQ -> FinalCTA
//
// Gallery is intentionally placed after Testimonials (once added) since it
// reinforces social proof with visual evidence, right before FAQ resolves
// remaining objections and FinalCTA converts.

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Packages />
        <Destinations />
        <Facilities />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
