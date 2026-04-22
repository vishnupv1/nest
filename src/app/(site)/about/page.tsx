import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";
import { aboutMetadata } from "@/lib/seo";

export const metadata: Metadata = aboutMetadata();

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
    </div>
  );
}
