import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Michael T.",
    location: "Miami, FL",
    text: "We booked the Sea Breeze catamaran for our anniversary and it was absolutely magical. The crew was attentive, the water was crystal clear, and Stingray City was a dream. Will be back next year!",
    rating: 5,
    trip: "Sunset Catamaran Charter",
  },
  {
    name: "The Johnson Family",
    location: "Toronto, Canada",
    text: "Island Ventures made our family vacation unforgettable. The kids loved the snorkeling and the captain knew exactly where to find sea turtles. Booking was super easy and the AI chat responded instantly!",
    rating: 5,
    trip: "Family Snorkel Adventure",
  },
  {
    name: "Robert K.",
    location: "New York, NY",
    text: "Came for a corporate retreat and Island Ventures knocked it out of the park. Professional, punctual, and the Sunset Dream yacht was stunning. Our clients were impressed.",
    rating: 5,
    trip: "Corporate Yacht Charter",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--sand-100)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: "var(--sage-500)" }}
          >
            What Guests Say
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--dark-brown)" }}
          >
            Stories from the Sea
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
              style={{ background: "white", border: "1px solid var(--sand-200)" }}
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="var(--sand-400)" color="var(--sand-400)" />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--medium-brown)" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto pt-3" style={{ borderTop: "1px solid var(--sand-100)" }}>
                <p className="font-semibold text-sm" style={{ color: "var(--dark-brown)" }}>
                  {review.name}
                </p>
                <p className="text-xs" style={{ color: "var(--sage-500)" }}>
                  {review.location} &bull; {review.trip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
