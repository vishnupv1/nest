import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";
import { contactMetadata } from "@/lib/seo";

export const metadata: Metadata = contactMetadata();

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactContent />
    </div>
  );
}
