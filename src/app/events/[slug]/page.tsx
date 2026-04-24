import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

async function getEvent(slug: string) {
  return prisma.event.findUnique({
    where: { slug },
    include: {
      sport: true,
      venue: true,
      registrations: { include: { user: { select: { name: true, image: true } } }, take: 20 },
      teams: { include: { registrations: true } },
      matches: { include: { homeTeam: true, awayTeam: true, winner: true }, orderBy: [{ round: "asc" }, { matchNumber: "asc" }] },
      _count: { select: { registrations: true } },
    },
  });
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);
  if (!event) notFound();

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="relative bg-gradient-to-r from-red-600 to-rose-700 py-16">
        <Container>
          <div className="flex items-center gap-3">
            <Badge variant={event.status === "REGISTRATION_OPEN" ? "success" : "default"}>
              {event.status.replace(/_/g, " ")}
            </Badge>
            <Badge variant="outline">{event.type}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-white">{event.title}</h1>
          <p className="mt-2 text-lg text-red-100">
            {event.sport.icon} {event.sport.name} · {event.city}, {event.state}
          </p>
          <p className="mt-1 text-red-200">
            {new Date(event.startDate).toLocaleDateString()} — {new Date(event.endDate).toLocaleDateString()}
          </p>
        </Container>
      </div>

      <Container className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {event.description && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">About</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 whitespace-pre-line">{event.description}</p>
              </div>
            )}

            {event.rules && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Rules</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 whitespace-pre-line">{event.rules}</p>
              </div>
            )}

            {/* Bracket / Matches */}
            {event.matches.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Matches</h2>
                <div className="mt-4 space-y-3">
                  {event.matches.map((match) => (
                    <div key={match.id} className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                      <span className="text-sm text-gray-500 dark:text-gray-400">R{match.round} #{match.matchNumber}</span>
                      <div className="flex-1">
                        <span className={`font-medium ${match.winnerId === match.homeTeamId ? "text-green-600" : "text-gray-900 dark:text-white"}`}>
                          {match.homeTeam?.name || "TBD"}
                        </span>
                        <span className="mx-2 text-gray-400">vs</span>
                        <span className={`font-medium ${match.winnerId === match.awayTeamId ? "text-green-600" : "text-gray-900 dark:text-white"}`}>
                          {match.awayTeam?.name || "TBD"}
                        </span>
                      </div>
                      {match.homeScore !== null && (
                        <span className="font-mono text-sm">{match.homeScore} - {match.awayScore}</span>
                      )}
                      <Badge variant={match.status === "COMPLETED" ? "success" : "default"}>
                        {match.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Participants */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Participants ({event._count.registrations})
              </h2>
              {event.registrations.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {event.registrations.map((reg) => (
                    <div key={reg.id} className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
                      <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{reg.user.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-gray-500 dark:text-gray-400">No participants yet</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              {event.entryFee ? (
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${event.entryFee}
                  <span className="text-base font-normal text-gray-500"> entry fee</span>
                </div>
              ) : (
                <div className="text-2xl font-bold text-green-600">Free Entry</div>
              )}
              {event.prizePool && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">🏆 ${event.prizePool} prize pool</p>
              )}
              {event.maxParticipants && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {event._count.registrations} / {event.maxParticipants} spots filled
                </p>
              )}
              {event.registrationDeadline && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  📅 Register by {new Date(event.registrationDeadline).toLocaleDateString()}
                </p>
              )}
              <div className="mt-6">
                <Button variant="accent" className="w-full" size="lg">Register Now</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
