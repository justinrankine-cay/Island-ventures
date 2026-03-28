export interface FleetItem {
  id: string;
  name: string;
  category: "boat" | "transport" | "water-sport";
  tagline: string;
  description: string;
  capacity: number;
  duration?: string;
  priceFrom: number;
  features: string[];
  image: string;
  badge?: string;
}

export const fleetItems: FleetItem[] = [
  {
    id: "sea-breeze",
    name: "Sea Breeze",
    category: "boat",
    tagline: "50ft Luxury Catamaran",
    description:
      "Our flagship catamaran offers unmatched stability and space. Perfect for sunset cruises, snorkeling excursions, and private island getaways. Equipped with a full wet bar, shaded lounge deck, and professional crew.",
    capacity: 20,
    priceFrom: 850,
    features: ["Full wet bar", "Shaded lounge", "Snorkeling gear", "Professional crew", "Bluetooth audio", "Fresh towels & sunscreen"],
    image: "/images/fleet/catamaran.jpg",
    badge: "Most Popular",
  },
  {
    id: "blue-marlin",
    name: "Blue Marlin",
    category: "boat",
    tagline: "38ft Sport Fishing Boat",
    description:
      "Built for serious anglers. Tackle deep-sea fishing with top-of-the-line equipment, live bait wells, and an experienced captain who knows every great fishing spot in Cayman waters.",
    capacity: 8,
    priceFrom: 650,
    features: ["Deep-sea fishing gear", "Live bait wells", "Fish cleaning station", "Ice coolers", "Licensed captain", "Catch & release or keep"],
    image: "/images/fleet/sport-fishing.jpg",
  },
  {
    id: "coral-runner",
    name: "Coral Runner",
    category: "boat",
    tagline: "28ft Speed Boat",
    description:
      "Fast, nimble, and thrilling. The Coral Runner is ideal for island-hopping, snorkeling trips to Stingray City, or a quick sunset tour around the island.",
    capacity: 10,
    priceFrom: 450,
    features: ["High-speed performance", "Snorkeling gear", "Cooler & ice", "Music system", "Experienced captain"],
    image: "/images/fleet/speedboat.jpg",
  },
  {
    id: "sunset-dream",
    name: "Sunset Dream",
    category: "boat",
    tagline: "42ft Luxury Motor Yacht",
    description:
      "Experience the ultimate in private yachting. The Sunset Dream features a full cabin, gourmet catering options, and a spacious sundeck — perfect for romantic evenings or corporate entertaining.",
    capacity: 12,
    priceFrom: 1100,
    features: ["Full cabin suite", "Gourmet catering", "Air conditioning", "Premium sound system", "Private chef available", "Catering options"],
    image: "/images/fleet/motor-yacht.jpg",
    badge: "Premium",
  },
  {
    id: "island-hopper",
    name: "Island Hopper",
    category: "transport",
    tagline: "Luxury Island Transport Van",
    description:
      "Arrive in comfort and style. Our air-conditioned luxury transport van seats up to 12 and is perfect for airport transfers, resort pickups, or guided island tours.",
    capacity: 12,
    priceFrom: 120,
    features: ["Air conditioning", "Leather seating", "Airport transfers", "Island tours", "Wi-Fi", "Bottled water provided"],
    image: "/images/fleet/transport-van.jpg",
  },
  {
    id: "reef-rider",
    name: "Reef Rider",
    category: "water-sport",
    tagline: "Jet Ski & Water Sport Rentals",
    description:
      "Get your adrenaline fix with our range of water sport rentals including jet skis, paddleboards, kayaks, and more. Ideal for beach days or adding excitement to your charter.",
    capacity: 2,
    priceFrom: 80,
    features: ["Jet ski rentals", "Paddleboard rentals", "Kayak rentals", "Safety equipment", "Instructor available", "Hourly or half-day rates"],
    image: "/images/fleet/water-sports.jpg",
  },
];
