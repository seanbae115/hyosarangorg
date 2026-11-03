import { Icon } from "@/components/icons";
import type { Lang } from "@/lib/nav";
import type { VideoItem } from "@/lib/content/types";

/**
 * YouTube facade cards. The thumbnail button carries data-video-id, which the
 * client <Lightbox> (mounted by PageShell) turns into an embedded player.
 * Thumbnails live in /public/video/<id>.jpg.
 */
export default function VideoGrid({
  lang,
  videos,
}: {
  lang: Lang;
  videos: VideoItem[];
}) {
  const ko = lang === "ko";
  const playLabel = ko ? "영상 재생" : "Play video";
  const watchLabel = ko ? "유튜브에서 보기" : "Watch on YouTube";
  const newTab = ko ? " (새 창)" : " (opens in a new tab)";

  return (
    <div className="video-grid">
      {videos.map((v) => (
        <div className="video-card" key={v.id}>
          <button
            type="button"
            className="video-card__thumb"
            data-video-id={v.id}
            data-video-title={v.title}
            aria-label={`${playLabel}: ${v.title}`}
          >
            <img
              src={`/video/${v.id}.jpg`}
              alt=""
              loading="lazy"
              width={1280}
              height={720}
            />
            <span className="video-card__play" aria-hidden="true">
              <span>
                <Icon name="play" />
              </span>
            </span>
          </button>
          <h3 lang={v.titleLang}>{v.title}</h3>
          {v.desc ? <p>{v.desc}</p> : null}
          <a
            className="video-card__link"
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener"
          >
            {watchLabel}
            <span className="visually-hidden">{newTab}</span> ↗
          </a>
        </div>
      ))}
    </div>
  );
}
