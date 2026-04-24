import { Container } from "@/components/ui/Container";
import Link from "next/link";

const dashboardCards = [
  { title: "My Games", href: "/dashboard/games", icon: "🏀", count: "0", desc: "Upcoming and past games" },
  { title: "My Bookings", href: "/dashboard/bookings", icon: "📅", count: "0", desc: "Venue reservations" },
  { title: "My Groups", href: "/dashboard/groups", icon: "👥", count: "0", desc: "Community groups" },
  { title: "Achievements", href: "/dashboard/achievements", icon: "🏆", count: "0", desc: "Badges and rewards" },
  { title: "Favorites", href: "/dashboard/favorites", icon: "❤️", count: "0", desc: "Saved venues and coaches" },
  { title: "Messages", href: "/dashboard/messages", icon: "💬", count: "0", desc: "Direct messages" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-primary to-blue-700 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-blue-200">Welcome back! Here&apos;s your activity overview.</p>
        </Container>
      </div>
      <Container className="py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{card.icon}</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{card.count}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
