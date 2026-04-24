"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { MOCK_COACHES, SPORTS } from "@/lib/constants";
import { Star, CheckCircle, MapPin, Clock, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CoachesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCoaches = MOCK_COACHES.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.sports.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Find Coaches</h1>
            <p className="mt-3 text-lg text-green-100 max-w-2xl">
              Connect with experienced coaches and improve your game
            </p>
          </FadeIn>
        </Container>
      </div>
      <Container className="py-12">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-2 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search coaches or sports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30"
                />
              </div>
              <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/30" aria-label="Filter by sport">
                <option>All Sports</option>
                {SPORTS.map((s) => (
                  <option key={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>
            <Link href="/coaches/apply">
              <Button variant="accent" className="shadow-md shadow-orange-500/20">Become a Coach</Button>
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCoaches.map((coach) => (
            <StaggerItem key={coach.id}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <div className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${coach.color} text-lg font-bold text-white shadow-lg`}>
                    {coach.initials}
                    {coach.verified && (
                      <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white dark:bg-gray-800 p-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors truncate">
                      {coach.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{coach.rating}</span>
                        <span className="text-xs text-gray-500">({coach.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">${coach.price}</div>
                    <div className="text-xs text-gray-500">/hour</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{coach.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {coach.sports.map((sport) => (
                    <span key={sport} className="rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/30">
                      {sport}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {coach.experience} yrs exp
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {coach.city}
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">View Profile</Button>
                  <Button variant="accent" size="sm" className="flex-1">Book Session</Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
