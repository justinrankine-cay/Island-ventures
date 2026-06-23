import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Book a Charter | Grand Cayman Boat & Water Sports Reservations | Island Ventures",
  description:
    "Reserve your Grand Cayman charter online in minutes. Choose from luxury yachts, catamarans, sport fishing boats, and water sports. Secure, instant booking — no deposit required.",
  keywords: [
    "book Grand Cayman charter",
    "Cayman Islands boat reservation",
    "online charter booking Cayman",
    "Grand Cayman yacht booking",
    "Cayman Islands fishing trip reservation",
    "private boat charter Grand Cayman",
  ],
  openGraph: {
    title: "Book Your Cayman Islands Charter | Island Ventures",
    description:
      "Reserve a luxury catamaran, sport fishing boat, or water sports experience in Grand Cayman. Easy online booking, instant confirmation.",
    url: "https://islandventures.ky/booking",
    type: "website",
  },
  alternates: {
    canonical: "https://islandventures.ky/booking",
  },
};

export default function BookingPage() {
  return <BookingPageClient />;
}
