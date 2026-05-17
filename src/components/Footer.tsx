import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--sand-100)" }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/images/logo.png"
              alt="Cayman Exclusive Charters"
              className="h-10 w-auto mb-5"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--sand-300)" }}>
              Grand Cayman&apos;s premier private charter company. Boat charters,
              Stingray City tours, sunset cruises, fishing adventures, and island
              transfers — all tailored exclusively for you.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/caymanexclusivecharters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.07)", color: "var(--gold-300)" }}
              >
                <ExternalLink size={13} /> Instagram
              </a>
              <a
                href="https://facebook.com/caymanexclusivecharters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.07)", color: "var(--gold-300)" }}
              >
                <ExternalLink size={13} /> Facebook
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="font-bold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--gold-300)" }}
            >
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/fleet",   label: "Our Fleet" },
                { href: "/booking", label: "Book a Charter" },
                { href: "/about",   label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:underline transition-colors"
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
            <h3
              className="font-bold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--gold-300)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "var(--sand-300)" }}>
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold-400)" }} />
                <span>Grand Cayman, Cayman Islands</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "var(--sand-300)" }}>
                <Phone size={14} style={{ color: "var(--gold-400)" }} />
                <a href="tel:+13455261234" className="hover:underline">
                  +1 (345) 526-1234
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "var(--sand-300)" }}>
                <Mail size={14} style={{ color: "var(--gold-400)" }} />
                <a href="mailto:info@caymanexclusivecharters.com" className="hover:underline">
                  info@caymanexclusivecharters.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "var(--light)" }}
        >
          <p>&copy; {new Date().getFullYear()} Cayman Exclusive Charters. All rights reserved.</p>
          <p>caymanexclusivecharters.com &mdash; Grand Cayman, Cayman Islands</p>
        </div>
      </div>
    </footer>
  );
}
