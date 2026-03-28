import Link from "next/link";
import { fleetItems } from "@/lib/fleet-data";
import { Users, DollarSign, ArrowRight } from "lucide-react";

const featured = fleetItems.slice(0, 3);

export default function FeaturedFleet() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--sand-50)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: "var(--sage-500)" }}
          >
            Our Fleet
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--dark-brown)" }}
          >
            Crafted for Every Adventure
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--medium-brown)" }}>
            From intimate sunset cruises to deep-sea fishing expeditions, our
            diverse fleet has the perfect vessel for your experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: "white", border: "1px solid var(--sand-200)" }}
            >
              {/* Image placeholder */}
              <div className="relative h-56 overflow-hidden" style={{ background: "var(--sand-200)" }}>
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, var(--sage-400) 0%, var(--sage-600) 100%)`,
                  }}
                >
                  <div>
                    {item.badge && (
                      <span
                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                        style={{ background: "var(--sand-200)", color: "var(--dark-brown)" }}
                      >
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {item.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--medium-brown)" }}>
                  {item.description.slice(0, 120)}...
                </p>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-sm" style={{ color: "var(--sage-500)" }}>
                    <Users size={14} />
                    <span>Up to {item.capacity} guests</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--dark-brown)" }}>
                    <DollarSign size={14} />
                    <span>From ${item.priceFrom}</span>
                  </div>
                </div>
                <Link
                  href={`/fleet#${item.id}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all group-hover:gap-3"
                  style={{
                    background: "var(--sand-100)",
                    color: "var(--dark-brown)",
                    border: "1px solid var(--sand-200)",
                  }}
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            See Full Fleet <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
