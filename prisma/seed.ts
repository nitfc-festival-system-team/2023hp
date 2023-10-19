import prisma from "../src/lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.notices.create({
      data: {
        title: "お知らせ1",
        url: "https://example.com",
      },
    }),
    prisma.notices.create({
      data: {
        title: "お知らせ2",
        url: "https://example.com",
      },
    }),
    prisma.notices.create({
      data: {
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
