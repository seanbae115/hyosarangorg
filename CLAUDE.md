@AGENTS.md

# Hosting (checked 2026-11-02)
- Vercel serves the site from GitHub `seanbae115/hyosarangorg` (master). Domains and DNS are at Wix (`ns0/ns1.wixdns.net`).
- Code uses `https://hyosarangusa.org` as the canonical URL (sitemap, robots, hreflang, metadataBase), but Vercel redirects the apex to `www.`; settle one before adding SEO work.
- `public/.htaccess` is for Apache and does nothing on Vercel; put redirects and headers in Vercel config instead.
- The old Wix site is `www.hyosarangus.com` (Wix site "Hyosarang Mission"). Content being migrated from it lives in gitignored `wix-import/` (`inventory.json` = page text, `manifest.json` = page → images, `images/` = originals up to 13 MB). Resize with `npm run images` before copying anything into `public/`.

# Content rules
- Faith content (ministries, missions, Bible classes) goes on separate ministries pages that say they are separate from grant-funded services; do not mix it into Services, KSLC, or Governance pages. (User decision 2026-11-02)
- The desktop nav shows below 1120px as the mobile menu; after adding or renaming a nav item, check `scrollWidth > clientWidth` at 1122px in English.
- `wix-import/inventory.json` image ids are sorted, not in page order; get order from the live Wix page before pairing images with names.
