"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cormorant, inter } from "./fonts";

const concerns = ["Laser Hair Reduction", "Acne", "Acne Scars", "Pigmentation", "Skin Rejuvenation", "Anti-Ageing", "Hair Concerns", "Other"] as const;

type ContactMapSectionProps = {
  mapQuery?: string;
};

export default function ContactMapSection({
  mapQuery = "Swaroop Aditya Avenue building, A-107, JB Nagar, Marol Pipeline Road, Andheri East, Mumbai 400099",
}: ContactMapSectionProps) {
  const router = useRouter();
  const formId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pending = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    setError(null);
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const concern = String(formData.get("concern") ?? "");
    const digits = phone.replace(/\D/g, "");
    if (!name || !concern) {
      setError("Please enter your name and select a concern.");
      return;
    }
    if (!/^\d{10}$/.test(digits) && !/^91\d{10}$/.test(digits)) {
      setError("Please enter a 10-digit phone number, optionally with +91.");
      return;
    }
    pending.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "lhr treatment", formName: "lhr-treatment-leads", name, phone, concern, pageUrl: window.location.href, rating: "", callback: "" }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || "We couldn't submit your request. Please try again.");
      }
      router.push(`/treatment/thank-you?name=${encodeURIComponent(name)}`);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "We couldn't submit your request. Please try again.");
    } finally {
      pending.current = false;
      setSubmitting(false);
    }
  };
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14776.86542977911!2d80.1540219!3d13.06632165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c9247c2468c5%3A0xf36e253a5fc2bec3!2sCarewell%20Clinic%20and%20Acadamy%20%7C%20Dr.%20Dinesh%20Manjrekar%2C%201st%20Floor%2C%20Swaroop%20Aditya%20Avenue%20Building%2C%20A-107%2C%20Marol%20Pipeline%20Rd%2C%20Kanti%20Nagar%2C%20J%20B%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400099!3m2!1d19.1050005!2d72.8672481!5e1!3m2!1sen!2sin!4v1786168574402!5m2!1sen!2sin`;

  return (
    <section id="contact" className={`${inter.className} relative w-full scroll-mt-8 overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8`}>
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />

      {/* Faint strand linework echoing the site's other sections */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M ${1300 - i * 70} -50 C ${1050 - i * 70} 250, ${1150 - i * 70} 540, ${900 - i * 90} 850`}
            stroke={i % 2 === 0 ? "#c6a03b" : "#dd7900"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            src={mapSrc}
            title={`Location map: ${mapQuery}`}
            className="h-[420px] w-full grayscale contrast-125 sm:h-[480px] lg:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="rounded-[24px] border border-[#c6a03b]/20 bg-white/95 p-5 shadow-[0_16px_50px_rgba(23,23,23,.06)] sm:p-7">
          <span className="inline-flex w-fit items-center gap-2 bg-white py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#927421] sm:text-[13px]">
            Contact Now
          </span>
          <h2 id={`${formId}-heading`} className={`${cormorant.className} mt-4 text-[28px] font-semibold leading-[1.15] text-[#171717] sm:text-[36px] lg:text-[44px]`}>
            Book Your <span className="italic text-[#c6a03b]">Consultation</span>
          </h2>
          <form onSubmit={handleSubmit} aria-labelledby={`${formId}-heading`} aria-busy={submitting} className="mt-5 space-y-4">
            <fieldset disabled={submitting} className="min-w-0 space-y-4 border-0 p-0">
              <div>
                <label htmlFor={`${formId}-name`} className="mb-1.5 block text-[13px] font-medium text-[#171717]/75">Name</label>
                <input id={`${formId}-name`} name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your full name" className="min-h-11 w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-3 text-[16px] text-[#171717] placeholder:text-[#171717]/40 focus:border-[#c6a03b] focus:outline-none focus:ring-2 focus:ring-[#c6a03b]/20" />
              </div>
              <div>
                <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-[13px] font-medium text-[#171717]/75">Phone Number</label>
                <input id={`${formId}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={20} placeholder="Your phone number" className="min-h-11 w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-3 text-[16px] text-[#171717] placeholder:text-[#171717]/40 focus:border-[#c6a03b] focus:outline-none focus:ring-2 focus:ring-[#c6a03b]/20" />
              </div>
              <div>
                <label htmlFor={`${formId}-concern`} className="mb-1.5 block text-[13px] font-medium text-[#171717]/75">Concern</label>
                <select id={`${formId}-concern`} name="concern" required defaultValue="" className="min-h-11 w-full rounded-xl border border-[#171717]/15 bg-white px-4 py-3 text-[16px] text-[#171717] focus:border-[#c6a03b] focus:outline-none focus:ring-2 focus:ring-[#c6a03b]/20">
                  <option value="" disabled>Select your concern</option>
                  {concerns.map((concern) => <option key={concern} value={concern}>{concern}</option>)}
                </select>
              </div>
            </fieldset>
            {error && <p id={`${formId}-error`} role="alert" className="text-[13px] leading-relaxed text-red-700">{error}</p>}
            <div className="flex justify-center">
              <button type="submit" disabled={submitting} className="inline-flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] disabled:cursor-wait disabled:opacity-60 sm:text-sm">
                {submitting ? "Submitting..." : "Book Your Consultation"}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
