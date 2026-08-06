"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@base-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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

const stats = [
  { value: "490M+", label: "happy Clients" },
  { value: "4.9/5", label: "Clients Rating" },
  { value: "20+", label: "Years of Excellence" },
  { value: "24/7", label: "Expert Support" },
];

const timeline = [
  {
    year: "2004",
    title: "Foundational Growth",
    description:
      "Our journey began by delivering Internet connectivity via Vast, covering every corner of Iraq. In 2006, we expanded our offerings to include P2P connections, broadening our reach.",
  },
  {
    year: "2010",
    title: "Fiber-Optic Era Begins",
    description:
      "We proudly became the official partner of the General Company for Communications and Informatics, gaining access to a fiber-optic network and embarking on a new era.",
  },
  {
    year: "Today",
    title: "Commitment to Excellence",
    description:
      "Through diligent analysis of user needs, we have dedicated ourselves to meeting the expectations of our diverse customer base — agents, subscribers, and commercial entities alike.",
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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
                <span className="text-sm">✶</span> About us
              </span>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.1] max-w-4xl">
                  Al Jazeera Telecom:{" "}
                  <span className="text-brand-secondary1">
                    Empowering Iraq's Digital Landscape
                  </span>{" "}
                  since 2004
                </h2>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6">
                Our Journey
              </p>
              <div ref={containerRef} className="relative flex flex-col gap-0">
                {/* SVG Scroll-drawn vertical line */}
                <svg className="absolute left-5.75 top-3 bottom-3 w-0.5 h-[calc(100%-24px)] overflow-visible pointer-events-none">
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

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 pb-10 last:pb-0 relative"
                    initial={{ opacity: 0, x: -220 }}
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
                        {item.year === "Today" ? (
                          <span className="text-[10px] font-bold">NOW</span>
                        ) : (
                          <span className="text-[10px] font-bold leading-tight text-center">
                            {item.year}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-1.5">
                      <h3 className="text-lg font-bold text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -220 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary1 px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#EEEEF1] hover:bg-[#EEEEF1]/80 px-7 py-3.5 text-sm font-semibold text-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Our Services
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
                src="/hero_tech_team.png"
                alt="Al Jazeera Telecom Team"
                fill
                className="object-cover rounded-[30px] "
              />
              <motion.div
                initial={{ opacity: 0, y: -220 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-11 -translate-y-1/2 flex items-center justify-center z-20  bg-background p-4  rounded-br-[30px]"
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

                <Button className="relative bg-brand-primary hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all text-white p-6 rounded-full cursor-pointer flex items-center justify-center z-10 shadow-lg">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>

                <div className="absolute bg-transparent top-3 left-28 w-16 h-16 rounded-tl-3xl shadow-[-2px_-13px_0_0_var(--background)] z-0" />
                <div className="absolute bg-transparent top-28 left-0 w-16 h-16 rounded-tl-3xl shadow-[-25px_-1px_0_0_var(--background)] z-0" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 220 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="absolute -bottom-1 -right-1 flex items-center gap-3 bg-background rounded-tl-[25px]  px-7 py-5"
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
                    Iraq's First Fiber-Optic ISP
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    Pioneering since 2004
                  </p>
                </div>
                <div className="absolute bg-transparent bottom-19 right-1 w-16 h-16 rounded-br-3xl shadow-[2px_14px_0_0_var(--background)] z-0" />
                <div className="absolute bg-transparent bottom-1 -left-16 w-16 h-16 rounded-br-3xl shadow-[32px_14px_0_0_var(--background)] z-0" />
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-4 gap-4 border border-[#E5E9EF] rounded-[30px] py-13 px-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {stats.map((stat, idx) => (
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
    </section>
  );
}
