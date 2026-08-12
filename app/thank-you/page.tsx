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
      <nav className="flex items-center justify-around gap-4 border-b border-[#171717]/8 bg-[#f7f5f1] px-4 py-4 sm:px-6 sm:py-5 lg:px-14">
        <Link
          href="/"
          aria-label="Carewell Clinic and Academy"
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-11 w-auto mix-blend-multiply sm:h-14 lg:h-26"
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg"
            alt="Carewell Clinic and Academy — Skin, Hair, Laser"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="tel:+918291932733"
            className="hidden items-center gap-2 text-[14px] font-medium text-[#171717] transition-colors hover:text-[#dd7900] md:inline-flex"
          >
            <Phone size={16} className="text-[#c6a03b]" />
            +91 82919 32733
          </a>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#171717] px-3.5 py-2.5 text-[12.5px] font-medium tracking-[0.03em] !text-white hover:bg-[#dd7900] hover:!text-white sm:px-4 sm:py-3 sm:text-[13px]"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 -z-10 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl"
        />

        {/* Faint strand linework echoing the site's other sections */}
        <svg
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.05]"
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

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[24px] border border-[#c6a03b]/25 bg-white px-5 py-8 text-center shadow-[0_30px_80px_rgba(23,23,23,0.10)] sm:rounded-[32px] sm:px-12 sm:py-9 lg:px-20">
            <span
              aria-hidden="true"
              className="absolute top-0 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-b-full bg-[#dd7900] sm:w-28"
            />

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#171717] text-white shadow-[0_16px_38px_rgba(23,23,23,0.25)] sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8 sm:h-10 sm:w-10"
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

            <p className="mt-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[.22em] text-[#dd7900] sm:mt-5 sm:gap-3 sm:text-xs sm:tracking-[.28em] md:text-sm">
              <span className="flex items-center" aria-hidden="true">
                <i className="w-5 border-t border-[#dd7900] sm:w-8" />
                <i className="h-2 w-2 rotate-45 border border-[#dd7900]" />
              </span>
              Request received
              <span className="flex items-center" aria-hidden="true">
                <i className="h-2 w-2 rotate-45 border border-[#dd7900]" />
                <i className="w-5 border-t border-[#dd7900] sm:w-8" />
              </span>
            </p>

            <h1 className="mx-auto mt-4 max-w-3xl [font-family:'Cormorant_Garamond',serif] text-[28px] leading-[1.15] font-semibold tracking-tight sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-[58px]">
              Thank you for choosing{" "}
              <span className="italic text-[#c6a03b]">
                Carewell Clinic and Academy.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#171717]/65 sm:mt-4 sm:text-base sm:leading-8 lg:text-lg">
              Your free consultation request has reached our team. We&apos;ll
              contact you shortly to understand your concern and arrange the
              right specialist consultation.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {nextSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-[#c6a03b]/20 bg-[#f7f5f1] p-5"
                >
                  <span className="[font-family:'Cormorant_Garamond',serif] text-sm font-bold text-[#c6a03b]/70">
                    {step.number}
                  </span>
                  <h2 className="mt-3 text-base font-bold text-[#171717] sm:text-lg">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] leading-6 text-[#171717]/60 sm:text-sm">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <a
                href="https://wa.me/918291932733?text=Hi%2C%20I%20submitted%20a%20consultation%20request%20for%20Carewell%20Clinic%20and%20Academy."
                className="inline-flex h-[52px] w-full min-w-0 items-center justify-center rounded-full bg-[#dd7900] px-7 text-sm font-bold text-white shadow-lg shadow-[#dd7900]/20 transition hover:-translate-y-0.5 hover:bg-[#171717] hover:!text-white sm:w-auto sm:min-w-[230px]"
              >
                Continue on WhatsApp →
              </a>
              <a
                href="tel:+918291932733"
                className="inline-flex h-[52px] w-full min-w-0 items-center justify-center rounded-full border border-[#c6a03b]/40 bg-white px-7 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:border-[#dd7900] hover:text-[#dd7900] sm:w-auto sm:min-w-[210px]"
              >
                Call +91 82919 32733
              </a>
            </div>

            <Link
              href="/"
              className="mt-5 inline-flex text-sm font-semibold text-[#c6a03b] underline-offset-4 hover:text-[#dd7900] hover:underline"
            >
              ← Return to homepage
            </Link>
          </div>

          <p className="mt-4 text-center text-[13px] text-[#171717]/50 sm:text-sm">
            Carewell Clinic and Academy · Andheri (E), Mumbai · Mon–Sat, 9 AM–9
            PM
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
