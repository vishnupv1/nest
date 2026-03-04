"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }
      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#CFE8E5]/20 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-[#CFE8E5]">
        <h1 className="text-2xl font-bold text-[#1B5E57]">Admin Login</h1>
        <p className="mt-1 text-sm text-[#1A1A1A]/70">NEST Tourism CMS</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-[#1A1A1A]">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-[#CFE8E5] px-4 py-2.5 focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-[#1A1A1A]">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-[#CFE8E5] px-4 py-2.5 focus:border-[#0F9D8F] focus:outline-none focus:ring-2 focus:ring-[#0F9D8F]/20"
            />
          </label>
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0F9D8F] py-3 font-semibold text-white hover:bg-[#2FA89E] disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#CFE8E5]/20"><p className="text-[#1B5E57]">Loading...</p></div>}>
      <LoginForm />
    </Suspense>
  );
}
