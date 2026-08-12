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
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg", sizes: "any" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg", sizes: "180x180" }],
    shortcut: ["https://res.cloudinary.com/x6ec5hqm/image/upload/v1786551430/logos.jpg"],
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
