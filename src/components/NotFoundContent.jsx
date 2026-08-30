"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "motion/react";

export default function NotFoundContent() {
  return (
    <div className="min-h-screen bg-[#031530] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans">
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary1/5 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full gap-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="text-blue-400 text-sm sm:text-base font-medium tracking-wide uppercase"
        >
          Looks like the page you're looking for...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-7xl font-light tracking-tight mb-2"
        >
          404 Page not Found
        </motion.h1>

        <div className="relative w-full max-w-162.5 h-70 aspect-video my-6 flex items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src="/notfound.webp"
              alt="Page not found"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <motion.div
              initial={{ x: -56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute top-0 left-0 w-33 h-23 rounded-br-[30px] bg-[#031530]"
            />
            <motion.div
              initial={{ x: -56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute top-0 left-33 w-23 h-23 rounded-tl-[30px] shadow-[-15px_-30px_0px_0px_#031530] bg-transparent"
            />
            <motion.div
              initial={{ x: -56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
              className="absolute top-23 left-0 w-23 h-23 rounded-tl-[30px] shadow-[-15px_-15px_0px_0px_#031530] bg-transparent"
            />
            <motion.div
              initial={{ x: 56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute bottom-0 right-0 w-33 h-23 rounded-tl-[30px] bg-[#031530]"
            />
            <motion.div
              initial={{ x: 56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute bottom-0 right-33 w-23 h-23 rounded-br-[30px] shadow-[15px_30px_0px_0px_#031530] bg-transparent"
            />
            <motion.div
              initial={{ x: 56 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute bottom-23 right-0 w-23 h-23 rounded-br-[30px] shadow-[15px_15px_0px_0px_#031530] bg-transparent"
            />
          </div>
        </div>

        <Link
          href="/en/"
          className="inline-flex items-center gap-2 rounded-3xl bg-[#1d4ed8] hover:bg-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Back to Home</span>
          <Home className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
