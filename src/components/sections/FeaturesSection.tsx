"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { MapPin, CalendarCheck, Trophy, Landmark, Handshake, Target, GraduationCap, Users } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Find", desc: "Search venues, games, and coaches near you by sport and location.", color: "bg-blue-500" },
  { icon: CalendarCheck, title: "Book", desc: "Reserve courts, join games, or schedule coaching sessions instantly.", color: "bg-accent" },
  { icon: Trophy, title: "Play", desc: "Show up, play, and connect with your local sports community.", color: "bg-green-500" },
];

const features = [
  { icon: Landmark, title: "Book Venues", desc: "Find and reserve courts, fields, and facilities near you. Pay securely online.", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50 dark:bg-blue-950/30" },
  { icon: Handshake, title: "Join Pickup Games", desc: "Browse open games or organize your own. All skill levels welcome.", gradient: "from-orange-500 to-red-500", bg: "bg-orange-50 dark:bg-orange-950/30" },
  { icon: Target, title: "Find Coaches", desc: "Connect with experienced coaches. Read reviews and book sessions.", gradient: "from-green-500 to-emerald-600", bg: "bg-green-50 dark:bg-green-950/30" },
  { icon: GraduationCap, title: "Join Academies", desc: "Enroll in training programs. Track progress with structured coaching.", gradient: "from-purple-500 to-violet-600", bg: "bg-purple-50 dark:bg-purple-950/30" },
  { icon: Trophy, title: "Compete in Tournaments", desc: "Register for local tournaments and leagues. Climb the leaderboard.", gradient: "from-red-500 to-rose-600", bg: "bg-red-50 dark:bg-red-950/30" },
  { icon: Users, title: "Build Community", desc: "Create groups, chat with players, and grow your sports network.", gradient: "from-teal-500 to-cyan-600", bg: "bg-teal-50 dark:bg-teal-950/30" },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-4">Simple Process</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Get started in 3 simple steps
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line */}
          <div className="absolute top-10 left-[20%] right-[20%] hidden md:block h-0.5 border-t-2 border-dashed border-gray-300 dark:border-gray-600" />
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative text-center">
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${step.color} text-white shadow-lg`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:left-1/2 md:ml-6 md:top-0 md:right-auto">
                  {i + 1}
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
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent mb-4">Features</span>
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
              <div className={`group rounded-2xl p-8 ${f.bg} border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
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
