"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      id: 0,
      title: "FTTx",
      description: "Ultra-fast fiber-to-the-premises internet delivering reliable, high-speed connectivity for homes and businesses.",
      image: "/service_fttx.png",
      icon: <Zap className="w-5 h-5" />,
      tag: "Fiber",
    },
    {
      id: 1,
      title: "Wireless",
      description: "Cutting-edge wireless solutions providing seamless coverage and high-speed connectivity across your entire premises.",
      image: "/service_wireless.png",
      icon: <Wifi className="w-5 h-5" />,
      tag: "Wireless",
    },
    {
      id: 2,
      title: "Software Solutions",
      description: "Custom software development and enterprise solutions tailored to streamline your business operations.",
      image: "/service_software.png",
      icon: <Code className="w-5 h-5" />,
      tag: "Software",
    },
    {
      id: 3,
      title: "VoIP",
      description: "Feature-rich digital telephony systems delivering crystal-clear voice communication for modern businesses.",
      image: "/service_tech_support.png",
      icon: <Wrench className="w-5 h-5" />,
      tag: "VoIP",
    },
    {
      id: 4,
      title: "Cyber Security",
      description: "Comprehensive cybersecurity services protecting your digital infrastructure against evolving threats 24/7.",
      image: "/service_it_consulting.png",
      icon: <Shield className="w-5 h-5" />,
      tag: "Security",
    },
    {
      id: 5,
      title: "Hosting",
      description: "Reliable cloud and dedicated hosting solutions with maximum uptime guarantees and enterprise-grade security.",
      image: "/service_cloud_migration.png",
      icon: <Server className="w-5 h-5" />,
      tag: "Hosting",
    },
    {
      id: 6,
      title: "Network Consulting",
      description: "Expert network design, implementation, and optimization services to build a robust digital foundation.",
      image: "/service_it_consulting.png",
      icon: <Network className="w-5 h-5" />,
      tag: "Network",
    },
    {
      id: 7,
      title: "SBS for Businesses",
      description: "Scalable business solutions designed to integrate accounting, HR, and operations into a unified platform.",
      image: "/service_tech_support.png",
      icon: <Calculator className="w-5 h-5" />,
      tag: "Business",
    },
  ];

  const VISIBLE_COUNT = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0); // Index currently rendered

  const maxStartIndex = services.length - VISIBLE_COUNT;

  const handleNavigate = (nextIndex) => {
    if (isFading) return;
    const targetIndex = Math.max(0, Math.min(nextIndex, maxStartIndex));
    if (targetIndex === startIndex) return;

    setIsFading(true);
    setStartIndex(targetIndex);

    // Swap content halfway through the fade transition (e.g. 350ms of 700ms transition)
    setTimeout(() => {
      setDisplayIndex(targetIndex);
      setIsFading(false);
    }, 350);
  };

  // The middle card of the three visible cards is highlighted
  const activeCardIndex = displayIndex + 1;

  // Slice the 3 services to show based on current display index
  const visibleServices = services.slice(displayIndex, displayIndex + VISIBLE_COUNT);

  const progress = maxStartIndex > 0 ? startIndex / maxStartIndex : 0;

  return (
    <section className="relative bg-[#031530] py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 right-0 w-150 h-150 bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-[min(100%,1640px)] mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
                <span className="text-blue-400 text-sm">✶</span> Service
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Fix It All, Fast &amp; Right
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-2xl lg:pt-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white/90">
                We have the fix for any issue.
              </h3>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                No matter the issue, we've got the fix quick, clean, and with
                zero hassle. From daily tech glitches to long-term IT
                strategy, our services keep you running smooth.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-[#1d4ed8] hover:bg-blue-700 px-6 py-2.5 h-auto text-sm font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
              >
                <Link className="w-fit flex justify-center items-center gap-2" href="/services">
                  All service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handleNavigate(startIndex - 1)}
                  disabled={startIndex === 0}
                  aria-label="Previous services"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate(startIndex + 1)}
                  disabled={startIndex >= maxStartIndex}
                  aria-label="Next services"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Grid with Fade Animation */}
        <div className="relative">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
              }`}
          >
            {visibleServices.map((service, index) => {
              const actualIndex = displayIndex + index;
              const isActive = actualIndex === activeCardIndex;
              return (
                <div
                  key={service.id}
                  className={`relative overflow-hidden rounded-[32px] p-4 flex flex-col justify-between min-h-115 h-full transition-all duration-500 ease-out border ${isActive
                    ? "bg-white border-white text-zinc-900 shadow-2xl shadow-blue-950/40 scale-100"
                    : "bg-[#081a36]/60 border-blue-900/30 text-white hover:border-blue-700/50 hover:bg-[#081a36]/90 scale-[0.96] opacity-80"
                    }`}
                >
                  {/* Image */}
                  <div className="relative w-full h-60 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-all duration-500 rounded-[32px] ${isActive ? "scale-101" : "brightness-[0.8] contrast-[1.05]"
                        }`}
                    />

                    {isActive && (
                      <>
                        <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_white] -top-0.5 left-17" />
                        <div className="absolute bg-transparent w-10.75 h-10.75 rounded-tl-[24px] shadow-[-12px_-14px_0_0_white] top-17 left-[-2.7px]" />
                      </>
                    )}

                    {/* Icon wrapper */}
                    <div
                      className={`absolute -top-3 -left-3 p-3.5 pb-4 pr-4 rounded-br-[24px] z-10 self-start transition-colors duration-500 ${isActive ? "bg-white" : "bg-[#061833]"
                        }`}
                    >
                      <div
                        className={`p-4 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive
                          ? "bg-[#1d4ed8]"
                          : "bg-blue-600/30 border border-blue-500/20 backdrop-blur-sm"
                          }`}
                      >
                        {React.cloneElement(service.icon, {
                          className: `w-5 h-5 ${isActive ? "text-white" : "text-blue-400"}`,
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-6 mt-6 p-4">
                    <div className="flex flex-col gap-3">
                      <h4
                        className={`text-xl font-bold tracking-tight transition-colors duration-500 max-w-[90%] ${isActive ? "text-zinc-900" : "text-white"
                          }`}
                      >
                        {service.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-500 max-w-[95%] ${isActive ? "text-zinc-600" : "text-zinc-400"
                          }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <Button
                        asChild
                        className={`rounded-full px-5 py-2.5 h-auto text-sm  font-semibold transition-all duration-500 ${isActive
                          ? "bg-brand-secondary1 text-white hover:bg-blue-700 shadow-md"
                          : "bg-brand-primary border border-white/10 text-white hover:bg-white/10"
                          }`}
                      >
                        <Link className="w-fit flex justify-center items-center gap-2" href={`/services/${service.id}`}>
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Rail */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
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
              {String(startIndex + 1).padStart(2, "0")} / {String(services.length - VISIBLE_COUNT + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxStartIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleNavigate(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === startIndex ? "w-6 bg-brand-secondary1" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}