import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mt-2 text-lg text-indigo-100">
            Tips, stories, and updates from the GameOn community
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Top 10 Pickleball Courts in SF", tag: "Venues", emoji: "🏓" },
            { title: "How to Organize the Perfect Pickup Game", tag: "Tips", emoji: "📋" },
            { title: "Beginner's Guide to Tennis", tag: "Guides", emoji: "🎾" },
          ].map((post, i) => (
            <Link key={i} href={`/blog/${i + 1}`}>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-5xl">
                  {post.emoji}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent">{post.tag}</span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Coming soon — blog posts will be powered by MDX
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
