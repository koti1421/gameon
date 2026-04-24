"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Users, MapPin, DollarSign, AlertCircle, Plus, Megaphone,
  UserCheck, Building2, GraduationCap, Trophy, Gamepad2,
  CalendarDays, CreditCard, FileText, Settings, ClipboardList, BarChart3
} from "lucide-react";

const LineChart = dynamic(() => import("recharts").then(m => m.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then(m => m.Line), { ssr: false });
const BarChart = dynamic(() => import("recharts").then(m => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then(m => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <span className="tabular-nums">{count.toLocaleString()}</span>;
}

const statCards = [
  { label: "Total Users", value: 10247, change: "+12%", icon: Users, color: "from-blue-500 to-indigo-600", bgLight: "bg-blue-50 dark:bg-blue-950/30" },
  { label: "Active Venues", value: 523, change: "+8%", icon: MapPin, color: "from-green-500 to-emerald-600", bgLight: "bg-green-50 dark:bg-green-950/30" },
  { label: "Revenue (MTD)", value: 48750, change: "+23%", icon: DollarSign, color: "from-orange-500 to-red-500", bgLight: "bg-orange-50 dark:bg-orange-950/30", prefix: "$" },
  { label: "Pending Approvals", value: 14, change: "", icon: AlertCircle, color: "from-yellow-500 to-amber-600", bgLight: "bg-yellow-50 dark:bg-yellow-950/30", pulse: true },
];

const userGrowth = [
  { month: "Oct", users: 5200 }, { month: "Nov", users: 6100 }, { month: "Dec", users: 7400 },
  { month: "Jan", users: 8200 }, { month: "Feb", users: 9100 }, { month: "Mar", users: 10247 },
];

const revenueBySport = [
  { sport: "Basketball", revenue: 12400 }, { sport: "Tennis", revenue: 8200 },
  { sport: "Soccer", revenue: 7100 }, { sport: "Pickleball", revenue: 6800 },
  { sport: "Volleyball", revenue: 5300 }, { sport: "Swimming", revenue: 4100 },
];

const recentActivities = [
  { user: "John Doe", action: "Registered", target: "New account", date: "2 min ago", status: "success" },
  { user: "Bay Area Sports Complex", action: "Submitted", target: "Venue approval", date: "15 min ago", status: "pending" },
  { user: "Coach Sarah Chen", action: "Verified", target: "Coach profile", date: "1 hour ago", status: "success" },
  { user: "Marcus Johnson", action: "Reported", target: "Game #1284", date: "2 hours ago", status: "warning" },
  { user: "Liberty Sports Arena", action: "Updated", target: "Pricing", date: "3 hours ago", status: "success" },
];

const adminSections = [
  { title: "Users", href: "/dashboard/admin/users", icon: UserCheck, desc: "Manage users and roles", count: "10.2K" },
  { title: "Venues", href: "/dashboard/admin/venues", icon: Building2, desc: "Approve and manage venues", count: "523" },
  { title: "Coaches", href: "/dashboard/admin/coaches", icon: GraduationCap, desc: "Verify and manage coaches", count: "200" },
  { title: "Academies", href: "/dashboard/admin/academies", icon: GraduationCap, desc: "Manage sports academies", count: "45" },
  { title: "Events", href: "/dashboard/admin/events", icon: Trophy, desc: "Manage events and tournaments", count: "32" },
  { title: "Games", href: "/dashboard/admin/games", icon: Gamepad2, desc: "Monitor pickup games", count: "1.2K" },
  { title: "Bookings", href: "/dashboard/admin/bookings", icon: CalendarDays, desc: "View all bookings", count: "3.4K" },
  { title: "Payments", href: "/dashboard/admin/payments", icon: CreditCard, desc: "Revenue and transactions", count: "$48K" },
  { title: "Blog", href: "/dashboard/admin/blog", icon: FileText, desc: "Manage blog posts", count: "18" },
  { title: "Settings", href: "/dashboard/admin/settings", icon: Settings, desc: "Platform settings", count: "" },
  { title: "Audit Log", href: "/dashboard/admin/audit", icon: ClipboardList, desc: "Activity audit trail", count: "5.6K" },
  { title: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3, desc: "Platform analytics", count: "" },
];

const statusColors: Record<string, string> = {
  success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  warning: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-5" />
        <Container className="relative">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/25">
                    SUPER ADMIN
                  </span>
                </div>
                <h1 className="mt-3 text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="mt-1 text-gray-400">Manage the entire GameOn platform</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Megaphone className="h-4 w-4 mr-2" />Announce
                </Button>
                <Button variant="accent" size="sm" className="shadow-md shadow-orange-500/25">
                  <Plus className="h-4 w-4 mr-2" />Add Venue
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Container className="py-8 space-y-8">
        {/* Stat Cards */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className={`rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  {stat.pulse && (
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-500" />
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.prefix || ""}<AnimatedCounter target={stat.value} />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                    {stat.change && (
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">{stat.change} ↑</span>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Charts */}
        <FadeIn>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">User Growth</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowth}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                    <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Revenue by Sport</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueBySport}>
                    <XAxis dataKey="sport" tick={{ fontSize: 11 }} stroke="#9ca3af" />
                    <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#f97316" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Recent Activity Table */}
        <FadeIn>
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Action</th>
                    <th className="px-6 py-3">Target</th>
                    <th className="px-6 py-3">Time</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
                  {recentActivities.map((activity, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{activity.user}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{activity.action}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{activity.target}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{activity.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[activity.status]}`}>
                          {activity.status === "success" ? "Approved" : activity.status === "pending" ? "Pending" : "Flagged"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Management Sections Grid */}
        <FadeIn>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Management</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {adminSections.map((section) => (
              <Link key={section.href} href={section.href}>
                <div className="group rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 dark:group-hover:bg-blue-500/10 transition-colors">
                      <section.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    {section.count && (
                      <span className="text-sm font-bold text-gray-400 dark:text-gray-500 tabular-nums">{section.count}</span>
                    )}
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{section.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{section.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
