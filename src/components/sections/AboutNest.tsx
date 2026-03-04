"use client";

import { SITE } from "@/lib/constants";
import { ParallaxSection } from "@/components/ParallaxSection";

export function AboutNest() {
  return (
    <section
      id="about-nest"
      className="relative py-20 sm:py-28 bg-[#CFE8E5]/20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="max-w-3xl mx-auto text-center">
          <h2
            id="about-heading"
            className="text-3xl font-bold text-[#1B5E57] sm:text-4xl"
          >
            About NEST
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/90 leading-relaxed">
            The NEST was incorporated on <strong>{SITE.incorporatedDate}</strong>{" "}
            as a co-operative society under the administrative control of the
            Department of Co-operation, led by the <strong>Government of Kerala</strong>.
          </p>
          <div className="mt-8 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-[#CFE8E5]">
            <h3 className="text-xl font-semibold text-[#0F9D8F]">Our Mission</h3>
            <p className="mt-2 text-[#1A1A1A]/90">
              Promote sustainable tourism while supporting local communities.
            </p>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
}
