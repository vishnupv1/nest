"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => ({ default: m.HeroScene })),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a3d38] via-[#1B5E57] to-[#0F9D8F]"
        aria-hidden
      />
    ),
  }
);

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero - Explore Wayanad with NEST Tourism"
    >
      <HeroScene />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-20 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explore Wayanad with{" "}
          <span className="text-[#CFE8E5]">NEST Tourism</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/95 drop-shadow-md"
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
