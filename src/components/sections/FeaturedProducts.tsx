"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import {
  PRODUCTS,
  getWhatsAppProductOrderUrl,
  publicProductImagePath,
} from "@/lib/constants";

const FEATURED = PRODUCTS.slice(0, 3);

export function FeaturedProducts() {
  return (
    <section className="section-soft py-14 sm:py-20" aria-labelledby="home-products-heading">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#2FA89E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#3AA76D]/12 blur-3xl" />
        <motion.div
          className="relative text-center"
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
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((product, index) => (
            <motion.article
              key={product.file}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="card-premium group relative flex w-full max-w-full flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={publicProductImagePath(product.file)}
                  alt={product.name}
                  className="block h-auto w-auto max-w-full transition-transform duration-700 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2e2b]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex w-full min-w-0 flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#1A1A1A]/80">{product.blurb}</p>
                <a
                  href={getWhatsAppProductOrderUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#178544]/55 bg-gradient-to-r from-[#1f9f53] via-[#1b904b] to-[#167c40] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_28px_-18px_rgba(16,105,56,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_30px_-18px_rgba(16,105,56,1)] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
                >
                  <MessageCircle size={16} aria-hidden />
                  <span>Order on WhatsApp</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-[#0F9D8F]/40 bg-white/90 px-8 py-3.5 font-semibold text-[#0B4A45] shadow-[0_12px_24px_-20px_rgba(15,157,143,0.7)] transition-all hover:scale-[1.02] hover:bg-[#CFE8E5]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
          >
            View all products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
