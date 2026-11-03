import type { NextConfig } from "next";
import { redirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  // Needs a server build: static export ignores redirects, and Vercel did not
  // apply vercel.json redirects to the export (tested 2026-11-02).
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
