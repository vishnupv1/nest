"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
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

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#031716]/70 via-[#06201d]/55 to-[#082622]/75" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-24 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-[#fff7e5] drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explore Wayanad with{" "}
          <span className="bg-gradient-to-r from-[#ffe8b0] via-[#ffd27a] to-[#f8b95c] bg-clip-text text-transparent">
            NEST Tourism
          </span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-[#fff3d6] drop-shadow-md sm:text-xl"
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
            className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            Explore Experiences
          </Link>
          <Link
            href="/experiences#book"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Book Tour
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
