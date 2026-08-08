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

export default function Home() {

  return(
  <>
  <DermalHero />
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
