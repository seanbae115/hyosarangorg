import Link from "next/link";
import { toEn, toKo, type Lang } from "@/lib/nav";

/**
 * Language switch. `currentPath` is the English-canonical path of the page
 * this toggle is rendered on (e.g. "/about"); it is prop-drilled so the
 * component stays a server component and the static export needs no client JS.
 */
export default function LanguageToggle({
  lang,
  currentPath,
}: {
  lang: Lang;
  currentPath: string;
}) {
  const target = lang === "en" ? toKo(currentPath) : toEn(currentPath);
  const label = lang === "en" ? "한국어" : "English";
  const aria =
    lang === "en" ? "이 페이지를 한국어로 보기" : "View this page in English";

  return (
    <Link
      href={target}
      hrefLang={lang === "en" ? "ko" : "en"}
      aria-label={aria}
      className="lang-toggle"
    >
      {label}
    </Link>
  );
}
