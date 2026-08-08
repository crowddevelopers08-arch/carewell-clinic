"use client";

import React, { useState } from "react";
import { BadgeCheck, ChevronDown, HeartPulse } from "lucide-react";

type FaqSectionProps = {
  leftPhoto?: string;
  rightPhoto?: string;
  avatarPhoto?: string;
};

const FAQS = [
  {
    q: "Why opt for our medical services for your family?",
    a: "Our board-certified specialists combine advanced diagnostics with compassionate, personalised care so every member of your family gets the attention they deserve.",
  },
  {
    q: "Why choose our medical for your family?",
    a: "From routine checkups to specialist consultations, our integrated care model keeps your family's health records and treatment plans in one place.",
  },
  {
    q: "Why opt for our healthcare services for your family?",
    a: "We combine modern facilities with experienced doctors to deliver safe, reliable healthcare for every stage of life.",
  },
  {
    q: "Why choose our medical services for your family?",
    a: "Transparent pricing, flexible appointment slots, and a dedicated care coordinator make managing your family's health simple.",
  },
  {
    q: "Why choose our healthcare for your family?",
    a: "Our multidisciplinary team works together so you never have to repeat your story — just better, connected care.",
  },
];

function PhotoSlot({
  className,
  photo,
  alt,
}: {
  className: string;
  photo?: string;
  alt: string;
}) {
  return (
    <div className={`overflow-hidden bg-slate-200 ${className}`}>
      {photo ? (
        <img src={photo} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300" />
      )}
    </div>
  );
}

export default function FaqSection({ leftPhoto, rightPhoto, avatarPhoto }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#eef4fb] px-4 py-16 [font-family:'Inter',sans-serif] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[32px] font-extrabold text-[#0b1642] sm:text-[38px] lg:text-[44px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[15px] text-slate-500 sm:text-base">
          Get latest news in your inbox. Consectetur adipiscing elitadipiscing elitse ddo eiusmod tempor incididunt
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* LEFT — image collage */}
        <div className="relative mx-auto mt-10 h-[420px] w-full max-w-[380px] pb-10 sm:h-[460px] sm:max-w-[420px]">
          <PhotoSlot
            className="absolute left-0 top-10 z-10 h-[85%] w-[62%] rounded-[26px] shadow-xl"
            photo={leftPhoto}
            alt="Care team"
          />
          <PhotoSlot
            className="absolute right-0 top-0 z-20 h-full w-[62%] rounded-[26px] shadow-xl"
            photo={rightPhoto}
            alt="Surgeon at work"
          />

          {/* "Get Your Answer" floating card */}
          <div className="absolute -top-6 left-4 z-30 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
              🥺
            </div>
            <div className="text-left">
              <p className="text-[15px] font-bold leading-tight text-[#0b1642]">Get Your Answer</p>
              <p className="text-[12px] text-slate-500">Frequently Asked Questions</p>
            </div>
          </div>

          {/* Doctor card */}
          <div className="absolute -left-4 bottom-16 z-30 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8 sm:bottom-24">
            <div className="relative h-12 w-12 shrink-0">
              <PhotoSlot
                className="absolute inset-0 rounded-full"
                photo={avatarPhoto}
                alt="Lily A. Wilson"
              />
              <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white">
                <BadgeCheck size={10} className="text-white" />
              </span>
            </div>
            <div className="text-left">
              <p className="text-[14px] font-bold leading-tight text-[#0b1642]">Lily A. Wilson</p>
              <p className="text-[12px] text-slate-500">Senior Cardiologist</p>
            </div>
          </div>

          {/* heart badge */}
          <div className="absolute bottom-0 left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-xl">
            <HeartPulse className="text-rose-500" size={22} />
          </div>
        </div>

        {/* RIGHT — accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                    ?
                  </span>
                  <span className="flex-1 text-[15px] font-medium text-[#0b1642] sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pl-[3.75rem] text-[14px] leading-relaxed text-slate-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
