import { Container } from "@/components/ui/Container";
import Link from "next/link";

const adminSections = [
  { title: "Users", href: "/dashboard/admin/users", icon: "👤", desc: "Manage users and roles" },
  { title: "Venues", href: "/dashboard/admin/venues", icon: "📍", desc: "Approve and manage venues" },
  { title: "Coaches", href: "/dashboard/admin/coaches", icon: "🎯", desc: "Verify and manage coaches" },
  { title: "Academies", href: "/dashboard/admin/academies", icon: "🏫", desc: "Manage sports academies" },
  { title: "Events", href: "/dashboard/admin/events", icon: "🏆", desc: "Manage events and tournaments" },
  { title: "Games", href: "/dashboard/admin/games", icon: "🏀", desc: "Monitor pickup games" },
  { title: "Bookings", href: "/dashboard/admin/bookings", icon: "📅", desc: "View all bookings" },
  { title: "Payments", href: "/dashboard/admin/payments", icon: "💰", desc: "Revenue and transactions" },
  { title: "Blog", href: "/dashboard/admin/blog", icon: "📝", desc: "Manage blog posts" },
  { title: "Settings", href: "/dashboard/admin/settings", icon: "⚙️", desc: "Platform settings" },
  { title: "Audit Log", href: "/dashboard/admin/audit", icon: "📋", desc: "Activity audit trail" },
  { title: "Analytics", href: "/dashboard/admin/analytics", icon: "📊", desc: "Platform analytics" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
        <Container>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              SUPER ADMIN
            </span>
          </div>
          <h1 className="mt-2 text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="mt-1 text-gray-400">Manage the entire GameOn platform</p>
        </Container>
      </div>
      <Container className="py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {adminSections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary transition-all dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500">
                <span className="text-3xl">{section.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{section.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
