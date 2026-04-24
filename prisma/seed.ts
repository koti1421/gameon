import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sports = [
  { name: "Basketball", slug: "basketball", icon: "🏀", description: "Indoor and outdoor basketball games and leagues." },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", description: "The fastest-growing sport in America. All ages welcome." },
  { name: "Soccer", slug: "soccer", icon: "⚽", description: "Pickup matches, leagues, and futsal games." },
  { name: "Tennis", slug: "tennis", icon: "🎾", description: "Singles, doubles, and mixed play on courts near you." },
  { name: "Flag Football", slug: "flag-football", icon: "🏈", description: "Competitive and recreational flag football leagues." },
  { name: "Softball", slug: "softball", icon: "🥎", description: "Slow-pitch and fast-pitch softball games." },
  { name: "Volleyball", slug: "volleyball", icon: "🏐", description: "Beach and indoor volleyball for all skill levels." },
  { name: "Running", slug: "running", icon: "🏃", description: "Group runs, trail runs, and running clubs." },
  { name: "Badminton", slug: "badminton", icon: "🏸", description: "Singles and doubles badminton for all levels." },
  { name: "Cricket", slug: "cricket", icon: "🏏", description: "Casual and competitive cricket matches and leagues." },
];

async function main() {
  console.log("🌱 Seeding database...");

  for (const sport of sports) {
    await prisma.sport.upsert({
      where: { slug: sport.slug },
      update: {},
      create: sport,
    });
  }

  console.log(`✅ Seeded ${sports.length} sports`);
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
