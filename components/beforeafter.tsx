"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

const images = [
  {
    src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554551/bfaf-1.png",
    alt: "Hair treatment client result 1",
  },
  {
    src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554553/bfaf-2.png",
    alt: "Hair treatment client result 2",
  },
  {
    src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554550/bfaf-3.png",
    alt: "Hair treatment client result 3",
  },
  {
    src: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786554550/bfaf-4.png",
    alt: "Hair treatment client result 4",
  },
  // {
  //   src: "/bfaf-5.png",
  //   alt: "Hair treatment client result 5",
  // },
  // {
  //   src: "/bfaf-6.png",
  //   alt: "Hair treatment client result 6",
  // },
];

const scrollingImages = [...images, ...images];

export default function BeforeAfter() {
  const [visibleItems, setVisibleItems] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = media.matches;
    const handleChange = () => {
      prefersReducedMotion.current = media.matches;
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative w-full scroll-mt-28 overflow-hidden bg-white px-4 py-8 [font-family:'Inter',sans-serif] sm:px-6 sm:py-12 lg:px-8" id="results">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />

      {/* Faint strand linework echoing the CTA section's texture */}
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
        <div className="mx-auto max-sm:mb-4 mb-8 max-w-3xl text-center sm:mb-10">
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
          <p className="animate-slip-up animation-delay-200 mt-3 max-sm:mt-1 text-[14px] leading-6 text-[#171717]/70 md:text-[15px] lg:text-[16px]">
            See how our personalised treatments have helped patients improve their skin concerns with doctor-led care and advanced aesthetic treatments.
          </p>
        </div>

        <div
          className="animate-pop animation-delay-300 relative"
          role="region"
          aria-label="Before and after treatment results gallery"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#c6a03b]">Before &amp; After Gallery</p>
          <p className="sr-only">Before and after treatment results move automatically.</p>

          <div className="relative mx-auto overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/80 to-transparent shadow-[18px_0_36px_-24px_rgb(198_160_59_/_35%)] sm:w-16 lg:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/80 to-transparent shadow-[-18px_0_36px_-24px_rgb(198_160_59_/_35%)] sm:w-16 lg:w-24" />

            <div
              className="flex w-max items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
              style={{
                animation:
                  isPaused || prefersReducedMotion.current ? "none" : "results-marquee 42s linear infinite",
              }}
            >
              {scrollingImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`shrink-0 transition-all duration-300 ${
                    visibleItems === 1
                      ? "w-[280px] sm:w-[320px]"
                      : visibleItems === 2
                        ? "w-[330px] md:w-[360px]"
                        : "w-[350px] lg:w-[380px]"
                  }`}
                >
                  <div className="group relative mx-auto overflow-hidden rounded-xl border border-[#c6a03b]/45 bg-white shadow-[0_18px_45px_-14px_rgb(23_23_23_/_24%)] transition-shadow duration-300 hover:shadow-[0_24px_55px_-16px_rgb(221_121_0_/_32%)]">
                    <div className="relative aspect-[4/4] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="mt-9 flex justify-center">
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
      <style>{`
        @keyframes results-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
      `}</style>
    </section>
  );
}
