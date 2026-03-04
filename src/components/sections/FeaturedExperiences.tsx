"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FEATURED_EXPERIENCES } from "@/lib/constants";

const placeholderImages: Record<string, string> = {
  trekking: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  "wildlife-safari": "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  waterfalls: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
  "forest-camping": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
  "village-culture": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
  adventure: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
};

export function FeaturedExperiences() {
  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="featured-heading"
            className="text-3xl font-bold text-[#1B5E57] sm:text-4xl"
          >
            Featured Wayanad Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1A1A1A]/80">
            From trekking and wildlife safari to village culture and adventure—discover what makes Wayanad special.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/experiences/${exp.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#CFE8E5]/50 transition-all hover:shadow-xl hover:ring-[#0F9D8F]/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={placeholderImages[exp.slug] ?? placeholderImages.trekking}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg">
                    {exp.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/experiences"
            className="inline-flex items-center rounded-full bg-[#0F9D8F] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#2FA89E] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            View All Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
