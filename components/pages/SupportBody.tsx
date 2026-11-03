import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { CONTACT, type Lang } from "@/lib/nav";
import type { SupportCopy } from "@/lib/content/types";

export default function SupportBody({
  lang,
  t,
}: {
  lang: Lang;
  t: SupportCopy;
}) {
  const newTab = lang === "ko" ? " (새 창)" : " (opens in a new tab)";
  const venmoUrl = `https://venmo.com/u/${CONTACT.venmoUser}`;

  return (
    <PageShell lang={lang} currentPath="/support">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      {/* Ways to give */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.waysHeading}</h2>
          </div>
          <div className="grid grid--3">
            <div className="card">
              <h3>{t.venmoLabel}</h3>
              <p>{t.venmoBody}</p>
              <p>
                <b>@{CONTACT.venmoUser}</b>
              </p>
              <img
                className="support-qr"
                src="/venmo-qr.png"
                alt={t.venmoQrAlt}
                width={200}
                height={227}
                loading="lazy"
              />
              <p>
                <a href={venmoUrl} target="_blank" rel="noopener">
                  {t.venmoLinkLabel}
                  <span className="visually-hidden">{newTab}</span>
                </a>
              </p>
            </div>
            <div className="card">
              <h3>{t.zelleLabel}</h3>
              <p>{t.zelleBody}</p>
              <p>
                {t.zelleNameLabel}: <b>{CONTACT.zelleName}</b>
                <br />
                {t.zellePhoneLabel}: <b>{CONTACT.zellePhone}</b>
              </p>
            </div>
            <div className="card">
              <h3>{t.mailLabel}</h3>
              <p>{t.mailBody}</p>
              <p>{CONTACT.address}</p>
              <h3>{t.hoursLabel}</h3>
              <p>{t.hours}</p>
            </div>
          </div>
          <div className="note" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>{t.taxNote}</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
