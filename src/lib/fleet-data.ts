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
    id: "grand-mariner",
    name: "Grand Mariner",
    category: "boat",
    tagline: "55ft Luxury Catamaran",
    description:
      "Our flagship catamaran delivers unrivalled stability and space on the water. Perfect for Stingray City trips, snorkelling excursions, and private sunset parties. Features a full wet bar, shaded lounge deck, and a professional crew who know every reef around the island.",
    capacity: 22,
    priceFrom: 950,
    features: ["Full wet bar", "Shaded lounge deck", "Snorkelling gear", "Pro crew", "Bluetooth audio", "Fresh towels & reef-safe sunscreen"],
    image: "/images/fleet/catamaran.jpg",
    badge: "Most Popular",
  },
  {
    id: "blue-marlin",
    name: "Blue Marlin",
    category: "boat",
    tagline: "40ft Sport Fishing Boat",
    description:
      "Built for serious anglers. Chase blue marlin, mahi-mahi, and wahoo with top-of-the-line tackle, live bait wells, and an experienced captain who knows every productive spot in Cayman waters.",
    capacity: 8,
    priceFrom: 700,
    features: ["Heavy-duty tackle", "Live bait wells", "Fish cleaning station", "Ice coolers", "Licensed captain", "Catch & release or keep"],
    image: "/images/fleet/sport-fishing.jpg",
  },
  {
    id: "stingray-runner",
    name: "Stingray Runner",
    category: "boat",
    tagline: "32ft Fast Powerboat",
    description:
      "Fast, nimble, and thrilling. The Stingray Runner is the go-to vessel for Stingray City tours, reef snorkelling, and island-hopping adventures around Grand Cayman.",
    capacity: 12,
    priceFrom: 500,
    features: ["High-speed performance", "Snorkelling gear", "Cooler & ice", "Music system", "Cayman-born captain"],
    image: "/images/fleet/speedboat.jpg",
  },
  {
    id: "sunset-yachts",
    name: "Sunset Exclusive",
    category: "boat",
    tagline: "45ft Luxury Motor Yacht",
    description:
      "The ultimate in private yachting. The Sunset Exclusive features a full cabin, gourmet catering options, a spacious sundeck, and a private chef available on request — perfect for romantic escapes or corporate entertaining.",
    capacity: 12,
    priceFrom: 1250,
    features: ["Full cabin suite", "Gourmet catering", "Air conditioning", "Premium sound system", "Private chef available", "Champagne service"],
    image: "/images/fleet/motor-yacht.jpg",
    badge: "Premium",
  },
  {
    id: "island-express",
    name: "Island Express",
    category: "transport",
    tagline: "Luxury Island Transfer Van",
    description:
      "Arrive in comfort and style. Our air-conditioned luxury van seats up to 12 and is perfect for airport transfers, cruise terminal pickups, resort runs, and guided island tours.",
    capacity: 12,
    priceFrom: 120,
    features: ["Air conditioning", "Leather seating", "Airport & cruise transfers", "Island tours", "Wi-Fi", "Bottled water provided"],
    image: "/images/fleet/transport-van.jpg",
  },
  {
    id: "reef-thrills",
    name: "Reef Thrills",
    category: "water-sport",
    tagline: "Jet Ski & Water Sport Rentals",
    description:
      "Get your adrenaline fix with our range of water sport rentals. Jet skis, paddleboards, kayaks, and more — ideal for beach days or adding extra excitement to any charter.",
    capacity: 2,
    priceFrom: 85,
    features: ["Jet ski rentals", "Paddleboard rentals", "Kayak rentals", "Safety equipment", "Instructor available", "Hourly or half-day rates"],
    image: "/images/fleet/water-sports.jpg",
  },
];
