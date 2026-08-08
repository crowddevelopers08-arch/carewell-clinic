import type { Metadata } from "next";
import "./globals.css";
import BookingModalProvider from "@/components/BookingModalProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourclinicdomain.com"),
  title: {
    default: "Carewell Clinic and Academy | Advanced Skin Care & Aesthetic Clinic",
    template: "%s | Carewell Clinic and Academy",
  },
  description:
    "Carewell Clinic and Academy offers expert skin care consultations for acne, acne scars, pigmentation, anti-ageing, skin rejuvenation and laser hair removal. Book a personalised consultation with our certified aesthetic specialists today.",
  keywords: [
    "skin care clinic",
    "dermatologist",
    "acne treatment",
    "acne scar removal",
    "pigmentation treatment",
    "anti-ageing treatment",
    "skin rejuvenation",
    "laser hair removal",
    "aesthetic clinic",
    "Carewell Clinic and Academy",
  ],
  authors: [{ name: "Carewell Clinic and Academy" }],
  creator: "Carewell Clinic and Academy",
  publisher: "Carewell Clinic and Academy",

  icons: {
    icon: [
      { url: "/logos.jpeg", sizes: "any" },
      { url: "/logos.jpeg", type: "image/png", sizes: "32x32" },
      { url: "/logos.jpeg", type: "image/png", sizes: "192x192" },
      { url: "/logos.jpeg", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logos.jpeg", sizes: "180x180" }],
    shortcut: ["/logos.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}