import type { Metadata } from "next";
import ServicesBody from "@/components/pages/ServicesBody";
import services from "@/lib/content/services";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: services.ko.metaTitle,
  description: services.ko.metaDescription,
  alternates: pageAlternates("/services", "ko"),
};

export default function Page() {
  return <ServicesBody lang="ko" t={services.ko} />;
}
