import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CoachesPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Find Coaches</h1>
          <p className="mt-2 text-lg text-green-100">
            Connect with experienced coaches and improve your game
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search coaches..."
              className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <select className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <option>All Sports</option>
            </select>
          </div>
          <Link href="/coaches/apply">
            <Button variant="accent">Become a Coach</Button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-700" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Coach {i}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ⭐ 4.{8 + i} · $50/hr
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Coming soon — connect your database to see real coaches
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
