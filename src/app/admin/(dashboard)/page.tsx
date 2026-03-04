import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-2 text-white/70">Manage NEST Tourism content and bookings.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/admin/experiences"
          className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium text-white">Experiences</span>
          <p className="mt-1 text-sm text-white/60">Add, edit, or remove experiences</p>
        </Link>
        <Link
          href="/admin/bookings"
          className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium text-white">Bookings</span>
          <p className="mt-1 text-sm text-white/60">View and manage tour bookings</p>
        </Link>
        <Link
          href="/admin/contact"
          className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium text-white">Contact</span>
          <p className="mt-1 text-sm text-white/60">Contact form submissions</p>
        </Link>
      </div>
    </div>
  );
}
