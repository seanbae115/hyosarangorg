import Link from "next/link";
import { CONTACT, FORM990_URL, NAV, ORG, hrefFor, type Lang } from "@/lib/nav";

export default function Footer({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const descriptor = ko
    ? "2002년부터 한인 시니어와 가족, 다음 세대를 섬겨 왔습니다."
    : "Serving Korean-American seniors, families, and the next generation since 2002.";
  const grantLine = ko
    ? "재단·협력기관 문의: "
    : "Grantmakers and partners: ";
  const form990Label = ko ? "공개 Form 990 보기" : "View the public Form 990";
  const newTab = ko ? " (새 창)" : " (opens in a new tab)";
  const navHeading = ko ? "바로가기" : "Site";
  const contactHeading = ko ? "연락처" : "Contact";

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Link className="brand" href={hrefFor("/", lang)}>
              <img
                className="brand__mark"
                src="/hyosarang-logo.jpg"
                alt=""
                width={44}
                height={44}
              />
              <span className="brand__word">
                <b>{ko ? "효사랑 선교회" : "HYOSARANG MISSION"}</b>
                {ko ? <small>Hyosarang Mission</small> : null}
              </span>
            </Link>
            <p className="footer-descriptor">{descriptor}</p>
            <p className="footer-grant">
              {grantLine}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </div>

          <nav className="footer-col" aria-label={navHeading}>
            <h2 className="footer-col__h">{navHeading}</h2>
            {NAV.map((item) => (
              <Link key={item.key} href={hrefFor(item.path, lang)}>
                {ko ? item.ko : item.en}
              </Link>
            ))}
          </nav>

          <div className="footer-col">
            <h2 className="footer-col__h">{contactHeading}</h2>
            <span>{CONTACT.address}</span>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.orgSite} target="_blank" rel="noopener">
              {CONTACT.orgSiteLabel}
            </a>
            <a href={FORM990_URL} target="_blank" rel="noopener">
              {form990Label}
              <span className="visually-hidden">{newTab}</span>
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <span>{ORG.legal[lang]}</span>
          <span>© 2026 Hyosarang Mission</span>
        </div>
      </div>
    </footer>
  );
}
