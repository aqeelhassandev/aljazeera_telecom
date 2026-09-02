"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import Image from "next/image";
import { getTranslations } from "@/i18n";

export default function AboutPageContent({ locale = "en" }) {
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Navbar locale={locale} />

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
              alt="Contact Us"
              fill
              className="object-cover lg:object-cover"
              loading="lazy"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#031530]/20 flex items-center justify-center text-white text-3xl lg:text-5xl font-bold">
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

      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 w-[60vw] max-w-150 h-[60vw] max-h-150 bg-blue-50 rounded-full blur-[100px] sm:blur-[140px] opacity-70" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[50vw] max-w-125 h-[50vw] max-h-125 bg-pink-50/30 rounded-full blur-[90px] sm:blur-[120px]" />

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] min-h-[260px] sm:min-h-[360px]"
            >
              <div className="absolute inset-0 bg-brand-primary/5 rounded-2xl sm:rounded-[32px] transform rotate-2 sm:rotate-3" />
              <div className="absolute inset-0 bg-brand-secondary1/5 rounded-2xl sm:rounded-[32px] transform -rotate-2 sm:-rotate-3" />
              <div className="relative w-full h-full rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl border border-zinc-100">
                <Image
                  src={
                    locale === "ar" ? "/aboutpage1.webp" : "/aboutpage2.webp"
                  }
                  alt="Al Jazeera Telecom Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-yellow-400 text-zinc-950 text-xs font-bold px-3.5 py-1.5 rounded uppercase tracking-wider shadow-xs mb-3 sm:mb-4 inline-block"
                >
                  {t.about.companyBadge}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl lg:text-[2.75rem] font-black text-zinc-900 tracking-tight leading-[1.1]"
                >
                  {t.about.companyHeading}
                </motion.h2>
              </div>

              <div className="flex flex-col gap-4 sm:gap-5">
                {t.about.companyParagraphs?.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-700 bg-zinc-50/60 border border-zinc-100 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28 bg-[#f8fafc] relative overflow-hidden border-t border-zinc-100">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-brand-secondary1/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight"
            >
              {t.about.yearsTimelineTitle}
            </motion.h2>
          </div>

          {/* Single responsive timeline: stacked on mobile, alternating on sm+ */}
          <ol className="relative flex flex-col gap-8 sm:gap-4">
            {/* mobile rail: gentle curve near the left edge */}
            <svg
              className="sm:hidden absolute top-0 left-0 w-6 h-full"
              viewBox="0 0 24 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="railGradientMobile"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#CC1B68" />
                  <stop offset="55%" stopColor="#031530" />
                  <stop offset="100%" stopColor="#77465B" />
                </linearGradient>
              </defs>
              <motion.path
                d={buildWavePath(t.about.yearsTimeline?.length || 4, {
                  centerX: 8,
                  amplitude: 5,
                  height: 1300,
                })}
                stroke="url(#railGradientMobile)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>

            {/* desktop/tablet rail: gentle curve down the center */}
            <svg
              className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-24 h-full"
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="railGradientDesktop"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#CC1B68" />
                  <stop offset="55%" stopColor="#031530" />
                  <stop offset="100%" stopColor="#77465B" />
                </linearGradient>
              </defs>
              <motion.path
                d={buildWavePath(t.about.yearsTimeline?.length || 4, {
                  centerX: 50,
                  amplitude: 12,
                  height: 1200,
                })}
                stroke="url(#railGradientDesktop)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </svg>

            {t.about.yearsTimeline?.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(idx * 0.08, 0.4),
                  }}
                  className={`relative flex items-start gap-5 sm:gap-0 pl-8 sm:pl-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-0 -top-1 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-primary shadow-sm z-10" />

                  {/* spacer to push card to alternating side on sm+ */}
                  <div className="hidden sm:block sm:w-1/2" />

                  <div
                    className={`w-full sm:w-1/2 ${
                      isEven ? "sm:pr-5 sm:text-right" : "sm:pl-5 sm:text-left"
                    }`}
                  >
                    <div className="inline-block w-full sm:w-auto sm:min-w-[240px] sm:max-w-[340px] bg-white border border-zinc-100 hover:border-brand-primary/30 hover:shadow-lg p-5 rounded-2xl transition-all duration-300 shadow-sm text-left">
                      <span className="inline-block bg-brand-primary/10 text-brand-primary font-bold text-xs px-3 py-1.5 rounded-full mb-2">
                        {item.year}
                      </span>
                      <p className="text-zinc-700 text-sm leading-relaxed font-semibold">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      <WhyChooseUs locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}

function buildWavePath(
  itemCount,
  { centerX = 50, amplitude = 10, height = 1300 } = {},
) {
  const segments = Math.max(itemCount, 2);
  const segH = height / segments;
  let d = `M ${centerX} 0`;
  let prevX = centerX;
  let prevY = 0;

  for (let i = 1; i <= segments; i++) {
    const y = i * segH;
    const x =
      i === segments
        ? centerX
        : centerX + (i % 2 === 0 ? amplitude : -amplitude);
    const cp1Y = prevY + segH / 2;
    const cp2Y = y - segH / 2;
    d += ` C ${prevX} ${cp1Y}, ${x} ${cp2Y}, ${x} ${y}`;
    prevX = x;
    prevY = y;
  }

  return d;
}

function CornerAccent({ side = "top-left" }) {
  const isTop = side === "top-left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isTop ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className={`hidden sm:block absolute ${
        isTop
          ? "top-0 left-4 sm:left-6 lg:left-12"
          : "bottom-0 right-4 sm:right-6 lg:right-12"
      } bg-[#031530]`}
      style={{
        width: "clamp(64px, 8vw, 132px)",
        height: "clamp(48px, 6vw, 92px)",
        borderRadius: isTop ? "0 0 24px 0" : "24px 0 0 0",
      }}
    />
  );
}
