"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section
      id="why-choose-us"
      className="relative bg-[#f9f9f9] py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[160px] opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-secondary2/10 rounded-full blur-[120px]" />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 ">
            
          {/* ── Left Column ── */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-28">
            {/* Badge + Heading */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 mb-5">
                <span className="text-sm">✶</span> Why choose us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                Why We&apos;re Your Best{" "}
                <span className="text-brand-secondary1">Connectivity</span> Ally
              </h2>
              <p className="text-base text-zinc-500 leading-relaxed max-w-sm">
                Solve your connectivity challenges fast, so you can focus on
                what matters — running your business. From day one, we&apos;ve
                built our reputation on speed, clarity, and relentless
                reliability.
              </p>
            </div>

            {/* Team image */}
            <div className="relative w-full h-84 rounded-[28px] overflow-hidden shadow-lg">
              <Image
                src="/hero_tech_team.png"
                alt="Al Jazeera Telecom team at work"
                fill
                className="object-cover"
              />
             
            </div>
          </div>

          {/* ── Right Column — Accordion list ── */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-200">
            {reasons.map((reason, i) => {
              return (
                <div key={i} className="py-6 group">
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
                        <div className="pt-4 flex flex-row gap-5">
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {reason.description}
                          </p>

                          {/* Active card image + CTA */}
                          {reason.image && (
                            <div className="flex items-center gap-5">
                              <div className="relative w-80 h-50 rounded-2xl overflow-hidden shrink-0 shadow-md">
                                <Image
                                  src={reason.image}
                                  alt={reason.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              {/* {reason.cta && (
                                  <Link
                                    href={reason.cta.href}
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                  >
                                    {reason.cta.label}
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                )} */}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
