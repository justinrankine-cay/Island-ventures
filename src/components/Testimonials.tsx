const reviews = [
  {
    name: "Sarah & Michael T.",
    location: "Miami, FL",
    text: "We booked a private sunset charter for our anniversary and it was absolutely magical. The crew had champagne waiting on deck and knew every hidden cove around the island. 10/10 would book again.",
    rating: 5,
    trip: "Private Sunset Charter",
    avatar: "SM",
  },
  {
    name: "The Johnson Family",
    location: "Toronto, Canada",
    text: "Stingray City was a bucket-list moment for the whole family. The captain was amazing with the kids and the boat was spotless. Booking was simple and the team responded to every question in minutes.",
    rating: 5,
    trip: "Stingray City Tour",
    avatar: "JF",
  },
  {
    name: "Robert K.",
    location: "New York, NY",
    text: "Brought 12 colleagues for a corporate team day. Professional, punctual, and the yacht was stunning. Our clients were genuinely impressed — several have already re-booked on their own time.",
    rating: 5,
    trip: "Corporate Yacht Charter",
    avatar: "RK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--sand-100)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: "var(--gold-100)", color: "var(--gold-600)" }}
          >
            Guest Reviews
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: "var(--navy)" }}
          >
            What Our Guests Say
          </h2>
          {/* Star aggregate */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "var(--gold-500)", fontSize: "20px" }}>★</span>
            ))}
            <span className="ml-2 text-sm font-semibold" style={{ color: "var(--mid)" }}>
              5.0 · 200+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all"
              style={{ background: "white", border: "1px solid var(--sand-200)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold-500)", fontSize: "16px" }}>★</span>
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--mid)" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid var(--sand-100)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: "var(--ocean-700)" }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--navy)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--teal-600)" }}>
                    {review.location} · {review.trip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
