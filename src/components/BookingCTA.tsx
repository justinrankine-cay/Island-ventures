import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(135deg, var(--ocean-900) 0%, var(--ocean-800) 100%)",
        borderTop: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="font-serif-display text-4xl md:text-5xl font-extrabold mb-5 text-white"
        >
          Ready to Set Sail?
        </h2>
        <p
          className="text-base max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          Check live availability and reserve your charter in minutes — or reach us
          directly by phone or WhatsApp. We respond to every inquiry within the hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "white", color: "var(--gold-700)" }}
          >
            Check Availability <ArrowRight size={17} />
          </Link>
          <a
            href="https://wa.me/13455261234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base transition-all hover:scale-105 border-2"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "white",
              background: "rgba(255,255,255,0.10)",
            }}
          >
            <MessageCircle size={17} /> WhatsApp Us
          </a>
          <a
            href="tel:+13455261234"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base transition-all hover:scale-105 border-2"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "white",
              background: "rgba(255,255,255,0.10)",
            }}
          >
            <Phone size={17} /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
