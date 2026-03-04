import { MetadataRoute } from "next";
import { getExperiences } from "@/lib/experiences";

const BASE = "https://www.nesttourismwayanad.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const experiences = await getExperiences();
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/experiences`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
  const experiencePages: MetadataRoute.Sitemap = experiences.map((e) => ({
    url: `${BASE}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...experiencePages];
}
