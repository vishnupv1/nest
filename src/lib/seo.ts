import type { Metadata } from "next";
import { SITE } from "./constants";

/** Production site URL — use for canonicals, JSON-LD, sitemap alignment. */
export const SITE_URL = SITE.url;

/**
 * Primary phrases for meta keywords and copy (Google largely ignores
 * the keywords tag; titles, descriptions, and on-page text matter more).
 */
export const SEO_KEYWORDS = [
  "wayanad tourism",
  "kerala tourism",
  "tour packages wayanad",
  "wayanad tour packages",
  "wayanad natural products",
  "wayanad wild honey",
  "eco tourism wayanad",
  "wayanad tourism packages",
  "wayanad trekking",
  "visit wayanad kerala",
  "kerala eco tourism",
  "best places in wayanad",
] as const;

const PRODUCT_KEYWORDS = [
  "wayanad natural products",
  "wayanad wild honey",
  "wayanad coffee",
  "wayanad spices",
] as const;

const EXPERIENCE_KEYWORDS = [
  "wayanad tourism",
  "tour packages wayanad",
  "kerala tourism",
  "eco tourism wayanad",
] as const;

function canonicalPath(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function withCanonical(path: string): Pick<Metadata, "alternates"> {
  return { alternates: { canonical: canonicalPath(path) } };
}

type OgArgs = { path: string; title: string; description: string };

export function withOpenGraph({ path, title, description }: OgArgs): Pick<Metadata, "openGraph"> {
  return {
    openGraph: {
      type: "website",
      url: canonicalPath(path),
      title,
      description,
      siteName: "NEST Tourism Wayanad",
      locale: "en_IN",
    },
  };
}

export function homeMetadata(): Metadata {
  const title =
    "Explore Wayanad Tourism | NEST Eco Tourism | Sustainable Tourism Kerala";
  const description =
    "Wayanad tourism, tour packages, and Kerala experiences with NEST. Eco tours, Wayanad natural products, wild honey, trekking & safari. Book sustainable tourism in Wayanad.";
  return {
    title: { absolute: title },
    description,
    keywords: [...SEO_KEYWORDS],
    ...withCanonical("/"),
    ...withOpenGraph({ path: "/", title, description }),
  };
}

export function aboutMetadata(): Metadata {
  const title = "About NEST";
  const description =
    "NEST is a Wayanad cooperative for Kerala tourism and eco development since 2021. Learn about our mission and sustainable travel in North Wayanad.";
  const fullTitle = `${title} | Sustainable Tourism Wayanad`;
  return {
    title,
    description,
    keywords: [...SEO_KEYWORDS, "sustainable tourism kerala", "north wayanad"],
    ...withCanonical("/about"),
    ...withOpenGraph({ path: "/about", title: fullTitle, description }),
  };
}

export function productsMetadata(): Metadata {
  const title = "Wayanad Natural Products & Wild Honey";
  const description =
    "Wayanad natural products including wild honey, black pepper, coffee, and spices from NEST. Order authentic Kerala produce via WhatsApp.";
  const fullTitle = `${title} | NEST Tourism`;
  return {
    title,
    description,
    keywords: [...new Set([...SEO_KEYWORDS, ...PRODUCT_KEYWORDS])],
    ...withCanonical("/products"),
    ...withOpenGraph({ path: "/products", title: fullTitle, description }),
  };
}

export function contactMetadata(): Metadata {
  const title = "Contact & Bookings";
  const description =
    "Contact NEST Tourism for wayanad tourism bookings, tour packages, and product orders. Phone, email, and WhatsApp in Wayanad, Kerala.";
  const fullTitle = "Contact NEST Tourism — Wayanad & Kerala";
  return {
    title,
    description,
    keywords: [...SEO_KEYWORDS, "wayanad contact", "kerala tour booking"],
    ...withCanonical("/contact"),
    ...withOpenGraph({ path: "/contact", title: fullTitle, description }),
  };
}

export function experiencesIndexMetadata(): Metadata {
  const title = "Wayanad Tour Packages & Experiences";
  const description =
    "Book wayanad tourism experiences: tour packages, trekking, wildlife safari, waterfalls, and forest camping. NEST offers eco tourism in Kerala.";
  const fullTitle = `${title} | Eco Tourism`;
  return {
    title,
    description,
    keywords: [...new Set([...SEO_KEYWORDS, ...EXPERIENCE_KEYWORDS])],
    ...withCanonical("/experiences"),
    ...withOpenGraph({ path: "/experiences", title: fullTitle, description }),
  };
}

export function experienceDetailMetadata(
  slug: string,
  expTitle: string,
  description: string
): Metadata {
  return {
    title: expTitle,
    description,
    keywords: [...SEO_KEYWORDS, "wayanad tour packages", expTitle.toLowerCase()],
    ...withCanonical(`/experiences/${slug}`),
    ...withOpenGraph({
      path: `/experiences/${slug}`,
      title: `${expTitle} | NEST Tourism`,
      description,
    }),
  };
}
