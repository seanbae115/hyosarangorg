import type { Metadata } from "next";
import KslcNavigationBody from "@/components/pages/KslcNavigationBody";
import kslcNavigation from "@/lib/content/kslcNavigation";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: kslcNavigation.en.metaTitle,
  description: kslcNavigation.en.metaDescription,
  alternates: pageAlternates("/kslc-navigation", "en"),
};

export default function Page() {
  return <KslcNavigationBody lang="en" t={kslcNavigation.en} />;
}
