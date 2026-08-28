import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import type { Lang } from "@/lib/nav";
import type { ServicesCopy } from "@/lib/content/types";

export default function ServicesBody({
  lang,
  t,
}: {
  lang: Lang;
  t: ServicesCopy;
}) {
  return (
    <PageShell lang={lang} currentPath="/services">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      {/* Feature cards */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.featuresHeading}</h2>
          </div>
          <div className="feature-grid">
            {t.features.map((f) => (
              <FeatureCard key={f.name} feature={f} />
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="section section--warm">
        <div className="shell section__head">
          <h2>{t.principlesHeading}</h2>
          <ul className="prose">
            {t.principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Portfolio detail table */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.portfolioHeading}</h2>
            <p className="prose">{t.portfolioNote}</p>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">{t.portfolioCols.area}</th>
                  <th scope="col">{t.portfolioCols.activities}</th>
                  <th scope="col">{t.portfolioCols.benefit}</th>
                </tr>
              </thead>
              <tbody>
                {t.portfolio.map((row) => (
                  <tr key={row.area}>
                    <th scope="row">{row.area}</th>
                    <td>{row.activities}</td>
                    <td>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Service boundary — a provide / refer-out ledger */}
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
                  <path d="M12 3 4 6v5.5c0 4.6 3.2 8.3 8 9.5 4.8-1.2 8-4.9 8-9.5V6l-8-3Z" />
                  <path d="m8.8 12 2.2 2.2 4.2-4.4" />
                </svg>
              </span>
              <h2>{t.boundaryHeading}</h2>
            </div>
            <p className="boundary-card__lead">{t.boundaryLead}</p>
            <div className="boundary-card__cols">
              <div>
                <h3>{t.boundaryDoLabel}</h3>
                <ul className="boundary-list boundary-list--do">
                  {t.boundaryDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{t.boundaryDontLabel}</h3>
                <ul className="boundary-list boundary-list--dont">
                  {t.boundaryDont.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
