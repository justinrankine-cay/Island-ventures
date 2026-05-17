"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

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
  const transparent = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent ? "py-4" : "py-2 shadow-lg"
      }`}
      style={{
        background: transparent
          ? "transparent"
          : "rgba(7,24,40,0.97)",
        backdropFilter: transparent ? "none" : "blur(10px)",
        borderBottom: transparent ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="Cayman Exclusive Charters"
            className="h-10 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  active ? "font-semibold" : ""
                }`}
                style={{ color: active ? "var(--gold-300)" : "rgba(255,255,255,0.85)" }}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ background: "var(--gold-400)" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+13455261234"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105"
            style={{ color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Phone size={12} />
            +1 (345) 526-1234
          </a>
          <Link
            href="/booking"
            className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--gold-500)", color: "white" }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 px-5 flex flex-col gap-3"
          style={{ background: "var(--ocean-900)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-2 border-b"
              style={{
                color: pathname === href ? "var(--gold-300)" : "rgba(255,255,255,0.85)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+13455261234"
            className="flex items-center gap-2 text-sm py-2"
            style={{ color: "var(--gold-300)" }}
          >
            <Phone size={14} /> +1 (345) 526-1234
          </a>
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-1 px-5 py-3 rounded-full text-center font-bold"
            style={{ background: "var(--gold-500)", color: "white" }}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
