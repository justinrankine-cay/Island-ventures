"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fleetItems } from "@/lib/fleet-data";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Loader2,
  Check,
  AlertCircle,
  Bot,
  Copy,
  CheckCheck,
} from "lucide-react";

function ContactForm() {
  const params = useSearchParams();
  const initialVessel = params.get("vessel") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vessel: initialVessel,
    groupSize: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [aiReply, setAiReply] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setAiReply("");

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.reply) {
        setStatus("success");
        setAiReply(data.reply);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copyReply = () => {
    navigator.clipboard.writeText(aiReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto py-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: contact info */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--navy)" }}>
          Get in Touch
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--mid)" }}>
          Have a question about a charter? Want to plan something special?
          Fill in the form and our AI assistant will draft an instant reply —
          and our team will follow up personally within the hour.
        </p>

        <div className="space-y-5 mb-10">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "var(--ocean-50)" }}
            >
              <MapPin size={18} style={{ color: "var(--ocean-700)" }} />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>Location</p>
              <p className="text-sm" style={{ color: "var(--mid)" }}>Grand Cayman, Cayman Islands</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "var(--ocean-50)" }}
            >
              <Phone size={18} style={{ color: "var(--ocean-700)" }} />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>Phone</p>
              <a href="tel:+13455261234" className="text-sm hover:underline" style={{ color: "var(--mid)" }}>
                +1 (345) 526-1234
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "var(--ocean-50)" }}
            >
              <Mail size={18} style={{ color: "var(--ocean-700)" }} />
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>Email</p>
              <a href="mailto:info@caymanexclusivecharters.com" className="text-sm hover:underline" style={{ color: "var(--mid)" }}>
                info@caymanexclusivecharters.com
              </a>
            </div>
          </div>
        </div>

        {/* AI reply preview */}
        {status === "success" && aiReply && (
          <div
            className="rounded-2xl p-6"
            style={{ background: "white", border: "1px solid var(--sand-200)", boxShadow: "0 2px 12px rgba(44,26,14,0.06)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "var(--teal-500)" }}
                >
                  <Bot size={14} color="white" />
                </div>
                <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
                  AI-Generated Reply
                </span>
              </div>
              <button
                onClick={copyReply}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all"
                style={{
                  background: copied ? "var(--ocean-50)" : "var(--sand-100)",
                  color: copied ? "var(--teal-600)" : "var(--mid)",
                  border: "1px solid var(--sand-200)",
                }}
              >
                {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div
              className="text-xs leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto"
              style={{ color: "var(--mid)" }}
            >
              {aiReply}
            </div>
            <p className="text-xs mt-4 italic" style={{ color: "var(--ocean-700)" }}>
              This reply was auto-generated. Our team will review and send a personalized follow-up shortly.
            </p>
          </div>
        )}
      </div>

      {/* Right: form */}
      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-7"
          style={{ background: "white", border: "1px solid var(--sand-200)", boxShadow: "0 2px 12px rgba(44,26,14,0.06)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
                Your Name *
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
                Email *
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (345) 000-0000"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
                Vessel Interest
              </label>
              <select
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
                value={form.vessel}
                onChange={(e) => setForm({ ...form, vessel: e.target.value })}
              >
                <option value="">Not sure yet</option>
                {fleetItems.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
                Group Size
              </label>
              <input
                type="number"
                min="1"
                max="20"
                placeholder="e.g. 6"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
                value={form.groupSize}
                onChange={(e) => setForm({ ...form, groupSize: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
              value={form.preferredDate}
              onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--ocean-700)" }}>
              Message *
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your ideal adventure — occasion, must-see spots, special requirements..."
              required
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
              style={{ background: "var(--sand-50)", border: "1px solid var(--sand-200)", color: "var(--navy)" }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {status === "error" && (
            <div className="rounded-xl px-4 py-3 mb-5 flex items-center gap-2 text-sm" style={{ background: "#FFEDED", color: "#9B2020" }}>
              <AlertCircle size={15} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
          {status === "success" && (
            <div className="rounded-xl px-4 py-3 mb-5 flex items-center gap-2 text-sm" style={{ background: "#DCE8D8", color: "var(--teal-600)" }}>
              <Check size={15} />
              <span>Your inquiry was received! Check the AI reply on the left.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-md disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ background: "var(--teal-500)", color: "white" }}
          >
            {status === "loading" ? (
              <><Loader2 size={18} className="animate-spin" /> Generating AI Reply...</>
            ) : (
              <><Send size={16} /> Send Inquiry</>
            )}
          </button>

          <p className="text-xs text-center mt-3" style={{ color: "var(--teal-500)" }}>
            Our AI assistant will draft an instant reply. Our team follows up within 1 hour.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <div
        className="pt-28 pb-14 px-4 text-center"
        style={{ background: "linear-gradient(to bottom, var(--ocean-950), var(--ocean-800))" }}
      >
        <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "var(--teal-300)" }}>
          Contact Us
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Let&apos;s Plan Your Trip
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
          Our AI assistant responds instantly to every inquiry, and our team
          follows up personally to craft your perfect Cayman experience.
        </p>
      </div>

      <div style={{ background: "var(--sand-50)" }}>
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </>
  );
}
