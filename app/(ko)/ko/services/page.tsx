import type { Metadata } from "next";
import ServicesBody from "@/components/pages/ServicesBody";
import services from "@/lib/content/services";

export const metadata: Metadata = {
  title: services.ko.metaTitle,
  description: services.ko.metaDescription,
};

export default function Page() {
  return <ServicesBody lang="ko" t={services.ko} />;
}
