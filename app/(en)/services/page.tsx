import type { Metadata } from "next";
import ServicesBody from "@/components/pages/ServicesBody";
import services from "@/lib/content/services";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: services.en.metaTitle,
  description: services.en.metaDescription,
  alternates: pageAlternates("/services", "en"),
};

export default function Page() {
  return <ServicesBody lang="en" t={services.en} />;
}
