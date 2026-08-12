'use client'

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

type SkinConcern = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const DEFAULT_STEPS: SkinConcern[] = [
  {
    id: 1,
    title: "Acne",
    description:
      "Target active breakouts with personalised, doctor-led acne care for clearer-looking skin.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551436/we-treat1.png",
  },
  {
    id: 2,
    title: "Acne Scars",
    description:
      "Smooth the appearance of acne scars with treatments tailored to your skin and goals.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551442/we-treat2.png",
  },
  {
    id: 3,
    title: "Pigmentation",
    description:
      "Address dark spots and uneven pigmentation for a more balanced, radiant complexion.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551502/we-treat3.png",
  },
  {
    id: 4,
    title: "Uneven Skin Tone",
    description:
      "Restore a more even-looking tone with gentle treatments designed around your skin needs.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551502/we-treat4.png",
  },
  {
    id: 5,
    title: "Dull Skin",
    description:
      "Revive tired, lacklustre skin with hydration-focused treatments that boost natural glow.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551450/we-treat5.png",
  },
  {
    id: 6,
    title: "Fine Lines & Wrinkles",
    description:
      "Soften the look of fine lines and wrinkles with refined, natural-looking rejuvenation.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551449/we-treat6.png",
  },
  {
    id: 7,
    title: "Skin Rejuvenation",
    description:
      "Refresh your complexion with personalised care that supports smoother, healthier-looking skin.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551503/we-treat7.png",
  },
  {
    id: 8,
    title: "Laser Hair Reduction",
    description:
      "Enjoy long-lasting smoothness with safe, effective laser hair-reduction sessions.",
    image:
      "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551504/we-treat8.png",
  },
];

const CARD_WIDTH = 400;
const GAP = 24; // px

export default function RootCanalJourney() {
  const steps = DEFAULT_STEPS;
  const [activeStep, setActiveStep] = useState(1);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateActiveStep = () => {
      const step = Math.round(scroller.scrollLeft / (CARD_WIDTH + GAP)) + 1;
      setActiveStep(Math.min(Math.max(step, 1), steps.length));
    };

    scroller.addEventListener("scroll", updateActiveStep, { passive: true });
    return () => scroller.removeEventListener("scroll", updateActiveStep);
  }, [steps.length]);

  const scrollByCard = (direction: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  return (
    <section id="how-we-treat" className="relative w-full overflow-hidden bg-white py-10 [font-family:'Inter',sans-serif] sm:py-12">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:justify-between">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px]">
              <span className="h-px w-6 bg-[#c6a03b]" />
              How We Treat
              <span className="h-px w-6 bg-[#dd7900]" />
            </span>
                      <h2 className="animate-slip-up animation-delay-100 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px] lg:text-[54px]">
            Skin Concerns &{" "}
            <span className="relative inline-block italic text-[#c6a03b]">
              We Treat .
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
          </div>

          <div className="flex shrink-0 items-center gap-3 pt-2 sm:gap-4">
            <span className="text-lg font-semibold text-[#171717]" aria-live="polite">
              <span className="font-bold text-[#171717]">
                {String(activeStep).padStart(2, "0")}
              </span>
              <span className="mx-1 text-[#171717]/35">/</span>
              <span className="text-[#171717]/45">
                {String(steps.length).padStart(2, "0")}
              </span>
            </span>
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous step"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a03b]/45 bg-white text-[#171717] transition-colors hover:bg-[#c6a03b] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next step"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white transition-colors hover:bg-[#dd7900]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="snap-start w-[400px] shrink-0 rounded-2xl border border-[#c6a03b]/35 bg-white p-4 shadow-[0_18px_45px_-14px_rgb(23_23_23_/_16%)]"
            >
              {/* Image */}
              <div className="relative mb-4 h-[280px] w-full overflow-hidden rounded-xl bg-[#c6a03b]/15">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c6a03b] text-white">
                  <Plus size={14} strokeWidth={3} />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#c6a03b]">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 [font-family:'Cormorant_Garamond',serif] text-[26px] font-semibold leading-tight text-[#171717]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-[#171717]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex cursor-pointer items-center  gap-3 rounded-full bg-[#171717] px-4 py-2 pl-7 text-sm font-medium tracking-[0.03em] text-white hover:bg-[#dd7900]"
          >
            <span className="text-white">Book Consultation</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
