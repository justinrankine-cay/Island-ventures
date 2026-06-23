"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import { format, isBefore, startOfToday } from "date-fns";
import { fleetItems } from "@/lib/fleet-data";
import { CalendarDays, Check, AlertCircle, Loader2, Clock, Users, Ship } from "lucide-react";

type CalendarValue = Date | null | [Date | null, Date | null];

const timeSlots = [
  "07:00 AM", "09:00 AM", "11:00 AM",
  "01:00 PM", "03:00 PM", "05:00 PM",
];

function BookingForm() {
  const params = useSearchParams();
  const initialVessel = params.get("vessel") ?? "";

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedVessel, setSelectedVessel] = useState(initialVessel);
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [form, setForm] = useState({ guestName: "", email: "", phone: "", groupSize: "1", notes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const month = format(new Date(), "yyyy-MM");
    fetch(`/api/bookings?month=${month}`)
      .then((r) => r.json())
      .then((d) => setBookedDates(d.bookedDates ?? []));
  }, []);

  const handleMonthChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (!activeStartDate) return;
    const month = format(activeStartDate, "yyyy-MM");
    fetch(`/api/bookings?month=${month}`)
      .then((r) => r.json())
      .then((d) => setBookedDates(d.bookedDates ?? []));
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const key = format(date, "yyyy-MM-dd");
    if (bookedDates.includes(key)) return "booked-tile";
    if (!isBefore(date, startOfToday())) return "available-tile";
    return "";
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    const key = format(date, "yyyy-MM-dd");
    return isBefore(date, startOfToday()) || bookedDates.includes(key);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot || !selectedVessel) {
      setStatus("error");
      setMessage("Please select a vessel, date, and time slot.");
      return;
    }
    setStatus("loading");
    const vessel = fleetItems.find((v) => v.id === selectedVessel);
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vesselId: selectedVessel,
        vesselName: vessel?.name ?? selectedVessel,
        date: format(selectedDate, "yyyy-MM-dd"),
        timeSlot: selectedSlot,
        ...form,
        groupSize: parseInt(form.groupSize),
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("success");
      setMessage(data.message);
      setForm({ guestName: "", email: "", phone: "", groupSize: "1", notes: "" });
      setSelectedDate(null);
      setSelectedSlot("");
    } else {
      setStatus("error");
      setMessage(data.error ?? "Something went wrong.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Calendar + slots */}
        <div>
          <div
            className="rounded-2xl p-7 mb-6"
            style={{ background: "white", border: "1px solid var(--sand-200)", boxShadow: "0 2px 12px rgba(44,26,14,0.06)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <CalendarDays size={20} style={{ color: "var(--sage-400)" }} />
              <h2 className="text-lg font-bold" style={{ color: "var(--dark-brown)" }}>
                Select a Date
              </h2>
            </div>

            {/* Legend */}
            <div className="flex gap-5 mb-4 text-xs" style={{ color: "var(--medium-brown)" }}>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded" style={{ background: "#DCE8D8" }} />
                Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded" style={{ background: "#EDCECE" }} />
                Booked
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded" style={{ background: "#EDD9B0" }} />
                Today
              </span>
            </div>

            <Calendar
              onChange={(v: CalendarValue) => {
                if (v instanceof Date) setSelectedDate(v);
              }}
              value={selectedDate}
              tileClassName={tileClassName}
              tileDisabled={tileDisabled}
              onActiveStartDateChange={handleMonthChange}
              minDate={startOfToday()}
            />
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div
              className="rounded-2xl p-6"
              style={{ background: "white", border: "1px solid var(--sand-200)", boxShadow: "0 2px 12px rgba(44,26,14,0.06)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} style={{ color: "var(--sage-400)" }} />
                <h3 className="font-semibold" style={{ color: "var(--dark-brown)" }}>
                  Available Times for{" "}
                  <span style={{ color: "var(--sage-500)" }}>
                    {format(selectedDate, "MMMM d, yyyy")}
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className="py-2.5 rounded-xl text-sm font-medium transition-all border"
                    style={{
                      background: selectedSlot === slot ? "var(--sage-400)" : "var(--sand-50)",
                      color: selectedSlot === slot ? "white" : "var(--dark-brown)",
                      borderColor: selectedSlot === slot ? "var(--sage-400)" : "var(--sand-200)",
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Booking form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-7"
            style={{ background: "white", border: "1px solid var(--sand-200)", boxShadow: "0 2px 12px rgba(44,26,14,0.06)" }}
          >
            <h2 className="text-lg font-bold mb-6" style={{ color: "var(--dark-brown)" }}>
              Your Details
            </h2>

            {/* Vessel select */}
            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--sage-500)" }}>
                <span className="flex items-center gap-1"><Ship size={12} /> Select Vessel</span>
              </label>
              <select
                className="w-full rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--sand-50)",
                  border: "1px solid var(--sand-200)",
                  color: "var(--dark-brown)",
                }}
                value={selectedVessel}
                onChange={(e) => setSelectedVessel(e.target.value)}
                required
              >
                <option value="">-- Choose a vessel --</option>
                {fleetItems.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} — {v.tagline}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected date/slot summary */}
            {selectedDate && selectedSlot && (
              <div
                className="rounded-xl px-4 py-3 mb-5 text-sm flex items-center gap-2"
                style={{ background: "var(--sage-100)", color: "var(--sage-600)" }}
              >
                <Check size={15} />
                <span>
                  <strong>{format(selectedDate, "MMMM d, yyyy")}</strong> at{" "}
                  <strong>{selectedSlot}</strong>
                </span>
              </div>
            )}

            {[
              { key: "guestName", label: "Full Name", type: "text", placeholder: "Jane Smith" },
              { key: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (345) 000-0000" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key} className="mb-4">
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--sage-500)" }}>
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: "var(--sand-50)",
                    border: "1px solid var(--sand-200)",
                    color: "var(--dark-brown)",
                  }}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required={key !== "phone"}
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--sage-500)" }}>
                <span className="flex items-center gap-1"><Users size={12} /> Group Size</span>
              </label>
              <input
                type="number"
                min="1"
                max="20"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--dark-brown)" }}
                value={form.groupSize}
                onChange={(e) => setForm({ ...form, groupSize: e.target.value })}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--sage-500)" }}>
                Special Requests (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Dietary requirements, occasion, special stops..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--dark-brown)" }}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="rounded-xl px-4 py-3 mb-5 flex items-center gap-2 text-sm" style={{ background: "#DCE8D8", color: "var(--sage-600)" }}>
                <Check size={16} />
                <span>{message}</span>
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl px-4 py-3 mb-5 flex items-center gap-2 text-sm" style={{ background: "#FFEDED", color: "#9B2020" }}>
                <AlertCircle size={16} />
                <span>{message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-md disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: "var(--sage-400)", color: "white" }}
            >
              {status === "loading" ? (
                <><Loader2 size={18} className="animate-spin" /> Processing...</>
              ) : (
                <>Confirm Booking</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function BookingPageClient() {
  return (
    <>
      {/* Header */}
      <div
        className="pt-28 pb-14 px-4 text-center"
        style={{ background: "linear-gradient(to bottom, var(--sage-600), var(--sage-500))" }}
      >
        <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--sage-200)" }}>
          Reservations
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Book Your Charter
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
          Select your vessel, pick a date, and secure your spot. Available dates
          are shown in green — booked dates are marked in red.
        </p>
      </div>

      <div style={{ background: "var(--sand-50)" }}>
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </>
  );
}
