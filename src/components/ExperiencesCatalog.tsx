"use client";

import { useEffect, useState } from "react";
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
    <section
      className="py-16 sm:py-24"
      aria-labelledby="experiences-heading"
    >
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
        <div
          id="book"
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp._id}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              slug={exp.slug}
              price={exp.price}
              duration={exp.duration}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
