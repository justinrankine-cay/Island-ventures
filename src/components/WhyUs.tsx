import { Shield, Star, Compass, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safety Certified",
    body: "All vessels are fully CIAA-certified and inspected. Every captain holds a current maritime licence and first-aid certification.",
  },
  {
    icon: Star,
    title: "5-Star Service",
    body: "200+ five-star reviews. From the moment you book to the moment you step ashore, we handle every detail.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    body: "Born and raised in the Caymans, our crew knows every hidden reef, sandbar, and sunset vantage point that maps don't show.",
  },
  {
    icon: Users,
    title: "Fully Customised",
    body: "No cookie-cutter trips. Your charter, your itinerary — tailored around your group's pace and sense of adventure.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(135deg, var(--ocean-950) 0%, var(--ocean-800) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(78,207,190,0.15)", color: "var(--teal-300)" }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "white" }}
          >
            The Exclusive Difference
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            We don&apos;t just rent boats — we craft memories you&apos;ll carry home from the Caymans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl p-7 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--teal-600)" }}
              >
                <Icon size={22} color="white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { value: "500+", label: "Charters Completed" },
            { value: "200+", label: "5-Star Reviews" },
            { value: "6",    label: "Vessels in Fleet" },
            { value: "10+",  label: "Years in the Caymans" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "var(--teal-300)" }}>
                {value}
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
