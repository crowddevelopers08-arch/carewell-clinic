"use client";

import { useEffect, useId, useRef, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./CurvedRoadmap.module.css";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
import { ArrowUpRight } from "lucide-react";

type Description = readonly string[];
type CurvedRoadmapProps = {
  title?: string;
  stepTitles?: readonly [string, string, string];
  descriptions?: readonly [Description, Description, Description];
};

const processDescriptions: readonly [Description, Description, Description] = [
  ["Your skin type, hair growth,", "medical history, and suitability", "are evaluated."],
  ["Laser energy is delivered to the", "selected treatment area using", "appropriate settings."],
  ["Multiple sessions are usually", "needed because hair grows", "in different cycles."],
];

function DescriptionText({ x, y, title, lines }: { x: number; y: number; title: string; lines: Description }) {
  return (
    <text x={x} y={y} fill="#171717" fillOpacity="0.75" fontSize="9.5" textAnchor="middle">
      <tspan x={x} fontWeight="600" fontSize="10" fill="#171717" fillOpacity="1">{title}</tspan>
      {lines.map((line, index) => <tspan key={index} x={x} dy={index === 0 ? 18 : 13}>{line}</tspan>)}
    </text>
  );
}

const stepIcons = ["/lhr-icon-3.png", "/lhr-icon-2.png", "/lhr-icon-1.png"] as const;

function CompactStepIcon({ step }: { step: number }) {
  return <Image src={stepIcons[step]} alt="" width={36} height={36} className="h-9 w-9 object-contain brightness-0 invert" />;
}

/** Vector recreation of the supplied three-step roadmap reference. */
export default function CurvedRoadmap({
  title = "Your Journey to Smoother Skin, Step by Step.",
  stepTitles = ["Skin & Hair Assessment", "Laser Treatment", "Follow-Up Sessions"],
  descriptions = processDescriptions,
}: CurvedRoadmapProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const id = useId().replace(/:/g, "");
  const gold = `${id}-gold`;
  const blue = `${id}-blue`;
  const orange = `${id}-orange`;

  return (
    <section id="lhr-process" ref={sectionRef} className={`${styles.section} ${inter.className} scroll-mt-20 bg-white px-4 py-6 text-[#171717] sm:px-6 sm:py-8`} aria-labelledby={`${id}-heading`}>
      <div className="@container mx-auto max-w-[1280px]">
        <div className={`${styles.reveal} mb-5 sm:mb-6`}>
          <p className="mb-3 flex items-center gap-3 text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">
            PROCESS
          </p>
          <h2 id={`${id}-heading`} className={`${cormorant.className} text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[36px] md:text-[44px] lg:text-[52px] lg:leading-[1.12]`}>
            {title === "Your Journey to Smoother Skin, Step by Step." ? (
              <>Your Journey to <span className="text-[#c6a03b]">Smoother Skin,</span>{" "}<em className="font-normal">Step by Step.</em></>
            ) : title}
          </h2>
        </div>
        <ol className="relative grid gap-3 md:grid-cols-3 md:gap-4 lg:hidden">
          {stepTitles.map((stepTitle, index) => (
            <li key={stepTitle} className={`${styles.reveal} relative flex min-w-0 items-start gap-4 rounded-[18px] border border-[#171717]/10 bg-[#f7f5f1]/50 p-4 sm:p-5 md:flex-col`} style={{ "--delay": `${index * 250 + 180}ms` } as CSSProperties}>
              <div className={`flex w-[72px] shrink-0 flex-col items-center gap-2 rounded-[7px] px-3 py-3 text-white shadow-sm ${index === 0 ? "bg-linear-to-b from-[#927421] to-[#c6a03b]" : index === 1 ? "bg-linear-to-b from-[#3b3b3b] to-[#171717]" : "bg-linear-to-b from-[#dd7900] to-[#c6a03b]"}`}>
                <span className="text-[12px] font-medium">Step {index + 1}</span>
                <CompactStepIcon step={index} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-[15px] font-semibold leading-snug sm:text-[16px]">{stepTitle}</h3>
                <p className="text-[14px] leading-relaxed text-[#171717]/75 sm:text-[15px]">{descriptions[index].join(" ")}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="hidden rounded-[20px] lg:block">
          <svg
            viewBox="0 60 698 316"
            className={`${inter.className} block h-auto w-full`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby={`${id}-title ${id}-description`}
          >
            <title id={`${id}-title`}>{title}</title>
            <desc id={`${id}-description`}>
              Three steps along a dark curved road, with skin and hair assessment,
              laser treatment, and follow-up session icons in gold, charcoal, and warm gold cards.
              {descriptions.map((lines, index) => ` Step ${index + 1}: ${stepTitles[index]}. ${lines.join(" ")}`).join("")}
            </desc>
            <defs>
              <linearGradient id={gold} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#927421" />
                <stop offset="1" stopColor="#c6a03b" />
              </linearGradient>
              <linearGradient id={blue} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3b3b3b" />
                <stop offset="1" stopColor="#171717" />
              </linearGradient>
              <linearGradient id={orange} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#dd7900" />
                <stop offset="1" stopColor="#c6a03b" />
              </linearGradient>
            </defs>

            <rect width="698" height="376" rx="20" fill="white" />

            {/* One continuous road with a crest between two valleys. */}
            <path className={styles.road} pathLength="1" d="M15 159 C72 159 126 235 183 235 S296 159 352.5 159 S465 235 521 235 S633 159 687 159" fill="none" stroke="#171717" strokeWidth="4" />

            <path d="M183 161 V227" stroke="#c6a03b" strokeWidth="1.5" strokeDasharray="6 5" />
            <path d="M352.5 170 V255" stroke="#171717" strokeWidth="1.5" strokeDasharray="6 5" />
            <path d="M521 161 V227" stroke="#dd7900" strokeWidth="1.5" strokeDasharray="6 5" />
            <path d="m177 151 6 11 6-11Z" fill="#927421" />
            <path d="m345.5 266 7-12 7 12Z" fill="#171717" />
            <path d="m515 151 6 11 6-11Z" fill="#dd7900" />
            <circle cx="183" cy="234.5" r="7.5" fill="#c6a03b" />
            <circle cx="352.5" cy="159" r="7.5" fill="#171717" />
            <circle cx="521" cy="234.5" r="7.5" fill="#dd7900" />

            <g className={styles.reveal} style={{ "--delay": "300ms" } as CSSProperties}>
              {/* Step 01: gold card with the skin and hair assessment icon. */}
              <rect x="139" y="70" width="88" height="81" rx="7" fill={`url(#${gold})`} />
              <path d="M146 70h74a7 7 0 0 1 7 7v14h-88V77a7 7 0 0 1 7-7Z" fill="#c6a03b" />
              <text x="183" y="85" fontSize="8" fontWeight="500" textAnchor="middle" fill="#ffffff">Step 1</text>
              <image href={stepIcons[0]} x="163" y="99" width="40" height="40" preserveAspectRatio="xMidYMid meet" style={{ filter: "brightness(0) invert(1)" }} />
              <DescriptionText x={183} y={284} title={stepTitles[0]} lines={descriptions[0]} />
            </g>

            <g className={styles.reveal} style={{ "--delay": "650ms" } as CSSProperties}>
              {/* Step 02: charcoal card with the laser treatment icon and bottom label. */}
              <rect x="308.5" y="266" width="88" height="81.5" rx="7" fill={`url(#${blue})`} />
              <path d="M308.5 326h88v14.5a7 7 0 0 1-7 7h-74a7 7 0 0 1-7-7Z" fill="#171717" />
              <text x="352.5" y="340" fontSize="8" fontWeight="500" textAnchor="middle" fill="#ffffff">Step 2</text>
              <image href={stepIcons[1]} x="332.5" y="280" width="40" height="40" preserveAspectRatio="xMidYMid meet" style={{ filter: "brightness(0) invert(1)" }} />
              <DescriptionText x={352.5} y={98} title={stepTitles[1]} lines={descriptions[1]} />
            </g>

            <g className={styles.reveal} style={{ "--delay": "1000ms" } as CSSProperties}>
              {/* Step 03: warm gold card with the follow-up sessions icon. */}
              <rect x="477" y="70" width="88" height="81" rx="7" fill={`url(#${orange})`} />
              <path d="M484 70h74a7 7 0 0 1 7 7v14h-88V77a7 7 0 0 1 7-7Z" fill="#dd7900" />
              <text x="521" y="85" fontSize="8" fontWeight="500" textAnchor="middle" fill="#ffffff">Step 3</text>
              <image href={stepIcons[2]} x="501" y="99" width="40" height="40" preserveAspectRatio="xMidYMid meet" style={{ filter: "brightness(0) invert(1)" }} />
              <DescriptionText x={521} y={284} title={stepTitles[2]} lines={descriptions[2]} />
            </g>
          </svg>
        </div>
        <div className="mt-4 flex justify-center sm:mt-5">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] sm:w-auto py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:text-sm"
          >
            Start Your LHR Journey
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
