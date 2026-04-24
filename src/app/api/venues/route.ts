import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const city = searchParams.get("city");
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = { isActive: true };

  if (sport) {
    where.sports = { some: { sport: { slug: sport } } };
  }
  if (city) {
    where.city = { equals: city, mode: "insensitive" };
  }
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
      { address: { contains: search, mode: "insensitive" } },
    ];
  }

  const [venues, total] = await Promise.all([
    prisma.venue.findMany({
      where,
      include: {
        sports: { include: { sport: true } },
        images: { where: { isPrimary: true }, take: 1 },
        _count: { select: { bookings: true, reviews: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.venue.count({ where }),
  ]);

  return NextResponse.json({
    venues,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const venue = await prisma.venue.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        address: body.address,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        lat: body.lat,
        lng: body.lng,
        phone: body.phone,
        email: body.email,
        website: body.website,
        pricePerHour: body.pricePerHour,
        amenities: body.amenities || [],
        rules: body.rules,
        openTime: body.openTime,
        closeTime: body.closeTime,
        ownerId: body.ownerId,
      },
    });
    return NextResponse.json(venue, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create venue" },
      { status: 500 }
    );
  }
}
