import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ZoomImage from "@/components/ZoomImage";
import { hrefFor, type Lang } from "@/lib/nav";
import type { NewsCopy } from "@/lib/content/types";

export default function NewsBody({ lang, t }: { lang: Lang; t: NewsCopy }) {
  const viewLabel = lang === "ko" ? "크게 보기" : "View larger";

  return (
    // Most posts are Senior College and mission news: highlight "Ministries".
    <PageShell lang={lang} currentPath="/ministries">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      <div className="section section--paper">
        <div className="shell">
          <ol className="news-list">
            {t.items.map((item) => (
              <li key={item.title}>
                <article
                  className={
                    item.image ? "news-item" : "news-item news-item--text"
                  }
                >
                  {item.image ? (
                    <ZoomImage
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      viewLabel={viewLabel}
                    />
                  ) : null}
                  <div className="prose">
                    {item.date ? (
                      <p className="news-item__date">{item.date}</p>
                    ) : null}
                    <h2>{item.title}</h2>
                    {item.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
          <p className="prose" style={{ marginTop: "2rem" }}>
            <Link href={hrefFor("/history", lang)}>{t.historyLinkLabel} &rarr;</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
