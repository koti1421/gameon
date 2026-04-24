import { Container } from "@/components/ui/Container";

export default function AcademiesPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Sports Academies</h1>
          <p className="mt-2 text-lg text-purple-100">
            Structured training programs with professional coaches
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
              <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-700" />
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                Academy {i}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Coming soon — structured coaching programs
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
