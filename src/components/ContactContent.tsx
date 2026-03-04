"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export function ContactContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#1B5E57] sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1A1A1A]/80">
          Get in touch for bookings, custom tours, or any questions about NEST Tourism in Wayanad.
        </p>
      </motion.header>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h2 className="text-xl font-semibold text-[#0F9D8F]">Contact details</h2>
            <ul className="mt-4 space-y-4 text-[#1A1A1A]/90">
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-[#0F9D8F]" aria-hidden />
                <a href={`tel:${SITE.phone[0]}`} className="hover:text-[#0F9D8F]">
                  {SITE.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-[#0F9D8F]" aria-hidden />
                <a href={`tel:${SITE.phone[1]}`} className="hover:text-[#0F9D8F]">
                  {SITE.phone[1]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-[#0F9D8F]" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#0F9D8F]">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={20} className="shrink-0 text-[#0F9D8F]" aria-hidden />
                <a
                  href={`https://${SITE.url.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F9D8F]"
                >
                  {SITE.url.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-[#0F9D8F]" aria-hidden />
                <span>North Wayanad, Kerala, India</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#CFE8E5] shadow-md aspect-video bg-[#CFE8E5]/20">
            <iframe
              title="Wayanad on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5679.3141365227!2d76.06005967639757!3d11.846034138552346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ddec73dcea4f%3A0x490489bd493a9800!2sNest%20Tourism%20Co%20Op%20Society%20Wayanad!5e1!3m2!1sen!2sin!4v1772617505025!5m2!1sen!2sin"
              className="h-full w-full min-h-[280px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-[#CFE8E5] sm:p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-[#1B5E57]">Send a message</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/70">
            All tourist taxi services, guide services, adventure tourism, farm tourism
            and ticketing services are available through NEST Tourism.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
