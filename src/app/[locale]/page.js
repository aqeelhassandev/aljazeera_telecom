import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  
  return {
    description: isAr
      ? "جرب أسرع إنترنت في العراق مع الجزيرة للاتصالات. ألياف، حلول لاسلكية، وخدمات تقنية."
      : "Experience Iraq's fastest fiber internet with Al Jazeera Telecom. FTTx, wireless & IT services.",
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="flex flex-col">
        <Navbar locale={locale} />
        <Hero locale={locale} />
        <ServicesSection locale={locale} />
        <AboutSection locale={locale} />
        <WhyChooseUs locale={locale} />
        <ProjectsSection locale={locale} />
        <PricingSection locale={locale} />
        <ContactSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </div>
  );
}

