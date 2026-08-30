"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Shield, Users, Target } from "lucide-react";

import { getTranslations } from "@/i18n";

export default function AboutPageContent({ locale = "en" }) {
  const t = getTranslations(locale);

  const icons = [
    <Target className="w-6 h-6 text-brand-secondary1" />,
    <Eye className="w-6 h-6 text-brand-secondary1" />,
    <Shield className="w-6 h-6 text-brand-secondary1" />,
    <Users className="w-6 h-6 text-brand-secondary1" />,
  ];

  const activeValues = t.about.values.map((v, idx) => ({
    ...v,
    icon: icons[idx],
  }));

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Navbar locale={locale} />

      <section className="relative w-full h-fit pt-36 pb-15 overflow-hidden bg-[#031530] text-white">
        <div className="w-full h-[350px] lg:h-[450px] relative max-w-[2700px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative rounded-2xl overflow-hidden"
          >
            <Image
              src={"/notfound.webp"}
              alt="Tech Team"
              fill
              className="object-cover"
              loading="lazy"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#031530]/60 flex items-center justify-center text-white text-3xl lg:text-5xl font-bold">
              {t.about.heroBanner}
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

      {/* Hero Banner */}
      <section className="relative pt-1 pb-20 overflow-hidden bg-[#031530] text-white">
        <div className="pointer-events-none absolute -top-40 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-5xl leading-[1.15] mt-9">
              {t.about.headline}{" "}
              <span className="text-brand-secondary1">
                {t.about.headlineHighlight}
              </span>
            </h1>
            <p className="text-zinc-400 text-[15px] sm:text-lg max-w-2xl leading-relaxed">
              {t.about.subtext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100">
              <span className="text-sm">✶</span> {t.about.valuesBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              {t.about.valuesHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f9f9] border border-zinc-100 rounded-[24px] p-8 flex flex-col gap-4 hover:border-brand-secondary1/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shadow-xs">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard About Section component for Journey, Counters, and Layout symmetry */}
      <AboutSection locale={locale} />

      {/* Why Choose Us component */}
      <WhyChooseUs locale={locale} />

      <Footer locale={locale} />
    </div>
  );
}
