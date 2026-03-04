"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  description?: string;
  image: string;
  slug: string;
  price?: string;
  duration?: string;
  index?: number;
  variant?: "default" | "featured";
}

export function ExperienceCard({
  title,
  description,
  image,
  slug,
  price,
  duration,
  index = 0,
  variant = "default",
}: ExperienceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#CFE8E5]/50 transition-shadow hover:shadow-xl"
    >
      <Link href={`/experiences/${slug}`} className="block">
        <div
          className={`relative overflow-hidden ${isFeatured ? "aspect-[4/3]" : "aspect-[3/2]"}`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isFeatured ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#0F9D8F] transition-colors">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-[#1A1A1A]/80 line-clamp-2">
              {description}
            </p>
          )}
          {(price || duration) && (
            <div className="mt-3 flex gap-4 text-sm text-[#1B5E57]">
              {price && <span>{price}</span>}
              {duration && <span>{duration}</span>}
            </div>
          )}
          <span className="mt-3 inline-block text-sm font-medium text-[#0F9D8F] group-hover:underline">
            View details →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
