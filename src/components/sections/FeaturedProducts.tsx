"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PRODUCTS,
  getWhatsAppProductOrderUrl,
  publicProductImagePath,
} from "@/lib/constants";

const FEATURED = PRODUCTS.slice(0, 3);

export function FeaturedProducts() {
  return (
    <section
      className="bg-gradient-to-b from-[#E8F5F3] to-white py-20 sm:py-28"
      aria-labelledby="home-products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="home-products-heading"
            className="text-3xl font-bold text-[#1B5E57] sm:text-4xl"
          >
            Local Wayanad Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1A1A1A]/80">
            Coffee, honey, spices, and more—sourced with care. Order on WhatsApp or
            explore the full range.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((product, index) => (
            <motion.article
              key={product.file}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex w-fit max-w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#CFE8E5]/50"
            >
              <img
                src={publicProductImagePath(product.file)}
                alt={product.name}
                className="block h-auto w-auto max-w-full"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
              />
              <div className="flex w-full min-w-0 flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#1A1A1A]/80">{product.blurb}</p>
                <a
                  href={getWhatsAppProductOrderUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
                >
                  Buy on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border-2 border-[#0F9D8F] bg-white px-8 py-3.5 font-semibold text-[#0B4A45] transition-all hover:bg-[#CFE8E5]/50 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            View all products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
