"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import { motion } from "framer-motion";
import {
  Wrench,
  Wifi,
  Code,
  ArrowRight,
  Shield,
  Server,
  Network,
  Calculator,
  Zap,
} from "lucide-react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const allServices = [
  {
    title: "FTTx (Fiber to the x)",
    description:
      "Ultra-fast fiber-to-the-premises internet delivering reliable, high-speed connectivity for homes and businesses.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    details:
      "Using cutting-edge GPON and XGS-PON technologies, we deliver Gigabit speeds directly to your building with minimal latency.",
    image: "/service_fttx.png",
  },
  {
    title: "Wireless Solutions",
    description:
      "Cutting-edge wireless solutions providing seamless coverage and high-speed connectivity across your entire premises.",
    icon: <Wifi className="w-6 h-6 text-blue-500" />,
    details:
      "Point-to-Point (P2P) and Point-to-Multipoint (P2MP) wireless systems bridging long distances and providing wide coverage area.",
    image: "/service_wireless.png",
  },
  {
    title: "Software Solutions",
    description:
      "Custom software development and enterprise solutions tailored to streamline your business operations.",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    details:
      "From bespoke web and mobile applications to full-scale ERP and CRM system integrations customized for your operational workflows.",
    image: "/service_software.png",
  },
  {
    title: "VoIP & Digital Telephony",
    description:
      "Feature-rich digital telephony systems delivering crystal-clear voice communication for modern businesses.",
    icon: <Wrench className="w-6 h-6 text-blue-500" />,
    details:
      "Save on communication costs with cloud-hosted PBX, call routing, auto-attendant features, and multi-line business setups.",
    image: "/service_tech_support.png",
  },
  {
    title: "Cyber Security",
    description:
      "Comprehensive cybersecurity services protecting your digital infrastructure against evolving threats 24/7.",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    details:
      "Security audits, firewalls, network monitoring, DDoS mitigation, and continuous threat prevention for enterprise infrastructure.",
    image: "/service_it_consulting.png",
  },
  {
    title: "Enterprise Hosting",
    description:
      "Reliable cloud and dedicated hosting solutions with maximum uptime guarantees and enterprise-grade security.",
    icon: <Server className="w-6 h-6 text-blue-500" />,
    details:
      "High-performance dedicated servers, VPS, CDN distribution, and automated secure backups managed by our operations center.",
    image: "/service_cloud_migration.png",
  },
  {
    title: "Network Consulting",
    description:
      "Expert network design, implementation, and optimization services to build a robust digital foundation.",
    icon: <Network className="w-6 h-6 text-blue-500" />,
    details:
      "Experienced network engineers auditing routing, cabling infrastructure, optical connections, and active equipment parameters.",
    image: "/service_it_consulting.png",
  },
  {
    title: "SBS for Businesses",
    description:
      "Scalable business solutions designed to integrate accounting, HR, and operations into a unified platform.",
    icon: <Calculator className="w-6 h-6 text-blue-500" />,
    details:
      "Manage finance, inventory, human resources, and customer relations using advanced modular corporate frameworks.",
    image: "/service_tech_support.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-fit pt-36 pb-20 overflow-hidden bg-[#031530] text-white">
        <div className="w-full h-[350px] lg:h-[450px] relative max-w-[2700px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative rounded-2xl overflow-hidden"
          >
            <Image
              src={"/notfound.png"}
              alt="Tech Team"
              fill
              className="object-cover"
              loading="lazy"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#031530]/60 flex items-center justify-center text-white text-3xl lg:text-5xl font-bold">
              Our Services
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 left-6 lg:left-12 w-33 h-23 rounded-br-[30px] bg-[#031530]"
          />
          <motion.div
            initial={{ x: -56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 left-[calc(24px+132px)] lg:left-[calc(48px+132px)] w-23 h-23 rounded-tl-[30px] shadow-[-15px_-30px_0px_0px_#031530]  bg-transparent"
          />
          <motion.div
            initial={{ x: -56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            className="absolute top-23 left-6 lg:left-12 w-23 h-23 rounded-tl-[30px] shadow-[-15px_-15px_0px_0px_#031530]  bg-transparent"
          />
          {/* right side */}
          <motion.div
            initial={{ x: 56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-0 right-6 lg:right-12 w-33 h-23 rounded-tl-[30px] bg-[#031530]"
          ></motion.div>
          <motion.div
            initial={{ x: 56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-0 right-[calc(24px+132px)] lg:right-[calc(48px+132px)] w-23 h-23 rounded-br-[30px] shadow-[15px_30px_0px_0px_#031530]  bg-transparent"
          ></motion.div>
          <motion.div
            initial={{ x: 56 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-23 right-6 lg:right-12 w-23 h-23 rounded-br-[30px] shadow-[15px_15px_0px_0px_#031530]  bg-transparent"
          ></motion.div>
        </div>
      </section>
      <section className="py-24 bg-white relative">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                className="bg-[#f9f9f9] border border-zinc-100 rounded-[32px] overflow-hidden hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col lg:flex-row h-full"
              >
                {/* Image panel */}
                <div className="relative w-full lg:w-2/5 min-h-[220px] lg:min-h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-8 flex flex-col justify-between flex-1 gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-primary">
                      {service.description}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {service.details}
                    </p>
                  </div>

                  <div>
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#EEEEF1] hover:bg-brand-secondary1 hover:text-white px-5 py-2.5 text-xs font-semibold text-zinc-800 transition-all duration-300">
                      Request Consultation
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <PricingSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
