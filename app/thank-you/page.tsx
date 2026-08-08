import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Phone } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You | Carewell Clinic and Academy",
  description: "Your consultation request has been received.",
};

const nextSteps = [
  {
    number: "01",
    title: "We review your request",
    text: "Our care coordinator checks your preferred treatment and appointment details.",
  },
  {
    number: "02",
    title: "We call to confirm",
    text: "You will receive a call from our team to confirm a convenient consultation time.",
  },
  {
    number: "03",
    title: "Meet the right specialist",
    text: "Your consultation is matched with the specialist best suited to your skin, hair or laser concern.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f1] text-[#171717] [font-family:'Inter',sans-serif]">
      {/* NAV */}
      <nav className="flex items-center justify-around gap-4 px-6 py-4 lg:px-22">
        <Link
          href="/"
          aria-label="Carewell Clinic and Academy"
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-14 w-auto mix-blend-multiply sm:h-30"
            src="/logos.jpeg"
            alt="Carewell Clinic and Academy — Skin, Hair, Laser"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="tel:+918291932733"
            className="hidden items-center gap-2 text-[14px] font-medium text-[#171717] transition-colors hover:text-[#dd7900] sm:inline-flex"
          >
            <Phone size={16} className="text-[#c6a03b]" />
            +91 82919 32733
          </a>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-[13px] font-medium tracking-[0.03em] !text-white hover:bg-[#dd7900] hover:!text-white"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="relative isolate px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute top-10 left-[-100px] -z-10 h-72 w-72 rounded-full bg-[#c6a03b]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-80px] bottom-0 -z-10 h-80 w-80 rounded-full bg-[#dd7900]/10 blur-3xl"
        />

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-[#c6a03b]/25 bg-white px-6 py-12 text-center shadow-[0_30px_80px_rgba(23,23,23,0.10)] sm:px-12 lg:px-20">
            <span
              aria-hidden="true"
              className="absolute top-0 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-b-full bg-[#dd7900]"
            />

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#171717] text-white shadow-[0_16px_38px_rgba(23,23,23,0.25)]">
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m5 12.5 4.2 4.2L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-7 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-[#dd7900] sm:text-sm">
              <span className="flex items-center" aria-hidden="true">
                <i className="w-8 border-t border-[#dd7900]" />
                <i className="h-2 w-2 rotate-45 border border-[#dd7900]" />
              </span>
              Request received
              <span className="flex items-center" aria-hidden="true">
                <i className="h-2 w-2 rotate-45 border border-[#dd7900]" />
                <i className="w-8 border-t border-[#dd7900]" />
              </span>
            </p>

            <h1 className="mx-auto mt-5 max-w-3xl [font-family:'Cormorant_Garamond',serif] text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-[58px]">
              Thank you for choosing{" "}
              <span className="italic text-[#c6a03b]">
                Carewell Clinic and Academy.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#171717]/65 sm:text-lg">
              Your free consultation request has reached our team. We&apos;ll
              contact you shortly to understand your concern and arrange the
              right specialist consultation.
            </p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              {nextSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-[#c6a03b]/20 bg-[#f7f5f1] p-5"
                >
                  <span className="[font-family:'Cormorant_Garamond',serif] text-sm font-bold text-[#c6a03b]/70">
                    {step.number}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-[#171717]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#171717]/60">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/918291932733?text=Hi%2C%20I%20submitted%20a%20consultation%20request%20for%20Carewell%20Clinic%20and%20Academy."
                className="inline-flex h-13 min-w-[230px] items-center justify-center rounded-full bg-[#dd7900] px-7 text-sm font-bold text-white shadow-lg shadow-[#dd7900]/20 transition hover:-translate-y-0.5 hover:bg-[#171717] hover:!text-white"
              >
                Continue on WhatsApp →
              </a>
              <a
                href="tel:+918291932733"
                className="inline-flex h-13 min-w-[210px] items-center justify-center rounded-full border border-[#c6a03b]/40 bg-white px-7 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:border-[#dd7900] hover:text-[#dd7900]"
              >
                Call +91 82919 32733
              </a>
            </div>

            <Link
              href="/"
              className="mt-7 inline-flex text-sm font-semibold text-[#c6a03b] underline-offset-4 hover:text-[#dd7900] hover:underline"
            >
              ← Return to homepage
            </Link>
          </div>

          <p className="mt-5 text-center text-sm text-[#171717]/50">
            Carewell Clinic and Academy · Andheri (E), Mumbai · Mon–Sat, 9 AM–9
            PM
          </p>
        </div>
        
      </section>
      <Footer />
    </main>
  );
}
