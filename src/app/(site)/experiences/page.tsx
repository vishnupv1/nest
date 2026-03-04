import type { Metadata } from "next";
import { ExperiencesCatalog } from "@/components/ExperiencesCatalog";

export const metadata: Metadata = {
  title: "Experiences | Trekking, Safari & Eco Tourism Wayanad",
  description:
    "Book nature trekking, wildlife safari, waterfall tours, tribal village visits, and forest camping in Wayanad. NEST Tourism eco experiences.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      <ExperiencesCatalog />
    </div>
  );
}
