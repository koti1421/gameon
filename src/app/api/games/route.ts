import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const city = searchParams.get("city");
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = {};

  if (sport) where.sport = { slug: sport };
  if (city) where.city = { equals: city, mode: "insensitive" };
  if (status) where.status = status;
  else where.status = "OPEN";

  const [games, total] = await Promise.all([
    prisma.pickupGame.findMany({
      where,
      include: {
        sport: true,
        venue: { select: { name: true, city: true } },
        organizer: { select: { name: true, image: true } },
        _count: { select: { participants: true } },
      },
      orderBy: { startAt: "asc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.pickupGame.count({ where }),
  ]);

  return NextResponse.json({
    games,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const game = await prisma.pickupGame.create({
      data: {
        sportId: body.sportId,
        venueId: body.venueId,
        organizerId: body.organizerId,
        title: body.title,
        description: body.description,
        location: body.location,
        city: body.city,
        state: body.state,
        skillLevel: body.skillLevel,
        startAt: new Date(body.startAt),
        endAt: new Date(body.endAt),
        maxPlayers: body.maxPlayers,
        costPerPlayer: body.costPerPlayer,
        isPrivate: body.isPrivate || false,
      },
    });
    return NextResponse.json(game, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create game" }, { status: 500 });
  }
}
