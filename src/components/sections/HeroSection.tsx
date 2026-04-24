"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
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
                <Button variant="accent" size="lg" className="px-8 py-3 text-lg">
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
          <FadeIn delay={0.4}>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Free to join · No credit card required
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
