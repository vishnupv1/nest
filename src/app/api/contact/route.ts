import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    let db;
    try {
      db = await getDb();
    } catch {
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable. Please call or email us." },
        { status: 503 }
      );
    }
    const collection = db.collection("contact_submissions");
    await collection.insertOne({
      name: String(name),
      email: String(email),
      subject: String(subject),
      message: String(message),
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us." },
      { status: 500 }
    );
  }
}
