import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";

export const metadata: Metadata = {
  title: "Products | Local Wayanad Produce | NEST Tourism",
  description:
    "Order Wayanad coffee, honey, spices, and more. Contact NEST Tourism on WhatsApp for local, sustainable products.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsContent />
    </div>
  );
}
