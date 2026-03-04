import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
    "Discover eco tourism experiences in Wayanad with NEST Tourism. Explore waterfalls, forests, wildlife and adventure tourism in Kerala. Book trekking, safari & homestays.",
  keywords: [
    "wayanad tourism",
    "eco tourism wayanad",
    "wayanad tourism packages",
    "wayanad trekking",
    "visit wayanad kerala",
    "wayanad adventure tourism",
    "wayanad nature tourism",
    "kerala eco tourism",
    "best places in wayanad",
  ],
  authors: [{ name: "NEST Tourism", url: "https://www.nesttourismwayanad.com" }],
  creator: "NEST Tourism",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nesttourismwayanad.com",
    siteName: "NEST Tourism Wayanad",
    title: "Explore Wayanad Tourism | NEST Eco Tourism",
    description:
      "Discover eco tourism experiences in Wayanad. Trekking, wildlife safari, waterfalls & sustainable tourism in Kerala.",
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
    description: "Eco tourism in Wayanad - trekking, safari, waterfalls & more.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nesttourismwayanad.com",
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
      </body>
    </html>
  );
}
