import type { MetadataRoute } from "next";
import { SITE_URL, langPaths } from "@/lib/seo";

export const dynamic = "force-static";

const paths = [
  "/",
  "/about",
  "/services",
  "/kslc-navigation",
  "/governance-impact",
  "/ministries",
  "/senior-college",
  "/news",
  "/history",
  "/support",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const { en, ko } = langPaths(path);
    const languages = { en: SITE_URL + en, ko: SITE_URL + ko };
    entries.push({ url: languages.en, lastModified: now, alternates: { languages } });
    entries.push({ url: languages.ko, lastModified: now, alternates: { languages } });
  }
  return entries;
}
