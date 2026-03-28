import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--sand-50)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "var(--sage-100)" }}
        >
          <CalendarDays size={28} style={{ color: "var(--sage-500)" }} />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ color: "var(--dark-brown)" }}
        >
          Ready to Set Sail?
        </h2>
        <p
          className="text-base max-w-2xl mx-auto mb-9 leading-relaxed"
          style={{ color: "var(--medium-brown)" }}
        >
          Check our live availability calendar and book your charter in minutes.
          We&apos;ll follow up with a personalized confirmation and all the details
          you need for a perfect day on the water.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            Check Availability <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{
              border: "2px solid var(--sage-400)",
              color: "var(--sage-500)",
              background: "transparent",
            }}
          >
            Send an Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
