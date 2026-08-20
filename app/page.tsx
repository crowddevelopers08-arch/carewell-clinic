import AboutDental from "@/components/AboutDental";
import BeforeAfter from "@/components/beforeafter";
import DermalHero from "../components/DermalHero";
import DentalServices from "@/components/our-services";
import RootCanalJourney from "@/components/rootcanaljourney";
import RoadmapInfographic from "@/components/mapinfogrphic";
import WelcomingBanner from "@/components/WelcomingBanner";
import FaqSection from "@/components/FaqSection";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import ContactMapSection from "@/components/ContactMapSection";
import Footer from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import ScientificHealthcareHero from "@/components/ScientificHealthcareHero";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Google Ads (gtag.js) - using Next.js Script component */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18400739132"
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18400739132');
          `,
        }}
      />

      <ScientificHealthcareHero />
      <BeforeAfter />
      <AboutDental />
      <DentalServices />
      <RootCanalJourney />
      <RoadmapInfographic />
      <WelcomingBanner />
      <FrequentlyAskedQuestions />
      <ContactMapSection />
      <Footer />
      <MobileActionBar />
    </>
  );
}