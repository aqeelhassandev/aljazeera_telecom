"use client";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Iraq's Pioneer in Fiber-Optic Internet",
    description:
      "We were the first ISP in Iraq to deploy and operate a fiber-optic network, partnering officially with the General Company for Communications and Informatics. Our infrastructure spans the entire country — built to last.",
    image: "/hero_tech_team.png",
    cta: { label: "Explore Our Network", href: "/services" },
  },
  {
    number: "02",
    title: "20+ Years of Uninterrupted Reliability",
    description:
      "Since 2004, we have delivered consistent, high-speed connectivity to homes and businesses across Iraq. Our track record of uptime and stability is unmatched in the region.",
  },
  {
    number: "03",
    title: "Dedicated 24/7 Expert Support",
    description:
      "Our certified technical team is on standby around the clock. We don't rely on scripts — we diagnose, respond, and resolve. Every call is answered by a real engineer who knows our network inside and out.",
  },
  {
    number: "04",
    title: "Tailored Solutions for Every Client",
    description:
      "Whether you're a residential subscriber, a commercial enterprise, or a wholesale agent, we engineer connectivity packages that match your exact needs — with scalable bandwidth, dedicated lines, and SLA guarantees.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0.106, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative bg-[#f9f9f9] py-24 overflow-hidden"
    >
      {/* Left scroll-drawn background SVG */}
      <div className="pointer-events-none absolute left-[-2%] top-[10%] bottom-[10%] w-[20%] opacity-30 hidden lg:block z-0">
        <svg
          viewBox="0 0 381 785"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
        >
          <motion.path
            d="M256.81 392.88H380.59C380.59 392.88 391.56 217.37 239.47 90.77C153.37 19.1 70.09 2.76 0 0C0 39.82 2 784.91 2 784.91C2 784.91 113.26 786.57 209.58 716.82C184.67 685.27 115.97 589.81 115.97 589.81L116.59 155.53C116.58 155.53 255.81 221.16 256.81 392.88Z"
            fill="#9CD3D9"
            stroke="#27727a"
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray="120 2000"
            animate={{
              strokeDashoffset: [0, -2120],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              fillOpacity,
            }}
          />
        </svg>
      </div>

      {/* Right scroll-drawn background SVG */}
      <div className="pointer-events-none absolute right-[-2%] top-[10%] bottom-[10%] w-[20%] opacity-30 hidden lg:block z-0">
        <svg
          viewBox="0 0 368 785"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
        >
          <motion.path
            d="M367.36 784.1C252.42 778.27 159.42 718.64 104.62 660.36C0 549.1 0 434.35 0 393C39.86 393 204.78 393.04 204.78 393.04L205.44 511.83C205.44 511.83 182.3 511.83 147.8 511.83C185.99 590.62 251.9 625.49 251.9 625.49L253.23 199.92C253.23 199.92 195.5 118.29 163.64 72.5C257.4 1.08999 367.36 0 367.36 0V784.1Z"
            fill="#9CD3D9"
            stroke="#27727a"
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray="120 2000"
            animate={{
              strokeDashoffset: [0, -2120],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              fillOpacity,
            }}
          />
        </svg>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[160px] opacity-60 z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-secondary2/10 rounded-full blur-[120px] z-0" />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 ">
          {/* ── Left Column ── */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-28">
            {/* Badge + Heading */}
            <motion.div
              initial={{ opacity: 0, y: -230 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 mb-5">
                <span className="text-sm">✶</span> Why choose us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                Why We&apos;re Your Best{" "}
                <span className="text-brand-secondary1">Connectivity</span> Ally
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed lg:max-w-sm">
                Solve your connectivity challenges fast, so you can focus on
                what matters — running your business. From day one, we&apos;ve
                built our reputation on speed, clarity, and relentless
                reliability.
              </p>
            </motion.div>

            {/* Team image */}
            <motion.div
              className="relative w-full h-84 rounded-[28px] overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -405, y: 210 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/hero_tech_team.png"
                alt="Al Jazeera Telecom team at work"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* ── Right Column — Accordion list ── */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-200">
            {reasons.map((reason, i) => {
              return (
                <motion.div
                  key={i}
                  className="py-6 group"
                  initial={{ opacity: 0, x: 430 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.25,
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span className="text-sm font-bold tabular-nums mt-0.5 text-brand-primary">
                      {reason.number}.
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-bold text-zinc-900">
                          {reason.title}
                        </h3>

                        {/* Arrow button */}
                        {!i == 0 && (
                          <div className="shrink-0 w-9 h-9 rounded-full border-2 border-brand-primary bg-brand-primary text-white flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <div className="overflow-hidden">
                        <div className="pt-4 flex flex-col md:flex-row gap-5">
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {reason.description}
                          </p>

                          {/* Active card image + CTA */}
                          {reason.image && (
                            <div className="flex items-center gap-5">
                              <motion.div
                                className="relative w-full sm:w-80 h-50 rounded-2xl overflow-hidden shrink-0 shadow-md"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                              >
                                <Image
                                  src={reason.image}
                                  alt={reason.title}
                                  fill
                                  className="object-cover"
                                  sizes="200px"
                                  loading="lazy"
                                />
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
