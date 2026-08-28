import { Icon } from "@/components/icons";
import type { Feature } from "@/lib/content/types";

/**
 * Visual feature card: a photo background with a title overlay, or a
 * navy->sky gradient panel with a large line icon. Same footprint either way.
 * `size="lg"` makes a taller, bolder card (used for the KSLC barrier areas).
 */
export default function FeatureCard({
  feature,
  size = "md",
}: {
  feature: Feature;
  size?: "md" | "lg";
}) {
  const cls = `feature-card feature-card--${size} ${
    feature.image ? "feature-card--photo" : "feature-card--icon"
  }`;

  return (
    <article className={cls}>
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
      <h3>{feature.name}</h3>
      {feature.text ? <p>{feature.text}</p> : null}
    </article>
  );
}
