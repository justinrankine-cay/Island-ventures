"use client";

import { useState } from "react";
import Link from "next/link";
import { fleetItems, FleetItem } from "@/lib/fleet-data";
import { Users, DollarSign, Check, ArrowRight, Anchor, Car, Waves } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Anchor },
  { id: "boat", label: "Boats", icon: Anchor },
  { id: "transport", label: "Transport", icon: Car },
  { id: "water-sport", label: "Water Sports", icon: Waves },
];

function FleetCard({ item }: { item: FleetItem }) {
  const gradients: Record<string, string> = {
    "sea-breeze": "linear-gradient(135deg, #6A8E62 0%, #3A5235 100%)",
    "blue-marlin": "linear-gradient(135deg, #4A7A8A 0%, #2A4A5A 100%)",
    "coral-runner": "linear-gradient(135deg, #8A6A4A 0%, #5A3A2A 100%)",
    "sunset-dream": "linear-gradient(135deg, #8A7A4A 0%, #5A4A2A 100%)",
    "island-hopper": "linear-gradient(135deg, #6A8E62 0%, #4E6F47 100%)",
    "reef-rider": "linear-gradient(135deg, #4A7A8A 0%, #6A8E62 100%)",
  };

  return (
    <div
      id={item.id}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ background: "white", border: "1px solid var(--sand-200)" }}
    >
      {/* Hero image area */}
      <div
        className="h-56 flex items-end p-5 relative"
        style={{ background: gradients[item.id] ?? "var(--sage-500)" }}
      >
        {item.badge && (
          <span
            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "var(--sand-200)", color: "var(--dark-brown)" }}
          >
            {item.badge}
          </span>
        )}
        <div>
          <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
            {item.category === "boat" ? "Charter Vessel" : item.category === "transport" ? "Island Transport" : "Water Sport"}
          </p>
          <h3 className="text-2xl font-bold text-white">{item.name}</h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{item.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--medium-brown)" }}>
          {item.description}
        </p>

        {/* Stats */}
        <div className="flex gap-5 mb-5 pb-5" style={{ borderBottom: "1px solid var(--sand-100)" }}>
          <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--sage-500)" }}>
            <Users size={15} />
            <span>Up to <strong>{item.capacity}</strong> guests</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--dark-brown)" }}>
            <DollarSign size={15} style={{ color: "var(--sage-500)" }} />
            <span>From <strong>${item.priceFrom}</strong></span>
          </div>
        </div>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
          {item.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--medium-brown)" }}>
              <Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--sage-400)" }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          <Link
            href={`/booking?vessel=${item.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-md"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            Book Now <ArrowRight size={14} />
          </Link>
          <Link
            href={`/contact?vessel=${item.name}`}
            className="px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--sand-100)",
              color: "var(--dark-brown)",
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

export default function FleetPageClient() {
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
        style={{
          background: "linear-gradient(to bottom, var(--sage-600), var(--sage-500))",
        }}
      >
        <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--sage-200)" }}>
          Our Fleet
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Choose Your Adventure
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
          From leisurely sunset sails to heart-pumping water sports, we have the
          perfect vessel and experience for every group.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 py-3 px-4" style={{ background: "var(--sand-50)", borderBottom: "1px solid var(--sand-200)" }}>
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === id ? "var(--sage-400)" : "var(--sand-100)",
                color: activeCategory === id ? "white" : "var(--dark-brown)",
                border: "1px solid",
                borderColor: activeCategory === id ? "var(--sage-400)" : "var(--sand-200)",
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
            <p className="text-center py-20" style={{ color: "var(--medium-brown)" }}>
              No items in this category yet.
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="py-14 px-4 text-center"
        style={{ background: "var(--sand-100)", borderTop: "1px solid var(--sand-200)" }}
      >
        <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--dark-brown)" }}>
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--medium-brown)" }}>
          We offer custom charters and can tailor any experience to your needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-md"
          style={{ background: "var(--sage-400)", color: "white" }}
        >
          Contact Us <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
