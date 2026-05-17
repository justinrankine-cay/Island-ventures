"use client";

import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Video / ocean gradient background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      />

      {/* Deep ocean overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,24,40,0.55) 0%, rgba(7,24,40,0.25) 45%, rgba(7,24,40,0.70) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in"
          style={{
            background: "rgba(13,150,136,0.25)",
            border: "1px solid rgba(78,207,190,0.5)",
            color: "var(--teal-300)",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          Grand Cayman, Cayman Islands
        </div>

        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-5 animate-fade-in-up"
          style={{
            color: "white",
            textShadow: "0 2px 24px rgba(7,24,40,0.6)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          Exclusive Charters
          <br />
          <span style={{ color: "var(--teal-300)" }}>Built for You</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mb-3 leading-relaxed animate-fade-in-up"
          style={{
            color: "rgba(255,255,255,0.90)",
            textShadow: "0 1px 8px rgba(7,24,40,0.5)",
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          Private boat charters, Stingray City tours, sunset cruises &amp; deep-sea fishing
          in the crystal-clear waters of Grand Cayman.
        </p>

        {/* Star row */}
        <div
          className="flex items-center gap-1.5 mb-8 animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: "var(--gold-400)", fontSize: "18px" }}>★</span>
          ))}
          <span className="text-sm ml-1" style={{ color: "rgba(255,255,255,0.75)" }}>
            5-Star Rated · 200+ Reviews
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <Link
            href="/booking"
            className="px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "var(--teal-500)", color: "white" }}
          >
            Book Your Charter
          </Link>
          <a
            href="tel:+13455261234"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 transition-all hover:scale-105"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "white",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
          Scroll
        </p>
        <ChevronDown size={18} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}
