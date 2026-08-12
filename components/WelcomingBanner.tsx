"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

type WelcomingBannerProps = {
  bgImage?: string;
};

export default function WelcomingBanner({ bgImage = "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786555403/carewell-image-2.webp" }: WelcomingBannerProps) {
  const [showTop, setShowTop] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full bg-white pb-0 [font-family:'Inter',sans-serif]">
      <div className="relative mx-auto max-w-10xl overflow-hidden rounded-none bg-[#171717]">
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/90 via-[#171717]/70 to-[#171717]/85" />
          </>
        )}

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center sm:px-10 md:min-h-[400px] md:justify-center md:py-20">
          <span className="text-[12px] [font-family:'Cormorant_Garamond',serif] font-medium uppercase tracking-[0.18em] text-[#c6a03b] md:text-[13px] lg:text-[14px]">
            Healthy Skin Starts with the Right Care
          </span>
          <h2 className="mt-3 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-white md:text-[46px] lg:text-[44px]">
            Book a consultation with Dr Dinesh K. Manjrekar and receive a personalised treatment plan designed around your skin concerns.
          </h2>
          <button
            type="button"
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#dd7900] px-4 py-2 pl-7 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#171717] cursor-pointer"
          >
            Book Appointment
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* scroll to top */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 max-sm:bottom-18 max-sm:right-4 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white shadow-lg transition-all duration-300 hover:bg-[#dd7900] ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </section>
  );
}
