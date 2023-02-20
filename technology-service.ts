import clientPromise from "./lib/mongodb";
import Technology from "./models/technology";
import { Collection, ObjectId } from "mongodb";
import { v4 } from 'uuid';
import { Category } from "./models/category";
import { Ring } from "./models/ring";

let technologies: Technology[] = [
  new Technology("C#", "Programmiersprache basierend auf .NET", Category.Languages, Ring.Adopt, undefined, "00d22802-f89f-4d93-b481-4518eebc73b1"),
  new Technology("JAVA", "Java dslafjaölsdgölasdjfjl", Category.Languages, Ring.Adopt, undefined, "00d22802-f89f-4d93-b481-4518eebc73b1"),
  new Technology("Python", "Python", Category.Languages, Ring.Adopt, undefined, "00d22802-f89f-4d93-b481-4518eebc73b1"),
]

async function getTechnologies(): Promise<Technology[]> {
  return new Promise<Technology[]>(resolve => { resolve(technologies) });
  // const collection = await getCollection();
  // return collection.find({}).toArray() as Promise<Technology[]>;

}

async function getOne(id: string): Promise<Technology> {
  return new Promise<Technology>(resolve => { resolve(technologies.filter(t => t.id === id)[0]) });
  // const collection = await getCollection();
  // const query = { id: id };
  // return collection.findOne(query) as Promise<Technology>
}

// async function getCollection(): Promise<Collection<Technology>> {
//   const client = await clientPromise;
//   return client
//     .db(process.env.DB_NAME)
//     .collection(process.env.TECHNOLOGIES_COLLECTION_NAME || "technologies");
// }

async function postOne(technology: Technology) {
  technology.id = v4();
  technologies.push(technology);
  // const collection = await getCollection();
  // await collection.insertOne(technology);
}

async function updateOne(id: string, technology: Technology) {
  technology.id = id;
  const index = technologies.findIndex(t => t.id === id);
  technologies[index] = technology;
  // const collection = await getCollection();
  // const query = { id: id };
  // await collection.updateOne(query, technology);
}

async function deleteOne(id: string) {
  var result = technologies.filter(t => true);
  technologies = technologies.filter(t => t.id !== id);
  console.log(technologies);
  console.log(result);
  // const collection = await getCollection();
  // await collection.deleteOne({id: id});
}

export { getTechnologies, getOne, postOne, updateOne, deleteOne };
