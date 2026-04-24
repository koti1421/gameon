import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const SPORTS_DATA = [
  { name: "Basketball", slug: "basketball", icon: "🏀", description: "Indoor and outdoor basketball courts for pickup games and leagues." },
  { name: "Soccer", slug: "soccer", icon: "⚽", description: "Soccer fields and futsal courts for all skill levels." },
  { name: "Tennis", slug: "tennis", icon: "🎾", description: "Tennis courts with options for singles and doubles play." },
  { name: "Volleyball", slug: "volleyball", icon: "🏐", description: "Indoor volleyball courts and beach volleyball facilities." },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", description: "The fastest growing sport in America - find courts near you." },
  { name: "Baseball", slug: "baseball", icon: "⚾", description: "Baseball diamonds and batting cages for practice and games." },
  { name: "Football", slug: "football", icon: "🏈", description: "Football fields for flag and touch football games." },
  { name: "Swimming", slug: "swimming", icon: "🏊", description: "Swimming pools and aquatic centers for lap swimming and lessons." },
  { name: "Badminton", slug: "badminton", icon: "🏸", description: "Indoor badminton courts for singles and doubles play." },
  { name: "Cricket", slug: "cricket", icon: "🏏", description: "Cricket pitches and nets for practice and weekend matches." },
];

const ACHIEVEMENTS_DATA = [
  { name: "First Game", slug: "first-game", description: "Played your first pickup game", icon: "🎮", points: 10 },
  { name: "Social Butterfly", slug: "social-butterfly", description: "Joined 5 different games", icon: "🦋", points: 25 },
  { name: "Regular", slug: "regular", description: "Played 10 games in a month", icon: "📅", points: 50 },
  { name: "Multi-Sport", slug: "multi-sport", description: "Played 3 different sports", icon: "🎯", points: 30 },
  { name: "Game Organizer", slug: "game-organizer", description: "Organized your first game", icon: "📋", points: 20 },
  { name: "Community Leader", slug: "community-leader", description: "Organized 10 games", icon: "👑", points: 100 },
  { name: "Reviewer", slug: "reviewer", description: "Left your first review", icon: "⭐", points: 15 },
  { name: "Early Bird", slug: "early-bird", description: "Joined a game within 1 hour of creation", icon: "🐦", points: 10 },
  { name: "Weekend Warrior", slug: "weekend-warrior", description: "Played games on 4 consecutive weekends", icon: "⚔️", points: 40 },
  { name: "Champion", slug: "champion", description: "Won a tournament", icon: "🏆", points: 200 },
];

const PLATFORM_SETTINGS = [
  { key: "platform_name", value: "GameOn" },
  { key: "platform_tagline", value: "Your Local Sports Community" },
  { key: "support_email", value: "support@gameon.com" },
  { key: "max_game_players", value: "50" },
  { key: "booking_advance_days", value: "30" },
  { key: "commission_rate", value: "0.10" },
  { key: "maintenance_mode", value: "false" },
];

async function main() {
  console.log("🌱 Seeding database...\n");

  // Seed Sports
  console.log("🏀 Seeding sports...");
  for (const sport of SPORTS_DATA) {
    await prisma.sport.upsert({
      where: { slug: sport.slug },
      update: {},
      create: sport,
    });
  }
  console.log(`  ✓ ${SPORTS_DATA.length} sports seeded`);

  // Seed Achievements
  console.log("🏆 Seeding achievements...");
  for (const achievement of ACHIEVEMENTS_DATA) {
    await prisma.achievement.upsert({
      where: { slug: achievement.slug },
      update: {},
      create: achievement,
    });
  }
  console.log(`  ✓ ${ACHIEVEMENTS_DATA.length} achievements seeded`);

  // Seed Platform Settings
  console.log("⚙️  Seeding platform settings...");
  for (const setting of PLATFORM_SETTINGS) {
    await prisma.platformSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log(`  ✓ ${PLATFORM_SETTINGS.length} platform settings seeded`);

  // Seed Super Admin user
  console.log("👤 Seeding super admin...");
  await prisma.user.upsert({
    where: { email: "admin@gameon.com" },
    update: {},
    create: {
      name: "GameOn Admin",
      email: "admin@gameon.com",
      role: UserRole.SUPER_ADMIN,
      city: "San Francisco",
      state: "CA",
      bio: "Platform administrator",
    },
  });
  console.log("  ✓ Super admin seeded");

  console.log("\n✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
