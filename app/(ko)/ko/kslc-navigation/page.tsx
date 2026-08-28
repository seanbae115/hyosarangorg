import type { Metadata } from "next";
import KslcNavigationBody from "@/components/pages/KslcNavigationBody";
import kslcNavigation from "@/lib/content/kslcNavigation";

export const metadata: Metadata = {
  title: kslcNavigation.ko.metaTitle,
  description: kslcNavigation.ko.metaDescription,
};

export default function Page() {
  return <KslcNavigationBody lang="ko" t={kslcNavigation.ko} />;
}
