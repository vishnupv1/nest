"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const timeline = [
  { year: "2021", event: "NEST incorporated as co-operative society under Government of Kerala" },
  { year: "2021", event: "Launched sustainable tourism initiatives in North Wayanad" },
  { year: "Present", event: "Offering trekking, safari, homestays, and eco tourism experiences" },
];

export function AboutContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
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
        className="mt-12 rounded-2xl bg-[#CFE8E5]/20 p-6 sm:p-8"
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
    </div>
  );
}
