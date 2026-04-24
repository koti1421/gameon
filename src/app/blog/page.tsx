import { Container } from "@/components/ui/Container";
import { MOCK_BLOG_POSTS } from "@/lib/constants";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const tagColors: Record<string, string> = {
  Venues: "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400",
  Tips: "text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400",
  Guides: "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400",
  Lifestyle: "text-purple-600 bg-purple-50 dark:bg-purple-950/30 dark:text-purple-400",
  People: "text-pink-600 bg-pink-50 dark:bg-pink-950/30 dark:text-pink-400",
  Trends: "text-teal-600 bg-teal-50 dark:bg-teal-950/30 dark:text-teal-400",
};

export default function BlogPage() {
  const featured = MOCK_BLOG_POSTS[0];
  const rest = MOCK_BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Blog</h1>
          <p className="mt-3 text-lg text-indigo-100 max-w-2xl">
            Tips, stories, and updates from the GameOn community
          </p>
        </Container>
      </div>
      <Container className="py-12">
        {/* Featured post */}
        <Link href={`/blog/${featured.id}`}>
          <div className="group mb-12 grid grid-cols-1 gap-6 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all dark:border-gray-700 dark:bg-gray-800 md:grid-cols-2">
            <div className="h-64 md:h-auto bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-8xl">
              {featured.emoji}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className={`inline-block w-fit rounded-full px-3 py-0.5 text-xs font-semibold ${tagColors[featured.tag] || "text-gray-600 bg-gray-100"}`}>{featured.tag}</span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">{featured.title}</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {post.emoji}
                </div>
                <div className="p-6">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[post.tag] || "text-gray-600 bg-gray-100"}`}>{post.tag}</span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
