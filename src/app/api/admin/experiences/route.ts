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
    const list = await db.collection("experiences").find({}).sort({ order: 1 }).toArray();
    return NextResponse.json(list.map((d) => ({ ...d, _id: String(d._id) })));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }
  try {
    const body = await request.json();
    const { title, slug, description, image, price, duration } = body;
    if (!title || !slug) {
      return NextResponse.json({ error: "title and slug required" }, { status: 400 });
    }
    const res = await db.collection("experiences").insertOne({
      title: String(title),
      slug: String(slug).toLowerCase().replace(/\s+/g, "-"),
      description: String(description || ""),
      image: String(image || ""),
      price: String(price || ""),
      duration: String(duration || ""),
      order: 999,
    });
    return NextResponse.json({ _id: String(res.insertedId) });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
