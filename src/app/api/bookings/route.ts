import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      date,
      participants,
      message,
      experienceId,
      experienceTitle,
    } = body;

    if (!name || !phone || !email || !date || !participants) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, email, date, participants" },
        { status: 400 }
      );
    }

    let db;
    try {
      db = await getDb();
    } catch {
      return NextResponse.json(
        { error: "Booking is temporarily unavailable. Please call or email us." },
        { status: 503 }
      );
    }
    const collection = db.collection("bookings");
    const doc = {
      name: String(name),
      phone: String(phone),
      email: String(email),
      date: String(date),
      participants: Number(participants) || 1,
      message: message ? String(message) : "",
      experienceId: experienceId || null,
      experienceTitle: experienceTitle || null,
      createdAt: new Date(),
    };

    await collection.insertOne(doc);
    return NextResponse.json({ success: true, id: doc });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Failed to save booking. Please try again or contact us." },
      { status: 500 }
    );
  }
}
