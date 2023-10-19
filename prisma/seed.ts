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

    prisma.schedules.create({
      data: {
        title: "イベント1",
        place: "メインステージ",
        startDate: new Date(2023, 10, 14, 15, 0),
        endDate: new Date(2023, 10, 14, 16, 0),
      },
    }),
    prisma.schedules.create({
      data: {
        title: "イベント2",
        place: "メインステージ",
        startDate: new Date(2023, 10, 27, 10, 0),
        endDate: new Date(2023, 10, 27, 11, 0),
      },
    }),
    prisma.schedules.create({
      data: {
        title: "イベント3",
        place: "メインステージ",
        startDate: new Date(2023, 10, 27, 11, 0),
        endDate: new Date(2023, 10, 27, 12, 0),
      },
    }),
    prisma.schedules.create({
      data: {
        title: "イベント",
        place: "お外",
        startDate: new Date(2023, 10, 27, 13, 0),
        endDate: new Date(2023, 10, 27, 14, 0),
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
