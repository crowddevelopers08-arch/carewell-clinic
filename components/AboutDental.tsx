"use client";

import { ArrowUpRight } from "lucide-react";
import { useBookingModal } from "./BookingModalProvider";

const benefits = [
  "BAMS Qualified",
  "Board Certified Aesthetic Injector",
  "Master's in Facial Injectors",
  "Cosmetologist & Trichologist",
];

export default function AboutDental() {
  const { openModal } = useBookingModal();

  return (
    <section id="doctor" className="about-dental">
      <div className="about-dental__inner">
        <div
          className="about-dental__photos"
          aria-label="Dr Dinesh K. Manjrekar in consultation"
        >
          <div className="about-dental__photo about-dental__photo--a">
            <img
              src="/doctors.avif"
              alt="Dr Dinesh K. Manjrekar performing a facial skin treatment"
              className="w-full object-cover object-center h-full"
            />
          </div>  
          <div className="about-dental__photo about-dental__photo--b">
            <img
              src="/doctor2.avif"
              alt="Relaxing skincare treatment session at Carewell Clinic"
            />
          </div>
          <div className="about-dental__photo about-dental__photo--c">
            <img
              src="/doctor1.avif"
              alt="Dr Dinesh K. Manjrekar consulting with a patient"
            />
          </div>
        </div>

        <div className="about-dental__text about-dental__text--top">
          <span className="about-dental__eyebrow">
            <span className="about-dental__eyebrow-line about-dental__eyebrow-line--gold" />
            Meet Your Doctor
            <span className="about-dental__eyebrow-line about-dental__eyebrow-line--orange" />
          </span>
          <h2 className="about-dental__heading">
            Meet Dr Dinesh
            <br />
            <span className="about-dental__heading-em">
              K. Manjrekar .
              <svg
                className="about-dental__heading-underline"
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
          <p>
            Dr Dinesh believes that every patient deserves honest guidance and
            personalised care. Every treatment begins with a detailed
            consultation to understand your skin concerns before recommending
            the most suitable treatment plan. With years of experience in
            aesthetic medicine, he combines advanced technology with
            evidence-based techniques to help patients achieve healthier,
            natural-looking skin.
          </p>
        </div>

        <div className="about-dental__text about-dental__text--bottom">
          <ul className="about-dental__benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="m3 8.2 3.1 3.1L13.2 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>

          <button type="button" onClick={openModal} className="about-dental__button cursor-pointer">
            Book Consultation
            <span className="about-dental__button-icon">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .about-dental { position: relative; overflow: hidden; background: #fff; padding: 50px 50px 34px; color: #171717; font-family: 'Inter', sans-serif; }
        .about-dental__inner { display: grid; grid-template-columns: 790px minmax(0, 1fr); grid-template-areas: "photos top" "photos bottom"; column-gap: 56px; row-gap: 8px; align-items: start; max-width: 1650px; margin: 0 auto; }
        .about-dental__photos { grid-area: photos; height: 640px; position: relative; }
        .about-dental__text--top { grid-area: top; }
        .about-dental__text--bottom { grid-area: bottom; }
        .about-dental__photo { overflow: hidden; border-radius: 23px; position: absolute; background: #f7f5f1; }
        .about-dental__photo img { height: 100%; width: 100%; object-fit: cover; display: block; }
        .about-dental__photo--a { left: 90px; top: 0; width: 300px; height: 260px; z-index: 2; box-shadow: 0 20px 40px rgba(23, 23, 23, 0.14); }
        .about-dental__photo--a img { object-position: center 30%; }
        .about-dental__photo--b { left: 0; top: 300px; width: 380px; height: 340px; }
        .about-dental__photo--b img { object-position: center center; }
        .about-dental__photo--c { left: 410px; top: 30px; width: 380px; height: 580px; }
        .about-dental__photo--c img { object-position: 53% center; }
        .about-dental__text { padding-top: 0; max-width: 795px; }
        .about-dental__eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(198, 160, 59, 0.4); background: #fff; border-radius: 999px; padding: 8px 16px; color: #171717; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.18em; line-height: 1; margin: 0 0 24px; }
        .about-dental__eyebrow-line { height: 1px; width: 24px; flex: 0 0 24px; }
        .about-dental__eyebrow-line--gold { background: #c6a03b; }
        .about-dental__eyebrow-line--orange { background: #dd7900; }
        .about-dental__heading { color: #171717; font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 3.2vw, 54px); font-weight: 600; letter-spacing: normal; line-height: 1.2; margin: 0; }
        .about-dental__heading-em { position: relative; display: inline-block; font-style: italic; color: #c6a03b; }
        .about-dental__heading-underline { position: absolute; bottom: -10px; left: 0; width: 100%; }
        .about-dental__text--top > p { color: rgba(23, 23, 23, 0.7); font-size: 16px; font-weight: 400; line-height: 1.6; margin: 30px 0 27px; max-width: 785px; }
        .about-dental__benefits { display: flex; flex-direction: column; gap: 15px; list-style: none; margin: 0 0 39px; padding: 0; }
        .about-dental__benefits li { display: flex; align-items: center; gap: 15px; color: #171717; font-size: 16px; font-weight: 600; line-height: 1.25; }
        .about-dental__benefits svg { width: 22px; height: 22px; flex: 0 0 22px; color: #c6a03b; }
        .about-dental__button { display: inline-flex; align-items: center; gap: 12px; min-height: 48px; padding: 0 18px 0 28px; border-radius: 999px; background: #171717; color: #fff; font-size: 14px; font-weight: 500; letter-spacing: 0.03em; text-decoration: none; transition: background .2s ease; }
        .about-dental__button:hover { background: #dd7900; }
        .about-dental__button-icon { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #fff; color: #171717; }
        .about-dental__envato { align-items: center; background: #171717; border-radius: 999px; bottom: 30px; color: #fff; display: inline-flex; font-size: 17px; font-weight: 700; gap: 4px; left: 50px; padding: 12px 22px; position: absolute; text-decoration: none; }
        .about-dental__envato b { color: #c6a03b; font-size: 19px; }
        .about-dental__to-top { align-items: center; background: #171717; border-radius: 50%; bottom: 24px; color: #fff; display: flex; font-size: 29px; font-weight: 700; height: 51px; justify-content: center; line-height: 1; position: absolute; right: 29px; text-decoration: none; width: 51px; transition: background .2s ease; }
        .about-dental__to-top:hover { background: #dd7900; }
        @media (max-width: 1500px) { .about-dental__inner { grid-template-columns: 710px minmax(0, 1fr); column-gap: 45px; row-gap: 8px; } .about-dental__photos { transform: scale(.9); transform-origin: top left; width: 878px; } .about-dental__eyebrow { font-size: 13px; } .about-dental__text--top > p { font-size: 15px; line-height: 1.6; } .about-dental__benefits li { font-size: 15px; } }
        @media (max-width: 1100px) { .about-dental { padding: 90px 35px 100px; } .about-dental__inner { grid-template-columns: 1fr; grid-template-areas: "top" "photos" "bottom"; gap: 24px; max-width: 790px; } .about-dental__photos { margin: 0 auto; } .about-dental__text { max-width: 790px; } }
        @media (max-width: 650px) { .about-dental { padding: 20px 20px 20px; } .about-dental__photos { height: auto; aspect-ratio: 790 / 640; transform: none; width: 100%; position: relative; } .about-dental__photo--a, .about-dental__photo--b, .about-dental__photo--c { position: absolute; height: auto; } .about-dental__photo--a { left: 11.4%; top: 0; width: 38%; aspect-ratio: 300 / 260; } .about-dental__photo--b { left: 0; top: 46.9%; width: 48.1%; aspect-ratio: 380 / 340; } .about-dental__photo--c { left: 51.9%; top: 4.7%; width: 48.1%; aspect-ratio: 380 / 580; } .about-dental__eyebrow { font-size: 12px; margin: 13px 0 18px; } .about-dental__heading { font-size: 32px; } .about-dental__text--top > p { font-size: 14px; line-height: 1.6; margin: 20px 0 24px; } .about-dental__benefits { gap: 13px; margin-bottom: 30px; } .about-dental__benefits li { font-size: 14px; } .about-dental__envato { bottom: 23px; left: 20px; font-size: 13px; padding: 10px 16px; } .about-dental__to-top { bottom: 20px; right: 20px; width: 46px; height: 46px; } }
      `}</style>
    </section>
  );
} 