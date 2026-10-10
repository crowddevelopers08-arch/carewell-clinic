"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import Reveal from "./Reveal";

function ConsultationCta({ onClick, className }: { onClick: () => void; className: string }) {
  return (
    <button type="button" onClick={onClick} className={`${className} inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-left text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:text-sm`}>
      Book Your Consultation Today
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
    </button>
  );
}

export default function FinalCta() {
  return (
    <section aria-label="Final consultation invitation" className={`${inter.className} overflow-hidden bg-white pt-8 lg:py-0`}>
      <div className="relative mx-auto w-full overflow-hidden bg-[#171717] lg:grid lg:min-h-[430px] lg:grid-cols-[1.05fr_.95fr]">
        <span className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <span className="absolute left-[38%] top-10 h-40 w-40 rounded-full bg-[#c6a03b]/10 blur-2xl" />

        {/* Desktop / tablet-lg layout — unchanged */}
        <Reveal direction="left" className="relative z-10 hidden flex-col items-start justify-center px-7 py-10 text-white sm:px-12 lg:flex lg:px-16 lg:py-10">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#c6a03b] sm:text-[13px]">FINAL CTA SECTION</p>
          <h2 className={`${cormorant.className} mt-5 max-w-[650px] text-[28px] font-semibold leading-[1.15] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>
            Ready for <span className="text-[#c6a03b]">Smoother Skin</span> and Less Unwanted Hair?
          </h2>
          <p className="mt-4 max-w-[650px] text-[14px] leading-relaxed text-white/80 sm:text-[15px] lg:text-[16px]">
            Take the first step with Carewell&apos;s personalised Laser Hair Reduction consultation and discover a treatment plan suited to your skin and goals.
          </p>
          <ConsultationCta onClick={scrollToContact} className="mt-8" />
        </Reveal>

        <Reveal direction="right" className="relative hidden min-h-[360px] lg:block lg:min-h-full">
          <span className="absolute inset-y-8 left-0 z-10 hidden w-px bg-white/15 lg:block" />
          <div className="absolute inset-5 overflow-hidden rounded-[24px] sm:inset-7 lg:bottom-0 lg:left-8 lg:right-0 lg:top-0 lg:rounded-l-[45%] lg:rounded-r-none">
            <Image src="https://res.cloudinary.com/glsztjdl/image/upload/v1790062587/_DSC4586.webp" alt="Illustration of upper lip laser hair reduction" fill sizes="(max-width: 1024px) 100vw, 620px" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/25 via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* Mobile / tablet layout — label, heading, image, button */}
        <div className="relative z-10 px-7 py-12 text-white sm:px-12 lg:hidden">
          <Reveal direction="left">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#c6a03b] sm:text-[13px]">FINAL CTA SECTION</p>
            <h2 className={`${cormorant.className} mt-5 max-w-[650px] text-[28px] font-semibold leading-[1.15] sm:text-[36px] md:text-[44px]`}>
              Ready for <span className="text-[#c6a03b]">Smoother Skin</span> and Less Unwanted Hair?
            </h2>
          <p className="mt-4 max-w-[650px] text-[14px] leading-relaxed text-white/80 sm:text-[15px] lg:text-[16px]">
            Take the first step with Carewell&apos;s personalised Laser Hair Reduction consultation and discover a treatment plan suited to your skin and goals.
          </p>
          </Reveal>

          <Reveal direction="right" className="relative mt-7 aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:aspect-[16/9]">
            <Image src="https://res.cloudinary.com/glsztjdl/image/upload/v1790062587/_DSC4586.webp" alt="Illustration of upper lip laser hair reduction" fill sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/35 via-transparent to-transparent" />
          </Reveal>

          <Reveal direction="up" className="flex max-sm:justify-center">
            <ConsultationCta onClick={scrollToContact} className="mt-7" />
          </Reveal>
        </div>
      </div>

    </section>
  );
}
