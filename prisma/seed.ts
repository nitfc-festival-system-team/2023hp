import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { title: "お知らせ1" },
      update: {},
      create: {
        title: "お知らせ1",
        url: "https://example.com",
      },
    }),
    prisma.users.upsert({
      where: { title: "お知らせ2" },
      update: {},
      create: {
        title: "お知らせ2",
        url: "https://example.com",
      },
    }),
    prisma.users.upsert({
      where: { title: "お知らせ3" },
      update: {},
      create: {
        title: "お知らせ3",
        url: "https://example.com",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
