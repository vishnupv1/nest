"use client";

import { motion } from "framer-motion";
import { getWhatsAppProductOrderUrl, PRODUCTS, publicProductImagePath } from "@/lib/constants";

export function ProductsContent() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            id="products-heading"
            className="text-4xl font-bold text-[#1B5E57] sm:text-5xl"
          >
            Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1A1A1A]/80">
            Local, sustainable produce from Wayanad. Message us on WhatsApp to check availability
            and place an order.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
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
                loading="lazy"
                decoding="async"
              />
              <div className="flex w-full min-w-0 flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold text-[#1A1A1A]">
                  {product.name}
                </h2>
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
      </div>
    </section>
  );
}
