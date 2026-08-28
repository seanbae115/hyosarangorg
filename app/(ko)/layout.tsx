import type { Metadata } from "next";
import { Newsreader, Public_Sans, Noto_Sans_KR } from "next/font/google";
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
const kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyosarangusa.org"),
  title: {
    default: "효사랑 선교회 — KSLC 내비게이션팀",
    template: "%s · 효사랑 선교회",
  },
  description:
    "20년 이상 한인 시니어를 섬겨 온 신앙 기반 501(c)(3) 비영리기관 효사랑 선교회가, 공공 혜택·주거·식생활·교통·디지털 접근을 돕는 KSLC 내비게이션팀을 세웁니다.",
  alternates: { languages: { en: "/", ko: "/ko" } },
  icons: { icon: "/favicon.svg" },
};

export default function KoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${serif.variable} ${sans.variable} ${kr.variable}`}
      // inline wins over :root's fallback so Korean text uses bundled Noto Sans KR
      style={{ ["--font-kr" as string]: kr.style.fontFamily }}
    >
      <body>
        <a href="#main" className="skip-link">
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
