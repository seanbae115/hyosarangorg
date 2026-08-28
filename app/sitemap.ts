import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://hyosarangusa.org";

const paths = [
  "/",
  "/about",
  "/services",
  "/kslc-navigation",
  "/governance-impact",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const en = path === "/" ? base + "/" : `${base}${path}`;
    const ko = path === "/" ? `${base}/ko` : `${base}/ko${path}`;
    entries.push({ url: en, lastModified: now });
    entries.push({ url: ko, lastModified: now });
  }
  return entries;
}
