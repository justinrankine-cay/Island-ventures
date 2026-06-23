import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Plan Your Cayman Islands Charter | Island Ventures",
  description:
    "Get in touch with Island Ventures to plan your perfect Cayman Islands charter experience. Instant AI-powered inquiry response — our team follows up within the hour.",
  keywords: [
    "contact Island Ventures",
    "book Cayman Islands charter",
    "Grand Cayman boat charter inquiry",
    "Cayman Islands private charter booking",
    "Grand Cayman boat rental contact",
  ],
  openGraph: {
    title: "Contact Island Ventures | Cayman Islands Charter Experts",
    description:
      "Plan your Grand Cayman boat charter, fishing trip, or water sports experience. Get an instant AI response — our team follows up within the hour.",
    url: "https://islandventures.ky/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://islandventures.ky/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
