import Link from "next/link";
import { Anchor, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark-brown)", color: "var(--sand-100)" }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "var(--sage-400)" }}
              >
                <Anchor size={18} color="white" />
              </div>
              <span className="text-xl font-bold tracking-wide" style={{ color: "var(--sand-100)" }}>
                Island Ventures
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--sand-300)" }}>
              Your premier charter and transport company in the Cayman Islands.
              Experience the beauty of our crystal-clear waters with Island Ventures.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/islandventures.ky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-all hover:scale-105"
                style={{ background: "var(--sage-600)", color: "var(--sand-200)" }}
              >
                <ExternalLink size={12} /> Instagram
              </a>
              <a
                href="https://facebook.com/islandventuresKY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-all hover:scale-105"
                style={{ background: "var(--sage-600)", color: "var(--sand-200)" }}
              >
                <ExternalLink size={12} /> Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--sage-200)" }}>
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/fleet", label: "Our Fleet" },
                { href: "/booking", label: "Book a Charter" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: "var(--sand-300)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--sage-200)" }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: "var(--sand-300)" }}>
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--sage-300)" }} />
                <span>Grand Cayman, Cayman Islands</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--sand-300)" }}>
                <Phone size={14} style={{ color: "var(--sage-300)" }} />
                <a href="tel:+13451234567" className="hover:underline">+1 (345) 123-4567</a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--sand-300)" }}>
                <Mail size={14} style={{ color: "var(--sage-300)" }} />
                <a href="mailto:info@islandventures.ky" className="hover:underline">
                  info@islandventures.ky
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "var(--sand-400)" }}
        >
          <p>&copy; {new Date().getFullYear()} Island Ventures. All rights reserved.</p>
          <p>Islandventures.ky &mdash; Grand Cayman, Cayman Islands</p>
        </div>
      </div>
    </footer>
  );
}
