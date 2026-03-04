import { Hero } from "@/components/Hero";
import { AboutNest } from "@/components/sections/AboutNest";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutNest />
      <WhyChoose />
      <FeaturedExperiences />
    </>
  );
}
