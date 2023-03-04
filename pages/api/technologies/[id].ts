import type { NextApiRequest, NextApiResponse } from "next";
import Technology from "../../../models/technology";
import { deleteOne, getOne, publishOne, updateOne } from "@/technology-service";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Technology>
) {
  const { query, method } = req;
  const id = query.id as string;
  const session = await getServerSession(req, res, authOptions);
  switch (method) {
    case "GET":
      const technology = await getOne(id);
      res.status(200).json(technology);
      break;
    case "PUT":
      const technologyToUpdate = req.body as Technology;
      technologyToUpdate.editedAt = new Date();
      technologyToUpdate.editedBy = session?.user?.name || "";
      await updateOne(id, technologyToUpdate);
      res.status(200).end("Updated.");
      break;
    case "PATCH":
      const technologyToPublish = req.body as Technology;
      technologyToPublish.publishedAt = new Date();
      await publishOne(id, technologyToPublish);
      res.status(200).end("Updated.")
      break;
    case "DELETE":
      await deleteOne(id);
      res.status(200).end("Deleted.");
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

