"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

import { getTranslations } from "@/i18n";
import Link from "next/link";

export default function ServicesPageContent({ locale = "en" }) {
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Navbar locale={locale} />

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
              src={"/notfound.webp"}
              alt="Tech Team"
              fill
              className="object-cover"
              loading="lazy"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#031530]/60 flex items-center justify-center text-white text-3xl lg:text-5xl font-bold">
              {t.services.heroBanner}
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

      <section className="py-24 bg-[#031530] relative overflow-hidden">
        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute -top-40 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4"
          >
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
              <span className="text-blue-400 text-sm">✶</span>{" "}
              {t.services.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
              {t.services.sectionHeading}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
              {t.services.sectionBody}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t?.services?.list?.map((service, index) => {
              const serviceIconBorder = [1, 4, 7].includes(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                  className={`group ${serviceIconBorder ? "mb-15" : "mt-15"} relative overflow-hidden rounded-[32px] p-4 flex flex-col justify-between min-h-[480px] transition-all duration-500 ease-out border bg-[#081a36]/60 border-blue-900/30 text-white  hover:border-brand-primary hover:text-zinc-900 hover:shadow-2xl hover:shadow-blue-950/40`}
                >
                  {/* Image */}
                  <div className="relative w-full h-60 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-all duration-500 rounded-[32px] brightness-[0.8] contrast-[1.05] group-hover:brightness-100 group-hover:contrast-100"
                    />

                    {/* Cutout curve details */}
                    <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833]  transition-shadow duration-500 -top-0.5 left-17" />
                    <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833] transition-shadow duration-500 top-17 left-[-2.7px]" />

                    {/* Icon wrapper */}
                    <div className="absolute -top-3 -left-3 p-3.5 pb-4 pr-4 rounded-br-[24px] z-10 self-start transition-colors duration-500 bg-[#061833] ">
                      <div className="p-4 rounded-2xl flex items-center justify-center transition-colors duration-500 bg-blue-600/30 border border-blue-500/20 backdrop-blur-sm group-hover:bg-[#1d4ed8] group-hover:border-transparent">
                        {React.cloneElement(service.icon, {
                          className:
                            "w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-500",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="relative z-10 flex flex-col gap-6 mt-6 p-4 flex-1 justify-between">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-secondary2 transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-400 transition-colors duration-500">
                        {service.description}
                      </p>
                      <p className="text-xs text-zinc-400  transition-colors duration-500 leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-500 bg-brand-primary border border-white/10 text-white hover:bg-white/10 group-hover:bg-brand-secondary1 group-hover:border-transparent group-hover:text-white group-hover:hover:bg-blue-700 group-hover:shadow-md"
                      >
                        {t.services.ctaButton}
                        <ArrowRight
                          className={`w-3.5 h-3.5 ${locale === "ar" ? "rotate-180" : ""}`}
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <PricingSection locale={locale} />

      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
