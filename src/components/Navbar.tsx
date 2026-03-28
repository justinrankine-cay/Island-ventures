"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Anchor } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "py-3 shadow-md"
          : "py-5"
      }`}
      style={{
        background:
          scrolled || !isHome
            ? "rgba(253,250,244,0.97)"
            : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(8px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid #EDD9B0" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--sage-400)" }}
          >
            <Anchor size={18} color="white" strokeWidth={2} />
          </div>
          <span
            className="text-lg font-bold tracking-wide"
            style={{
              color: scrolled || !isHome ? "var(--dark-brown)" : "white",
              textShadow: !scrolled && isHome ? "0 1px 3px rgba(0,0,0,0.4)" : "none",
            }}
          >
            Island Ventures
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  active ? "font-semibold" : ""
                }`}
                style={{
                  color:
                    scrolled || !isHome
                      ? active
                        ? "var(--sage-500)"
                        : "var(--dark-brown)"
                      : "white",
                  textShadow:
                    !scrolled && isHome ? "0 1px 3px rgba(0,0,0,0.4)" : "none",
                }}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ background: "var(--sage-400)" }}
                />
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "var(--sage-400)",
              color: "white",
            }}
          >
            Book a Charter
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: scrolled || !isHome ? "var(--dark-brown)" : "white" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-xl py-4 px-6 flex flex-col gap-4"
          style={{ background: "var(--sand-50)", borderTop: "1px solid #EDD9B0" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-1 border-b"
              style={{
                color: pathname === href ? "var(--sage-500)" : "var(--dark-brown)",
                borderColor: "var(--sand-200)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full text-center font-semibold"
            style={{ background: "var(--sage-400)", color: "white" }}
          >
            Book a Charter
          </Link>
        </div>
      )}
    </header>
  );
}
