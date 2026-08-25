"use client";
import React from "react";
import { getTranslations } from "@/i18n";

export default function PartnersMarquee({ locale = "en" }) {
  const t = getTranslations(locale);

  const partnersLogos = [
    /* MOC */
    <span key="moc" className="flex flex-col items-center gap-1 min-w-[56px]">
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#213a8f" strokeWidth="2" />
        <path d="M14 28 Q24 14 34 28" stroke="#213a8f" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M18 32 Q24 20 30 32" stroke="#cc1b68" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="34" r="3" fill="#213a8f" />
      </svg>
      <span className="text-[9px] font-bold text-zinc-400 tracking-widest">MOC</span>
    </span>,

    /* ITPC */
    <span key="itpc" className="flex flex-col items-center gap-1 min-w-[56px]">
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#1e8a3c" strokeWidth="1.5" />
        <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e8a3c" fontFamily="sans-serif">ITPC</text>
      </svg>
      <span className="text-[9px] font-bold text-zinc-400 tracking-widest">ITPC</span>
    </span>,

    /* CMC */
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

    /* MikroTik */
    <span key="mikrotik" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 32" className="h-7 w-auto">
        <text x="0" y="24" fontSize="22" fontWeight="800" fill="#333" fontFamily="sans-serif">Mikro</text>
        <text x="72" y="24" fontSize="22" fontWeight="800" fill="#cc1b68" fontFamily="sans-serif">Tik</text>
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

    /* YouTube */
    <span key="youtube" className="flex items-center min-w-[96px]">
      <svg viewBox="0 0 130 32" className="h-8 w-auto" fill="none">
        <rect x="0" y="2" width="40" height="28" rx="7" fill="#FF0000" />
        <path d="M16 9 L28 16 L16 23Z" fill="white" />
        <text x="46" y="24" fontSize="20" fontWeight="700" fill="#212121" fontFamily="sans-serif">YouTube</text>
      </svg>
    </span>,

    /* Meta */
    <span key="meta" className="flex flex-col items-center gap-0.5 min-w-[52px]">
      <svg viewBox="0 0 60 36" className="h-8 w-auto" fill="none">
        <path d="M6 26 Q6 10 14 10 Q20 10 24 20 Q28 10 34 10 Q42 10 42 24 Q42 34 34 34 Q28 34 24 24 Q20 34 14 34 Q6 34 6 26Z" stroke="url(#metaGrad)" strokeWidth="3.5" fill="none" />
        <defs>
          <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0082FB" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[10px] font-bold text-zinc-500 tracking-wider">Meta</span>
    </span>,

    /* Apple */
    <span key="apple" className="flex items-center min-w-[36px]">
      <svg viewBox="0 0 32 38" className="h-9 w-auto" fill="#1d1d1f">
        <path d="M26.5 19.5c0-4.5 3.7-6.7 3.9-6.8-2.1-3.1-5.4-3.5-6.6-3.6-2.8-.3-5.5 1.6-6.9 1.6-1.4 0-3.6-1.6-5.9-1.5-3 0-5.8 1.7-7.3 4.4-3.2 5.5-.8 13.5 2.2 18 1.5 2.2 3.3 4.6 5.6 4.5 2.3-.1 3.1-1.4 5.8-1.4 2.7 0 3.5 1.4 5.9 1.4 2.4 0 3.9-2.2 5.4-4.4 1.7-2.5 2.4-5 2.4-5.1-.1-.1-4.5-1.7-4.5-6.6zM21.8 6c1.2-1.5 2-3.5 1.8-5.5-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2.1 3.3-1.8 5.3 1.9.1 3.8-.9 5-2.4z" />
      </svg>
    </span>,

    /* Huawei */
    <span key="huawei" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 36" className="h-8 w-auto">
        <text x="0" y="27" fontSize="22" fontWeight="700" fill="#CF0A2C" fontFamily="sans-serif">HUAWEI</text>
      </svg>
    </span>,

    /* TP-Link */
    <span key="tplink" className="flex items-center min-w-[80px]">
      <svg viewBox="0 0 120 36" className="h-8 w-auto">
        <text x="0" y="27" fontSize="22" fontWeight="800" fill="#CC0000" fontFamily="sans-serif">TP-LINK</text>
      </svg>
    </span>,
  ];

  return (
    <div className="w-full">
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
          {/* Double list for smooth seamless loop */}
          {[...partnersLogos, ...partnersLogos].map((logo, idx) => (
            <React.Fragment key={idx}>{logo}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
