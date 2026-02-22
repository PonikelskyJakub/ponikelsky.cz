import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jakub Ponikelsk\u00fd \u2013 Pr\u016fvodce efektivitou a osobn\u00edm r\u016fstem",
  description:
    "Osobn\u00ed portfolio Jakuba Ponikelsk\u00e9ho \u2013 pr\u016fvodce efektivitou, agiln\u00edm kou\u010dinkem a osobn\u00edm r\u016fstem."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="font-sans bg-white text-slate-900">{children}</body>
    </html>
  );
}

