import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function GamesPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-accent to-orange-600 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Pickup Games</h1>
          <p className="mt-2 text-lg text-orange-100">
            Find open games or organize your own
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search games..."
              className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <select className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <option>All Sports</option>
            </select>
          </div>
          <Link href="/games/create">
            <Button variant="accent">Create a Game</Button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏀</span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  OPEN
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                Game {i}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coming soon — connect your database to see real games
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
