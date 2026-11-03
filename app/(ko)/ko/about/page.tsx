import type { Metadata } from "next";
import AboutBody from "@/components/pages/AboutBody";
import about from "@/lib/content/about";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: about.ko.metaTitle,
  description: about.ko.metaDescription,
  alternates: pageAlternates("/about", "ko"),
};

export default function Page() {
  return <AboutBody lang="ko" t={about.ko} />;
}
