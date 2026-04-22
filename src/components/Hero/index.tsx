"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero - Explore Wayanad with NEST Tourism"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/nature.gif"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden
        />
      </div>

      {/* Subtle uniform overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-24 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-[#FFF7E5] drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explore Wayanad with{" "}
          <span className="text-[#FFD27A]">NEST Tourism</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[#FFF3D6] drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Sustainable tourism experiences in the heart of Kerala&apos;s most
          beautiful forests.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center rounded-full bg-[#0F9D8F] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#2FA89E] hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            Explore Experiences
          </Link>
          <Link
            href="/experiences#book"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Book Tour
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
