import ZoomImage from "@/components/ZoomImage";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export default function Gallery({
  items,
  full = false,
  viewLabel,
}: {
  items: GalleryItem[];
  full?: boolean;
  viewLabel?: string;
}) {
  return (
    <div className={full ? "gallery gallery--full" : "gallery"}>
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
