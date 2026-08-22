"use client";

import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Menu,
  ShoppingBag,
  Smartphone,
  X,
} from "lucide-react";
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

const links = [
  ["Home", "/"],
  ["Doctor", "#doctor"],
  ["Why Choose Us", "#why-choose-us"],
  ["How We Treat", "#how-we-treat"],
  ["Journey", "#journey"],
  ["FAQ", "#faq"],
];

const heroSlides = [
  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786553633/_DSC4615.jpg",
  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786553627/_DSC4586.jpg",
  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786553626/_DSC4688.jpg",
];

const physicianTitle = "Aesthetic Physician.";

export default function ScientificHealthcareHero() {
  const { openModal } = useBookingModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedTitle(physicianTitle);
      return;
    }

    let characterIndex = 0;
    let isErasing = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animateTitle = () => {
      if (!isErasing) {
        characterIndex += 1;
        setTypedTitle(physicianTitle.slice(0, characterIndex));

        if (characterIndex === physicianTitle.length) {
          isErasing = true;
          timeoutId = setTimeout(animateTitle, 1600);
          return;
        }

        timeoutId = setTimeout(animateTitle, 85);
        return;
      }

      characterIndex -= 1;
      setTypedTitle(physicianTitle.slice(0, characterIndex));

      if (characterIndex === 0) {
        isErasing = false;
        timeoutId = setTimeout(animateTitle, 500);
        return;
      }

      timeoutId = setTimeout(animateTitle, 45);
    };

    timeoutId = setTimeout(animateTitle, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      aria-label="Medical weight management"
      className={`${inter.className} relative isolate min-h-[760px] overflow-hidden bg-[linear-gradient(248deg,#171717_0%,#272015_45%,#75500f_73%,#dd7900_100%)] text-white`}
    >
      {/* Fine curved artwork visible in the reference background. */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background:radial-gradient(ellipse_73%_96%_at_-11%_41%,transparent_49%,rgba(255,198,67,.62)_49.35%,transparent_49.8%),radial-gradient(ellipse_63%_84%_at_-4%_45%,transparent_56%,rgba(198,160,59,.58)_56.35%,transparent_56.8%),radial-gradient(ellipse_90%_98%_at_10%_58%,transparent_64%,rgba(98,58,5,.68)_64.3%,transparent_64.8%)]" />

      <header className="relative z-30 w-full overflow-hidden shadow-[0_12px_25px_rgba(9,45,76,.15)] lg:rounded-b-[8px]">

        <nav className="grid min-h-[76px] grid-cols-[1fr_auto] items-center bg-[#f7f5f1] px-6 text-[#171717] lg:grid-cols-[240px_minmax(0,1fr)_300px] lg:px-12 xl:grid-cols-[280px_minmax(0,1fr)_320px] xl:px-20">
          <a href="#top" className="flex items-center" aria-label="Carewell Clinic and Acadamy home">
            <Image src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg" alt="Carewell Clinic and Acadamy — Skin, Hair, Laser" width={738} height={541} priority className="h-[66px] w-[165px] object-contain object-center mix-blend-multiply" />
          </a>

          <div className="hidden list-none items-center justify-around gap-1 rounded-full border border-[#c6a03b]/25 bg-white p-1.5 lg:flex">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="inline-block whitespace-nowrap rounded-full bg-[#c6a03b]/10 px-3 py-2 text-[12px] font-medium tracking-[0.03em] text-[#171717] transition-colors duration-200 hover:bg-[#c6a03b] hover:text-white xl:px-4 xl:text-[13px]">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden justify-self-end lg:flex lg:items-center lg:gap-1">
            <button type="button" onClick={openModal} className="inline-flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-full bg-[#171717] px-5 py-2 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900]">
              Book Your Consultation
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="scientific-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[#171717] text-white lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {menuOpen && (
          <div id="scientific-mobile-menu" className="border-t border-[#c6a03b]/20 bg-[#f7f5f1] px-5 py-5 text-[#171717] shadow-[0_18px_35px_-22px_rgba(23,23,23,.45)] lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-[14px] font-medium transition-colors hover:bg-[#c6a03b]/10"
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="mt-3 inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium tracking-[0.03em] text-white"
              >
                Book Your Consultation
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </nav>
          </div>
        )}
      </header>

      <div className="relative z-10 grid min-h-[656px] grid-cols-1 pb-28 lg:grid-cols-[50%_50%] lg:pb-0">
        <div className="relative h-[390px] overflow-hidden rounded-b-[50px] bg-[#e2e8e6] sm:h-[470px] lg:order-2 lg:h-[684px] lg:rounded-none lg:[clip-path:ellipse(78%_76%_at_80%_50%)]">
          {heroSlides.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Dr Dinesh K. Manjrekar at Carewell Clinic — slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width:1023px) 100vw, 50vw"
              className={`hero-slide hero-slide-${index + 1} object-cover object-[50%_28%] lg:object-[60%_center]`}
            />
          ))}
        </div>

        <div className="flex items-start px-7 max-sm:pb-5 pb-16 pt-10 sm:px-12 lg:order-1 lg:px-14 lg:pt-[80px] xl:pl-[95px] xl:pr-12">
          <div className="max-w-[520px]">
            <h1 className={`${cormorant.className} text-[36px] leading-[1.15] font-semibold text-white md:text-[46px] lg:text-[58px]`}>
              Expert <em className="italic text-[#c6a03b]">Skin Care</em> by<br />Dr Dinesh K. Manjrekar.
            </h1>
            <h3 aria-label={physicianTitle} className={`${cormorant.className} mt-1 text-[24px] font-semibold md:text-[28px] lg:text-[32px]`}>
              <span aria-hidden="true" className="text-white">{typedTitle.slice(0, 9)}</span>
              <span aria-hidden="true" className="text-[#dd7900]">{typedTitle.slice(9)}</span>
              <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse font-normal text-[#dd7900]">|</span>
            </h3>
            <p className="mt-5 text-[18px] leading-relaxed font-medium text-white/90">
              Personalised treatments for acne, acne scars, pigmentation, skin rejuvenation, anti-ageing, and more.
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-white/65">
              At Carewell Skin, Laser &amp; Hair Clinic, every treatment begins with a detailed consultation to understand your skin concerns and create a treatment plan tailored to your unique needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-white">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-white text-[15px] font-medium shadow-sm">4.9</span>
              <span className="text-[17px] leading-none tracking-[1px] text-[#ffd000]" aria-label="4.9 out of 5 stars">★★★★★</span>
              <div className="ml-1 flex -space-x-2" aria-label="Carewell patients">
                {[
                  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554263/doctor1.avif",
                  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554263/doctor2.avif",
                  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/doctor3.avif",
                  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/carewell-image-5.png",
                  "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554264/hero-image.avif",
                ].map((src, index) => (
                  <span key={src} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-[#ddd] shadow-sm">
                    <Image src={src} alt={`Carewell patient ${index + 1}`} fill sizes="32px" className="object-cover object-top" />
                  </span>
                ))}
              </div>
              <strong className="ml-2 text-[15px] font-semibold tracking-[-0.01em] text-white sm:text-[16px]">3,124+ Patients Treated</strong>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <button type="button" onClick={openModal} className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#171717] px-5 py-2 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900]">
                Book Your Consultation
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="absolute right-20 bottom-[96px] z-20 flex items-center gap-2 lg:right-7">
        <span className="h-[7px] w-[7px] rounded-full bg-white/55" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/55" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/55" />
        <span className="h-[7px] w-8 rounded-full bg-white" />
      </div> */}

      {/* <button type="button" aria-label="Find a nearby centre" className="absolute right-5 bottom-14 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#dd7900] text-white shadow-lg">
        <MapPin size={18} />
      </button> */}
      <div className="absolute max-sm:bottom-[-28px] bottom-[-48px] left-[8%] z-20 min-h-[132px] w-[84%] rounded-t-[55px] bg-white px-6 py-7 text-center text-[#30231f] lg:left-[22%] lg:w-[61%] lg:rounded-t-[78px]">
        <h2 className={`${cormorant.className} text-[28px] leading-tight font-semibold sm:text-[34px] lg:text-[40px]`}>Healthy skin begins with expert care.</h2>
        {/* <p className="mt-3 text-[12px] text-[#777]">Personalised, doctor-led treatments designed around your skin&apos;s unique needs.</p> */}
      </div>
      <style>{`
        .hero-slide { opacity: 0; animation: carewell-hero-fade 15s ease-in-out infinite; }
        .hero-slide-1 { animation-delay: 0s; }
        .hero-slide-2 { animation-delay: 5s; }
        .hero-slide-3 { animation-delay: 10s; }
        @keyframes carewell-hero-fade {
          0% { opacity: 0; transform: scale(1.09); }
          4% { opacity: 1; transform: scale(1.08); }
          29% { opacity: 1; transform: scale(1); }
          33.333% { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.09); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide { animation: none; opacity: 0; }
          .hero-slide-1 { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
