"use client";

import { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Doctor", href: "#doctor" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "How We Treat", href: "#how-we-treat" },
  { label: "Journey", href: "#journey" },
  { label: "FAQ", href: "#faq" },
];
const TREATMENTS = [
  "Acne",
  "Acne Scars",
  "Pigmentation",
  "Skin Rejuvenation",
  "Anti-Ageing",
  "Laser Hair Removal",
];
const MARQUEE_TREATMENTS = [...TREATMENTS, ...TREATMENTS];

export default function CarewellHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  return (
    <div id="top" className={`${inter.className} bg-[#f7f5f1]`}>
      {/* NAV */}
      <nav className="relative flex items-center justify-between gap-6 bg-[#f7f5f1] px-6 py-4 lg:px-28">
        <a
          href="#top"
          aria-label="Carewell Clinic and Acadamy"
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-16 w-auto mix-blend-multiply lg:h-25"
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp"
            alt="Carewell Clinic and Acadamy — Skin, Hair, Laser"
          />
        </a>

        <ul className="hidden list-none items-center gap-1 rounded-full border border-[#c6a03b]/25 bg-white p-1.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                className="inline-block rounded-full bg-[#c6a03b]/10 px-4 py-2 text-[13px] font-medium tracking-[0.03em] text-[#171717] no-underline transition-colors duration-200 hover:bg-[#c6a03b] hover:text-white"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openModal}
          className="hidden cursor-pointer shrink-0 items-center gap-3 rounded-full bg-[#171717] px-5 py-2 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900] lg:inline-flex"
        >
          Book Consultation
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a03b]/30 text-[#171717] lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* mobile menu panel */}
        {menuOpen && (
          <div className="absolute inset-x-0 top-full z-30 border-t border-[#c6a03b]/20 bg-[#f7f5f1] px-6 py-5 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.3)] lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-full px-4 py-2.5 text-[14px] font-medium text-[#171717] transition-colors duration-200 hover:bg-[#c6a03b]/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="mt-4 flex cursor-pointer w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-5 py-3 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900]"
            >
              Book Consultation
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#171717]">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#171717] px-6 pb-10 pt-10 lg:px-14 lg:pb-12 lg:pt-14">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.16] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.14] blur-3xl" />

        {/*
          Mobile: badge -> heading -> byline -> image -> description -> marquee -> cta
          (plain DOM/auto-placement order in the single-column grid)
          Desktop (lg+): explicit col/row placement restores the original two-column layout.
        */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 lg:grid-cols-[1fr_1.15fr]">
          <span className="hero-anim inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-[#c6a03b]/40 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-[#171717] sm:gap-2 sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[0.18em] md:text-[13px] lg:col-start-1 lg:row-start-1 lg:mt-2">
            <span className="hidden h-px w-6 bg-[#c6a03b] sm:inline-block" />
            Trusted by 3,124+ Patients
            <span className="hidden h-px w-6 bg-[#dd7900] sm:inline-block" />
          </span>

          <h1
            className={`${cormorant.className} hero-anim hero-anim-delay-1 mt-4 text-[36px] font-semibold leading-[1.15] text-white md:text-[46px] lg:col-start-1 lg:row-start-2 lg:mt-3 lg:text-[54px]`}
          >
            Expert <em className="italic text-[#c6a03b]">Skin Care</em> You
            Can Trust
          </h1>

          <p className="hero-anim hero-anim-delay-2 mt-3 text-[18px] tracking-[0.05em] text-white/60 lg:col-start-1 lg:row-start-3 lg:mt-2">
            By{" "}
            <span className="font-medium text-white/90">
              Dr Dinesh K. Manjrekar
            </span>{" "}
             MD Dermatology
          </p>

          {/* RIGHT — main arch photo, then a gap, then two photos stacked in a column */}
          <div className="hero-anim hero-anim-delay-2 relative mx-auto mt-4 flex w-fit items-center gap-8 pb-8 sm:gap-12 lg:col-start-2 lg:row-start-1 lg:row-span-6 lg:mx-0 lg:mt-0">
            {/* primary arch */}
            <div className="relative w-[280px] shrink-0 sm:w-[400px]">
              {/* soft shape behind the arch */}
              <div className="absolute -inset-5 -z-10 rounded-t-full bg-gradient-to-br from-[#c6a03b]/15 to-[#dd7900]/15" />

              <div className="relative overflow-hidden rounded-t-full rounded-b-[24px] shadow-[0_30px_60px_-20px_rgba(23,23,23,0.35)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-[380px] w-full object-cover object-top sm:h-[500px]"
                  src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/hero-image.avif"
                  alt="Carewell Clinic — skin care treatment"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-[#171717]/0 to-[#171717]/0" />
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 px-6 text-center">
                  <p
                    className={`${cormorant.className} text-[16px] italic leading-[1.4] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]`}
                  >
                    &quot;Every skin has a story&quot;
                  </p>
                </div>
              </div>

              {/* patients-treated badge */}
              <div className="badge-float absolute -left-4 top-10 flex flex-col items-start gap-0.5 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-16px_rgba(23,23,23,0.3)] sm:-left-8">
                <p
                  className={`${cormorant.className} text-[22px] font-semibold leading-none text-[#171717]`}
                >
                  10k+
                </p>
                <p className="text-[10px] uppercase leading-tight tracking-[0.08em] text-[#dd7900]">
                  Patients Treated
                </p>
              </div>

              {/* rating badge */}
              <div className="badge-float badge-float-delay absolute -right-2 bottom-12 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_18px_40px_-16px_rgba(23,23,23,0.3)] sm:-right-6">
                <span
                  className={`${cormorant.className} text-[16px] font-semibold leading-none text-[#171717]`}
                >
                  4.9★
                </span>
                <span className="text-[10px] uppercase tracking-[0.08em] text-[#dd7900]">
                  Rated
                </span>
              </div>
            </div>

            {/* two photos, stacked in a column */}
            <div className="hidden shrink-0 flex-col gap-5 sm:flex">
              <div className="w-[200px] overflow-hidden rounded-t-full rounded-b-[16px] shadow-[0_20px_40px_-16px_rgba(23,23,23,0.3)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-[230px] w-full object-cover object-top"
                  src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/carewell-image-5.png"
                  alt="Carewell Clinic patient care"
                />
              </div>
              <div className="w-[200px] overflow-hidden rounded-t-full rounded-b-[16px] shadow-[0_20px_40px_-16px_rgba(23,23,23,0.3)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-[260px] w-full object-cover object-top"
                  src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/doctor3.avif"
                  alt="Carewell Clinic treatment room"
                />
              </div>
            </div>
          </div>

          <p className="hero-anim hero-anim-delay-3 mt-6 max-w-[460px] text-[15px] leading-relaxed text-white/65 lg:col-start-1 lg:row-start-4 lg:mt-3">
            Personalised treatments for acne, acne scars, pigmentation, skin
            rejuvenation, anti-ageing, and more. Every treatment begins with a
            detailed consultation to understand your skin concerns and create
            a plan tailored to your unique needs.
          </p>

          {/* Treatment tags — auto-scrolling marquee */}
          <div className="hero-anim hero-anim-delay-4 relative mt-6 max-w-[460px] overflow-hidden lg:col-start-1 lg:row-start-5 lg:mt-7">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent" />
            <div className="treatments-track flex w-max items-center gap-2">
              {MARQUEE_TREATMENTS.map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="cursor-default whitespace-nowrap rounded-full border border-white/20 px-3.5 py-1.5 text-[12px] tracking-[0.02em] text-white/70 transition-colors duration-200 hover:border-[#c6a03b] hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hero-anim hero-anim-delay-5 mt-6 flex flex-wrap items-center gap-5 lg:col-start-1 lg:row-start-6 lg:mt-5">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#dd7900] px-5 py-2 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#171717]"
            >
              Book Consultation
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <style>{`
        .treatments-track { animation: treatments-marquee 22s linear infinite; }
        .treatments-track:hover { animation-play-state: paused; }
        @keyframes treatments-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.25rem)); }
        }

        .hero-anim { animation: hero-fade-up 0.8s ease-out both; }
        .hero-anim-delay-1 { animation-delay: 0.1s; }
        .hero-anim-delay-2 { animation-delay: 0.2s; }
        .hero-anim-delay-3 { animation-delay: 0.3s; }
        .hero-anim-delay-4 { animation-delay: 0.4s; }
        .hero-anim-delay-5 { animation-delay: 0.5s; }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .badge-float { animation: badge-float 3.6s ease-in-out infinite; }
        .badge-float-delay { animation-delay: 1.4s; }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .treatments-track, .hero-anim, .badge-float { animation: none; }
        }
      `}</style>
    </div>
  );
}
