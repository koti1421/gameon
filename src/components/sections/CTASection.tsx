"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, hasAnimated]);

  return <span className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 10000, suffix: "+", label: "Players" },
  { value: 500, suffix: "+", label: "Venues" },
  { value: 200, suffix: "+", label: "Coaches" },
  { value: 50, suffix: "+", label: "Cities" },
];

const testimonials = [
  { name: "Alex Rivera", sport: "Basketball", quote: "GameOn changed how I play. I found a regular pickup group within my first week!", avatar: "AR", color: "from-orange-400 to-red-500" },
  { name: "Jamie Lee", sport: "Tennis", quote: "The best platform for finding tennis partners. The coach booking feature is a game-changer.", avatar: "JL", color: "from-green-400 to-emerald-500" },
  { name: "Sam Patel", sport: "Pickleball", quote: "I discovered pickleball through GameOn and now I play 3 times a week. Amazing community!", avatar: "SP", color: "from-blue-400 to-indigo-500" },
];

export function StatsBanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-blue-700 to-indigo-800 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white sm:text-5xl tabular-nums">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-blue-200">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-green-50 dark:bg-green-950/30 px-4 py-1 text-sm font-semibold text-green-600 dark:text-green-400 mb-4">Testimonials</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Loved by Athletes
            </h2>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.sport} Player</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-r from-primary via-blue-700 to-indigo-800 px-8 py-16 text-center overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Play?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-200">
                Join thousands of athletes already using GameOn to find games, book
                venues, and connect with their community.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/signup">
                  <Button variant="accent" size="lg" className="px-8 shadow-lg shadow-orange-500/25">
                    Get Started — It&apos;s Free
                  </Button>
                </Link>
                <Link href="/games">
                  <Button variant="outline" size="lg" className="px-8 border-white/30 text-white hover:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10">
                    Explore Games
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-blue-300">
                No credit card required · Free forever for players
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
