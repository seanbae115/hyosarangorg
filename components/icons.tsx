/** Small inline line-icon set (24x24, stroke=currentColor). aria-hidden by the consumer. */
export type IconKey =
  | "benefits"
  | "housing"
  | "transport"
  | "learning"
  | "support"
  | "language"
  | "health"
  | "music"
  | "pencil"
  | "hands"
  | "play";

export const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  benefits: (
    <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 1.5V8h4.5M8 12h8M8 16h8M8 8h3" />
  ),
  housing: <path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" />,
  transport: (
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2v2h-3v-2H9v2H6v-2a2 2 0 0 1-2-2V6Zm1 5h14M8 17.5h.01M16 17.5h.01" />
  ),
  learning: <path d="M3 7 12 3l9 4-9 4-9-4Zm4 3v5c0 1.7 2.7 3 5 3s5-1.3 5-3v-5M21 7v6" />,
  support: (
    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3 3-5 7-5s7 2 7 5M16 20c0-1.8 1-3.4 2.6-4.2" />
  ),
  language: (
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c-3 3-3 15 0 18M3.5 9h17M3.5 15h17" />
  ),
  health: <path d="M12 4v16M4 12h16M7 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />,
  music: <path d="M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  pencil: <path d="M4 20h4L20 8a2.8 2.8 0 0 0-4-4L4 16v4ZM14 6l4 4" />,
  hands: (
    <path d="M12 21s-7-4.3-9.3-8.5C1 9.6 2.4 6 5.8 6c2 0 3.4 1.3 4.2 2.6C10.8 7.3 12.2 6 14.2 6c3.4 0 4.8 3.6 3.1 6.5C15 16.7 12 21 12 21Z" />
  ),
  play: <path d="M8 5v14l11-7L8 5Z" />,
};

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
