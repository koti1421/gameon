import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/venues", label: "Venues" },
    { href: "/games", label: "Pickup Games" },
    { href: "/coaches", label: "Coaches" },
    { href: "/academies", label: "Academies" },
    { href: "/events", label: "Events" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/help", label: "Help Center" },
    { href: "/safety", label: "Safety" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary dark:text-blue-400">
              🏟️ <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GameOn</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Your local sports community platform. Book venues, join pickup games, find coaches, and connect with recreational athletes across the US.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {["Twitter", "Instagram", "Discord", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200/70 text-gray-600 hover:bg-primary hover:text-white transition-all duration-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-600 dark:hover:text-white"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} GameOn. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with ❤️ for recreational athletes across the US
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
