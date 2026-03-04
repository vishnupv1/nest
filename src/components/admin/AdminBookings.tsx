"use client";

import { useEffect, useState } from "react";

interface Booking {
  _id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  participants: number;
  message?: string;
  experienceTitle?: string;
  createdAt: string;
}

export function AdminBookings() {
  const [list, setList] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((r) => r.json())
      .then((data) => {
        setList(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white/70">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Bookings</h1>
      <p className="mt-2 text-white/60">Tour booking requests from the website.</p>
      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-4 font-medium text-white">Date</th>
              <th className="p-4 font-medium text-white">Name</th>
              <th className="p-4 font-medium text-white">Contact</th>
              <th className="p-4 font-medium text-white">Tour date</th>
              <th className="p-4 font-medium text-white">Pax</th>
              <th className="p-4 font-medium text-white">Experience</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-white/50">
                  No bookings yet.
                </td>
              </tr>
            ) : (
              list.map((b) => (
                <tr key={b._id} className="border-b border-white/5">
                  <td className="p-4 text-white/80">
                    {new Date(b.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-white">{b.name}</td>
                  <td className="p-4 text-white/80">
                    {b.phone}
                    <br />
                    <a href={`mailto:${b.email}`} className="text-[#2FA89E] hover:underline">
                      {b.email}
                    </a>
                  </td>
                  <td className="p-4 text-white/80">{b.date}</td>
                  <td className="p-4 text-white/80">{b.participants}</td>
                  <td className="p-4 text-white/80">{b.experienceTitle || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
