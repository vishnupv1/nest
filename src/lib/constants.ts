export const SITE = {
  name: "NEST Tourism",
  fullName:
    "North Wayanad Environmental Sustainable Tourism Development Co-Operative Society",
  tagline: "Explore Wayanad with NEST Tourism",
  description:
    "Sustainable tourism experiences in the heart of Kerala's most beautiful forests.",
  url: "https://www.nesttourismwayanad.com",
  email: "nesttourismwayanad@gmail.com",
  phone: ["7902959959", "9526867152"],
  incorporatedDate: "03/03/2021",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/contact", label: "Contact" },
] as const;

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
