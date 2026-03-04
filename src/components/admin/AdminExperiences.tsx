"use client";

import { useEffect, useState } from "react";

interface Experience {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

export function AdminExperiences() {
  const [list, setList] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Experience | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    price: "",
    duration: "",
  });

  function load() {
    fetch("/api/admin/experiences")
      .then((r) => r.json())
      .then((data) => {
        setList(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => load(), []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editing
      ? `/api/admin/experiences/${editing._id}`
      : "/api/admin/experiences";
    const method = editing ? "PUT" : "POST";
    const body = editing ? form : form;
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => (r.ok ? (setEditing(null), setForm({ title: "", slug: "", description: "", image: "", price: "", duration: "" }), load()) : Promise.reject()))
      .catch(() => alert("Failed to save"));
  }

  function remove(id: string) {
    if (!confirm("Delete this experience?")) return;
    fetch(`/api/admin/experiences/${id}`, { method: "DELETE" })
      .then((r) => r.ok && load())
      .catch(() => alert("Failed to delete"));
  }

  if (loading) return <p className="text-white/70">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Experiences</h1>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-medium text-white">{editing ? "Edit" : "Add"} experience</h2>
        <input
          required
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
        />
        <input
          required
          placeholder="Slug (e.g. wildlife-safari)"
          value={form.slug}
          onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
          rows={3}
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
          />
          <input
            placeholder="Duration"
            value={form.duration}
            onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="rounded-lg bg-[#0F9D8F] px-4 py-2 font-medium text-white hover:bg-[#2FA89E]">
            {editing ? "Update" : "Add"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setForm({ title: "", slug: "", description: "", image: "", price: "", duration: "" });
              }}
              className="rounded-lg border border-white/20 px-4 py-2 text-white/80 hover:bg-white/10"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <ul className="mt-8 space-y-4">
        {list.map((exp) => (
          <li key={exp._id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <span className="font-medium text-white">{exp.title}</span>
              <span className="ml-2 text-sm text-white/60">/{exp.slug}</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setEditing(exp);
                  setForm({ title: exp.title, slug: exp.slug, description: exp.description, image: exp.image, price: exp.price, duration: exp.duration });
                }}
                className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
              >
                Edit
              </button>
              <button type="button" onClick={() => remove(exp._id)} className="rounded-lg border border-red-500/50 px-3 py-1 text-sm text-red-400 hover:bg-red-500/20">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
