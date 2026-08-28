import type { Metadata } from "next";
import KslcNavigationBody from "@/components/pages/KslcNavigationBody";
import kslcNavigation from "@/lib/content/kslcNavigation";

export const metadata: Metadata = {
  title: kslcNavigation.en.metaTitle,
  description: kslcNavigation.en.metaDescription,
};

export default function Page() {
  return <KslcNavigationBody lang="en" t={kslcNavigation.en} />;
}
