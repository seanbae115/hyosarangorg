import type { NextConfig } from "next";
import { SITE_URL } from "./seo";

type Redirects = Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>;

/**
 * Old Wix page paths (from wix-import/inventory.json) → the closest page here.
 * Both hyosarangusa.org and hyosarangus.com served the Wix site, so search
 * results still carry these paths on either domain.
 */
const WIX_PATHS: Record<string, string[]> = {
  "/about/": ["/who-we-are", "/purpose-and-intent", "/our-team", "/event-list"],
  "/history/": ["/our-history"],
  "/contact/": ["/inquiry-services-page"],
  "/support/": ["/support-us-1"],
  "/senior-college/": [
    "/hyosarang-senior-university",
    "/class",
    "/page",
    "/2026-fall-semest-erenrollment",
    "/aerophone-class",
    "/art-class",
    "/bible-panorma",
    "/chorus-class",
    "/hamonica-class",
    "/healing-dance",
    "/line-dance-class",
    "/line-dance-class-1",
    "/literature-class",
    "/music-class",
    "/nanta-class",
    "/photography-class",
    "/pottery-class",
    "/ukulele-class",
    "/writting-class",
  ],
  "/ministries/": ["/ministry-mission", "/filial-piety-campaign"],
  // Section anchors on /ministries (ids in MinistriesBody).
  "/ministries/#nursing": ["/nursing-home-ministry"],
  "/ministries/#mission": ["/mexico-mission", "/mexco-mission"],
  "/news/": [
    "/blog",
    "/post/:slug*",
    "/event",
    "/event-details/:slug*",
    "/groups",
    "/blank-12",
    "/blank-19",
    "/mission-update-popup",
    "/presidential-volunteer-service-award",
    "/filial-piety-essay-and-drawing-contest",
    "/filial-piety-essayand-drawing-contest1",
  ],
};

/** The old Wix domain; everything on it moves to SITE_URL. */
const OLD_HOST = "(www\\.)?hyosarangus\\.com";

export const redirects: Redirects = [
  // Absolute destinations so the old domain lands on SITE_URL in one hop.
  ...Object.entries(WIX_PATHS).flatMap(([destination, sources]) =>
    sources.map((source) => ({
      source,
      destination: SITE_URL + destination,
      permanent: true,
    })),
  ),
  // trailingSlash strips the "/" from :path, so add it back to skip a hop.
  {
    source: "/",
    has: [{ type: "host" as const, value: OLD_HOST }],
    destination: `${SITE_URL}/`,
    permanent: true,
  },
  {
    source: "/:path+",
    has: [{ type: "host" as const, value: OLD_HOST }],
    destination: `${SITE_URL}/:path+/`,
    permanent: true,
  },
];
