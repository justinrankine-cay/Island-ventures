// In-memory store for demo purposes.
// In production this would be a database (e.g. Supabase/Postgres).

export interface Booking {
  id: string;
  vesselId: string;
  vesselName: string;
  date: string; // ISO date string YYYY-MM-DD
  timeSlot: string;
  guestName: string;
  email: string;
  phone: string;
  groupSize: number;
  notes?: string;
  createdAt: string;
}

// Seed some demo bookings
export const bookings: Booking[] = [
  {
    id: "bk001",
    vesselId: "sea-breeze",
    vesselName: "Sea Breeze",
    date: "2026-04-05",
    timeSlot: "09:00 AM",
    guestName: "Demo Guest",
    email: "demo@example.com",
    phone: "",
    groupSize: 8,
    createdAt: new Date().toISOString(),
  },
  {
    id: "bk002",
    vesselId: "blue-marlin",
    vesselName: "Blue Marlin",
    date: "2026-04-07",
    timeSlot: "07:00 AM",
    guestName: "Demo Guest 2",
    email: "demo2@example.com",
    phone: "",
    groupSize: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: "bk003",
    vesselId: "sunset-dream",
    vesselName: "Sunset Dream",
    date: "2026-04-12",
    timeSlot: "05:00 PM",
    guestName: "Demo Guest 3",
    email: "demo3@example.com",
    phone: "",
    groupSize: 10,
    createdAt: new Date().toISOString(),
  },
];
