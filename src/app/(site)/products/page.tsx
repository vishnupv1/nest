import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";
import { productsMetadata } from "@/lib/seo";

export const metadata: Metadata = productsMetadata();

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsContent />
    </div>
  );
}
