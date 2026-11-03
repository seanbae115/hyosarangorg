import type { Metadata } from "next";
import AboutBody from "@/components/pages/AboutBody";
import about from "@/lib/content/about";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: about.en.metaTitle,
  description: about.en.metaDescription,
  alternates: pageAlternates("/about", "en"),
};

export default function Page() {
  return <AboutBody lang="en" t={about.en} />;
}
