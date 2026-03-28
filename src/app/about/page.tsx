import Link from "next/link";
import { ArrowRight, Anchor, Heart, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Anchor,
    title: "Born on the Water",
    body: "Our founders grew up fishing and sailing these waters. That deep local knowledge is in every charter we run.",
  },
  {
    icon: Heart,
    title: "Guest First",
    body: "We obsess over the details so you can relax. From arrival to departure, everything is taken care of.",
  },
  {
    icon: Leaf,
    title: "Ocean Stewards",
    body: "We operate with a zero-waste policy, use eco-friendly sunscreen on all charters, and support reef conservation.",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    body: "All captains hold current USCG licenses. All vessels are fully insured and regularly inspected.",
  },
];

const team = [
  {
    name: "Captain Marcus Reid",
    role: "Founder & Head Captain",
    bio: "Born and raised in Grand Cayman, Marcus has over 20 years on the water and knows every reef, sandbar, and hidden cove.",
  },
  {
    name: "Sasha Thompson",
    role: "Operations Manager",
    bio: "Sasha keeps Island Ventures running like clockwork — from scheduling to ensuring every charter exceeds expectations.",
  },
  {
    name: "Diego Morales",
    role: "Lead Mate & Dive Instructor",
    bio: "PADI certified and passionate about marine life, Diego turns every snorkel stop into a genuine underwater adventure.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="pt-28 pb-20 px-4"
        style={{ background: "linear-gradient(to bottom, var(--sage-600), var(--sage-500))" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--sage-200)" }}>
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Built by Caymanians,
            <br />
            <span style={{ color: "var(--sand-200)" }}>for the World</span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Island Ventures was born from a simple belief: the Cayman Islands deserve to be
            shared. We started with a single boat and a passion for showing visitors the
            real Cayman — the hidden coves, the wild dolphins, the midnight reefs, and the
            sunsets that stop your heart.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 px-4" style={{ background: "var(--sand-50)" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, var(--sand-100) 0%, var(--sand-200) 100%)",
              border: "1px solid var(--sand-300)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: "var(--sage-500)" }}>
              Our Mission
            </p>
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed" style={{ color: "var(--dark-brown)" }}>
              &ldquo;To connect every guest with the raw, untouched beauty of the
              Cayman Islands — safely, sustainably, and unforgettably.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4" style={{ background: "var(--sand-100)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark-brown)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: "white", border: "1px solid var(--sand-200)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--sage-100)" }}
                >
                  <Icon size={22} style={{ color: "var(--sage-500)" }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: "var(--dark-brown)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--medium-brown)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4" style={{ background: "var(--sand-50)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--dark-brown)" }}>
              Meet the Crew
            </h2>
            <p className="text-sm" style={{ color: "var(--medium-brown)" }}>
              Local experts who live and breathe the Cayman Islands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--sand-200)" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="h-44 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--sage-400) 0%, var(--sage-600) 100%)" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold"
                    style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-0.5" style={{ color: "var(--dark-brown)" }}>{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--sage-500)" }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--medium-brown)" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(135deg, var(--sage-600) 0%, var(--sage-500) 100%)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Charters Completed" },
            { value: "98%", label: "5-Star Reviews" },
            { value: "6", label: "Vessels in Fleet" },
            { value: "10+", label: "Years Operating" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-white mb-1">{value}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: "var(--sand-50)" }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-brown)" }}>
          Ready to Experience the Caymans?
        </h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--medium-brown)" }}>
          Let us show you why guests from around the world call Island Ventures
          the highlight of their trip.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            Book a Charter <ArrowRight size={14} />
          </Link>
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ border: "2px solid var(--sage-400)", color: "var(--sage-500)" }}
          >
            Explore Our Fleet
          </Link>
        </div>
      </section>
    </>
  );
}
