const { spawnSync } = require("child_process");

const result = spawnSync("npx", ["prisma", "generate"]);

if (result.error) {
  console.error("Error generating Prisma Client:", result.error);
  process.exit(1);
}

console.log("Prisma Client generated successfully");
