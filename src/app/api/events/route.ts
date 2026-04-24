import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const city = searchParams.get("city");
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = {};

  if (sport) where.sport = { slug: sport };
  if (city) where.city = { equals: city, mode: "insensitive" };
  if (type) where.type = type;
  if (status) where.status = status;
  else where.status = { in: ["PUBLISHED", "REGISTRATION_OPEN"] };

  const [events, total] = await Promise.all([
    prisma.event.findMany({
      where,
      include: {
        sport: true,
        venue: { select: { name: true, city: true } },
        _count: { select: { registrations: true, teams: true } },
      },
      orderBy: { startDate: "asc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.event.count({ where }),
  ]);

  return NextResponse.json({
    events,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const event = await prisma.event.create({ data: body });
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}
