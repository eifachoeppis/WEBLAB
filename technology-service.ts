import clientPromise from "./lib/mongodb";
import Technology from "./models/technology";
import { Collection, ObjectId } from "mongodb";
import { v4 } from "uuid";

async function getTechnologies(): Promise<Technology[]> {
  const collection = await getCollection();
  return collection.find({}).toArray() as Promise<Technology[]>;
}

async function getOne(id: string): Promise<Technology> {
  const collection = await getCollection();
  const query = { id: id };
  return collection.findOne(query) as Promise<Technology>;
}

async function getCollection(): Promise<Collection<Technology>> {
  const client = await clientPromise;
  return client
    .db(process.env.DB_NAME)
    .collection(process.env.TECHNOLOGIES_COLLECTION_NAME || "technologies");
}

async function postOne(technology: Technology) {
  technology.id = v4();
  const collection = await getCollection();
  await collection.insertOne(technology);
}

async function updateOne(id: string, technology: Technology) {
  const collection = await getCollection();
  const query = { id: id };
  await collection.updateOne(query, {
    $set: {
      name: technology.name,
      description: technology.description,
      category: technology.category,
      ring: technology.ring
    }
  });
}

async function deleteOne(id: string) {
  const collection = await getCollection();
  await collection.deleteOne({ id: id });
}

export { getTechnologies, getOne, postOne, updateOne, deleteOne };
