import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    emoji: "⛵",
    title: "Private Boat Charters",
    desc: "Full-day or half-day private charters. Your boat, your schedule — total exclusivity.",
    href: "/fleet",
    color: "var(--ocean-700)",
    light: "var(--ocean-50)",
  },
  {
    emoji: "🐠",
    title: "Stingray City Tours",
    desc: "Swim with wild stingrays at the world-famous sandbar in the North Sound.",
    href: "/fleet",
    color: "var(--gold-600)",
    light: "var(--gold-50)",
  },
  {
    emoji: "🌅",
    title: "Sunset Cruises",
    desc: "Watch the sun melt into the Caribbean from the deck of your private yacht.",
    href: "/fleet",
    color: "var(--gold-600)",
    light: "var(--gold-100)",
  },
  {
    emoji: "🎣",
    title: "Deep-Sea Fishing",
    desc: "Chase blue marlin, mahi-mahi, and wahoo with an experienced Cayman captain.",
    href: "/fleet",
    color: "var(--ocean-800)",
    light: "var(--ocean-50)",
  },
  {
    emoji: "🤿",
    title: "Snorkeling Adventures",
    desc: "Explore vibrant coral reefs, sea turtles, and underwater wonders around the island.",
    href: "/fleet",
    color: "var(--gold-500)",
    light: "var(--gold-50)",
  },
  {
    emoji: "🏝️",
    title: "Island Transfers",
    desc: "Luxury air-conditioned transport to and from the airport, cruise terminals, and resorts.",
    href: "/fleet",
    color: "var(--mid)",
    light: "var(--sand-100)",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-4" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "var(--teal-50)", color: "var(--teal-600)" }}
          >
            What We Offer
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Experiences Made for{" "}
            <span style={{ color: "var(--teal-500)" }}>the Caymans</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--mid)" }}>
            From adrenaline-fuelled fishing to serene sunset sails, every charter is
            fully customised around your group.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ emoji, title, desc, href, color, light }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: light, border: `1px solid ${light}` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: color }}
              >
                {emoji}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5" style={{ color: "var(--navy)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
                  {desc}
                </p>
              </div>
              <div
                className="flex items-center gap-1 text-xs font-semibold mt-auto transition-all group-hover:gap-2"
                style={{ color }}
              >
                Learn More <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
