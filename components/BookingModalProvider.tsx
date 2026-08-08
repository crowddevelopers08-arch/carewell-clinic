"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";

type BookingModalContextValue = {
  openModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}

const TREATMENT_OPTIONS = [
  "Acne",
  "Acne Scars",
  "Pigmentation",
  "Skin Rejuvenation",
  "Anti-Ageing",
  "Laser Hair Removal",
  "Other",
];

export default function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();

    setSubmitting(true);
    closeModal();
    router.push(`/thank-you${name ? `?name=${encodeURIComponent(name)}` : ""}`);
  };

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#171717]/70 p-4 backdrop-blur-sm [font-family:'Inter',sans-serif]">
          <div
            className="absolute inset-0"
            onClick={closeModal}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_30px_60px_-20px_rgba(23,23,23,0.4)] sm:p-8">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#171717]/5 text-[#171717] transition-colors hover:bg-[#171717]/10"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#171717]">
              <span className="h-px w-5 bg-[#c6a03b]" />
              Book a Visit
              <span className="h-px w-5 bg-[#dd7900]" />
            </span>

            <h2 className="mt-4 [font-family:'Cormorant_Garamond',serif] text-[28px] font-semibold leading-tight text-[#171717] sm:text-[32px]">
              Book Your <span className="italic text-[#c6a03b]">Consultation</span>
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#171717]/60">
              Fill in your details and our team will get back to you shortly to confirm your appointment.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="booking-name" className="mb-1.5 block text-[12px] font-medium text-[#171717]/70">
                  Full Name
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-2.5 text-[14px] text-[#171717] outline-none transition-colors placeholder:text-[#171717]/35 focus:border-[#c6a03b]"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="mb-1.5 block text-[12px] font-medium text-[#171717]/70">
                  Phone Number
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-2.5 text-[14px] text-[#171717] outline-none transition-colors placeholder:text-[#171717]/35 focus:border-[#c6a03b]"
                />
              </div>

              <div>
                <label htmlFor="booking-treatment" className="mb-1.5 block text-[12px] font-medium text-[#171717]/70">
                  Treatment Interested In
                </label>
                <select
                  id="booking-treatment"
                  name="treatment"
                  defaultValue=""
                  className="w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-2.5 text-[14px] text-[#171717] outline-none transition-colors focus:border-[#c6a03b]"
                >
                  <option value="" disabled>
                    Select a treatment
                  </option>
                  {TREATMENT_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-4 py-2 pl-7 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Book Appointment"}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}
