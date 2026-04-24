import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const city = searchParams.get("city");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = { isActive: true };

  if (sport) where.sports = { some: { sport: { slug: sport } } };
  if (city) where.user = { city: { equals: city, mode: "insensitive" } };

  const [coaches, total] = await Promise.all([
    prisma.coach.findMany({
      where,
      include: {
        user: { select: { name: true, image: true, city: true, state: true } },
        sports: { include: { sport: true } },
      },
      orderBy: { avgRating: { sort: "desc", nulls: "last" } },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.coach.count({ where }),
  ]);

  return NextResponse.json({
    coaches,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}
