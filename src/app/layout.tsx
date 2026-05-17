import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cayman Exclusive Charters | Private Boat Charters & Tours",
  description:
    "Experience the best of the Cayman Islands with Cayman Exclusive Charters. Private boat charters, snorkeling tours, sunset cruises, and deep-sea fishing adventures in Grand Cayman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{ background: "var(--sand-50)", color: "var(--navy)" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
