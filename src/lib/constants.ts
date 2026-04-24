// ─── Sports ───
export const SPORTS = [
  { name: "Basketball", slug: "basketball", icon: "🏀", category: "INDOOR" as const, color: "from-orange-500 to-amber-600" },
  { name: "Soccer", slug: "soccer", icon: "⚽", category: "OUTDOOR" as const, color: "from-green-500 to-emerald-600" },
  { name: "Tennis", slug: "tennis", icon: "🎾", category: "BOTH" as const, color: "from-lime-500 to-green-600" },
  { name: "Volleyball", slug: "volleyball", icon: "🏐", category: "BOTH" as const, color: "from-yellow-400 to-orange-500" },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", category: "BOTH" as const, color: "from-teal-400 to-cyan-500" },
  { name: "Baseball", slug: "baseball", icon: "⚾", category: "OUTDOOR" as const, color: "from-red-500 to-rose-600" },
  { name: "Football", slug: "football", icon: "🏈", category: "OUTDOOR" as const, color: "from-amber-600 to-yellow-700" },
  { name: "Swimming", slug: "swimming", icon: "🏊", category: "INDOOR" as const, color: "from-blue-400 to-cyan-500" },
  { name: "Badminton", slug: "badminton", icon: "🏸", category: "INDOOR" as const, color: "from-purple-400 to-violet-500" },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "OUTDOOR" as const, color: "from-emerald-500 to-teal-600" },
] as const;

// ─── Skill Levels ───
export const SKILL_LEVELS = [
  { value: "BEGINNER", label: "Beginner", description: "Just starting out" },
  { value: "INTERMEDIATE", label: "Intermediate", description: "Know the basics, developing skills" },
  { value: "ADVANCED", label: "Advanced", description: "Strong skills, competitive play" },
  { value: "PRO", label: "Pro", description: "Professional or semi-professional level" },
] as const;

