import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const venueId = searchParams.get("venueId");
  const date = searchParams.get("date");

  if (!venueId || !date) {
    return NextResponse.json(
      { error: "venueId and date are required" },
      { status: 400 }
    );
  }

  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const bookings = await prisma.booking.findMany({
    where: {
      venueId,
      status: { in: ["CONFIRMED", "PENDING"] },
      startAt: { gte: startOfDay },
      endAt: { lte: endOfDay },
    },
    select: {
      startAt: true,
      endAt: true,
      status: true,
    },
    orderBy: { startAt: "asc" },
  });

  // Generate available time slots (6 AM to 11 PM)
  const slots = [];
  for (let hour = 6; hour < 23; hour++) {
    const slotStart = new Date(date);
    slotStart.setHours(hour, 0, 0, 0);
    const slotEnd = new Date(date);
    slotEnd.setHours(hour + 1, 0, 0, 0);

    const isBooked = bookings.some(
      (b) => b.startAt < slotEnd && b.endAt > slotStart
    );

    slots.push({
      startTime: `${hour.toString().padStart(2, "0")}:00`,
      endTime: `${(hour + 1).toString().padStart(2, "0")}:00`,
      available: !isBooked,
    });
  }

  return NextResponse.json({ slots, bookings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { venueId, userId, startAt, endAt, notes } = body;

    const conflict = await prisma.booking.findFirst({
      where: {
        venueId,
        status: { in: ["CONFIRMED", "PENDING"] },
        startAt: { lt: new Date(endAt) },
        endAt: { gt: new Date(startAt) },
      },
    });

    if (conflict) {
      return NextResponse.json(
        { error: "Time slot is already booked" },
        { status: 409 }
      );
    }

    const venue = await prisma.venue.findUnique({
      where: { id: venueId },
      select: { pricePerHour: true },
    });

    if (!venue) {
      return NextResponse.json({ error: "Venue not found" }, { status: 404 });
    }

    const hours =
      (new Date(endAt).getTime() - new Date(startAt).getTime()) / 3600000;
    const totalAmount = venue.pricePerHour * hours;

    const booking = await prisma.booking.create({
      data: {
        venueId,
        userId,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
        totalAmount,
        notes,
        status: "PENDING",
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
