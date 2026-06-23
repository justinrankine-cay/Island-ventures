import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://islandventures.ky";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Island Ventures | Exclusive Cayman Islands Charters & Water Sports",
    template: "%s | Island Ventures Cayman",
  },
  description:
    "Island Ventures offers exclusive private boat charters, luxury yacht rentals, deep-sea fishing, snorkeling tours, Stingray City trips, and water sports in Grand Cayman, Cayman Islands.",
  keywords: [
    "Cayman Islands boat charter",
    "Grand Cayman exclusive charters",
    "private yacht charter Cayman",
    "luxury catamaran Cayman Islands",
    "deep sea fishing Grand Cayman",
    "Stingray City tour",
    "Grand Cayman snorkeling",
    "sunset cruise Cayman Islands",
    "jet ski rental Grand Cayman",
    "island hopping Cayman",
    "7 Mile Beach boat tour",
    "Cayman Islands water sports",
    "Grand Cayman fishing trips",
    "private charter Grand Cayman",
    "Island Ventures Cayman",
  ],
  authors: [{ name: "Island Ventures", url: SITE_URL }],
  creator: "Island Ventures",
  publisher: "Island Ventures",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Island Ventures",
    title: "Island Ventures | Exclusive Cayman Islands Charters & Water Sports",
    description:
      "Private boat charters, luxury yacht rentals, deep-sea fishing, snorkeling tours & water sports in Grand Cayman. Book your exclusive Cayman Islands adventure today.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Island Ventures — Exclusive Cayman Islands Charters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Island Ventures | Exclusive Cayman Islands Charters",
    description:
      "Private boat charters, deep-sea fishing, luxury yachts & water sports in Grand Cayman. Book online today.",
    images: ["/images/og-image.jpg"],
    creator: "@islandventuresKY",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "replace-with-your-google-search-console-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction"],
    name: "Island Ventures",
    description:
      "Exclusive private boat charters, luxury yacht rentals, deep-sea fishing, snorkeling tours, Stingray City excursions, and water sports rentals in Grand Cayman, Cayman Islands.",
    url: SITE_URL,
    telephone: "+13451234567",
    email: "info@islandventures.ky",
    priceRange: "$$–$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "George Town",
      addressRegion: "Grand Cayman",
      addressCountry: "KY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3133,
      longitude: -81.2546,
    },
    sameAs: [
      "https://www.instagram.com/islandventures.ky",
      "https://www.facebook.com/islandventuresKY",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cayman Islands Charter & Water Sport Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Catamaran Charter — Sea Breeze",
            description:
              "50ft luxury catamaran for sunset cruises, snorkeling excursions, and private island getaways in Grand Cayman. Up to 20 guests.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "850",
            priceCurrency: "USD",
            minPrice: "850",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep-Sea Sport Fishing Charter — Blue Marlin",
            description:
              "38ft sport fishing boat for deep-sea fishing in Cayman waters. Professional licensed captain, full gear included. Up to 8 guests.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "650",
            priceCurrency: "USD",
            minPrice: "650",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stingray City & Island-Hopping Charter — Coral Runner",
            description:
              "28ft speed boat for Stingray City tours, island hopping, and snorkeling trips around Grand Cayman. Up to 10 guests.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "450",
            priceCurrency: "USD",
            minPrice: "450",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Luxury Yacht Charter — Sunset Dream",
            description:
              "42ft luxury motor yacht for private romantic evenings and corporate events in Grand Cayman. Gourmet catering available. Up to 12 guests.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1100",
            priceCurrency: "USD",
            minPrice: "1100",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cayman Islands Airport Transfer & Island Tours — Island Hopper",
            description:
              "Luxury air-conditioned transport van for Grand Cayman airport transfers, resort pickups, and guided island tours. Up to 12 guests.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "120",
            priceCurrency: "USD",
            minPrice: "120",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jet Ski & Water Sport Rentals — Reef Rider",
            description:
              "Jet ski, paddleboard, and kayak rentals in Grand Cayman. Safety equipment and instructor available. Hourly or half-day rates.",
            provider: { "@type": "LocalBusiness", name: "Island Ventures" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "80",
            priceCurrency: "USD",
            minPrice: "80",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: "var(--sand-50)", color: "var(--dark-brown)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
