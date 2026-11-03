import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import type { Lang } from "@/lib/nav";
import type { HistoryCopy } from "@/lib/content/types";

export default function HistoryBody({ lang, t }: { lang: Lang; t: HistoryCopy }) {
  // Newest year first.
  const years = [...t.years].reverse();

  return (
    <PageShell lang={lang} currentPath="/about">
      <PageHero title={t.heroTitle} lead={t.heroLead} />

      <div className="section section--paper">
        <div className="shell history">
          {years.map((y) => (
            <section key={y.year} aria-labelledby={`y${y.year}`}>
              <h2 id={`y${y.year}`} className="history__year">
                {y.year}
              </h2>
              <ol className="timeline timeline--dates">
                {y.items.map((row) => (
                  <li key={row.date + row.text}>
                    <b>{row.date}</b>
                    <span>{row.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
