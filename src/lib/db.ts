import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI ?? "";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (uri) {
  if (process.env.NODE_ENV === "development" && global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
    if (process.env.NODE_ENV === "development") global._mongoClientPromise = clientPromise;
  }
}

export async function getDb(): Promise<Db> {
  if (!uri || !clientPromise) throw new Error("MONGODB_URI is not set");
  const c = await clientPromise;
  return c.db("nesttourism");
}
