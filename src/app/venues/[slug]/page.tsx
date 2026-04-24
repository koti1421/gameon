import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

async function getVenue(slug: string) {
  const venue = await prisma.venue.findUnique({
    where: { slug },
    include: {
      sports: { include: { sport: true } },
      images: { orderBy: { order: "asc" } },
      owner: { select: { name: true, image: true } },
      reviews: {
        include: { user: { select: { name: true, image: true } } },
        orderBy: { createdAt: "desc" },
        take: 5,
      },
      _count: { select: { bookings: true, reviews: true } },
    },
  });
  return venue;
}

export default async function VenueDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const venue = await getVenue(params.slug);

  if (!venue) {
    notFound();
  }

  const avgRating =
    venue.reviews.length > 0
      ? venue.reviews.reduce((sum, r) => sum + r.rating, 0) /
        venue.reviews.length
      : 0;

  return (
    <div className="min-h-screen dark:bg-gray-950">
      {/* Hero Image */}
      <div className="relative h-64 bg-gradient-to-r from-primary to-blue-700 sm:h-80">
        {venue.images[0] && (
          <div className="absolute inset-0 bg-cover bg-center opacity-30" />
        )}
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative flex h-full items-end pb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">{venue.name}</h1>
            <p className="mt-1 text-lg text-blue-100">
              📍 {venue.address}, {venue.city}, {venue.state} {venue.zipCode}
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sports */}
            <div className="flex flex-wrap gap-2">
              {venue.sports.map((vs) => (
                <Badge key={vs.sportId} variant="outline">
                  {vs.sport.icon} {vs.sport.name}
                </Badge>
              ))}
            </div>

            {/* Description */}
            {venue.description && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  About
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {venue.description}
                </p>
              </div>
            )}

            {/* Amenities */}
            {venue.amenities.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Amenities
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {venue.amenities.map((a) => (
                    <Badge key={a} variant="outline">
                      {a}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Rules */}
            {venue.rules && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Rules
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {venue.rules}
                </p>
              </div>
            )}

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Reviews ({venue._count.reviews})
              </h2>
              {venue.reviews.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {venue.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {review.user.name}
                        </span>
                        <span className="text-yellow-500">
                          {"⭐".repeat(review.rating)}
                        </span>
                      </div>
                      {review.comment && (
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {review.comment}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  No reviews yet
                </p>
              )}
            </div>
          </div>

          {/* Sidebar - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                ${venue.pricePerHour}
                <span className="text-base font-normal text-gray-500">
                  /hour
                </span>
              </div>
              {avgRating > 0 && (
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  ⭐ {avgRating.toFixed(1)} · {venue._count.reviews} reviews
                </div>
              )}

              <div className="mt-4 space-y-3">
                {venue.openTime && venue.closeTime && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    🕐 {venue.openTime} - {venue.closeTime}
                  </p>
                )}
                {venue.phone && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    📞 {venue.phone}
                  </p>
                )}
                {venue.email && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ✉️ {venue.email}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <Button variant="accent" className="w-full" size="lg">
                  Book Now
                </Button>
              </div>

              <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                {venue._count.bookings} bookings made
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
