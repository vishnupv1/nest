import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { Providers } from "@/components/Providers";
import { SEO_KEYWORDS } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#0F9D8F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nesttourismwayanad.com"),
  title: {
    default:
      "Explore Wayanad Tourism | NEST Eco Tourism | Sustainable Tourism Kerala",
    template: "%s | NEST Tourism Wayanad",
  },
  description:
    "Wayanad tourism and Kerala tour packages with NEST: eco experiences, trekking, safari, Wayanad natural products and wild honey. Sustainable travel in Wayanad.",
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: "NEST Tourism", url: "https://www.nesttourismwayanad.com" }],
  creator: "NEST Tourism",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nesttourismwayanad.com",
    siteName: "NEST Tourism Wayanad",
    title: "Explore Wayanad Tourism | NEST Eco Tourism",
    description:
      "Wayanad tourism, tour packages, Kerala experiences, and local natural products. Eco tourism and sustainable travel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEST Tourism - Wayanad Eco Tourism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Wayanad Tourism | NEST Eco Tourism",
    description: "Wayanad tourism, Kerala tour packages, eco experiences & local products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-[#1A1A1A] antialiased">
        <Providers>{children}</Providers>
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
