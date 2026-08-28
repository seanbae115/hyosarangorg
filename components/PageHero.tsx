/**
 * Interior-page hero. Optional background image gets a navy gradient overlay
 * (see .page-hero--image in globals.css) so overlaid text keeps AA contrast.
 */
export default function PageHero({
  title,
  lead,
  imageSrc,
  imageAlt,
}: {
  title: string;
  lead?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className={imageSrc ? "page-hero page-hero--image" : "page-hero"}
      aria-label={title}
    >
      {imageSrc && (
        <img
          className="page-hero__bg"
          src={imageSrc}
          alt={imageAlt ?? ""}
          aria-hidden={imageAlt ? undefined : true}
        />
      )}
      <div className="shell">
        <h1>{title}</h1>
        {lead && <p className="lede">{lead}</p>}
      </div>
    </section>
  );
}
