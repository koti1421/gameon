"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { MOCK_GAMES, SPORTS } from "@/lib/constants";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function SpotsBar({ filled, total }: { filled: number; total: number }) {
  const pct = (filled / total) * 100;
  const color = pct >= 90 ? "bg-red-500" : pct >= 60 ? "bg-yellow-500" : "bg-green-500";
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-gray-600 dark:text-gray-400">{filled}/{total} spots filled</span>
        <span className={`font-semibold ${pct >= 90 ? "text-red-600" : pct >= 60 ? "text-yellow-600" : "text-green-600"}`}>
          {total - filled} left
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className={`h-1.5 rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredGames = MOCK_GAMES.filter(g =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.sport.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-accent to-orange-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Pickup Games</h1>
            <p className="mt-3 text-lg text-orange-100 max-w-2xl">
              Find open games or organize your own
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
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/30" aria-label="Filter by sport">
                <option>All Sports</option>
                {SPORTS.map((s) => (
                  <option key={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>
            <Link href="/games/create">
              <Button variant="accent" className="shadow-md shadow-orange-500/20">Create a Game</Button>
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <StaggerItem key={game.id}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${game.color} text-2xl shadow-md`}>
                      {game.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{game.sport}</span>
                      <div className={`inline-block ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        game.spots.filled / game.spots.total >= 0.8
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}>
                        {game.spots.total - game.spots.filled === 0 ? "FULL" : "OPEN"}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {game.title}
                </h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    {game.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {game.venue}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 text-gray-400" />
                    {game.level}
                  </div>
                </div>
                <div className="mt-4">
                  <SpotsBar filled={game.spots.filled} total={game.spots.total} />
                </div>
                <div className="mt-4">
                  <Button variant="accent" className="w-full" disabled={game.spots.filled >= game.spots.total}>
                    {game.spots.filled >= game.spots.total ? "Game Full" : "Join Game"}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
