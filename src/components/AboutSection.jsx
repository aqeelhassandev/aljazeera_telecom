"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@base-ui/react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState("");

  useEffect(() => {
    if (!isInView) return;

    const numberMatch = value.match(/[\d.]+/);
    if (!numberMatch) {
      setCount(value);
      return;
    }

    const targetNumber = parseFloat(numberMatch[0]);
    const isFloat = numberMatch[0].includes(".");
    const suffix = value.replace(numberMatch[0], "");

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCount(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = progress * (2 - progress);
      const current = start + easeProgress * (targetNumber - start);

      if (isFloat) {
        setCount(current.toFixed(1) + suffix);
      } else {
        setCount(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return <span ref={ref}>{count || "0"}</span>;
}

import { getTranslations } from "@/i18n";

export default function AboutSection({ locale = "en" }) {
  const t = getTranslations(locale);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const activeStats = t.about.stats;
  const activeTimeline = t.about.timeline;

  // Map scroll progress to line height (from top to bottom)
  const scaleY = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section id="about" className="relative bg-[#f9f9f9] pt-24 overflow-hidden">
      {/* Subtle background decoration */}

      <div className="pointer-events-none absolute top-0 right-0 w-150 h-150 bg-blue-50 rounded-full blur-[160px] opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-100 h-100 bg-brand-secondary2/10 rounded-full blur-[120px]" />
      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* ── Main Grid: Image + Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ">
          {/* Right — Content */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 330 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 mb-5">
                <span className="text-sm">✶</span> {t.about.badge}
              </span>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.1] max-w-4xl">
                  {t.about.sectionHeading}{" "}
                  <span className="text-brand-secondary1">
                    {t.about.sectionHeadingHighlight}
                  </span>{" "}
                  {t.about.sectionSubtext}
                </h2>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6">
                {t.about.timelineTitle}
              </p>
              <div ref={containerRef} className="relative flex flex-col gap-0">
                {/* SVG Scroll-drawn vertical line */}
                <svg
                  className={`absolute ${locale === "ar" ? "right-5.75" : "left-5.75"} top-3 bottom-3 w-0.5 h-[calc(100%-24px)] overflow-visible pointer-events-none`}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="#e4e4e7"
                    strokeWidth="2"
                  />
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="#cc1b68"
                    strokeWidth="2"
                    style={{ pathLength: scaleY }}
                  />
                </svg>

                {activeTimeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 pb-10 last:pb-0 relative"
                    initial={{ opacity: 0, x: locale === "ar" ? 220 : -220 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: i * 0.4,
                    }}
                  >
                    {/* Dot */}
                    <div className="shrink-0 flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold z-10 border-2 transition-colors ${
                          i === 2
                            ? "bg-brand-primary border-brand-primary text-white"
                            : "bg-white border-zinc-200 text-zinc-700"
                        }`}
                      >
                        {item.year === "Today" || item.year === "اليوم" ? (
                          <span className="text-[10px] font-bold">
                            {t.about.now}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold leading-tight text-center">
                            {item.year}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-1.5">
                      <h3 className="text-sm text-zinc-600 leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: locale === "ar" ? 220 : -220 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
            >
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary1 px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {t.about.learnMore}
                <ArrowRight
                  className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
                />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 rounded-full bg-[#EEEEF1] hover:bg-[#EEEEF1]/80 px-7 py-3.5 text-sm font-semibold text-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {t.nav.services}
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 sticky top-28">
            {/* Main image */}
            <motion.div
              className="relative aspect-4/3 w-full h-100 shadow-zinc-200"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/services/service_it_consulting.webp"
                alt="Al Jazeera Telecom Team"
                fill
                className="object-cover rounded-[30px] "
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0, y: -220 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`absolute left-0 top-11 -translate-y-1/2 flex items-center justify-center z-20  bg-background p-4  rounded-br-[30px]`}
              >
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
                  className="relative bg-brand-primary hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all text-white p-6 rounded-full cursor-pointer flex items-center justify-center z-10 shadow-lg"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>

                <div
                  className={`absolute bg-transparent top-3 left-28 w-16 h-16 rounded-tl-3xl shadow-[-2px_-13px_0_0_var(--background)] z-0`}
                />
                <div
                  className={`absolute bg-transparent top-28 left-0 w-16 h-16 rounded-tl-3xl shadow-[-25px_-1px_0_0_var(--background)] z-0`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 220 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`absolute -bottom-1 -right-1 flex items-center gap-3 bg-background rounded-tl-[25px]  px-7 py-5`}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-secondary1 flex items-center justify-center shrink-0 z-10">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900 leading-tight">
                    {locale === "ar"
                      ? "أول مزود ألياف ضوئية في العراق"
                      : "Iraq's First Fiber-Optic ISP"}
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    {locale === "ar"
                      ? "رائدون منذ عام 2004"
                      : "Pioneering since 2004"}
                  </p>
                </div>
                <div
                  className={`absolute bg-transparent bottom-19 right-1 w-16 h-16 rounded-br-3xl shadow-[2px_14px_0_0_var(--background)] z-0`}
                />
                <div
                  className={`absolute bg-transparent bottom-1 ${locale === "ar" ? "-left-16 shadow-[13px_14px_0_0_var(--background)]" : "-left-16 shadow-[32px_14px_0_0_var(--background)]"} w-16 h-16 rounded-br-3xl  z-0`}
                />
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 xl:grid-cols-4 gap-4 border border-[#E5E9EF] rounded-[30px] py-13 px-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {activeStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl px-5 py-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <p className="text-4xl text-brand-primary tracking-tight">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-md text-zinc-500 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
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
