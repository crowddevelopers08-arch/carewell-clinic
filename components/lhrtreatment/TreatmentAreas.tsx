"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import styles from "./TreatmentAreas.module.css";

const treatmentAreas = [
  { id: "face-upper-lip", name: "Face & Upper Lip", alt: "Illustration of laser hair reduction around the upper lip" },
  { id: "underarm", name: "Underarm", alt: "Illustration of underarm laser hair reduction" },
  { id: "arms-legs", name: "Arms & Legs", alt: "Illustration of laser hair reduction on the lower legs" },
  { id: "back-body", name: "Back & Body", alt: "Illustration of laser hair reduction on the back" },
] as const;

export default function TreatmentAreas() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselId = useId();

  const goToArea = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const targetIndex = (index + treatmentAreas.length) % treatmentAreas.length;
    const first = carousel.children[0] as HTMLElement;
    const target = carousel.children[targetIndex] as HTMLElement;
    carousel.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id="lhr-treatment-areas" className={`${inter.className} scroll-mt-20 bg-[#f7f5f1] px-4 py-8 text-[#171717] sm:px-6 sm:py-10 lg:py-12`} aria-labelledby="treatment-areas-heading">
      <div className="mx-auto max-w-[1272px]">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-[820px]">
            <p className="mb-3 flex items-center gap-3 text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">
              LHR TREATMENT AREAS
            </p>
            <h2 id="treatment-areas-heading" className={`${cormorant.className} text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>
              Unwanted Hair Anywhere? <span className="text-[#c6a03b]">Find Your Treatment Area.</span>
            </h2>
          </div>
        </div>

        <ul
          id={carouselId}
          ref={carouselRef}
          aria-label="LHR treatment areas"
          tabIndex={0}
          onScroll={(event) => {
            const carousel = event.currentTarget;
            const first = carousel.children[0] as HTMLElement;
            const second = carousel.children[1] as HTMLElement;
            const spacing = second.offsetLeft - first.offsetLeft;
            if (spacing > 0) setActiveIndex(Math.min(treatmentAreas.length - 1, Math.max(0, Math.round(carousel.scrollLeft / spacing))));
          }}
          onKeyDown={(event) => {
            if (window.matchMedia("(min-width: 640px)").matches) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              goToArea(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-[18px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:gap-5"
        >
          {treatmentAreas.map((area, index) => (
            <li key={area.id} className="group min-w-0 shrink-0 basis-full snap-start snap-always overflow-hidden rounded-[18px] border border-[#171717]/8 bg-white transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eae4d8] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={`/lhr-areas/${area.id}.png`}
                  alt={area.alt}
                  fill
                  sizes="(min-width: 1280px) 303px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[11px] font-semibold text-[#927421] backdrop-blur-sm sm:left-4 sm:top-4" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-7 overflow-hidden sm:h-8" aria-hidden="true">
                  <svg className={`${styles.wave} absolute bottom-0 h-full w-[200%] max-w-none`} viewBox="0 0 1200 32" preserveAspectRatio="none" style={{ animationDelay: `${index * -3}s` }}>
                    <path fill="#c6a03b" fillOpacity="0.45" d="M0 16 Q75 32 150 16 T300 16 T450 16 T600 16 T750 16 T900 16 T1050 16 T1200 16 V32 H0Z" />
                    <path fill="#c6a03b" d="M0 18 Q75 0 150 18 T300 18 T450 18 T600 18 T750 18 T900 18 T1050 18 T1200 18 V32 H0Z" />
                  </svg>
                </div>
              </div>
              <div className="relative bg-[#c6a03b] px-4 py-4 text-center text-white sm:px-5">
                <h3 className="text-[14px] font-medium leading-snug sm:text-[16px]">{area.name}</h3>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
          <button type="button" onClick={() => goToArea(activeIndex - 1)} aria-label="Previous treatment area" aria-controls={carouselId} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#c6a03b]/35 text-[#171717] hover:bg-[#c6a03b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex">
            {treatmentAreas.map((area, index) => (
              <button key={area.id} type="button" onClick={() => goToArea(index)} aria-label={`Show ${area.name}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls={carouselId} className="flex h-11 w-7 cursor-pointer items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-[#c6a03b]">
                <span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${activeIndex === index ? "w-5 bg-[#c6a03b]" : "w-2 bg-[#171717]/20"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => goToArea(activeIndex + 1)} aria-label="Next treatment area" aria-controls={carouselId} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#c6a03b]/35 text-[#171717] hover:bg-[#c6a03b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="sr-only" aria-live="polite" aria-atomic="true">Treatment area {activeIndex + 1} of {treatmentAreas.length}: {treatmentAreas[activeIndex].name}</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-5 text-center sm:mt-8 sm:gap-6">
          <p className="max-w-[760px] text-[14px] leading-relaxed text-[#171717]/65 sm:text-[15px]">
            Additional areas may include the bikini line, chest, and abdomen, subject to consultation
          </p>
          <button type="button" onClick={scrollToContact} className="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:text-sm">
            Get a Personalised LHR Plan
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
