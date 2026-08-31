"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@base-ui/react";
import { Wifi, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroFiberLines from "./HeroFiberLines";
import PartnersMarquee from "./PartnersMarquee";
import { getTranslations } from "@/i18n";

export default function Hero({ locale = "en" }) {
  const t = getTranslations(locale);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative  pt-32 pb-24 overflow-hidden mt-10 bg-transparent">
      <HeroFiberLines />
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-6 flex flex-col gap-6"
          initial={{ opacity: 0, x: 350 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-100">
              <span className="text-[14px]">✶</span> {t.hero.badge1}
            </span>
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-100">
              <span className="text-[14px]">✶</span> {t.hero.badge2}
            </span>
          </div>

          <h1 className="text-5xl  sm:text-5xl md:text-7xl lg:text-[76px] w-[80%] font-bold tracking-tight text-zinc-900 leading-[1.1] font-sans">
            {t.hero.headline1}
            <span className="text-brand-primary ml-1">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-zinc-600 sm:w-[70%] leading-relaxed">
            {t.hero.subtext}
          </p>

          <div className="flex gap-4 mt-2">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1 rounded-full bg-brand-secondary1 px-4 sm:px-8 py-4 text-[12px] sm:text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaSupport}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-full bg-[#EEEEF1] hover:bg-[#EEEEF1]/80 px-5 sm:px-8 py-4 text-[12px] sm:text-sm font-semibold text-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaServices}
            </Link>
          </div>

          {/* ── OUR PARTNERS marquee ── */}
          <div className="mt-10 pt-8 border-t border-zinc-100">
            <PartnersMarquee locale={locale} />
          </div>
        </motion.div>

        {/* Right Media Grid */}
        <motion.div
          className="lg:col-span-6 relative flex flex-col gap-6"
          initial={{ opacity: 0, x: -350, y: 350 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {/* Main Large Image Container */}
          <div
            className="relative rounded-[30px] h-87.5 md:h-127.5 lg:h-auto aspect-4/3 w-full bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/hero/hero_tech_team.webp')" }}
          >
            {/* Gear Icon Badge Overlay with Inset Curves (Fillets) */}
            <div className="absolute -top-1 -left-1 w-24 h-24 z-10  shadow-none">
              <div className="w-full h-full bg-[#f9f9f9] rounded-br-[32px] rounded-tl-[32px] flex items-center justify-center">
                <div className="bg-[#162a45]  p-2 sm:p-3.5 rounded-[20px] text-blue-300">
                  <img
                    src="/icons/icon1.svg"
                    alt="Hero"
                    className="w-10 h-auto animate-spin-slow object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-24 left-1 w-10.5 h-10.5 bg-transparent rounded-tl-[24px] shadow-[-12px_-12px_0_0_var(--background)]" />

                <div className="absolute top-1 left-24 w-10.5 h-10.5 bg-transparent rounded-tl-[24px] shadow-[-12px_-12px_0_0_var(--background)]" />
              </div>
            </div>
            {/* Play Button Overlay with Three-Layer Waves */}
            <div className="absolute -left-5.25 lg:-left-9  top-42 sm:top-1/2 -translate-y-1/2 flex items-center justify-center z-20">
              {/* Wave 1 */}
              <div
                className="absolute w-14 h-14 rounded-full bg-blue-600 animate-ripple"
                style={{ animationDelay: "0s" }}
              />
              {/* Wave 2 */}
              <div
                className="absolute w-14 h-14 rounded-full bg-blue-600 animate-ripple"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Wave 3 */}
              <div
                className="absolute w-14 h-14 rounded-full bg-blue-600 animate-ripple"
                style={{ animationDelay: "1s" }}
              />

              <Button
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play video"
                className="relative bg-brand-primary hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all text-white p-4 sm:p-6 rounded-full cursor-pointer flex items-center justify-center z-10 shadow-lg"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Bottom Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-60">
            {/* Rating Card */}
            <div className="bg-[#EEEEF1] border border-[#EEEEF1] rounded-3xl p-6 flex flex-col justify-between h-60 shadow-sm">
              {/* Top: icon + coverage tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center h-11 w-11 rounded-full bg-brand-primary text-white">
                  <Wifi size={20} />
                </div>
                <span className="text-sm text-zinc-400">
                  {locale === "ar" ? "الرصافة وديالى" : "Rusafa & Diyala"}
                </span>
              </div>

              {/* Middle: big number */}
              <span className="text-6xl md:text-7xl font-light text-zinc-500 tracking-tight leading-none">
                {locale === "ar" ? "+20" : "20+"}
              </span>

              {/* Bottom: label */}
              <span className="text-xl md:text-2xl font-semibold text-zinc-600">
                {locale === "ar"
                  ? "سنوات من الثقة والاستقرار"
                  : "Years of Trusted Stability"}
              </span>
            </div>

            {/* Experts on Call Card */}
            <div className="relative rounded-3xl h-full overflow-hidden shadow-sm aspect-2/1 md:aspect-auto bg-zinc-950">
              <Image
                src="/hero/fastiniraq.webp"
                alt="Experts On Call"
                fill
                className="object-cover "
                loading="lazy"
              />
              {/* <div className=" bg-[#072042a6] absolute inset-0"></div> */}
              <div className="absolute flex justify-between items-end  inset-0 p-6 ">
                <p className="text-white font-bold text-2xl leading-tight w-1/2 h-fit">
                  {t.hero.expertsOnCall}{" "}
                  <span className="text-brand-secondary1 text-xl font-bold italic">
                    24/7
                  </span>
                </p>
                <Link
                  href={`/${locale}/contact`}
                  aria-label="Contact us"
                  className="bg-white w-fit hover:bg-brand-primary hover:text-white active:bg-brand-primary transition-all duration-300 cursor-pointer text-zinc-900 rounded-full p-2.5  shadow-xs"
                >
                  <svg
                    className="w-4 h-4 stroke-current fill-none"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-6 md:p-10"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close Button at top corner */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:rotate-90 z-[110]"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Glassmorphic Frame containing the responsive video player */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-5xl aspect-video rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Al Jazeera Telecom Video Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