// ─── Major US Cities ───
export const CITIES = [
  { name: "New York", state: "NY", lat: 40.7128, lng: -74.006 },
  { name: "Los Angeles", state: "CA", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago", state: "IL", lat: 41.8781, lng: -87.6298 },
  { name: "Austin", state: "TX", lat: 30.2672, lng: -97.7431 },
  { name: "Miami", state: "FL", lat: 25.7617, lng: -80.1918 },
  { name: "Seattle", state: "WA", lat: 47.6062, lng: -122.3321 },
  { name: "Denver", state: "CO", lat: 39.7392, lng: -104.9903 },
  { name: "Atlanta", state: "GA", lat: 33.749, lng: -84.388 },
  { name: "Phoenix", state: "AZ", lat: 33.4484, lng: -112.074 },
  { name: "Boston", state: "MA", lat: 42.3601, lng: -71.0589 },
] as const;

// ─── User Roles ───
export const USER_ROLES = [
  { value: "USER", label: "Player" },
  { value: "COACH", label: "Coach" },
  { value: "VENUE_OWNER", label: "Venue Owner" },
  { value: "ACADEMY_OWNER", label: "Academy Owner" },
  { value: "ADMIN", label: "Admin" },
  { value: "SUPER_ADMIN", label: "Super Admin" },
] as const;

// ─── Venue Amenities ───
export const AMENITIES = [
  { value: "parking", label: "Parking", icon: "🅿️" },
  { value: "showers", label: "Showers", icon: "🚿" },
  { value: "lights", label: "Lights", icon: "💡" },
  { value: "cafeteria", label: "Cafeteria", icon: "☕" },
  { value: "wifi", label: "WiFi", icon: "📶" },
  { value: "lockers", label: "Lockers", icon: "🔒" },
  { value: "equipment", label: "Equipment Rental", icon: "🏋️" },
  { value: "ac", label: "Air Conditioning", icon: "❄️" },
  { value: "first_aid", label: "First Aid", icon: "🏥" },
  { value: "water", label: "Drinking Water", icon: "💧" },
] as const;

// ─── Game Statuses ───
export const GAME_STATUSES = {
  OPEN: { label: "Open", color: "bg-green-100 text-green-800" },
  FULL: { label: "Full", color: "bg-yellow-100 text-yellow-800" },
  IN_PROGRESS: { label: "In Progress", color: "bg-blue-100 text-blue-800" },
  COMPLETED: { label: "Completed", color: "bg-gray-100 text-gray-800" },
  CANCELLED: { label: "Cancelled", color: "bg-red-100 text-red-800" },
} as const;

// ─── Booking Statuses ───
export const BOOKING_STATUSES = {
  PENDING: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  CONFIRMED: { label: "Confirmed", color: "bg-green-100 text-green-800" },
  CANCELLED: { label: "Cancelled", color: "bg-red-100 text-red-800" },
  COMPLETED: { label: "Completed", color: "bg-gray-100 text-gray-800" },
  NO_SHOW: { label: "No Show", color: "bg-orange-100 text-orange-800" },
} as const;

// ─── Theme ───
export const THEME = {
  colors: {
    primary: "#1E40AF",
    accent: "#F97316",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  },
} as const;

// ─── Platform Stats (placeholder) ───
export const PLATFORM_STATS = {
  players: "10,000+",
  venues: "500+",
  coaches: "200+",
  cities: "50+",
} as const;

// ─── Mock Venues ───
export const MOCK_VENUES = [
  { id: 1, name: "Bay Area Sports Complex", city: "San Francisco", state: "CA", rating: 4.8, reviews: 124, sports: ["Basketball", "Tennis", "Volleyball"], price: "$35-65/hr", image: "from-blue-500 to-indigo-600", amenities: ["Parking", "Showers", "Lights", "Cafeteria"] },
  { id: 2, name: "Sunset Recreation Center", city: "Los Angeles", state: "CA", rating: 4.6, reviews: 89, sports: ["Soccer", "Basketball"], price: "$25-45/hr", image: "from-orange-400 to-red-500", amenities: ["Parking", "Lights", "Water"] },
  { id: 3, name: "Emerald City Courts", city: "Seattle", state: "WA", rating: 4.9, reviews: 201, sports: ["Pickleball", "Tennis", "Badminton"], price: "$30-55/hr", image: "from-emerald-500 to-teal-600", amenities: ["Parking", "Showers", "AC", "Equipment Rental"] },
  { id: 4, name: "Mile High Athletic Club", city: "Denver", state: "CO", rating: 4.7, reviews: 156, sports: ["Swimming", "Basketball"], price: "$40-70/hr", image: "from-sky-500 to-blue-600", amenities: ["Parking", "Showers", "Lockers", "Cafeteria"] },
  { id: 5, name: "Liberty Sports Arena", city: "New York", state: "NY", rating: 4.5, reviews: 312, sports: ["Basketball", "Volleyball", "Soccer"], price: "$50-90/hr", image: "from-purple-500 to-indigo-600", amenities: ["Showers", "Lockers", "First Aid", "WiFi"] },
  { id: 6, name: "Peach State Fieldhouse", city: "Atlanta", state: "GA", rating: 4.8, reviews: 98, sports: ["Tennis", "Badminton", "Cricket"], price: "$20-40/hr", image: "from-rose-400 to-pink-500", amenities: ["Parking", "Lights", "Water", "Equipment Rental"] },
] as const;

// ─── Mock Games ───
export const MOCK_GAMES = [
  { id: 1, title: "Sunday Pickup Basketball", sport: "Basketball", icon: "🏀", date: "Tomorrow 6:00 PM", venue: "Bay Area Sports Complex", spots: { filled: 7, total: 10 }, level: "Intermediate", color: "from-orange-500 to-amber-600" },
  { id: 2, title: "Casual Tennis Doubles", sport: "Tennis", icon: "🎾", date: "Sat 10:00 AM", venue: "Emerald City Courts", spots: { filled: 2, total: 4 }, level: "All Levels", color: "from-lime-500 to-green-600" },
  { id: 3, title: "Women's Soccer Friendly", sport: "Soccer", icon: "⚽", date: "Sun 9:00 AM", venue: "Sunset Recreation Center", spots: { filled: 12, total: 22 }, level: "Beginner-Intermediate", color: "from-green-500 to-emerald-600" },
  { id: 4, title: "Competitive Volleyball", sport: "Volleyball", icon: "🏐", date: "Fri 7:30 PM", venue: "Liberty Sports Arena", spots: { filled: 8, total: 12 }, level: "Advanced", color: "from-yellow-400 to-orange-500" },
  { id: 5, title: "Morning Swim Laps", sport: "Swimming", icon: "🏊", date: "Daily 6:00 AM", venue: "Mile High Athletic Club", spots: { filled: 3, total: 8 }, level: "All Levels", color: "from-blue-400 to-cyan-500" },
  { id: 6, title: "Pickleball Mixer", sport: "Pickleball", icon: "🏓", date: "Sat 2:00 PM", venue: "Emerald City Courts", spots: { filled: 5, total: 8 }, level: "Beginner", color: "from-teal-400 to-cyan-500" },
] as const;

// ─── Mock Coaches ───
export const MOCK_COACHES = [
  { id: 1, name: "Sarah Chen", initials: "SC", sports: ["Tennis", "Badminton"], experience: 8, rating: 4.9, reviews: 67, price: 65, city: "San Francisco", color: "from-blue-500 to-indigo-500", verified: true, bio: "Former NCAA Division I tennis player. Specializes in stroke improvement and match strategy." },
  { id: 2, name: "Marcus Johnson", initials: "MJ", sports: ["Basketball"], experience: 12, rating: 4.8, reviews: 143, price: 75, city: "Los Angeles", color: "from-orange-500 to-red-500", verified: true, bio: "Professional basketball trainer with NBA G-League experience." },
  { id: 3, name: "Elena Rodriguez", initials: "ER", sports: ["Soccer", "Volleyball"], experience: 6, rating: 4.7, reviews: 54, price: 55, city: "New York", color: "from-green-500 to-emerald-500", verified: true, bio: "Youth soccer coach and former collegiate volleyball player." },
  { id: 4, name: "David Kim", initials: "DK", sports: ["Swimming"], experience: 10, rating: 4.9, reviews: 89, price: 70, city: "Seattle", color: "from-cyan-500 to-blue-500", verified: true, bio: "Certified swim instructor. Teaches technique for competitive and fitness swimming." },
  { id: 5, name: "James O'Brien", initials: "JO", sports: ["Pickleball", "Tennis"], experience: 5, rating: 4.6, reviews: 32, price: 50, city: "Denver", color: "from-purple-500 to-violet-500", verified: false, bio: "Pickleball enthusiast and certified tennis coach." },
  { id: 6, name: "Priya Patel", initials: "PP", sports: ["Cricket", "Badminton"], experience: 15, rating: 5.0, reviews: 28, price: 60, city: "Atlanta", color: "from-rose-500 to-pink-500", verified: true, bio: "National-level cricket player with 15 years of coaching experience." },
] as const;

// ─── Mock Events ───
export const MOCK_EVENTS = [
  { id: 1, title: "SF Bay Area Basketball Championship", type: "Tournament", sport: "Basketball", icon: "🏀", date: "Mar 15-17", teams: 16, price: "$200/team", status: "open", color: "from-orange-500 to-red-600" },
  { id: 2, title: "Seattle Pickleball League — Spring 2025", type: "League", sport: "Pickleball", icon: "🏓", date: "Apr 1 - Jun 30", teams: 24, price: "$150/team", status: "open", color: "from-teal-500 to-cyan-600" },
  { id: 3, title: "NYC Volleyball Beach Bash", type: "Tournament", sport: "Volleyball", icon: "🏐", date: "May 10", teams: 8, price: "$100/team", status: "almost_full", color: "from-yellow-500 to-orange-600" },
  { id: 4, title: "Denver Tennis Open", type: "Tournament", sport: "Tennis", icon: "🎾", date: "Apr 5-6", teams: 32, price: "$75/player", status: "coming_soon", color: "from-lime-500 to-green-600" },
] as const;

// ─── Mock Blog Posts ───
export const MOCK_BLOG_POSTS = [
  { id: 1, title: "Top 10 Pickleball Courts in San Francisco", tag: "Venues", emoji: "🏓", excerpt: "Discover the best pickleball facilities in the Bay Area, from indoor courts to outdoor parks.", date: "Mar 12, 2025", readTime: "5 min read" },
  { id: 2, title: "How to Organize the Perfect Pickup Game", tag: "Tips", emoji: "📋", excerpt: "From setting the right skill level to choosing the perfect time slot — a complete guide.", date: "Mar 8, 2025", readTime: "7 min read" },
  { id: 3, title: "Beginner's Guide to Tennis", tag: "Guides", emoji: "🎾", excerpt: "Everything you need to know to start playing tennis, from grip basics to court etiquette.", date: "Mar 3, 2025", readTime: "10 min read" },
  { id: 4, title: "5 Benefits of Joining a Sports Community", tag: "Lifestyle", emoji: "👥", excerpt: "How recreational sports build friendships, improve health, and boost your social life.", date: "Feb 28, 2025", readTime: "4 min read" },
  { id: 5, title: "Coach Spotlight: Sarah Chen", tag: "People", emoji: "🌟", excerpt: "Meet the former NCAA player who's changing how adults learn tennis in the Bay Area.", date: "Feb 22, 2025", readTime: "6 min read" },
  { id: 6, title: "The Rise of Pickleball in America", tag: "Trends", emoji: "📈", excerpt: "Why pickleball is the fastest-growing sport in the US and where to play near you.", date: "Feb 15, 2025", readTime: "8 min read" },
] as const;

// ─── Mock Groups ───
export const MOCK_GROUPS = [
  { id: 1, name: "SF Basketball Crew", sport: "Basketball", icon: "🏀", members: 234, city: "San Francisco", desc: "Weekly pickup games and tournaments for all skill levels.", activity: "Very Active" },
  { id: 2, name: "Seattle Pickleball Club", sport: "Pickleball", icon: "🏓", members: 189, city: "Seattle", desc: "The largest pickleball community in the Pacific Northwest.", activity: "Very Active" },
  { id: 3, name: "NYC Soccer League", sport: "Soccer", icon: "⚽", members: 456, city: "New York", desc: "Organized leagues and casual kickabouts across all 5 boroughs.", activity: "Active" },
  { id: 4, name: "Denver Tennis Social", sport: "Tennis", icon: "🎾", members: 123, city: "Denver", desc: "Social tennis meetups, mixers, and friendly competition.", activity: "Active" },
  { id: 5, name: "LA Volleyball Network", sport: "Volleyball", icon: "🏐", members: 312, city: "Los Angeles", desc: "Beach and indoor volleyball for players of all levels.", activity: "Very Active" },
  { id: 6, name: "ATL Cricket Association", sport: "Cricket", icon: "🏏", members: 87, city: "Atlanta", desc: "Bringing cricket culture to the Southeast with regular matches.", activity: "Moderate" },
] as const;
