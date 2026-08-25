"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const plans = [
  {
    tag: "FTTH",
    speed: "60",
    unit: "Mbps",
    name: "Speed Plus",
    description: "",
    devices: "6+",
    streams: "2",
    fileTime: "11 min",
    perMbps: "583 IQD",
    features: [
      "mbps Peak Times 60",
      "Unlimited Data",
      "Low Gaming Latency"
    ],
    price: "35,000",
    popular: false,
    barWidth: "w-[20%]",
  },
  {
    tag: "FTTH",
    speed: "100",
    unit: "Mbps",
    name: "Speed Pro",
    description: "",
    devices: "12+",
    streams: "4",
    fileTime: "6.8 min",
    perMbps: "450 IQD",
    features: [
      "mbps Peak Times 100",
      "Unlimited Data",
      "Low Gaming Latency"
    ],
    price: "45,000",
    popular: true,
    barWidth: "w-[33%]",
  },
  {
    tag: "FTTH",
    speed: "180",
    unit: "Mbps",
    name: "Speed Max",
    description: "",
    devices: "20+",
    streams: "7",
    fileTime: "3.8 min",
    perMbps: "361 IQD",
    features: [
      "mbps Peak Times 180",
      "Unlimited Data",
      "Low Gaming Latency"
    ],
    price: "65,000",
    popular: false,
    barWidth: "w-[60%]",
  },
  {
    tag: "FTTH",
    speed: "300",
    unit: "Mbps",
    name: "Speed Ultra",
    description: "",
    devices: "30+",
    streams: "12",
    fileTime: "2.3 min",
    perMbps: "333 IQD",
    features: [
      "mbps Peak Times 300",
      "Unlimited Data",
      "Low Gaming Latency"
    ],
    price: "100,000",
    popular: false,
    barWidth: "w-[100%]",
  },
];

import { getTranslations } from "@/i18n";

export default function PricingSection({ locale = "en" }) {
  const t = getTranslations(locale);

  // Translate plan names, descriptions and features dynamically
  const activePlans = plans.map((plan, idx) => ({
    ...plan,
    name: t.pricing.plans[idx] ? t.pricing.plans[idx].name : plan.name,
    description: t.pricing.plans[idx]
      ? t.pricing.plans[idx].description
      : plan.description,
    features: [
      `${t.pricing.features[0]} ${plan.speed}`,
      t.pricing.features[1],
      t.pricing.features[2],
    ],
  }));

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
            <span className="text-blue-400 text-sm">✶</span> {t.pricing.badge}
          </span>
        </div>
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4  sm:mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, x: locale === "ar" ? 300 : -300, y: -90 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold tracking-tight text-zinc-900 leading-[1.15]">
              {t.pricing.heading}{" "}
              <span className="text-brand-secondary1">
                {t.pricing.headingHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: locale === "ar" ? -300 : 300, y: -90 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 lg:pl-12"
          >
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed lg:max-w-lg">
              {t.pricing.subtext}
            </p>
          </motion.div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mt-13">
          {activePlans.map((plan, index) => (
            <motion.div
              key={plan.speed}
              initial={{ opacity: 0, x: locale === "ar" ? 300 : -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              className="w-full h-full"
            >
              <CardContainer className="inter-var w-full">
                <CardBody
                  className={`relative group/card w-full h-full rounded-3xl p-7 border transition-all duration-300 ${
                    plan.popular
                      ? "border-brand-secondary1 shadow-lg shadow-brand-secondary1/20 bg-brand-secondary1/8 dark:bg-brand-secondary1/8 dark:border-brand-secondary1"
                      : "border-zinc-200 bg-white dark:bg-zinc-900/40 dark:border-zinc-800"
                  }`}
                >
                  {/* Popular banner */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 left-0 bg-brand-secondary1 text-white text-[10px] font-bold tracking-[0.18em] uppercase text-center py-2 rounded-t-3xl">
                      {t.pricing.mostPopular}
                    </div>
                  )}

                  <div
                    className={`flex flex-col h-full gap-5 ${plan.popular ? "pt-5" : ""}`}
                  >
                    {/* Tag */}
                    <CardItem
                      translateZ="50"
                      as="span"
                      className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                        plan.popular
                          ? "text-brand-secondary1"
                          : "text-brand-primary/90"
                      }`}
                    >
                      {plan.tag}
                    </CardItem>

                    {/* Speed */}
                    <CardItem
                      translateZ="10"
                      className="flex items-end gap-1 leading-none"
                    >
                      <span
                        className={`text-6xl font-black tracking-tight ${
                          plan.popular
                            ? "text-brand-secondary1"
                            : "text-zinc-800 dark:text-zinc-100"
                        }`}
                      >
                        {plan.speed}
                      </span>
                      <span className="text-xl font-semibold text-zinc-500 mb-1.5 dark:text-zinc-400">
                        {plan.unit}
                      </span>
                    </CardItem>

                    {/* Name + Description */}
                    <CardItem translateZ="50" className="w-full">
                      <p className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                        {plan.name}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {plan.description}
                      </p>
                    </CardItem>

                    {/* Divider bar */}
                    <CardItem
                      translateZ="10"
                      className={`h-[3px] ${plan.barWidth} rounded-full bg-gradient-to-r from-brand-secondary1 to-brand-secondary2`}
                    />

                    {/* Stats grid */}
                    <CardItem
                      translateZ="80"
                      className="grid grid-cols-2 gap-x-4 gap-y-3 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 bg-zinc-50/60 dark:bg-zinc-900/60 w-full"
                    >
                      {[
                        { label: t.pricing.stats.devices, value: plan.devices },
                        { label: t.pricing.stats.streams, value: plan.streams },
                        {
                          label: t.pricing.stats.fileSize,
                          value: plan.fileTime,
                        },
                        { label: t.pricing.stats.perMbps, value: plan.perMbps },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-0.5 dark:text-zinc-500">
                            {stat.label}
                          </p>
                          <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </CardItem>

                    {/* Features */}
                    <CardItem
                      translateZ="10"
                      as="ul"
                      className="flex flex-col gap-2 flex-1 w-full"
                    >
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400"
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
                    </CardItem>

                    {/* Price */}
                    <CardItem
                      translateZ="10"
                      className="flex items-baseline gap-1.5 mt-2"
                    >
                      <span
                        className={`text-3xl font-black tracking-tight ${
                          plan.popular
                            ? "text-brand-secondary1"
                            : "text-zinc-900 dark:text-zinc-100"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                        {t.pricing.perMonth}
                      </span>
                    </CardItem>

                    {/* CTA */}
                    <CardItem translateZ="10" className="w-full">
                      <Link
                        href="tel:6055"
                        className={`block mt-1 w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                          plan.popular
                            ? "bg-brand-secondary1 text-white shadow-md hover:bg-brand-secondary1/90"
                            : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-brand-secondary1 hover:text-white"
                        }`}
                      >
                        {t.pricing.subscribe}
                      </Link>
                      <p className="text-[11px] text-zinc-400 text-center mt-2.5 leading-normal">
                        {t.pricing.contactPrompt}
                      </p>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
