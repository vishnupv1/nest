"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/45 backdrop-blur-xl border-b border-white/35 shadow-[0_14px_32px_-24px_rgba(7,31,28,0.45)]"
          : "bg-transparent border-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} - Home`}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/40 shadow-lg">
            <Image
              src="/logo.png"
              alt={SITE.name}
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <span
            className={cn(
              "text-[1.15rem] font-semibold tracking-[0.16em] uppercase transition-colors",
              !scrolled && isHome
                ? "text-white drop-shadow hover:text-[#CFE8E5]"
                : "text-[#1B5E57] hover:text-[#0F9D8F]"
            )}
            style={{ fontFamily: '"Poppins", var(--font-heading)' }}
          >
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1.5 rounded-full border border-white/30 bg-white/40 px-1.5 py-1.5 shadow-[0_12px_24px_-22px_rgba(10,33,31,0.6)] backdrop-blur-md" role="menubar">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className={cn(
                  "rounded-full py-2 text-sm font-medium transition-all",
                index === 0 ? "pl-3 pr-3.5" : "",
                index === NAV_LINKS.length - 1 ? "pl-3.5 pr-3" : "",
                index > 0 && index < NAV_LINKS.length - 1 ? "px-3.5" : "",
                !scrolled && isHome
                  ? pathname === link.href
                    ? "bg-white/15 text-[#CFE8E5]"
                    : "text-white hover:bg-white/10 hover:text-[#CFE8E5]"
                  : pathname === link.href
                  ? "bg-[#0F9D8F]/12 text-[#0F9D8F]"
                  : "text-[#1A1A1A] hover:bg-[#CFE8E5]/40 hover:text-[#0F9D8F]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "md:hidden rounded-xl border p-2.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F]",
            !scrolled && isHome
              ? "border-white/35 text-white hover:bg-white/10"
              : "border-[#CFE8E5] text-[#1B5E57] hover:bg-[#CFE8E5]/30"
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[#CFE8E5]/50 bg-white/95 shadow-lg backdrop-blur-xl"
          >
            <ul className="px-4 py-4 space-y-2" role="menu">
              {NAV_LINKS.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-3 text-base font-medium rounded-lg px-3 transition-colors",
                      pathname === link.href
                        ? "text-[#0F9D8F] bg-[#CFE8E5]/30"
                        : "text-[#1A1A1A] hover:bg-[#CFE8E5]/20"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
