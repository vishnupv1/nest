"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";

const timeline = [
  { year: "2021", event: "NEST incorporated as co-operative society under Government of Kerala" },
  { year: "2021", event: "Launched sustainable tourism initiatives in North Wayanad" },
  { year: "Present", event: "Offering trekking, safari, homestays, and eco tourism experiences" },
];

const inaugurationImages = Array.from({ length: 7 }, (_v, i) => `/inauguration/${i + 1}.jpeg`);

export function AboutContent() {
  const [currentInaugIndex, setCurrentInaugIndex] = useState(0);

  const handlePrev = () => {
    setCurrentInaugIndex((prev) => (prev - 1 + inaugurationImages.length) % inaugurationImages.length);
  };

  const handleNext = () => {
    setCurrentInaugIndex((prev) => (prev + 1) % inaugurationImages.length);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentInaugIndex((prev) => (prev + 1) % inaugurationImages.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#1B5E57] sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-xl text-[#1A1A1A]/80">
          {SITE.fullName}
        </p>
      </motion.header>

      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#0F9D8F]">Who We Are</h2>
        <p className="mt-4 text-[#1A1A1A]/90 leading-relaxed">
          NEST is a co-operative society designed to help domestic and international
          tourists find delight in Wayanad by providing accommodation, transport,
          tour packages, and safari experiences—all rooted in environmental sustainability
          and community benefit.
        </p>
      </motion.section>

      <motion.section
        className="section-elevated mt-12 rounded-2xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#0F9D8F]">Mission</h2>
        <p className="mt-2 text-[#1A1A1A]/90">
          Promote sustainable tourism while supporting local communities and preserving
          Wayanad&apos;s natural and cultural heritage.
        </p>
        <h2 className="mt-8 text-2xl font-semibold text-[#0F9D8F]">Vision</h2>
        <p className="mt-2 text-[#1A1A1A]/90">
          Make Wayanad a leading eco-tourism destination where travelers enjoy authentic
          experiences and local communities thrive.
        </p>
      </motion.section>

      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#0F9D8F]">Government Support</h2>
        <p className="mt-4 text-[#1A1A1A]/90 leading-relaxed">
          The NEST was incorporated on <strong>{SITE.incorporatedDate}</strong> as a
          co-operative society under the administrative control of the Department of
          Co-operation, Government of Kerala. We work in partnership with Kerala
          Tourism, Wayanad District Tourism Promotion Council, and TOURFED (Under
          Department of Co-operation, Govt. of Kerala), and are part of the National
          Federation of Tourism & Transport Cooperatives of India Ltd.
        </p>
      </motion.section>

      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#1B5E57]">Our Journey</h2>
        <ul className="mt-8 space-y-0">
          {timeline.map((item, index) => (
            <motion.li
              key={index}
              className="relative flex gap-6 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F9D8F] text-sm font-semibold text-white">
                {item.year.slice(0, 2)}
              </span>
              <div className="pt-0.5">
                <p className="font-medium text-[#1B5E57]">{item.year}</p>
                <p className="mt-1 text-[#1A1A1A]/90">{item.event}</p>
              </div>
              {index < timeline.length - 1 && (
                <span
                  className="absolute left-5 top-10 bottom-0 w-px bg-[#CFE8E5]"
                  aria-hidden
                />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#1B5E57]">
          Inauguration Moments
        </h2>
        <p className="mt-3 text-[#1A1A1A]/80">
          Highlights from the inauguration of North Wayanad Environmental Sustainable
          Tourism Development Co Operative Society Ltd No.W-361.
        </p>
        <div className="mt-6">
          <div className="section-elevated relative mx-auto w-full overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentInaugIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={inaugurationImages[currentInaugIndex]}
                    alt={`NEST inauguration photo ${currentInaugIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full bg-black/45 px-3 py-1.5 text-sm font-medium text-white hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous inauguration photo"
              >
                ‹ Prev
              </button>
              <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">
                {currentInaugIndex + 1} / {inaugurationImages.length}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full bg-black/45 px-3 py-1.5 text-sm font-medium text-white hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next inauguration photo"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-[#1B5E57]">
          Visit Us
        </h2>
        <p className="mt-3 text-[#1A1A1A]/80">
          Find NEST Tourism Co-operative Society in Wayanad on the map below.
        </p>
        <div className="section-elevated mt-6 overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5679.3141365227!2d76.06005967639757!3d11.846034138552346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ddec73dcea4f%3A0x490489bd493a9800!2sNest%20Tourism%20Co%20Op%20Society%20Wayanad!5e1!3m2!1sen!2sin!4v1772617505025!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
