"use client";

import { ArrowUpRight } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import Image from "next/image";
import { cormorant, inter } from "./fonts";

export default function AboutDental() {
  return (
    <section id="lhr-doctor" className="about-dental scroll-mt-20" aria-labelledby="lhr-doctor-heading">
      <div className="about-dental__header">
          <span className="about-dental__eyebrow">
            ABOUT THE DOCTOR
          </span>
          <h2 id="lhr-doctor-heading" className="about-dental__heading">
            Expert Care Begins{" "}
            <span className="about-dental__heading-em">
              with the Right Doctor.
            </span>
          </h2>
      </div>
      <div className="about-dental__inner">
        <div
          className="about-dental__photos"
          aria-label="Dr Dinesh K. Manjrekar in consultation"
        >
          <div className="about-dental__photo about-dental__photo--a">
            <Image
              src="/clinic/consultation.webp"
              width={1920}
              height={1280}
              sizes="(min-width: 1100px) 300px, 40vw"
              alt="Dr Dinesh Manjrekar consulting with a patient at Carewell Clinic"
              className="w-full object-cover object-bottom h-full"
            />
          </div>  
          <div className="about-dental__photo about-dental__photo--b">
            <Image
              src="/clinic/clinic-photo-2.webp"
              width={1920}
              height={1280}
              sizes="(min-width: 1100px) 380px, 48vw"
              alt="The reception at Carewell Skin Hair Laser Clinic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="about-dental__photo about-dental__photo--c">
            <Image
              src="/clinic/dr-dinesh.webp"
              width={1024}
              height={1536}
              sizes="(min-width: 1100px) 380px, 48vw"
              alt="Dr Dinesh Manjrekar, Aesthetic Physician and Cosmetologist"
            />
          </div>
        </div>

        <div className="about-dental__text about-dental__text--top">

          <h3 className="about-dental__doctor-name">Dr. Dinesh Manjrekar</h3>
          <p className="about-dental__credentials">
            <em>Aesthetic Physician &amp; Cosmetologist | 15+ Years of Experience</em>
          </p>
          <p>
            With over 15 years of experience in aesthetic medicine and a Master&apos;s in Facial Aesthetics, Dr. Dinesh Manjrekar leads Carewell Skin Hair Laser Clinic in Andheri East, Mumbai, bringing expertise in skin, hair, and laser treatments. Believing that every patient&apos;s skin is unique, he focuses on understanding individual concerns and recommending personalised treatments rather than a one-size-fits-all approach.
          </p>
          <p className="about-dental__aftercare">
            For Laser Hair Reduction, his clinical team prioritises patient suitability, comfort, and personalised treatment planning, offering guidance from the initial consultation through treatment and aftercare.
          </p>

          <button type="button" onClick={scrollToContact} className="about-dental__button cursor-pointer">
            Consult Our Expert
            <span className="about-dental__button-icon">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .about-dental { background: #fff; padding: 32px 24px; color: #171717; font-family: ${inter.style.fontFamily}; }
        .about-dental__header { max-width: 1272px; margin: 0 auto 32px; text-align: center; }
        .about-dental__inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-areas: "photos content"; gap: 40px; align-items: center; max-width: 1272px; margin: 0 auto; }
        .about-dental__photos { grid-area: photos; width: 100%; aspect-ratio: 790 / 640; position: relative; }
        .about-dental__text--top { grid-area: content; min-width: 0; }
        .about-dental__photo { overflow: hidden; border-radius: 23px; position: absolute; background: #f7f5f1; }
        .about-dental__photo img { height: 100%; width: 100%; object-fit: cover; display: block; }
        .about-dental__photo--a { left: 11.4%; top: 0; width: 38%; height: 40.625%; z-index: 2; box-shadow: 0 16px 32px rgba(23, 23, 23, .1); }
        .about-dental__photo--a img { object-position: center 30%; }
        .about-dental__photo--b { left: 0; top: 46.875%; width: 48.1%; height: 53.125%; }
        .about-dental__photo--b img { object-position: center 65%; }
        .about-dental__photo--c { left: 51.9%; top: 4.6875%; width: 48.1%; height: 90.625%; }
        .about-dental__photo--c img { object-fit: contain; object-position: center bottom; }
        .about-dental__eyebrow { display: inline-block; color: #927421; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: .18em; line-height: 1.4; margin: 0 0 16px; }
        .about-dental__heading { color: #171717; font-family: ${cormorant.style.fontFamily}; font-size: clamp(28px, 3.2vw, 52px); font-weight: 600; line-height: 1.15; margin: 0; }
        .about-dental__heading-em { display: inline; font-style: italic; color: #c6a03b; }
        .about-dental__doctor-name { margin: 0; font-size: 18px; font-weight: 600; line-height: 1.4; }
        .about-dental__text--top > p { color: rgba(23, 23, 23, .7); font-size: 16px; font-weight: 400; line-height: 1.6; margin: 20px 0 16px; }
        .about-dental__text--top > .about-dental__credentials { margin: 8px 0 0; font-size: 14px; color: #927421; }
        .about-dental__text--top > .about-dental__aftercare { margin: 0 0 22px; }
        .about-dental__button { display: inline-flex; align-items: center; gap: 12px; min-height: 48px; padding: 0 12px 0 24px; border-radius: 999px; background: #c6a03b; color: #fff; font-size: 14px; font-weight: 500; letter-spacing: .03em; transition: background .2s ease; }
        .about-dental__button:hover { background: #dd7900; }
        .about-dental__button:focus-visible { outline: 2px solid #c6a03b; outline-offset: 4px; }
        .about-dental__button-icon { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #fff; color: #171717; }
        @media (max-width: 1100px) {
          .about-dental__inner { gap: 28px; }
          .about-dental__text--top > p { font-size: 15px; }
          .about-dental__text--top > .about-dental__credentials { font-size: 14px; }
        }
        @media (max-width: 900px) {
          .about-dental__inner { grid-template-columns: minmax(0, 1fr); grid-template-areas: "photos" "content"; max-width: 700px; gap: 28px; }
          .about-dental__photos { max-width: 600px; margin: 0 auto; }
        }
        @media (max-width: 650px) {
          .about-dental { padding: 24px 16px; }
          .about-dental__header { margin-bottom: 24px; }
          .about-dental__eyebrow { font-size: 12px; margin-bottom: 12px; }
          .about-dental__heading { font-size: 28px; }
          .about-dental__photo { border-radius: 16px; }
          .about-dental__text--top > p { font-size: 14px; margin-top: 16px; }
          .about-dental__text--top > .about-dental__credentials { font-size: 13px; margin-top: 6px; }
          .about-dental__text--top > .about-dental__aftercare { margin-top: 0; }
          .about-dental__button { width: 100%; justify-content: space-between; font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
