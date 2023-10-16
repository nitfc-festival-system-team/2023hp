import { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getData(res: NextApiResponse) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.notices.findMany();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  } finally {
    await prisma.$disconnect();
  }
}
