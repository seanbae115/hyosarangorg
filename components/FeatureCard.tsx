import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Feature } from "@/lib/content/types";
import { hrefFor, type Lang } from "@/lib/nav";

/**
 * Visual feature card: a photo background with a title overlay, or a
 * navy->sky gradient panel with a large line icon. Same footprint either way.
 * `size="lg"` makes a taller, bolder card (used for the KSLC barrier areas).
 * With `feature.href` the whole card is a link; site paths get the page
 * language prefix, same-page anchors ("#nursing") are left as they are.
 */
export default function FeatureCard({
  feature,
  size = "md",
  lang = "en",
}: {
  feature: Feature;
  size?: "md" | "lg";
  lang?: Lang;
}) {
  const href = feature.href?.startsWith("#")
    ? feature.href
    : feature.href && hrefFor(feature.href, lang);
  const cls = `feature-card feature-card--${size} ${
    feature.image ? "feature-card--photo" : "feature-card--icon"
  }`;

  const inner = (
    <>
      {feature.image ? (
        <img
          className="feature-card__img"
          src={feature.image}
          alt={feature.imageAlt ?? ""}
          aria-hidden={feature.imageAlt ? undefined : true}
          loading="lazy"
        />
      ) : feature.icon ? (
        <Icon name={feature.icon} className="feature-card__icon" />
      ) : null}
      <h3>
        {feature.name}
        {feature.href ? (
          <span className="feature-card__arrow" aria-hidden="true">
            {" "}
            &rarr;
          </span>
        ) : null}
      </h3>
      {feature.text ? <p>{feature.text}</p> : null}
    </>
  );

  if (href) {
    return (
      <Link className={`${cls} feature-card--link`} href={href}>
        {inner}
      </Link>
    );
  }
  return <article className={cls}>{inner}</article>;
}
