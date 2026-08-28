import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "../globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyosarangusa.org"),
  title: {
    default: "Hyosarang Mission — KSLC Navigation Team",
    template: "%s · Hyosarang Mission",
  },
  description:
    "A faith-rooted 501(c)(3) with 20+ years serving Korean-American seniors, establishing the KSLC Navigation Team for public benefits, housing, food security, transportation, and digital access.",
  alternates: { languages: { en: "/", ko: "/ko" } },
  icons: { icon: "/favicon.svg" },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
