import type { NextApiRequest, NextApiResponse } from "next";
import Technology from "../../../models/technology";
import { deleteOne, getOne, updateOne } from "@/technology-service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Technology>
) {
  const { query, method } = req;
  const id = query.id as string;
  switch (method) {
    case "GET":
      const technology = await getOne(id);
      res.status(200).json(technology);
      break;
    case "PUT":
      const technologyToUpdate = req.body as Technology;
      await updateOne(id, technologyToUpdate);
      break;
    case "DELETE":
      await deleteOne(id);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
