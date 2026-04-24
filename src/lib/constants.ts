// ─── Sports ───
export const SPORTS = [
  { name: "Basketball", slug: "basketball", icon: "🏀", category: "INDOOR" as const },
  { name: "Soccer", slug: "soccer", icon: "⚽", category: "OUTDOOR" as const },
  { name: "Tennis", slug: "tennis", icon: "🎾", category: "BOTH" as const },
  { name: "Volleyball", slug: "volleyball", icon: "🏐", category: "BOTH" as const },
  { name: "Pickleball", slug: "pickleball", icon: "🏓", category: "BOTH" as const },
  { name: "Baseball", slug: "baseball", icon: "⚾", category: "OUTDOOR" as const },
  { name: "Football", slug: "football", icon: "🏈", category: "OUTDOOR" as const },
  { name: "Swimming", slug: "swimming", icon: "🏊", category: "INDOOR" as const },
  { name: "Badminton", slug: "badminton", icon: "🏸", category: "INDOOR" as const },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "OUTDOOR" as const },
  { name: "Badminton", slug: "badminton", icon: "🏸", category: "INDOOR" as const },
  { name: "Cricket", slug: "cricket", icon: "🏏", category: "OUTDOOR" as const },
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
