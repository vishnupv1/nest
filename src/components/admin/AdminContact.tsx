"use client";

import { useEffect, useState } from "react";

interface Submission {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export function AdminContact() {
  const [list, setList] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/contact")
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
      <h1 className="text-2xl font-bold text-white">Contact submissions</h1>
      <p className="mt-2 text-white/60">Messages from the contact form.</p>
      <div className="mt-8 space-y-4">
        {list.length === 0 ? (
          <p className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
            No submissions yet.
          </p>
        ) : (
          list.map((s) => (
            <div
              key={s._id}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-medium text-white">{s.name}</span>
                <span className="text-sm text-white/60">
                  {new Date(s.createdAt).toLocaleString()}
                </span>
              </div>
              <a href={`mailto:${s.email}`} className="mt-1 block text-sm text-[#2FA89E] hover:underline">
                {s.email}
              </a>
              <p className="mt-2 font-medium text-white/90">{s.subject}</p>
              <p className="mt-2 text-white/80 whitespace-pre-wrap">{s.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
