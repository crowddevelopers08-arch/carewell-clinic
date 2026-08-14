"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

const comparisons = [
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639658/IMG_3019.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639659/IMG_5839.jpg", alt: "Treatment result 1" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639658/IMG_6650.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639659/IMG_8535.jpg", alt: "Treatment result 2" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639657/IMG_5229.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639657/IMG_8719.jpg", alt: "Treatment result 3" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639656/IMG_5831.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639657/IMG_8041.jpg", alt: "Treatment result 4" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639656/IMG_5895.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639656/c033b381-dddf-4eec-8be3-7a410d6f4291.jpg", alt: "Treatment result 5" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639655/IMG_4073.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639655/IMG_8041_1.jpg", alt: "Treatment result 6" },
  { before: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639655/IMG_3136.jpg", after: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786639799/IMG_4995.jpg", alt: "Treatment result 7" },
];

function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[5/7] overflow-hidden rounded-[18px] bg-white" aria-label={alt}>
      <Image
        src={after}
        alt=""
        fill
        quality={75}
        sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 50vw, 25vw"
        className="pointer-events-none select-none object-cover object-center"
        draggable={false}
      />
      <div
        className="absolute inset-0 will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt=""
          fill
          quality={75}
          sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 50vw, 25vw"
          className="pointer-events-none select-none object-cover object-center"
          draggable={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-white text-[18px] font-bold text-black shadow-md">
          <span>◀</span>
          <span>▶</span>
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Adjust ${alt} comparison`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export default function BeforeAfter() {
  const { openModal } = useBookingModal();
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).gap) || 0;
    carousel.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="relative w-full scroll-mt-28 overflow-hidden bg-white px-4 py-8 [font-family:'Inter',sans-serif] sm:px-6 sm:py-12 lg:px-8" id="results">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />

      {/* Faint strand linework echoing the CTA section texture */}
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-sm:mb-4 max-w-3xl text-center sm:mb-5">
          <span className="animate-slip-up mb-0 inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px] lg:text-[14px]">
           <span className="h-px w-6 bg-[#c6a03b]" />
              Before &amp; After Results
            <span className="h-px w-6 bg-[#dd7900]" />
          </span>
          <h2 className="animate-slip-up animation-delay-100 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px] lg:text-[54px]">
            Real Results. Real{" "}
            <span className="relative inline-block italic text-[#c6a03b]">
              Transformations.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 260 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C 70 2, 190 2, 258 7"
                  stroke="#c6a03b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="animate-slip-up animation-delay-200 mt-3 max-sm:mt-2 text-[14px] leading-6 text-[#171717]/70 md:text-[15px] lg:text-[16px]">
            See how our personalised treatments have helped patients improve their skin concerns with doctor-led care and advanced aesthetic treatments.
          </p>
        </div>

        <div
          className="animate-pop animation-delay-300 relative"
          role="region"
          aria-label="Before and after treatment results gallery"
        >
          <p className="mb-4 max-sm:mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#c6a03b]">Before &amp; After Gallery</p>
          <div className="relative left-1/2 w-screen -translate-x-1/2 px-5 py-2 sm:px-14 lg:px-20 lg:py-2">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Previous results"
              className="absolute left-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white text-[#171717] shadow-lg transition hover:bg-[#171717] hover:text-white sm:left-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div ref={carouselRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-6">
              {comparisons.map((comparison) => (
                <div key={comparison.before} className="w-full shrink-0 snap-start [content-visibility:auto] [contain-intrinsic-size:auto_520px] sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-1.125rem)]">
                  <BeforeAfterSlider before={comparison.before} after={comparison.after} alt={comparison.alt} />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Next results"
              className="absolute right-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white text-[#171717] shadow-lg transition hover:bg-[#171717] hover:text-white sm:right-4"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
        <div className="mt-9 max-sm:mt-5 flex justify-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#171717] px-4 py-2 pl-7 text-sm font-medium tracking-[0.03em] text-white hover:bg-[#dd7900]"
          >
            <span className="text-white">Schedule Your Consultation</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
