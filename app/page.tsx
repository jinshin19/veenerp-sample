import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ModuleFeaturesSection from "@/components/ModuleFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ModuleFeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
