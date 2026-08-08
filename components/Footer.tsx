import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.1h-3.05V8.1c0-.9.25-1.5 1.55-1.5h1.65V3.9C15.94 3.85 15 3.75 13.9 3.75c-2.4 0-4.05 1.45-4.05 4.15v2.15H7.2v3.1h2.65V21h3.65Z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.6 7.5L22 21h-6.3l-5-6.3L4.9 21H2.8l7-8L2 3h6.4l4.5 5.8Zm-1.1 16.2h1.2L7.3 4.7H6Z" />
    </svg>
  );
}

function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5Z" />
    </svg>
  );
}

const socials = [
  { icon: IconFacebook, href: "#", label: "Facebook" },
  { icon: IconInstagram, href: "#", label: "Instagram" },
  { icon: IconTwitter, href: "#", label: "Twitter" },
  { icon: IconYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
<footer className="bg-black text-white/80 py-5 [font-family:'Cormorant_Garamond',serif]">
  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
      <p className="text-[16px] text-white/80">
        © {new Date().getFullYear()} Carewell Clinic and Academy. All rights reserved.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href="/privacy-policy"
          className="text-[16px] text-white/10"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>
</footer>
  );
}
