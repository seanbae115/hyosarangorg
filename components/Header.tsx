import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { CONTACT, NAV, hrefFor, type Lang } from "@/lib/nav";

export default function Header({
  lang,
  currentPath,
}: {
  lang: Lang;
  currentPath: string;
}) {
  const homeHref = hrefFor("/", lang);
  const word = lang === "ko" ? "효사랑 선교회" : "HYOSARANG MISSION";
  const sub = lang === "ko" ? "Hyosarang Mission" : "";
  const menuLabel = lang === "ko" ? "메뉴" : "Menu";
  const navLabel = lang === "ko" ? "주요 메뉴" : "Main menu";
  const callLabel = lang === "ko" ? "전화" : "Call";

  const items = NAV.map((item) => ({
    label: lang === "ko" ? item.ko : item.en,
    href: hrefFor(item.path, lang),
    current: item.path === currentPath,
  }));

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href={homeHref}>
          <img
            className="brand__mark"
            src="/hyosarang-logo.jpg"
            alt=""
            width={48}
            height={48}
          />
          <span className="brand__word">
            <b>{word}</b>
            {sub ? <small>{sub}</small> : null}
          </span>
        </Link>

        <div className="nav-actions">
          <a className="header-call" href={CONTACT.phoneHref}>
            {callLabel} {CONTACT.phone}
          </a>
          <LanguageToggle lang={lang} currentPath={currentPath} />
          <details className="mobile-nav">
            <summary>{menuLabel}</summary>
            <div className="mobile-menu">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Second row on wide screens: ten items do not fit beside the logo. */}
      <nav className="desktop-nav" aria-label={navLabel}>
        <div className="desktop-nav__inner">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
