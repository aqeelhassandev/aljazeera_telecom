"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@base-ui/react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import HeroFiberLines from "./HeroFiberLines";
import { getTranslations } from "@/i18n";

export default function Hero({ locale = "en" }) {
  const t = getTranslations(locale);

  return (
    <section className="relative  pt-32 pb-24 overflow-hidden mt-10 bg-transparent">
      <HeroFiberLines />
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-6 flex flex-col gap-6"
          initial={{ opacity: 0, x: 350 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-100">
              <span className="text-[14px]">✶</span> {t.hero.badge1}
            </span>
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-100">
              <span className="text-[14px]">✶</span> {t.hero.badge2}
            </span>
          </div>

          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[76px] w-[80%] font-bold tracking-tight text-zinc-900 leading-[1.1] font-sans">
            {t.hero.headline1}
            <span className="text-brand-primary ml-1">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="text-sm sm:text-lg text-zinc-600 sm:w-[70%] leading-relaxed">
            {t.hero.subtext}
          </p>

          <div className="flex gap-4 mt-2">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1 rounded-full bg-brand-secondary1 px-4 sm:px-8 py-4 text-[12px] sm:text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaSupport}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-full bg-[#EEEEF1] hover:bg-[#EEEEF1]/80 px-5 sm:px-8 py-4 text-[12px] sm:text-sm font-semibold text-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t.hero.ctaServices}
            </Link>
          </div>

          {/* ── OUR PARTNERS marquee ── */}
          <div className="mt-10 pt-8 border-t border-zinc-100">
            <p className="text-xl mb-3 font-semibold tracking-widest text-zinc-400 uppercase mb-5">
              {t.hero.partners}
            </p>

            {/* Marquee track — overflow hidden, fade edges */}
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div
                className="flex items-center gap-10 w-max animate-marquee"
                style={{ animationDuration: "32s" }}
                 dir={locale === "ar" ? "rtl" : "ltr"}
              >
                {/* ── original set ── */}
                {[
                  /* MOC */
                  <span
                    key="moc"
                    className="flex flex-col items-center gap-1 min-w-[56px]"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#213a8f"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 28 Q24 14 34 28"
                        stroke="#213a8f"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 32 Q24 20 30 32"
                        stroke="#cc1b68"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <circle cx="24" cy="34" r="3" fill="#213a8f" />
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      MOC
                    </span>
                  </span>,

                  /* ITPC */
                  <span
                    key="itpc"
                    className="flex flex-col items-center gap-1 min-w-[56px]"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#1e8a3c"
                        strokeWidth="1.5"
                      />
                      <text
                        x="24"
                        y="27"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="bold"
                        fill="#1e8a3c"
                        fontFamily="sans-serif"
                      >
                        ITPC
                      </text>
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      ITPC
                    </span>
                  </span>,

                  /* CMC */
                  <span
                    key="cmc"
                    className="flex flex-col items-center gap-1 min-w-[56px]"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#8b1a1a"
                        strokeWidth="1.5"
                      />
                      <text
                        x="24"
                        y="27"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="bold"
                        fill="#8b1a1a"
                        fontFamily="sans-serif"
                      >
                        CMC
                      </text>
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      CMC
                    </span>
                  </span>,

                  /* Cisco */
                  <span key="cisco" className="flex items-center min-w-[64px]">
                    <svg viewBox="0 0 90 36" className="h-7 w-auto" fill="none">
                      <g fill="#049fd9">
                        <rect x="0" y="12" width="8" height="12" rx="2" />
                        <rect x="10" y="6" width="8" height="24" rx="2" />
                        <rect x="20" y="0" width="8" height="36" rx="2" />
                        <rect x="30" y="6" width="8" height="24" rx="2" />
                        <rect x="40" y="12" width="8" height="12" rx="2" />
                      </g>
                      <text
                        x="52"
                        y="26"
                        fontSize="18"
                        fontWeight="700"
                        fill="#049fd9"
                        fontFamily="sans-serif"
                      >
                        CISCO
                      </text>
                    </svg>
                  </span>,

                  /* MikroTik */
                  <span
                    key="mikrotik"
                    className="flex items-center min-w-[80px]"
                  >
                    <svg viewBox="0 0 120 32" className="h-7 w-auto">
                      <text
                        x="0"
                        y="24"
                        fontSize="22"
                        fontWeight="800"
                        fill="#333"
                        fontFamily="sans-serif"
                      >
                        Mikro
                      </text>
                      <text
                        x="72"
                        y="24"
                        fontSize="22"
                        fontWeight="800"
                        fill="#cc1b68"
                        fontFamily="sans-serif"
                      >
                        Tik
                      </text>
                    </svg>
                  </span>,

                  /* Ubiquiti */
                  <span
                    key="ubiquiti"
                    className="flex flex-col items-center gap-0.5 min-w-[56px]"
                  >
                    <svg viewBox="0 0 40 44" className="h-9 w-auto" fill="none">
                      <path
                        d="M20 2 L36 10 L36 30 Q20 42 4 30 L4 10 Z"
                        fill="#213a8f"
                      />
                      <text
                        x="20"
                        y="26"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="900"
                        fill="white"
                        fontFamily="sans-serif"
                      >
                        U
                      </text>
                    </svg>
                    <span className="text-[8px] font-bold text-zinc-400 tracking-widest">
                      UBIQUITI
                    </span>
                  </span>,

                  /* Google */
                  <span key="google" className="flex items-center min-w-[80px]">
                    <svg viewBox="0 0 120 40" className="h-8 w-auto">
                      <text
                        x="0"
                        y="30"
                        fontSize="28"
                        fontWeight="700"
                        fontFamily="sans-serif"
                      >
                        <tspan fill="#4285F4">G</tspan>
                        <tspan fill="#EA4335">o</tspan>
                        <tspan fill="#FBBC05">o</tspan>
                        <tspan fill="#4285F4">g</tspan>
                        <tspan fill="#34A853">l</tspan>
                        <tspan fill="#EA4335">e</tspan>
                      </text>
                    </svg>
                  </span>,

                  /* YouTube */
                  <span
                    key="youtube"
                    className="flex items-center min-w-[96px]"
                  >
                    <svg
                      viewBox="0 0 130 32"
                      className="h-8 w-auto"
                      fill="none"
                    >
                      <rect
                        x="0"
                        y="2"
                        width="40"
                        height="28"
                        rx="7"
                        fill="#FF0000"
                      />
                      <path d="M16 9 L28 16 L16 23Z" fill="white" />
                      <text
                        x="46"
                        y="24"
                        fontSize="20"
                        fontWeight="700"
                        fill="#212121"
                        fontFamily="sans-serif"
                      >
                        YouTube
                      </text>
                    </svg>
                  </span>,

                  /* Meta */
                  <span
                    key="meta"
                    className="flex flex-col items-center gap-0.5 min-w-[52px]"
                  >
                    <svg viewBox="0 0 60 36" className="h-8 w-auto" fill="none">
                      <path
                        d="M6 26 Q6 10 14 10 Q20 10 24 20 Q28 10 34 10 Q42 10 42 24 Q42 34 34 34 Q28 34 24 24 Q20 34 14 34 Q6 34 6 26Z"
                        stroke="url(#metaGrad)"
                        strokeWidth="3.5"
                        fill="none"
                      />
                      <defs>
                        <linearGradient
                          id="metaGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#0082FB" />
                          <stop offset="100%" stopColor="#00D4FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-[10px] font-bold text-zinc-500 tracking-wider">
                      Meta
                    </span>
                  </span>,

                  /* Apple */
                  <span key="apple" className="flex items-center min-w-[36px]">
                    <svg
                      viewBox="0 0 32 38"
                      className="h-9 w-auto"
                      fill="#1d1d1f"
                    >
                      <path d="M26.5 19.5c0-4.5 3.7-6.7 3.9-6.8-2.1-3.1-5.4-3.5-6.6-3.6-2.8-.3-5.5 1.6-6.9 1.6-1.4 0-3.6-1.6-5.9-1.5-3 0-5.8 1.7-7.3 4.4-3.2 5.5-.8 13.5 2.2 18 1.5 2.2 3.3 4.6 5.6 4.5 2.3-.1 3.1-1.4 5.8-1.4 2.7 0 3.5 1.4 5.9 1.4 2.4 0 3.9-2.2 5.4-4.4 1.7-2.5 2.4-5 2.4-5.1-.1-.1-4.5-1.7-4.5-6.6zM21.8 6c1.2-1.5 2-3.5 1.8-5.5-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2.1 3.3-1.8 5.3 1.9.1 3.8-.9 5-2.4z" />
                    </svg>
                  </span>,

                  /* Huawei */
                  <span key="huawei" className="flex items-center min-w-[80px]">
                    <svg viewBox="0 0 120 36" className="h-8 w-auto">
                      <text
                        x="0"
                        y="27"
                        fontSize="22"
                        fontWeight="700"
                        fill="#CF0A2C"
                        fontFamily="sans-serif"
                      >
                        HUAWEI
                      </text>
                    </svg>
                  </span>,

                  /* TP-Link */
                  <span key="tplink" className="flex items-center min-w-[80px]">
                    <svg viewBox="0 0 120 36" className="h-8 w-auto">
                      <text
                        x="0"
                        y="27"
                        fontSize="22"
                        fontWeight="800"
                        fill="#CC0000"
                        fontFamily="sans-serif"
                      >
                        TP-LINK
                      </text>
                    </svg>
                  </span>,
                ].map((logo) => logo)}

                {/* ── duplicate set for seamless loop ── */}
                {[
                  <span
                    key="moc2"
                    className="flex flex-col items-center gap-1 min-w-14"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#213a8f"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 28 Q24 14 34 28"
                        stroke="#213a8f"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 32 Q24 20 30 32"
                        stroke="#cc1b68"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <circle cx="24" cy="34" r="3" fill="#213a8f" />
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      MOC
                    </span>
                  </span>,
                  <span
                    key="itpc2"
                    className="flex flex-col items-center gap-1 min-w-14"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#1e8a3c"
                        strokeWidth="1.5"
                      />
                      <text
                        x="24"
                        y="27"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="bold"
                        fill="#1e8a3c"
                        fontFamily="sans-serif"
                      >
                        ITPC
                      </text>
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      ITPC
                    </span>
                  </span>,
                  <span
                    key="cmc2"
                    className="flex flex-col items-center gap-1 min-w-14"
                  >
                    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#8b1a1a"
                        strokeWidth="1.5"
                      />
                      <text
                        x="24"
                        y="27"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="bold"
                        fill="#8b1a1a"
                        fontFamily="sans-serif"
                      >
                        CMC
                      </text>
                    </svg>
                    <span className="text-[9px] font-bold text-zinc-400 tracking-widest">
                      CMC
                    </span>
                  </span>,
                  <span key="cisco2" className="flex items-center min-w-16">
                    <svg viewBox="0 0 90 36" className="h-7 w-auto" fill="none">
                      <g fill="#049fd9">
                        <rect x="0" y="12" width="8" height="12" rx="2" />
                        <rect x="10" y="6" width="8" height="24" rx="2" />
                        <rect x="20" y="0" width="8" height="36" rx="2" />
                        <rect x="30" y="6" width="8" height="24" rx="2" />
                        <rect x="40" y="12" width="8" height="12" rx="2" />
                      </g>
                      <text
                        x="52"
                        y="26"
                        fontSize="18"
                        fontWeight="700"
                        fill="#049fd9"
                        fontFamily="sans-serif"
                      >
                        CISCO
                      </text>
                    </svg>
                  </span>,
                  <span key="mikrotik2" className="flex items-center min-w-20">
                    <svg viewBox="0 0 120 32" className="h-7 w-auto">
                      <text
                        x="0"
                        y="24"
                        fontSize="22"
                        fontWeight="800"
                        fill="#333"
                        fontFamily="sans-serif"
                      >
                        Mikro
                      </text>
                      <text
                        x="72"
                        y="24"
                        fontSize="22"
                        fontWeight="800"
                        fill="#cc1b68"
                        fontFamily="sans-serif"
                      >
                        Tik
                      </text>
                    </svg>
                  </span>,
                  <span
                    key="ubiquiti2"
                    className="flex flex-col items-center gap-0.5 min-w-14"
                  >
                    <svg viewBox="0 0 40 44" className="h-9 w-auto" fill="none">
                      <path
                        d="M20 2 L36 10 L36 30 Q20 42 4 30 L4 10 Z"
                        fill="#213a8f"
                      />
                      <text
                        x="20"
                        y="26"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="900"
                        fill="white"
                        fontFamily="sans-serif"
                      >
                        U
                      </text>
                    </svg>
                    <span className="text-[8px] font-bold text-zinc-400 tracking-widest">
                      UBIQUITI
                    </span>
                  </span>,
                  <span key="google2" className="flex items-center min-w-20">
                    <svg viewBox="0 0 120 40" className="h-8 w-auto">
                      <text
                        x="0"
                        y="30"
                        fontSize="28"
                        fontWeight="700"
                        fontFamily="sans-serif"
                      >
                        <tspan fill="#4285F4">G</tspan>
                        <tspan fill="#EA4335">o</tspan>
                        <tspan fill="#FBBC05">o</tspan>
                        <tspan fill="#4285F4">g</tspan>
                        <tspan fill="#34A853">l</tspan>
                        <tspan fill="#EA4335">e</tspan>
                      </text>
                    </svg>
                  </span>,
                  <span key="youtube2" className="flex items-center min-w-24">
                    <svg
                      viewBox="0 0 130 32"
                      className="h-8 w-auto"
                      fill="none"
                    >
                      <rect
                        x="0"
                        y="2"
                        width="40"
                        height="28"
                        rx="7"
                        fill="#FF0000"
                      />
                      <path d="M16 9 L28 16 L16 23Z" fill="white" />
                      <text
                        x="46"
                        y="24"
                        fontSize="20"
                        fontWeight="700"
                        fill="#212121"
                        fontFamily="sans-serif"
                      >
                        YouTube
                      </text>
                    </svg>
                  </span>,
                  <span
                    key="meta2"
                    className="flex flex-col items-center gap-0.5 min-w-13"
                  >
                    <svg viewBox="0 0 60 36" className="h-8 w-auto" fill="none">
                      <path
                        d="M6 26 Q6 10 14 10 Q20 10 24 20 Q28 10 34 10 Q42 10 42 24 Q42 34 34 34 Q28 34 24 24 Q20 34 14 34 Q6 34 6 26Z"
                        stroke="url(#metaGrad2)"
                        strokeWidth="3.5"
                        fill="none"
                      />
                      <defs>
                        <linearGradient
                          id="metaGrad2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#0082FB" />
                          <stop offset="100%" stopColor="#00D4FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-[10px] font-bold text-zinc-500 tracking-wider">
                      Meta
                    </span>
                  </span>,
                  <span key="apple2" className="flex items-center min-w-9">
                    <svg
                      viewBox="0 0 32 38"
                      className="h-9 w-auto"
                      fill="#1d1d1f"
                    >
                      <path d="M26.5 19.5c0-4.5 3.7-6.7 3.9-6.8-2.1-3.1-5.4-3.5-6.6-3.6-2.8-.3-5.5 1.6-6.9 1.6-1.4 0-3.6-1.6-5.9-1.5-3 0-5.8 1.7-7.3 4.4-3.2 5.5-.8 13.5 2.2 18 1.5 2.2 3.3 4.6 5.6 4.5 2.3-.1 3.1-1.4 5.8-1.4 2.7 0 3.5 1.4 5.9 1.4 2.4 0 3.9-2.2 5.4-4.4 1.7-2.5 2.4-5 2.4-5.1-.1-.1-4.5-1.7-4.5-6.6zM21.8 6c1.2-1.5 2-3.5 1.8-5.5-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2.1 3.3-1.8 5.3 1.9.1 3.8-.9 5-2.4z" />
                    </svg>
                  </span>,
                  <span
                    key="huawei2"
                    className="flex items-center min-w-[80px]"
                  >
                    <svg viewBox="0 0 120 36" className="h-8 w-auto">
                      <text
                        x="0"
                        y="27"
                        fontSize="22"
                        fontWeight="700"
                        fill="#CF0A2C"
                        fontFamily="sans-serif"
                      >
                        HUAWEI
                      </text>
                    </svg>
                  </span>,
                  <span
                    key="tplink2"
                    className="flex items-center min-w-[80px]"
                  >
                    <svg viewBox="0 0 120 36" className="h-8 w-auto">
                      <text
                        x="0"
                        y="27"
                        fontSize="22"
                        fontWeight="800"
                        fill="#CC0000"
                        fontFamily="sans-serif"
                      >
                        TP-LINK
                      </text>
                    </svg>
                  </span>,
                ].map((logo) => logo)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Media Grid */}
        <motion.div
          className="lg:col-span-6 relative flex flex-col gap-6"
          initial={{ opacity: 0, x: -350, y: 350 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {/* Main Large Image Container */}
          <div
            className="relative rounded-[30px] h-87.5 md:h-127.5 lg:h-auto aspect-4/3 w-full bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/hero_tech_team.png')" }}
          >
            {/* Gear Icon Badge Overlay with Inset Curves (Fillets) */}
            <div className="absolute -top-1 -left-1 w-24 h-24 z-10  shadow-none">
              <div className="w-full h-full bg-[#f9f9f9] rounded-br-[32px] rounded-tl-[32px] flex items-center justify-center">
                <div className="bg-[#162a45]  p-2 sm:p-3.5 rounded-[20px] text-blue-300">
                  <img
                    src="/icons/icon1.svg"
                    alt="Hero"
                    className="w-10 h-auto animate-spin-slow object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-24 left-1 w-10.5 h-10.5 bg-transparent rounded-tl-[24px] shadow-[-12px_-12px_0_0_var(--background)]" />

                <div className="absolute top-1 left-24 w-10.5 h-10.5 bg-transparent rounded-tl-[24px] shadow-[-12px_-12px_0_0_var(--background)]" />
              </div>
            </div>
            {/* Play Button Overlay with Three-Layer Waves */}
            <div className="absolute -left-5.25 lg:-left-9  top-42 sm:top-1/2 -translate-y-1/2 flex items-center justify-center z-20">
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

              <Button className="relative bg-brand-primary hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all text-white p-4 sm:p-6 rounded-full cursor-pointer flex items-center justify-center z-10 shadow-lg">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Bottom Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rating Card */}
            <div className="bg-[#EEEEF1] border border-[#EEEEF1] pt-3  rounded-3xl p-6 flex flex-col gap-4 shadow-sm justify-end h-60">
              <div className="flex justify-between items-end ">
                <span className="text-8xl md:text-8xl lg:text-6xl xl:text-8xl font-light text-zinc-500 tracking-tight">
                  4,9
                </span>
                <div className="flex gap-1 text-yellow-400 mt-2 text-[24px]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap mt-2 gap-1">
                <span className="text-xl md:text-2xl w-1/2 font-semibold text-zinc-600">
                  {locale === "ar" ? "عملاء سعداء" : "Happy Customers"}
                </span>
                {/* Overlapping Avatars */}
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-50 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-50 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-50 object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    loading="lazy"
                  />
                  <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-zinc-50 bg-brand-primary text-[10px] font-bold text-white">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>

            {/* Experts on Call Card */}
            <div className="relative rounded-3xl h-full overflow-hidden shadow-sm aspect-2/1 md:aspect-auto bg-zinc-950">
              <Image
                src="/hero_experts_on_call.png"
                alt="Experts On Call"
                fill
                className="object-cover "
                loading="lazy"
              />
              <div className=" bg-[#072042a6] absolute inset-0"></div>
              <div className="absolute flex justify-between items-end  inset-0 p-6 ">
                <p className="text-white font-bold text-2xl leading-tight w-1/2 h-fit">
                  {locale === "ar" ? "خبراء الدعم" : "Experts On Call"}{" "}
                  <span className="text-brand-secondary1 text-xl font-bold italic">
                    24/7
                  </span>
                </p>
                <Link href={`/${locale}/contact`} className="bg-white w-fit hover:bg-brand-primary hover:text-white active:bg-brand-primary transition-all duration-300 cursor-pointer text-zinc-900 rounded-full p-2.5  shadow-xs">
                  <svg
                    className="w-4 h-4 stroke-current fill-none"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
