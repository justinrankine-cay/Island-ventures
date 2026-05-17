import Link from "next/link";
import { fleetItems } from "@/lib/fleet-data";
import { Users, ArrowRight } from "lucide-react";

const featured = fleetItems.slice(0, 3);

const cardGradients: Record<string, string> = {
  "grand-mariner":  "linear-gradient(135deg, #1B5E8E 0%, #0D2B45 100%)",
  "blue-marlin":    "linear-gradient(135deg, #133B5C 0%, #0B2235 100%)",
  "stingray-runner":"linear-gradient(135deg, #0D9688 0%, #0B6B5F 100%)",
  "sunset-yachts":  "linear-gradient(135deg, #D4A843 0%, #9C6F15 100%)",
  "island-express": "linear-gradient(135deg, #2E4A5E 0%, #0D1F2D 100%)",
  "reef-thrills":   "linear-gradient(135deg, #26B5A8 0%, #0D9688 100%)",
};

export default function FeaturedFleet() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--sand-50)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "var(--ocean-50)", color: "var(--ocean-700)" }}
          >
            Our Fleet
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Hand-Picked Vessels
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--mid)" }}>
            Every boat in our fleet is meticulously maintained and crewed by
            licensed Cayman captains.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ background: "white", border: "1px solid var(--sand-200)" }}
            >
              {/* Card hero */}
              <div
                className="relative h-52 flex items-end p-5"
                style={{ background: cardGradients[item.id] ?? "linear-gradient(135deg, #1B5E8E, #0D2B45)" }}
              >
                {item.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--gold-400)", color: "var(--navy)" }}
                  >
                    {item.badge}
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{item.name}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--mid)" }}>
                  {item.description.slice(0, 110)}…
                </p>
                <div
                  className="flex items-center justify-between py-3 mb-4 border-y text-sm"
                  style={{ borderColor: "var(--sand-200)" }}
                >
                  <div className="flex items-center gap-1.5" style={{ color: "var(--ocean-700)" }}>
                    <Users size={14} />
                    <span>Up to <strong>{item.capacity}</strong></span>
                  </div>
                  <div className="font-bold" style={{ color: "var(--navy)" }}>
                    From <span style={{ color: "var(--teal-600)" }}>${item.priceFrom}</span>
                  </div>
                </div>
                <Link
                  href={`/booking?vessel=${item.id}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-md"
                  style={{ background: "var(--teal-500)", color: "white" }}
                >
                  Book This Vessel <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-lg border-2"
            style={{
              borderColor: "var(--ocean-700)",
              color: "var(--ocean-700)",
              background: "transparent",
            }}
          >
            View Full Fleet <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
