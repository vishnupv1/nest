import type { Metadata } from "next";
import { ExperiencesCatalog } from "@/components/ExperiencesCatalog";
import { experiencesIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = experiencesIndexMetadata();

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      <ExperiencesCatalog />
    </div>
  );
}
