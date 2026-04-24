export default function VenuesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Venues</h1>
          <p className="mt-2 text-gray-600">
            Find and book courts, fields, and facilities near you.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="h-48 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
              📍 Venue Photo
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Sample Venue {i}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              123 Main St, City, ST 12345
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-orange-600">
                $25/hr
              </span>
              <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
