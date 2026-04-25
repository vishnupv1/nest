"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/ExperienceCard";

export interface Experience {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

const defaultExperiences: Experience[] = [
  {
    _id: "1",
    title: "Nature Trekking",
    slug: "trekking",
    description: "Explore Chembra Peak, Meenmutty and other trails with expert guides.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    price: "From ₹1,500",
    duration: "4-6 hours",
  },
  {
    _id: "2",
    title: "Wildlife Safari",
    slug: "wildlife-safari",
    description: "Muthanga and Tholpetty sanctuaries. Spot elephants, deer, and birds.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    price: "From ₹2,500",
    duration: "3-4 hours",
  },
  {
    _id: "3",
    title: "Waterfall Tour",
    slug: "waterfalls",
    description: "Soochipara, Meenmutty, Kanthanpara and more stunning falls.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    price: "From ₹1,200",
    duration: "Full day",
  },
  {
    _id: "4",
    title: "Tribal Village Visit",
    slug: "village-culture",
    description: "Authentic tribal culture, crafts, and homestay experiences.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    price: "From ₹2,000",
    duration: "Half / Full day",
  },
  {
    _id: "5",
    title: "Forest Camping",
    slug: "forest-camping",
    description: "Overnight camping in the heart of Wayanad's forests.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    price: "From ₹3,500",
    duration: "1 night",
  },
  {
    _id: "6",
    title: "Adventure Trails",
    slug: "adventure",
    description: "Rock climbing, rappelling, and adventure activities.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    price: "From ₹2,200",
    duration: "4-6 hours",
  },
];

const infoBadges = [
  "Eco friendly",
  "Local guides",
  "Small groups",
  "Family friendly",
  "Photography spots",
  "Customizable",
];

export function ExperiencesCatalog() {
  const [experiences, setExperiences] = useState<Experience[]>(defaultExperiences);

  useEffect(() => {
    fetch("/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setExperiences(data);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section-soft py-16 sm:py-24" aria-labelledby="experiences-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            id="experiences-heading"
            className="text-4xl font-bold text-[#1B5E57] sm:text-5xl"
          >
            Experiences
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1A1A1A]/80">
            Book sustainable tourism experiences in Wayanad—trekking, safari, waterfalls, and more.
          </p>
        </div>
        <div className="mt-7 text-center">
          <p className="inline-flex items-center rounded-full border border-[#0F9D8F]/30 bg-[#0F9D8F]/12 px-5 py-2.5 text-sm font-semibold tracking-wide text-[#0E6F66] shadow-[0_10px_24px_-20px_rgba(15,157,143,0.95)] ring-1 ring-white/60 backdrop-blur-sm sm:text-base">
            Scroll to reveal each experience one by one
          </p>
        </div>
        <div
          id="book"
          className="relative mt-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative flex min-h-[68vh] items-center md:min-h-[74vh]"
            >
              <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-12">
                <aside
                  className={`section-elevated hidden rounded-2xl p-6 md:block ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F9D8F]">
                    Experience Highlights
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#1B5E57]">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/80">
                    Best suited for travelers who enjoy authentic nature-led moments in Wayanad.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[#1A1A1A]/85">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0F9D8F]" />
                      {exp.duration}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0F9D8F]" />
                      {exp.price}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0F9D8F]" />
                      Flexible slots available
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {infoBadges.slice(index % 3, (index % 3) + 3).map((badge) => (
                      <span
                        key={`${exp._id}-${badge}`}
                        className="rounded-full border border-[#0F9D8F]/20 bg-white/70 px-3 py-1 text-xs font-medium text-[#0E6F66]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </aside>

                <div
                  className={`relative z-10 w-full ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                <ExperienceCard
                  title={exp.title}
                  description={exp.description}
                  image={exp.image}
                  slug={exp.slug}
                  price={exp.price}
                  duration={exp.duration}
                  index={index}
                  variant="featured"
                  repeatOnScroll
                />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
