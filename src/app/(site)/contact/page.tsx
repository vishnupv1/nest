import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | NEST Tourism Wayanad",
  description:
    "Contact NEST Tourism for Wayanad tours, bookings, and inquiries. Phone, email, and visit us in Wayanad.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactContent />
    </div>
  );
}
