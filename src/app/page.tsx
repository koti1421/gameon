import Link from "next/link";
import { SPORTS, PLATFORM_STATS } from "@/lib/constants";
import { SportCard } from "@/components/cards/SportCard";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Your Local Sports
              <span className="text-accent"> Community</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Book venues, join pickup games, find coaches, and connect with
              recreational athletes in your area.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href="/games">
                <Button variant="accent" size="lg">Find a Game</Button>
              </Link>
              <Link href="/venues">
                <Button variant="outline" size="lg">Browse Venues</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Sports We Support
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
            {SPORTS.map((sport) => (
              <SportCard key={sport.name} name={sport.name} icon={sport.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: "📍", title: "Find", desc: "Search venues, games, and coaches near you by sport and location." },
              { icon: "📅", title: "Book", desc: "Reserve courts, join games, or schedule coaching sessions instantly." },
              { icon: "🏆", title: "Play", desc: "Show up, play, and connect with your local sports community." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: "📍", title: "Book Venues", desc: "Find and reserve courts, fields, and facilities near you. Pay securely online." },
              { icon: "🤝", title: "Join Pickup Games", desc: "Browse open games or organize your own. All skill levels welcome." },
              { icon: "🎯", title: "Find Coaches", desc: "Connect with experienced coaches. Read reviews and book sessions." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: PLATFORM_STATS.players, label: "Players" },
              { value: PLATFORM_STATS.venues, label: "Venues" },
              { value: PLATFORM_STATS.coaches, label: "Coaches" },
              { value: PLATFORM_STATS.cities, label: "Cities" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to Play?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Join thousands of athletes already using GameOn to find games, book venues, and connect with their community.
          </p>
          <div className="mt-8">
            <Link href="/auth/signup">
              <Button variant="accent" size="lg">Get Started — It&apos;s Free</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
