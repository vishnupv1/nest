"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const perView = 1;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((prev) =>
        prev >= FEATURED_EXPERIENCES.length - 1 ? 0 : prev + 1
      );
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const maxIndex = FEATURED_EXPERIENCES.length - 1;
  const slides = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_v, i) => i),
    [maxIndex]
  );

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="section-soft py-20 sm:py-28" aria-labelledby="featured-heading">
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
        <div className="mt-12">
          <div className="mb-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F9D8F]/30 bg-white/80 text-[#0F9D8F] shadow-sm transition hover:bg-[#0F9D8F]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
              aria-label="Previous experiences"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F9D8F]/30 bg-white/80 text-[#0F9D8F] shadow-sm transition hover:bg-[#0F9D8F]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
              aria-label="Next experiences"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${(current * 100) / perView}%` }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              {FEATURED_EXPERIENCES.map((exp) => (
                <div
                  key={exp.slug}
                  className="shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / perView}%` }}
                >
                  <Link
                    href={`/experiences/${exp.slug}`}
                    className="card-premium group mx-auto block max-w-4xl overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-[#0F9D8F]/30"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={placeholderImages[exp.slug] ?? placeholderImages.trekking}
                        alt={exp.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg">
                        {exp.title}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((slide) => (
              <button
                key={slide}
                type="button"
                onClick={() => setCurrent(slide)}
                className={`h-2.5 rounded-full transition-all ${
                  current === slide
                    ? "w-7 bg-[#0F9D8F]"
                    : "w-2.5 bg-[#0F9D8F]/30 hover:bg-[#0F9D8F]/50"
                }`}
                aria-label={`Go to slide ${slide + 1}`}
              />
            ))}
          </div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/experiences"
            className="btn-primary inline-flex items-center rounded-full px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            View All Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
