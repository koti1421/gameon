# 🏟️ GameOn — US Sports Community Platform

A modern sports platform for the US market. Book venues, join pickup games, find coaches.

## Tech Stack

Next.js 14 | TypeScript | Tailwind CSS | Prisma | Stripe | NextAuth.js

## Sports

Basketball • Pickleball • Soccer • Tennis • Flag Football • Softball • Volleyball • Running

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual values

# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database
npm run db:seed

# Start development server
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | App URL (http://localhost:3000 for dev) |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js session encryption |
| `STRIPE_SECRET_KEY` | Stripe secret API key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth API route
│   │   └── stripe/webhook/      # Stripe webhook handler
│   ├── venues/                  # Venue listing page
│   ├── games/                   # Pickup games page
│   ├── coaches/                 # Coach directory page
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                  # Shared UI components
├── lib/                         # Utilities (prisma, auth, stripe)
└── types/                       # TypeScript type declarations
prisma/
├── schema.prisma                # Database schema
└── seed.ts                      # Database seed script
```

> Built with ❤️ for recreational athletes across the US.
