import clientPromise from "./lib/mongodb";
import { Collection } from "mongodb";
import User from "./models/user";
const bcrypt = require("bcrypt");

async function getUserByName(name: string): Promise<User> {
  const collection = await getCollection();
  const query = { username: name };
  return collection.findOne(query) as Promise<User>;
}

async function addUser(user: User) {
  const collection = await getCollection();
  const hash = await bcrypt.hash(user.password, 8);
  user.password = hash;
  await collection.insertOne(user);
}

async function getCollection(): Promise<Collection<User>> {
  const client = await clientPromise;
  return client
    .db(process.env.DB_NAME)
    .collection(process.env.USERS_COLLECTION_NAME || "users");
}

export { getUserByName, addUser };
