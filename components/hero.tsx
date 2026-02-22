"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      className="hero-pattern flex min-h-[70vh] flex-col items-center justify-center gap-8 px-6 py-24 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span
        aria-hidden
        className="logo-text inline-block text-4xl font-medium text-[#2A4B7C] sm:text-5xl md:text-6xl"
      >
        P<span className="split-ring" />NIKELSKÝ
      </span>
      <p className="max-w-2xl text-2xl font-light tracking-wide text-slate-700 sm:text-3xl md:text-4xl">
        Průvodce efektivitou a osobním růstem
      </p>
      <a
        href="#kontakt"
        className="rounded-lg bg-[#2A4B7C] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d5a8f]"
      >
        Propojme se
      </a>
    </motion.section>
  );
}
