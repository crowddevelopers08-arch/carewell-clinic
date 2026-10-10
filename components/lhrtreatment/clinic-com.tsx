"use client";

import { ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import styles from "./clinic-com.module.css";

export default function AboutClinic() {
  return (
    <section id="about-clinic" aria-labelledby="about-clinic-heading" className={`${styles.section} ${inter.className} relative isolate overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-12 lg:py-16`}>
      <div className={`${styles.background} pointer-events-none absolute inset-0 -z-20`} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#171717]/75" aria-hidden="true" />
      <div className="mx-auto max-w-[1272px]">
        <div className="mb-6 text-center sm:mb-8">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.16em] text-[#e3c776] sm:text-[13px]">ABOUT THE CLINIC</p>
          <h2 id="about-clinic-heading" className={`${cormorant.className} mx-auto max-w-[1000px] text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>
            Where Advanced Technology Meets <span className="text-[#e3c776]">Personalised Care.</span>
          </h2>
        </div>
        <div className="mx-auto max-w-[900px] text-center">
          <div className="space-y-4 text-[14px] leading-[1.8] text-white/90 sm:text-[15px] lg:text-[16px]">
            <p>
              Located in Andheri East, Mumbai, Carewell Skin Hair Laser Clinic brings over 15 years of experience in providing personalised skin, hair, and laser treatments.
            </p>
            <p>
              With an experienced team of aesthetic professionals and advanced laser technology, Carewell focuses on delivering treatments tailored to each patient&apos;s individual needs. From Laser Hair Reduction to comprehensive skin and hair care, every treatment begins with a detailed consultation, clear guidance, and realistic expectations.
            </p>
            <p>
              With an emphasis on patient comfort, safety, and personalised attention, Carewell aims to make every visit a reassuring experience.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="mt-7 inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:text-sm"
          >
            Book Your Consultation
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
