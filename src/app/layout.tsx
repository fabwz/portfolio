import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabián Zamora | Portafolio",
  description:
    "Portafolio de Fabián Zamora, estudiante de Ingeniería del Software apasionado por el desarrollo web y la arquitectura de software.",
  openGraph: {
    title: "Fabián Zamora | Portafolio",
    description:
      "Portafolio de Fabián Zamora, estudiante de Ingeniería del Software apasionado por el desarrollo web y la arquitectura de software.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CR"
      className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <BackgroundBlobs />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
