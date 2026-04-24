import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function VenuesPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-primary to-blue-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Find Venues</h1>
          <p className="mt-2 text-lg text-blue-200">
            Discover courts, fields, and facilities near you
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search venues..."
              className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <select className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <option>All Sports</option>
            </select>
          </div>
          <Link href="/venues/add">
            <Button variant="accent">List Your Venue</Button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="h-48 rounded-lg bg-gray-100 dark:bg-gray-700" />
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                Venue {i}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coming soon — connect your database to see real venues
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
