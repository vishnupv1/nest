export const SITE = {
  name: "NEST Tourism",
  fullName:
    "North Wayanad Environmental Sustainable Tourism Development Co Operative Society Ltd No.W-361",
  tagline: "Explore Wayanad with NEST Tourism",
  description:
    "Sustainable tourism experiences in the heart of Kerala's most beautiful forests.",
  url: "https://www.nesttourismwayanad.com",
  email: "nesttourismwayanad@gmail.com",
  phone: ["7902959959", "0495 2594959"],
  incorporatedDate: "03/03/2021",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

/** Local products with images in /public/products */
export const PRODUCTS = [
  {
    name: "NEST Honey",
    file: "nest honey.jpg.jpeg",
    blurb: "Pure, locally sourced natural honey.",
  },
  {
    name: "NEST Black Pepper",
    file: "nests black pepper.jpg.jpeg",
    blurb: "Whole black pepper, a Wayanad staple.",
  },
  {
    name: "NEST Coffee Beans",
    file: "nest coffee beans.jpg.jpeg",
    blurb: "Aromatic coffee from the Wayanad highlands.",
  },
  {
    name: "NEST Dry Ginger",
    file: "nest dry ginger.jpg.jpeg",
    blurb: "Sun-dried ginger for your kitchen and wellness.",
  },
  {
    name: "NEST Wild Turmeric",
    file: "nest wild turmeric.jpg.jpeg",
    blurb: "High-curcumin wild turmeric from the region.",
  },
] as const;

export function publicProductImagePath(file: string): string {
  return `/products/${encodeURIComponent(file)}`;
}

/** E.164 without + for wa.me (India +91, primary mobile). */
function whatsAppNumberE164(): string {
  return `91${SITE.phone[0].replace(/\D/g, "")}`;
}

/** General WhatsApp chat. Optional pre-filled message. */
export function getWhatsAppChatUrl(presetText?: string): string {
  const n = whatsAppNumberE164();
  if (presetText?.trim()) {
    return `https://wa.me/${n}?text=${encodeURIComponent(presetText.trim())}`;
  }
  return `https://wa.me/${n}`;
}

/** WhatsApp order link using the primary contact mobile (with India country code). */
export function getWhatsAppProductOrderUrl(productName: string): string {
  return getWhatsAppChatUrl(
    `Hi, I would like to order: ${productName} (from the NEST Tourism website).`
  );
}

export const WHY_CHOOSE = [
  {
    title: "Eco Tourism",
    description: "Responsible travel that conserves the environment and sustains local communities.",
    icon: "Leaf",
  },
  {
    title: "Community Tourism",
    description: "Support local homestays and tribal communities for authentic cultural exchange.",
    icon: "Users",
  },
  {
    title: "Local Guides",
    description: "Expert guides who know every trail, waterfall, and story of Wayanad.",
    icon: "Compass",
  },
  {
    title: "Authentic Experiences",
    description: "Real adventures—trekking, safaris, village visits—not tourist traps.",
    icon: "Sparkles",
  },
] as const;

export const FEATURED_EXPERIENCES = [
  { title: "Trekking", slug: "trekking", image: "/images/trekking.jpg" },
  { title: "Wildlife Safari", slug: "wildlife-safari", image: "/images/safari.jpg" },
  { title: "Waterfalls", slug: "waterfalls", image: "/images/waterfalls.jpg" },
  { title: "Forest Camping", slug: "forest-camping", image: "/images/camping.jpg" },
  { title: "Village Culture", slug: "village-culture", image: "/images/village.jpg" },
  { title: "Adventure Tourism", slug: "adventure", image: "/images/adventure.jpg" },
] as const;

export const WAYANAD_ATTRACTIONS = {
  waterfalls: [
    "Meenmutty Waterfalls",
    "Kanthanpara Waterfalls",
    "Soochipara Waterfalls",
  ],
  hills: ["Arattupara", "Cheengeri Hills", "Chembra Peak", "Churam"],
  lakesDams: [
    "Banasura Sagar Dam",
    "Karapuzha Dam",
    "Karlad Lake",
    "Kuruva Island",
    "Pookode Lake",
  ],
  sanctuaries: ["Tholpetty Sanctuary", "Muthanga Wildlife Sanctuary"],
  historical: [
    "Heritage Museum",
    "Jain Temple Panamaram",
    "Jain Temple Bathery",
    "Korome Mosque",
    "Pallikunnu Church",
    "Pazhassi Tomb",
    "Thirunelli Temple",
    "Valliyoorkavu Temple",
  ],
  exotic: [
    "Chain Tree",
    "Phantom Rock",
    "Priyadarshini Tea Estate",
    "RARS",
  ],
} as const;
