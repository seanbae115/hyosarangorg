import Link from "next/link";
import PageShell from "@/components/PageShell";
import Gallery from "@/components/Gallery";
import ZoomImage from "@/components/ZoomImage";
import FeatureCard from "@/components/FeatureCard";
import { Icon } from "@/components/icons";
import { FORM990_URL, hrefFor, type Lang } from "@/lib/nav";
import type { CtaLink, HomeCopy } from "@/lib/content/types";

function HeroPhoto({
  photo,
  viewLabel,
  eager = false,
}: {
  photo: { src: string; alt: string };
  viewLabel: string;
  eager?: boolean;
}) {
  return (
    <button
      type="button"
      className="zoomable"
      data-zoom-src={photo.src.replace("/photos/", "/photos/lg/")}
      data-zoom-alt={photo.alt}
      data-zoom-caption=""
      aria-label={`${viewLabel}: ${photo.alt}`}
    >
      <img src={photo.src} alt={photo.alt} loading={eager ? "eager" : "lazy"} />
      <span className="zoomable__hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
        </svg>
      </span>
    </button>
  );
}

export default function HomeBody({ lang, t }: { lang: Lang; t: HomeCopy }) {
  const to = (link: CtaLink) =>
    link.external ? link.href : hrefFor(link.href, lang);
  const newTab = lang === "ko" ? " (새 창)" : " (opens in a new tab)";

  return (
    <PageShell lang={lang} currentPath="/">
      {/* Hero — punchy copy + bento photo layout */}
      <div className="home-hero">
        <div className="shell home-hero__grid">
          <div>
            <span className="kicker" style={{ color: "var(--sky-soft)" }}>
              {t.heroEyebrow}
            </span>
            <h1>{t.heroTitle}</h1>
            <ul className="home-hero__points">
              {t.heroPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="page-hero__actions">
              <Link className="btn btn--on-dark" href={to(t.heroPrimary)}>
                {t.heroPrimary.label}
              </Link>
              <Link
                className="btn btn--ghost"
                href={to(t.heroSecondary)}
                style={{ borderColor: "#fff", color: "#fff" }}
              >
                {t.heroSecondary.label}
              </Link>
            </div>
          </div>

          <div className="bento">
            <div className="bento__item bento__large">
              <HeroPhoto photo={t.heroPhotos[0]} viewLabel={t.viewLargerLabel} eager />
              <span className="bento__badge">{t.heroBadge}</span>
            </div>
            <div className="bento__item bento__s1">
              <HeroPhoto photo={t.heroPhotos[1]} viewLabel={t.viewLargerLabel} />
            </div>
            <div className="bento__item bento__s2">
              <HeroPhoto photo={t.heroPhotos[2]} viewLabel={t.viewLargerLabel} />
            </div>
            <Link
              className="bento-stat bento__stat"
              href={to(t.heroStat.link)}
            >
              <b>{t.heroStat.value}</b>
              <span>{t.heroStat.label}</span>
              <u>{t.heroStat.link.label} →</u>
            </Link>
          </div>
        </div>
      </div>

      {/* Trust ribbon */}
      <div className="section section--warm">
        <div className="shell">
          <div className="ribbon">
            {t.ribbon.map((item) => (
              <div className="ribbon__item" key={item.label}>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* One trusted door */}
      <div className="section section--paper">
        <div className="shell grid grid--2" style={{ alignItems: "start" }}>
          <div>
            <span className="kicker">{t.oneDoorKicker}</span>
            <h2>{t.oneDoorTitle}</h2>
            <ul className="prose">
              {t.oneDoorBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <ZoomImage
            src="/senior-ministry-overview.png"
            zoomSrc="/senior-ministry-overview.png"
            alt={t.oneDoorImageAlt}
            caption={t.oneDoorCaption}
            viewLabel={t.viewLargerLabel}
          />
        </div>
      </div>

      {/* About teaser */}
      <div className="section section--sky-soft">
        <div className="shell section__head">
          <span className="kicker">{t.aboutKicker}</span>
          <h2>{t.aboutTitle}</h2>
          <ul className="prose">
            {t.aboutBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>
            <Link className="btn btn--ghost" href={to(t.aboutLink)}>
              {t.aboutLink.label}
            </Link>
          </p>
        </div>
      </div>

      {/* Life at Hyosarang — gallery */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <span className="kicker">{t.galleryKicker}</span>
            <h2>{t.galleryTitle}</h2>
          </div>
          <Gallery items={t.gallery} full viewLabel={t.viewLargerLabel} />
        </div>
      </div>

      {/* Watch — Senior College class videos */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <span className="kicker">{t.videosKicker}</span>
            <h2>{t.videosTitle}</h2>
          </div>
          <div className="video-grid">
            {t.videos.map((v) => (
              <div className="video-card" key={v.id}>
                <button
                  type="button"
                  className="video-card__thumb"
                  data-video-id={v.id}
                  data-video-title={v.title}
                  aria-label={`${t.videoPlayLabel}: ${v.title}`}
                >
                  <img
                    src={`/video/${v.id}.jpg`}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <span className="video-card__play" aria-hidden="true">
                    <span>
                      <Icon name="play" />
                    </span>
                  </span>
                </button>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
                <a
                  className="video-card__link"
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener"
                >
                  {t.videoWatchLabel}
                  <span className="visually-hidden">{newTab}</span> ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Five barriers */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <span className="kicker">{t.barriersKicker}</span>
            <h2>{t.barriersTitle}</h2>
          </div>
          <div className="feature-grid feature-grid--4">
            {t.barriers.map((b, i) => (
              <FeatureCard
                key={b.name}
                feature={{
                  name: b.name,
                  text: b.line,
                  image:
                    i === 2
                      ? "/photos/fellowship-meal.jpg"
                      : i === 4
                        ? "/photos/digital-literacy.jpg"
                        : undefined,
                  imageAlt: "",
                  icon:
                    i === 0
                      ? "benefits"
                      : i === 1
                        ? "housing"
                        : i === 3
                          ? "transport"
                          : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Governance trust strip */}
      <div className="section section--navy">
        <div className="shell section__head">
          <span className="kicker">{t.govKicker}</span>
          <h2>{t.govTitle}</h2>
          <p className="lede">{t.govBody}</p>
          <div className="page-hero__actions">
            <Link className="btn btn--on-dark" href={to(t.govLink)}>
              {t.govLink.label}
            </Link>
            <a
              className="btn btn--ghost"
              href={FORM990_URL}
              target="_blank"
              rel="noopener"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              {t.form990Label}
              <span className="visually-hidden">{newTab}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section section--paper">
        <div className="shell section__head">
          <span className="kicker">{t.contactKicker}</span>
          <h2>{t.contactTitle}</h2>
          <p className="prose">{t.contactBody}</p>
          <p>
            <Link className="btn btn--primary" href={to(t.contactPrimary)}>
              {t.contactPrimary.label}
            </Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
