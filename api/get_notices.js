const { PrismaClient } = require("@prisma/client");

module.exports = async function getData(req, res) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.notices.findMany();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  } finally {
    await prisma.$disconnect();
  }
};
