"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ZoomImage from "@/components/ZoomImage";
import type { Lang } from "@/lib/nav";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Desktop: a 4-/2-column photo grid.
 * Phones (<=560px, see globals.css): one photo per view in a scroll-snapping
 * row. Without JS it is still swipeable; with JS the prev/next arrows appear.
 */
export default function Gallery({
  items,
  full = false,
  viewLabel,
  lang = "en",
}: {
  items: GalleryItem[];
  full?: boolean;
  viewLabel?: string;
  lang?: Lang;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(":scope > .zoomfig");
    const by = slide ? slide.getBoundingClientRect().width + 14 : el.clientWidth;
    const max = el.scrollWidth - el.clientWidth;
    const from = el.scrollLeft;
    const target = Math.max(0, Math.min(max, Math.round(from + dir * by)));
    if (target === Math.round(from)) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mandatory snap can cancel a smooth programmatic scroll, so suspend it
    // for the move and restore once the scroll settles. If the browser does
    // not honour smooth (or the tab is hidden), fall back to an instant jump.
    el.style.scrollSnapType = "none";
    el.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
    // If smooth scroll was a no-op (unsupported / hidden tab), jump.
    window.setTimeout(() => {
      if (Math.abs(el.scrollLeft - from) < 1) el.scrollLeft = target;
      sync();
    }, 60);
    // Keep the arrow enabled/disabled state honest even where the scroll
    // event is unreliable.
    window.setTimeout(sync, 420);

    const restore = () => {
      el.style.scrollSnapType = "";
      el.removeEventListener("scrollend", restore);
      window.clearTimeout(fallback);
    };
    const fallback = window.setTimeout(restore, 800);
    el.addEventListener("scrollend", restore);
  };

  if (!full) {
    return (
      <div className="gallery">
        {items.map((it) => (
          <ZoomImage
            key={it.src}
            src={it.src}
            alt={it.alt}
            caption={it.caption}
            viewLabel={viewLabel}
          />
        ))}
      </div>
    );
  }

  const prevLabel = lang === "ko" ? "이전 사진" : "Previous photo";
  const nextLabel = lang === "ko" ? "다음 사진" : "Next photo";
  const groupLabel = lang === "ko" ? "사진 갤러리" : "Photo gallery";

  return (
    <div className="gallery-carousel">
      <div
        className="gallery gallery--full"
        ref={trackRef}
        role="group"
        aria-label={groupLabel}
        tabIndex={0}
      >
        {items.map((it) => (
          <ZoomImage
            key={it.src}
            src={it.src}
            alt={it.alt}
            caption={it.caption}
            viewLabel={viewLabel}
          />
        ))}
      </div>

      <button
        type="button"
        className="gallery-carousel__btn gallery-carousel__btn--prev"
        onClick={() => step(-1)}
        disabled={atStart}
        aria-label={prevLabel}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 5-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        className="gallery-carousel__btn gallery-carousel__btn--next"
        onClick={() => step(1)}
        disabled={atEnd}
        aria-label={nextLabel}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
