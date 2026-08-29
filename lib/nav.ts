export type Lang = "en" | "ko";

export interface NavItem {
  key: string;
  en: string;
  ko: string;
  /** English-canonical path. The Korean route is this prefixed with `/ko`. */
  path: string;
}

export const NAV: NavItem[] = [
  { key: "about", en: "About Us", ko: "기관 소개", path: "/about" },
  { key: "services", en: "Services", ko: "사업 안내", path: "/services" },
  { key: "kslc", en: "KSLC Navigation", ko: "KSLC 내비게이션", path: "/kslc-navigation" },
  { key: "governance", en: "Governance & Impact", ko: "운영·성과", path: "/governance-impact" },
  { key: "contact", en: "Contact", ko: "문의", path: "/contact" },
];

/** Map an English-canonical path to its Korean route. */
export function toKo(path: string): string {
  if (path === "/" || path === "") return "/ko";
  if (path.startsWith("/ko")) return path;
  return `/ko${path}`;
}

/** Map any path (English or Korean) to its English route. */
export function toEn(path: string): string {
  if (path === "/ko" || path === "/ko/") return "/";
  if (path.startsWith("/ko/")) return path.slice(3);
  return path;
}

/** Resolve an English-canonical path to the route for the given language. */
export function hrefFor(path: string, lang: Lang): string {
  return lang === "ko" ? toKo(path) : path;
}

export const CONTACT = {
  email: "hyosarangus@gmail.com",
  phone: "714-670-8004",
  phoneHref: "tel:+17146708004",
  address: "7342 Orangethorpe Ave., Ste. B-113, Buena Park, CA 90621",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=7342+Orangethorpe+Ave+Ste+B-113+Buena+Park+CA+90621",
  orgSite: "https://hyosarangusa.org",
  orgSiteLabel: "hyosarangusa.org",
} as const;

export const ORG = {
  legal: {
    en: "Hyosarang Mission is a California nonprofit religious corporation recognized as tax-exempt under IRC §501(c)(3).",
    ko: "Hyosarang Mission(효사랑 선교회)은 캘리포니아 비영리 종교법인이며 미국 연방세법 501(c)(3)에 따른 면세 기관입니다.",
  },
} as const;
