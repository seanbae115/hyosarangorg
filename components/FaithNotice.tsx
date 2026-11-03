import Link from "next/link";
import { hrefFor, type Lang } from "@/lib/nav";
import type { FaithNotice as FaithNoticeCopy } from "@/lib/content/types";

/**
 * Callout on the faith-ministry pages: these activities are religious and
 * kept apart from grant-funded services. Links to the separation policy.
 */
export default function FaithNotice({
  lang,
  t,
}: {
  lang: Lang;
  t: FaithNoticeCopy;
}) {
  return (
    <aside className="note faith-notice" aria-label={t.heading}>
      <h2>{t.heading}</h2>
      <p>{t.body}</p>
      <p>
        <Link href={hrefFor("/governance-impact", lang)}>
          {t.linkLabel} &rarr;
        </Link>
      </p>
    </aside>
  );
}
