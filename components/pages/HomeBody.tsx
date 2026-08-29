import Link from "next/link";
import PageShell from "@/components/PageShell";
import Gallery from "@/components/Gallery";
import ZoomImage from "@/components/ZoomImage";
import FeatureCard from "@/components/FeatureCard";
import { Icon } from "@/components/icons";
import { hrefFor, type Lang } from "@/lib/nav";
import type { CtaLink, HomeCopy } from "@/lib/content/types";

export default function HomeBody({ lang, t }: { lang: Lang; t: HomeCopy }) {
  const to = (link: CtaLink) =>
    link.external ? link.href : hrefFor(link.href, lang);
  const newTab = lang === "ko" ? " (새 창)" : " (opens in a new tab)";

  return (
    <PageShell lang={lang} currentPath="/">
      {/* Hero — full-bleed community watercolor + a light copy panel */}
      <div className="home-hero">
        <img className="home-hero__bg" src="/hero-community.jpg" alt="" />
        <div className="shell">
          <div className="home-hero__inner">
            <span className="kicker">{t.heroEyebrow}</span>
            <h1>
              {t.heroTitle}{" "}
              <span className="home-hero__accent">{t.heroTitleAccent}</span>
            </h1>
            <ul className="home-hero__points">
              {t.heroPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="page-hero__actions">
              <Link className="btn btn--primary" href={to(t.heroPrimary)}>
                {t.heroPrimary.label}
              </Link>
              <Link className="btn btn--ghost" href={to(t.heroSecondary)}>
                {t.heroSecondary.label}
              </Link>
            </div>
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
          <Gallery
            items={t.gallery}
            full
            viewLabel={t.viewLargerLabel}
            lang={lang}
          />
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
                  image: [
                    "/photos/barrier-benefits.jpg",
                    "/photos/barrier-housing.jpg",
                    "/photos/fellowship-meal.jpg",
                    "/photos/barrier-transport.jpg",
                    "/photos/digital-literacy.jpg",
                  ][i],
                  imageAlt: "",
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
