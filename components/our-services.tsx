"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

const reasons = [
  {
    icon: "/icons1.png",
    title: "Personalised Treatment Plans",
    desc: "Every skin type is unique. Your treatment is tailored to your individual concerns and goals.",
  },
  {
    icon: "/icons2.png",
    title: "Doctor-Led Care",
    desc: "Every procedure is planned and performed under the supervision of an experienced aesthetic doctor.",
  },
  {
    icon: "/icons3.png",
    title: "Advanced Technology",
    desc: "Modern aesthetic technologies designed to treat a wide range of skin concerns safely and effectively.",
  },
  {
    icon: "/icons4.png",
    title: "Continuous Follow-Up",
    desc: "We continue to support your progress through regular follow-ups and personalised guidance throughout your treatment journey.",
  },
];

function ReasonCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group relative h-full rounded-3xl bg-white overflow-hidden isolate"
      style={{
        boxShadow: "0 20px 40px -18px rgba(23,23,23,0.18)",
      }}
    >
      {/* animated fill layer: grows from bottom to top on hover */}
      <div
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-[#171717] transition-transform duration-500 ease-out group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-col h-full p-8">
        <div className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={icon}
            alt=""
            className="w-9 h-9 opacity-90"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(53%) sepia(96%) saturate(1322%) hue-rotate(2deg) brightness(97%) contrast(101%)",
            }}
          />
        </div>

        <h3 className="[font-family:'Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[#171717] transition-colors duration-500 ease-out group-hover:text-white">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed mb-8 text-[#171717]/65 transition-colors duration-500 ease-out group-hover:text-white/70">
          {desc}
        </p>

        <div className="mt-auto flex items-center gap-3">
          <span className="font-medium text-[15px] tracking-[0.03em] text-[#c6a03b] transition-colors duration-500 ease-out group-hover:text-[#dd7900]">
            Read More
          </span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c6a03b] text-white transition-colors duration-500 ease-out group-hover:bg-[#dd7900]">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative bg-white py-6 lg:py-10 px-6 overflow-hidden [font-family:'Inter',sans-serif]">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />

      {/* Faint strand linework echoing the site's other sections */}
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px] lg:text-[14px] mb-4 max-sm:mb-2">
          <span className="h-px w-6 bg-[#c6a03b]" />
          Why Choose Us
          <span className="h-px w-6 bg-[#dd7900]" />
        </span>

        <h2 className="[font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] mb-10 md:text-[46px] lg:text-[54px] max-sm:mb-3">
          Why Choose{" "}
          <span className="relative inline-block italic text-[#c6a03b]">
            Carewell
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
          </span>{" "}
          Skin, Laser &amp; Hair Clinic?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
          {reasons.map((r) => (
            <ReasonCard key={r.title} {...r} />
          ))}
        </div>

        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-3 bg-[#171717] hover:bg-[#dd7900] transition-colors text-white text-sm font-medium tracking-[0.03em] px-7 py-3 rounded-full"
        >
          Book Consultation
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#171717]">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </section>
  );
}
