import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Phone } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Carewell Clinic and Academy",
  description:
    "How Carewell Clinic and Academy collects, uses and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you book a consultation, contact us, or browse our website, we may collect your name, email address, phone number, and any details you choose to share about your treatment interests.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to schedule appointments, respond to enquiries, send appointment reminders, and improve the services we offer. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies to remember your preferences and understand how visitors use our site. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "Third-Party Services",
    body: "We may use trusted third-party tools (such as appointment scheduling or analytics providers) that process data on our behalf, under the same standards of care described in this policy.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or how your information is handled, reach out to us at info@domain.com or +(123) 698-5245.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white px-6 py-0 [font-family:'Inter',sans-serif] sm:px-10 lg:px-14">
      {/* NAV */}
      <nav className="flex items-center justify-around gap-4 px-6 py-4 mb-4 lg:px-22">
        <Link
          href="/"
          aria-label="Carewell Clinic and Academy"
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-14 w-auto mix-blend-multiply sm:h-30"
            src="/logos.jpeg"
            alt="Carewell Clinic and Academy — Skin, Hair, Laser"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="tel:+918291932733"
            className="hidden items-center gap-2 text-[14px] font-medium text-[#171717] transition-colors hover:text-[#dd7900] sm:inline-flex"
          >
            <Phone size={16} className="text-[#c6a03b]" />
            +91 82919 32733
          </a>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-[13px] font-medium tracking-[0.03em] !text-white hover:bg-[#dd7900] hover:!text-white"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </nav>
      <div className="mx-auto max-w-3xl pb-10">
        <Link
          href="/"
          className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c6a03b] transition-colors duration-200 hover:text-[#dd7900]"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-4 [font-family:'Cormorant_Garamond',serif] text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px]">
          Privacy <span className="italic text-[#c6a03b]">Policy</span>
        </h1>
        <p className="mt-3 text-[14px] text-[#171717]/55">
          Last updated: August 7, 2026
        </p>

        <p className="mt-8 text-[15px] leading-relaxed text-[#171717]/70">
          Carewell Clinic and Academy respects your privacy. This policy
          explains what information we collect, how we use it, and the choices
          you have.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="[font-family:'Cormorant_Garamond',serif] text-[22px] font-semibold text-[#171717]">
                {s.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#171717]/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
            <Footer />
      
    </main>
  );
}
