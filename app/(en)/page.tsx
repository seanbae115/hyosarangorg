import type { Metadata } from "next";
import HomeBody from "@/components/pages/HomeBody";
import home from "@/lib/content/home";

export const metadata: Metadata = {
  title: { absolute: home.en.metaTitle },
  description: home.en.metaDescription,
};

export default function Page() {
  return <HomeBody lang="en" t={home.en} />;
}
