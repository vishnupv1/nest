import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#0f3430] text-white"
      role="contentinfo"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(47,168,158,0.24),transparent_38%),radial-gradient(circle_at_86%_90%,rgba(58,167,109,0.2),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-[#dcf4f0]">
              {SITE.name}
            </h3>
            <p className="mt-2 text-sm text-white/90">
              {SITE.fullName}. Sustainable tourism in Wayanad since 2021.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#dcf4f0]">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-[#CFE8E5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#dcf4f0]">Contact</h3>
            <ul className="mt-2 space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" aria-hidden />
                <a href={`tel:${SITE.phone[0]}`}>{SITE.phone[0]}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" aria-hidden />
                <a href={`tel:${SITE.phone[1]}`}>{SITE.phone[1]}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" aria-hidden />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="shrink-0" aria-hidden />
                <a
                  href={`https://${SITE.url.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.url.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#dcf4f0]">Follow Us</h3>
            <p className="mt-2 text-sm text-white/90">
              Explore Wayanad with eco-friendly tourism experiences.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
