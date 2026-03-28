import { NextRequest, NextResponse } from "next/server";
import { bookings, Booking } from "@/lib/bookings-store";
import { format } from "date-fns";

// GET /api/bookings?month=YYYY-MM  →  list booked dates
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month"); // e.g. "2026-04"

  const filtered = month
    ? bookings.filter((b) => b.date.startsWith(month))
    : bookings;

  const bookedDates = [...new Set(filtered.map((b) => b.date))];
  return NextResponse.json({ bookedDates, bookings: filtered });
}

// POST /api/bookings  →  create a new booking
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { vesselId, vesselName, date, timeSlot, guestName, email, phone, groupSize, notes } = body;

    if (!vesselId || !date || !guestName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if vessel is already booked on this date/slot
    const conflict = bookings.find(
      (b) => b.vesselId === vesselId && b.date === date && b.timeSlot === timeSlot
    );
    if (conflict) {
      return NextResponse.json(
        { error: "This vessel is already booked for that date and time slot." },
        { status: 409 }
      );
    }

    const newBooking: Booking = {
      id: `bk${Date.now()}`,
      vesselId,
      vesselName,
      date,
      timeSlot,
      guestName,
      email,
      phone: phone ?? "",
      groupSize: groupSize ?? 1,
      notes,
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    return NextResponse.json(
      { success: true, booking: newBooking, message: `Booking confirmed for ${format(new Date(date + "T12:00:00"), "MMMM d, yyyy")}!` },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
