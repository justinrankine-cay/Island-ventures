"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/13455261234"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl animate-pulse-soft transition-all hover:scale-110 hover:shadow-[0_8px_32px_rgba(13,150,136,0.5)]"
      style={{ background: "#25D366", color: "white" }}
    >
      <MessageCircle size={22} fill="white" color="white" />
      <span className="text-sm font-bold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
