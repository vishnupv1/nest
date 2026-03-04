import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { authOptions } from "@/lib/auth";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }
  try {
    const { id } = await params;
    const body = await request.json();
    await db.collection("experiences").updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }
  try {
    const { id } = await params;
    await db.collection("experiences").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
