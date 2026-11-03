import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import FaithNotice from "@/components/FaithNotice";
import VideoGrid from "@/components/VideoGrid";
import { hrefFor, type Lang } from "@/lib/nav";
import type { SeniorCollegeCopy } from "@/lib/content/types";

export default function SeniorCollegeBody({
  lang,
  t,
}: {
  lang: Lang;
  t: SeniorCollegeCopy;
}) {
  return (
    // Highlight "Ministries" in the nav: the college is one of its ministries.
    <PageShell lang={lang} currentPath="/ministries">
      <PageHero
        title={t.heroTitle}
        lead={t.heroLead}
        imageSrc="/photos/college-pottery-group.jpg"
        imageAlt={t.heroImageAlt}
      />

      {/* About the college + key facts */}
      <div className="section section--paper">
        <div className="shell grid grid--2">
          <div className="prose">
            <h2>{t.aboutHeading}</h2>
            {t.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="college-facts">
            {t.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="section section--sky-soft">
        <div className="shell">
          <FaithNotice lang={lang} t={t.notice} />
        </div>
      </div>

      {/* Classes */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.classesHeading}</h2>
            <p className="prose">{t.classesIntro}</p>
          </div>
          <ul className="grid grid--3 class-list">
            {t.classes.map((c) => (
              <li key={c.name} className="card">
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                {c.instructor ? (
                  <p className="class-list__teacher">
                    {t.instructorLabel}: {c.instructor}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="section section--paper">
        <div className="shell">
          <div className="section__head">
            <h2>{t.galleryHeading}</h2>
          </div>
          <Gallery
            items={t.gallery}
            full
            viewLabel={t.viewLargerLabel}
            lang={lang}
          />
        </div>
      </div>

      {/* Class videos (YouTube) */}
      <div className="section section--warm">
        <div className="shell">
          <div className="section__head">
            <h2>{t.classVideos.heading}</h2>
            {t.classVideos.note ? <p>{t.classVideos.note}</p> : null}
          </div>
          <VideoGrid lang={lang} videos={t.classVideos.videos} />
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
