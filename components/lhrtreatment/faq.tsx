"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import styles from "./faq.module.css";

const faqs = [
  {
    number: "1",
    question: "Is Laser Hair Reduction safe for Indian skin tones?",
    answer: "Yes, LHR can be suitable for different Indian skin tones when performed using appropriate laser technology and settings. A skin assessment helps determine the right approach for you.",
  },
  {
    number: "2",
    question: "How many LHR sessions will I need?",
    answer: "Most patients require around 6\u20138 sessions, depending on their hair growth, skin type, and treatment area. Your doctor will recommend a personalised treatment plan.",
  },
  {
    number: "3",
    question: "Is Laser Hair Reduction painful?",
    answer: "You may experience mild warmth or a snapping sensation during treatment. Discomfort varies depending on the treatment area and individual skin sensitivity.",
  },
  {
    number: "4",
    question: "Will my hair grow back after LHR?",
    answer: "LHR provides long-term hair reduction rather than guaranteed permanent removal. Some hair may regrow over time, and maintenance sessions may be recommended.",
  },
  {
    number: "5",
    question: "Can I shave between LHR sessions?",
    answer: "Yes, shaving is generally allowed between sessions. However, waxing, plucking, and threading should be avoided as they remove hair from the follicle.",
  },
  {
    number: "6",
    question: "Are there any side effects of Laser Hair Reduction?",
    answer: "Temporary redness, swelling, or mild sensitivity may occur after treatment. Less common risks include burns or pigmentation changes. Your clinical team will explain appropriate precautions and aftercare.",
  },
  {
    number: "7",
    question: "Can I get LHR done on my face and body?",
    answer: "Yes, LHR can treat areas such as the face, upper lip, underarms, arms, legs, back, and bikini line, depending on your suitability.",
  },
  {
    number: "8",
    question: "How much does Laser Hair Reduction cost at Carewell?",
    answer: "The cost depends on the treatment area and number of sessions required. Book a consultation at Carewell to receive a personalised treatment recommendation and pricing details.",
  },
];

function Reveal({ children, className = "", direction, delay = 0 }: {
  children: ReactNode;
  className?: string;
  direction: "up" | "left" | "right";
  delay?: number;
  as?: "div";
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={elementRef} className={`${styles.reveal} ${className}`} style={{
    "--delay": `${delay}ms`,
    "--offset-x": direction === "left" ? "-12px" : direction === "right" ? "12px" : "0px",
    "--offset-y": direction === "up" ? "12px" : "0px",
  } as CSSProperties}>{children}</div>;
}

function FaqCard({ item }: { item: (typeof faqs)[number] }) {
  return (
    <details className="group rounded-2xl border border-[#c6a03b]/15 bg-white shadow-[0_10px_30px_rgba(23,23,23,.07)] open:border-[#c6a03b]/40">
      <summary className="flex cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6a03b] list-none items-center gap-3 px-4 py-4 text-left [&::-webkit-details-marker]:hidden">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[14px] font-semibold text-[#c6a03b] ring-1 ring-[#c6a03b]/20">{item.number}</span>
        <span className="flex-1 text-[14px] leading-5 font-medium text-[#171717] sm:text-[15px]">{item.question}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#c6a03b] text-[18px] leading-none text-white transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
      </summary>
      <div className="border-t border-[#c6a03b]/10 px-5 py-4 text-[14px] leading-relaxed text-[#171717]/70 sm:text-[15px]">👉 {item.answer}</div>
    </details>
  );
}

export default function LhrFaq() {

  return (
    <section id="lhr-faq" aria-labelledby="lhr-faq-heading" className={`${inter.className} overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:pb-10`}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal direction="up" className="mx-auto max-w-[850px] text-center">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">FAQ’s</p>
          <h2 id="lhr-faq-heading" className={`${cormorant.className} mt-4 text-[28px] font-semibold leading-[1.15] text-[#171717] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>Have Questions About LHR? <span className="text-[#c6a03b]">We&apos;ve Got Answers.</span></h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_330px_1fr] lg:gap-7 xl:grid-cols-[1fr_370px_1fr] xl:gap-10">
          <div className="grid gap-4">{faqs.slice(0,4).map((item,i)=><Reveal as="div" direction="left" delay={i*100} key={item.number}><FaqCard item={item}/></Reveal>)}</div>

          <Reveal direction="up" className="relative order-first mx-auto aspect-[5/4] w-full max-w-[360px] lg:order-none">
            <span className="absolute -inset-4 rounded-[45%_55%_48%_52%/52%_42%_58%_48%] bg-[#c6a03b]/12"/>
            {/* <span className="absolute -left-7 top-12 h-16 w-16 rounded-full border-[10px] border-[#c6a03b]/55"/> */}
            {/* <span className="absolute -right-5 bottom-16 h-12 w-12 rounded-full bg-[#171717]/25"/> */}
            <div className="relative h-full overflow-hidden rounded-[46%_54%_44%_56%/38%_42%_58%_62%] border-[7px] border-white shadow-[0_24px_55px_rgba(198,160,59,.2)]">
              <Image src="/clinic/consultation.webp" alt="A patient consultation with Dr Dinesh Manjrekar at Carewell Clinic" fill sizes="(max-width: 1024px) 360px, 370px" className="object-cover object-center"/>
            </div>
          </Reveal>

          <div className="grid gap-4">{faqs.slice(4).map((item,i)=><Reveal as="div" direction="right" delay={i*100} key={item.number}><FaqCard item={item}/></Reveal>)}</div>
        </div>

        <Reveal direction="up" className="mt-12 flex justify-center">
          <button type="button" onClick={scrollToContact} className="inline-flex w-full max-w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] py-2.5 pl-5 pr-2.5 text-left text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:w-auto sm:pl-6 sm:text-sm">
            Still Have Questions? Talk to Our Experts.
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </Reveal>
      </div>

    
    </section>
  );
}
