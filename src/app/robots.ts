import { MetadataRoute } from "next";

const BASE = "https://www.nesttourismwayanad.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
