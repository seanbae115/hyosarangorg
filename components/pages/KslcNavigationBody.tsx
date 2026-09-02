import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Stepper from "@/components/Stepper";
import FeatureCard from "@/components/FeatureCard";
import { hrefFor, type Lang } from "@/lib/nav";
import type { KslcCopy } from "@/lib/content/types";

export default function KslcNavigationBody({
  lang,
  t,
}: {
  lang: Lang;
  t: KslcCopy;
}) {
  return (
    <PageShell lang={lang} currentPath="/kslc-navigation">
      <PageHero
        title={t.heroTitle}
        lead={t.heroLead}
        imageSrc="/photos/digital-literacy.jpg"
      />

      {/* Five-step process */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.processHeading}</h2>
          </div>
          <Stepper steps={t.steps} />
        </div>
      </div>

      {/* Five barrier areas */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.barriersHeading}</h2>
          </div>
          <div className="feature-grid">
            {t.barriers.map((b) => (
              <FeatureCard
                key={b.name}
                size="lg"
                feature={{
                  name: b.name,
                  text: b.examples,
                  image: b.image,
                  imageAlt: b.imageAlt,
                  icon: b.icon,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Privacy by design — a card of safeguards */}
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
                  <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
                  <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
                  <path d="M12 14v3" />
                </svg>
              </span>
              <h2>{t.privacyHeading}</h2>
            </div>
            <p className="boundary-card__lead">{t.privacyLead}</p>
            <ul className="boundary-list boundary-list--do boundary-list--2col">
              {t.privacySafeguards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="boundary-card__foot">
              <Link href={hrefFor("/governance-impact", lang)}>
                {t.privacyLinkLabel} &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Collaboration model */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.modelHeading}</h2>
          </div>
          <div className="table-wrap" tabIndex={0}>
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">{t.modelCols.hyosarang}</th>
                  <th scope="col">{t.modelCols.kslc}</th>
                </tr>
              </thead>
              <tbody>
                {t.model.map((row) => (
                  <tr key={row.hyosarang}>
                    <td>{row.hyosarang}</td>
                    <td>{row.kslc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section section--navy">
        <div className="shell section__head">
          <h2>{t.ctaHeading}</h2>
          <p className="lede">{t.ctaBody}</p>
          <div className="page-hero__actions">
            <Link
              className="btn btn--on-dark"
              href={hrefFor("/governance-impact", lang)}
            >
              {t.ctaGov}
            </Link>
            <Link
              className="btn btn--ghost"
              href={hrefFor("/contact", lang)}
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
