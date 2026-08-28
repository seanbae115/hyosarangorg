/**
 * A photo or diagram that opens in the site lightbox when clicked.
 * Server component — emits a real <button> that the client <Lightbox>
 * picks up via event delegation (data-zoom-src). Without JS it is simply
 * a non-interactive image (progressive enhancement).
 */
function toLarge(src: string): string {
  // "/photos/foo.jpg" -> "/photos/lg/foo.jpg"
  const i = src.lastIndexOf("/");
  return i === -1 ? src : `${src.slice(0, i)}/lg${src.slice(i)}`;
}

export default function ZoomImage({
  src,
  alt,
  caption,
  zoomSrc,
  eager = false,
  viewLabel = "View larger",
}: {
  src: string;
  alt: string;
  caption?: string;
  zoomSrc?: string;
  eager?: boolean;
  viewLabel?: string;
}) {
  const large = zoomSrc ?? toLarge(src);
  const label = caption ? `${viewLabel}: ${caption}` : `${viewLabel}: ${alt}`;

  return (
    <figure className="zoomfig">
      <button
        type="button"
        className="zoomable"
        data-zoom-src={large}
        data-zoom-alt={alt}
        data-zoom-caption={caption ?? ""}
        aria-label={label}
      >
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
        <span className="zoomable__hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
