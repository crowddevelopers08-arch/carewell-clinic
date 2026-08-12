"use client";

import Image from "next/image";
import { ChevronDown, CircleHelp } from "lucide-react";
import { useState } from "react";

type FrequentlyAskedQuestionsProps = {
  imageSrc1?: string;
  imageSrc2?: string;
};

const questions = [
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. Every treatment begins with a detailed consultation to understand your skin concerns and recommend the most suitable treatment plan.",
  },
  {
    question: "Are treatments personalised?",
    answer:
      "Yes. Every treatment plan is customised based on your skin type, condition, and goals.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your skin concern and the treatment recommended during your consultation.",
  },
  {
    question: "Are treatments safe?",
    answer:
      "Treatments are performed under medical supervision using advanced aesthetic techniques after a thorough skin assessment.",
  },
];

export default function FrequentlyAskedQuestions({
  imageSrc1 = "https://res.cloudinary.com/x6ec5hqm/image/upload/a_-90/_DSC4625.jpg",
  imageSrc2 = "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786553627/_DSC4692.jpg",
}: FrequentlyAskedQuestionsProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-4 py-14 [font-family:'Inter',sans-serif] sm:px-6 sm:py-10 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
                <div className="relative z-10 mx-auto mb-6 max-w-3xl text-center sm:mb-0">
        <span className="mb-0 inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px] lg:text-[14px]">
          <span className="h-px w-6 bg-[#c6a03b]" />
          FAQ
          <span className="h-px w-6 bg-[#dd7900]" />
        </span>
        <h2 className="animate-slip-up animation-delay-100 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px] lg:text-[54px]">
         Frequently Asked  {" "}
          <span className="relative inline-block italic text-[#c6a03b]">
            Questions .
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
        </header>

        <div className="mt-5 grid items-center gap-12 lg:mt-10 lg:grid-cols-[1fr_1.06fr] lg:gap-14">
          <div className="relative mx-auto h-[350px] w-full max-w-[500px] sm:h-[470px]">
            <div className="absolute inset-x-[7%] inset-y-[5%] rounded-[36px] bg-[#c6a03b]/10" />
            <div className="absolute left-[3%] top-[3%] h-[76%] w-[61%] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_24px_55px_-24px_rgb(23_23_23_/_35%)] sm:border-[7px]">
              <Image
                src={imageSrc1}
                alt="Medical care team"
                fill
                quality={95}
                className="object-cover object-top"
                sizes="(max-width: 640px) 57vw, (max-width: 1024px) 305px, 305px"
              />
            </div>
            <div className="absolute bottom-[3%] right-[2%] h-[62%] w-[54%] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_24px_55px_-24px_rgb(23_23_23_/_35%)] sm:border-[7px]">
              <Image
                src={imageSrc2}
                alt="Doctor providing care"
                fill
                quality={95}
                className="object-cover object-top"
                sizes="(max-width: 640px) 51vw, (max-width: 1024px) 270px, 270px"
              />
            </div>
            <div className="absolute bottom-[5%] left-[11%] h-12 w-12 rounded-full border-[9px] border-[#dd7900]/80 sm:h-16 sm:w-16" />
            <div className="absolute right-[8%] top-[7%] h-5 w-5 rounded-full bg-[#c6a03b] sm:h-7 sm:w-7" />
          </div>

          <div className="space-y-4">
            {questions.map((item, index) => {
              const isOpen = openQuestion === index;

              return (
                <div key={item.question} className="overflow-hidden rounded-[12px] border border-[#c6a03b]/30 bg-white shadow-[0_14px_32px_-24px_rgb(23_23_23_/_28%)]">
                  <button
                    type="button"
                    className="flex min-h-[92px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <CircleHelp size={25} fill="#c6a03b" className="shrink-0 text-white" />
                    <span className="flex-1 text-[15px] font-medium leading-6 text-[#171717] sm:text-[16px]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={23}
                      className={`shrink-0 text-[#dd7900] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14px] leading-6 text-[#171717]/70">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
