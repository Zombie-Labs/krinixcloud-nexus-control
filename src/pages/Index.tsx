
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MinecraftSection from "@/components/MinecraftSection";
import VPSSection from "@/components/VPSSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MinecraftSection />
      <VPSSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
