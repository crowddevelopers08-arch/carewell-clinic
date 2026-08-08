"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";

type RoadStep = {
  id: number;
  number: string;
  position: "top" | "bottom";
  x: number;
  y: number;
  color: string;
  colorFrom: string;
  colorTo: string;
};

type InfoItem = {
  id: string;
  x: number;
  row: "top" | "bottom";
  title: string;
  color: string;
  icon: string;
  text: string;
};

const STEPS: RoadStep[] = [
  {
    id: 1,
    number: "01",
    x: 21,
    y: 66,
    position: "bottom",
    color: "#c6a03b",
    colorFrom: "#dd7900",
    colorTo: "#c6a03b",
  },
  {
    id: 2,
    number: "02",
    position: "top",
    x: 44,
    y: 14,
    color: "#dd7900",
    colorFrom: "#f0a236",
    colorTo: "#dd7900",
  },
  {
    id: 3,
    number: "03",
    position: "bottom",
    x: 68,
    y: 66,
    color: "#c6a03b",
    colorFrom: "#dd7900",
    colorTo: "#c6a03b",
  },
  {
    id: 4,
    number: "04",
    position: "top",
    x: 91,
    y: 14,
    color: "#dd7900",
    colorFrom: "#f0a236",
    colorTo: "#dd7900",
  },
];

const INFO: InfoItem[] = [
  {
    id: "book-appointment",
    x: 21,
    row: "top",
    title: "Book Your Appointment",
    color: "#c6a03b",
    icon: "/out-icons-1.png",
    text: "Choose a convenient time for your consultation.",
  },
  {
    id: "meet-doctor",
    x: 44,
    row: "bottom",
    title: "Meet the Doctor",
    color: "#dd7900",
    icon: "/out-icons-2.png",
    text: "Discuss your concerns and receive a detailed skin assessment.",
  },
  {
    id: "treatment-plan",
    x: 68,
    row: "top",
    title: "Receive a Personalised Treatment Plan",
    color: "#c6a03b",
    icon: "/out-icons-3.png",
    text: "Get recommendations tailored to your skin and treatment goals.",
  },
  {
    id: "begin-treatment",
    x: 91,
    row: "bottom",
    title: "Begin Your Treatment",
    color: "#dd7900",
    icon: "/out-icons-4.png",
    text: "Start your treatment with continued support and follow-up care.",
  },
];

function Pin({
  step,
  image,
  onUpload,
}: {
  step: RoadStep;
  image?: string;
  onUpload: (id: number, file?: File) => void;
}) {
  const isTop = step.position === "top";
  const inputId = `upload-${step.id}`;

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        left: `${step.x}%`,
        top: `${step.y}%`,
        transform: "translateX(-50%)",
      }}
    >
      {/* pin circle */}
      <div
        className="group relative h-[92px] w-[92px] rounded-full p-[6px] shadow-[0_14px_28px_-12px_rgb(23_23_23_/_45%)]"
        style={{
          background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})`,
        }}
      >
        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center overflow-hidden relative">
          {image ? (
            <img
              src={image}
              alt={`Step ${step.number}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <span
                className="text-2xl font-extrabold leading-none"
                style={{ color: step.color }}
              >
                {step.number}
              </span>
              <span
                className="text-[10px] font-semibold tracking-wide mt-0.5"
                style={{ color: step.color }}
              >
                STEP
              </span>
            </>
          )}

          <label
            htmlFor={inputId}
            className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
          >
            <Upload size={18} className="text-white" />
          </label>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onUpload(step.id, e.target.files?.[0])}
          />
        </div>
      </div>

      {/* pointer triangle */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          ...(isTop
            ? { borderTop: `16px solid ${step.color}`, marginTop: "-4px" }
            : {
                borderBottom: `16px solid ${step.color}`,
                marginBottom: "-4px",
                order: -1,
              }),
        }}
      />
    </div>
  );
}

