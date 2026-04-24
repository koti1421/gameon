import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const [
    userCount,
    venueCount,
    coachCount,
    gameCount,
    eventCount,
    bookingCount,
    academyCount,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.venue.count(),
    prisma.coach.count(),
    prisma.pickupGame.count(),
    prisma.event.count(),
    prisma.booking.count(),
    prisma.academy.count(),
  ]);

  return NextResponse.json({
    stats: {
      users: userCount,
      venues: venueCount,
      coaches: coachCount,
      games: gameCount,
      events: eventCount,
      bookings: bookingCount,
      academies: academyCount,
    },
  });
}
