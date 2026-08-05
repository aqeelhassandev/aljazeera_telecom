import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="flex flex-col">
        <Navbar />
        <Hero />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <PricingSection />
        {/* <ServicesSection /> */}
      </main>
    </div>
  );
}
