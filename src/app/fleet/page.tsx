"use client";

import { useState } from "react";
import Link from "next/link";
import { fleetItems, FleetItem } from "@/lib/fleet-data";
import { Users, DollarSign, Check, ArrowRight, Anchor, Car, Waves } from "lucide-react";

const categories = [
  { id: "all",         label: "All",          icon: Anchor },
  { id: "boat",        label: "Boats",         icon: Anchor },
  { id: "transport",   label: "Transport",     icon: Car },
  { id: "water-sport", label: "Water Sports",  icon: Waves },
];

const gradients: Record<string, string> = {
  "grand-mariner":   "linear-gradient(135deg, #1B5E8E 0%, #0D2B45 100%)",
  "blue-marlin":     "linear-gradient(135deg, #133B5C 0%, #0B2235 100%)",
  "stingray-runner": "linear-gradient(135deg, #0D9688 0%, #0B6B5F 100%)",
  "sunset-yachts":   "linear-gradient(135deg, #D4A843 0%, #9C6F15 100%)",
  "island-express":  "linear-gradient(135deg, #2E4A5E 0%, #0D1F2D 100%)",
  "reef-thrills":    "linear-gradient(135deg, #26B5A8 0%, #0D9688 100%)",
};

function FleetCard({ item }: { item: FleetItem }) {
  return (
    <div
      id={item.id}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ background: "white", border: "1px solid var(--sand-200)" }}
    >
      {/* Hero */}
      <div
        className="h-56 flex items-end p-5 relative"
        style={{ background: gradients[item.id] ?? "linear-gradient(135deg, #1B5E8E, #0D2B45)" }}
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
          <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>
            {item.category === "boat" ? "Charter Vessel" : item.category === "transport" ? "Island Transport" : "Water Sport"}
          </p>
          <h3 className="font-serif-display text-2xl font-bold text-white">{item.name}</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>{item.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--mid)" }}>
          {item.description}
        </p>

        <div className="flex gap-5 mb-5 pb-5" style={{ borderBottom: "1px solid var(--sand-200)" }}>
          <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--ocean-700)" }}>
            <Users size={15} />
            <span>Up to <strong>{item.capacity}</strong> guests</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--navy)" }}>
            <DollarSign size={15} style={{ color: "var(--gold-600)" }} />
            <span>From <strong style={{ color: "var(--gold-600)" }}>${item.priceFrom}</strong></span>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
          {item.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--mid)" }}>
              <Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--gold-500)" }} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3">
          <Link
            href={`/booking?vessel=${item.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-md"
            style={{ background: "var(--gold-500)", color: "white" }}
          >
            Book Now <ArrowRight size={14} />
          </Link>
          <Link
            href={`/contact?vessel=${item.name}`}
            className="px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--sand-100)",
              color: "var(--navy)",
              border: "1px solid var(--sand-200)",
            }}
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? fleetItems
      : fleetItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Page header */}
      <div
        className="pt-28 pb-14 px-4 text-center"
        style={{ background: "linear-gradient(to bottom, var(--ocean-950), var(--ocean-800))" }}
      >
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
          style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold-300)" }}
        >
          Our Fleet
        </span>
        <h1 className="font-serif-display text-4xl md:text-6xl font-extrabold mb-4 text-white">
          Choose Your Adventure
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          From leisurely sunset sails to heart-pumping deep-sea fishing, we have
          the perfect vessel and experience for every group.
        </p>
      </div>

      {/* Filter tabs */}
      <div
        className="sticky top-14 z-30 py-3 px-4"
        style={{ background: "var(--sand-50)", borderBottom: "1px solid var(--sand-200)" }}
      >
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeCategory === id ? "var(--gold-500)" : "var(--sand-100)",
                color: activeCategory === id ? "white" : "var(--navy)",
                border: "1px solid",
                borderColor: activeCategory === id ? "var(--gold-500)" : "var(--sand-200)",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet grid */}
      <div className="py-14 px-4" style={{ background: "var(--sand-50)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((item) => (
              <FleetCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-20" style={{ color: "var(--mid)" }}>
              No items in this category yet.
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="py-14 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, var(--ocean-900) 0%, var(--ocean-800) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <h2 className="font-serif-display text-2xl font-extrabold mb-3 text-white">
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
          We offer fully custom charters and can tailor any experience to your group.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-xl"
          style={{ background: "white", color: "var(--gold-700)" }}
        >
          Contact Us <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
