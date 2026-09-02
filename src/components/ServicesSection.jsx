"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Wifi,
  Code,
  ArrowRight,
  ArrowLeft,
  Shield,
  Server,
  Network,
  Calculator,
  Zap,
  Hand,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    id: 0,
    image: "/services/service_fttx.webp",
    icon: <Zap className="w-5 h-5" />,
  },

  {
    id: 1,
    image: "/services/service_cloud_migration.webp",
    icon: <Hand className="w-5 h-5" />,
  },
  {
    id: 2,
    image: "/services/service_software.png",
    icon: <Server className="w-5 h-5" />,
  },
  {
    id: 3,
    image: "/services/service_it_consulting.webp",
    icon: <Wifi className="w-5 h-5" />,
  },
];

import { getTranslations } from "@/i18n";

export default function ServicesSection({ locale = "en" }) {
  const t = getTranslations(locale);
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Translate service titles and descriptions dynamically
  const activeServices = services.map((s) => ({
    ...s,
    title: t.services.list[s.id] ? t.services.list[s.id].title : s.title,
    description: t.services.list[s.id]
      ? t.services.list[s.id].description
      : s.description,
  }));

  // On desktop 3 cards are visible at once; the middle one is "active".
  // On mobile only 1 card is visible, so that single card is "active".
  const activeCardIndex = selectedIndex + 1;

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const progress =
    scrollSnaps.length > 1 ? selectedIndex / (scrollSnaps.length - 1) : 0;

  return (
    <section className="relative bg-[#031530] py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-[min(100%,1640px)] mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <motion.div
            className="flex flex-col gap-4 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
                <span className="text-blue-400 text-sm">✶</span>{" "}
                {t.pricing.badge}
              </span>
            </div>

            <LayoutTextFlip
              text={t.services.welcomeText}
              words={t.services.flipWords}
              classNameContener="bg-brand-secondary1 text-white border-brand-secondary1 "
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 max-w-4xl lg:pt-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold text-white/90">
                {t.services.sectionHeading}
              </h1>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {t.services.sectionBody}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                className={cn(
                  buttonVariants({
                    className:
                      "rounded-full bg-[#1d4ed8] hover:bg-blue-700 px-6 py-2.5 h-auto text-sm font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-500 w-fit flex justify-center items-center gap-2",
                  }),
                )}
                href={`/${locale}/services`}
              >
                {t.services.allServices}
                <ArrowRight
                  className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  disabled={!canScrollPrev}
                  aria-label="Previous services"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  disabled={!canScrollNext}
                  aria-label="Next services"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-1  lg:gap-8">
          {/* Carousel */}
          <div className="relative ">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
                slidesToScroll: 1,
                direction: locale === "ar" ? "rtl" : "ltr",
              }}
              className="w-full "
            >
              <CarouselContent className="-ml-6 lg:-ml-8 py-12">
                {activeServices.map((service, actualIndex) => {
                  const isActive = actualIndex === activeCardIndex;
                  return (
                    <CarouselItem
                      key={service.id}
                      className="pl-6 lg:pl-8 basis-[88%] sm:basis-[60%] md:basis-1/3 select-none cursor-grab"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.5,
                          delay: (actualIndex % 3) * 0.1,
                        }}
                        className={`relative overflow-hidden rounded-[32px] p-4 flex flex-col justify-between min-h-115 xl:h-full transition-all duration-500 ease-out border bg-[#081a36]/60 border-blue-900/30 text-white hover:border-blue-700/50  scale-100 ${
                          isActive
                            ? "md:bg-white md:border-white md:text-zinc-900 md:shadow-2xl md:shadow-blue-950/40 md:scale-100 md:mb-10 md:opacity-100"
                            : "md:scale-[0.96] md:opacity-80 md:mt-14"
                        }`}
                      >
                        {/* Image */}
                        <div className="relative w-full h-60 z-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={`object-cover transition-all duration-500 rounded-[32px] brightness-[0.8] contrast-[1.05] ${
                              isActive
                                ? "md:scale-101 md:brightness-100 md:contrast-100"
                                : ""
                            }`}
                          />

                          {isActive ? (
                            <>
                              <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833] md:shadow-[-12px_-14px_0_0_white] -top-0.5 left-17" />
                              <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833] md:shadow-[-12px_-14px_0_0_white] top-17 left-[-2.7px]" />
                            </>
                          ) : (
                            <>
                              <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833] -top-0.5 left-17" />
                              <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_#061833] top-17 left-[-2.7px]" />
                            </>
                          )}

                          {/* Icon wrapper */}
                          <div
                            className={`absolute -top-3 -left-3 p-3.5 pb-4 pr-4 rounded-br-[24px] z-10 self-start transition-colors duration-500 bg-[#061833] ${
                              isActive ? "md:bg-white" : ""
                            }`}
                          >
                            <div
                              className={`p-4 rounded-2xl flex items-center justify-center transition-colors duration-500 bg-blue-600/30 border border-blue-500/20 backdrop-blur-sm ${
                                isActive ? "md:bg-[#1d4ed8]" : ""
                              }`}
                            >
                              {React.cloneElement(service.icon, {
                                className: `w-5 h-5 text-blue-400 ${isActive ? "md:text-white" : ""}`,
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col gap-6 mt-6 p-4">
                          <div className="flex flex-col gap-3">
                            <h4
                              className={`text-xl font-bold tracking-tight transition-colors duration-500 max-w-[90%] text-white ${
                                isActive ? "md:text-zinc-900" : ""
                              }`}
                            >
                              {service.title}
                            </h4>
                            <p
                              className={`text-sm leading-relaxed transition-colors duration-500 max-w-[95%] text-zinc-400 ${
                                isActive ? "md:text-zinc-600" : ""
                              }`}
                            >
                              {service.description}
                            </p>
                          </div>

                          <div>
                            <Link
                              className={cn(
                                buttonVariants({
                                  className: `rounded-full px-5 py-2.5 h-auto text-sm font-semibold transition-all duration-500 w-fit flex justify-center items-center gap-2 bg-brand-primary border border-white/10 text-white hover:bg-white/10 ${
                                    isActive
                                      ? "md:bg-brand-secondary1 md:border-transparent md:text-white md:hover:bg-blue-700 md:shadow-md"
                                      : ""
                                  }`,
                                }),
                              )}
                              href={`/${locale}/services`}
                            >
                              {t.services.getStarted}
                              <ArrowRight
                                className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
                              />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Progress Rail */}
          <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
            <div className="flex-1 flex items-center gap-4">
              <div className="relative flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-brand-secondary1 to-brand-secondary2 transition-[width] duration-500 ease-out"
                  style={{
                    width: `${Math.max(progress * 100, (1 / services.length) * 100)}%`,
                  }}
                />
              </div>
              <span className="text-xs font-medium text-zinc-400 tabular-nums shrink-0">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(scrollSnaps.length).padStart(2, "0")}
              </span>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === selectedIndex
                      ? "w-6 bg-brand-secondary1"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
