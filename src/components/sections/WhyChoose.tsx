"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Compass, Sparkles } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = { Leaf, Users, Compass, Sparkles } as const;

export function WhyChoose() {
  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="why-choose-heading"
          className="text-center text-3xl font-bold text-[#1B5E57] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose NEST
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1A1A1A]/80">
          Authentic, sustainable tourism that benefits both travelers and local communities.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Leaf;
            return (
              <motion.article
                key={item.title}
                className="group rounded-2xl bg-[#CFE8E5]/20 p-6 ring-1 ring-[#CFE8E5]/50 transition-all hover:ring-[#0F9D8F]/30 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F9D8F]/10 text-[#0F9D8F]",
                    "group-hover:bg-[#0F9D8F] group-hover:text-white transition-colors"
                  )}
                >
                  <Icon size={24} aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1B5E57]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/80">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
