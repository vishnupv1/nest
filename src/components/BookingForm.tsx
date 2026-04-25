"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface BookingFormProps {
  experienceId?: string;
  experienceTitle?: string;
}

export function BookingForm({
  experienceId = "",
  experienceTitle = "",
}: BookingFormProps) {
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
      phone: formData.get("phone"),
      email: formData.get("email"),
      date: formData.get("date"),
      participants: formData.get("participants"),
      message: formData.get("message"),
      experienceId: experienceId || undefined,
      experienceTitle: experienceTitle || undefined,
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Booking failed");
      setStatus("success");
      setMessage("Booking request submitted. We'll contact you shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="section-elevated space-y-4 rounded-2xl p-6 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-[#1B5E57]">Book this experience</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Name *</span>
          <input
            type="text"
            name="name"
            required
            className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Phone *</span>
          <input
            type="tel"
            name="phone"
            required
            className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
            placeholder="Phone number"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-[#1A1A1A]">Email *</span>
        <input
          type="email"
          name="email"
          required
          className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
          placeholder="your@email.com"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Date *</span>
          <input
            type="date"
            name="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-[#1A1A1A]">Participants *</span>
          <input
            type="number"
            name="participants"
            required
            min={1}
            max={20}
            className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
            placeholder="Number of people"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-[#1A1A1A]">Message</span>
        <textarea
          name="message"
          rows={3}
          className="input-premium mt-1 w-full rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none"
          placeholder="Special requests or questions"
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
        className="btn-primary w-full rounded-full py-3.5 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2"
      >
        {status === "loading" ? "Submitting..." : "Submit Booking"}
      </button>
    </motion.form>
  );
}
