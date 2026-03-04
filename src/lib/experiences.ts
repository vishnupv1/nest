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
    description:
      "Explore Chembra Peak, Meenmutty and other trails with expert local guides. Experience the lush forests and stunning views of Wayanad.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    price: "From ₹1,500",
    duration: "4-6 hours",
  },
  {
    _id: "2",
    title: "Wildlife Safari",
    slug: "wildlife-safari",
    description:
      "Muthanga and Tholpetty sanctuaries. Spot elephants, deer, gaurs, and diverse birdlife in their natural habitat.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    price: "From ₹2,500",
    duration: "3-4 hours",
  },
  {
    _id: "3",
    title: "Waterfall Tour",
    slug: "waterfalls",
    description:
      "Soochipara, Meenmutty, Kanthanpara and more stunning waterfalls. Trek and swim in pristine settings.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    price: "From ₹1,200",
    duration: "Full day",
  },
  {
    _id: "4",
    title: "Tribal Village Visit",
    slug: "village-culture",
    description:
      "Authentic tribal culture, traditional crafts, and homestay experiences with local communities.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    price: "From ₹2,000",
    duration: "Half / Full day",
  },
  {
    _id: "5",
    title: "Forest Camping",
    slug: "forest-camping",
    description:
      "Overnight camping in the heart of Wayanad's forests. Bonfire, stargazing, and nature sounds.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    price: "From ₹3,500",
    duration: "1 night",
  },
  {
    _id: "6",
    title: "Adventure Trails",
    slug: "adventure",
    description:
      "Rock climbing, rappelling, and adventure activities for thrill-seekers in safe, guided settings.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    price: "From ₹2,200",
    duration: "4-6 hours",
  },
];

export async function getExperiences(): Promise<Experience[]> {
  try {
    const base = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const res = await fetch(`${base}/api/experiences`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch {
    // fallback to defaults
  }
  return defaultExperiences;
}

export async function getExperienceBySlug(
  slug: string
): Promise<Experience | null> {
  const all = await getExperiences();
  return all.find((e) => e.slug === slug) ?? null;
}
