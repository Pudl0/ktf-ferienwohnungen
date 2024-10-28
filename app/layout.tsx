import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Hof unter den Eichen - Gemütliche Ferienwohnungen im Herzen der Natur",
  description:
    "Entdecken Sie unsere charmanten Ferienwohnungen im Hof unter den Eichen. Genießen Sie Ruhe und Komfort inmitten malerischer Landschaft. Perfekt für Familien, Paare und Naturliebhaber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer></Footer>{" "}
    </html>
  );
}
