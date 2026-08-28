"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/nav";

type Item =
  | { kind: "image"; src: string; alt: string; caption: string }
  | { kind: "video"; id: string; caption: string };

/**
 * One <dialog> per page. Any element with data-zoom-src (image) or
 * data-video-id (YouTube) opens it, via a delegated document click listener.
 * The native <dialog> gives us focus trapping, Esc-to-close, and focus
 * restore for free. The YouTube embed uses youtube-nocookie.com and is
 * only inserted after a click, so the page stays cookie-free until then.
 */
export default function Lightbox({ lang }: { lang: Lang }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [item, setItem] = useState<Item | null>(null);

  const ko = lang === "ko";
  const closeLabel = ko ? "닫기" : "Close";
  const dialogLabel = ko ? "이미지 및 영상 보기" : "Image and video viewer";

  const close = useCallback(() => {
    dialogRef.current?.close();
    setItem(null);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const trigger = target.closest<HTMLElement>(
        "[data-zoom-src],[data-video-id]"
      );
      if (!trigger) return;
      e.preventDefault();
      const videoId = trigger.getAttribute("data-video-id");
      if (videoId) {
        setItem({
          kind: "video",
          id: videoId,
          caption: trigger.getAttribute("data-video-title") || "",
        });
      } else {
        setItem({
          kind: "image",
          src: trigger.getAttribute("data-zoom-src") || "",
          alt: trigger.getAttribute("data-zoom-alt") || "",
          caption: trigger.getAttribute("data-zoom-caption") || "",
        });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // open the dialog once React has rendered the new content
  useEffect(() => {
    if (item && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [item]);

  // Clear content on ANY close (Esc, backdrop, close button) so a video's
  // iframe is removed and its audio stops. Native listener, because React's
  // onClose/onCancel props are unreliable for <dialog> here.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const clear = () => setItem(null);
    d.addEventListener("close", clear);
    d.addEventListener("cancel", clear);
    return () => {
      d.removeEventListener("close", clear);
      d.removeEventListener("cancel", clear);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={dialogLabel}
      onKeyDown={(e) => {
        // Esc: run our own cleanup too, since the native `cancel`/`close`
        // events are unreliable in some engines.
        if (e.key === "Escape") close();
      }}
      onClick={(e) => {
        // close on any click that isn't on the media or the controls
        const el = e.target as HTMLElement;
        if (
          !el.closest(
            ".lightbox__stage img, .lightbox__video, .lightbox__close, .lightbox__caption"
          )
        ) {
          close();
        }
      }}
    >
      <div className="lightbox__inner">
        <button
          type="button"
          className="lightbox__close"
          onClick={close}
          aria-label={closeLabel}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="lightbox__stage">
          {item?.kind === "image" && (
            <img src={item.src} alt={item.alt} />
          )}
          {item?.kind === "video" && (
            <div className="lightbox__video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
                title={item.caption || "YouTube video"}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {item?.caption ? (
          <p className="lightbox__caption">{item.caption}</p>
        ) : null}
      </div>
    </dialog>
  );
}
