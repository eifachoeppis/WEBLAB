import { Collection } from "mongodb";
import clientPromise from "./lib/mongodb";
import Log from "./models/log";

async function log(message: string) {
  const log = new Log(message, new Date());
  const collection = await getCollection();
  await collection.insertOne(log);
}

async function getCollection(): Promise<Collection<Log>> {
  const client = await clientPromise;
  return client
    .db(process.env.DB_NAME)
    .collection(process.env.LOGS_COLLECTION_NAME || "logs");
}
export { log };
