"use client";

import { SPORTS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { FadeIn } from "@/components/ui/Animations";

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
        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
          {SPORTS.map((sport) => (
            <StaggerItem key={sport.slug}>
              <div className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent transition-all cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-400">
                <span className="text-4xl group-hover:scale-110 transition-transform">{sport.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{sport.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
