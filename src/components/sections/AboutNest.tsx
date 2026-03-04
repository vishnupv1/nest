"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";
import { ParallaxSection } from "@/components/ParallaxSection";

export function AboutNest() {
  return (
    <section
      id="about-nest"
      className="relative py-20 sm:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="max-w-5xl mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text side */}
            <div className="text-center lg:text-left">
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
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#CFE8E5]">
                <h3 className="text-xl font-semibold text-[#0F9D8F]">
                  Our Mission
                </h3>
                <p className="mt-2 text-[#1A1A1A]/90">
                  To design and deliver eco–friendly tourism experiences that protect Wayanad&apos;s forests, rivers and wildlife, while creating fair and dignified livelihoods for local communities through responsible accommodation, guided tours and cooperative-driven services.
                </p>
              </div>
            </div>

            {/* Image collage side */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
                  alt="Misty Wayanad forest trail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Waterfall and lush greenery"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt="Trekking path in the forest"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
}
