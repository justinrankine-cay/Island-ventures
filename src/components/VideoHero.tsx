"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(44,26,14,0.35) 0%, rgba(44,26,14,0.15) 40%, rgba(44,26,14,0.55) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p
          className="text-sm uppercase tracking-[0.3em] font-medium mb-4 animate-fade-in"
          style={{ color: "var(--sand-200)", animationDelay: "0.2s", opacity: 0 }}
        >
          Grand Cayman &bull; Cayman Islands
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{
            color: "white",
            textShadow: "0 2px 20px rgba(44,26,14,0.5)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          Adventure Awaits
          <br />
          <span style={{ color: "var(--sand-200)" }}>on the Water</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up"
          style={{
            color: "rgba(255,255,255,0.88)",
            textShadow: "0 1px 6px rgba(44,26,14,0.5)",
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          Private boat charters, island transport, and bespoke ocean experiences
          in the crystal-clear waters of the Cayman Islands.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <Link
            href="/booking"
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            Book Your Charter
          </Link>
          <Link
            href="/fleet"
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: "rgba(255,255,255,0.7)",
              color: "white",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            Explore Our Fleet
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
          Scroll
        </p>
        <ChevronDown size={18} color="rgba(255,255,255,0.6)" />
      </div>
    </section>
  );
}
