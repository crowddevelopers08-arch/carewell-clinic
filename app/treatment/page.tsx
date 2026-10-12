import type { Metadata } from "next";
import Hero from "@/components/lhrtreatment/hero";
import WhyChooseUs from "@/components/lhrtreatment/WhyChooseUs";
import TestimonialsSection from "@/components/lhrtreatment/TestimonialsSection";
import CurvedRoadmap from "@/components/lhrtreatment/CurvedRoadmap";
import TreatmentAreas from "@/components/lhrtreatment/TreatmentAreas";
import AboutClinic from "@/components/lhrtreatment/clinic-com";
import AboutDental from "@/components/lhrtreatment/AboutDental";
import LhrFaq from "@/components/lhrtreatment/faq";
import FinalCta from "@/components/lhrtreatment/finalCta";
import Footer from "@/components/lhrtreatment/Footer";
import ContactMapSection from "@/components/lhrtreatment/ContactMapSection";
import { MobileActionBar } from "@/components/lhrtreatment/MobileActionBar";

export const metadata: Metadata = {
  title: "Treatment",
};

export default function TreatmentPage() {
  return (
    <main>
      <Hero />
      <TestimonialsSection />
      <WhyChooseUs />
      <CurvedRoadmap />
      <TreatmentAreas />
      <AboutDental />
      <AboutClinic />
      <LhrFaq />
      <FinalCta />
      <ContactMapSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
