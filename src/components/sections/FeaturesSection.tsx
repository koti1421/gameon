"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

const steps = [
  {
    icon: "📍",
    title: "Find",
    desc: "Search venues, games, and coaches near you by sport and location.",
  },
  {
    icon: "📅",
    title: "Book",
    desc: "Reserve courts, join games, or schedule coaching sessions instantly.",
  },
  {
    icon: "🏆",
    title: "Play",
    desc: "Show up, play, and connect with your local sports community.",
  },
];

const features = [
  {
    icon: "📍",
    title: "Book Venues",
    desc: "Find and reserve courts, fields, and facilities near you. Pay securely online.",
    color: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: "🤝",
    title: "Join Pickup Games",
    desc: "Browse open games or organize your own. All skill levels welcome.",
    color: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    icon: "🎯",
    title: "Find Coaches",
    desc: "Connect with experienced coaches. Read reviews and book sessions.",
    color: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: "🏫",
    title: "Join Academies",
    desc: "Enroll in training programs. Track progress with structured coaching.",
    color: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: "🏆",
    title: "Compete in Tournaments",
    desc: "Register for local tournaments and leagues. Climb the leaderboard.",
    color: "bg-red-50 dark:bg-red-950/30",
  },
  {
    icon: "👥",
    title: "Build Community",
    desc: "Create groups, chat with players, and grow your sports network.",
    color: "bg-teal-50 dark:bg-teal-950/30",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Get started in 3 simple steps
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-4xl shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function FeaturesGrid() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              One platform for all your sports activities
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <div className={`rounded-xl p-8 ${f.color} border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow`}>
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
