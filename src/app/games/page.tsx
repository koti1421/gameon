export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pickup Games</h1>
          <p className="mt-2 text-gray-600">
            Join open games or organize your own. All skill levels welcome.
          </p>
        </div>
        <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700">
          + Create Game
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {/* Placeholder game cards */}
        {[
          { sport: "🏀 Basketball", title: "Sunday Morning Hoops", players: "6/10", time: "Sun 9:00 AM" },
          { sport: "🏓 Pickleball", title: "Beginner Friendly Doubles", players: "3/4", time: "Sat 2:00 PM" },
          { sport: "⚽ Soccer", title: "5v5 at Lincoln Park", players: "8/10", time: "Mon 6:00 PM" },
        ].map((game, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{game.sport.split(" ")[0]}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {game.sport.split(" ").slice(1).join(" ")} • {game.time}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                {game.players} players
              </span>
              <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
