import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";


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
        {/* <ServicesSection /> */}
      </main>
    </div>
  );
}
