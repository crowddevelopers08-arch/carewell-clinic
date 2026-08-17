"use client";

import React from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

type ContactMapSectionProps = {
  mapQuery?: string;
};

export default function ContactMapSection({
  mapQuery = "Swaroop Aditya Avenue building, A-107, JB Nagar, Marol Pipeline Road, Andheri East, Mumbai 400099",
}: ContactMapSectionProps) {
  const { openModal } = useBookingModal();
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14776.86542977911!2d80.1540219!3d13.06632165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c9247c2468c5%3A0xf36e253a5fc2bec3!2sCarewell%20Clinic%20and%20Acadamy%20%7C%20Dr.%20Dinesh%20Manjrekar%2C%201st%20Floor%2C%20Swaroop%20Aditya%20Avenue%20Building%2C%20A-107%2C%20Marol%20Pipeline%20Rd%2C%20Kanti%20Nagar%2C%20J%20B%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400099!3m2!1d19.1050005!2d72.8672481!5e1!3m2!1sen!2sin!4v1786168574402!5m2!1sen!2sin`;

  return (
    <section id="contact" className="relative w-full scroll-mt-8 overflow-hidden bg-white px-4 py-16 [font-family:'Inter',sans-serif] sm:px-6 lg:px-8">
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

      {/*
        Mobile: label -> heading -> map -> everything else normal
        (plain DOM/auto-placement order in the single-column grid)
        Desktop (lg+): explicit col/row placement restores the original two-column layout.
      */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-10 lg:grid-cols-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717] md:text-[13px] lg:col-start-2 lg:row-start-1 lg:text-[14px]">
          <span className="h-px w-6 bg-[#c6a03b]" />
          Contact Now
          <span className="h-px w-6 bg-[#dd7900]" />
        </span>

        <h2 className="[font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px] lg:col-start-2 lg:row-start-2 lg:text-[54px]">
          Speak With Our {" "}
          <span className="relative inline-block italic text-[#c6a03b]">
          Skin Care Expert.
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

        {/* map */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-start-1 lg:row-start-1 lg:row-span-4 lg:mt-0">
          <iframe
            src={mapSrc}
            title="Location map"
            className="h-[420px] w-full grayscale contrast-125 sm:h-[480px] lg:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <ul className="mt-9 flex flex-col gap-5 lg:col-start-2 lg:row-start-3">
          <li className="flex items-center gap-4">
            <MapPin size={20} className="shrink-0 text-[#c6a03b]" />
            <span className="text-[15px] text-slate-600">
              Swaroop Aditya Avenue building, A-107, 1st flr, JB Nagar, Marol Pipeline Road, Andheri(E) Mumbai-400099
            </span>
          </li>
          <li className="flex items-center gap-4">
            <Phone size={20} className="shrink-0 text-[#c6a03b]" />
            <span className="text-[15px] text-slate-600">+91 82919 32733 , +91 8691895355</span>
          </li>
          <li className="flex items-center gap-4">
            <Mail size={20} className="shrink-0 text-[#c6a03b]" />
            <span className="text-[15px] text-slate-600">carewellskinhairlaserclinic@gmail.com </span>
          </li>
          <li className="flex items-center gap-4">
            <Clock size={20} className="shrink-0 text-[#c6a03b]" />
            <span className="text-[15px] text-slate-600">Mon to Sat 10:30AM to 9:00PM</span>
          </li>
        </ul>

        <button
          type="button"
          onClick={openModal}
          className="mt-9 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#171717] px-4 py-2 pl-7 text-sm font-medium tracking-[0.03em] text-white transition-colors hover:bg-[#dd7900] lg:col-start-2 lg:row-start-4"
        >
          Make An Appointment
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </section>
  );
}