function InfoBlock({ item }: { item: InfoItem }) {
  const isTop = item.row === "top";
  return (
    <div
      className="absolute flex w-[180px] flex-col items-center text-center"
      style={{
        left: `${item.x}%`,
        top: isTop ? "26%" : "47%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        className="mb-2 h-10 w-10"
        aria-hidden="true"
        style={{
          backgroundColor: item.color,
          mask: `url(${item.icon}) center / contain no-repeat`,
          WebkitMask: `url(${item.icon}) center / contain no-repeat`,
        }}
      />
      <h4
        className="mb-1 text-[12px] font-medium uppercase tracking-[0.14em]"
        style={{ color: item.color }}
      >
        {item.title}
      </h4>
      <p className="text-[12px] leading-snug text-[#171717]/70">{item.text}</p>
    </div>
  );
}

function MobileTimeline() {
  return (
    <div className="relative z-10 mx-auto max-w-md space-y-5 py-1 sm:hidden">
      <div className="mobile-road absolute bottom-7 left-6 top-7 w-px" aria-hidden="true" />
      {INFO.map((item, index) => (
        <article key={item.id} className="relative flex items-start gap-4">
          <div
            className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] bg-white text-sm font-bold shadow-[0_10px_20px_-12px_rgb(23_23_23_/_45%)]"
            style={{ borderColor: item.color, color: item.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="min-h-24 flex-1 rounded-xl border border-[#c6a03b]/30 bg-white px-4 py-3 shadow-[0_12px_28px_-20px_rgb(23_23_23_/_35%)]">
            <div className="mb-2 flex items-center gap-2.5">
              <div
                className="h-8 w-8 shrink-0"
                aria-hidden="true"
                style={{
                  backgroundColor: item.color,
                  mask: `url(${item.icon}) center / contain no-repeat`,
                  WebkitMask: `url(${item.icon}) center / contain no-repeat`,
                }}
              />
              <h3 className="text-[14px] font-medium leading-tight text-[#171717]">{item.title}</h3>
            </div>
            <p className="text-[13px] leading-5 text-[#171717]/70">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function RoadmapInfographic() {
  const [images, setImages] = useState<Record<number, string>>({});

  const handleUpload = (id: number, file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, [id]: url }));
  };

  return (
    <section id="journey" className="relative w-full overflow-hidden bg-white px-4 py-10 [font-family:'Inter',sans-serif] sm:px-6 sm:py-12 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#c6a03b]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#dd7900]/[0.08] blur-3xl" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <path
            key={index}
            d={`M ${1300 - index * 70} -50 C ${1050 - index * 70} 250, ${1150 - index * 70} 540, ${900 - index * 90} 850`}
            stroke={index % 2 === 0 ? "#c6a03b" : "#dd7900"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto mb-6 max-w-3xl text-center sm:mb-0">
        <span className="mb-0 inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px] lg:text-[14px]">
          <span className="h-px w-6 bg-[#c6a03b]" />
          Consultation Process
          <span className="h-px w-6 bg-[#dd7900]" />
        </span>
        <h2 className="animate-slip-up animation-delay-100 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px] lg:text-[54px]">
         Your Consultation {" "}
          <span className="relative inline-block italic text-[#c6a03b]">
            Journey .
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

      <MobileTimeline />

      <div className="relative z-10 mx-auto hidden aspect-[740/330] w-full max-w-6xl sm:block">
        {/* Road */}
        <svg
          viewBox="0 0 740 493"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M -20 240
               C 60 240, 90 300, 160 300
               S 260 200, 335 200
               S 430 300, 500 300
               S 600 200, 680 200
               S 740 210, 780 220"
            fill="none"
            stroke="#2b2b2b"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <path
            d="M -20 240
               C 60 240, 90 300, 160 300
               S 260 200, 335 200
               S 430 300, 500 300
               S 600 200, 680 200
               S 740 210, 780 220"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeDasharray="10 10"
            strokeLinecap="round"
            opacity="0.85"
            className="road-dashes"
          />
        </svg>

        {/* Info labels */}
        {INFO.map((item) => (
          <InfoBlock key={item.id} item={item} />
        ))}

        {/* Step pins */}
        {STEPS.map((step) => (
          <Pin
            key={step.id}
            step={step}
            image={images[step.id]}
            onUpload={handleUpload}
          />
        ))}
      </div>
      <style>{`
        .road-dashes { animation: road-dash 2.5s linear infinite; }
        @keyframes road-dash { to { stroke-dashoffset: -20; } }
        .mobile-road { background: linear-gradient(to bottom, #c6a03b 50%, transparent 0) 0 0 / 1px 12px repeat-y; animation: mobile-road-dash 1.2s linear infinite; }
        @keyframes mobile-road-dash { to { background-position-y: 12px; } }
        @media (prefers-reduced-motion: reduce) { .road-dashes { animation: none; } }
        @media (prefers-reduced-motion: reduce) { .mobile-road { animation: none; } }
      `}</style>
    </section>
  );
}
