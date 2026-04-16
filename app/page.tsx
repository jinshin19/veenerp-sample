import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import WhyVeenERP from "@/components/WhyVeenERP";
import ModulesSection from "@/components/ModulesSection";
import ExploreFeatures from "@/components/ExploreFeatures";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import TourSection from "@/components/TourSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <WhyVeenERP />
      <ModulesSection />
      <ExploreFeatures />
      <PricingSection />
      <FAQSection />
      <TourSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
