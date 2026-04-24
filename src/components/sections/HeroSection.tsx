"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";
import { SPORTS, CITIES } from "@/lib/constants";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-[600px] flex items-center">
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-10 dark:opacity-5" />
      
      {/* Floating sport bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="absolute top-20 left-[10%] text-5xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>🏀</span>
        <span className="absolute top-40 right-[15%] text-4xl opacity-15 animate-float" style={{ animationDelay: '1s' }}>🎾</span>
        <span className="absolute bottom-32 left-[20%] text-6xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>⚽</span>
        <span className="absolute top-32 right-[30%] text-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>🏐</span>
        <span className="absolute bottom-20 right-[10%] text-5xl opacity-15 animate-float" style={{ animationDelay: '4s' }}>🏓</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 w-full">
        <div className="text-center">
          <FadeIn>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6 border border-accent/20">
              🚀 The #1 Sports Community Platform
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
              Your Local Sports
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Community
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Book venues, join pickup games, find coaches, and connect with
              recreational athletes in your area. All in one place.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/games">
                <Button variant="accent" size="lg" className="px-8 py-3 text-lg shadow-lg shadow-orange-500/25">
                  Find a Game
                </Button>
              </Link>
              <Link href="/venues">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Browse Venues
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Search bar */}
          <FadeIn delay={0.4}>
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-2 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <select className="flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30" aria-label="Select sport">
                  <option value="">All Sports</option>
                  {SPORTS.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.icon} {s.name}</option>
                  ))}
                </select>
                <div className="hidden sm:block w-px bg-gray-200 dark:bg-gray-700" />
                <select className="flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30" aria-label="Select city">
                  <option value="">All Cities</option>
                  {CITIES.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}, {c.state}</option>
                  ))}
                </select>
                <Button variant="accent" className="rounded-xl px-6">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1"><span className="font-semibold text-gray-700 dark:text-gray-300">10,000+</span> Players</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
              <span className="flex items-center gap-1"><span className="font-semibold text-gray-700 dark:text-gray-300">500+</span> Venues</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
              <span className="flex items-center gap-1"><span className="font-semibold text-gray-700 dark:text-gray-300">200+</span> Coaches</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
              <span className="flex items-center gap-1"><span className="font-semibold text-gray-700 dark:text-gray-300">15</span> Cities</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
