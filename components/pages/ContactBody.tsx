import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { CONTACT, type Lang } from "@/lib/nav";
import type { ContactCopy } from "@/lib/content/types";

export default function ContactBody({
  lang,
  t,
}: {
  lang: Lang;
  t: ContactCopy;
}) {
  const newTab = lang === "ko" ? " (새 창)" : " (opens in a new tab)";
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    t.mailSubject
  )}`;

  return (
    <PageShell lang={lang} currentPath="/contact">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      {/* Reach us */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.reachHeading}</h2>
          </div>
          <div className="grid grid--3">
            <div className="card">
              <h3>{t.emailLabel}</h3>
              <p>
                <a href={mailHref}>{CONTACT.email}</a>
              </p>
              <p>
                <a className="btn btn--primary" href={mailHref}>
                  {t.emailLabel}
                </a>
              </p>
            </div>
            <div className="card">
              <h3>{t.phoneLabel}</h3>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
            </div>
            <div className="card">
              <h3>{t.addressLabel}</h3>
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener">
                  {t.mapsLabel}
                  <span className="visually-hidden">{newTab}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Audience */}
      <div className="section section--warm">
        <div className="shell section__head">
          <h2>{t.audienceHeading}</h2>
          <ul className="prose">
            {t.audience.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Facts */}
      <div className="section section--paper">
        <div className="shell section__head">
          <h2>{t.factsHeading}</h2>
          <ul className="prose">
            {t.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
