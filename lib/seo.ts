import type { Metadata } from "next";
import { toKo } from "./nav";

/** Canonical origin. Vercel redirects the apex domain to www, so www is canonical. */
export const SITE_URL = "https://www.hyosarangusa.org";

/** Served URLs end in "/" (next.config trailingSlash), so canonical links do too. */
function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

/** English and Korean URLs (relative to SITE_URL) for an English-canonical path. */
export function langPaths(path: string): { en: string; ko: string } {
  return { en: withSlash(path), ko: withSlash(toKo(path)) };
}

/**
 * Canonical + hreflang links for one page. `path` is the English-canonical
 * path (e.g. "/about"), the same value passed to LanguageToggle.
 */
export function pageAlternates(
  path: string,
  lang: "en" | "ko",
): Metadata["alternates"] {
  const { en, ko } = langPaths(path);
  return {
    canonical: lang === "en" ? en : ko,
    languages: { en, ko, "x-default": en },
  };
}
