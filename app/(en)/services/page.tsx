import type { Metadata } from "next";
import ServicesBody from "@/components/pages/ServicesBody";
import services from "@/lib/content/services";

export const metadata: Metadata = {
  title: services.en.metaTitle,
  description: services.en.metaDescription,
};

export default function Page() {
  return <ServicesBody lang="en" t={services.en} />;
}
