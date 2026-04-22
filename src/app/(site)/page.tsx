import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutNest } from "@/components/sections/AboutNest";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutNest />
      <WhyChoose />
      <FeaturedExperiences />
    </>
  );
}
