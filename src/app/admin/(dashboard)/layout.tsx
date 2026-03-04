import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, MapPin, Calendar, Mail } from "lucide-react";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      <aside className="fixed left-0 top-0 h-full w-56 border-r border-white/10 bg-[#0f1419] p-4">
        <Link href="/admin" className="text-lg font-bold text-[#2FA89E]">
          NEST Admin
        </Link>
        <nav className="mt-8 space-y-2" aria-label="Admin navigation">
          <Link
            href="/admin"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link
            href="/admin/experiences"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <MapPin size={18} />
            Experiences
          </Link>
          <Link
            href="/admin/bookings"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <Calendar size={18} />
            Bookings
          </Link>
          <Link
            href="/admin/contact"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <Mail size={18} />
            Contact
          </Link>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white"
          >
            ← Back to site
          </Link>
        </div>
      </aside>
      <main className="ml-56 min-h-screen p-8">{children}</main>
    </div>
  );
}
