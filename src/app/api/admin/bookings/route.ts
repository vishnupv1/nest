import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }
  try {
    const list = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();
    return NextResponse.json(
      list.map((d) => ({
        _id: String(d._id),
        name: d.name,
        phone: d.phone,
        email: d.email,
        date: d.date,
        participants: d.participants,
        message: d.message,
        experienceId: d.experienceId,
        experienceTitle: d.experienceTitle,
        createdAt: d.createdAt,
      }))
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
