"use client";
import React from "react";
import { getTranslations } from "@/i18n";
import { Marquee } from "./ui/marquee";

export default function PartnersMarquee({ locale = "en" }) {
  const t = getTranslations(locale);

  const partnersLogos = [
    /* MOC — State Company for Internet & Communications */
    <span key="moc" className="flex flex-col items-center gap-1 min-w-[56px]">
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#213a8f" strokeWidth="2" />
        <path d="M14 28 Q24 14 34 28" stroke="#213a8f" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M18 32 Q24 20 30 32" stroke="#cc1b68" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="34" r="3" fill="#213a8f" />
      </svg>
      <span className="text-[9px] font-bold text-zinc-400 tracking-widest">MOC</span>
    </span>,

    /* ITPC — Al-Salam Company */
    <span key="itpc" className="flex flex-col items-center gap-1 min-w-[56px]">
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#1e8a3c" strokeWidth="1.5" />
        <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e8a3c" fontFamily="sans-serif">ITPC</text>
      </svg>
      <span className="text-[9px] font-bold text-zinc-400 tracking-widest">ITPC</span>
    </span>,

    /* CMC — Communications & Media Commission */
    <span key="cmc" className="flex flex-col items-center gap-1 min-w-[56px]">
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#8b1a1a" strokeWidth="1.5" />
        <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#8b1a1a" fontFamily="sans-serif">CMC</text>
      </svg>
      <span className="text-[9px] font-bold text-zinc-400 tracking-widest">CMC</span>
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
        <text x="52" y="26" fontSize="18" fontWeight="700" fill="#049fd9" fontFamily="sans-serif">CISCO</text>
      </svg>
    </span>,

    /* Google */
    <span key="google" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <text x="0" y="30" fontSize="28" fontWeight="700" fontFamily="sans-serif">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    </span>,

    /* Huawei */
    <span key="huawei" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 36" className="h-8 w-auto">
        <text x="0" y="27" fontSize="22" fontWeight="700" fill="#CF0A2C" fontFamily="sans-serif">HUAWEI</text>
      </svg>
    </span>,

    /* Meta */
    <span key="meta" className="flex flex-col items-center gap-0.5 min-w-[52px]">
      <svg viewBox="0 0 60 36" className="h-8 w-auto" fill="none">
        <path
          d="M6 26 Q6 10 14 10 Q20 10 24 20 Q28 10 34 10 Q42 10 42 24 Q42 34 34 34 Q28 34 24 24 Q20 34 14 34 Q6 34 6 26Z"
          stroke="url(#metaGrad2)"
          strokeWidth="3.5"
          fill="none"
        />
        <defs>
          <linearGradient id="metaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0082FB" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[10px] font-bold text-zinc-500 tracking-wider">Meta</span>
    </span>,

    /* Aqaba IX */
    <span key="aqaba-ix" className="flex flex-col items-center gap-1 min-w-[64px]">
      <svg viewBox="0 0 80 36" className="h-8 w-auto">
        <text x="0" y="26" fontSize="18" fontWeight="800" fill="#1a6b9e" fontFamily="sans-serif">Aqaba</text>
        <text x="60" y="26" fontSize="18" fontWeight="800" fill="#e85d04" fontFamily="sans-serif">IX</text>
      </svg>
    </span>,

    /* Mimosa */
    <span key="mimosa" className="flex items-center min-w-[72px]">
      <svg viewBox="0 0 110 36" className="h-7 w-auto">
        <text x="0" y="26" fontSize="20" fontWeight="700" fill="#4caf50" fontFamily="sans-serif">Mimosa</text>
      </svg>
    </span>,

    /* Limelight Networks */
    <span key="limelight" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 160 36" className="h-7 w-auto">
        <text x="0" y="26" fontSize="14" fontWeight="700" fill="#84cc16" fontFamily="sans-serif">Limelight</text>
        <text x="82" y="26" fontSize="14" fontWeight="400" fill="#64748b" fontFamily="sans-serif">Networks</text>
      </svg>
    </span>,

    /* Sofia IX */
    <span key="sofia-ix" className="flex items-center min-w-[68px]">
      <svg viewBox="0 0 100 36" className="h-7 w-auto">
        <text x="0" y="26" fontSize="18" fontWeight="700" fill="#6366f1" fontFamily="sans-serif">Sofia</text>
        <text x="58" y="26" fontSize="18" fontWeight="800" fill="#e85d04" fontFamily="sans-serif">IX</text>
      </svg>
    </span>,

    /* Akamai */
    <span key="akamai" className="flex items-center min-w-[72px]">
      <svg viewBox="0 0 110 36" className="h-7 w-auto">
        <text x="0" y="26" fontSize="20" fontWeight="700" fill="#009bde" fontFamily="sans-serif">akamai</text>
      </svg>
    </span>,

    /* Ubiquiti */
    <span key="ubiquiti" className="flex flex-col items-center gap-0.5 min-w-[56px]">
      <svg viewBox="0 0 40 44" className="h-9 w-auto" fill="none">
        <path d="M20 2 L36 10 L36 30 Q20 42 4 30 L4 10 Z" fill="#213a8f" />
        <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="900" fill="white" fontFamily="sans-serif">U</text>
      </svg>
      <span className="text-[8px] font-bold text-zinc-400 tracking-widest">UBIQUITI</span>
    </span>,

    /* MikroTik */
    <span key="mikrotik" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 32" className="h-7 w-auto">
        <text x="0" y="24" fontSize="22" fontWeight="800" fill="#333" fontFamily="sans-serif">Mikro</text>
        <text x="72" y="24" fontSize="22" fontWeight="800" fill="#cc1b68" fontFamily="sans-serif">Tik</text>
      </svg>
    </span>,
  ];

  return (
    <div className="w-full">
      <p className="text-xl mb-5 font-semibold tracking-widest text-zinc-600 uppercase">
        {" "}
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
        <Marquee >
          {/* Double list for smooth seamless loop */}
          {[...partnersLogos, ...partnersLogos].map((logo, idx) => (
            <React.Fragment key={idx}>{logo}</React.Fragment>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
