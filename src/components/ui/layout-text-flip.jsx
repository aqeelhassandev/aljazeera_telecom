"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  classNameContener,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  if (!mounted) {
    return (
      <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg leading-tight">
          {text}
        </span>

        <span
          className={cn(
            "relative w-fit overflow-hidden rounded-md border border-transparent px-3 py-1.5 font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10",
            classNameContener,
          )}
        >
          <span className="inline-block whitespace-nowrap">{words[0]}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-start gap-x-2 gap-y-1">
      <motion.span
        layoutId="subtext"
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg leading-tight"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className={cn(
          "relative w-fit overflow-hidden rounded-md border border-transparent px-3 py-1.5 font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10",
          classNameContener,
        )}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
