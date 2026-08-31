"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, Network, Server, Building2, Wifi } from "lucide-react";
import { getTranslations } from "@/i18n";

const PROJECT_ICONS = [
  <Network className="w-5 h-5" />,
  <Server className="w-5 h-5" />,
  <Building2 className="w-5 h-5" />,
  <Wifi className="w-5 h-5" />,
];

// Reusable variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function ProjectsSection({ locale = "en" }) {
  const t = getTranslations(locale);
  const isRtl = locale === "ar";
  const projects = t.projects?.list || [];
  const [active, setActive] = useState(0);

  const current = projects[active];

  // Refs for scroll-triggered animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* Header — fades up on scroll */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-zinc-400 inline-block" />
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                {t.projects?.badge}
              </span>
              <span className="w-6 h-px bg-zinc-400 inline-block" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
              {t.projects?.heading}{" "}
              <span className="text-brand-primary">
                {t.projects?.headingHighlight}
              </span>
            </h2>
          </div>
          {/* <button ...>{t.projects?.viewAll}</button> */}
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Tab List — each tab staggers in from the left */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {projects.map((project, idx) => {
              const isActive = idx === active;
              return (
                <motion.button
                  key={idx}
                  id={`project-tab-${idx}`}
                  onClick={() => setActive(idx)}
                  variants={isRtl ? fadeRight : fadeLeft}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.15 + idx * 0.1,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-start transition-all duration-200 border ${
                    isActive
                      ? "bg-brand-primary border-brand-primary text-white shadow-md"
                      : "bg-white border-zinc-200 text-zinc-600 hover:border-brand-primary hover:bg-brand-primary/10"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white/30 text-white"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {PROJECT_ICONS[idx] ?? PROJECT_ICONS[0]}
                  </span>
                  <span className="font-semibold text-sm leading-snug">
                    {project.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Content Panel — slides in from the right on scroll, then animates on tab switch */}
          <motion.div
            className="lg:col-span-8"
            variants={isRtl ? fadeLeft : fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white border border-zinc-100 rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
                >
                  {/* Image — subtle zoom-in on entry */}
                  <div className="relative w-full sm:w-56 lg:w-72 flex-shrink-0 h-72 overflow-hidden">
                    <motion.div
                      key={`img-${active}`}
                      className="absolute inset-0"
                      initial={{ scale: 1.08, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 288px"
                      />
                    </motion.div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>

                  {/* Text content — staggered children */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col gap-4">
                    <motion.h3
                      key={`title-${active}`}
                      className="text-xl font-bold text-zinc-900 leading-snug"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {current.title}
                    </motion.h3>

                    <motion.p
                      key={`desc-${active}`}
                      className="text-sm text-zinc-500 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.12 }}
                    >
                      {current.description}
                    </motion.p>

                    {/* Bullets — each staggered */}
                    <ul className="flex flex-col gap-2">
                      {(current.bullets || []).map((bullet, bi) => (
                        <motion.li
                          key={`${active}-${bi}`}
                          className="flex items-start gap-2 text-sm text-brand-primary font-medium"
                          initial={{ opacity: 0, x: isRtl ? 16 : -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.28,
                            delay: 0.18 + bi * 0.08,
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-secondary1" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
