import Link from "next/link";

const sports = [
  { name: "Basketball", emoji: "🏀" },
  { name: "Pickleball", emoji: "🏓" },
  { name: "Soccer", emoji: "⚽" },
  { name: "Tennis", emoji: "🎾" },
  { name: "Flag Football", emoji: "🏈" },
  { name: "Softball", emoji: "🥎" },
  { name: "Volleyball", emoji: "🏐" },
  { name: "Running", emoji: "🏃" },
  { name: "Badminton", emoji: "🏸" },
  { name: "Cricket", emoji: "🏏" },
];

const navLinks = [
  { href: "/venues", label: "Venues" },
  { href: "/games", label: "Pickup Games" },
  { href: "/coaches", label: "Coaches" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              🏟️ GameOn
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/signin"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SportCard({
  name,
  emoji,
}: {
  name: string;
  emoji: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all cursor-pointer">
      <span className="text-4xl">{emoji}</span>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}

export { sports };
