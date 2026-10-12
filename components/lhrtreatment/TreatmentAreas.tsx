"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";

// Monochrome line-art icons — recolored white via the `invert` filter
// against the gold circle below.
const treatmentAreas = [
  { id: "face-upper-lip", icon: "/tre-lhr-1.png", name: "Face & Upper Lip", alt: "Face & upper lip laser hair reduction" },
  { id: "underarm", icon: "/tre-lhr-2.png", name: "Underarm", alt: "Underarm laser hair reduction" },
  { id: "arms-legs", icon: "/tre-lhr-3.png", name: "Arms & Legs", alt: "Arms & legs laser hair reduction" },
  { id: "back-body", icon: "/tre-lhr-4.png", name: "Back & Body", alt: "Back & body laser hair reduction" },
] as const;

export default function TreatmentAreas() {
  return (
    <section id="lhr-treatment-areas" className={`${inter.className} scroll-mt-20 bg-[#f7f5f1] px-4 py-8 text-[#171717] sm:px-6 sm:py-10 lg:py-12`} aria-labelledby="treatment-areas-heading">
      <div className="mx-auto max-w-[1272px]">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">
            LHR TREATMENT AREAS
          </p>
          <h2 id="treatment-areas-heading" className={`${cormorant.className} mx-auto max-w-[820px] text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>
            Unwanted Hair Anywhere? <span className="text-[#c6a03b]">Find Your Treatment Area.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
          {treatmentAreas.map((area, index) => (
            <div key={area.id} className="group flex flex-col items-center gap-4 text-center">
              <div className="lhr-icon-float" style={{ animationDelay: `${index * -0.7}s` }}>
                <span className="flex h-28 w-28 items-center justify-center rounded-full bg-[#c6a03b] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dd7900] group-hover:shadow-lg motion-reduce:transition-none sm:h-32 sm:w-32">
                  <Image
                    src={area.icon}
                    alt={area.alt}
                    width={80}
                    height={80}
                    className="h-16 w-16 object-contain brightness-0 invert transition-transform duration-300 group-hover:rotate-6 motion-reduce:transition-none sm:h-20 sm:w-20"
                  />
                </span>
              </div>
              <h3 className="text-[14px] font-semibold leading-snug text-[#171717] sm:text-[16px]">{area.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 text-center sm:mt-12 sm:gap-6">
          <p className="max-w-[760px] text-[14px] leading-relaxed text-[#171717]/65 sm:text-[15px]">
            Additional areas may include the bikini line, chest, and abdomen, subject to consultation
          </p>
          <button type="button" onClick={scrollToContact} className="inline-flex cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:text-sm">
            Explore Your LHR Options
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .lhr-icon-float { animation: lhr-icon-float 3.4s ease-in-out infinite; }
        @keyframes lhr-icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lhr-icon-float { animation: none; }
        }
      `}</style>
    </section>
  );
}
