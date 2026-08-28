import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import Gallery from "@/components/Gallery";
import { hrefFor, type Lang } from "@/lib/nav";
import type { AboutCopy } from "@/lib/content/types";

export default function AboutBody({ lang, t }: { lang: Lang; t: AboutCopy }) {
  return (
    <PageShell lang={lang} currentPath="/about">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      {/* Mission & vision */}
      <div className="section section--paper">
        <div className="shell grid grid--2">
          <div>
            <h2>{t.missionHeading}</h2>
            <p className="prose">{t.mission}</p>
          </div>
          <div>
            <h2>{t.visionHeading}</h2>
            <p className="prose">{t.vision}</p>
          </div>
        </div>
      </div>

      {/* Programs — feature cards */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.programsHeading}</h2>
            <p className="prose">{t.programsIntro}</p>
          </div>
          <div className="feature-grid">
            {t.programs.map((p) => (
              <FeatureCard key={p.name} feature={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.valuesHeading}</h2>
          </div>
          <div className="table-wrap" tabIndex={0}>
            <table className="data-table">
              <tbody>
                {t.values.map((v) => (
                  <tr key={v.name}>
                    <th scope="row" style={{ width: "34%" }}>
                      {v.name}
                    </th>
                    <td>{v.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.timelineHeading}</h2>
          </div>
          <ol className="timeline">
            {t.timeline.map((row) => (
              <li key={row.year}>
                <b>{row.year}</b>
                <span>{row.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Community gallery */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.galleryHeading}</h2>
            <p className="prose">{t.galleryIntro}</p>
          </div>
          <Gallery items={t.gallery} full viewLabel={t.viewLargerLabel} />
        </div>
      </div>

      {/* An honest picture of who we are — a plain-spoken statement card */}
      <div className="section section--sky-soft">
        <div className="shell">
          <div className="boundary-card">
            <div className="boundary-card__head">
              <span className="boundary-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.25 12 2.5 2.5 5-5.5" />
                </svg>
              </span>
              <h2>{t.identityHeading}</h2>
            </div>
            <div className="boundary-card__prose">
              <p>{t.identityBody1}</p>
              <p>{t.identityBody2}</p>
            </div>
            <p className="boundary-card__foot">
              <Link href={hrefFor("/governance-impact", lang)}>
                {t.identityLinkLabel} &rarr;
              </Link>
            </p>
            <p className="boundary-card__note">{t.footnote}</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
