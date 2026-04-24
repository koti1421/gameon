"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import Link from "next/link";
import { Gamepad2, CalendarDays, Users, Trophy, Heart, MessageSquare, TrendingUp, Flame } from "lucide-react";

const dashboardCards = [
  { title: "My Games", href: "/dashboard/games", icon: Gamepad2, count: 3, desc: "Upcoming and past games", color: "from-orange-500 to-red-500" },
  { title: "My Bookings", href: "/dashboard/bookings", icon: CalendarDays, count: 2, desc: "Venue reservations", color: "from-blue-500 to-indigo-500" },
  { title: "My Groups", href: "/dashboard/groups", icon: Users, count: 4, desc: "Community groups", color: "from-teal-500 to-cyan-500" },
  { title: "Achievements", href: "/dashboard/achievements", icon: Trophy, count: 7, desc: "Badges and rewards", color: "from-yellow-500 to-orange-500" },
  { title: "Favorites", href: "/dashboard/favorites", icon: Heart, count: 12, desc: "Saved venues and coaches", color: "from-pink-500 to-rose-500" },
  { title: "Messages", href: "/dashboard/messages", icon: MessageSquare, count: 5, desc: "Direct messages", color: "from-purple-500 to-violet-500" },
];

const recentActivity = [
  { text: "Joined Sunday Pickup Basketball", time: "2 hours ago", icon: "🏀" },
  { text: "Booked Emerald City Courts for Saturday", time: "Yesterday", icon: "📅" },
  { text: "Earned 'First Game' achievement", time: "2 days ago", icon: "🏆" },
  { text: "Joined SF Basketball Crew group", time: "3 days ago", icon: "👥" },
  { text: "Left a review for Coach Sarah Chen", time: "1 week ago", icon: "⭐" },
];

const quickStats = [
  { label: "Games Played", value: "12", icon: Gamepad2, trend: "+3 this month" },
  { label: "Win Rate", value: "67%", icon: TrendingUp, trend: "+5%" },
  { label: "Current Streak", value: "4", icon: Flame, trend: "games" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-primary via-blue-700 to-indigo-800 py-12 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-5" />
        <Container className="relative">
          <FadeIn>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-2xl font-bold text-white border border-white/20">
                JD
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Welcome back, John!</h1>
                <p className="mt-1 text-blue-200">Here&apos;s your activity overview</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
      <Container className="py-8">
        {/* Quick Stats */}
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            {quickStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-blue-500/10">
                  <stat.icon className="h-6 w-6 text-primary dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label} · <span className="text-green-600 dark:text-green-400">{stat.trend}</span></div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main cards */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dashboardCards.map((card) => (
                <StaggerItem key={card.href}>
                  <Link href={card.href}>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md`}>
                          <card.icon className="h-5 w-5" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white tabular-nums">{card.count}</span>
                      </div>
                      <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{card.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{card.desc}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Activity feed */}
          <FadeIn direction="right">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.text}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/dashboard/activity">
                <Button variant="ghost" size="sm" className="w-full mt-4 text-primary dark:text-blue-400">
                  View All Activity
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
