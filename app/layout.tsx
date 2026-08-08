import type { Metadata } from "next";
import "./globals.css";
import BookingModalProvider from "@/components/BookingModalProvider";

export const metadata: Metadata = {
  title: "Dermal. | Skin care",
  description: "Comprehensive skin care landing page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
