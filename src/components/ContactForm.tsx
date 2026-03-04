"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("success");
      setMessage("Message sent. We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Name *</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-[#CFE8E5] bg-white px-4 py-2.5 text-[#1A1A1A] focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Email *</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-[#CFE8E5] bg-white px-4 py-2.5 text-[#1A1A1A] focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
            placeholder="your@email.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-[#1A1A1A]">Subject *</span>
        <input
          type="text"
          name="subject"
          required
          className="mt-1 w-full rounded-lg border border-[#CFE8E5] bg-white px-4 py-2.5 text-[#1A1A1A] focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
          placeholder="Subject"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-[#1A1A1A]">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-[#CFE8E5] bg-white px-4 py-2.5 text-[#1A1A1A] focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
          placeholder="Your message"
        />
      </label>
      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-[#1B5E57]" : "text-red-600"}`}
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#0F9D8F] py-3.5 font-semibold text-white transition-all hover:bg-[#2FA89E] hover:scale-[1.02] disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2 sm:w-auto sm:px-10"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}
