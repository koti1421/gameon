import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function GroupsPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Community Groups</h1>
          <p className="mt-2 text-lg text-teal-100">
            Join groups, find play pals, and grow your sports network
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "SF Basketball Crew", members: 45, icon: "🏀" },
            { name: "Bay Area Pickleball", members: 120, icon: "🏓" },
            { name: "Tennis Lovers NYC", members: 78, icon: "🎾" },
          ].map((group, i) => (
            <Link key={i} href={`/groups/${i + 1}`}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-700">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{group.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {group.members} members
                    </p>
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
