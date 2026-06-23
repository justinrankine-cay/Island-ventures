import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import FeaturedFleet from "@/components/FeaturedFleet";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Island Ventures | #1 Exclusive Cayman Islands Charters & Water Sports",
  description:
    "Grand Cayman's premier private charter company. Luxury catamarans, deep-sea fishing, Stingray City tours, sunset cruises, jet ski rentals & more. 500+ 5-star charters. Book online today.",
  keywords: [
    "Cayman Islands exclusive charters",
    "Grand Cayman private boat charter",
    "best boat charter Cayman Islands",
    "Stingray City tours Grand Cayman",
    "luxury yacht charter Cayman",
    "deep sea fishing Grand Cayman",
    "snorkeling tours Cayman Islands",
    "sunset cruise Grand Cayman",
    "7 Mile Beach charters",
    "Grand Cayman water sports",
  ],
  openGraph: {
    title: "Island Ventures | Grand Cayman's Premier Exclusive Charter Company",
    description:
      "500+ 5-star charters in the Cayman Islands. Private boats, luxury yachts, deep-sea fishing, Stingray City, snorkeling & water sports. Book your exclusive adventure now.",
    url: "https://islandventures.ky",
  },
  alternates: {
    canonical: "https://islandventures.ky",
  },
};

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <FeaturedFleet />
      <WhyUs />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
