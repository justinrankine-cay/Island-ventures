import { Shield, Star, Compass, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safety First",
    body:
      "All our vessels are fully certified and inspected. Our captains hold current USCG licenses and first-aid certifications.",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    body:
      "From the moment you book to the moment you step ashore, we deliver five-star service and attention to every detail.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    body:
      "Born and raised in the Caymans, our crew knows every hidden reef, sandbar, and sunset spot that maps don't show.",
  },
  {
    icon: Users,
    title: "Tailored for You",
    body:
      "No cookie-cutter trips. Every charter is customized to your group's preferences, pace, and sense of adventure.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, var(--sage-600) 0%, var(--sage-500) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: "var(--sage-200)" }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "white" }}
          >
            The Island Ventures Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl p-7 flex flex-col items-start gap-4 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Icon size={22} color="white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "white" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
