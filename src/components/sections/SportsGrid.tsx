"use client";

import { SPORTS } from "@/lib/constants";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Animations";
import Link from "next/link";

const playerCounts = [2340, 3120, 1890, 1456, 2780, 890, 1230, 980, 1100, 760];

export function SportsGrid() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Sports We Support
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Find activities across 10 popular sports
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {SPORTS.map((sport, i) => (
            <StaggerItem key={sport.slug}>
              <Link href={`/games?sport=${sport.slug}`}>
                <div className={`group relative flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br ${sport.color} p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/85 group-hover:bg-white/80 dark:group-hover:bg-gray-900/75 transition-colors duration-300" />
                  <span className="relative text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{sport.icon}</span>
                  <span className="relative text-sm font-semibold text-gray-800 dark:text-gray-200">{sport.name}</span>
                  <span className="relative text-xs text-gray-500 dark:text-gray-400">{playerCounts[i]?.toLocaleString()} players</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
