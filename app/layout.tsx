import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import BookingModalProvider from "@/components/BookingModalProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carewellconsultation.com"),
  title: {
    default: "Carewell Clinic and Acadamy | Advanced Skin Care & Aesthetic Clinic",
    template: "%s | Carewell Clinic and Acadamy",
  },
  description:
    "Carewell Clinic and Acadamy offers expert skin care consultations for acne, acne scars, pigmentation, anti-ageing, skin rejuvenation and laser hair removal. Book a personalised consultation with our certified aesthetic specialists today.",
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
    "Carewell Clinic and Acadamy",
  ],
  authors: [{ name: "Carewell Clinic and Acadamy" }],
  creator: "Carewell Clinic and Acadamy",
  publisher: "Carewell Clinic and Acadamy",

  icons: {
    icon: [
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp", sizes: "any" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp", type: "image/jpeg", sizes: "32x32" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp", type: "image/jpeg", sizes: "192x192" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp", sizes: "180x180" }],
    shortcut: ["https://res.cloudinary.com/x6ec5hqm/image/upload/v1787231072/logos.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y6bvryfb95");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}