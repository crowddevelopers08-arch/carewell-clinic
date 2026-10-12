"use client";

import { Award, Star, Users, ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import AnimatedNumber from "./AnimatedNumber";

const stats = [
  { icon: Award, value: "15 +", label: "Years of Experience" },
  { icon: Users, value: "3,124 +", label: "Satisfied Patients" },
  { icon: Star, value: "4.9", label: "Google Ratings" },
] as const;

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={`${inter.className} scroll-mt-20 bg-[#f7f5f1] px-4 py-10 text-[#171717] sm:px-6 sm:py-12 lg:py-16`}>
      <div className="mx-auto max-w-[1272px] text-center">
        <p className="mb-2 text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">
          WHY CHOOSE US
        </p>
        <h2
          className={`${cormorant.className} mx-auto mb-8 max-w-[760px] text-[28px] font-semibold leading-[1.15] text-[#171717] sm:mb-10 sm:text-[36px] md:text-[44px] lg:mb-12 lg:text-[52px] lg:leading-[1.12]`}
        >
          Why Choose <span className="text-[#c6a03b]">Carewell Skin Hair Laser Clinic</span> for LHR?
        </h2>

        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="h-10 w-10 shrink-0 text-[#c6a03b] sm:h-11 sm:w-11" strokeWidth={1.5} aria-hidden="true" />
              <div className="text-left">
                <AnimatedNumber
                  value={value}
                  className={`${cormorant.className} block text-[32px] font-semibold leading-none text-[#171717] sm:text-[38px]`}
                />
                <p className="mt-1.5 text-[13px] font-medium text-[#171717]/65 sm:text-[14px]">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:text-sm"
          >
             Know More About Carewell 
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
