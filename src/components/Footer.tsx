import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">🏟️ GameOn</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your local sports community platform. Book venues, join pickup
              games, and find coaches.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Platform</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/venues" className="text-sm text-gray-600 hover:text-orange-600">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-gray-600 hover:text-orange-600">
                  Pickup Games
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-sm text-gray-600 hover:text-orange-600">
                  Coaches
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Sports</h4>
            <p className="mt-2 text-sm text-gray-600">
              Basketball • Pickleball • Soccer • Tennis • Flag Football •
              Softball • Volleyball • Running
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GameOn. Built with ❤️ for recreational
          athletes across the US.
        </div>
      </div>
    </footer>
  );
}
