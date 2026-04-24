import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Star, Users, Clock } from "lucide-react";
import Link from "next/link";

const MOCK_ACADEMIES = [
  { id: 1, name: "Elite Basketball Academy", sport: "Basketball", icon: "🏀", city: "San Francisco", rating: 4.9, students: 120, batches: 8, price: "$200/mo", color: "from-orange-500 to-red-500", coach: "Marcus Johnson", desc: "Professional basketball training for all ages. Individual and group sessions available." },
  { id: 2, name: "Ace Tennis Institute", sport: "Tennis", icon: "🎾", city: "Los Angeles", rating: 4.8, students: 85, batches: 6, price: "$180/mo", color: "from-lime-500 to-green-600", coach: "Sarah Chen", desc: "Comprehensive tennis coaching from beginner to tournament level." },
  { id: 3, name: "ProSwim Academy", sport: "Swimming", icon: "🏊", city: "Seattle", rating: 4.9, students: 150, batches: 10, price: "$150/mo", color: "from-blue-400 to-cyan-500", coach: "David Kim", desc: "Year-round swim programs with certified coaches and heated pools." },
  { id: 4, name: "United Soccer School", sport: "Soccer", icon: "⚽", city: "New York", rating: 4.7, students: 200, batches: 12, price: "$175/mo", color: "from-green-500 to-emerald-600", coach: "Elena Rodriguez", desc: "Youth and adult soccer programs focusing on skill development and teamwork." },
  { id: 5, name: "Denver Cricket Club Academy", sport: "Cricket", icon: "🏏", city: "Denver", rating: 4.8, students: 60, batches: 4, price: "$120/mo", color: "from-emerald-500 to-teal-600", coach: "Priya Patel", desc: "Learn cricket from national-level players. Indoor nets and outdoor pitches." },
  { id: 6, name: "Smash Badminton Academy", sport: "Badminton", icon: "🏸", city: "Atlanta", rating: 4.6, students: 75, batches: 5, price: "$130/mo", color: "from-purple-400 to-violet-500", coach: "Sarah Chen", desc: "Competitive and recreational badminton training with tournament preparation." },
];

export default function AcademiesPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Sports Academies</h1>
          <p className="mt-3 text-lg text-purple-100 max-w-2xl">
            Structured training programs with professional coaches
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 dark:text-gray-400">Showing {MOCK_ACADEMIES.length} academies</p>
          <Link href="/academies/register">
            <Button variant="accent" className="shadow-md shadow-orange-500/20">Register Academy</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_ACADEMIES.map((academy) => (
            <div key={academy.id} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
              <div className={`relative h-36 bg-gradient-to-br ${academy.color} flex items-center justify-between p-6`}>
                <div>
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-white">{academy.sport}</span>
                  <h3 className="mt-2 text-xl font-bold text-white">{academy.name}</h3>
                </div>
                <span className="text-5xl opacity-30">{academy.icon}</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{academy.desc}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{academy.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <Users className="h-3.5 w-3.5" />
                    {academy.students} students
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-3.5 w-3.5" />
                    {academy.city}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                    {academy.batches} batches
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{academy.price}</span>
                  <Button variant="accent" size="sm">Enroll Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
