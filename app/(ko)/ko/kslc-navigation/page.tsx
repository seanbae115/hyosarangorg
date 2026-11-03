import type { Metadata } from "next";
import KslcNavigationBody from "@/components/pages/KslcNavigationBody";
import kslcNavigation from "@/lib/content/kslcNavigation";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: kslcNavigation.ko.metaTitle,
  description: kslcNavigation.ko.metaDescription,
  alternates: pageAlternates("/kslc-navigation", "ko"),
};

export default function Page() {
  return <KslcNavigationBody lang="ko" t={kslcNavigation.ko} />;
}
