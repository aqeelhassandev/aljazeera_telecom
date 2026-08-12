"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020d1e] text-zinc-400 pt-20 pb-28 border-t border-white/5 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="pointer-events-none absolute -top-40 left-10 w-96 h-96 bg-brand-secondary1/5 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-120 h-120 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="invert brightness-0 w-fit h-fit"
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Connecting Iraq since 2004 with cutting-edge fiber-optic networks,
              enterprise-grade SLA, and 24/7 technical support.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-brand-secondary1 hover:text-white hover:border-brand-secondary1 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Solutions
            </h4>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  FTTx Fiber Internet
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Wireless Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Enterprise VoIP & SBS
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Stay Connected
              </h4>
              <p className="text-xs leading-relaxed text-zinc-400">
                Subscribe to receive updates on service expansions and tech
                insights.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="relative flex items-center"
            >
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-secondary1 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-8 h-8 flex items-center justify-center rounded-full bg-brand-secondary1 text-white hover:bg-brand-secondary1/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <span className="text-xs text-green-400 animate-pulse">
                Thanks for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-6 justify-center sm:justify-start">
            <span>
              &copy; {new Date().getFullYear()} Al Jazeera Telecom. All rights
              reserved.
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                SLA Agreement
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-zinc-300 transition-all duration-300"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
