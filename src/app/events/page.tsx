import { Container } from "@/components/ui/Container";

export default function EventsPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-red-600 to-rose-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Events & Tournaments</h1>
          <p className="mt-2 text-lg text-red-100">
            Compete in local tournaments and leagues
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-900 dark:text-red-200">
                  TOURNAMENT
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                Tournament {i}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coming soon — tournament brackets and registration
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
