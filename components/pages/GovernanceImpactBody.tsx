import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import type { Lang } from "@/lib/nav";
import type { GovernanceCopy } from "@/lib/content/types";

export default function GovernanceImpactBody({
  lang,
  t,
}: {
  lang: Lang;
  t: GovernanceCopy;
}) {
  return (
    <PageShell lang={lang} currentPath="/governance-impact">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      {/* Proposed Year-One Targets */}
      <div className="section section--sky-soft">
        <div className="shell">
          <div className="section__head">
            <h2>{t.targetsHeading}</h2>
            <p className="lede">{t.targetsQualifier}</p>
          </div>
          <div className="grid grid--3">
            {t.targets.map((target) => (
              <div className="tile" key={target.label}>
                <span className="tile__num">{target.value}</span>
                <span>{target.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Measurement framework */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.frameworkHeading}</h2>
          </div>
          <div className="table-wrap" tabIndex={0}>
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">{t.frameworkCols.domain}</th>
                  <th scope="col">{t.frameworkCols.measures}</th>
                  <th scope="col">{t.frameworkCols.cycle}</th>
                </tr>
              </thead>
              <tbody>
                {t.framework.map((row) => (
                  <tr key={row.domain}>
                    <th scope="row">{row.domain}</th>
                    <td>{row.measures}</td>
                    <td>{row.cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="note" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>{t.frameworkNote}</p>
          </div>
        </div>
      </div>

      {/* Religious / grant separation */}
      <div className="section section--navy">
        <div className="shell section__head">
          <h2>{t.separationHeading}</h2>
          <p className="lede">{t.separationBody}</p>
        </div>
      </div>

      {/* Board oversight */}
      <div className="section section--paper">
        <div className="shell section__head">
          <h2>{t.boardHeading}</h2>
          <p className="prose">{t.boardBody}</p>
          <div className="note">
            <p style={{ margin: 0 }}>{t.boardNote}</p>
          </div>
        </div>
      </div>

      {/* Fund accounting */}
      <div className="section section--warm">
        <div className="shell section__head">
          <h2>{t.fundHeading}</h2>
          <p className="prose">{t.fundBody}</p>
        </div>
      </div>

      {/* Data privacy */}
      <div className="section section--paper">
        <div className="shell section__head">
          <h2>{t.privacyHeading}</h2>
          <p className="prose">{t.privacyBody}</p>
        </div>
      </div>
    </PageShell>
  );
}
