"use client";

import { useState } from "react";
import Image from "next/image";
import { cormorant, inter } from "./fonts";
import { ArrowUpRight, Check, Menu, Phone, X } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";
import { scrollToContact } from "./scrollToContact";

const LOGO_SRC = "/lp-logos.webp";

// href points to a real in-page anchor; omit href (action: "scroll") to scroll to the booking form instead.
const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Doctor", href: "#lhr-doctor", active: false },
  { label: "Treatment", href: "#lhr-treatment-areas", active: false },
  { label: "Process", href: "#lhr-process", active: false },
  { label: "Why Choose Us", href: "#why-choose-us", active: false },
  { label: "Reviews", href: "#reviews", active: false },
  { label: "Contact Us", action: "scroll", active: false },
] as const;

const trustPoints = [
  "FDA-Approved Diode Lasers",
  "Experienced Clinical Team",
  "Personalised for Your Skin",
  "Pre & Post-Treatment Care",
];

const bgSlides = ["/lhr-banner.png", "/lhr-banners.png"];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className={`${inter.className} relative w-full scroll-mt-20 overflow-hidden bg-[#171717] lg:min-h-screen`}>
      {bgSlides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Laser hair reduction treatment at Carewell Clinic"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`lhr-hero-slide lhr-hero-slide-${index + 1} object-cover`}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/55 to-transparent" />

      <div className="relative z-10 flex flex-col lg:min-h-screen">
        {/* Nav */}
        <nav className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-12 lg:py-4">
          <a href="#" className="relative h-11 w-[170px] shrink-0 rounded-lg bg-white/95 shadow-sm sm:h-12 sm:w-[200px] lg:h-14 lg:w-[254px]">
            <Image
              src={LOGO_SRC}
              alt="Carewell Clinic and Acadamy — Skin, Hair, Laser"
              fill
              priority
              sizes="(max-width: 1023px) 200px, 270px"
              className="object-contain object-center p-1.5 sm:p-2"
            />
          </a>

          <div className="hidden items-center justify-center gap-4 text-[13px] font-medium lg:flex xl:gap-6 xl:text-[14px]">
            {navLinks.map(({ label, active, ...link }) =>
              "action" in link ? (
                <button key={label} type="button" onClick={scrollToContact} className="group cursor-pointer">
                  <span className="text-white transition-colors group-hover:text-[#c6a03b]">{label}</span>
                </button>
              ) : (
                <a key={label} href={link.href} className="group">
                  <span className={`transition-colors group-hover:text-[#c6a03b] ${active ? "text-[#c6a03b]" : "text-white"}`}>
                    {label}
                  </span>
                </a>
              ),
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 lg:gap-5">
            <div className="hidden items-center gap-2.5 text-white md:flex">
              <Phone size={17} className="text-[#c6a03b]" />
              <span className="text-[15px] font-medium leading-none">+91 8691895355</span>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="hidden shrink-0 cursor-pointer items-center gap-3 rounded-full bg-[#c6a03b] py-2 pl-5 pr-2 text-sm font-medium tracking-[0.03em] shadow-sm transition-colors hover:bg-[#dd7900] sm:inline-flex"
            >
              <span className="text-white">Contact</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#171717]">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="lhr-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div id="lhr-mobile-menu" className="border-t border-white/10 bg-[#171717]/95 px-4 py-4 sm:px-6 lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(({ label, active, ...link }) =>
                "action" in link ? (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToContact();
                    }}
                    className="cursor-pointer rounded-xl px-3 py-2.5 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {label}
                  </button>
                ) : (
                  <a
                    key={label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors hover:bg-white/10"
                  >
                    <span className={active ? "text-[#c6a03b]" : "text-white"}>{label}</span>
                  </a>
                ),
              )}
              <div className="mt-2 flex items-center gap-2.5 px-3 text-white/80 md:hidden">
                <Phone size={16} className="text-[#c6a03b]" />
                <span className="text-[14px] font-medium">+91 8691895355</span>
              </div>
            </nav>
          </div>
        )}

        {/* Hero content */}
        <div className="mx-auto flex w-full max-w-[1800px] flex-1 items-center px-4 sm:px-6 lg:px-12">
          <div className="max-w-[760px] py-6 sm:py-8 lg:py-10">
            <h1
              className={`${cormorant.className} break-words text-[30px] font-semibold leading-[1.15] text-white sm:text-[38px] md:text-[48px] lg:text-[64px] lg:leading-[1.12]`}
            >
              Your Journey to Smoother{" "}
              <em className="whitespace-nowrap italic text-[#c6a03b]">
                Hair
                <span aria-hidden="true" className="mx-[3px] inline-block h-[3px] w-[0.42em] -translate-y-[0.05em] rounded-full bg-[#c6a03b] align-middle" />
                <span className="sr-only">-</span>
                Free
                <span aria-hidden="true" className="mx-[3px] inline-block h-[3px] w-[0.42em] -translate-y-[0.05em] rounded-full bg-[#c6a03b] align-middle" />
                <span className="sr-only">-</span>
                Looking Skin
              </em>{" "}
              Starts Here.
            </h1>

            <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-white/80 sm:mt-5 sm:text-[15px] md:text-[16px] lg:mt-6 lg:text-[17px]">
              Experience personalised Laser Hair Reduction at Carewell for
              long-term hair reduction and smoother-looking skin.
            </p>

            <div className="mt-5 grid max-w-[520px] grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:mt-7 lg:gap-y-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-[13px] font-medium text-white/90 lg:text-[14px]">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c6a03b]">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  {point}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="mt-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#c6a03b] py-2 pl-5 pr-2 text-[13px] font-medium tracking-[0.03em] shadow-sm transition-colors hover:bg-[#dd7900] sm:gap-3 sm:py-2.5 sm:pl-6 sm:pr-2.5 sm:text-sm lg:mt-8"
            >
              <span className="text-white">Talk to Our Team </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#171717] sm:h-8 sm:w-8">
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats — flows below the content on mobile (avoids colliding with the CTA button
          on short viewports); pinned to the corner from sm: up, same as before at lg. */}
      <div className="relative z-10 mt-6 max-sm:mt-0 flex items-center max-sm:justify-start justify-end gap-4 px-4 pb-6 sm:absolute sm:mt-0 sm:bottom-8 sm:right-6 sm:gap-6 sm:px-0 sm:pb-0 lg:bottom-10 lg:right-24 lg:gap-10">
        <div className="text-right">
          <AnimatedNumber
            value="15+"
            className={`${cormorant.className} block text-[22px] font-semibold leading-none text-white sm:text-[40px]`}
          />
          <span className="mt-1 block text-[10px] font-medium text-white/75 sm:mt-1.5 sm:text-[13px]">Years of Experience</span>
        </div>
        <div className="h-8 w-px bg-white/25 sm:h-9" />
        <div className="text-right">
          <AnimatedNumber
            value="3,124+"
            className={`${cormorant.className} block text-[22px] font-semibold leading-none text-white sm:text-[40px]`}
          />
          <span className="mt-1 block text-[10px] font-medium text-white/75 sm:mt-1.5 sm:text-[13px]">Satisfied Patients</span>
        </div>
      </div>

      <style>{`
        .lhr-hero-slide { opacity: 0; animation: lhr-hero-fade 10s ease-in-out infinite; }
        .lhr-hero-slide-1 { animation-delay: 0s; }
        .lhr-hero-slide-2 { animation-delay: 5s; }
        @keyframes lhr-hero-fade {
          0% { opacity: 0; transform: scale(1.09); }
          4% { opacity: 1; transform: scale(1.08); }
          46% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.09); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lhr-hero-slide { animation: none; opacity: 0; }
          .lhr-hero-slide-1 { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
