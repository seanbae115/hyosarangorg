import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import FaithNotice from "@/components/FaithNotice";
import { hrefFor, type Lang } from "@/lib/nav";
import type { MinistriesCopy } from "@/lib/content/types";

export default function MinistriesBody({
  lang,
  t,
}: {
  lang: Lang;
  t: MinistriesCopy;
}) {
  return (
    <PageShell lang={lang} currentPath="/ministries">
      <PageHero
        title={t.heroTitle}
        lead={t.heroLead}
        imageSrc="/photos/mission-ensenada-2026.jpg"
        imageAlt={t.heroImageAlt}
      />

      {/* Separation from grant-funded services, stated up front */}
      <div className="section section--sky-soft">
        <div className="shell">
          <FaithNotice lang={lang} t={t.notice} />
        </div>
      </div>

      {/* Ministries — feature cards */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.listHeading}</h2>
          </div>
          <div className="feature-grid">
            {t.ministries.map((m) => (
              <FeatureCard key={m.name} feature={m} />
            ))}
          </div>
          <div className="actions" style={{ marginTop: "1.5rem" }}>
            <Link
              className="btn btn--primary"
              href={hrefFor("/senior-college", lang)}
            >
              {t.collegeLinkLabel} &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Nursing-home ministry and Ensenada mission */}
      <div className="section section--paper">
        <div className="shell grid grid--2">
          <div className="prose">
            <h2>{t.nursingHeading}</h2>
            {t.nursingBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="prose">
            <h2>{t.missionHeading}</h2>
            <p>{t.missionBody}</p>
            <p>{t.missionPurposesLabel}</p>
            <ol>
              {t.missionPurposes.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="section section--sky-soft">
        <div className="shell prose">
          <p>
            {t.contactLead}{" "}
            <Link href={hrefFor("/contact", lang)}>{t.contactLinkLabel} &rarr;</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
