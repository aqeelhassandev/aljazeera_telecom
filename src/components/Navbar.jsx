"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change / scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100">
        {/* Main Navbar */}
        <nav className="max-w-[1700px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={close}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="brightness-0 w-fit h-fit"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center gap-8 flex-1 text-[18px] font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-600 hover:text-brand-secondary1 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA Button — always visible */}
              <Link
                href="/book"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-secondary1 px-5 py-2.5 text-[12px] lg:text-[15px] font-semibold text-white shadow-sm hover:bg-brand-secondary1/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    animation: "pulse 2s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
                CALL 6055
              </Link>

              {/* Hamburger Button — mobile only */}
              <button
                id="nav-hamburger"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((o) => !o)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10  bg-white hover:bg-zinc-50 transition-colors gap-1.5"
              >
                {/* Animated bars */}
                <span
                  className="block w-5 h-0.5 bg-zinc-700 rounded-full transition-all duration-300 origin-center"
                  style={{
                    transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block w-5 h-0.5 bg-zinc-700 rounded-full transition-all duration-300"
                  style={{
                    opacity: isOpen ? 0 : 1,
                    transform: isOpen ? "scaleX(0)" : "none",
                  }}
                />
                <span
                  className="block w-5 h-0.5 bg-zinc-700 rounded-full transition-all duration-300 origin-center"
                  style={{
                    transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={close}
            />

            {/* Slide-in panel */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
                <Link href="/" onClick={close}>
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={90}
                    height={90}
                    className="brightness-0 w-fit h-fit"
                  />
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={close}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-6 pt-8 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="flex items-center gap-3 text-[18px] font-semibold text-zinc-700 hover:text-brand-secondary1 py-3.5 border-b border-zinc-50 transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom of panel */}
              <motion.div
                className="px-6 pb-10 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
              >
                <Link
                  href="/book"
                  onClick={close}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-secondary1 px-6 py-3.5 text-[16px] font-semibold text-white shadow hover:bg-brand-secondary1/80 active:scale-[0.98] transition-all duration-200"
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      animation: "pulse 2s ease-in-out infinite",
                      flexShrink: 0,
                    }}
                  />
                  CALL 6055
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
