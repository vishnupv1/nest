"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#CFE8E5]/50"
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
          className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            scrolled
              ? "text-[#1B5E57] hover:text-[#0F9D8F]"
              : "text-white hover:text-[#CFE8E5]"
          )}
          aria-label={`${SITE.name} - Home`}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? pathname === link.href
                      ? "text-[#0F9D8F]"
                      : "text-[#1A1A1A] hover:text-[#0F9D8F]"
                    : pathname === link.href
                    ? "text-[#CFE8E5]"
                    : "text-white hover:text-[#CFE8E5]"
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
            "md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F]",
            scrolled
              ? "text-[#1B5E57] hover:bg-[#CFE8E5]/50"
              : "text-white hover:bg-white/10"
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
            className="md:hidden overflow-hidden border-t border-[#CFE8E5]/50 bg-white"
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
