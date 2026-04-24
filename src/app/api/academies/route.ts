import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = { isActive: true };
  if (city) where.city = { equals: city, mode: "insensitive" };

  const [academies, total] = await Promise.all([
    prisma.academy.findMany({
      where,
      include: {
        sports: { include: { sport: true } },
        _count: { select: { batches: true, coaches: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.academy.count({ where }),
  ]);

  return NextResponse.json({
    academies,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}
