import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MOCK_GROUPS } from "@/lib/constants";
import { Users, MapPin, Activity } from "lucide-react";
import Link from "next/link";

const activityColors: Record<string, string> = {
  "Very Active": "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400",
  "Active": "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400",
  "Moderate": "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400",
};

export default function GroupsPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Community Groups</h1>
          <p className="mt-3 text-lg text-teal-100 max-w-2xl">
            Find your sports tribe and connect with fellow athletes
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 dark:text-gray-400">Showing {MOCK_GROUPS.length} groups</p>
          <Link href="/groups/create">
            <Button variant="accent" className="shadow-md shadow-orange-500/20">Create Group</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_GROUPS.map((group) => (
            <div key={group.id} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-2xl shadow-md">
                  {group.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate group-hover:text-teal-600 transition-colors">{group.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-3.5 w-3.5" />
                    {group.city}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{group.desc}</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span className="font-semibold text-gray-900 dark:text-white">{group.members.toLocaleString()}</span> members
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium flex items-center gap-1 ${activityColors[group.activity]}`}>
                  <Activity className="h-3 w-3" />
                  {group.activity}
                </span>
              </div>
              <div className="mt-5">
                <Button variant="outline" className="w-full">Join Group</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
