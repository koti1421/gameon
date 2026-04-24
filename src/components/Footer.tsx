import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">🏟️ GameOn</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your local sports community platform. Book venues, join games, find coaches.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Platform</h4>
            <ul className="mt-2 space-y-2">
              {[
                { href: "/venues", label: "Venues" },
                { href: "/games", label: "Pickup Games" },
                { href: "/coaches", label: "Coaches" },
                { href: "/academies", label: "Academies" },
                { href: "/events", label: "Events" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-accent dark:text-gray-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h4>
            <ul className="mt-2 space-y-2">
              {["About", "Blog", "Careers", "Contact", "Privacy"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-accent dark:text-gray-400">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Sports</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Basketball • Pickleball • Soccer • Tennis • Flag Football • Softball • Volleyball • Running • Badminton • Cricket
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} GameOn. Built with ❤️ for recreational athletes across the US.
        </div>
      </div>
    </footer>
  );
}
