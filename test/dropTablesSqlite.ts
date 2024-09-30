import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function dropAllTables() {
  // Fetch all table names
  const tables = await prisma.$queryRaw<
    Array<{ name: string }>
  >`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`;

  // Drop each table
  for (const { name } of tables) {
    await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "${name}"`);
  }
}

// Use the function
dropAllTables()
  .then(() => console.log('All tables dropped'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });