import Link from "next/link";
import { SportCard, sports } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Your Local Sports
              <span className="text-orange-600"> Community</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Book venues, join pickup games, and find coaches. Connect with
              recreational athletes in your area.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/games"
                className="rounded-lg bg-orange-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
              >
                Find a Game
              </Link>
              <Link
                href="/venues"
                className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Browse Venues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Sports We Support
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {sports.map((sport) => (
              <SportCard
                key={sport.name}
                name={sport.name}
                emoji={sport.emoji}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="text-3xl">📍</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Book Venues
              </h3>
              <p className="mt-2 text-gray-600">
                Find and reserve courts, fields, and facilities near you. Pay
                securely online.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Join Pickup Games
              </h3>
              <p className="mt-2 text-gray-600">
                Browse open games in your area or organize your own. All skill
                levels welcome.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Find Coaches
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with experienced coaches to improve your skills. Read
                reviews and book sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
