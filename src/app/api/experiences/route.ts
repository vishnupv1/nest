import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { defaultExperiences } from "@/lib/experiences-seed";

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection("experiences");
    const cursor = collection.find({}).sort({ order: 1 });
    const list = await cursor.toArray();
    if (list.length > 0) {
      return NextResponse.json(
        list.map(({ _id, title, slug, description, image, price, duration }) => ({
          _id: String(_id),
          title,
          slug,
          description,
          image,
          price,
          duration,
        }))
      );
    }
  } catch {
    // DB not configured or error — return defaults
  }
  return NextResponse.json(defaultExperiences);
}
