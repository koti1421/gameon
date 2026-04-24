export default function CoachesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Coaches</h1>
        <p className="mt-2 text-gray-600">
          Find experienced coaches to help you improve your game.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder coach cards */}
        {[
          { name: "Alex Johnson", sport: "🏀 Basketball", rate: 60, rating: 4.9 },
          { name: "Sarah Chen", sport: "🎾 Tennis", rate: 55, rating: 4.8 },
          { name: "Mike Rivera", sport: "🏓 Pickleball", rate: 45, rating: 4.7 },
        ].map((coach, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                {coach.sport.split(" ")[0]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {coach.name}
                </h3>
                <p className="text-sm text-gray-600">{coach.sport}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium">{coach.rating}</span>
              </div>
              <span className="text-lg font-bold text-orange-600">
                ${coach.rate}/hr
              </span>
            </div>
            <button className="mt-4 w-full rounded-lg border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
