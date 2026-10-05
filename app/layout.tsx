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
      { url: "https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg", sizes: "any" },
      { url: "https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg", sizes: "180x180" }],
    shortcut: ["https://res.cloudinary.com/glsztjdl/image/upload/v1790062598/logos.jpg"],
  },

  verification: {
    google: "z1jaoYSBnbRPk44HNH7qg2f2YOrltOeRq_cLZBU-iH0",
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

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1001676896272206');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1001676896272206&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}