"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";
import { PLATFORM_STATS } from "@/lib/constants";

export function StatsBanner() {
  const stats = [
    { value: PLATFORM_STATS.players, label: "Players" },
    { value: PLATFORM_STATS.venues, label: "Venues" },
    { value: PLATFORM_STATS.coaches, label: "Coaches" },
    { value: PLATFORM_STATS.cities, label: "Cities" },
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-blue-700 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-blue-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Play?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Join thousands of athletes already using GameOn to find games, book
            venues, and connect with their community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup">
              <Button variant="accent" size="lg" className="px-8">
                Get Started — It&apos;s Free
              </Button>
            </Link>
            <Link href="/games">
              <Button variant="outline" size="lg" className="px-8">
                Explore Games
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
