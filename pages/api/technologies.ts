import { NextApiRequest, NextApiResponse } from "next";
import { getTechnologies, postOne } from "@/technology-service";
import Technology from "@/models/technology";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
  switch (method) {
    case "GET":
      const technologies = await getTechnologies();
      res.status(200).json(technologies);
      break;
    case "POST":
      const technologyToInsert = req.body as Technology;
      technologyToInsert.savedAt = new Date();
      technologyToInsert.user = session?.user?.name || "";
      postOne(technologyToInsert);
      res.status(201).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
