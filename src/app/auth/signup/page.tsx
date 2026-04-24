"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SPORTS } from "@/lib/constants";
import { Eye, EyeOff, Zap, Shield, Users } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleSport = (slug: string) => {
    setSelectedSports(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthLabels = ["", "Weak", "Medium", "Strong"];
  const strengthColors = ["", "bg-red-500", "bg-yellow-500", "bg-green-500"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup
  };

  return (
    <div className="min-h-screen flex dark:bg-gray-950">
      {/* Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-10" />
        <div className="relative flex flex-col justify-between p-12 text-white w-full">
          <div>
            <Link href="/" className="text-3xl font-bold">🏟️ GameOn</Link>
            <h2 className="mt-12 text-4xl font-bold leading-tight">
              Start your<br />sports journey
            </h2>
            <p className="mt-4 text-lg text-orange-100 max-w-md">
              Create your free account and start playing today. No credit card required.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Free Forever</div>
                  <div className="text-sm text-orange-100">Players never pay for the platform</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Safe & Secure</div>
                  <div className="text-sm text-orange-100">Your data is encrypted and protected</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Join the Community</div>
                  <div className="text-sm text-orange-100">Connect with 10,000+ athletes near you</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-orange-200 mt-auto">Trusted by players in 15 cities across the US</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="text-2xl font-bold text-primary dark:text-blue-400">🏟️ GameOn</Link>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Join GameOn for free</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="mt-1" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative mt-1">
                  <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a strong password" required className="pr-10" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Toggle password visibility">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3].map(level => (
                        <div key={level} className={`h-1 flex-1 rounded-full ${strength >= level ? strengthColors[strength] : "bg-gray-200 dark:bg-gray-700"}`} />
                      ))}
                    </div>
                    <p className={`mt-1 text-xs ${strength === 1 ? "text-red-500" : strength === 2 ? "text-yellow-500" : "text-green-500"}`}>
                      {strengthLabels[strength]}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sports you play</label>
                <div className="flex flex-wrap gap-2">
                  {SPORTS.map((sport) => (
                    <button
                      key={sport.slug}
                      type="button"
                      onClick={() => toggleSport(sport.slug)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        selectedSports.includes(sport.slug)
                          ? "bg-accent text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      }`}
                    >
                      {sport.icon} {sport.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary/30" required />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                </label>
              </div>
              <Button type="submit" variant="accent" className="w-full shadow-md shadow-orange-500/20">Create Account</Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-semibold text-accent hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
