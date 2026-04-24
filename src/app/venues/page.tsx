"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { MOCK_VENUES, SPORTS } from "@/lib/constants";
import { MapPin, Star, Heart, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VenuesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredVenues = MOCK_VENUES.filter(v =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-primary to-blue-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Find Venues</h1>
            <p className="mt-3 text-lg text-blue-200 max-w-2xl">
              Discover courts, fields, and facilities near you
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
                  placeholder="Search venues or cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30" aria-label="Filter by sport">
                <option>All Sports</option>
                {SPORTS.map((s) => (
                  <option key={s.slug}>{s.name}</option>
                ))}
              </select>
              <Button variant="outline" size="icon" className="shrink-0" aria-label="Filters">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <Link href="/venues/add">
              <Button variant="accent" className="shadow-md shadow-orange-500/20">List Your Venue</Button>
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVenues.map((venue) => (
            <StaggerItem key={venue.id}>
              <Link href={`/venues/venue-${venue.id}`}>
                <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                  <div className={`relative h-48 bg-gradient-to-br ${venue.image} flex items-end p-4`}>
                    <button className="absolute top-3 right-3 rounded-full bg-white/90 dark:bg-gray-900/80 p-2 hover:bg-white transition-colors shadow-sm" aria-label="Add to favorites">
                      <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                    <div className="flex flex-wrap gap-1.5">
                      {venue.sports.map((sport) => (
                        <span key={sport} className="rounded-full bg-white/90 dark:bg-gray-900/80 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {venue.name}
                      </h3>
                      <span className="text-sm font-semibold text-accent">{venue.price}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {venue.city}, {venue.state}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{venue.rating}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">({venue.reviews})</span>
                      </div>
                      <Button variant="default" size="sm">Book Now</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
}
