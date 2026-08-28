import type { IconKey } from "@/components/icons";

export interface CtaLink {
  label: string;
  /** English-canonical path (e.g. "/about") or absolute URL when `external`. */
  href: string;
  external?: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface VideoItem {
  /** YouTube video id */
  id: string;
  title: string;
  desc: string;
}

/** A visual feature card: photo background OR icon panel, with a title. */
export interface Feature {
  name: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  icon?: IconKey;
}

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroPoints: string[];
  heroPrimary: CtaLink;
  heroSecondary: CtaLink;
  heroBadge: string;
  heroStat: { value: string; label: string; link: CtaLink };
  heroPhotos: { src: string; alt: string }[];
  ribbon: { value: string; label: string }[];
  oneDoorKicker: string;
  oneDoorTitle: string;
  oneDoorBullets: string[];
  oneDoorImageAlt: string;
  oneDoorCaption: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutBullets: string[];
  aboutLink: CtaLink;
  galleryKicker: string;
  galleryTitle: string;
  gallery: GalleryItem[];
  videosKicker: string;
  videosTitle: string;
  videos: VideoItem[];
  videoPlayLabel: string;
  videoWatchLabel: string;
  barriersKicker: string;
  barriersTitle: string;
  barriers: { name: string; line: string }[];
  govKicker: string;
  govTitle: string;
  govBody: string;
  govLink: CtaLink;
  form990Label: string;
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  contactPrimary: CtaLink;
  viewLargerLabel: string;
}

export interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  missionHeading: string;
  mission: string;
  visionHeading: string;
  vision: string;
  valuesHeading: string;
  values: { name: string; meaning: string }[];
  timelineHeading: string;
  timeline: { year: string; event: string }[];
  programsHeading: string;
  programsIntro: string;
  programs: Feature[];
  identityHeading: string;
  identityBody1: string;
  identityBody2: string;
  identityLinkLabel: string;
  footnote: string;
  galleryHeading: string;
  galleryIntro: string;
  gallery: GalleryItem[];
  viewLargerLabel: string;
}

export interface ServicesCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  featuresHeading: string;
  features: Feature[];
  portfolioHeading: string;
  portfolioNote: string;
  portfolioCols: { area: string; activities: string; benefit: string };
  portfolio: { area: string; activities: string; benefit: string }[];
  principlesHeading: string;
  principles: string[];
  boundaryHeading: string;
  boundaryLead: string;
  boundaryDoLabel: string;
  boundaryDo: string[];
  boundaryDontLabel: string;
  boundaryDont: string[];
}

export interface KslcCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  accountabilityHeading: string;
  accountabilityBullets: string[];
  processHeading: string;
  steps: { n: string; title: string; body: string }[];
  barriersHeading: string;
  barriers: {
    name: string;
    examples: string;
    image?: string;
    imageAlt?: string;
    icon?: IconKey;
  }[];
  privacyHeading: string;
  privacyLead: string;
  privacySafeguards: string[];
  privacyLinkLabel: string;
  modelHeading: string;
  modelCols: { hyosarang: string; kslc: string };
  model: { hyosarang: string; kslc: string }[];
  ctaHeading: string;
  ctaBody: string;
  ctaGov: string;
  ctaContact: string;
}

export interface GovernanceCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  targetsHeading: string;
  targetsQualifier: string;
  targets: { value: string; label: string }[];
  frameworkHeading: string;
  frameworkCols: { domain: string; measures: string; cycle: string };
  framework: { domain: string; measures: string; cycle: string }[];
  frameworkNote: string;
  separationHeading: string;
  separationBody: string;
  boardHeading: string;
  boardBody: string;
  boardNote: string;
  fundHeading: string;
  fundBody: string;
  privacyHeading: string;
  privacyBody: string;
  form990Heading: string;
  form990Body: string;
  form990Label: string;
  recognitionAlt: string;
  recognitionCaption: string;
  viewLargerLabel: string;
}

export interface ContactCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  reachHeading: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  mapsLabel: string;
  mailSubject: string;
  audienceHeading: string;
  audience: string[];
  factsHeading: string;
  facts: string[];
  form990Label: string;
}
