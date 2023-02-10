import type { NextApiRequest, NextApiResponse } from "next";
import Technology from "../../../models/technology";
import { getOne } from "@/technology-service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Technology>
) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      const technology = await getOne(query.id as string);
      res.status(200).json(technology);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
