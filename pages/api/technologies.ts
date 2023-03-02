import { NextApiRequest, NextApiResponse } from "next";
import { getTechnologies, postOne } from "@/technology-service";
import Technology from "@/models/technology";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

  switch (method) {
    case "GET":
        const technologies = await getTechnologies();
        res.status(200).json(technologies);
      break;
    case "POST":
        const technologyToInsert = req.body as Technology;
        technologyToInsert.savedAt = new Date();
        //TODO get user from session
        technologyToInsert.user = "";
        postOne(technologyToInsert);
        res.status(201).end();
      break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
  }}