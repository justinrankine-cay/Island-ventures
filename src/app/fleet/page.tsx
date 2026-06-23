import type { Metadata } from "next";
import FleetPageClient from "./FleetPageClient";

export const metadata: Metadata = {
  title: "Cayman Islands Boat Charters & Water Sports | Island Ventures Fleet",
  description:
    "Browse our exclusive fleet of Grand Cayman charters: luxury catamarans, sport fishing boats, private motor yachts, jet ski rentals, and island transport. Book online today.",
  keywords: [
    "Cayman Islands boat charter",
    "Grand Cayman luxury catamaran",
    "Grand Cayman fishing charter",
    "Stingray City tour Cayman",
    "private yacht charter Grand Cayman",
    "jet ski rental Cayman Islands",
    "snorkeling charter Cayman",
    "sunset cruise Grand Cayman",
    "island hopping Cayman",
    "Cayman Islands water sports",
    "sport fishing Grand Cayman",
    "7 Mile Beach boat tour",
  ],
  openGraph: {
    title: "Cayman Islands Exclusive Boat Charters & Water Sports | Island Ventures",
    description:
      "Luxury catamarans, sport fishing, private yachts, jet skis & more — choose your adventure in the Cayman Islands. Instant online booking.",
    url: "https://islandventures.ky/fleet",
    type: "website",
  },
  alternates: {
    canonical: "https://islandventures.ky/fleet",
  },
};

export default function FleetPage() {
  return <FleetPageClient />;
}
