import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About NEST | Sustainable Tourism Wayanad",
  description:
    "North Wayanad Environmental Sustainable Tourism Development Co-Operative Society. Government-supported eco tourism in Kerala since 2021.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
    </div>
  );
}
