import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MOCK_EVENTS } from "@/lib/constants";
import { CalendarDays, Users, DollarSign } from "lucide-react";
import Link from "next/link";

const statusConfig = {
  open: { label: "Registration Open", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  almost_full: { label: "Almost Full", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
  coming_soon: { label: "Coming Soon", className: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300" },
} as const;

export default function EventsPage() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-red-600 to-rose-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <Container className="relative">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Events &amp; Tournaments</h1>
          <p className="mt-3 text-lg text-red-100 max-w-2xl">
            Compete in local tournaments and leagues
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {MOCK_EVENTS.map((event) => {
            const status = statusConfig[event.status as keyof typeof statusConfig];
            return (
              <Link key={event.id} href={`/events/event-${event.id}`}>
                <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
                  <div className={`relative h-32 bg-gradient-to-r ${event.color} p-6 flex flex-col justify-between`}>
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${status.className}`}>
                        {status.label}
                      </span>
                      <span className="text-3xl">{event.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-white/80">{event.type}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CalendarDays className="h-4 w-4 text-gray-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{event.teams} teams</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span>{event.price}</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Button
                        variant={event.status === "coming_soon" ? "outline" : "accent"}
                        className="w-full"
                        disabled={event.status === "coming_soon"}
                      >
                        {event.status === "coming_soon" ? "Coming Soon" : "Register Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
