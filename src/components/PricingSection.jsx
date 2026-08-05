"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    tag: "FTTH",
    speed: "50",
    unit: "Mbps",
    name: "Everyday Home",
    description:
      "Browsing, social, HD streaming and homework for a small household.",
    devices: "6+",
    streams: "2",
    fileTime: "13.7 min",
    perMbps: "700 IQD",
    features: [
      "Unlimited data, no fair-use cap",
      "Fiber straight into the home",
      "24/7 support on 6055",
    ],
    price: "35,000",
    popular: false,
    barWidth: "w-[17%]",
  },
  {
    tag: "FTTH",
    speed: "80",
    unit: "Mbps",
    name: "Family Plus",
    description:
      "Several people online at once, video calls and console downloads.",
    devices: "10+",
    streams: "3",
    fileTime: "8.5 min",
    perMbps: "563 IQD",
    features: [
      "Unlimited data, no fair-use cap",
      "Fiber straight into the home",
      "24/7 support on 6055",
    ],
    price: "45,000",
    popular: false,
    barWidth: "w-[27%]",
  },
  {
    tag: "FTTH",
    speed: "180",
    unit: "Mbps",
    name: "Gaming & 4K",
    description:
      "Low-latency ranked sessions, 4K on every screen, heavy uploads.",
    devices: "20+",
    streams: "7",
    fileTime: "3.8 min",
    perMbps: "361 IQD",
    features: [
      "Unlimited data, no fair-use cap",
      "Fiber straight into the home",
      "24/7 support on 6055",
    ],
    price: "65,000",
    popular: true,
    barWidth: "w-[60%]",
  },
  {
    tag: "FTTH",
    speed: "300",
    unit: "Mbps",
    name: "Pro & Small Office",
    description:
      "Work from home, servers, CCTV upload and a full office of devices.",
    devices: "30+",
    streams: "12",
    fileTime: "2.3 min",
    perMbps: "333 IQD",
    features: [
      "Unlimited data, no fair-use cap",
      "Fiber straight into the home",
      "24/7 support on 6055",
    ],
    price: "100,000",
    popular: false,
    barWidth: "w-[100%]",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-[#f0f4f8] py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[160px] opacity-50" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary2/10 rounded-full blur-[120px]" />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-brand-primary mb-6 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
            <span className="text-blue-400 text-sm">✶</span> Service
          </span>
        </div>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end"
        >
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
              Fiber plans for every home
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-12">
            <p className="text-base text-zinc-500 leading-relaxed max-w-lg">
              Four{" "}
              <span className="text-brand-secondary1 font-semibold">FTTH</span>{" "}
              tiers on the same fiber line — unlimited data on all of them.
              Prices are monthly, in Iraqi dinar.
            </p>
          </div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.speed}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className={`relative  flex flex-col rounded-3xl overflow-hidden border transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? "border-brand-secondary1 shadow-lg shadow-brand-secondary1/20 bg-brand-secondary1/8"
                  : "border-zinc-200 bg-brand-secondary2/12 shadow-sm"
              }`}
            >
              {/* Popular banner */}
              {plan.popular && (
                <div className="bg-brand-secondary1 text-white text-[10px] font-bold tracking-[0.18em] uppercase text-center py-2 px-4">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col flex-1 p-7 gap-5">
                {/* Tag */}
                <span
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                    plan.popular
                      ? "text-brand-secondary1"
                      : "text-brand-primary/90"
                  }`}
                >
                  {plan.tag}
                </span>

                {/* Speed */}
                <div className="flex items-end gap-1 leading-none">
                  <span
                    className={`text-6xl font-black tracking-tight ${
                      plan.popular ? "text-brand-secondary1" : "text-zinc-800"
                    }`}
                  >
                    {plan.speed}
                  </span>
                  <span className="text-xl font-semibold text-zinc-500 mb-1.5">
                    {plan.unit}
                  </span>
                </div>

                {/* Name + Description */}
                <div>
                  <p className="text-base font-bold text-zinc-900 mb-1">
                    {plan.name}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Divider bar */}
                <div
                  className={`h-[3px] ${plan.barWidth} rounded-full bg-gradient-to-r from-brand-secondary1 to-brand-secondary2`}
                />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 border border-zinc-100 rounded-2xl p-4 bg-zinc-50/60">
                  {[
                    { label: "Devices", value: plan.devices },
                    { label: "4K Streams", value: plan.streams },
                    { label: "5 GB File", value: plan.fileTime },
                    { label: "Per Mbps", value: plan.perMbps },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-0.5">
                        {stat.label}
                      </p>
                      <p className="text-sm font-bold text-zinc-800">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-zinc-500"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                          plan.popular
                            ? "bg-brand-secondary1"
                            : "bg-brand-secondary2"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span
                    className={`text-3xl font-black tracking-tight ${
                      plan.popular ? "text-brand-secondary1" : "text-zinc-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    IQD / month
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href="tel:6055"
                  className={`mt-1 w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? "bg-brand-secondary1 text-white shadow-md hover:bg-brand-secondary1/90"
                      : "border border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:bg-brand-secondary1 hover:text-white"
                  }`}
                >
                  Subscribe — 6055
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
