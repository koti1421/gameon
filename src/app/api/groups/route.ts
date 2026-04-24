import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const where: Record<string, unknown> = { isPublic: true };
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const [groups, total] = await Promise.all([
    prisma.group.findMany({
      where,
      include: {
        owner: { select: { name: true, image: true } },
        _count: { select: { members: true, messages: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.group.count({ where }),
  ]);

  return NextResponse.json({
    groups,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}
