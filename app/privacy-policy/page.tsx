import Link from "next/link";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowLeft, Phone } from "lucide-react";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

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
    body: "If you have questions about this Privacy Policy or how your information is handled, reach out to us at carewellskinhairlaserclinic@gmail.com or +91 82919 32733 , +91 8691895355.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={`${inter.className} w-full bg-white`}>
      {/* NAV */}
      <nav className="flex items-center justify-around gap-4 border-b border-[#171717]/8 px-6 py-4 sm:px-10 lg:px-14">
        <Link
          href="/"
          aria-label="Carewell Clinic and Academy"
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-12 w-auto mix-blend-multiply sm:h-20"
            src="https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp"
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
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-[13px] font-medium tracking-[0.03em] !text-white transition-colors hover:bg-[#dd7900] hover:!text-white"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-16 lg:max-w-4xl lg:px-0 xl:max-w-5xl">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-[#c6a03b] transition-colors duration-200 hover:text-[#dd7900]"
          >
            ← Back to Home
          </Link>

          <span className=" inline-flex items-center gap-2 rounded-full border border-[#c6a03b]/40 bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#171717]">
            <span className="h-px w-6 bg-[#c6a03b]" />
            Legal
            <span className="h-px w-6 bg-[#dd7900]" />
          </span>
        </div>
        <h1 className={`${cormorant.className} mt-4 text-[36px] font-semibold leading-tight text-[#171717] md:text-[46px]`}>
          Privacy <span className="italic text-[#c6a03b]">Policy</span>
        </h1>
        <p className="mt-3 text-[13.5px] font-medium uppercase tracking-[0.1em] text-[#171717]/45">
          Last updated: August 7, 2026
        </p>

        <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-[#171717]/70">
          Carewell Clinic and Academy respects your privacy. This policy
          explains what information we collect, how we use it, and the choices
          you have.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-2xl border border-[#171717]/8 px-6 py-7 sm:px-8"
            >
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c6a03b]/10 text-[13px] font-semibold text-[#c6a03b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className={`${cormorant.className} text-[21px] font-semibold text-[#171717] md:text-[23px]`}>
                  {s.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#171717]/70">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
