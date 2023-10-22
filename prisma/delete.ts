import prisma from "../src/lib/prisma";

async function deleteData() {
  try {
    await prisma.notices.deleteMany({});
    await prisma.schedules.deleteMany({});
    await prisma.stands.deleteMany({});
    console.log("データの削除完了");
  } catch (error) {
    console.error("データの削除中にエラーが発生しました", error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteData();
