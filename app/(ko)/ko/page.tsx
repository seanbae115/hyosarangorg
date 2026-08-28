import type { Metadata } from "next";
import HomeBody from "@/components/pages/HomeBody";
import home from "@/lib/content/home";

export const metadata: Metadata = {
  title: { absolute: home.ko.metaTitle },
  description: home.ko.metaDescription,
};

export default function Page() {
  return <HomeBody lang="ko" t={home.ko} />;
}
